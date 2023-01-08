import{_ as s,c as a,o as n,b as o}from"./app.0be6fbf7.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/js/promise.md","lastUpdated":1673183115000}'),e={name:"front-end/js/promise.md"},p=o(`<h4 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-hidden="true">#</a></h4><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF" target="_blank" rel="noreferrer">\u5E38\u89C1\u9519\u8BEF</a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">doSomething</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">doSomethingElse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">newResult</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doThirdThing</span><span style="color:#A6ACCD;">(newResult))</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doFourthThing</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(error))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><a href="https://developers.google.com/web/fundamentals/primers/async-functions" target="_blank" rel="noreferrer">\u5F02\u6B65\u51FD\u6570 - \u63D0\u9AD8 Promise \u7684\u6613\u7528\u6027</a></p><p><a href="https://blog.pusher.com/promises-async-await/" target="_blank" rel="noreferrer">From JavaScript Promises to Async/Await: why bother?</a></p>`,5),l=[p];function r(t,c,A,y,F,i){return n(),a("div",null,l)}const d=s(e,[["render",r]]);export{C as __pageData,d as default};
