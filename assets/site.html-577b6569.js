import{_ as n,M as d,X as h,P as a,a0 as e,a6 as t,O as l,aj as o,G as r}from"./framework-f837dd26.js";const s={},c=o('<h1 id="网站设置" tabindex="-1"><a class="header-anchor" href="#网站设置" aria-hidden="true">#</a> 网站设置</h1><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>AList 的版本，只读。</p><h2 id="api地址" tabindex="-1"><a class="header-anchor" href="#api地址" aria-hidden="true">#</a> Api地址</h2>',4),u=o('<p>你的 AList 的地址，比如 <code>https://pan.nn.ci</code>。这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如</p><ul><li>本地存储的缩略图</li><li>开启web代理后的预览</li><li>开启web代理后的下载地址</li><li>反向代理至二级目录</li><li>...</li></ul><h2 id="基本路径" tabindex="-1"><a class="header-anchor" href="#基本路径" aria-hidden="true">#</a> 基本路径</h2>',3),p=a("code",null,"/",-1),_=a("code",null,"https://pan.nn.ci/alist",-1),f=a("code",null,"Api url",-1),x=a("code",null,"https://pan.nn.ci/alist",-1),b=o('<h2 id="网站标题" tabindex="-1"><a class="header-anchor" href="#网站标题" aria-hidden="true">#</a> 网站标题</h2><p>AList 的标题，例如 AList。</p><h2 id="公告" tabindex="-1"><a class="header-anchor" href="#公告" aria-hidden="true">#</a> 公告</h2><p>AList的公告，如 <code>### Hello\\nWelcome to use Alist</code>。我们建议您在内容前添加标题，例如 <code>### Hello</code>，以免内容被关闭按钮覆盖。</p><ul><li>如想不显示，可以清空公告内内容即可不显示。</li></ul><h2 id="分页类型" tabindex="-1"><a class="header-anchor" href="#分页类型" aria-hidden="true">#</a> 分页类型</h2><ul><li>全部：一次显示所有文件。</li><li>分页：在页面底部显示一个“分页器”。</li><li>加载更多：在页面底部显示“加载更多”按钮。</li><li>自动加载更多：滚动到页面底部时自动加载更多文件。</li></ul><h2 id="默认每页文件数量" tabindex="-1"><a class="header-anchor" href="#默认每页文件数量" aria-hidden="true">#</a> 默认每页文件数量</h2><p>AList 的默认每页文件数量，当 <code>Pagination type</code> 没有被设置为 <code>All</code> 时生效，例如 <code>20</code>。</p><h2 id="允许索引" tabindex="-1"><a class="header-anchor" href="#允许索引" aria-hidden="true">#</a> 允许索引</h2><p>是否允许其他人挂载你的Alist后进行索引构建，勾选后开启。</p><p><strong>默认为关闭状态，谨慎使用。</strong> （3.8.0版本新增功能）</p>',12);function m(A,L){const i=r("RouterLink");return d(),h("div",null,[c,a("blockquote",null,[a("p",null,[e("在v3.0.2及之后被弃用，已经移至"),t(i,{to:"/zh/config/configuration.html#site-url"},{default:l(()=>[e("site_url")]),_:1})])]),u,a("blockquote",null,[a("p",null,[e("在v3.0.2及之后被弃用，已经移至"),t(i,{to:"/zh/config/configuration.html#site-url"},{default:l(()=>[e("site_url")]),_:1})])]),a("p",null,[e("默认 "),p,e("，如果你想反向代理子目录，详见"),t(i,{to:"/zh/faq/howto.html#how-to-reverse-proxy-with-sub-directory"},{default:l(()=>[e("带有子目录的反向代理")]),_:1}),e("，需要设置该字段为 AList，比如 "),_,e("，同时需要设置 "),f,e(" 为 "),x,e("。")]),b])}const k=n(s,[["render",m],["__file","site.html.vue"]]);export{k as default};
