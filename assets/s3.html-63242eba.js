import{_,a as u,b as p,c as g,d as m,e as f,f as b,g as k,h as S,i as v,j as y,k as x}from"./sc-a0e729d8.js";import{_ as w,M as O,X as E,a6 as o,O as s,P as e,a0 as t,aj as B,G as c}from"./framework-f837dd26.js";const A={},C=B('<h1 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储" aria-hidden="true">#</a> 对象存储</h1><p>S3 对象存储协议，如 COS、OSS、B2。</p><h2 id="存储桶" tabindex="-1"><a class="header-anchor" href="#存储桶" aria-hidden="true">#</a> 存储桶</h2><p>存储桶名</p><h2 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> Endpoint</h2><p>Endpoint address（不知道可以看下方的官方文档）</p><h2 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> Region</h2><p>地区（不知道可以看下方的官方文档）</p><h2 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> Access key id</h2><p>Access key id</p><h2 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> Secret access key</h2><p>Secret access key</p><h2 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> Root folder path</h2><p>根路径，不填则默认为根目录。</p><h2 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> Custom Host</h2><p>自定义 CDN 加速域名</p><h2 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> Sign url expire</h2><p>签名下载地址的有效期默认为 4 小时。 如果使用自定义加速域名，该选项无效。</p><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> Placeholder</h2><p>占位符文件的名称。</p><h2 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> Force path style</h2><p>是否启用 <code>ForcePathStyle</code>，通常是 minio 需要的。</p><h2 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> List object version</h2><p>参见 S3 的 SDK 文档。</p><h2 id="添加对象存储示例及官方文档" tabindex="-1"><a class="header-anchor" href="#添加对象存储示例及官方文档" aria-hidden="true">#</a> 添加对象存储示例及官方文档</h2>',25),j={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"阿里云OSS官网",-1),D={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},K=e("strong",null,"公共云下OSS各地域Endpoint对照表",-1),I=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[t("Alist挂载"),e("strong",null,"阿里云盘"),t("需要跳过 "),e("code",null,"referer"),t(" ，若你在防盗链开启不允许 "),e("code",null,"referer"),t(" 为空的话会无法使用，因为阿里云盘用的就是阿里云OSS（北京地区的）")]),e("p",null,[t("其实 "),e("code",null,"地区|Region"),t(" 选项写 "),e("code",null,"Endpoint"),t(" 一样的也可以用，但是为了规范还是照着对照表写吧。")])],-1),L=e("p",null,"填写示例：",-1),N=e("p",null,[e("img",{src:_,alt:"s3"})],-1),T=e("p",null,null,-1),U={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"腾讯云COS官网",-1),z={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},V=e("strong",null,"公共云下COS各地域Endpoint对照表",-1),Z=e("p",null,"填写示例：",-1),F=e("p",null,[e("img",{src:u,alt:"s3"})],-1),M=e("p",null,null,-1),J={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},P=e("strong",null,"天翼云OOS官网",-1),X={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},Y=e("strong",null,"公共云下OOS各地域Endpoint对照表",-1),G=e("p",null,"填写示例：",-1),H=e("p",null,[e("img",{src:p,alt:"s3"})],-1),W=e("p",null,null,-1),Q={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},$=e("strong",null,"百度云BOS官网",-1),ee={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#%E8%AE%BE%E7%BD%AEreferer%E7%99%BD%E5%90%8D%E5%8D%95",target:"_blank",rel:"noopener noreferrer"},te=e("strong",null,"自行配置Bucket的Referer白名单权限",-1),oe={href:"https://cloud.baidu.com/doc/BOS/s/akrqd2wcx",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"公共云下BOS各地域Region和Endpoint对照表",-1),se=e("strong",null,"兼容AWS S3的Endpoint对照表",-1),le={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},re=e("strong",null,"点击查看具体",-1),ae=e("p",null,"填写示例：",-1),ce=e("p",null,[e("img",{src:g,alt:"s3"})],-1),ie=e("p",null,null,-1),de={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},he=e("strong",null,"七牛云Kodo官网",-1),_e={href:"https://developer.qiniu.com/kodo/4088/s3-access-domainname",target:"_blank",rel:"noopener noreferrer"},ue=e("strong",null,"公共云下Kodo各地域Region和Endpoint对照表",-1),pe=e("p",null,"填写示例：",-1),ge=e("p",null,[e("img",{src:m,alt:"s3"})],-1),me=e("p",null,null,-1),fe={href:"https://console.huaweicloud.com/console/#/obs/manager/buckets",target:"_blank",rel:"noopener noreferrer"},be=e("strong",null,"华为云OBS官网",-1),ke={href:"https://developer.huaweicloud.com/endpoint?OBS",target:"_blank",rel:"noopener noreferrer"},Se=e("strong",null,"公共云下OBS各地域Region和Endpoint对照表自行查看",-1),ve={href:"https://console.huaweicloud.com/iam/?region=cn-north-4&locale=zh-cn#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"填写示例：",-1),xe=e("p",null,[e("img",{src:f,alt:"s3"})],-1),we={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},Oe=e("strong",null,"京东云OSS官网",-1),Ee={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},Ae=e("strong",null,"公共云下OSS各地域Region和Endpoint对照表",-1),Ce=e("p",null,"填写示例：",-1),je=e("p",null,[e("img",{src:b,alt:"s3"})],-1),Re={href:"https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&v=new",target:"_blank",rel:"noopener noreferrer"},De=e("strong",null,"移动云EOS官网",-1),Ke=e("p",null,"需要预充值100元才能开通，不推荐用。",-1),Ie={href:"https://ecloud.10086.cn/op-help-center/doc/article/48082",target:"_blank",rel:"noopener noreferrer"},Le=e("strong",null,"公共云下OSS各地域Region和Endpoint对照表",-1),Ne=e("p",null,"填写示例：",-1),Te=e("p",null,[e("img",{src:k,alt:"s3"})],-1),Ue=e("p",null,null,-1),qe={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},ze=e("strong",null,"又拍云USS官网",-1),Ve={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},Ze=e("strong",null,"亚马逊S3官网",-1),Fe=e("p",null,"端点 URL 包含存储桶所在的区域名称",-1),Me=e("p",null,[t("例"),e("sup",null,"1"),t("，如果您的存储桶位于美国东部（俄亥俄）区域")],-1),Je=e("blockquote",null,[e("p",null,[t("则 Endpoint (终端节点) URL 的格式为 "),e("strong",null,[e("code",null,"s3.us-east-2.amazonaws.com/your-bucket-name")])]),e("p",null,[t("Region (地区)参数："),e("strong",null,[e("code",null,"us-east-2")])]),e("p",null,[t("存储桶名称："),e("strong",null,[e("code",null,"your-bucket-name")]),t("（你自己的存储桶名称）")])],-1),Pe=e("p",null,[t("例"),e("sup",null,"2"),t("，我的的存储桶是"),e("code",null,"东京"),t("的，存储桶名字叫 "),e("code",null,"cdn-aw"),t("，那么完整的参数填写就是如下")],-1),Xe=e("strong",null,"Endpoint",-1),Ye={href:"http://s3.ap-northeast-1.amazonaws.com",target:"_blank",rel:"noopener noreferrer"},Ge=e("li",null,[e("strong",null,"地区"),t("：ap-northeast-1")],-1),He=e("li",null,[e("strong",null,"存储桶名称"),t("：cdn-aw")],-1),We=e("p",null,"下面我们看一下完整的参数填写示例吧",-1),Qe=e("p",null,"填写示例",-1),$e=e("p",null,[e("img",{src:S,alt:"s3"})],-1),et={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},tt=e("strong",null,"cloudflare R2官网",-1),ot=e("p",null,[e("strong",null,"Endpoint"),t(" ：S3 端点可通过 "),e("strong",null,[e("code",null,"https://<ACCOUNT_ID>.r2.cloudflarestorage.com")]),t(" 端点使用")],-1),nt=e("p",null,[e("strong",null,[e("code",null,"ACCOUNT_ID")]),t(" 就是你的账号ID，随处可见例如顶部地址栏链接后面的ID就是你账号ID")],-1),st=e("p",null,"填写示例：",-1),lt=e("p",null,[e("img",{src:v,alt:"s3"})],-1),rt={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},at=e("strong",null,"B2官网",-1),ct=e("p",null,[t("国外的，全称 "),e("strong",null,[e("code",null,"Backblaze")]),t("，不需要验证信息，说是前10G免费。")],-1),it=e("p",null,"填写示例：",-1),dt=e("p",null,[e("img",{src:y,alt:"s3"})],-1),ht={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},_t=e("strong",null,"scaleway官网",-1),ut=e("p",null,"国外的，需要卡验证信息",-1),pt={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},gt=e("strong",null,"公共云下Scaleway各地域Region和Endpoint对照表",-1),mt=e("p",null,"填写示例：",-1),ft=e("p",null,[e("img",{src:x,alt:"s3"})],-1),bt=e("h3",{id:"默认使用的下载方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),t(" 默认使用的下载方式")],-1);function kt(St,vt){const n=c("ExternalLinkIcon"),i=c("RouterLink"),d=c("Tabs"),h=c("Mermaid");return O(),E("div",null,[C,o(d,{id:"75",data:[{title:"阿里云"},{title:"腾讯云"},{title:"天翼云"},{title:"百度云"},{title:"七牛云"},{title:"华为云"},{title:"京东云"},{title:"移动云"},{title:"又拍云"},{title:"亚马逊"},{title:"R2"},{title:"B2"},{title:"Scaleway"}],"tab-id":"S3"},{tab0:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",j,[R,o(n)])]),e("p",null,[e("a",D,[K,o(n)])]),I,L,N,T]),tab1:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",U,[q,o(n)])]),e("p",null,[e("a",z,[V,o(n)])]),Z,F,M]),tab2:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",J,[P,o(n)])]),e("p",null,[e("a",X,[Y,o(n)])]),G,H,W]),tab3:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",Q,[$,o(n)])]),e("p",null,[e("a",ee,[te,o(n)])]),e("p",null,[e("a",oe,[ne,o(n)])]),e("p",null,[se,e("a",le,[re,o(n)])]),ae,ce,ie]),tab4:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",de,[he,o(n)])]),e("p",null,[e("a",_e,[ue,o(n)])]),pe,ge,me]),tab5:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",fe,[be,o(n)])]),e("p",null,[e("a",ke,[Se,o(n)]),t("对应的")]),e("p",null,[t("秘钥AK/SK"),e("a",ve,[t("获取"),o(n)]),t("自行设置")]),ye,xe]),tab6:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",we,[Oe,o(n)])]),e("p",null,[t("优点："),e("a",Ee,[t("免费10G"),o(n)]),t("，支持IPV6 缺点：需要预充值100元才能开通，不推荐尝试，但是预存开通对象存储后提现依旧可以用。")]),e("p",null,[e("a",Be,[Ae,o(n)])]),Ce,je]),tab7:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",Re,[De,o(n)])]),Ke,e("p",null,[e("a",Ie,[Le,o(n)])]),Ne,Te,Ue]),tab8:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",qe,[ze,o(n)]),t("："),o(i,{to:"/zh/guide/drivers/uss.html"},{default:s(()=>[t("点击这里进行配置USS")]),_:1})])]),tab9:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",Ve,[Ze,o(n)])]),Fe,Me,Je,Pe,e("blockquote",null,[e("ol",null,[e("li",null,[Xe,t(" ："),e("a",Ye,[t("s3.ap-northeast-1.amazonaws.com"),o(n)])]),Ge,He])]),We,Qe,$e]),tab10:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",et,[tt,o(n)])]),ot,nt,st,lt]),tab11:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",rt,[at,o(n)])]),ct,it,dt]),tab12:s(({title:l,value:r,isActive:a})=>[e("p",null,[e("a",ht,[_t,o(n)])]),ut,e("p",null,[e("a",pt,[gt,o(n)])]),mt,ft]),_:1}),bt,o(h,{id:"mermaid-339",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})])}const wt=w(A,[["render",kt],["__file","s3.html.vue"]]);export{wt as default};
