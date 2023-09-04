import{_ as e,c as s,o as t,b as r}from"./app.2904d35e.js";const a="/assets/script-async1.6fc90ee1.webp",c="/assets/script-async2.d790cdb4.webp",n="/assets/script-async3.d216cddd.png",T=JSON.parse('{"title":"script","description":"","frontmatter":{},"headers":[{"level":2,"title":"async","slug":"async","link":"#async","children":[]},{"level":2,"title":"defer","slug":"defer","link":"#defer","children":[]}],"relativePath":"front-end/js/script.md","lastUpdated":null}'),i={name:"front-end/js/script.md"},d=r('<h1 id="script" tabindex="-1">script <a class="header-anchor" href="#script" aria-hidden="true">#</a></h1><p>\u6D4F\u89C8\u5668\u5728\u89E3\u6790 HTML \u7684\u65F6\u5019\uFF0C\u5982\u679C\u9047\u5230\u4E00\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u7684 script \u6807\u7B7E\uFF0C\u5C31\u4F1A\u6682\u505C\u89E3\u6790\uFF0C\u5148\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u83B7\u53D6\u8BE5 JS \u811A\u672C\u7684\u4EE3\u7801\u5185\u5BB9\uFF0C\u7136\u540E\u8BA9 JS \u5F15\u64CE\u6267\u884C\u8BE5\u4EE3\u7801\uFF0C\u5F53\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\u6062\u590D\u89E3\u6790\u3002 script \u963B\u585E\u4E86\u6D4F\u89C8\u5668\u5BF9 HTML \u7684\u89E3\u6790\uFF0C\u5982\u679C\u83B7\u53D6 JS \u811A\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u8FDF\u8FDF\u5F97\u4E0D\u5230\u54CD\u5E94\uFF0C\u6216\u8005 JS \u811A\u672C\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u767D\u5C4F\uFF0C\u7528\u6237\u770B\u4E0D\u5230\u9875\u9762\u5185\u5BB9\u3002</p><h2 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-hidden="true">#</a></h2><p>\u5F53\u6D4F\u89C8\u5668\u9047\u5230\u5E26\u6709 async \u5C5E\u6027\u7684 script \u65F6\uFF0C\u8BF7\u6C42\u8BE5\u811A\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u662F<em><strong>\u5F02\u6B65</strong></em>\u7684\uFF0C\u4E0D\u4F1A\u963B\u585E\u6D4F\u89C8\u5668\u89E3\u6790 HTML\uFF0C\u4E00\u65E6\u7F51\u7EDC\u8BF7\u6C42\u56DE\u6765\u4E4B\u540E\uFF0C\u5982\u679C\u6B64\u65F6 HTML \u8FD8\u6CA1\u6709\u89E3\u6790\u5B8C\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6682\u505C\u89E3\u6790\uFF0C\u5148\u8BA9 JS \u5F15\u64CE\u6267\u884C\u4EE3\u7801\uFF0C\u6267\u884C\u5B8C\u6BD5\u540E\u518D\u8FDB\u884C\u89E3\u6790\uFF0C\u56FE\u793A\u5982\u4E0B\uFF1A <img src="'+a+'" style="zoom:60%;"></p><p>\u5982\u679C\u5728 JS \u811A\u672C\u8BF7\u6C42\u56DE\u6765\u4E4B\u524D\uFF0CHTML \u5DF2\u7ECF\u89E3\u6790\u5B8C\u6BD5\u4E86\uFF0C\u90A3\u5C31\u7ACB\u5373\u6267\u884C JS \u4EE3\u7801\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A <img src="'+c+'" style="zoom:60%;"></p><p>async \u662F\u4E0D\u53EF\u63A7\u7684\uFF0C\u56E0\u4E3A\u6267\u884C\u65F6\u95F4\u4E0D\u786E\u5B9A\uFF0C\u4F60\u5982\u679C\u5728\u5F02\u6B65 JS \u811A\u672C\u4E2D\u83B7\u53D6\u67D0\u4E2A DOM \u5143\u7D20\uFF0C\u6709\u53EF\u80FD\u83B7\u53D6\u5230\u4E5F\u6709\u53EF\u80FD\u83B7\u53D6\u4E0D\u5230\u3002\u800C\u4E14\u5982\u679C\u5B58\u5728\u591A\u4E2A async \u7684\u65F6\u5019\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u6267\u884C\u987A\u5E8F\u4E5F\u4E0D\u786E\u5B9A\uFF0C\u5B8C\u5168\u4F9D\u8D56\u4E8E\u7F51\u7EDC\u4F20\u8F93\u7ED3\u679C\uFF0C\u8C01\u5148\u5230\u6267\u884C\u8C01\u3002</p><h2 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-hidden="true">#</a></h2><p>\u5F53\u6D4F\u89C8\u5668\u9047\u5230\u5E26\u6709 defer \u5C5E\u6027\u7684 script \u65F6\uFF0C\u83B7\u53D6\u8BE5\u811A\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u4E5F\u662F\u5F02\u6B65\u7684\uFF0C<em><strong>\u4E0D\u4F1A\u963B\u585E</strong></em>\u6D4F\u89C8\u5668\u89E3\u6790 HTML\uFF0C\u4E00\u65E6\u7F51\u7EDC\u8BF7\u6C42\u56DE\u6765\u4E4B\u540E\uFF0C\u5982\u679C\u6B64\u65F6 HTML \u8FD8\u6CA1\u6709\u89E3\u6790\u5B8C\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u6682\u505C\u89E3\u6790\u5E76\u6267\u884C JS \u4EE3\u7801\uFF0C\u800C\u662F\u7B49\u5F85 HTML \u89E3\u6790\u5B8C\u6BD5\u518D\u6267\u884C JS \u4EE3\u7801\uFF0C\u56FE\u793A\u5982\u4E0B\uFF1A <img src="'+n+'" style="zoom:60%;"> \u5982\u679C\u5B58\u5728\u591A\u4E2A defer script \u6807\u7B7E\uFF0C\u6D4F\u89C8\u5668\uFF08IE9\u53CA\u4EE5\u4E0B\u9664\u5916\uFF09\u4F1A\u4FDD\u8BC1\u5B83\u4EEC\u6309\u7167\u5728 HTML \u4E2D\u51FA\u73B0\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u4E0D\u4F1A\u7834\u574F JS \u811A\u672C\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</p>',8),o=[d];function p(_,l,h,f,m,S){return t(),s("div",null,o)}const J=e(i,[["render",p]]);export{T as __pageData,J as default};
