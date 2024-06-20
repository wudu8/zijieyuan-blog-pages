import{_ as e,c as t,o as a,a3 as l}from"./chunks/framework.z7kdJ_yr.js";const o="/assets/model.D9XuWU-D.png",r="/assets/model-1.Mdgo90pO.png",s="/assets/model-2.Bq9nfWTS.png",i="/assets/model-3.PhTlrKv9.png",n="/assets/model-4.C8UVKZkZ.png",b=JSON.parse('{"title":"MVC，MVP 和 MVVM","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P1 概念系列/2.MVC vs MVP vs MVVM.md","filePath":"MiscellaneousTalk/P1 概念系列/2.MVC vs MVP vs MVVM.md"}'),c={name:"MiscellaneousTalk/P1 概念系列/2.MVC vs MVP vs MVVM.md"},m=l('<h1 id="mvc-mvp-和-mvvm" tabindex="-1">MVC，MVP 和 MVVM <a class="header-anchor" href="#mvc-mvp-和-mvvm" aria-label="Permalink to &quot;MVC，MVP 和 MVVM&quot;">​</a></h1><h2 id="mvc" tabindex="-1">MVC <a class="header-anchor" href="#mvc" aria-label="Permalink to &quot;MVC&quot;">​</a></h2><blockquote><p>视图（View）：用户界面 <br> 控制器（Controller）：业务逻辑 <br> 模型（Model）：数据保存</p></blockquote><ul><li>通信方式如下</li></ul><blockquote><p>View 传送指令到 Controller <br> Controller 完成业务逻辑后，要求 Model 改变状态<br> Model 将新的数据发送到 View，用户得到反馈</p></blockquote><p><img src="'+o+'" alt="Alt text"></p><h3 id="互动方式" tabindex="-1">互动方式 <a class="header-anchor" href="#互动方式" aria-label="Permalink to &quot;互动方式&quot;">​</a></h3><p><img src="'+r+'" alt="Alt text"></p><p><img src="'+s+'" alt="Alt text"></p><h2 id="mvp" tabindex="-1">MVP <a class="header-anchor" href="#mvp" aria-label="Permalink to &quot;MVP&quot;">​</a></h2><ul><li>MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。</li></ul><blockquote><p>各部分之间的通信，都是双向的。<br> View 与 Model 不发生联系，都通过 Presenter 传递。<br> View 非常薄，不部署任何业务逻辑，称为&quot;被动视图&quot;（Passive View），即没有任何主动性，而 Presenter 非常厚，所有逻辑都部署在那里。</p></blockquote><p><img src="'+i+'" alt="Alt text"></p><h2 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;MVVM&quot;">​</a></h2><ul><li>MVVM 模式将 Presenter 改名为 ViewModel，<code>基本上与 MVP 模式完全一致</code>。</li></ul><p><img src="'+n+'" alt="Alt text"></p><ul><li>唯一的区别是，它采用<code>双向绑定（data-binding）：View的变动，自动反映在 ViewModel，</code>反之亦然</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html</a></li></ul>',19),V=[m];function M(d,p,_,h,u,v){return a(),t("div",null,V)}const q=e(c,[["render",M]]);export{b as __pageData,q as default};
