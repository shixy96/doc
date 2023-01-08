### 收集依赖

[Reflect.get(target, propertyKey, receiver)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

track

### 触发依赖

[Reflect.set(target, propertyKey, value, receiver)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)

1. 收集所有的 effect （依赖）
2. 使用的是 add 函数来添加
3. 调用所有的 effect
4. 调用 run 函数来处理