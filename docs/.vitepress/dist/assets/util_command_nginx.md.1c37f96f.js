import{_ as s,c as n,o as a,b as l}from"./app.0be6fbf7.js";const F=JSON.parse('{"title":"Nginx \u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSL\u914D\u7F6E","slug":"ssl\u914D\u7F6E","link":"#ssl\u914D\u7F6E","children":[]}],"relativePath":"util/command/nginx.md","lastUpdated":1673183115000}'),p={name:"util/command/nginx.md"},o=l(`<h1 id="nginx-\u547D\u4EE4" tabindex="-1">Nginx \u547D\u4EE4 <a class="header-anchor" href="#nginx-\u547D\u4EE4" aria-hidden="true">#</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># systemctl \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u914D\u7F6E\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5237\u65B0\u914D\u7F6E </span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"></span></code></pre></div><h2 id="ssl\u914D\u7F6E" tabindex="-1">SSL\u914D\u7F6E <a class="header-anchor" href="#ssl\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
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
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,D,C,i,A){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{F as __pageData,_ as default};
