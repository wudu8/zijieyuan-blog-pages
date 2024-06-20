import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.z7kdJ_yr.js";const o=JSON.parse('{"title":"SparkMD5","description":"","frontmatter":{},"headers":[],"relativePath":"Toolkit/每日工具库/21.spark-md5.md","filePath":"Toolkit/每日工具库/21.spark-md5.md"}'),n={name:"Toolkit/每日工具库/21.spark-md5.md"},h=t(`<h1 id="sparkmd5" tabindex="-1">SparkMD5 <a class="header-anchor" href="#sparkmd5" aria-label="Permalink to &quot;SparkMD5&quot;">​</a></h1><h2 id="sparkmd5-是什么" tabindex="-1">SparkMD5 是什么？ <a class="header-anchor" href="#sparkmd5-是什么" aria-label="Permalink to &quot;SparkMD5 是什么？&quot;">​</a></h2><ul><li>SparkMD5 是一个专为浏览器环境设计的 JavaScript 库，它提供了高效的 MD5 哈希计算功能。MD5 是一种广泛使用的散列函数，用于生成任意大小输入数据的固定长度（128 位）哈希值。SparkMD5 基于 JKM md5 库进行了优化和封装，以实现对大文件分块处理，并能有效地在客户端（如 Web 浏览器）中进行增量或流式计算 MD5 值</li></ul><h2 id="sparkmd5-解决了什么问题" tabindex="-1">SparkMD5 解决了什么问题 <a class="header-anchor" href="#sparkmd5-解决了什么问题" aria-label="Permalink to &quot;SparkMD5 解决了什么问题&quot;">​</a></h2><ul><li>SparkMD5 主要解决了在浏览器环境中高效计算大文件 MD5 值的问题。</li><li>由于浏览器的限制，一次性加载和处理大文件可能导致性能瓶颈甚至内存溢出。SparkMD5 允许开发者通过将大文件分割成小块来逐步计算其 MD5 值，</li><li>这样就不需要一次性加载整个文件到内存中，极大地提高了在前端环境下处理大文件时的性能和用户体验。</li></ul><h2 id="sparkmd5-api" tabindex="-1">SparkMD5 API <a class="header-anchor" href="#sparkmd5-api" aria-label="Permalink to &quot;SparkMD5 API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法名</th><th>功能描述</th></tr></thead><tbody><tr><td>append(str)</td><td>追加一个字符串，如果需要会先将其编码为 UTF8。用于增量计算 MD5 值。</td></tr><tr><td>appendBinary(str)</td><td>追加一个二进制字符串（如：由<code>readAsBinaryString</code>废弃方法返回的字符串）。用于增量计算 MD5 值。</td></tr><tr><td>end(raw)</td><td>完成 MD5 计算，返回十六进制结果。如果 raw 参数为真，则返回二进制格式的结果。</td></tr><tr><td>reset()</td><td>重置内部 MD5 计算状态。</td></tr><tr><td>getState()</td><td>返回一个表示内部 MD5 计算状态的对象，可以传递给 setState()恢复中断的增量 MD5 计算。</td></tr><tr><td>setState(state)</td><td>设置内部 MD5 计算状态。参见：getState()。</td></tr><tr><td>destroy()</td><td>释放由增量缓冲区和其他附加资源占用的内存。</td></tr><tr><td>SparkMD5.hash(str, raw)</td><td>直接对一个字符串进行 MD5 哈希运算并返回结果。若 raw 参数为真则返回二进制格式结果，否则返回十六进制结果。</td></tr><tr><td>SparkMD5.hashBinary(str, raw)</td><td>直接对一个二进制字符串进行 MD5 哈希运算并返回结果。若 raw 参数为真则返回二进制格式结果，否则返回十六进制结果。</td></tr><tr><td><strong>SparkMD5.ArrayBuffer 类相关方法</strong></td><td></td></tr><tr><td>ArrayBuffer#append(arr)</td><td>追加一个 ArrayBuffer 对象到计算队列中。</td></tr><tr><td>ArrayBuffer#end(raw)</td><td>完成基于 ArrayBuffer 对象的 MD5 计算，返回十六进制或二进制格式的结果。</td></tr><tr><td>ArrayBuffer#reset()</td><td>重置基于 ArrayBuffer 对象的 MD5 计算状态。</td></tr><tr><td>ArrayBuffer#destroy()</td><td>释放与 ArrayBuffer 相关的增量缓冲区和额外资源占用的内存。</td></tr><tr><td>ArrayBuffer#getState()</td><td>获取基于 ArrayBuffer 对象的 MD5 计算内部状态，可用于恢复中断的增量计算。</td></tr><tr><td>ArrayBuffer#setState(state)</td><td>设置基于 ArrayBuffer 对象的 MD5 计算内部状态，以继续之前保存的状态下的计算。</td></tr><tr><td>ArrayBuffer.hash(arr, raw)</td><td>直接对一个 ArrayBuffer 对象进行 MD5 哈希运算并返回十六进制或二进制格式的结果。</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;change&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> blobSlice </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.slice </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.mozSlice </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.webkitSlice,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.files[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunkSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2097152</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Read in chunks of 2MB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ceil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file.size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunkSize),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    currentChunk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    spark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SparkMD5.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fileReader </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileReader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fileReader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;read chunk nr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, currentChunk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;of&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, chunks);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    spark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.target.result); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  注意一：这里一直在累加</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    currentChunk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (currentChunk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunks) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      loadNext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;finished loading&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;computed hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, spark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Compute hash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fileReader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onerror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oops, something went wrong.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadNext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentChunk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunkSize,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunkSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file.size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file.size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunkSize;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 注意二：这里一直在切片追加内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fileReader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readAsArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(blobSlice.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, start, end));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loadNext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2>`,10),k=[h];function l(p,e,r,E,d,y){return a(),i("div",null,k)}const F=s(n,[["render",l]]);export{o as __pageData,F as default};
