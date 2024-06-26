import{_ as l,c as i,o as e,a3 as o}from"./chunks/framework.b23AWjfV.js";const a="/zijieyuan-blog-pages/assets/%E5%89%8D%E7%AB%AF%E8%B4%A8%E9%87%8F%E4%BF%9D%E9%9A%9C.BU3TYV1Y.png",b=JSON.parse('{"title":"前端质量保障","description":"","frontmatter":{},"headers":[],"relativePath":"MiscellaneousTalk/P1 概念系列/10.前端质量保障.md","filePath":"MiscellaneousTalk/P1 概念系列/10.前端质量保障.md"}'),r={name:"MiscellaneousTalk/P1 概念系列/10.前端质量保障.md"},t=o('<h1 id="前端质量保障" tabindex="-1">前端质量保障 <a class="header-anchor" href="#前端质量保障" aria-label="Permalink to &quot;前端质量保障&quot;">​</a></h1><h2 id="基本原则" tabindex="-1">基本原则 <a class="header-anchor" href="#基本原则" aria-label="Permalink to &quot;基本原则&quot;">​</a></h2><ul><li><code>三层四面</code></li></ul><p><img src="'+a+'" alt="前端质量保障" data-fancybox="gallery"></p><h2 id="开发阶段" tabindex="-1">开发阶段 <a class="header-anchor" href="#开发阶段" aria-label="Permalink to &quot;开发阶段&quot;">​</a></h2><ol><li><p>测试服务</p><ul><li>测试作为质量保障的基础手段，其效率和准确性在很大程度上依赖于完善的测试环境、强大的测试工具以及高效的测试服务。</li><li><strong>对于兼容性测试</strong>: 先进的工具可实现一键模拟多台设备渲染页面，并通过截图比对自动生成报告，显著提高问题定位速度，如能自动标识出存在问题的机型，则极大地<code>简化了兼容性问题的发现过程</code>。</li><li><strong>自动化测试方面</strong>: 便捷的脚本录制功能使得非程序员也能快速创建自动化测试用例，无需手动编写代码来驱动测试流程。这种特性如网易 Airtest 等工具所具备的，可以极大<code>提升回归测试的覆盖面和执行效率</code>，<code>减轻人工测试负担</code>，确保产品质量得到持续有效的验证。</li></ul></li><li><p>技术架构标准化</p><ul><li>技术架构标准化是基于最佳实践的原则，其核心目标在于提升开发效率和保障开发质量。关键机制：</li><li><strong>预防与消除潜在问题</strong>：技术架构标准化通过对设计的硬性约束，能够有效防止或减少因人为错误导致的故障隐患，通过<code>预先设定的技术规范和框架约束</code>，使得开发者在遵循标准的过程中降低出错概率。</li><li><strong>复杂度控制</strong>：面对需求不断增长和技术规模扩大带来的复杂度挑战，技术架构标准化通过<code>采用框架</code>、<code>组件化</code>以及 <code>MVVM</code> 等架构模式来分解和简化系统结构，从而有效地管理并降低实现层面的复杂度。</li><li><strong>团队协作优化</strong>：通过<code>约束开发模式、统一团队开发风格</code>，技术架构标准化有助于保持代码的一致性和可维护性，避免个人风格差异造成的额外复杂度，促进团队成员之间的高效协同工作，进一步提升整体项目的质量和稳定性。</li></ul></li><li><p>外部依赖质量管理</p><ul><li>通用的依赖一般来说有：CDN、网络、容器、接口、基础框架/库、sdk（埋点、监控之类的）、打包工具等等。关键要形成两点判断：</li><li><code>第一，依赖是否可靠</code>，比如出问题了能否找到维护方、核心的依赖如果崩溃有没有降级兜底方案等；</li><li><code>第二，依赖是否彻底解耦</code>，比如某些配置不应该跨项目或者跨团队存在，否则一定会相互中伤</li><li>CDN：一个主要问题是节点故障</li><li>网络：一个主要问题是劫持，资源被劫持后，响应没有带跨域 Access-Control-Allow-Origin: *这个头，就会导致资源因跨域而被浏览器拒绝执行，页面就挂了</li><li>容器：Webview 可能出现各种问题</li><li>接口：接口异常监控，还需要考虑对接口的调用量进行监控</li><li>基础框架/库：原则上需要锁定版本，不要完全指望开发者遵循 semver 版本语义，任何变动都可能产生故障。</li><li>sdk：引入的 sdk 也是可能出问题的。像监控类的 sdk 必须先加载，且必须是同步加载，可考虑内联，避免网络加载失败</li><li>打包工具:检测 es6 代码，检测循环引用，检测重复包等</li></ul></li><li><p>日志</p><ul><li>需要记日志场景：统计某个指标、排查问题、监控异常</li><li>需要记日志的地方：主动监控（接口、业务异常等），被动监控（网络/资源时延与成功率、页面性能、js error）</li></ul></li><li><p>技术方案</p><ul><li>技术方案都是后端主导，毕竟业务逻辑主要在后端，前端只是负责展示，</li><li>而且后端涉及库表、缓存、接口、系统调用关系、逻辑流等，很容易画出一堆图来讲，</li><li>前端要是没个明确指南，技术方案往往不知道写啥</li><li><strong>技术方案主要目的</strong>有三个： <ul><li><code>提前想清楚关键问题</code>，比如：影响范围、依赖资源、数据来源、核心逻辑、接口方案、兜底方案、监控方案、测试方案、上线方案</li><li><code>排期的依据</code>：大型需求只有经过拆解才可能给出准确排期</li><li><code>同行把关</code>：从团队管理角度，一般在各个细分领域有至少主备两人（或多人）专门负责。评审时视情况将相关的负责人拉进来，协助扫雷</li></ul></li></ul></li><li><p>SOP</p><ul><li>SOP（标准操作程序）是一种流程标准化的行动指南，SOP 应该达到的标准是任何新人看着文档就能一步步完成整个操作</li></ul></li><li><p>需求管理</p><ul><li>需求管理可以做的事情包括：</li><li><code>质疑必要性、合理性</code>，凡事先想为什么。无明确收益或收益不可衡量的拍脑袋式的需求，拒绝执行或优先级往后排（有些事拖一拖往往有转变）</li><li><code>大需求、探索性需求可考虑分期开展</code></li><li><code>明确要做的事情</code>，符合问题与目标所定义的范畴</li><li><code>需求变更不能轻易接受</code>，哪怕是需要接受的合理变更，也应该给需求方施加一点压力</li><li><code>对产品本人需要有判断</code>，比如刚加入团队，又提比较大的需求，大概率会出现较多的需求变更</li></ul></li></ol><h2 id="集成阶段" tabindex="-1">集成阶段 <a class="header-anchor" href="#集成阶段" aria-label="Permalink to &quot;集成阶段&quot;">​</a></h2><ol><li><p>分支管理</p><ul><li>禁止本地直接 push master，禁止远程直接修改 master</li><li>合并 master 强制走 pr，必须有 approve 才能合并</li><li>锁定线上环境发布的分支，避免其他分支因误操作被发上线</li></ul></li><li><p>封禁期 / 灰度 / 渐进式</p><ul><li>封禁期是一种风控手段，避免节假日上线，除了可能因用户量增加放大故障的后果，还有就是避免因休假无人修 bug</li><li>灰度发布主要是避免一次性上线，导致潜在故障也跟着瞬间全量</li><li>渐进式是一种基础理念，不仅体现在发布过程，也体现在日常做事中</li></ul></li><li><p>Code Review</p><ul><li>需要 Review 的内容：</li><li>代码质量（前置校验、边界条件、复用、技术实现、加日志...）</li><li>代码可读性（指出看不懂的地方、改命名、加注释...）</li><li>发现问题（技术实现的问题、业务逻辑的问题...）</li></ul></li></ol><h2 id="线上阶段" tabindex="-1">线上阶段 <a class="header-anchor" href="#线上阶段" aria-label="Permalink to &quot;线上阶段&quot;">​</a></h2><ol><li><p>监控</p><ul><li>监控系统的责任，是尽快发现问题。</li><li><a href="https://github.com/bison1994/JavaScript-Sketches/blob/master/Engineering/Monitor.md" target="_blank" rel="noreferrer">监控平台</a></li></ul></li><li><p>备份、降级、开关</p><ul><li>各个重点功能都必须考虑备份方案，出问题了可自动降级，或通过开关控制，关闭入口</li></ul></li><li><p>故障管理</p><ul><li>明确问题</li><li>及时止损</li><li>定位原因</li><li>复盘总结</li></ul></li></ol><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://google.github.io/eng-practices/review/" target="_blank" rel="noreferrer">Google 如何 codereview</a></li><li><a href="https://juejin.cn/post/6856375724979257352#heading-30" target="_blank" rel="noreferrer">https://juejin.cn/post/6856375724979257352#heading-30</a></li></ul>',12),c=[t];function s(d,n,u,p,h,_){return e(),i("div",null,c)}const m=l(r,[["render",s]]);export{b as __pageData,m as default};
