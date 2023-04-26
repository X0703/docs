import{_ as n,M as r,X as c,P as t,a0 as e,a6 as a,aj as i,G as l}from"./framework-f837dd26.js";const s={},d=t("h1",{id:"_2fa",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2fa","aria-hidden":"true"},"#"),e(" 2FA")],-1),h={href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank",rel:"noopener noreferrer"},p={href:"https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a",target:"_blank",rel:"noopener noreferrer"},u=i('<p>Then login to ALIST manage and goto <code>Profile</code> page, click <code>Enable 2FA</code> button, scan the QR code with your 2FA app, and enter the code generated by your 2FA app.</p><p>Finally, click <code>Verify</code> button to enable 2FA.</p><ul><li>Each user can set a different &quot;2FA&quot; verification, how to cancel see the method below</li></ul><br><h2 id="how-to-cancel-2fa-verification" tabindex="-1"><a class="header-anchor" href="#how-to-cancel-2fa-verification" aria-hidden="true">#</a> <strong>How to cancel 2FA verification:</strong></h2><p>one、(≥ v3.15.0)</p><blockquote><p>If you forget the 2FA of your non-Admin account, you can tell the administrator to clear it for you</p><p>Enter the background --&gt; user, click &quot;cancel two-step verification&quot;</p><p>If the 2FA of the admin account is lost, please see the second step how to clear 2FA</p></blockquote><p>two、</p><blockquote><p>How to enter the folder where Alist is located</p><ul><li><ol><li><strong>Windows</strong>: Go to the folder where Alist is located and enter: <strong>alist.exe cancel2fa</strong></li></ol></li><li><ol start="2"><li><strong>Linux</strong>: Enter the folder where Alist is located and input, <strong>./alist cancel2fa</strong></li></ol></li><li><ol start="3"><li><strong>docker</strong>: docker directly input <strong>docker exec -it alist ./alist cancel2fa</strong></li></ol></li></ul><p><strong>After the above input is deleted, it is found that there is still a restart~</strong></p></blockquote>',9);function f(g,_){const o=l("ExternalLinkIcon");return r(),c("div",null,[d,t("p",null,[e("To enable 2-factor authentication, you need to install a app that support 2FA (such as "),t("a",h,[e("Google Authenticator"),a(o)]),e(","),t("a",p,[e("Microsoft Authenticator"),a(o)]),e("), on your phone.")]),u])}const A=n(s,[["render",f],["__file","2fa.html.vue"]]);export{A as default};
