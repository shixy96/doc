# Grid

## [基本概念](https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

container，item，row、column、cell，grid line

## 容器属性

```css
display: grid;
display: inline-grid;

grid-template-columns: 100px 100px;
/* repeat 第一个参数是重复的次数，第二个参数是所要重复的值 */
grid-template-columns: repeat(3, 100px);
/* fr 表示fraction，fraction表示占剩余空间的比例，fraction的宽度会根据剩余空间进行分配 */
grid-template-columns: repeat(3, 1fr);
grid-template-columns: 150px 1fr 2fr;
grid-template-columns: 1fr 2fr minmax(100px, 1fr);
/* 自动填充 */
grid-template-columns: repeat(auto-fill, 100px);
/* 自动填充，会根据内容进行扩大填充 */
grid-template-columns: repeat(auto-fit, 100px);
grid-template-rows: 100px 100px;
/* 命名行网格线名称 */
grid-template-rows: [r1] 100px [r2] 100px;

/* 自动填充行列 */
grid-auto-rows: 100px;
grid-auto-columns: 100px;

/* 间隔 */
grid-row-gap: 10px;
grid-column-gap: 20px;
grid-gap: 10px 20px;
row-gap: 10px;
column-gap: 20px;
gap: 10px 20px;

/* 排列方式 */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* item 对齐方式 */
align-items: end;
justify-items: start | end | center | stretch;
place-items: start center;

/* container 对齐方式 */
align-content: start | end | center | stretch | space-around | space-between;
justify-content: start | end | center | stretch | space-around | space-between;
place-content: start center;
```

> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

## 项目属性

```css
/* 位置 */
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 2;
/* 位置-网格线名称 */
grid-row-start: header-start;
/* 位置-横跨 */
grid-row-start: span 2;

justify-self: start;
align-self: start;
place-self: start;
```
