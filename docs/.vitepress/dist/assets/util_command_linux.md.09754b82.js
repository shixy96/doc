import{_ as s,c as a,o as n,b as l}from"./app.0be6fbf7.js";const A=JSON.parse('{"title":"Linux \u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"scp","slug":"scp","link":"#scp","children":[]},{"level":2,"title":"base64","slug":"base64","link":"#base64","children":[]},{"level":2,"title":"envsubst","slug":"envsubst","link":"#envsubst","children":[]}],"relativePath":"util/command/linux.md","lastUpdated":1673183115000}'),e={name:"util/command/linux.md"},p=l(`<h1 id="linux-\u547D\u4EE4" tabindex="-1">Linux \u547D\u4EE4 <a class="header-anchor" href="#linux-\u547D\u4EE4" aria-hidden="true">#</a></h1><h2 id="scp" tabindex="-1">scp <a class="header-anchor" href="#scp" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">scp </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-i identity_file</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -r </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">source-file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">user-name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">remote-dir</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="base64" tabindex="-1">base64 <a class="header-anchor" href="#base64" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># base64</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> -n center_</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">1 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> base64</span></span>
<span class="line"></span></code></pre></div><h2 id="envsubst" tabindex="-1">envsubst <a class="header-anchor" href="#envsubst" aria-hidden="true">#</a></h2><p>\u6587\u4EF6\u6A21\u7248</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;"># template.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">hello, \${DIR} is your directory</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># dir.sh</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> DIR=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">envsubst </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{{$DIR}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> ./template.txt </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ../conf.d/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">2.txt</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">./dir.sh /Usr/shixy/demo result</span></span>
<span class="line"><span style="color:#676E95;"># =&gt; hello, /Usr/shixy/demo is your directory</span></span>
<span class="line"></span></code></pre></div>`,10),o=[p];function t(c,r,i,d,y,D){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{A as __pageData,u as default};
