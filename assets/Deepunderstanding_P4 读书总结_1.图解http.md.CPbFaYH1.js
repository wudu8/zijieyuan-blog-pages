import{_ as t,c as d,o as r,a3 as e}from"./chunks/framework.b23AWjfV.js";const a="/zijieyuan-blog-pages/assets/tcpip.B_j0ak0y.png",i="/zijieyuan-blog-pages/assets/tcp%E5%88%86%E5%B1%82.9s929wuT.png",S=JSON.parse('{"title":"图解 http","description":"","frontmatter":{},"headers":[],"relativePath":"Deepunderstanding/P4 读书总结/1.图解http.md","filePath":"Deepunderstanding/P4 读书总结/1.图解http.md"}'),o={name:"Deepunderstanding/P4 读书总结/1.图解http.md"},l=e('<h1 id="图解-http" tabindex="-1">图解 http <a class="header-anchor" href="#图解-http" aria-label="Permalink to &quot;图解 http&quot;">​</a></h1><h2 id="了解-web-及网络基础" tabindex="-1">了解 Web 及网络基础 <a class="header-anchor" href="#了解-web-及网络基础" aria-label="Permalink to &quot;了解 Web 及网络基础&quot;">​</a></h2><h3 id="http-的诞生" tabindex="-1">HTTP 的诞生 <a class="header-anchor" href="#http-的诞生" aria-label="Permalink to &quot;HTTP 的诞生&quot;">​</a></h3><ul><li>1989 年 3 月，互联网还只属于少数人。在这一互联网的黎明期，HTTP 诞生了。</li><li>CERN（欧洲核子研究组织）的蒂姆 • 伯纳斯 - 李（Tim BernersLee）博士提出了一种能让远隔两地的研究者们共享知识的设想。</li><li>最初设想的基本理念是：借助多文档之间相互关联形成的超文本（HyperText），连成可相互参阅的 WWW（World Wide Web，万维网）。</li><li>现在已 ᨀ 出了 3 项 WWW 构建技术，分别是： <ul><li>把 SGML（Standard Generalized Markup Language，标准通用标记语言）作为页面的文本标记语言的 HTML（HyperText Markup Language，超文本标记语言）；</li><li>作为文档传递协议的 HTTP ；</li><li>指定文档所在地址的 URL（Uniform Resource Locator，统一资源定位符）。</li></ul></li><li>WWW 这一名称，是 Web 浏览器当年用来浏览超文本的客户端应用程序时的名称。现在则用来表示这一系列的集合，也可简称为 Web</li></ul><h3 id="tcp-ip" tabindex="-1">TCP/IP <a class="header-anchor" href="#tcp-ip" aria-label="Permalink to &quot;TCP/IP&quot;">​</a></h3><ul><li>通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运作 的。而 HTTP 属于它内部的一个子集</li><li>TCP/IP 是互联网相关的各类协议族的总称</li></ul><p><img src="'+a+'" alt="tcpip" data-fancybox="gallery"></p><h4 id="tcp-ip-的分层管理" tabindex="-1"><code>TCP/IP 的分层管理</code> <a class="header-anchor" href="#tcp-ip-的分层管理" aria-label="Permalink to &quot;`TCP/IP 的分层管理`&quot;">​</a></h4><ul><li>应用层 <ul><li>应用层决定了向用户提供应用服务时通信的活动。TCP/IP 协议族内预存了各类通用的应用服务。比如，FTP 、DNS、HTTP 。</li></ul></li><li>传输层 <ul><li>传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。在传输层有两个性质不同的协议：TCP 和 UDP。</li></ul></li><li>网络层（又名网络互连层） <ul><li>网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内选择一条传输路线。</li></ul></li><li>链路层（又名数据链路层，网络接口层） <ul><li>用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等物理可见部分（。硬件上的范畴均在链路层的作用范围之内</li></ul></li></ul><p><img src="'+i+'" alt="tcp分层" data-fancybox="gallery"></p><h2 id="简单的-http-协议" tabindex="-1">简单的 HTTP 协议 <a class="header-anchor" href="#简单的-http-协议" aria-label="Permalink to &quot;简单的 HTTP 协议&quot;">​</a></h2><ul><li>HTTP 协议和 TCP/IP 协议族内的其他众多的协议相同，用于客户端和 服务器之间的通信。</li><li>请求访问文本或图像等资源的一端称为客户端，而提供资源响应的一 端称为服务器端</li><li><code>HTTP 是不保存状态的协议</code>，为了实现期望的保持状态功能，于 是引入了 Cookie 技术</li></ul><h3 id="http-方法" tabindex="-1">HTTP 方法 <a class="header-anchor" href="#http-方法" aria-label="Permalink to &quot;HTTP 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>说明</th><th>支持的 HTTP 协议版本</th></tr></thead><tbody><tr><td>GET</td><td>获取资源</td><td>1.0、1.1</td></tr><tr><td>POST</td><td>传输实体主体（例如表单数据）</td><td>1.0、1.1</td></tr><tr><td>PUT</td><td>传输文件或更新资源</td><td>1.0、1.1</td></tr><tr><td>HEAD</td><td>获得报文首部信息，但不返回实体内容</td><td>1.0、1.1</td></tr><tr><td>DELETE</td><td>删除指定的资源</td><td>1.0、1.1</td></tr><tr><td>OPTIONS</td><td>查询服务器支持哪些 HTTP 方法</td><td>1.1</td></tr><tr><td>TRACE</td><td>回显服务器收到的请求，用于测试和诊断</td><td>1.1</td></tr><tr><td>CONNECT</td><td>要求在服务器与代理之间建立隧道，常用于 SSL</td><td>1.1</td></tr><tr><td>LINK</td><td>建立当前文档和另一个文档之间的关系链接</td><td>1.0 （实际中并不常用）</td></tr><tr><td>UNLINK</td><td>断开两个通过 LINK 方法建立的关系</td><td>1.0 （实际中并不常用）</td></tr></tbody></table><h2 id="http-状态码" tabindex="-1">HTTP 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;HTTP 状态码&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类别</th><th>原因短语</th></tr></thead><tbody><tr><td>1XX Informational（信息性状态码）</td><td>接收到请求，服务器正在处理中</td></tr><tr><td>2XX Success（成功状态码）</td><td>请求已成功接收并处理完成</td></tr><tr><td>3XX Redirection（重定向状态码）</td><td>需要客户端进行额外操作（如跳转）以完成请求</td></tr><tr><td>4XX Client Error（客户端错误状态码）</td><td>由于客户端原因导致服务器无法满足请求</td></tr><tr><td>5XX Server Error（服务器错误状态码）</td><td>服务器在处理请求过程中遇到错误</td></tr></tbody></table><h3 id="状态吗详解" tabindex="-1">状态吗详解 <a class="header-anchor" href="#状态吗详解" aria-label="Permalink to &quot;状态吗详解&quot;">​</a></h3><table tabindex="0"><thead><tr><th>类别</th><th>原因短语</th></tr></thead><tbody><tr><td>200 OK</td><td>表示从客户端发来的请求在服务器端被正常处理了</td></tr><tr><td>204 No Content</td><td>代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分</td></tr><tr><td>206 Partial Content</td><td>表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容</td></tr><tr><td>301 Moved Permanently</td><td>永久性重定向。表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI</td></tr><tr><td>302 Found</td><td>临时性重定向。表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问</td></tr><tr><td>303 See Other</td><td>由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源</td></tr><tr><td>304 Not Modified</td><td>表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。304 状态码返回时不包含任何响应的主体部分</td></tr><tr><td>307 Temporary Redirect</td><td>临时重定向。与 302 Found 有着相同的含义</td></tr><tr><td>400 Bad Request</td><td>表示请求报文中存在语法错误</td></tr><tr><td>401 Unauthorized</td><td>表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息</td></tr><tr><td>403 Forbidden</td><td>表明对请求资源的访问被服务器拒绝了</td></tr><tr><td>404 Not Found</td><td>表明服务器上无法找到请求的资源</td></tr><tr><td>500 Internal Server Error</td><td>表明服务器端在执行请求时发生了错误。也有可能是 Web 应用存在的 bug 或某些临时的故障</td></tr><tr><td>503 Service Unavailable</td><td>表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求</td></tr></tbody></table><h2 id="在-http-出现之前的协议" tabindex="-1">在 HTTP 出现之前的协议 <a class="header-anchor" href="#在-http-出现之前的协议" aria-label="Permalink to &quot;在 HTTP 出现之前的协议&quot;">​</a></h2><table tabindex="0"><thead><tr><th>协议名称</th><th>描述</th></tr></thead><tbody><tr><td>FTP (File Transfer Protocol)</td><td>传输文件时使用的协议，历史悠久，可追溯至 1973 年前后，尽管在 1995 年被 HTTP 的流量超越，至今仍广泛沿用。</td></tr><tr><td>NNTP (Network News Transfer Protocol)</td><td>用于 NetNews 电子会议室中消息传递的协议，于 1986 年前后出现，随着 Web 信息交换成为主流，该协议已较少使用。</td></tr><tr><td>Archie</td><td>搜索匿名 FTP 公开文件信息的协议，约在 1990 年前后出现，目前不常使用。</td></tr><tr><td>WAIS (Wide Area Information Servers)</td><td>通过关键词检索多个数据库的协议，诞生于 1991 年前后，现已被 HTTP 协议替代，不再常见。</td></tr><tr><td>Gopher</td><td>查找互联网连接计算机内信息的协议，同样在 1991 年前后出现，由于被 HTTP 协议取代，现今已较少使用。</td></tr></tbody></table><h2 id="http-首部" tabindex="-1">HTTP 首部 <a class="header-anchor" href="#http-首部" aria-label="Permalink to &quot;HTTP 首部&quot;">​</a></h2><h3 id="通用首部字段" tabindex="-1">通用首部字段 <a class="header-anchor" href="#通用首部字段" aria-label="Permalink to &quot;通用首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Cache-Control</td><td>控制缓存的行为</td></tr><tr><td>Connection</td><td>逐跳首部、连接的管理</td></tr><tr><td>Date</td><td>创建报文的日期时间</td></tr><tr><td>Pragma</td><td>报文指令</td></tr><tr><td>Trailer</td><td>报文末端的首部一览</td></tr><tr><td>Transfer-Encoding</td><td>指定报文主体的传输编码方式</td></tr><tr><td>Upgrade</td><td>升级为其他协议</td></tr><tr><td>Via</td><td>代理服务器的相关信息</td></tr><tr><td>Warning</td><td>错误通知</td></tr></tbody></table><h3 id="请求首部字段" tabindex="-1">请求首部字段 <a class="header-anchor" href="#请求首部字段" aria-label="Permalink to &quot;请求首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Accept</td><td>用户代理可处理的媒体类型</td></tr><tr><td>Accept-Charset</td><td>优先的字符集</td></tr><tr><td>Accept-Encoding</td><td>优先的内容编码</td></tr><tr><td>Accept-Language</td><td>优先的语言（自然语言）</td></tr><tr><td>Authorization</td><td>Web 认证信息</td></tr><tr><td>Expect</td><td>期待服务器的特定行为</td></tr><tr><td>From</td><td>用户的电子邮箱地址</td></tr><tr><td>Host</td><td>请求资源所在服务器</td></tr><tr><td>If-Match</td><td>比较实体标记（ETag）</td></tr><tr><td>If-Modified-Since</td><td>比较资源的更新时间</td></tr><tr><td>If-None-Match</td><td>比较实体标记（与 If-Match 相反）</td></tr><tr><td>If-Range</td><td>资源未更新时发送实体 Byte 的范围请求</td></tr><tr><td>If-Unmodified-Since</td><td>比较资源的更新时间（与 If-Modified-Since 相反）</td></tr><tr><td>Max-Forwards</td><td>最大传输逐跳数</td></tr><tr><td>Proxy-Authorization</td><td>代理服务器要求客户端的认证信息</td></tr><tr><td>Range</td><td>实体的字节范围请求</td></tr><tr><td>Referer</td><td>对请求中 URI 的原始获取方</td></tr><tr><td>TE</td><td>传输编码的优先级</td></tr><tr><td>User-Agent</td><td>HTTP 客户端程序的信息</td></tr></tbody></table><h3 id="响应首部字段" tabindex="-1">响应首部字段 <a class="header-anchor" href="#响应首部字段" aria-label="Permalink to &quot;响应首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Accept-Ranges</td><td>是否接受字节范围请求</td></tr><tr><td>Age</td><td>推算资源创建经过时间</td></tr><tr><td>ETag</td><td>资源的匹配信息</td></tr><tr><td>Location</td><td>令客户端重定向至指定 URI</td></tr><tr><td>Proxy-Authenticate</td><td>代理服务器对客户端的认证信息</td></tr><tr><td>Retry-After</td><td>对再次发起请求的时机要求</td></tr><tr><td>Server</td><td>HTTP 服务器的安装信息</td></tr><tr><td>Vary</td><td>代理服务器缓存的管理信息</td></tr><tr><td>WWW-Authenticate</td><td>服务器对客户端的认证信息</td></tr></tbody></table><h3 id="实体首部字段" tabindex="-1">实体首部字段 <a class="header-anchor" href="#实体首部字段" aria-label="Permalink to &quot;实体首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Allow</td><td>资源可支持的 HTTP 方法</td></tr><tr><td>Content-Encoding</td><td>实体主体适用的编码方式（如 gzip）</td></tr><tr><td>Content-Language</td><td>实体主体的自然语言</td></tr><tr><td>Content-Length</td><td>实体主体的大小（单位：字节）</td></tr><tr><td>Content-Location</td><td>替代对应资源的 URI</td></tr><tr><td>Content-MD5</td><td>实体主体的报文摘要，用于校验传输完整性</td></tr><tr><td>Content-Range</td><td>实体主体的位置范围，用于字节范围请求</td></tr><tr><td>Content-Type</td><td>实体主体的媒体类型及字符集</td></tr><tr><td>Expires</td><td>实体主体过期的日期时间，决定缓存有效期</td></tr><tr><td>Last-Modified</td><td>资源的最后修改日期时间，用于缓存验证</td></tr></tbody></table><h3 id="cookie-服务的首部字段" tabindex="-1">Cookie 服务的首部字段 <a class="header-anchor" href="#cookie-服务的首部字段" aria-label="Permalink to &quot;Cookie 服务的首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th><th>首部类型</th></tr></thead><tbody><tr><td>Set-Cookie</td><td>开始状态管理所使用的 Cookie 信息</td><td>响应首部字段</td></tr><tr><td>Cookie</td><td>服务器接收到的 Cookie 信息</td><td>请求首部字段</td></tr></tbody></table><h4 id="set-cookie-属性" tabindex="-1">Set-Cookie 属性 <a class="header-anchor" href="#set-cookie-属性" aria-label="Permalink to &quot;Set-Cookie 属性&quot;">​</a></h4><table tabindex="0"><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>NAME=VALUE</td><td>必需项，赋予 Cookie 的名称及其对应的值</td></tr><tr><td>expires=DATE</td><td>指定 Cookie 的有效期，若不明确指定，则默认为浏览器关闭前为止</td></tr><tr><td>path=PATH</td><td>设置服务器上文件目录作为 Cookie 的适用对象，若不指定则默认为创建 Cookie 的文档所在的文件目录</td></tr><tr><td>domain=域名</td><td>指定 Cookie 适用的域名，若不指定则默认为创建 Cookie 的服务器域名</td></tr><tr><td>Secure</td><td>标识符，仅在 HTTPS 安全通信时该 Cookie 才会被发送到服务器</td></tr><tr><td>HttpOnly</td><td>标识符，限制 Cookie 不能通过 JavaScript 脚本访问，有助于防止跨站脚本攻击（XSS）对 Cookie 信息的窃取和篡改</td></tr></tbody></table><h3 id="其他首部字段" tabindex="-1">其他首部字段 <a class="header-anchor" href="#其他首部字段" aria-label="Permalink to &quot;其他首部字段&quot;">​</a></h3><table tabindex="0"><thead><tr><th>首部字段名</th><th>说明</th><th>可选值与含义</th></tr></thead><tbody><tr><td>X-Frame-Options</td><td>控制网站内容在其他 Web 网站的 Frame 标签内的显示问题，防止点击劫持</td><td>DENY：拒绝<br>SAMEORIGIN：仅同源域名下的页面匹配时许可</td></tr><tr><td>X-XSS-Protection</td><td>针对跨站脚本攻击（XSS）的一种对策，控制浏览器 XSS 防护机制开关</td><td>0：将 XSS 过滤设置成无效状态<br>1：将 XSS 过滤设置成有效状态</td></tr><tr><td>DNT</td><td>Do Not Track 的简称，表示用户是否同意被精准广告追踪</td><td>0：同意被追踪<br>1：拒绝被追踪</td></tr><tr><td>P3P</td><td>让 Web 网站上的个人隐私信息以程序可理解的形式呈现，旨在保护用户隐私</td><td>-</td></tr></tbody></table><h2 id="确保-web-安全的-https" tabindex="-1">确保 Web 安全的 HTTPS <a class="header-anchor" href="#确保-web-安全的-https" aria-label="Permalink to &quot;确保 Web 安全的 HTTPS&quot;">​</a></h2><ul><li>HTTP+ 加密 + 认证 + 完整性保护 = HTTPS</li></ul><h2 id="确认访问用户身份的认证" tabindex="-1">确认访问用户身份的认证 <a class="header-anchor" href="#确认访问用户身份的认证" aria-label="Permalink to &quot;确认访问用户身份的认证&quot;">​</a></h2><ul><li>BASIC 认证（基本认证）</li><li>DIGEST 认证（摘要认证）</li><li>SSL 客户端认证</li><li>FormBase 认证（基于表单认证）</li></ul><h2 id="基于-http-的功能追加协议" tabindex="-1">基于 HTTP 的功能追加协议 <a class="header-anchor" href="#基于-http-的功能追加协议" aria-label="Permalink to &quot;基于 HTTP 的功能追加协议&quot;">​</a></h2><h3 id="spdy-消除-http-瓶颈" tabindex="-1">SPDY （消除 HTTP 瓶颈） <a class="header-anchor" href="#spdy-消除-http-瓶颈" aria-label="Permalink to &quot;SPDY （消除 HTTP 瓶颈）&quot;">​</a></h3><ul><li><p><code>HTTP 标准就会成为瓶颈</code></p><ol><li>一条连接上只可发送一个请求。</li><li>请求只能从客户端开始。客户端不可以接收除响应以外的指 令。</li><li>请求/响应首部未经压缩就发送。首部信息越多延迟越大。</li><li>发送冗长的首部。每次互相发送相同的首部造成的浪费较 多</li></ol></li><li><p>SPDY 的设计与功能</p><ul><li>SPDY 没有完全改写 HTTP 协议，而是在 TCP/IP 的应用层与运输层之间通过新加会话层的形式运作。同时，考虑到安全性问题，SPDY 规定通信中使用 SSL。</li><li>SPDY 以会话层的形式加入，控制对数据的流动，但还是采用 HTTP 建立通信连接。因此，可照常使用 HTTP 的 GET 和 POST 等方 法、Cookie 以及 HTTP 报文等。</li></ul></li><li><p>使用 SPDY 后，HTTP 协议额外获得以下功能。</p><ol><li><code>多路复用流</code> 通过单一的 TCP 连接，可以无限制处理多个 HTTP 请求。所有请求 的处理都在一条 TCP 连接上完成，因此 TCP 的处理效率得到提高。</li><li><code>赋予请求优先级</code> SPDY 不仅可以无限制地并发处理请求，还可以给请求逐个分配优先 级顺序。这样主要是为了在发送多个请求时，解决因带宽低而导致响应变慢的问题</li><li><code> 压缩 HTTP 首部</code> 压缩 HTTP 请求和响应的首部。</li><li><code>推送功能</code> 支持服务器主动向客户端推送数据的功能。</li><li><code>服务器提示功能</code> 服务器可以主动提 示客户端请求所需的资源。</li></ol></li></ul><h3 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h3><h3 id="http-2-0" tabindex="-1">HTTP/2.0 <a class="header-anchor" href="#http-2-0" aria-label="Permalink to &quot;HTTP/2.0&quot;">​</a></h3><h3 id="web-服务器管理文件的-webdav" tabindex="-1">Web 服务器管理文件的 WebDAV <a class="header-anchor" href="#web-服务器管理文件的-webdav" aria-label="Permalink to &quot;Web 服务器管理文件的 WebDAV&quot;">​</a></h3><h2 id="web-的攻击技术" tabindex="-1">Web 的攻击技术 <a class="header-anchor" href="#web-的攻击技术" aria-label="Permalink to &quot;Web 的攻击技术&quot;">​</a></h2><ul><li><p>对 Web 应用的攻击模式有两种</p><ol><li>主动攻击：主动攻击（active attack）是指攻击者通过直接访问 Web 应用，把攻击代码传入的攻击模式</li><li>被动攻击：是指利用圈套策略执行攻击代码的攻击模式。在被动攻击过程中，攻击者不直接对目标 Web 应用访问发起攻击</li></ol></li></ul><table tabindex="0"><thead><tr><th>安全漏洞类别</th><th>具体安全漏洞</th></tr></thead><tbody><tr><td>输出值转义漏洞</td><td>跨站脚本攻击（XSS）<br>SQL 注入攻击<br>OS 命令注入攻击<br>HTTP 首部注入攻击<br>邮件首部注入攻击<br>目录遍历攻击<br>远程文件包含漏洞</td></tr><tr><td>设置或设计上的漏洞</td><td>强制浏览<br>不正确的错误消息处理<br>开放重定向</td></tr><tr><td>会话管理漏洞</td><td>会话劫持<br>会话固定攻击<br>跨站点请求伪造（CSRF）</td></tr><tr><td>其他安全漏洞</td><td>密码破解<br>点击劫持<br>拒绝服务攻击（DoS）<br>后门程序</td></tr></tbody></table><h2 id="书本" tabindex="-1">书本 <a class="header-anchor" href="#书本" aria-label="Permalink to &quot;书本&quot;">​</a></h2><p><a href="./files/%E5%9B%BE%E8%A7%A3Http.pdf">图解 Http.pdf</a></p>',50),h=[l];function n(b,c,T,P,s,u){return r(),d("div",null,h)}const k=t(o,[["render",n]]);export{S as __pageData,k as default};
