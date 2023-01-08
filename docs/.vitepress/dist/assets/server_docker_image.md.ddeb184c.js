import{_ as s,c as a,o as n,b as e}from"./app.0be6fbf7.js";const y=JSON.parse('{"title":"Docker \u57FA\u7840 -- \u955C\u50CF","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u83B7\u53D6\u955C\u50CF","slug":"\u83B7\u53D6\u955C\u50CF","link":"#\u83B7\u53D6\u955C\u50CF","children":[]},{"level":3,"title":"\u67E5\u770B\u955C\u50CF\u4FE1\u606F","slug":"\u67E5\u770B\u955C\u50CF\u4FE1\u606F","link":"#\u67E5\u770B\u955C\u50CF\u4FE1\u606F","children":[]},{"level":3,"title":"\u641C\u7D22\u955C\u50CF","slug":"\u641C\u7D22\u955C\u50CF","link":"#\u641C\u7D22\u955C\u50CF","children":[]},{"level":3,"title":"\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF","slug":"\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF","link":"#\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF","children":[]},{"level":3,"title":"\u521B\u5EFA\u955C\u50CF","slug":"\u521B\u5EFA\u955C\u50CF","link":"#\u521B\u5EFA\u955C\u50CF","children":[]},{"level":3,"title":"\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF","slug":"\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF","link":"#\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF","children":[]},{"level":3,"title":"\u4E0A\u4F20\u955C\u50CF","slug":"\u4E0A\u4F20\u955C\u50CF","link":"#\u4E0A\u4F20\u955C\u50CF","children":[]}],"relativePath":"server/docker/image.md","lastUpdated":1673183115000}'),l={name:"server/docker/image.md"},p=e(`<h1 id="docker-\u57FA\u7840-\u955C\u50CF" tabindex="-1">Docker \u57FA\u7840 -- \u955C\u50CF <a class="header-anchor" href="#docker-\u57FA\u7840-\u955C\u50CF" aria-hidden="true">#</a></h1><p>\u83B7\u53D6\u3001\u67E5\u770B\u3001\u641C\u7D22\u3001\u5220\u9664\u3001\u521B\u5EFA\u3001\u5B58\u51FA\u548C\u8F7D\u5165\u3001\u4E0A\u4F20\u7B49</p><blockquote><p>docker image help</p></blockquote><h3 id="\u83B7\u53D6\u955C\u50CF" tabindex="-1">\u83B7\u53D6\u955C\u50CF <a class="header-anchor" href="#\u83B7\u53D6\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> pull NAME</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">:TAG</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u200B \u5176\u4E2D\uFF0CNAME \u662F\u955C\u50CF\u4ED3\u5E93\u7684\u540D\u5B57\uFF0CTAG \u662F\u955C\u50CF\u7684\u6807\u7B7E\uFF0C\u5982\u679C\u4E0D\u663E\u5F0F\u5B9A\u4E49TAG\uFF0C\u5219\u9ED8\u8BA4\u9009\u62E9 latest \u6807\u7B7E\uFF0C\u5373NAME:latest\uFF0C\u5185\u5BB9\u4E0D\u7A33\u5B9A\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u4E00\u4E2AUbuntu 18.04\u7CFB\u7EDF\u7684\u57FA\u7840\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull ubuntu:18.04</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u6700\u65B0\u7248\u672C\u7684Ubuntu\u64CD\u4F5C\u7CFB\u7EDF\u7684\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull ubuntu</span></span>
<span class="line"></span></code></pre></div><p>\u200B \u4F7F\u7528docker pull\u547D\u4EE4\u4E0B\u8F7D\u4E2D\u4F1A\u83B7\u53D6\u5E76\u8F93\u51FA\u955C\u50CF\u7684\u5404\u5C42\u4FE1\u606F\u3002\u5F53\u4E0D\u540C\u7684\u955C\u50CF\u5305\u62EC\u76F8\u540C\u7684\u5C42\u65F6\uFF0C\u672C\u5730\u4EC5\u5B58\u50A8\u4E86\u5C42\u7684\u4E00\u4EFD\u5185\u5BB9\uFF0C\u51CF\u5C0F\u4E86\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>\u200B \u5982\u679C\u4ECE\u975E\u5B98\u65B9\u7684\u4ED3\u5E93\u4E0B\u8F7D\uFF0C\u5219\u9700\u8981\u5728\u4ED3\u5E93\u540D\u79F0\u524D\u6307\u5B9A\u5B8C\u6574\u7684\u4ED3\u5E93\u5730\u5740\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull hub.c.163.com/public/ubuntu:18.04</span></span>
<span class="line"></span></code></pre></div><p>pull\u5B50\u547D\u4EE4\u652F\u6301\u7684\u9009\u9879\u4E3B\u8981\u5305\u62EC\uFF1A</p><ul><li><p>-a, --all-tags=true|false\uFF1A\u662F\u5426\u83B7\u53D6\u4ED3\u5E93\u4E2D\u7684\u6240\u6709\u955C\u50CF\uFF0C\u9ED8\u8BA4\u4E3A\u5426\uFF1B</p></li><li><p>--disable-content-trust\uFF1A\u53D6\u6D88\u955C\u50CF\u7684\u5185\u5BB9\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A\u771F\u3002</p></li></ul><h3 id="\u67E5\u770B\u955C\u50CF\u4FE1\u606F" tabindex="-1">\u67E5\u770B\u955C\u50CF\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770B\u955C\u50CF\u4FE1\u606F" aria-hidden="true">#</a></h3><h4 id="images\uFF08\u5217\u51FA\u955C\u50CF\uFF09" tabindex="-1">images\uFF08\u5217\u51FA\u955C\u50CF\uFF09 <a class="header-anchor" href="#images\uFF08\u5217\u51FA\u955C\u50CF\uFF09" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5217\u51FA\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;">docker image ls</span></span>
<span class="line"><span style="color:#676E95;"># help</span></span>
<span class="line"><span style="color:#A6ACCD;">man docker-images</span></span>
<span class="line"></span></code></pre></div><p>\u200B \u5176\u4E2D\u955C\u50CF\u7684ID\u4FE1\u606F\u5341\u5206\u91CD\u8981\uFF0C\u5B83\u552F\u4E00\u6807\u8BC6\u4E86\u955C\u50CF\u3002\u5728\u4F7F\u7528\u955C\u50CFID\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u53EF\u4EE5\u4F7F\u7528\u8BE5ID\u7684\u524D\u82E5\u5E72\u4E2A\u5B57\u7B26\u7EC4\u6210\u7684\u53EF\u533A\u5206\u4E32\u6765\u66FF\u4EE3\u5B8C\u6574\u7684ID\u3002</p><p>images\u5B50\u547D\u4EE4\u4E3B\u8981\u652F\u6301\u5982\u4E0B\u9009\u9879\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u884C\u8FDB\u884C\u5C1D\u8BD5\uFF1A</p><ul><li><p>-a, --all=true|false\uFF1A\u5217\u51FA\u6240\u6709\uFF08\u5305\u62EC\u4E34\u65F6\u6587\u4EF6\uFF09\u955C\u50CF\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3A\u5426\uFF1B</p></li><li><p>--digests=true|false\uFF1A\u5217\u51FA\u955C\u50CF\u7684\u6570\u5B57\u6458\u8981\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u5426\uFF1B</p></li><li><p>-f, --filter=[]\uFF1A\u8FC7\u6EE4\u5217\u51FA\u7684\u955C\u50CF\uFF0C\u5982dangling=true\u53EA\u663E\u793A\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u955C\u50CF\uFF1B\u4E5F\u53EF\u6307\u5B9A\u5E26\u6709\u7279\u5B9A\u6807\u6CE8\u7684\u955C\u50CF\u7B49\uFF1B</p></li><li><p>--format=&quot;TEMPLATE&quot;\uFF1A\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\uFF0C\u5982\uFF0EID\u4EE3\u8868ID\u4FE1\u606F\uFF0C.Repository\u4EE3\u8868\u4ED3\u5E93\u4FE1\u606F\u7B49\uFF1B</p></li><li><p>--no-trunc=true|false\uFF1A\u5BF9\u8F93\u51FA\u7ED3\u679C\u4E2D\u592A\u957F\u7684\u90E8\u5206\u662F\u5426\u8FDB\u884C\u622A\u65AD\uFF0C\u5982\u955C\u50CF\u7684ID\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A\u662F\uFF1B</p></li><li><p>-q, --quiet=true|false\uFF1A\u4EC5\u8F93\u51FAID\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A\u5426\u3002</p></li></ul><h4 id="tag\uFF08\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E\uFF09" tabindex="-1">tag\uFF08\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E\uFF09 <a class="header-anchor" href="#tag\uFF08\u6DFB\u52A0\u955C\u50CF\u6807\u7B7E\uFF09" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684myubuntu:latest\u955C\u50CF\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag ubuntu:latest myubuntu:latest</span></span>
<span class="line"></span></code></pre></div><p>docker tag\u547D\u4EE4\u6DFB\u52A0\u7684\u6807\u7B7E\u5B9E\u9645\u4E0A\u8D77\u5230\u4E86\u7C7B\u4F3C\u94FE\u63A5\u7684\u4F5C\u7528\u3002</p><h4 id="inspect\uFF08\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF09" tabindex="-1">inspect\uFF08\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF09 <a class="header-anchor" href="#inspect\uFF08\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF09" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u8BE5\u955C\u50CF\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u5236\u4F5C\u8005\u3001\u9002\u5E94\u67B6\u6784\u3001\u5404\u5C42\u7684\u6570\u5B57\u6458\u8981\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> inspect</span></span>
<span class="line"></span></code></pre></div><h4 id="history\uFF08\u67E5\u770B\u955C\u50CF\u5386\u53F2\uFF09" tabindex="-1">history\uFF08\u67E5\u770B\u955C\u50CF\u5386\u53F2\uFF09 <a class="header-anchor" href="#history\uFF08\u67E5\u770B\u955C\u50CF\u5386\u53F2\uFF09" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">history</span><span style="color:#A6ACCD;"> ubuntu:18.04</span></span>
<span class="line"></span></code></pre></div><h3 id="\u641C\u7D22\u955C\u50CF" tabindex="-1">\u641C\u7D22\u955C\u50CF <a class="header-anchor" href="#\u641C\u7D22\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker search [option] keyword</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u2751 -f, --filter filter\uFF1A\u8FC7\u6EE4\u8F93\u51FA\u5185\u5BB9\uFF1B</p><p>\u2751 --format string\uFF1A\u683C\u5F0F\u5316\u8F93\u51FA\u5185\u5BB9\uFF1B</p><p>\u2751 --limit int\uFF1A\u9650\u5236\u8F93\u51FA\u7ED3\u679C\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u4E3A25\u4E2A\uFF1B</p><p>\u2751 --no-trunc\uFF1A\u4E0D\u622A\u65AD\u8F93\u51FA\u7ED3\u679C\u3002</p><h3 id="\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF" tabindex="-1">\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF <a class="header-anchor" href="#\u5220\u9664\u548C\u6E05\u7406\u955C\u50CF" aria-hidden="true">#</a></h3><h4 id="\u5220\u9664\u955C\u50CF" tabindex="-1">\u5220\u9664\u955C\u50CF <a class="header-anchor" href="#\u5220\u9664\u955C\u50CF" aria-hidden="true">#</a></h4><p>docker rmi / docker image rm</p><blockquote><p>docker rmi IMAGE[IMAGE...]\uFF0C\u5176\u4E2DIMAGE\u53EF\u4EE5\u4E3A\u6807\u7B7E\u6216ID</p></blockquote><p>\u652F\u6301\u9009\u9879\u5305\u62EC\uFF1A</p><p>\u2751 -f, -force\uFF1A\u5F3A\u5236\u5220\u9664\u955C\u50CF\uFF0C\u5373\u4F7F\u6709\u5BB9\u5668\u4F9D\u8D56\u5B83\uFF1B</p><p>\u2751 -no-prune\uFF1A\u4E0D\u8981\u6E05\u7406\u672A\u5E26\u6807\u7B7E\u7684\u7236\u955C\u50CF\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker rmi myubuntu:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi a21c0840213e</span></span>
<span class="line"></span></code></pre></div><p>\u200B \u5F53\u540C\u4E00\u4E2A\u955C\u50CF\u62E5\u6709\u591A\u4E2A\u6807\u7B7E\u7684\u65F6\u5019\uFF0Cdocker rmi\u547D\u4EE4\u53EA\u662F\u5220\u9664\u4E86\u8BE5\u955C\u50CF\u591A\u4E2A\u6807\u7B7E\u4E2D\u7684\u6307\u5B9A\u6807\u7B7E\u800C\u5DF2\uFF0C\u5E76\u4E0D\u5F71\u54CD\u955C\u50CF\u6587\u4EF6\u3002</p><h4 id="\u6E05\u7406\u955C\u50CF" tabindex="-1">\u6E05\u7406\u955C\u50CF <a class="header-anchor" href="#\u6E05\u7406\u955C\u50CF" aria-hidden="true">#</a></h4><p>\u200B \u4F7F\u7528Docker\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u7CFB\u7EDF\u4E2D\u53EF\u80FD\u4F1A\u9057\u7559\u4E00\u4E9B\u4E34\u65F6\u7684\u955C\u50CF\u6587\u4EF6\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u955C\u50CF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u6765\u8FDB\u884C\u6E05\u7406\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker image prune</span></span>
<span class="line"></span></code></pre></div><p>\u652F\u6301\u9009\u9879\u5305\u62EC\uFF1A</p><p>\u2751 -a, -all\uFF1A\u5220\u9664\u6240\u6709\u65E0\u7528\u955C\u50CF\uFF0C\u4E0D\u5149\u662F\u4E34\u65F6\u955C\u50CF\uFF1B</p><p>\u2751 -filter filter\uFF1A\u53EA\u6E05\u7406\u7B26\u5408\u7ED9\u5B9A\u8FC7\u6EE4\u5668\u7684\u955C\u50CF\uFF1B</p><p>\u2751 -f, -force\uFF1A\u5F3A\u5236\u5220\u9664\u955C\u50CF\uFF0C\u800C\u4E0D\u8FDB\u884C\u63D0\u793A\u786E\u8BA4\u3002</p><h3 id="\u521B\u5EFA\u955C\u50CF" tabindex="-1">\u521B\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u521B\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h3><h4 id="\u57FA\u4E8E\u5DF2\u6709\u5BB9\u5668\u521B\u5EFA" tabindex="-1">\u57FA\u4E8E\u5DF2\u6709\u5BB9\u5668\u521B\u5EFA <a class="header-anchor" href="#\u57FA\u4E8E\u5DF2\u6709\u5BB9\u5668\u521B\u5EFA" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> commit </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTIONS</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> CONTAINER </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">REPOSITORY </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">:TAG</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"></span></code></pre></div><p>\u4E3B\u8981\u9009\u9879\u5305\u62EC\uFF1A</p><p>\u2751 -a, --author=&quot;&quot;\uFF1A\u4F5C\u8005\u4FE1\u606F\uFF1B</p><p>\u2751 -c, --change=[]\uFF1A\u63D0\u4EA4\u7684\u65F6\u5019\u6267\u884CDockerfile\u6307\u4EE4\uFF0C\u5305\u62ECCMD|ENTRYPOINT|ENV|EXPOSE|LABEL|ONBUILD|USER|VOLUME|WORKDIR\u7B49\uFF1B</p><p>\u2751 -m, --message=&quot;&quot;\uFF1A\u63D0\u4EA4\u6D88\u606F\uFF1B</p><p>\u2751 -p, --pause=true\uFF1A\u63D0\u4EA4\u65F6\u6682\u505C\u5BB9\u5668\u8FD0\u884C\u3002</p><p>\u4F7F\u7528ID\u6216\u540D\u79F0\u6765\u6307\u5B9A\u5BB9\u5668</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add something</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -a </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shixy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> a925cb40b3f0</span></span>
<span class="line"></span></code></pre></div><h4 id="\u57FA\u4E8E\u672C\u5730\u6A21\u677F\u5BFC\u5165" tabindex="-1">\u57FA\u4E8E\u672C\u5730\u6A21\u677F\u5BFC\u5165 <a class="header-anchor" href="#\u57FA\u4E8E\u672C\u5730\u6A21\u677F\u5BFC\u5165" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> import </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTIONS</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">REPOSITORY </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">:TAG</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"></span></code></pre></div><p>\u8981\u76F4\u63A5\u5BFC\u5165\u4E00\u4E2A\u955C\u50CF\uFF0C\u53EF\u4EE5\u4F7F\u7528OpenVZ\u63D0\u4F9B\u7684\u6A21\u677F\u6765\u521B\u5EFA\uFF0C\u6216\u8005\u7528\u5176\u4ED6\u5DF2\u5BFC\u51FA\u7684\u955C\u50CF\u6A21\u677F\u6765\u521B\u5EFA\u3002OPENVZ\u6A21\u677F\u7684\u4E0B\u8F7D\u5730\u5740\u4E3A<a href="http://openvz.org/Download/templates/precreated%E3%80%82" target="_blank" rel="noreferrer">http://openvz.org/Download/templates/precreated\u3002</a></p><h4 id="\u57FA\u4E8Edockerfile\u521B\u5EFA" tabindex="-1">\u57FA\u4E8EDockerfile\u521B\u5EFA <a class="header-anchor" href="#\u57FA\u4E8Edockerfile\u521B\u5EFA" aria-hidden="true">#</a></h4><p>Dockerfile\u662F\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u5229\u7528\u7ED9\u5B9A\u7684\u6307\u4EE4\u63CF\u8FF0\u57FA\u4E8E\u67D0\u4E2A\u7236\u955C\u50CF\u521B\u5EFA\u65B0\u955C\u50CF\u7684\u8FC7\u7A0B\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">FROM debian:stretch-slim</span></span>
<span class="line"><span style="color:#A6ACCD;">	LABEL version=&quot;1.0&quot; maintainer=&quot;docker user ...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">				apt-get install -y python3 &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">				apt-get clean &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">				rm -rf /var/lib/apt/lists/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 build \u547D\u4EE4\u521B\u5EFA\u955C\u50CF</p><blockquote><p>docker [image] build</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -t python:3 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF" tabindex="-1">\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF <a class="header-anchor" href="#\u5B58\u51FA\u548C\u8F7D\u5165\u955C\u50CF" aria-hidden="true">#</a></h3><h4 id="\u5B58\u51FA\u955C\u50CF" tabindex="-1">\u5B58\u51FA\u955C\u50CF <a class="header-anchor" href="#\u5B58\u51FA\u955C\u50CF" aria-hidden="true">#</a></h4><p>\u200B \u5982\u679C\u8981\u5BFC\u51FA\u955C\u50CF\u5230\u672C\u5730\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528docker [image] save\u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u652F\u6301-o\u3001-outputstring\u53C2\u6570\uFF0C\u5BFC\u51FA\u955C\u50CF\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker save -o ubuntu_18.04.tar ubuntu:18.04</span></span>
<span class="line"></span></code></pre></div><h4 id="\u8F7D\u5165\u955C\u50CF" tabindex="-1">\u8F7D\u5165\u955C\u50CF <a class="header-anchor" href="#\u8F7D\u5165\u955C\u50CF" aria-hidden="true">#</a></h4><p>\u200B \u53EF\u4EE5\u4F7F\u7528docker [image] load\u5C06\u5BFC\u51FA\u7684tar\u6587\u4EF6\u518D\u5BFC\u5165\u5230\u672C\u5730\u955C\u50CF\u5E93\u3002\u652F\u6301-i\u3001-input string\u9009\u9879\uFF0C\u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u8BFB\u5165\u955C\u50CF\u5185\u5BB9\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker load -i ubuntu_18.04</span></span>
<span class="line"><span style="color:#A6ACCD;">or</span></span>
<span class="line"><span style="color:#A6ACCD;">docker load &lt; ubuntu_18.04</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E0A\u4F20\u955C\u50CF" tabindex="-1">\u4E0A\u4F20\u955C\u50CF <a class="header-anchor" href="#\u4E0A\u4F20\u955C\u50CF" aria-hidden="true">#</a></h3><p>\u200B \u53EF\u4EE5\u4F7F\u7528docker [image] push\u547D\u4EE4\u4E0A\u4F20\u955C\u50CF\u5230\u4ED3\u5E93\uFF0C\u9ED8\u8BA4\u4E0A\u4F20\u5230Docker Hub\u5B98\u65B9\u4ED3\u5E93\uFF08\u9700\u8981\u767B\u5F55\uFF09\u3002</p><blockquote><p>docker [image] push NAME[:TAG] | [REGISTRY_HOST[:REGISTRY_PORT]/]NAME[:TAG]</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5148\u6DFB\u52A0\u65B0\u7684\u6807\u7B7Euser/test:latest\uFF0C\u7136\u540E\u7528docker [image] push\u547D\u4EE4\u4E0A\u4F20\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag test:latest user/test:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">docker push user/test:latest</span></span>
<span class="line"></span></code></pre></div>`,77),o=[p];function t(c,r,i,d,u,h){return n(),a("div",null,o)}const A=s(l,[["render",t]]);export{y as __pageData,A as default};
