# Magic css

## [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
> overscroll-behavior-x, overscroll-behavior-y
```css
overscroll-behavior: auto;   /* 默认 */
overscroll-behavior: contain /* 临近的滚动区域不会被滚动链影响到，保持默认的滚动到边界的表现 */;
overscroll-behavior: none;   /* 临近滚动区域不受到滚动链影响，而且默认的滚动到边界的表现也被阻止。 */
```

## [counter](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
> 计数器只能在可以生成盒子的元素中使用（设置或重设值、递增），如果一个元素被设置为了 display: none，那么在这个元素上的任何计数器操作都会被忽略。
### [counter-reset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset)
```css
counter-reset: counter-name -1; /* 默认 0 */
/* 可以重置多个计数器 */
counter-reset: chapter section 1 page;
```
### [counter-increment](https://developer.mozilla.org/zh-CN/docs/web/css/counter-increment)
```css
counter-increment: counter-name; /* 默认1 */
counter-increment: counter-name -1;
counter-increment: counter 1 counter2 -4;
```
