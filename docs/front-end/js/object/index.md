# Object

## 函数
函数是一种特殊的对象，内部必须存在一个 `[[Call]]` 方法。
### 构造函数：
- `[[Construct]]`
- `[[Prototype]]` 包含 `constructor` 属性的简单对象
以 `构造函数` 创建的所有对象，都会共享 `构造函数prototype` 上面的属性。

### 箭头函数
`Function Environment Record` 的 `HasThisBinding()` 函数返回 false。
没有 `this`，不存在 `[[Construct]]`，***不能作为构造函数***，不能使用 `super`、`arguments`

### 异步函数
总是返回一个 Promise 对象，由 `AsyncFunction` 隐式创建，***不能作为构造函数***，不能使用 `super`。

### 生成器函数
总是返回一个 `迭代器(iterator)` 对象，由 `GeneratorFunction` 隐式创建，***不能作为构造函数***，不能使用 `super`。
生成器函数不可以用箭头函数的形式定义，但可以是异步的。

## 属性描述符
ECMAScript 对属性成员有两种格式定义：`数据属性（Data Property）`和`存取器属性（Accessor Property）`
1. Data Property：
  - `[[Enumerable]]`：
    可枚举，在 `for...in` 能否被遍历到
  - `[[Configurable]]`：
    可配置，默认为 false。如果其为 false
    - 不允许删除此属性
    - 不允许在数据属性和存储器属性之间交换
    - 不允许修改描述符的其他参数（但不包括修改 `value`，以及把 `writable` 设为 false）
  - `[[Value]]`：
  - `[[Writable]]`：
2. Accessor Property
  - `[[Enumerable]]`
  - `[[Configurable]]`
  - `[[Get]]`：
  - `[[Set]]`：

> 直接对象赋值，`[[Enumerable]]`、`[[Configurable]]`、`[[Writable]]`属性值默认 true，`Object.defineProperty()`默认 false
```ts
Object.setPrototypeOf() // => [[SetProtoTypeOf]]
Object.getPrototypeOf() // => [[SetProtoTypeOf]]，返回对象的 [[ProtoType]] 或者 __proto__（旧版本遗留）
Object.getOwnPropertyDescriptor()

```

## 原型链
当我们在一个对象上访问属性的时候，如果本身没有这个属性，那么就会尝试在其 `[[ProtoType]]` 对象上寻找，如果还是没找到，就继续向上查找 `[[ProtoType]]`，一直找到 `Object.prototype` 为止，它的 `[[ProtoType]]` 是 null。

用构造函数来创建对象时，对象的原型就会自动指向构造函数的 `prototype` 属性。

### instanceof
- 命中 [Symbol.hasInstance]
- `o instanceof F`，顺着 o 原型链查找，如果能找到 F.prototype，返回 true。

### 锁定对象
- Object.preventExtensions
  不可拓展，禁止给对象新增属性。`[[PreventExtensions]]` 将对象内部的 `[[Extensible]]` 标志位设成 false
- Object.seal
  1. 不能新增属性
  2. 所有现有属性都变成不可配置的
- Object.freeze
  1. 不能新增属性
  2. 所有属性都变成不可配置的
  3. 对于数据属性 writable 变成 false

### 对象合并

- Object.assign
  以 set 的方式赋值属性（PutValue）。如果原型对象上的属性类型是存取器类型，会调用其 set；如果是数据类型，会在目标对象上创建新的属性。
  ```js
  function assign(dest, src) {
    for (let key in src) {
      if (!src.hasOwnProperty(key)) continue
      dest[key] = src[key]
    }
  }
  ```

- 对象展开
  以 defineProperty 的方式在目标对象上定义属性
  ```js
  function spread(dest, src) {
    for (let key in src) {
      if (!src.hasOwnProperty(key)) continue
      Object.defineProperty(dest, key, {
        value: src[key],
        writable: true,
        enumerable: true,
        configurable: true,
      })
    }
  }
  ```

## 遍历对象

### 遍历对象自身数据 
`[[EnumerableOwnProperties]]` 只会遍历出对象自身的、可枚举的、***以字符串为键***的属性
  - Object.keys
  - Object.values
  - Object.entries

Object.getOwnPropertyNames 可以用来获取`[[OwnPropertyKeys]]`中的字符串键；
Object.getOwnPropertySymbols 可以用来获取 `[[OwnPropertyKeys]]`中的 Symbol 键；
`Reflect.ownKeys` 返回 `[[OwnPropertyKeys]]` 所有内容；
Object.getOwnPropertyDescriptors 返回 `[[OwnPropertyKeys]]` 的所有内容的属性描述符
### 遍历对象以及原型链的数据
`for ... in`: 遍历可枚举的字符串键属性
### 完全自定义遍历数据
`for ... of`，本质上是迭代器。
> 迭代器主要包含一个 next 函数，返回格式是 { value?: any; done?: boolean}
- 生成器函数返回
- 对象定义的 `Symbol.iterator` 是一个生成器
  > 之所以字符串、数组、Map、Set 都可以在 for...of 中使用，就是因为它们在原型上都定义了 [Symbol.iterator] 属性。
- 迭代器模拟，对象 `Symbol.iterator` 返回类迭代器对象

## 创建对象
如果一个函数对象存在 `[[Construct]]` 的内部方法，则它可以作为构造函数。
`[[Construct]]` 的大致实现：
1. 创建一个对象 P，原型链只想 Constructor.prototype
2. 生成一个上下文，this 指向刚创建的 P，new.target 指向 Constructor
>  new.target 只能在函数中使用，用来判断当前函数是否是通过 new 来调用的
3. 执行 Constructor 代码，如果返回一个对象，那么就作为构造函数的结果，否则将 P 作为构造函数的结果
