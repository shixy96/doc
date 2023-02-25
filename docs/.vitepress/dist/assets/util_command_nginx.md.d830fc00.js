import{_ as s,c as n,o as a,b as l}from"./app.468f540d.js";const d=JSON.parse('{"title":"Nginx \u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"location","slug":"location","link":"#location","children":[{"level":3,"title":"\u53C2\u6570\u89E3\u91CA","slug":"\u53C2\u6570\u89E3\u91CA","link":"#\u53C2\u6570\u89E3\u91CA","children":[]},{"level":3,"title":"\u4F18\u5148\u7EA7","slug":"\u4F18\u5148\u7EA7","link":"#\u4F18\u5148\u7EA7","children":[]}]},{"level":2,"title":"SSL\u914D\u7F6E","slug":"ssl\u914D\u7F6E","link":"#ssl\u914D\u7F6E","children":[]}],"relativePath":"util/command/nginx.md","lastUpdated":1673422237000}'),p={name:"util/command/nginx.md"},o=l(`<h1 id="nginx-\u547D\u4EE4" tabindex="-1">Nginx \u547D\u4EE4 <a class="header-anchor" href="#nginx-\u547D\u4EE4" aria-hidden="true">#</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># systemctl \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u914D\u7F6E\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5237\u65B0\u914D\u7F6E </span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"></span></code></pre></div><h2 id="location" tabindex="-1">location <a class="header-anchor" href="#location" aria-hidden="true">#</a></h2><p><code>location</code>\u662FNginx\u4E2D\u7684\u5757\u7EA7\u6307\u4EE4(block directive)\uFF0Clocation\u6307\u4EE4\u7684\u529F\u80FD\u662F\u7528\u6765\u5339\u914D\u4E0D\u540C\u7684url\u8BF7\u6C42\uFF0C\u8FDB\u800C\u5BF9\u8BF7\u6C42\u505A\u4E0D\u540C\u7684\u5904\u7406\u548C\u54CD\u5E94\u3002</p><p>location\u6709\u4E24\u79CD\u5339\u914D\u89C4\u5219\uFF1A</p><ul><li>\u5339\u914DURL\u7C7B\u578B\uFF0C\u6709\u56DB\u79CD\u53C2\u6570\u53EF\u9009\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E0D\u5E26\u53C2\u6570\u3002 <code>location [ = | ~ | ~* | ^~ ] uri { \u2026 }</code></li><li>\u547D\u540Dlocation\uFF0C\u7528@\u6807\u8BC6\uFF0C\u7C7B\u4F3C\u4E8E\u5B9A\u4E8Egoto\u8BED\u53E5\u5757\u3002 <code>location @name { \u2026 }</code></li></ul><h3 id="\u53C2\u6570\u89E3\u91CA" tabindex="-1">\u53C2\u6570\u89E3\u91CA <a class="header-anchor" href="#\u53C2\u6570\u89E3\u91CA" aria-hidden="true">#</a></h3><ol><li>= \u5B8C\u5168\u5339\u914D</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location = /abc/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/abc [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/abc/index [\u5339\u914D\u5931\u8D25]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>~ \u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location ~ /Abc/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  .....</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/Abc/ [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/abc/ [\u5339\u914D\u5931\u8D25]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>~* \u6B63\u5219\u5339\u914D\uFF0C\u5FFD\u7565\u5927\u5C0F\u5199</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location ~* /Abc/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  .....</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/Abc/ [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/abc/ [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>^~ \u666E\u901A\u5B57\u7B26\u4E32\u5339\u914D\u4E0A\u4EE5\u540E\u4E0D\u518D\u8FDB\u884C\u6B63\u5219\u5339\u914D</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location ^~ /index/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  .....</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u4EE5 /index/ \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u5339\u914D\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/index/index.page  [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/error/error.page [\u5339\u914D\u5931\u8D25]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>\u4E0D\u52A0\u4EFB\u4F55\u89C4\u5219\u65F6\uFF0C\u9ED8\u8BA4\u662F\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u524D\u7F00\u5339\u914D\uFF0C\u76F8\u5F53\u4E8E\u52A0\u4E86\u201C~\u201D\u4E0E\u201C^~\u201D</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">location /index/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ......</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/index  [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/index/index.page  [\u5339\u914D\u6210\u529F]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/test/index  [\u5339\u914D\u5931\u8D25]</span></span>
<span class="line"><span style="color:#A6ACCD;"># http://abc.com/Index  [\u5339\u914D\u5931\u8D25]</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5339\u914D\u5230\u6240\u6709uri</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="6"><li>@ nginx\u5185\u90E8\u8DF3\u8F6C</li></ol><h3 id="\u4F18\u5148\u7EA7" tabindex="-1">\u4F18\u5148\u7EA7 <a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a></h3><blockquote><p><code>=</code> &gt; <code>^~</code> &gt; <code>~</code> | <code>~*</code> &gt; \u6700\u957F\u524D\u7F00\u5339\u914D &gt; <code>/</code></p></blockquote><h2 id="ssl\u914D\u7F6E" tabindex="-1">SSL\u914D\u7F6E <a class="header-anchor" href="#ssl\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">ks.shixy.store shixy.store</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">ks.shixy.store shixy.store</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;"> /etc/nginx/cert/ks.shixy.store.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/etc/nginx/cert/ks.shixy.store.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_session_timeout </span><span style="color:#A6ACCD;">5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#A6ACCD;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#A6ACCD;">TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> client_max_body_size </span><span style="color:#A6ACCD;">4G</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;"> /var/log/nginx/access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_min_length </span><span style="color:#A6ACCD;">30720</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_vary </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip_types </span><span style="color:#A6ACCD;">text/plain application/javascript text/css application/xml</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function c(t,r,i,C,A,D){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
