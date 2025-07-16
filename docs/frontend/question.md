# frontend

## vue

1.如果使用Vue3.0实现一个 Modal，你会怎么进行设计?
2.Vue 3.0中Treeshaking特性是什么，并举例进行说明?
3.Vue3.0性能提升主要是通过哪几方面体现的?
4.Vue3.0的设计目标是什么?做了哪些优化?
5.你是怎么处理vue项目中的错误的?

```js
// 指令
app.directive('', {mounted(el, binding) {}})
// 全局属性
app.config.globalProperties['$toast'] = (message) => {}
// 错误处理
app.config.errorHandler
// 组件内 errorCaptured 钩子
errorCaptured
```

6.Vue项目中如何解决跨域问题?
7.Vue怎么实现权限管理?控制到按钮级别的权限怎么做?
8.大型项目中，Vue项目怎么划分结构和划分组件比较合理呢?
9.Vue项目中有封装过axios吗?怎么封装的?
10.说说vue中的diff算法
11.什么是虚拟DOM?如何实现一个虚拟DOM?说说你的思路
12.说说你对Vue中 keep-alive 的理解
13.说说你对slot的理解?slot使用场景有哪些?
14.说说你对vue的mixin的理解，以及有哪些应用场景?
15.Vue中的$nextTick有什么作用?
16.Vue组件间通信方式都有哪些?
17.Vue中组件和插件有什么区别?
18.为什么Vue中的data属性是一个函数而不是一个对象?
19.说说你对Vue生命周期的理解

## React

1.说说对受控组件和非受控组件的理解，以及应用场景?
2.你在React项目中是如何使用Redux的?项目结构是如何划分的?
3.说说对Redux中间件的理解?常用的中间件有哪些?实现原理?
4.说说你对Redux的理解?其工作原理?
5.说说你对immutable的理解?如何应用在react项目中?
6.说说React Jsx转换成真实DOM过程?
7.说说你在React项目是如何捕获错误的?

```js
useErrorBoundary hook
window.addEventListener('unhandledrejection', (event) => {
    console.error('捕获到未处理的Promise拒绝错误:', event.reason);
});
```

8.说说React服务端渲染怎么做?原理是什么?
9.React Fiber是如何实现更新过程可控?
10.Fiber 为什么是 React 性能的一个飞跃?
11.setState 是同步，还是异步的?
12.简述下 React 的事件代理机制?
13.简述下 React 的生命周期?每个生命周期都做了什么?
14.为什么不能在循环、条件或嵌套函数中调用 Hooks?
15.如何让 useEffect 支持 async/await?
16.我们应该在什么场景下使用 useMemo和 useCallback?
17.说说你对 React Hook的闭包陷阱的理解，有哪些解决方案?
18.React中，怎么实现父组件调用子组件中的方法?
19.你常用的 React Hooks 有哪些?
20.为什么 react 需要 fiber 架构，而 Vue 却不需要?

```js
const MyComponent = lazy(() => import('./MyComponent'))
<Suspense fallback={<div>Loading...</div>}> 
  <MyComponent />
</Suspense>
```

## 工程化

1.webpack5 的主要升级点有哪些?
2.说下vite的原理
3.与webpack类似的工具还有哪些?区别?
4.说说如何借助webpack来优化前端性能?
5.说说webpack proxy工作原埋?为什么能解决跨域?
6.说说webpack的热更新是如何做到的?原理是什么?
7.说说webpack的构建流程?
8.说说你对webpack的理解?解决了什么问题?
9.webpack loader和 plugin 实现原埋
10.如何提高webpack的构建速度?
11.说说 webpack-dev-server 的原埋
12.你对 babel了解吗，能不能说说几个 stage 代表什么意思?
13.webpack的module、bundle、chunk分别指的是什么?
14.说说你对前端工程化的理解
15.说说你对 SSG 的理解
16.聊聊 vite 和webpack 的区别
17.如何提高webpack的打包速度
18.如何用webpack来优化前端性能
19.webpack的Loader和Plugin的不同

## http

1.简单描述从输入网址到页面显示的过程
2.说说WebSocket和HTTP的区别
3.说说 https 的握手过程
4.HTTP2中，多路复用的原理是什么?
5.说说你对“三次握手"、“四次挥手”的理解
6.为什么推荐将静态资源放到cdn上?
7.什么是DNS劫持?
8.HTTP 报文结构是怎样的?
9.HTTPS 为什么是安全的?
10.Axios的原理是什么?
11.说说对 HTTP3 的了解
12.跨域时怎么处理 cookie?
13.POST请求的 Content-Type 常见的有哪几种?
14.Blob，ArrayBuffer，Base64分别有哪些使用场景?
15.Blob, ArrayBuffer, Base64 有什么区别?
16.TCP 和 UDP的区别是什么?
17.Http 3.0 是基于 udp 的，那么它是如何保证传输可靠性的?
18.说下 websocket 的连接原理
19.https是如何保证安全的，又是如何保证不被中间人攻击的?
