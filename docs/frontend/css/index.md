# CSS选择器以及优先级

参考网址： 
- [阮一峰 - CSS选择器笔记](http://www.ruanyifeng.com/blog/2009/03/css_selectors.html)

- [MDN - CSS selectors](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started/Selectors)

   
  
| 序号 |   选择器    | 含义                                           |
| :--- | :---------: | ---------------------------------------------- |
| 1.   |    *****    | 通用元素选择器，匹配任何元素                   |
| 2.   |    **E**    | 标签选择器，匹配所有使用E标签的元素            |
| 3.   |  **.info**  | class选择器，匹配所有class属性中包含info的元素 |
| 4.   | **#footer** | id选择器，匹配所有id属性等于footer的元素       |
| 5.   | E,F    | 多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔   |
| 6.   | E F    | **后代**元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔 |
| 7.   | E > F  | **子元素**选择器，匹配所有E元素的子元素F                     |
| 8.   | E + F  | 毗邻元素选择器，匹配所有紧随E元素之后的同级元素F             |

| 9.   | E[att]       | 匹配所有具有att属性的E元素，不考虑它的值。（注意：E在此处可以省略，比如"[cheacked]"。以下同。） |
| ---- | ------------ | ------------------------------------------------------------ |
| 10.  | E[att=val]   | 匹配所有att属性等于"val"的E元素                              |
| 11.  | E[att~=val]  | 匹配所有att属性具有多个空格分隔的值、其中一个值等于"val"的E元素 |
| 12.  | E[att\|=val] | 匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的E元素，主要用于lang属性，比如"en"、"en-us"、"en-gb"等等 |

| 13.  | E:first-child | 匹配父元素的第一个子元素                |
| ---- | ------------- | --------------------------------------- |
| 14.  | E:link        | 匹配所有未被点击的链接                  |
| 15.  | E:visited     | 匹配所有已被点击的链接                  |
| 16.  | E:active      | 匹配鼠标已经其上按下、还没有释放的E元素 |
| 17.  | E:hover       | 匹配鼠标悬停其上的E元素                 |
| 18.  | E:focus       | 匹配获得当前焦点的E元素                 |
| 19.  | E:lang(c)     | 匹配lang属性等于c的E元素                |

| 20.  | E:first-line   | 匹配E元素的第一行         |
| ---- | -------------- | ------------------------- |
| 21.  | E:first-letter | 匹配E元素的第一个字母     |
| 22.  | E:before       | 在E元素之前插入生成的内容 |
| 23.  | E:after        | 在E元素之后插入生成的内容 |

| 24.  | E ~ F | 匹配任何在E元素之后的同级F元素 |
| ---- | ----- | ------------------------------ |
|      |       |                                |

| 序号 | 选择器        | 含义                             |
| ---- | ------------- | -------------------------------- |
| 25.  | E[att^="val"] | 属性att的值以"val"开头的元素     |
| 26.  | E[att$="val"] | 属性att的值以"val"结尾的元素     |
| 27.  | E[att*="val"] | 属性att的值包含"val"字符串的元素 |