# 相应系统的作用与实现

- 当读取操作发生时，将副作用函数收集到桶中
- 当设置操作发生时，从桶中取出副作用函数并执行

注意点
- 分支切换（依赖清理）
  ```js
  effect(() => a ? b : c)
  ```
- 嵌套（当前依赖作用域）
  ```js
  effect(() => {
    effect(() => fn())
  })
  ```
- 无限递归循环
  ```js
  effect(() => a++)
  ```
- 支持调度器，自定义副作用执行（lazy，scheduler）
  - computed
  - watch

## 注册副作用函数的机制

### 收集依赖

[Reflect.get(target, propertyKey, receiver)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

track

### 触发依赖

[Reflect.set(target, propertyKey, value, receiver)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)

1. 收集所有的 effect （依赖）
2. 使用的是 add 函数来添加
3. 调用所有的 effect
4. 调用 run 函数来处理