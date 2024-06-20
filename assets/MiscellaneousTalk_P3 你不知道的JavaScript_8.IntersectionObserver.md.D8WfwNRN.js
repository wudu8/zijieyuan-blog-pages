import{_ as e,c as t,o as s,a3 as i}from"./chunks/framework.z7kdJ_yr.js";const E=JSON.parse('{"title":"IntersectionObserver","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P3 你不知道的JavaScript/8.IntersectionObserver.md","filePath":"MiscellaneousTalk/P3 你不知道的JavaScript/8.IntersectionObserver.md"}'),a={name:"MiscellaneousTalk/P3 你不知道的JavaScript/8.IntersectionObserver.md"},r=i(`<h1 id="intersectionobserver" tabindex="-1">IntersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-label="Permalink to &quot;IntersectionObserver&quot;">​</a></h1><h2 id="intersectionobserver-是什么" tabindex="-1">IntersectionObserver 是什么？ <a class="header-anchor" href="#intersectionobserver-是什么" aria-label="Permalink to &quot;IntersectionObserver 是什么？&quot;">​</a></h2><blockquote><p>IntersectionObserver 接口提供了一种异步观察目标元素与其祖先元素或顶级文档视口（viewport）交叉状态的方法。其祖先元素或视口被称为根（root）</p></blockquote><h2 id="intersectionobserver-解决了什么问题" tabindex="-1">IntersectionObserver 解决了什么问题 <a class="header-anchor" href="#intersectionobserver-解决了什么问题" aria-label="Permalink to &quot;IntersectionObserver 解决了什么问题&quot;">​</a></h2><p>IntersectionObserver 主要解决了前端开发中目标元素与视口交集（即可见性）监测的问题，并提供了高效且优雅的解决方案，使得开发者能够更好地实现资源按需加载、动态交互效果以及其他基于可见性的功能优化</p><h2 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> intersectionObserver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IntersectionObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">entries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 如果 intersectionRatio 为 0，则目标在视野外，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 我们不需要做任何事情。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (entries[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].intersectionRatio </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loadItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Loaded new items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始监听</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">intersectionObserver.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.scrollerFooter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h2 id="intersectionobserver-的-api" tabindex="-1">IntersectionObserver 的 API <a class="header-anchor" href="#intersectionobserver-的-api" aria-label="Permalink to &quot;IntersectionObserver 的 API&quot;">​</a></h2><h3 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h3><p>options 是一个对象，用来配置参数，也可以不填。共有三个属性，具体如下：</p><ul><li><p>IntersectionObserver.root 只读</p><blockquote><p>测试交叉时，用作边界盒的元素或文档。如果构造函数未传入 root 或其值为 null，则默认使用顶级文档的视口。</p></blockquote></li><li><p>IntersectionObserver.rootMargin 只读</p><blockquote><p>计算交叉时添加到根边界盒 (en-US)的矩形偏移量，可以有效的缩小或扩大根的判定范围从而满足计算需要。此属性返回的值可能与调用构造函数时指定的值不同，因此可能需要更改该值，以匹配内部要求。所有的偏移量均可用像素（px）或百分比（%）来表达，默认值为“0px 0px 0px 0px”。</p></blockquote></li><li><p>IntersectionObserver.thresholds (en-US) 只读</p><blockquote><p>一个包含阈值的列表，按升序排列，列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。当监听对象的任何阈值被越过时，都会生成一个通知（Notification）。如果构造器未传入值，则默认值为 0。</p></blockquote></li></ul><h3 id="callback" tabindex="-1">callback <a class="header-anchor" href="#callback" aria-label="Permalink to &quot;callback&quot;">​</a></h3><p>callback 是添加监听后，当监听目标发生滚动变化时触发的回调函数。接收一个参数 entries，即 IntersectionObserverEntry 实例。描述了目标元素与 root 的交叉状态。具体参数如下：</p><table tabindex="0"><thead><tr><th>属性名称</th><th>描述</th></tr></thead><tbody><tr><td>boundingClientRect</td><td>返回包含目标元素的边界信息，返回结果与 <code>element.getBoundingClientRect()</code> 相同</td></tr><tr><td><code>intersectionRatio</code></td><td>返回目标元素出现在可视区的比例, <code>常用 0 来判断是否出现在可视区域 </code></td></tr><tr><td>intersectionRect</td><td>描述根(root)和目标元素之间的相交区域</td></tr><tr><td>isIntersecting</td><td>返回一个布尔值: <br>1. 如果目标元素出现在 root 可视区，返回 true <br> 2. 如果从 root 可视区消失，返回 false</td></tr><tr><td>rootBounds</td><td>用来描述交叉区域观察者(intersection observer)中的根.</td></tr><tr><td>target</td><td>目标元素：与根出现相交区域改变的元素 (Element)</td></tr><tr><td>time</td><td>返回一个记录从 IntersectionObserver 的时间原点到交叉被触发的时间的时间戳</td></tr></tbody></table><h3 id="intersectionobserver-方法" tabindex="-1">IntersectionObserver 方法 <a class="header-anchor" href="#intersectionobserver-方法" aria-label="Permalink to &quot;IntersectionObserver 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>observe()</td><td>开始监听一个目标元素</td></tr><tr><td>unobserve()</td><td>停止监听特定目标元素</td></tr><tr><td>takeRecords()</td><td>返返回所有观察目标的 IntersectionObserverEntry 对象数组</td></tr><tr><td>disconnect()</td><td>使 IntersectionObserver 对象停止全部监听工作</td></tr></tbody></table><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver</a></p>`,18),n=[r];function l(o,h,d,p,k,c){return s(),t("div",null,n)}const g=e(a,[["render",l]]);export{E as __pageData,g as default};
