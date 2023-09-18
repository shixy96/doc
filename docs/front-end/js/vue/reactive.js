import { track } from './effect'

export function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      if (Reflect.get(target, key, receiver) === value) {
        return true
      }
      const res = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return res
    },
  })
}

export function computed(getter) {
  let value
  let dirty = false
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      dirty = true
      trigger(obj, 'value')
    },
  })

  const obj = {
    value: {
      get() {
        if (dirty) {
          value = effectFn()
          dirty = false
        }
        // 外围调用放的 activeEffect
        track(obj, 'value')
        return value
      },
    },
  }
  return obj
}

function traverse(value, seen = new Set()) {
  if (typeof value !== 'object' || value == null || seen.has(value)) {
    return
  }
  seen.add(value)
  for (let key in value) {
    traverse(value[key], seen)
  }
  return value
}
export function watch(
  source,
  cb,
  options = { immediate: false, flush: 'sync' }
) {
  const getter = typeof source === 'function' ? source : traverse(source)
  let oldValue, newValue, cleanup
  const onInvalidate = fn => {
    cleanup = fn
  }
  const job = () => {
    newValue = effectFn()
    cleanup && cleanup()
    cb(newValue, oldValue, onInvalidate)
    oldValue = newValue
  }
  const effectFn = effect(() => getter, {
    lazy: true,
    scheduler: () => {
      if (options.flush === 'post') {
        Promise.resolve().then(job)
      } else {
        job()
      }
    },
  })
  if (options.immediate) {
    job()
  } else {
    oldValue = effectFn()
  }
}
