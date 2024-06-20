import{_ as e,c as a,o as l,a3 as i}from"./chunks/framework.z7kdJ_yr.js";const q=JSON.parse('{"title":"Vue 系列","description":"","frontmatter":{},"headers":[],"relativePath":"InterviewQuestions/P3 八股文/10.Vue 系列.md","filePath":"InterviewQuestions/P3 八股文/10.Vue 系列.md"}'),u={name:"InterviewQuestions/P3 八股文/10.Vue 系列.md"},t=i('<h1 id="vue-系列" tabindex="-1">Vue 系列 <a class="header-anchor" href="#vue-系列" aria-label="Permalink to &quot;Vue 系列&quot;">​</a></h1><h2 id="说说你对-vue-的理解" tabindex="-1">说说你对 vue 的理解? <a class="header-anchor" href="#说说你对-vue-的理解" aria-label="Permalink to &quot;说说你对 vue 的理解?&quot;">​</a></h2><ul><li>从历史说起</li><li>vue 是什么</li><li>Vue 核心特性 <ul><li>数据驱动、组件化、指令系统</li></ul></li><li>Vue 跟传统开发的区别 <ul><li>Vue 所有的界面事件，都是只去操作数据的，Jquery 操作 DOM</li><li>Vue 所有界面的变动，都是根据数据自动绑定出来的，Jquery 操作 DOM</li></ul></li><li>Vue 和 React 对比</li></ul><h2 id="说说你对-spa-单页应用-的理解" tabindex="-1">说说你对 SPA（单页应用）的理解? <a class="header-anchor" href="#说说你对-spa-单页应用-的理解" aria-label="Permalink to &quot;说说你对 SPA（单页应用）的理解?&quot;">​</a></h2><ul><li><p>什么是 SPA</p></li><li><p>SPA 和 MPA 的区别</p><ul><li>优点： <ul><li>具有桌面应用的即时性、网站的可移植性和可访问性</li><li>用户体验好、快，内容的改变不需要重新加载整个页面</li><li>良好的前后端分离，分工更明确</li></ul></li><li>缺点： <ul><li>不利于搜索引擎的抓取</li><li>首次渲染速度相对较慢</li></ul></li></ul></li></ul><h2 id="vue-实例挂载的过程中发生了什么" tabindex="-1">Vue 实例挂载的过程中发生了什么? <a class="header-anchor" href="#vue-实例挂载的过程中发生了什么" aria-label="Permalink to &quot;Vue 实例挂载的过程中发生了什么?&quot;">​</a></h2><h2 id="说说你对-vue-生命周期的理解" tabindex="-1">说说你对 Vue 生命周期的理解? <a class="header-anchor" href="#说说你对-vue-生命周期的理解" aria-label="Permalink to &quot;说说你对 Vue 生命周期的理解?&quot;">​</a></h2><ul><li>生命周期是什么 <ul><li>从创建、初始化数据、编译模板、挂载 Dom→ 渲染、更新 → 渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线</li></ul></li><li>生命周期有哪些 <ul><li>8 个阶段：创建前后, 载入前后,更新前后,销毁前销毁后</li><li>以及一些特殊场景的生命周期</li></ul></li><li>生命周期的执行顺序</li><li>生命周期整体流程</li></ul><h2 id="为什么-vue-中的-v-if-和-v-for-不建议一起用" tabindex="-1">为什么 Vue 中的 v-if 和 v-for 不建议一起用? <a class="header-anchor" href="#为什么-vue-中的-v-if-和-v-for-不建议一起用" aria-label="Permalink to &quot;为什么 Vue 中的 v-if 和 v-for 不建议一起用?&quot;">​</a></h2><h2 id="spa-单页应用-首屏加载速度慢怎么解决" tabindex="-1">SPA（单页应用）首屏加载速度慢怎么解决？ <a class="header-anchor" href="#spa-单页应用-首屏加载速度慢怎么解决" aria-label="Permalink to &quot;SPA（单页应用）首屏加载速度慢怎么解决？&quot;">​</a></h2><h2 id="为什么-data-属性是一个函数而不是一个对象" tabindex="-1">为什么 data 属性是一个函数而不是一个对象？ <a class="header-anchor" href="#为什么-data-属性是一个函数而不是一个对象" aria-label="Permalink to &quot;为什么 data 属性是一个函数而不是一个对象？&quot;">​</a></h2><h2 id="vue-中给对象添加新属性界面不刷新" tabindex="-1">Vue 中给对象添加新属性界面不刷新? <a class="header-anchor" href="#vue-中给对象添加新属性界面不刷新" aria-label="Permalink to &quot;Vue 中给对象添加新属性界面不刷新?&quot;">​</a></h2><h2 id="vue-中组件和插件有什么区别" tabindex="-1">Vue 中组件和插件有什么区别？ <a class="header-anchor" href="#vue-中组件和插件有什么区别" aria-label="Permalink to &quot;Vue 中组件和插件有什么区别？&quot;">​</a></h2><ul><li>组件是什么 <ul><li>组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，</li><li>组件的优势 <ul><li>降低整个系统的耦合度，</li><li>调试方便，</li><li>提高可维护性，</li></ul></li></ul></li><li>插件是什么 <ul><li>插件通常用来为 Vue 添加全局功能 <ul><li>添加全局方法或者属性。如: vue-custom-element</li><li>添加全局资源：指令/过滤器/过渡等。如 vue-touch</li><li>通过全局混入来添加一些组件选项。如 vue-router</li><li>添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。</li><li>一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router</li></ul></li></ul></li><li>两者的区别 <ul><li>编写形式</li><li>注册形式</li><li>使用场景</li></ul></li></ul><h2 id="vue-组件间通信方式都有哪些" tabindex="-1">Vue 组件间通信方式都有哪些? <a class="header-anchor" href="#vue-组件间通信方式都有哪些" aria-label="Permalink to &quot;Vue 组件间通信方式都有哪些?&quot;">​</a></h2><h2 id="说说你对双向绑定的理解" tabindex="-1">说说你对双向绑定的理解? <a class="header-anchor" href="#说说你对双向绑定的理解" aria-label="Permalink to &quot;说说你对双向绑定的理解?&quot;">​</a></h2><h2 id="说说你对-nexttick-的理解" tabindex="-1">说说你对 nexttick 的理解? <a class="header-anchor" href="#说说你对-nexttick-的理解" aria-label="Permalink to &quot;说说你对 nexttick 的理解?&quot;">​</a></h2><ul><li>NextTick 是什么 <ul><li>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</li></ul></li><li>为什么要有 nexttick</li><li>使用场景 <ul><li>如果想要在修改数据后立刻得到更新后的 DOM 结构，可以使用 Vue.nextTick()</li></ul></li><li>实现原理</li></ul><h2 id="说说你对-vue-的-mixin-的理解-有什么应用场景" tabindex="-1">说说你对 vue 的 mixin 的理解，有什么应用场景？ <a class="header-anchor" href="#说说你对-vue-的-mixin-的理解-有什么应用场景" aria-label="Permalink to &quot;说说你对 vue 的 mixin 的理解，有什么应用场景？&quot;">​</a></h2><ul><li>mixin 是什么 <ul><li>mixin（混入），提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。</li></ul></li><li>使用场景</li><li>源码分析 <ul><li>替换型策略:有 props、methods、inject、computed</li><li>合并型策略:是 data, 通过 set 方法进行合并和重新赋值</li><li>队列型策略: 有生命周期函数和 watch，原理是将函数存入一个数组，然后正序遍历依次执行</li><li>叠加型: component、directives、filters，通过原型链进行层层的叠加</li></ul></li></ul><h2 id="说说你对-slot-的理解-slot-使用场景有哪些" tabindex="-1">说说你对 slot 的理解？slot 使用场景有哪些？ <a class="header-anchor" href="#说说你对-slot-的理解-slot-使用场景有哪些" aria-label="Permalink to &quot;说说你对 slot 的理解？slot 使用场景有哪些？&quot;">​</a></h2><ul><li>slot 是什么 <ul><li>在 HTML 中 slot 元素 ，作为 Web Components 技术套件的一部分，是 Web 组件内的一个占位符,该占位符可以在后期使用自己的标记语言填充</li></ul></li><li>使用场景 <ul><li>通过插槽可以让用户可以拓展组件，去更好地复用组件和对其做定制化处理</li></ul></li><li>分类 <ul><li>默认插槽</li><li>具名插槽</li><li>作用域插槽</li></ul></li><li>原理分析 <ul><li>slot 本质上是返回 VNode 的函数，一般情况下，Vue 中的组件要渲染到页面上需要经过 template -&gt; render function -&gt; VNode -&gt; DOM 过程</li></ul></li></ul><h2 id="vue-observable-你有了解过吗-说说看" tabindex="-1">Vue.observable 你有了解过吗？说说看 <a class="header-anchor" href="#vue-observable-你有了解过吗-说说看" aria-label="Permalink to &quot;Vue.observable 你有了解过吗？说说看&quot;">​</a></h2><h2 id="你知道-vue-中-key-的原理吗-说说你对它的理解" tabindex="-1">你知道 vue 中 key 的原理吗？说说你对它的理解？ <a class="header-anchor" href="#你知道-vue-中-key-的原理吗-说说你对它的理解" aria-label="Permalink to &quot;你知道 vue 中 key 的原理吗？说说你对它的理解？&quot;">​</a></h2><h2 id="怎么缓存当前的组件-缓存后怎么更新-说说你对-keep-alive-的理解是什么" tabindex="-1">怎么缓存当前的组件？缓存后怎么更新？说说你对 keep-alive 的理解是什么？ <a class="header-anchor" href="#怎么缓存当前的组件-缓存后怎么更新-说说你对-keep-alive-的理解是什么" aria-label="Permalink to &quot;怎么缓存当前的组件？缓存后怎么更新？说说你对 keep-alive 的理解是什么？&quot;">​</a></h2><ul><li>Keep-alive 是什么 <ul><li>keep-alive 是 vue 中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染 DOM</li><li>keep-alive 可以设置以下 props 属性：include ,exclude ,max</li><li>设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（activated 与 deactivated）</li></ul></li><li>使用场景</li><li>原理分析</li></ul><h2 id="vue-常用的修饰符有哪些-有什么应用场景" tabindex="-1">Vue 常用的修饰符有哪些？有什么应用场景？ <a class="header-anchor" href="#vue-常用的修饰符有哪些-有什么应用场景" aria-label="Permalink to &quot;Vue 常用的修饰符有哪些？有什么应用场景？&quot;">​</a></h2><ul><li>修饰符是什么 <ul><li>在 Vue 中，修饰符处理了许多 DOM 事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理</li></ul></li><li>表单修饰符 <ul><li>lazy，trim，number</li></ul></li><li>事件修饰符 <ul><li>stop，prevent，self，once，capture，passive，native</li></ul></li><li>鼠标按键修饰符 <ul><li>left 左键点击，right 右键点击，middle 中键点击</li></ul></li><li>键值修饰符 <ul><li>普通键（enter、tab、delete、space、esc、up...），系统修饰键（ctrl、alt、meta、shift...）</li></ul></li><li>v-bind 修饰符 <ul><li>async，prop，camel</li></ul></li></ul><h2 id="你有写过自定义指令吗-自定义指令的应用场景有哪些" tabindex="-1">你有写过自定义指令吗？自定义指令的应用场景有哪些？ <a class="header-anchor" href="#你有写过自定义指令吗-自定义指令的应用场景有哪些" aria-label="Permalink to &quot;你有写过自定义指令吗？自定义指令的应用场景有哪些？&quot;">​</a></h2><h2 id="vue-中的过滤器了解吗-过滤器的应用场景有哪些" tabindex="-1">Vue 中的过滤器了解吗？过滤器的应用场景有哪些？ <a class="header-anchor" href="#vue-中的过滤器了解吗-过滤器的应用场景有哪些" aria-label="Permalink to &quot;Vue 中的过滤器了解吗？过滤器的应用场景有哪些？&quot;">​</a></h2><h2 id="什么是虚拟-dom-如何实现一个虚拟-dom-说说你的思路" tabindex="-1">什么是虚拟 DOM？如何实现一个虚拟 DOM？说说你的思路 <a class="header-anchor" href="#什么是虚拟-dom-如何实现一个虚拟-dom-说说你的思路" aria-label="Permalink to &quot;什么是虚拟 DOM？如何实现一个虚拟 DOM？说说你的思路&quot;">​</a></h2><h2 id="你了解-vue-的-diff-算法吗-说说看" tabindex="-1">你了解 vue 的 diff 算法吗？说说看 <a class="header-anchor" href="#你了解-vue-的-diff-算法吗-说说看" aria-label="Permalink to &quot;你了解 vue 的 diff 算法吗？说说看&quot;">​</a></h2><h2 id="vue-项目中有封装过-axios-吗-主要是封装哪方面的" tabindex="-1">Vue 项目中有封装过 axios 吗？主要是封装哪方面的？ <a class="header-anchor" href="#vue-项目中有封装过-axios-吗-主要是封装哪方面的" aria-label="Permalink to &quot;Vue 项目中有封装过 axios 吗？主要是封装哪方面的？&quot;">​</a></h2><h2 id="你了解-axios-的原理吗-有看过它的源码吗" tabindex="-1">你了解 axios 的原理吗？有看过它的源码吗？ <a class="header-anchor" href="#你了解-axios-的原理吗-有看过它的源码吗" aria-label="Permalink to &quot;你了解 axios 的原理吗？有看过它的源码吗？&quot;">​</a></h2><h2 id="ssr-解决了什么问题-有做过-ssr-吗-你是怎么做的" tabindex="-1">SSR 解决了什么问题？有做过 SSR 吗？你是怎么做的？ <a class="header-anchor" href="#ssr-解决了什么问题-有做过-ssr-吗-你是怎么做的" aria-label="Permalink to &quot;SSR 解决了什么问题？有做过 SSR 吗？你是怎么做的？&quot;">​</a></h2><h2 id="说下你的-vue-项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" tabindex="-1">说下你的 vue 项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？ <a class="header-anchor" href="#说下你的-vue-项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢" aria-label="Permalink to &quot;说下你的 vue 项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？&quot;">​</a></h2><h2 id="vue-要做权限管理该怎么做-如果控制到按钮级别的权限怎么做" tabindex="-1">vue 要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？ <a class="header-anchor" href="#vue-要做权限管理该怎么做-如果控制到按钮级别的权限怎么做" aria-label="Permalink to &quot;vue 要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？&quot;">​</a></h2><h2 id="vue-项目中你是如何解决跨域的呢" tabindex="-1">Vue 项目中你是如何解决跨域的呢？ <a class="header-anchor" href="#vue-项目中你是如何解决跨域的呢" aria-label="Permalink to &quot;Vue 项目中你是如何解决跨域的呢？&quot;">​</a></h2><h2 id="vue-项目本地开发完成后部署到服务器后报-404-是什么原因呢" tabindex="-1">vue 项目本地开发完成后部署到服务器后报 404 是什么原因呢？ <a class="header-anchor" href="#vue-项目本地开发完成后部署到服务器后报-404-是什么原因呢" aria-label="Permalink to &quot;vue 项目本地开发完成后部署到服务器后报 404 是什么原因呢？&quot;">​</a></h2><h2 id="你是怎么处理-vue-项目中的错误的" tabindex="-1">你是怎么处理 vue 项目中的错误的？ <a class="header-anchor" href="#你是怎么处理-vue-项目中的错误的" aria-label="Permalink to &quot;你是怎么处理 vue 项目中的错误的？&quot;">​</a></h2><h2 id="vue3-有了解过吗-能说说跟-vue2-的区别吗" tabindex="-1">Vue3 有了解过吗？能说说跟 Vue2 的区别吗？ <a class="header-anchor" href="#vue3-有了解过吗-能说说跟-vue2-的区别吗" aria-label="Permalink to &quot;Vue3 有了解过吗？能说说跟 Vue2 的区别吗？&quot;">​</a></h2><h2 id="vue3-系列-已完结" tabindex="-1">Vue3 系列 ( 已完结..) <a class="header-anchor" href="#vue3-系列-已完结" aria-label="Permalink to &quot;Vue3 系列 ( 已完结..)&quot;">​</a></h2><h2 id="vue3-0-的设计目标是什么-做了哪些优化" tabindex="-1">Vue3.0 的设计目标是什么？做了哪些优化? <a class="header-anchor" href="#vue3-0-的设计目标是什么-做了哪些优化" aria-label="Permalink to &quot;Vue3.0 的设计目标是什么？做了哪些优化?&quot;">​</a></h2><h2 id="vue3-0-性能提升主要是通过哪几方面体现的" tabindex="-1">Vue3.0 性能提升主要是通过哪几方面体现的？ <a class="header-anchor" href="#vue3-0-性能提升主要是通过哪几方面体现的" aria-label="Permalink to &quot;Vue3.0 性能提升主要是通过哪几方面体现的？&quot;">​</a></h2><h2 id="vue3-0-里为什么要用-proxy-api-替代-defineproperty-api" tabindex="-1">Vue3.0 里为什么要用 Proxy API 替代 defineProperty API ？ <a class="header-anchor" href="#vue3-0-里为什么要用-proxy-api-替代-defineproperty-api" aria-label="Permalink to &quot;Vue3.0 里为什么要用 Proxy API 替代 defineProperty API ？&quot;">​</a></h2><h2 id="vue3-0-所采用的-composition-api-与-vue2-x-使用的-options-api-有什么不同" tabindex="-1">Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？ <a class="header-anchor" href="#vue3-0-所采用的-composition-api-与-vue2-x-使用的-options-api-有什么不同" aria-label="Permalink to &quot;Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？&quot;">​</a></h2><h2 id="说说-vue-3-0-中-treeshaking-特性-举例说明一下" tabindex="-1">说说 Vue 3.0 中 Treeshaking 特性？举例说明一下？ <a class="header-anchor" href="#说说-vue-3-0-中-treeshaking-特性-举例说明一下" aria-label="Permalink to &quot;说说 Vue 3.0 中 Treeshaking 特性？举例说明一下？&quot;">​</a></h2><h2 id="用-vue3-0-写过组件吗-如果想实现一个-modal-你会怎么设计" tabindex="-1">用 Vue3.0 写过组件吗？如果想实现一个 Modal 你会怎么设计？ <a class="header-anchor" href="#用-vue3-0-写过组件吗-如果想实现一个-modal-你会怎么设计" aria-label="Permalink to &quot;用 Vue3.0 写过组件吗？如果想实现一个 Modal 你会怎么设计？&quot;">​</a></h2>',48),r=[t];function o(h,n,s,d,c,v){return l(),a("div",null,r)}const m=e(u,[["render",o]]);export{q as __pageData,m as default};
