import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.z7kdJ_yr.js";const e="/assets/prototype.DG9sbrxq.jpg",n="/assets/control.Dv5NPD1L.jpg",y=JSON.parse('{"title":"原型链","description":"","frontmatter":{},"headers":[],"relativePath":"Deepunderstanding/P1 深入理解系列/1.原型链.md","filePath":"Deepunderstanding/P1 深入理解系列/1.原型链.md"}'),l={name:"Deepunderstanding/P1 深入理解系列/1.原型链.md"},p=t(`<h1 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h1><h2 id="什么是原型链" tabindex="-1">什么是原型链？ <a class="header-anchor" href="#什么是原型链" aria-label="Permalink to &quot;什么是原型链？&quot;">​</a></h2><ul><li>用于实现对象之间的共享和继承。每个 JavaScript 对象都有一个内部的[[Prototype]]属性，它是一个隐藏属性，指向另一个对象。当访问一个对象的属性或方法时，如果该对象自身没有该属性或方法，JavaScript 引擎会沿着该对象的原型链向上查找，直到找到该属性或方法或找到 Object.prototype 为止。如果最终在 Object.prototype 上仍然找不到该属性或方法，则会返回 undefined</li></ul><h3 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-label="Permalink to &quot;原型&quot;">​</a></h3><ul><li>每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针</li></ul><h3 id="原型链-1" tabindex="-1">原型链 <a class="header-anchor" href="#原型链-1" aria-label="Permalink to &quot;原型链&quot;">​</a></h3><ul><li>假如我们让原型对象等于另一个类型的实例，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。 假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。</li></ul><h3 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>创建的每一个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，即原型对象</li><li>prototype 就是通过调用构造函数而创建的那个对象实例的原型对象，这个实例内部含有的指向原型对象的指针叫[[Prototype]]</li><li>默认情况下，所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性是一个指向 prototype 属性所在函数的指针</li><li>所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype</li></ul><h2 id="原型链解决了什么问题" tabindex="-1">原型链解决了什么问题？ <a class="header-anchor" href="#原型链解决了什么问题" aria-label="Permalink to &quot;原型链解决了什么问题？&quot;">​</a></h2><ul><li>MDN 原描述</li></ul><blockquote><p>当谈到继承时，JavaScript 只有一种结构：对象。每个对象（object）都有一个私有属性指向另一个名为原型（prototype）的对象。原型对象也有一个自己的原型，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链（prototype chain）中的最后一个环节。可以改变原型链中的任何成员，甚至可以在运行时换出原型，因此 JavaScript 中不存在静态分派的概念。</p></blockquote><blockquote><p>尽管这种混杂通常被认为是 JavaScript 的弱点之一，但是原型继承模型本身实际上比类式模型更强大。例如，在原型模型的基础上构建类式模型（即类的实现方式）相当简单。</p></blockquote><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 虽然写在注释⾥，但是你要注意：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// prototype是函数才会有的属性</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ZiJieYuan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person1.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ZiJieYuan</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person2.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ZiJieYuan</span></span></code></pre></div><h2 id="原型链关系图" tabindex="-1">原型链关系图 <a class="header-anchor" href="#原型链关系图" aria-label="Permalink to &quot;原型链关系图&quot;">​</a></h2><p><img src="`+e+'" alt="原型链关系"></p><p><img src="'+n+'" alt="原型链关系"></p>',18),h=[p];function r(o,k,d,c,u,E){return i(),a("div",null,h)}const _=s(l,[["render",r]]);export{y as __pageData,_ as default};
