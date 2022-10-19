# BOM

## Window 对象

BOM 的核心是 window 对象，表示浏览器的实例。window 对象在浏览器中有两重身份，一个是 ECMAScript 中的 global 对象，另一个就是浏览器窗口的 javascript 接口。这意味着网页中定义的所有对象、变量和函数都以 window 作为其 Global 对象，都可以访问其上定义的 parseInt 的全局方法。

> 因为 window 对象的属性在全局作用域中有效，所以很多浏览器 API 及相关构造函数都以 window 对象属性的形式暴露出来。这些api将在全书各章中介绍，特别是 第20章。另外，由于实现不同，某些 window 对象的属性在不同的浏览器间可能差异较大。本章不会介绍已经废弃的、非标准化或特定于浏览器的window属性。

### Global 作用域

因为 window 对象被复用为 ECMAScript 的Global 对象，所以通过 var 声明的所有全局变量和函数都会变成 window 对象的属性和方法。比如：

```js
var age = 29
var sayAge = () => alert(this.age)

alert(window.age) // 29
sayAge()          // 29
window.sayAge()     // 29
```

这里，变量 age 和函数 sayAge 被定义在全局作用域中，他们自动成为了 window 对象的成员。因此，这里的 age 可以通过 window.age 来访问，而函数 sayAge 也可以通过 window.sayAge 来访问。因为 sayAge 存在于全局作用域，this.age 映射到 window.age ，所以就可以显示正确的结果了。

<strong style="color:#000fff">如果在这里使用 let 或 const 替代 var，则不会把变量添加到全局对象:</strong>

```js
let age = 29
let sayAge = () => alert(this.age)

alert(window.age) // undefined
sayAge()          // undefined
window.sayAge     // TypeError: window.sayAge is not a function
```

 另外，访问未声明的变量会抛出错误，但是可以在 window 对象上查询是否存在可能未声明的变量。比如：

```js
// 这回抛出错误，因为 oldValue 没有声明
var newValue = oldValue
// 属性查询不会抛出错误
var newValue = window.oldValue // undefined
```

记住，Javascript 中很多对象都暴露在全局作用域中，比如 location 和 navigator，因而他们也是 window 对象的属性。

### 窗口关系

top 对象始终指向最上层（最外层）窗口，即浏览器窗口本身。而 parent 对象则始终指向当前窗口的父窗口。如果当前窗口是最上层窗口，则 parent 等于 top（都等于 window）。最上层的 window 如果不是通过 window.open() 打开的，那么其 name 属性就不会包含其值。

还有一个 self 对象，它是终极 window 属性，始终会指向 window。实际上，self 和 window 就是同一个对象。之所以还要暴露 self，就是为了和 top、parent 保持一致。

这些属性都是window 对象的属性，因此访问 window.parent、window.top、window.self 都可以。这意味着可以把多个访问窗口的window 对象串起来，比如 window.parent.parent。

### 窗口关系与像素比

window 对象的位置可以通过不同的属性和方法来确定。现代浏览器提供了 screenLeft 和 screenTop 属性，用于表示窗口相对于屏幕左侧和顶部的位置，返回值是 CSS 像素。

可以使用 moveTo() 和 moveBy() 方法移动窗口。这两个方法都接受两个两个参数： 

- moveTo() 接受要移动到的新位置的绝对坐标 x 和 y；
- moveBy() 接受相对于当前位置在两个方向上移动的像素

```js
window.moveTo(0, 0)
window.moveBy(0, 100)
```

依浏览器而定，以上方法可能会被部分或全部禁用。

##### 像素比

CSS 像素是 WEB 开发中使用的统一像素单位。这个单位的背后其实是一个角度：0.0213°。如果屏幕距离人眼是一臂长，则以这个角度计算的 CSS 像素大小约为 1/96 英寸。这样定义像素大小是为了在不同设备上同意标准。比如，低分辨率平板设备上 12 像素（CSS 像素）的文字应该与高清 4K 屏幕下 12 像素的文字具有相同的大小。这就带来一个问题，不同像素密度的屏幕下就会有不同的缩放系数，以便把物理像素（屏幕实际的分辨率）转换为 CSS 像素（浏览器报告的虚拟分辨率）。

举个例子，手机屏幕的物理分辨率可能是 1920×1080，但因为其像素可能非常小，所以浏览器就需要将其分辨率降为较低的逻辑分辨率，比如 640×320。这个物理像素与 CSS 像素之间的转换比率由 window.devicePixelRatio 属性提供。对分辨率从 1920×1080 转换为 640×320的设备， window.devicePixelRatio 的值就是3.这样一来，12（CSS）像素的文字实际上就会用 36像素的物理像素来显示。

window.devicePixelRatio 实际上与每英寸像素数（DPI，dots per inch）是对应的。DPI 表示单位像素密度，而 window.devicePixelRatio 表示物理像素与逻辑像素之间的缩放系数。

### 窗口大小

在不同的浏览器中确定浏览器窗口大小没有想象中那么容易。所有现代浏览器都支持 4 个属性：

- innerWidth
- innerHeight
- outerWidth
- outerHeight

outerWidth、outerHeight 返回浏览器窗口自身的大小（不管在最外层 window 上使用，还是在窗格`<frame>`中使用）。

innerWidth、innerHeight 返回浏览器窗口中页面视口的大小（不包含浏览器边框和工具栏）。

document.documentElement.clientWidth 和 document.documentElement.clientHeight 返回页面视口的宽度和高度。

浏览器窗口自身的精确尺寸不好确定，但可以确定页面视口的大小，如下所示：

```js
let pageWidth = window.innerWidth
let pageHeight = window.innerHeight

if (typeof pageWidth != 'number') {
    if (document.compatMode == 'CSS1Compat') {
      pageWidth = document.documentElement.clientWidth
      pageHeight = document.documentElement.clientHeight
    } else {
      pageWidth = document.body.clientWidth
      pageHeight = document.body.clientHeight
    }
}
```



·