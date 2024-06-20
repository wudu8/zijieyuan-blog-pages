import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.z7kdJ_yr.js";const l="/assets/webpack_server.D6A1mIhX.png",t="/assets/vite_server.CkYGnFZu.png",y=JSON.parse('{"title":"webpack vs vite","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P1 概念系列/14.webpack vs vite.md","filePath":"MiscellaneousTalk/P1 概念系列/14.webpack vs vite.md"}'),h={name:"MiscellaneousTalk/P1 概念系列/14.webpack vs vite.md"},e=n('<h1 id="webpack-vs-vite" tabindex="-1">webpack vs vite <a class="header-anchor" href="#webpack-vs-vite" aria-label="Permalink to &quot;webpack vs vite&quot;">​</a></h1><h2 id="webpack-底层" tabindex="-1">Webpack 底层 <a class="header-anchor" href="#webpack-底层" aria-label="Permalink to &quot;Webpack 底层&quot;">​</a></h2><p><img src="'+l+'" alt="webpack_server"></p><ul><li>为了交构建应用序，Webpack 必须抓取、处理和连接整个 JavaScript 文件，因为它是基于捆绑器的构建工具</li><li>对于依赖项和应用程序代码来说都是如此。即使启用了 HMR，更改也可能需要十秒钟才能显示在浏览器中，因为当您保存文件时，Webpack 会重建整个 JavaScript 包。</li><li>由于 Webpack 的延迟反馈循环，开发大型 JavaScript 应用程序将需要开发人员付出大量工作</li></ul><h2 id="vite-底层" tabindex="-1">vite 底层 <a class="header-anchor" href="#vite-底层" aria-label="Permalink to &quot;vite 底层&quot;">​</a></h2><p><img src="'+t+`" alt="vite_server"></p><ul><li>与 Webpack 等基于捆绑器的工作流程不同，Webpack 必须处理所有 JavaScript 模块，而 Vite 仅在单个浏览器请求之前处理您的依赖模块</li></ul><h2 id="理念差异" tabindex="-1">理念差异 <a class="header-anchor" href="#理念差异" aria-label="Permalink to &quot;理念差异&quot;">​</a></h2><ul><li><p>Webpack 和 Vite 作为现代 Web 应用程序的构建工具，都强调了可扩展性和社区支持的重要性。它们都通过插件系统赋予开发者强大的自定义功能。</p></li><li><p>Vite 的核心理念在于精简和高效性，它拥<code>抱现代浏览器原生支持 ES 模块</code>的能力，实现<code>快速启动、热更新</code>等特性，以提供极致的开发体验。Vite 通过与 Rollup 结合，保持核心小巧且易于维护，并鼓励建立一个兼容且繁荣的插件生态系统。</p></li><li><p>相比之下，Webpack 更侧重于全面性和灵活性，为各种规模和复杂度的项目提供了高度定制化的构建流程。Webpack 引入了一种<code>通用模块化方法论</code>，将所有类型的资源视为模块处理，并允许使用各种导入声明和加载器来表达依赖关系。这使得 Webpack 成为了大型或具有特定需求项目的理想选择。</p></li><li><p>总的来说，Vite 是为现代前端开发环境量身打造的轻量级工具，注重实时反馈和简化配置；而 Webpack 则是全能型的构建解决方案，适用于需要深度定制和优化的场景。尽管两者理念有所不同，但都在各自领域中推动着 Web 开发技术的发展和进步。</p></li></ul><h2 id="流行度、社区和生态系统" tabindex="-1">流行度、社区和生态系统 <a class="header-anchor" href="#流行度、社区和生态系统" aria-label="Permalink to &quot;流行度、社区和生态系统&quot;">​</a></h2><ul><li><p>Vite 是一个新人，于 2020 年首次亮相。尽管 Vite 存在的时间相对较短，但它很快就受到了关注，使其成为现代 Web 开发领域的一个有前途的参与者。</p></li><li><p>相比之下，Webpack 成立于 2012 年，拥有显着的领先优势。它在行业中的时间使其能够发展出成熟的生态系统和强大的社区</p></li></ul><h2 id="配置及易用性" tabindex="-1">配置及易用性 <a class="header-anchor" href="#配置及易用性" aria-label="Permalink to &quot;配置及易用性&quot;">​</a></h2><ul><li>Vite 和 Webpack 都提供了大量的配置选项，可以根据您的特定需求定制您的包</li></ul><h3 id="vite-精简配置" tabindex="-1">Vite 精简配置 <a class="header-anchor" href="#vite-精简配置" aria-label="Permalink to &quot;Vite 精简配置&quot;">​</a></h3><ul><li>Vite 以其零配置理念脱颖而出, 另外神奇之处在于它能够<code>自动检测大多数项目的正确设置</code>，以下是此类项目的简单 Vite 配置：</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@vitejs/plugin-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="webpack-的配置复杂度" tabindex="-1">Webpack 的配置复杂度 <a class="header-anchor" href="#webpack-的配置复杂度" aria-label="Permalink to &quot;Webpack 的配置复杂度&quot;">​</a></h3><ul><li>Webpack 往往需要更详细的配置。尽管它在最近的版本中已经转向零配置方法，但它并不像 Vite 那样自动</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> webpack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HotModuleReplacementPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bundle.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        exclude:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(node_modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">bower_components)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            presets: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue/dist/vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HotModuleReplacementPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li><p>与 Vite 相比，Webpack 的配置需要更多的手动设置。复杂性包括指定入口和输出路径、为不同文件类型配置加载器以及为特定功能设置插件</p></li><li><p>总之，Vite 更适合追求快速迭代和轻量级配置的现代前端开发者，尤其在较小规模的项目上体现出了优势；而 Webpack 则更适合那些需要深度定制构建流程和处理复杂场景的专业团队，其强大的配置能力和丰富的生态系统确保了它在大型项目中的广泛应用。</p></li></ul><h2 id="启动速度" tabindex="-1">启动速度 <a class="header-anchor" href="#启动速度" aria-label="Permalink to &quot;启动速度&quot;">​</a></h2><ul><li><p>Vite 通过一种完全不同的方法彻底改变了冷启动，极大地减少了初始化时间</p><ul><li><p><code>高效的依赖处理</code>：Vite 利用 esbuild （一个基于 Go 的高性能捆绑器）来预捆绑依赖项，包括纯 JavaScript 和大型模块。所有这些都极大地有助于更快的服务器启动。作为预捆绑过程的一部分，Vite 通过将具有众多内部模块的 ESM 依赖项合并到单个模块中来优化性能。例如，lodash-es 包含超过 600 个内部模块。当使用传统方法并导入类似 的函数时 debounce，会触发 600+ HTTP 请求。Vite 的解决方案是预先捆绑 lodash-es 成单个模块，将 HTTP 请求减少到一次。请求的大幅减少显着提高了开发服务器中的页面加载速度</p></li><li><p><code>按需源代码加载</code>： Vite 利用原生 ES 模块来提供源代码，最大限度地减少服务器负载和延迟。源代码转换和服务根据浏览器请求进行，从而提高了效率并减少了等待时间。</p></li></ul></li><li><p>另一方面，Webpack 采用基于捆绑的方法，预先捆绑源代码和依赖项，从而延长了开发过程中服务器的启动时间。相比于 Vite 的高效初始化，Webpack 的服务器搭建时间本质上较长</p></li><li><p>注意：当用户需要<code>额外数据、CSS 和资源</code>，Vite 的按需加载方式可能会带来轻微的延迟。如果这些资源需要进一步的捆绑步骤，这一点尤其值得注意。相反，Webpack 的策略确保所有站点数据可用，从而使浏览器更快地导航到开发服务器内的新页面</p></li></ul><h2 id="hmr-模块热更换" tabindex="-1">HMR（模块热更换） <a class="header-anchor" href="#hmr-模块热更换" aria-label="Permalink to &quot;HMR（模块热更换）&quot;">​</a></h2><ul><li><p>Vite 在本机 ESM 上采用 HMR，通过将一些捆绑工作卸载到浏览器来减少服务器负载和延迟。这确保了快速更新而无需重新加载整页，这对于开发过程中的实时反馈至关重要。</p></li><li><p>Webpack 还支持 HMR，支持实时更新并在开发过程中保留应用程序状态。然而，利用原生 ES 模块的潜在限制可能会导致更高的服务器负载和延迟。</p></li></ul><h2 id="缓存性能" tabindex="-1">缓存性能 <a class="header-anchor" href="#缓存性能" aria-label="Permalink to &quot;缓存性能&quot;">​</a></h2><p>缓存对于提高 Web 应用程序性能、通过重用存储的资源来减少负载和构建时间至关重要。</p><ul><li><p>Vite 中的缓存通过文件系统缓存进行管理，根据 package.json、 lockfiles 和 vite.config.js 的更改更新依赖项。它通过缓存已解析的依赖项请求来优化页面重新加载。</p></li><li><p>Webpack 也使用文件系统缓存，在监视模式下清除修改的文件，并在非监视模式下每次编译前清除缓存，需要自定义配置以获得最佳缓存。</p></li></ul><h2 id="构建优化" tabindex="-1">构建优化 <a class="header-anchor" href="#构建优化" aria-label="Permalink to &quot;构建优化&quot;">​</a></h2><ul><li>在优化现代 Web 开发中的构建过程时，Vite 和 Webpack 提供了不同的方法，每种方法都有自己的一套特性和功能</li></ul><h2 id="预加载指令生成" tabindex="-1">预加载指令生成 <a class="header-anchor" href="#预加载指令生成" aria-label="Permalink to &quot;预加载指令生成&quot;">​</a></h2><ul><li>Vite 自动生成<code>&lt;link rel=&quot;modulepreload&quot;&gt;</code>条目块的指令并在构建的 HTML 中直接导入它们</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;modulepreload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/module-a.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><ul><li>在 Webpack 中，为了实现资源的预加载（preload）或预获取（prefetch），开发者可以利用内联注释语法来指导 Webpack 生成相应的<code>&lt;link&gt;</code>标签</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* webpackPreload: true */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/module-a.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这将输出：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Webpack - Manual Module Preloading --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/module-a.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="css-代码分割" tabindex="-1">CSS 代码分割 <a class="header-anchor" href="#css-代码分割" aria-label="Permalink to &quot;CSS 代码分割&quot;">​</a></h3><ul><li><p>在 Vite 中，CSS 代码分割是通过其内置机制实现的，当检测到异步模块导入了 CSS 文件时，Vite 会自动将这些 CSS 内容提取并生成单独的 CSS 文件。这意味着，在动态导入 JavaScript 模块的同时，对应的 CSS 也会作为单独的资源加载，并且会在适当的时候（确保 CSS 已加载）执行异步模块以防止无样式内容闪现（FOUC）。开发人员只需正常地导入 CSS 文件，无需额外配置。</p></li><li><p>而在 Webpack 中，CSS 代码分割需要配合 mini-css-extract-plugin 这样的插件来实现。这个插件允许 Webpack 将 CSS 从 JS bundle 中分离出来，并为每个包含 CSS 的入口点或拆分点生成单独的 CSS 文件。为了启用 CSS 代码分割，开发者需要在 Webpack 配置文件中安装并配置</p></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MiniCssExtractPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          MiniCssExtractPlugin.loader, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将CSS提取到单独的文件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解析CSS中的import和url()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 其他规则...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MiniCssExtractPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[name].css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置输出的CSS文件名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[id].css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对于异步块的CSS文件名设置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 其他插件...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="代码分割和块加载" tabindex="-1">代码分割和块加载 <a class="header-anchor" href="#代码分割和块加载" aria-label="Permalink to &quot;代码分割和块加载&quot;">​</a></h2><h2 id="tree-shaking" tabindex="-1">Tree-Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree-Shaking&quot;">​</a></h2><h2 id="静态资源处理" tabindex="-1">静态资源处理 <a class="header-anchor" href="#静态资源处理" aria-label="Permalink to &quot;静态资源处理&quot;">​</a></h2><h2 id="服务器端渲染支持" tabindex="-1">服务器端渲染支持 <a class="header-anchor" href="#服务器端渲染支持" aria-label="Permalink to &quot;服务器端渲染支持&quot;">​</a></h2><h2 id="vue-js-and-jsx-support" tabindex="-1">Vue.js and JSX Support <a class="header-anchor" href="#vue-js-and-jsx-support" aria-label="Permalink to &quot;Vue.js and JSX Support&quot;">​</a></h2><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://kinsta.com/blog/vite-vs-webpack/" target="_blank" rel="noreferrer">https://kinsta.com/blog/vite-vs-webpack/</a></li></ul>`,46),p=[e];function k(E,r,d,c,o,g){return a(),i("div",null,p)}const F=s(h,[["render",k]]);export{y as __pageData,F as default};
