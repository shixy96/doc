let activeEffect
const targetMap = new WeakMap()

function track(target, key) {
  if (!activeEffect) {
    return
  }
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  if (!deps.has(activeEffect)) {
    deps.add(activeEffect)
  }
  activeEffect.deps.push(deps)
  console.log(
    'track',
    key,
    activeEffect.message,
    activeEffect.deps.length,
    deps.size
  )
}
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  const deps = depsMap.get(key)
  if (!deps) {
    return
  }
  const effectsToRun = new Set()
  deps && deps.forEach(effect => {
    if (effect !== activeEffect) {
      effectsToRun.add(effect)
    }
  })
  effectsToRun.forEach(effect => {
    if (effect.options.scheduler) {
      effect.options.scheduler(effect)
    } else {
      effect()
    }
    console.log('trigger', key, effect.message)
  })
}
function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      if (Reflect.get(target, key, receiver) === value) {
        return true
      }
      console.log('set', key, value)
      const res = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return res
    },
  }
  return new Proxy(target, handler)
}

const effectStack = []
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn, fn.name)
    activeEffect = effectFn
    effectStack.push(effectFn)
    const res = fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
    return res
  }
  effectFn.deps = []
  effectFn.options = options
  effectFn.message = fn.name
  !options.lazy && effectFn()
  return effectFn
}

const cleanup = (effectFn, message) => {
  for (const deps of effectFn.deps) {
    console.log('[cleanup]: ', message, deps.delete(effectFn), deps.size)
  }
  effectFn.deps.length = 0
}

// -------------------------------------------------------------------------------------------------
let ct = ''
let temp1, temp2
const data = reactive({
  ok: false,
  text: 'hello',
  fn1txt: 'fn1txt',
  fn2txt: 'fn2txt',
  count: 0,
})
effect(function fn1() {
  console.log('fn1 effect')

  effect(function fn2() {
    console.log('fn2 effect')
    temp2 = data.fn2txt
  })

  temp1 = data.fn1txt
})
effect(() => data.count++)


console.log('-----')
// data.text = 'world'
// data.ok = false
data.fn1txt = 'lua'
data.fn2txt = 'yy'
data.fn1txt = 'cc'
data.fn2txt = 'bb'
