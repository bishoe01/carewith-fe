if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let u={};const c=e=>a(e,t),r={module:{uri:t},exports:u,require:c};s[t]=Promise.all(n.map((e=>r[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"044dd787e5e30cf2f780e7ddec0efa11"},{url:"/_next/static/chunks/2100-61462c2445a6b323.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/2607-791199cb6f51ca48.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/2631e2f4-87f2fac4af67d7ca.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/370b0802-404f8b9905b52421.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/3971-61236a7ab417f0b4.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/4100-349c5e86ed44ea14.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/53c13509-6a98b64bb4637ba2.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/6648-221a501afafd1cee.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/66ec4792-ee28422b7a58ffde.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/7023-42f3fa04661a84e5.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/7116-6ff5ede7718aeeeb.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/7756-608ae47d9ab9a516.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/795d4814-7707afa897396128.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/8e1d74a4-4606b590b4a6eed0.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/9c4e2130-af0e921bb4d8cdd1.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/(manage)/register/add/page-63a003efe2f8a5ef.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/(manage)/register/page-95e86f8b628d2e56.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/(manage)/register/search/page-bab1f6de2193a9dd.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/_not-found/page-dae518749e202d03.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/auth/kakao/redirect/page-3c96726b6a24062b.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/cartridge/%5Bslug%5D/edit/complete/page-3d33ff20254ba313.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/cartridge/%5Bslug%5D/edit/page-5d0c2f184158df10.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/cartridge/%5Bslug%5D/page-d1fafa666c85f698.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/cartridge/page-1827c90f87c5b639.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/home/page-c1f72e41c7cf59e9.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/layout-d43bd6c18e07801d.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/loading-81316514d54ebfb4.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/page-373a741974af2268.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/account/page-0667fe0f4fc9ab22.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/billing/page-74cfa214b5c8dcff.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/conditions/page-204199549cd75996.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/cs/page-19850d646e93f446.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/choice/direct/page-9c2b41a167388464.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/choice/page-9fd0c633da9508b1.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/choice/qr/page-c80660c9c105bb4e.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/choice/regist/%5Bslug%5D/complete/page-f361a23c9b7b236e.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/choice/regist/%5Bslug%5D/page-fa376cc30b84efec.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/manage/page-391311a501a1de48.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/page-5e8883cf07235149.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/dispenser/profile/page-e62a85e3c7d82fb7.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/info/page-4dca777189ba9f21.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/notice/page-c06464bae59d2cae.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/patient/register/%5Bslug%5D/complete/page-d33a7b7776e08e49.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/patient/register/%5Bslug%5D/page-3da7419fd48b4750.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/mypage/setting/reminder/page-0915890a7c42eb94.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/app/page-3b2e5e57c3a8ea76.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/fd9d1056-35e1eb5672bbdc9a.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/main-1f6fd70f66f53322.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/main-app-257202d818d9af19.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d2c70ec16a88d837.js",revision:"uy_4DGg3Fv9_j7puuDb2z"},{url:"/_next/static/css/f93cc7163f189d98.css",revision:"f93cc7163f189d98"},{url:"/_next/static/uy_4DGg3Fv9_j7puuDb2z/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/uy_4DGg3Fv9_j7puuDb2z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/firebase-messaging-sw.js",revision:"0d56894752744afaf72269b17a3862f3"},{url:"/fonts/NanumBarunGothic.otf",revision:"d11ade1ea8c7ce5896e5806c45e30eda"},{url:"/fonts/NanumBarunGothicBold.otf",revision:"4f50b8678a5cf8f3c39e6b2e5430af24"},{url:"/fonts/NanumBarunGothicLight.otf",revision:"a78ff05521dd156eac459117836eb6a0"},{url:"/fonts/mtbold.ttf",revision:"200135e8e5aec51916af96b03c1ee8fc"},{url:"/icons/icon-192x192.png",revision:"05baa3e9e26c04a0f8a784202436d4cc"},{url:"/icons/icon-256x256.png",revision:"02031ae03f8b6a1a29be4f9228c32160"},{url:"/icons/icon-384x384.png",revision:"9fab03405275ee521528664a4d550af7"},{url:"/icons/icon-512x512.png",revision:"99981cb456ddc9cdc80e2fd0df871606"},{url:"/images/CLogo.png",revision:"1859da8246d4eb6c782867b1ff3c2bba"},{url:"/images/Carewith_logo.png",revision:"0ce03c81b9c72d5029d876569e32889f"},{url:"/images/Group 26.png",revision:"32f17e671369e269a95f071129e1c6e3"},{url:"/images/QRExample.png",revision:"15c48adaa62f4d311e5cf753a6c6caf4"},{url:"/images/QRImage.png",revision:"73a7ccb0ab132d1d04765757573891d1"},{url:"/images/kakao.png",revision:"8d0724b5d392c793fd62cf3f0dd761ff"},{url:"/images/logoImage.png",revision:"8f8d53c9863e2933303ee951f49a7870"},{url:"/images/mediblock.png",revision:"e96e2179f8e9343d149875a4bc229eb8"},{url:"/images/profile.png",revision:"23c7c622133e2b99fca00b2eeb420811"},{url:"/manifest.json",revision:"05b1c0ce50873719a4b25900af1575b9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
