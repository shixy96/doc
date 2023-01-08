import{_ as t,c as s,o as a,b as n}from"./app.0be6fbf7.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/database/elasticsearch/\u6587\u6863CRUD.md","lastUpdated":1673183115000}'),l={name:"server/database/elasticsearch/\u6587\u6863CRUD.md"},e=n(`<ul><li>\u666E\u901Aapi</li></ul><table><thead><tr><th>CRUD</th><th>api</th></tr></thead><tbody><tr><td>Index</td><td>PUT my_index/_doc/1</td></tr><tr><td>Create</td><td>PUT my_index/_create/1 \u6307\u5B9Aid</td></tr><tr><td>Create</td><td>POST my_index/_doc \u81EA\u589Eid</td></tr><tr><td>Read</td><td>GET my_index/_doc/1</td></tr><tr><td>Update</td><td>POST my_index/_update/1</td></tr><tr><td>Delete</td><td>DELETE my_index/_doc/1</td></tr></tbody></table><p>\u200B - Type \u540D\uFF0C\u7EA6\u5B9A\u90FD\u7528 _doc</p><p>\u200B - Create\uFF1A\u5982\u679CID\u5DF2\u5B58\u5728\uFF0C\u4F1A\u5931\u8D25</p><p>\u200B - Index\uFF1A\u5982\u679CID\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA\u65B0\u7684\u6587\u6863\uFF1B\u5426\u5219\uFF0C\u5148\u5220\u9664\u73B0\u6709\u7684\u6587\u6863\uFF0C\u518D\u521B\u5EFA\u65B0\u7684\u6587\u6863\uFF0C\u7248\u672C\u4F1A\u589E\u52A0</p><p>\u200B - Update\uFF1A\u6587\u6863\u5FC5\u987B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u66F4\u65B0\u53EA\u4F1A\u5BF9\u76F8\u5E94\u7684\u5B57\u6BB5\u589E\u91CF\u4FEE\u6539\uFF0C\u76F8\u5E94\u5B57\u6BB5\u653E\u5728 doc \u4E0B</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	doc: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		........</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>bulk api \u6279\u91CF\u64CD\u4F5C <ul><li>\u652F\u6301\u5728\u4E00\u6B21 api \u8C03\u7528\u4E2D\uFF0C\u5BF9\u4E0D\u540C\u7684\u7D22\u5F15\u8FDB\u884C\u64CD\u4F5C</li><li>\u652F\u6301\u56DB\u79CD\u7C7B\u578B\u64CD\u4F5C <ul><li>Index</li><li>Create</li><li>Update</li><li>Delete</li></ul></li><li>\u53EF\u4EE5\u5728 URI \u4E2D\u6307\u5B9Aindex\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8BF7\u6C42\u7684 payload \u4E2D\u6307\u5B9A</li><li>\u64CD\u4F5C\u4E2D\u5355\u6761\u64CD\u4F5C\u5931\u8D25\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u64CD\u4F5C</li><li>\u8FD4\u56DE\u7ED3\u679C\u5305\u62EC\u4E86\u6BCF\u4E00\u6761\u64CD\u4F5C\u6267\u884C\u7684\u7ED3\u679C</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST _bulk</span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;index&quot;: {&quot;_index&quot;: &quot;test&quot;, &quot;_id&quot;: 1}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;field1&quot;: &quot;value1&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>mget api \u6279\u91CF\u8BFB\u53D6 <ul><li>\u6279\u91CF\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u51CF\u5C11\u7F51\u7EDC\u8FDE\u63A5\u6240\u4EA7\u751F\u7684\u5F00\u9500\uFF0C\u63D0\u9AD8\u6027\u80FD</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET _mget</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;docs&quot;: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;_index&quot;: &quot;user&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;_id&quot;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	},{</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;_index&quot;: &quot;comment&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;_id&quot;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	}]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>msearch \u6279\u91CF\u67E5\u8BE2</li></ul><h4 id="\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE" tabindex="-1">\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE <a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF\u8FD4\u56DE" aria-hidden="true">#</a></h4><table><thead><tr><th>\u95EE\u9898</th><th>\u539F\u56E0</th></tr></thead><tbody><tr><td>\u65E0\u6CD5\u8FDE\u63A5</td><td>\u7F51\u7EDC\u6545\u969C\u6216\u8005\u96C6\u7FA4\u6302\u4E86</td></tr><tr><td>\u8FDE\u63A5\u65E0\u6CD5\u5173\u95ED</td><td>\u7F51\u7EDC\u6545\u969C\u6216\u8005\u8282\u70B9\u51FA\u9519</td></tr><tr><td>429</td><td>\u96C6\u7FA4\u8FC7\u4E8E\u7E41\u5FD9</td></tr><tr><td>4xx</td><td>\u8BF7\u6C42\u683C\u5F0F\u4F53\u6709\u9519</td></tr><tr><td>500</td><td>\u96C6\u7FA4\u5185\u90E8\u9519\u8BEF</td></tr></tbody></table>`,14),p=[e];function o(d,i,c,r,u,C){return a(),s("div",null,p)}const y=t(l,[["render",o]]);export{A as __pageData,y as default};
