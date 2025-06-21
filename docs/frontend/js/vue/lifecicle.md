# vue 生命周期

## 加载渲染过程

父组件 beforeCreate：父组件实例刚刚被创建，此时组件的 data 和 methods 等还未初始化。
父组件 created：父组件实例创建完成，data 和 methods 已初始化，可以访问数据和调用方法，但此时组件还未挂载到 DOM。
父组件 beforeMount：在挂载开始之前被调用，相关的 render 函数首次被调用，虚拟 DOM 已创建，但真实 DOM 还未插入文档。
子组件 beforeCreate：子组件实例开始创建，同父组件此阶段一样，组件的 data 和 methods 等还未初始化。
子组件 created：子组件实例创建完成，data 和 methods 已初始化。
子组件 beforeMount：子组件挂载开始之前被调用，子组件的虚拟 DOM 已创建。
子组件 mounted：子组件挂载到真实 DOM 上，此时子组件可以操作 DOM。
父组件 mounted：父组件挂载到真实 DOM 上，此时父组件可以操作 DOM，整个父子组件的挂载过程完成。

## 更新过程

父组件 beforeUpdate：当父组件数据发生变化，更新开始之前被调用，此时 DOM 还未更新。
子组件 beforeUpdate：当子组件接收到来自父组件的更新（如 props 变化），或子组件自身数据变化，更新开始之前被调用。
子组件 updated：子组件的 DOM 更新完成后被调用。
父组件 updated：父组件的 DOM 更新完成后被调用。

## 销毁过程

父组件 beforeDestroy：当父组件实例销毁之前被调用，此时实例仍然完全可用。
子组件 beforeDestroy：当子组件实例销毁之前被调用，子组件实例仍然完全可用。
子组件 destroyed：子组件实例销毁后被调用，此时子组件的所有指令都被解绑，所有的事件监听器被移除，所有的子组件实例也都被销毁。
父组件 destroyed：父组件实例销毁后被调用，此时父组件的所有指令都被解绑，所有的事件监听器被移除。
