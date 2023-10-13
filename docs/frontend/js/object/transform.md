# 类型转换 

## ToString
1. 遍历 `Primitive` 类型：
- String：直接返回
- Symbol：抛出异常
- Undefined：返回 undefined
- Null：返回 null
- Boolean：返回 true 或 false
- Number ｜ BigInt：转换成 10 进制表示形式
2. 非 Primitive 类型，调用 `ToPrimitive(input[, preferredType])`，preferredType 为 string

## ToPrimitive
> preferredType: number | string
1. 尝试读取对象的 [Symbol.toPrimitive] 方法，必须返回一个 Primitive 对象
2. OrdinaryToPrimitive(Obj, preferredType)，必须返回一个 Primitive 对象
  - 如果 preferredType 等于 `string`，依次调用对象的 toString 和 valueOf 方法（toString 存在就不会调用 valueOf）
  - 如果 preferredType 等于 `number`，依次调用对象的 valueOf 和 toString 方法（valueOf 存在就不会调用 toString）

## Object.prototype.toString
1. 如果对象定义了 `Symbol.toStringTag`，返回 `[object ${tag}]`
2. 根据类型不同，返回 `[object Undefined/Null/Array/Function/Error/Boolean/Number/String/Date/RegExp/Object/Arguments]`

## String(val)
1. Symbol：调用 `SymbolDescriptiveString`，返回类似 `Symbol(xx)` 的格式
2. 其他类型，走 ToString

## 加法
1. ToPrimitive。如果定义了 `[Symbol.toPrimitive]`，preferredType 就是 default；如果没有定义，preferredType 默认就是 number
2. 判断运算符前后的两个变量（ primitive 类型）中有没有 string 类型，如果有则属于字符串拼接，把变量传入 *ToString*；如果都不是 string，就转换为数字，调用 `To Numeric`


## [相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
### [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal)
可以理解为就是符号 `==`。
- 判断类型是否相同，相同则到 `IsStrictlyEqual`
- 变量都为 null、undefined、document.all 中的一个，返回 true
- 一边为 string，一边为 number，string 传入 `toNumber`，再和另一边传入 `IsLooselyEqual`
- 一方为 boolean，转成数字，再和另一边传入 `IsLooselyEqual`
- 只有一方为 Object，用 `ToPrimitive` 转换之后，再和另一边传入 `IsLooselyEqual`
- 双方都是 Object，到 `IsStrictlyEqual`
- 双方分别是 Number 和 BigInt，比较两者的数值大小

1. Object 在比较的时候，总会转换成 Primitive
2. Boolean 在比较的时候，总会转成 Number
3. Symbol 在比较的时候总会返回 false

### [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal)
可以理解为就是符号 `===`
`Array.prototype.indexOf`
### [SameValue](https://tc39.es/ecma262/#sec-samevalue)
Object.is()
### [SameValueZero](https://tc39.es/ecma262/#sec-samevaluezero)
支持 NaN 的判断，被许多内置运算使用
`Array.prototype.includes`
