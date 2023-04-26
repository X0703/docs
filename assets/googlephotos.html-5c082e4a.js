import{_ as r,a as d,b as h}from"./Google-photosend-15a5bc4f.js";import{_ as c,M as u,X as p,P as e,a0 as o,a6 as t,O as g,aj as l,G as i}from"./framework-f837dd26.js";const _={},b=e("h1",{id:"google-photos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-photos","aria-hidden":"true"},"#"),o(" Google Photos")],-1),m=e("h2",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),o(" Root folder file_id")],-1),f=e("s",null,"It seems that a separate album cannot be mounted",-1),w={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"Reference",-1),k=e("h2",{id:"get-client-id-client-secret",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-client-id-client-secret","aria-hidden":"true"},"#"),o(" Get client_id, client_secret")],-1),v={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"client_id (client ID) client_secret (client secret key)",-1),x=e("strong",null,"Google Drive",-1),G=l('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Tip This app has not been verified by Google</p><p>You have been authorized to use an app that is currently in beta. Do not proceed unless you know the developer who invited you.</p><p>Let&#39;s click <strong>Continue</strong> on the left</p><p>Remember to check this option, otherwise an error will be reported, as explained in the following precautions</p><p><img src="'+r+'" alt="Googlephotos"></p></div><p>It is more convenient now. In fact, when obtaining Google cloud disk authorization, select the album permission at the same time, and the token obtained at that time can also be used to mount the album~ kill two birds with one stone</p><p>Remember to enable <strong><code>Photos Library API</code></strong></p>',3),j={href:"https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"mount-a-single-album-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mount-a-single-album-directory","aria-hidden":"true"},"#"),o(" Mount a single album directory")],-1),T={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"client ID",-1),M=e("strong",null,"secret key",-1),P=e("strong",null,"refresh_token",-1),A={href:"https://alist.nn.ci/tool/google/album",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,"Root file ID (that is, the album ID): default root, display all, if you only want to display a single album, you can fill in the album ID you want to display",-1),N=e("strong",null,[e("code",null,"access_token")],-1),R={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-5051171",target:"_blank",rel:"noopener noreferrer"},W=l('<h4 id="fill-in-the-example-diagram" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example-diagram" aria-hidden="true">#</a> Fill in the example diagram</h4><p><img src="'+d+'" alt="Googlephotos">#get-client-id-client-secret)</p><h2 id="two-notes" tabindex="-1"><a class="header-anchor" href="#two-notes" aria-hidden="true">#</a> Two notes:</h2>',3),z=e("li",null,[e("p",null,"failed get objs: failed to list objs: Request had insufficient authentication scopes.: []"),e("ul",null,[e("li",null,[o("It's because you didn't check the album permission (see the picture mentioned above) "),e("code",null,"view and organize the content in your Google Photos media library, and upload content to the media library when obtaining authorization. Learn more")]),e("li",null,[o("You get the "),e("code",null,"access_token"),o(" and the "),e("code",null,"refresh_token"),o(" without declearing the scope of "),e("code",null,"https://www.googleapis.com/auth/photoslibrary")])])],-1),U={href:"https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview",target:"_blank",rel:"noopener noreferrer"},H=e("ul",null,[e("li",null,[o("because "),e("strong",null,[e("code",null,"Photos Library API")]),o(" is not enabled in your project, Google Photos API")])],-1),Q=l('<h3 id="finish" tabindex="-1"><a class="header-anchor" href="#finish" aria-hidden="true">#</a> Finish</h3><p><img src="'+h+'" alt="Googlephotos"></p><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> The default download method used</h3>',3);function V(F,K){const n=i("ExternalLinkIcon"),a=i("RouterLink"),s=i("Mermaid");return u(),p("div",null,[b,m,e("p",null,[o("The root directory is root, and other directory IDs are unknown ("),f,o(" It has not been resolved yet "),e("a",w,[y,t(n)]),o(")")]),k,e("p",null,[o("Get the tool "),e("a",v,[o("https://alist.nn.ci/tool/google/request"),t(n)])]),e("p",null,[o("How to get your own "),I,o(" Go to "),t(a,{to:"/guide/drivers/googledrive.html"},{default:g(()=>[x]),_:1}),o(" which article")]),G,e("ul",null,[e("li",null,[e("a",j,[o("https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com"),t(n)])])]),D,e("p",null,[o("According to "),e("a",T,[o("above"),t(n)]),o(" obtained "),L,o(" and "),M,o(" and "),P]),e("p",null,[o("We fill in "),e("strong",null,[e("a",A,[o("https://alist.nn.ci/tool/google/album"),t(n)])]),o(" to get a single catalog ID for each of our Google Photos")]),e("ul",null,[E,e("li",null,[o("After we fill in, there will also be an "),N,o(" below. This can also be filled in the Alist background refresh token option and used. The refresh token obtained at the beginning can be used for both of them- "),e("a",R,[o("Explanation"),t(n)])])]),W,e("ol",null,[z,e("li",null,[e("p",null,[o("failed get objs: failed to list objs: Photos Library API has not been used in project ... before or it is disabled. Enable it by visiting "),e("a",U,[o("https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview"),t(n)]),o(" then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []")]),H])]),Q,t(s,{id:"mermaid-118",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLntg6j6U6wO9WNxXWYZKdcweUcIUuf3zcjYEyzQ+Xro0vwMfba0ESZgK6mgV9woT8b9f8GBUwT5KVcDHr/IrbqrJ1okJlFh2Wgp1IY2NwmN8wsdV3Mj8+TZ6Z"})])}const C=c(_,[["render",V],["__file","googlephotos.html.vue"]]);export{C as default};
