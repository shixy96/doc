# Web

## 浏览器从 Url 到可交互页面
[from-url-to-interactive](https://alistapart.com/article/from-url-to-interactive/)
### HSTS
如果是 http 请求，检查 [HSTS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) 列表(HTTP Strict Transport Security) 中是否存在该 host，存在则跳转 https 请求

### service worker
检查处理 service worker

### 查找缓存
[HTTP缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
  1. 强缓存
  一般是由 [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) 控制，一下为常用设置
  - max-age：用来设置资源可以被缓存多长时间，单位为秒；
  - public：指示响应可被任何缓存区缓存（包括代理服务器）；
  - private：只能针对个人用户，而不能被代理服务器缓存；
  - no-cache：每次请求都必须向服务器发送。服务器接收到请求，然后判断资源是否变更，是则返回新内容；否则返回304，未变更，浏览器直接使用缓存资源。
  - no-store：禁止一切缓存。

  2. 协商缓存
  Last-Modifed/If-Modified-Since和Etag/If-None-Match是分别成对出现的，呈一一对应关系。
  - [**Last-Modifed/If-Modified-Since**](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified): 当资源过期时，发现响应头具有`Last-Modified`声明，则再次向服务器请求时带上头 `if-modified-since`(值是`Last-Modified`) ，表示请求时间（单位秒）。服务器收到请求后发现有 `if-modified-since` 则与被请求资源的 `Last-Modified` 进行比较决定返回200或304。
  - [**Etag/If-None-Match**](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Etag): 当资源过期时，浏览器发现响应头里有`Etag`，则再次像服务器请求时带上请求头`if-none-match`(值是`Etag`)。服务器收到请求进行比对，决定返回200或304。

### 检查、建立连接
如果之前已经为当前主机和端口建立过连接，会重用该连接；
如果没有，则进行 DNS 寻址（DNS Lookup，本地 DNS 缓存 -> 远程 DNS 服务器）拿到 ip 地址。
ip:port 与服务器进行连接，并进行 `ssl` 加密。
#### [preload/prefetch/preconnect](https://juejin.cn/post/6915204591730556935)
- preload 用于提前加载当前页面的资源（不执行），提升了资源加载的优先级。
- prefetch 则是用于加载未来（比如下一个页面）会用到的资源，并且告诉浏览器在空闲的时候去下载，它会将下载资源的优先级降到最低。
- preconnect/dns-preconnect 预连接（并行连接）能有效减少建立连接带来的性能损耗。

### HTML解析
> html -> dom树 -> DOMContentLoaded Event

当遇到 script 标签时，html parser 唤起 scripting engine，等待js引擎执行完成后继续解析。

当遇到 css 时，html parser 唤起 css parser，等待 css parser 解析完成后继续解析。

#### script
js引擎将js代码解析成 `AST` 后，根据 `AST` 生成用于虚拟机的字节码。

生成AST的过程是JavaScript引擎中比较简单的方面之一，但它也可能很慢。在用户开始与网站交互之前，JavaScript引擎必须解析并构建整个 bundle 的语法树。大部分代码对于初始页面加载来说可能是不必要的，有些甚至可能根本无法执行。

幸运的是，我们的编译器工程师发明了各种各样的技巧来加快速度。首先，一些引擎在后台线程上解析代码，从而释放主UI线程用于其他计算。其次，现代引擎将通过使用一种称为延迟解析或延迟编译的技术，尽可能长时间地延迟内存中语法树的创建。它的工作原理是这样的：如果引擎看到一个可能在一段时间内不会执行的函数定义，它将对函数体执行快速的“一次性”解析。这种一次性解析会发现任何可能潜伏在代码中的语法错误，但不会生成AST。稍后，当第一次调用该函数时，将再次解析代码。这一次，引擎将生成执行所需的完整AST和字节码。一些JavaScript引擎会尝试缓存生成的字节码，通过 JIT 提高效率（通过将热代码编译成机器码）。


#### css
> css -> 

当文档中的 css 全部解析完成后，就可以进行样式计算了，计算完成后，所有的尺寸值都会变成三种值：**`auto`**、**百分比**、**像素值**

##### 层叠 css 计算规则 （[official specification](https://www.w3.org/TR/css-cascade-4/#cascading)）

1. 首先，根据 css 来源排序：
- user - 用户通过浏览器设置的用户代理样式
- author - web 开发者设置的样式
- user agent - 浏览器默认的用户代理样式

2. 其次，计算权值：`!important` `style attribute` `id` `class, pseudo-class, attribute` `element`。

3. 最后，根据在文档中出现的顺序排序，后出现的优先级高

##### CSS Object Model ([CSSOM](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model))
cssom 存放在 document.styleSheets 中（getComputedStyle() 重复了以上计算过程）。
> CSS2.1 重新定义了 computed values 为布局前的值，used values 布局后的值。布局前与布局后的区别是，width 或者 height 的 百分比可以代表元素的宽度，在布局后会被像素值替换。

##### LAYOUT
在 box tree 中确定每个 box 的大小和位置，为 painting 做准备（尺寸值中所有为 auto 或者百分比的值确定为像素值）。

几个重要的概念：
- 格式化上下文(Formatting context): block, flex, grid, table-cells, and inline；position: absolute, float, multi-column；
- 包含块(Containing block)
- 內联方向(Inline direction)
- 块方向(Block direction)

##### [PAINTING](https://www.w3.org/TR/CSS22/zindex.html#painting-order)
> background -> border -> content
##### COMPOSITION
创建图层，将 painting 得到的 bitmap 渲染到屏幕上。
尽可能将动画渲染在单独的图层上，这样只需要重复 compose 的步骤而不用回到 painting 的步骤

## CORS
> 跨源资源共享是一种基于 HTTP 头的机制，允许服务器标识除了它自己以外的其他源，使得浏览器允许这些源加载访问自己的资源。

对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨源请求。简单请求不需要发送 options 预检，但是服务器必须返回 Access-Control-Allow-Origin 响应头。

简单请求：
- GET/POST/HEAD
- Content-Type 仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded
- XMLHttpRequest.upload 对象属性上没有注册任何事件监听器
- 请求中没有使用 ReadableStream 对象。
