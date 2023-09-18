const targetMap = new WeakMap()
let activeEffect

export function track(target, key) {
  if (!activeEffect) return
  const depsMap = targetMap.get(target)
  !depsMap && targetMap.set(target, (depsMap = new Map()))
  const deps = depsMap.get(key)
  !deps && depsMap.set(key, (deps = new Set()))
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
}

export function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  if (!deps) return
  const depsToRun = new Set()
  deps.forEach(dep => {
    if (dep !== activeEffect) {
      depsToRun.add(dep)
    }
  })
  depsToRun.forEach(effect => {
    if (effect.options.scheduler) {
      effect.options.scheduler(effect)
    } else {
      effect()
    }
  })
}

function cleanup(effectFn) {
  for (const deps of effectFn.deps) {
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0
}

const effectStack = []
export function effect(fn, options = { lazy: false }) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(activeEffect)
    const res = fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
    return res
  }
  effectFn.deps = []
  effectFn.options = options
  !options.lazy && effectFn()
  return effectFn
}
