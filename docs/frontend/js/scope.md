# 作用域

## 环境记录（Environment Record）
每一个 Environment Record 都有一个 `OuterEnv` 的属性，指向另一个  Environment Record 实例；有 `HasThisBinding` 和 `GetThisBinding` 函数，进行 this 查找（`GetThisBinding` 需要子类自定义）。

### Declarative Environment Record
`HasThisBinding` 始终返回 false。

#### Function Environment Record
- 箭头函数
  `HasThisBinding` 返回 false
- 其他函数
  `HasThisBinding` 返回 true

#### Module Environment Record
`OuterEnv` 总是 Global Environment Record。`HasThisBinding` 始终为 true，***`GetThisBinding` 始终返回 undefined***

### Object Environment Record
包括 with。
### Global Environment Record
`OuterEnv` 总是 null；`HasThisBinding` 始终返回 true；`GetThisBinding` 浏览器中返回 globalThis，nodejs 中返回 global。

## 闭包

## this
