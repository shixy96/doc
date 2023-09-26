```js
const isObj = val => val && typeof val === 'object'
function deepFreeze(obj) {
  if (isObj(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach(key => deepFreeze(obj[key]))
    Object.freeze(obj)
  }
  return obj
}
```