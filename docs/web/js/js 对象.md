Object.assign 是浅复制，对象元素只是复制地址，其改变时，其他对持有该对象的变量都会进行改变

Object.create 相对于 Object.assign 的优势在于使用的内存更少

Object.create(null) 会创建一个纯对象，没有任何继承属性

Object.keys 键名在数组中的顺序是按照插入时间排序的

Object.freeze 不是深度冻结，只有最顶层的元素会被冻结

利用 weakMap 进行封拆箱操作，提供安全的数据存取功能