import{_ as s,c as i,o as e,a3 as a}from"./chunks/framework.z7kdJ_yr.js";const g=JSON.parse('{"title":"Subresource Integrity","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P3 你不知道的JavaScript/7.Subresource Integrity.md","filePath":"MiscellaneousTalk/P3 你不知道的JavaScript/7.Subresource Integrity.md"}'),t={name:"MiscellaneousTalk/P3 你不知道的JavaScript/7.Subresource Integrity.md"},r=a(`<h1 id="subresource-integrity" tabindex="-1">Subresource Integrity <a class="header-anchor" href="#subresource-integrity" aria-label="Permalink to &quot;Subresource Integrity&quot;">​</a></h1><h2 id="sri-是什么" tabindex="-1">SRI 是什么 <a class="header-anchor" href="#sri-是什么" aria-label="Permalink to &quot;SRI 是什么&quot;">​</a></h2><p>子资源完整性（Subresource Integrity，SRI）是允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改</p><h2 id="sri-解决了什么问题" tabindex="-1">SRI 解决了什么问题 <a class="header-anchor" href="#sri-解决了什么问题" aria-label="Permalink to &quot;SRI 解决了什么问题&quot;">​</a></h2><ul><li><strong>中间人攻击（MITM）</strong>: SRI 可防止中间人通过篡改远程资源代码来注入恶意脚本。</li><li><strong>供应者安全性问题</strong>: 当网站依赖于第三方库或 CDN 提供的内容时，即使该第三方受到攻击或发生配置错误，SRI 也能保护用户不受恶意代码影响。</li></ul><h2 id="sri-的功能和特点" tabindex="-1">SRI 的功能和特点 <a class="header-anchor" href="#sri-的功能和特点" aria-label="Permalink to &quot;SRI 的功能和特点&quot;">​</a></h2><ul><li>浏览器根据以下步骤处理 SRI：</li></ul><blockquote><p>当浏览器在 <code>&lt;script&gt; </code>或者 <code>&lt;link&gt;</code> 标签中遇到 integrity 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的哈希值和期望的哈希值。 对于从其他来源提供的资源的子资源完整性验证，浏览器还使用跨源资源共享（CORS）检查资源，以确保提供资源的来源允许它与请求来源共享。</p></blockquote><blockquote><p>如果脚本或样式表不符合其相关的 integrity 值，浏览器必须拒绝执行该脚本或拒绝应用该样式表，并且必须返回一个网络错误，表明该脚本或样式表的获取失败。</p></blockquote><ul><li>使用特点：</li></ul><ol><li><strong>哈希值校验</strong>：开发人员在引用外部资源时，在 HTML 标签中提供一个基于资源内容生成的加密散列值（通常采用 SHA-256, SHA-384 或 SHA-512 算法）。当浏览器下载资源后，会计算其实际内容的哈希值，并与引用中的预期哈希值进行比较，只有二者匹配才会执行或应用该资源。</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://example.com/example-framework.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  integrity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="2"><li><p><code>跨域支持</code>：通过 crossorigin 属性，SRI 还可以与 CORS 一起工作，以便从其他源正确加载并验证资源。</p></li><li><p><code>完整性保障</code>：如果资源内容在服务器端被更改，浏览器检测到哈希值不匹配，则会拒绝加载资源，从而避免潜在的恶意行为对客户端产生危害。</p></li></ol><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity</a></p>`,15),l=[r];function n(o,h,c,p,u,d){return e(),i("div",null,l)}const y=s(t,[["render",n]]);export{g as __pageData,y as default};
