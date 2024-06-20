import{_ as e,c as s,o as a,a3 as l}from"./chunks/framework.z7kdJ_yr.js";const d=JSON.parse('{"title":"WebAssembly","description":"","frontmatter":{},"headers":[],"relativePath":"TechnologyExploration/前端技术探索/7.WebAssembly.md","filePath":"TechnologyExploration/前端技术探索/7.WebAssembly.md"}'),t={name:"TechnologyExploration/前端技术探索/7.WebAssembly.md"},b=l('<h1 id="webassembly" tabindex="-1">WebAssembly <a class="header-anchor" href="#webassembly" aria-label="Permalink to &quot;WebAssembly&quot;">​</a></h1><h2 id="webassembly-是什么" tabindex="-1">WebAssembly 是什么？ <a class="header-anchor" href="#webassembly-是什么" aria-label="Permalink to &quot;WebAssembly 是什么？&quot;">​</a></h2><ul><li>WebAssembly 是一种新的编码方式，可以在现代的网络浏览器中运行 － 它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如 C / C ++等语言提供一个编译目标，以便它们可以在 Web 上运行。它也被设计为可以与 JavaScript 共存，允许两者一起工作。</li><li>对于网络平台而言，WebAssembly 具有巨大的意义——它提供了一条途径，以使得以各种语言编写的代码都可以以接近原生的速度在 Web 中运行。在这种情况下，以前无法以此方式运行的客户端软件都将可以运行在 Web 中</li></ul><h2 id="webassembly-解决了什么问题" tabindex="-1">WebAssembly 解决了什么问题？ <a class="header-anchor" href="#webassembly-解决了什么问题" aria-label="Permalink to &quot;WebAssembly 解决了什么问题？&quot;">​</a></h2><ul><li>WebAssembly 解决了 Web 应用程序性能和功能的限制问题。传统的 Web 应用程序使用 JavaScript 作为主要的开发语言，但 JavaScript 在处理大量计算密集型任务时性能较低。WebAssembly 通过提供一种高效的二进制格式，使得开发者可以使用其他编程语言编写性能更高的代码，并在浏览器中运行</li></ul><blockquote><p>补充：asm.js 也可以做到这种效果；它有两个优点：首先，它是文本，人类可读，比较直观；其次，所有浏览器都支持 asm.js，不会有兼容性问题</p></blockquote><h2 id="webassembly-如何生成" tabindex="-1">WebAssembly 如何生成？ <a class="header-anchor" href="#webassembly-如何生成" aria-label="Permalink to &quot;WebAssembly 如何生成？&quot;">​</a></h2><p>目前可以用 Emscripten 来生成</p><blockquote><p>Emscripten 是一个完整的 WebAssembly 开源编译器工具链。使用 Emscripten，可以将 C 和 C++ 代码或使用 LLVM 的任何其他语言编译为 WebAssembly，并在 Web、Node.js 或其他 Wasm 运行时上运行。将其他语言的 C/C++ 运行时编译成 WebAssembly，然后以间接的方式运行其他语言的代码（例如，Python 和 Lua 就是这样做的）。</p></blockquote><ul><li><a href="https://emscripten.org/docs/introducing_emscripten/about_emscripten.html" target="_blank" rel="noreferrer">https://emscripten.org/docs/introducing_emscripten/about_emscripten.html</a></li></ul><h2 id="webassembly-如何配置" tabindex="-1">WebAssembly 如何配置？ <a class="header-anchor" href="#webassembly-如何配置" aria-label="Permalink to &quot;WebAssembly 如何配置？&quot;">​</a></h2><p>要在 Web 应用程序中使用 WebAssembly，需要进行一些配置：</p><ul><li>编写 WebAssembly 模块：使用其他编程语言编写 WebAssembly 模块的源代码。</li><li>编译 WebAssembly 模块：使用适当的编译器将 WebAssembly 模块编译为二进制格式（.wasm 文件）。</li><li>在 Web 应用程序中加载 WebAssembly 模块：使用 JavaScript 代码加载 WebAssembly 模块，并将其实例化为可供调用的对象。</li><li>调用 WebAssembly 模块：通过 JavaScript 代码调用 WebAssembly 模块中导出的函数或方法。</li></ul><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><ul><li><a href="https://www.wasm.com.cn/" target="_blank" rel="noreferrer">https://www.wasm.com.cn/</a></li><li><a href="https://emscripten.org/docs/introducing_emscripten/about_emscripten.html" target="_blank" rel="noreferrer">https://emscripten.org/docs/introducing_emscripten/about_emscripten.html</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/WebAssembly/Concepts" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/WebAssembly/Concepts</a></li></ul>',15),r=[b];function o(i,m,n,c,h,p){return a(),s("div",null,r)}const W=e(t,[["render",o]]);export{d as __pageData,W as default};
