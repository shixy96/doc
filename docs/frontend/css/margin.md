# Margin

## 外边距折叠
区块的上下边距有时会合并折叠为单个边距，其大小为两个边距中的绝对值最大值的值。如果包含负值，折叠后的外边距为最大值的正边距和最小的负边距的和。
> 外边距折叠仅与垂直方向有关。有设定浮动和绝对定位的元素不会发生外边距折叠。display 为 flex 或者 grid 的容器中不会发生外边距折叠。

### 形成场景：

- 相邻的兄弟元素
- 没有内容将父元素和后代元素分开
  - 没有设定border、padding、inline内容，也没用创建[区块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 或 [间隙](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 来分隔块级元素的上边距与其内一个或多个子代快元素的上边距
  - 没有设定 border、padding、inline内容、height、min-height 来分隔块级元素的下边距与其内一个或多个子代块元素的下边距

#### 空的区块
  块级元素没有设定 border、padding、inline内容、height、min-height 来分隔块级元素的下边距与其内一个或多个子代块元素的下边距
