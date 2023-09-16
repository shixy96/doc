import{_ as s,c as n,o as a,b as l}from"./app.d12df644.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/java/compare.md","lastUpdated":1673183115000}'),p={name:"server/java/compare.md"},o=l(`<div class="language-tex"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre><code><span class="line"><span style="color:#A6ACCD;">StopWatch &#39;List Get&#39;: running time (millis) = 5439</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">ms        </span><span style="color:#676E95;">%          Task name</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">00081  001</span><span style="color:#676E95;">%  linkedListIterator</span></span>
<span class="line"><span style="color:#A6ACCD;">00010  000</span><span style="color:#676E95;">%  arrayListIterator</span></span>
<span class="line"><span style="color:#A6ACCD;">05342  098</span><span style="color:#676E95;">%  linkedListGetRandom</span></span>
<span class="line"><span style="color:#A6ACCD;">00006  000</span><span style="color:#676E95;">%  arrayListGetRandom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">before add, size: 100000</span></span>
<span class="line"><span style="color:#A6ACCD;">after add, size: 200000</span></span>
<span class="line"><span style="color:#A6ACCD;">StopWatch &#39;List Insert&#39;: running time (millis) = 28602</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">ms        </span><span style="color:#676E95;">%          Task name</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">00006  000</span><span style="color:#676E95;">%  linkedListAdd</span></span>
<span class="line"><span style="color:#A6ACCD;">00004  000</span><span style="color:#676E95;">%  arrayListAdd</span></span>
<span class="line"><span style="color:#A6ACCD;">26593  093</span><span style="color:#676E95;">%  linkedListAddRandom</span></span>
<span class="line"><span style="color:#A6ACCD;">01990  007</span><span style="color:#676E95;">%  arrayListAddRandom</span></span>
<span class="line"><span style="color:#A6ACCD;">00005  000</span><span style="color:#676E95;">%  arrayListAddUnDetermine</span></span>
<span class="line"><span style="color:#A6ACCD;">00004  000</span><span style="color:#676E95;">%  arrayListAddDetermine</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><a href="https://catonmat.net/low-level-bit-hacks" target="_blank" rel="noreferrer">https://catonmat.net/low-level-bit-hacks</a></p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#676E95;">// Check if the integer is even or odd.</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  x is even</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  x is odd</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#676E95;">// Test if the n-th bit is set.</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  n</span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">th bit is not set</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  n</span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">th bit is set</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#676E95;">// Set the n-th bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;">// Unset the n-th bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;">// Toggle the n-th bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#676E95;">// Turn off the rightmost 1-bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;">// Isolate the rightmost 1-bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(-</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Right propagate the rightmost 1-bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Isolate the rightmost 0-bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;">// Turn on the rightmost 0-bit.</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,D,y,C,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
