import{_ as d,a as c,b as l}from"./onedrive-update-permission-e18ee92d.js";import{_ as h,M as p,X as u,P as e,a0 as t,a6 as o,O as _,aj as a,G as i}from"./framework-f837dd26.js";const m={},f=e("h1",{id:"onedrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive","aria-hidden":"true"},"#"),t(" OneDrive")],-1),g={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"Tips",-1),b={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"create-an-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-application","aria-hidden":"true"},"#"),t(" Create an application")],-1),w=e("blockquote",null,[e("p",null,"You can also choose to skip this step and use the client provided by default, but requires the approval of the organization administrator.")],-1),x=e("li",null,"On the page that opens, select the region and click Create Application",-1),y=e("code",null,"Register Application",-1),A=e("code",null,"Name",-1),S=e("code",null,"Accounts and Individuals in Any Organization Directory",-1),I={href:"https://alist.nn.ci/tool/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"register",-1),N=e("img",{src:d,alt:"client_id"},null,-1),z=a('<li>After registering the application, select <code>Certificate and Password</code>, click <code>New Client Password</code>, enter a string of passwords, select the one with the longest time, and click <code>Add</code> (Note: The password entered after adding will disappear, please record the value of client_secret) <img src="'+c+'" alt="client_secret"></li><li>Select <code>API Permissions</code>, click <code>MicroSoft Graph</code>, enter file in the <code>Select Permissions</code>, and check <code>Files.read</code> (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click <code>Update Permission</code><img src="'+l+'" alt="api"></li>',2),F=e("h3",{id:"get-refresh-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-refresh-token","aria-hidden":"true"},"#"),t(" Get refresh token")],-1),O={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},P=a('<h3 id="get-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#get-sharepoint-site-id" aria-hidden="true">#</a> Get Sharepoint site_id</h3><p>If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.</p><h3 id="add-storage" tabindex="-1"><a class="header-anchor" href="#add-storage" aria-hidden="true">#</a> Add storage</h3><p>Fill in the values ​​obtained in the above process one by one.</p><h4 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> Root folder path</h4><p>The default is <code>/</code>, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as <code>/test</code></p><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> The default download method used</h3>',7);function G(R,B){const r=i("RouterLink"),n=i("ExternalLinkIcon"),s=i("Mermaid");return p(),u("div",null,[f,e("div",g,[k,e("p",null,[t("If your account does not support the API, (for example, the school account has not verified the administrator, or the administrator has disabled the API), then you can also mount it through webdav. For details, see "),o(r,{to:"/guide/drivers/webdav.html"},{default:_(()=>[t("webdav")]),_:1})])]),e("p",null,[t("First open "),e("a",b,[t("https://alist.nn.ci/tool/onedrive/request"),o(n)])]),v,w,e("ul",null,[x,e("li",null,[t("After logging in, select "),y,t(", enter "),A,t(", and select "),S,t(" (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as "),e("a",I,[t("https://alist.nn.ci/tool/onedrive/callback"),o(n)]),t(", "),C,t(", and then you can get client_id "),N]),z]),F,e("p",null,[t("Fill in the client_id and client_secret obtained in the previous step into the "),e("a",O,[t("https://alist.nn.ci/tool/onedrive/request"),o(n)]),t(" page, click Get Refresh Token, you can get the refresh token")]),P,o(s,{id:"mermaid-68",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const Q=h(m,[["render",G],["__file","onedrive.html.vue"]]);export{Q as default};
