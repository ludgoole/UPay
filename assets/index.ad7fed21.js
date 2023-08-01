import{T as m,a as O,b as U,N}from"../vant-vendor.c8248ff1.js";import{A as j,B as $,C as q,D as E,k as x,r as p,b as M,E as A,G as t,H as T,I as d,J as W,K as G,x as _,L as k,M as Q,N as z,O as b,P as F,Q as K,u as v,F as X,R as J,S as Y,U as P,i as Z,V as ee,w as R,W as te,X as B,j as oe,Y as se,Z as ae,y as ne,_ as re}from"../vendor.84b6da42.js";const ue=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};ue();const ie=e=>{const s=j();s.use($({persist:!0,storage:localStorage})),e.use(s)},ce="modulepreload",le=function(e,s){return new URL(e,s).href},C={},f=function(s,a,r){return!a||a.length===0?s():Promise.all(a.map(o=>{if(o=le(o,r),o in C)return;C[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":ce,n||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),n)return new Promise((c,g)=>{u.addEventListener("load",c),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())},pe=""+new URL("invite.6938d7d2.png",import.meta.url).href,de="https://api.cashpayments.in",y=q.create({baseURL:de,timeout:15e3});y.interceptors.request.use(async e=>{const s=await E.getItem("Authorization");return e.loading&&m.loading({message:"loading...",forbidClick:!0,duration:0}),e.headers=Object.assign({},e.headers,{"X-Token":s}),e},e=>Promise.reject(e));y.interceptors.response.use(e=>(e.config.loading&&m.clear(),e.data),e=>{var s,a;switch(e.config.loading&&m.clear(),(s=e.response)==null?void 0:s.status){case 400:e.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:e.message="\u672A\u6388\u6743(401)";break;case 403:e.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:e.message="\u8BF7\u6C42\u51FA\u9519(404)";break;case 408:e.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:e.message="\u670D\u52A1\u5668\u9519\u8BEF(500)";break;case 501:e.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:e.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:e.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:e.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:e.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:e.message=`\u8FDE\u63A5\u51FA\u9519(${(a=e.response)==null?void 0:a.status})!`}return m.fail(e.message),Promise.reject(e)});function H(e,s,a=!0){return y.request({method:"GET",url:e,data:s,loading:a})}function me(e,s,a=!0){return y.request({method:"POSt",url:e,data:s,loading:a})}const _e=(e={})=>H("/home/detail",e),ze=(e={})=>H("/client/generateQRCode",e),Ke=e=>me("/client/bind/google/code",e),h=e=>(W("data-v-d4bc0f27"),e=e(),G(),e),he={class:"Home p-4 bg-gray-1"},fe={class:"cash p-4 rounded-md bg-slate-600 color-white"},ge=h(()=>t("header",null,"Cashable Balance",-1)),be=h(()=>t("i",{"i-material-symbols:download":""},null,-1)),ve=_(" Recharge"),xe=[be,ve],ye=h(()=>t("i",{"i-material-symbols:upload-rounded":""},null,-1)),Ee=_(" Withdrawal"),Fe=[ye,Ee],Ae=h(()=>t("section",{class:"invite box-base"},[t("img",{src:pe,alt:""})],-1)),Te=h(()=>t("section",{class:"usdp box-base px-0 flex text-center color-slate-700"},[t("div",{"flex-1":""},[t("p",{"text-sm":""}," Today's order income "),t("p",{"py-2":""}," USDT "),t("p",null,"2.89 USDT")]),t("div",{"w-1px":"","bg-gray-1":""}),t("div",{"flex-1":""},[t("p",{"text-sm":""}," Today's team earnings "),t("p",{"py-2":""}," USDT "),t("p",null,"0.89 USDT")])],-1)),ke=h(()=>t("section",{class:"notice box-base flex-justify"},[t("p",null,"Notice"),t("p",null,[_("more "),t("i",{"i-gg:more-o":""})])],-1)),we=h(()=>t("section",{class:"info box-base"},[t("header",null,"More Information"),t("ul",{"mt-2":""},[t("li",{"flex-justify":"","mt-2":""},[t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")]),t("p",null,"29293.23"),t("p",{class:"Home-tag","border-base":"","px-2":"","bg-green-1":"","border-green-2":"","color-green":""}," +0.345 ")]),t("li",{"flex-justify":"","mt-4":""},[t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")]),t("p",null,"2293.23"),t("p",{class:"Home-tag","border-base":"","px-2":"","bg-red-1":"","border-red-2":"","color-red":""}," +0.305 ")]),t("li",{"flex-justify":"","mt-4":""},[t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")]),t("p",null,"2923.23"),t("p",{class:"Home-tag","border-base":"","px-2":"","bg-blue-1":"","border-blue-2":"","color-blue":""}," +0.450 ")])])],-1)),L=x({__name:"index",setup(e){const s=p(0),a=k(),r=()=>{a.push("/auth")};return M(()=>{_e().then(o=>{o.code===200?s.value=o.data.usdtBalance:m(o.message)})}),(o,n)=>(d(),A("div",he,[t("section",fe,[ge,t("p",null,T(s.value),1),t("p",{flex:"","text-center":"","mt-8":""},[t("span",{"flex-1":"",onClick:r},xe),t("span",{"flex-1":"",onClick:r},Fe)])]),Ae,Te,ke,we]))}});const D={},Be=(e,s)=>{const a=e.__vccOpts||e;for(const[r,o]of s)a[r]=o;return a};typeof D=="function"&&D(L);const Ce=Be(L,[["__scopeId","data-v-d4bc0f27"]]),De=()=>f(()=>import("../auth.06e36dc1.js"),["..\\auth.06e36dc1.js","auth.7b23106a.css","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css","..\\vendor.84b6da42.js"],import.meta.url),Se=()=>f(()=>import("../login.0d3edc4a.js"),["..\\login.0d3edc4a.js","login.f34c653e.css","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css","..\\vendor.84b6da42.js","..\\index.b751e843.js"],import.meta.url),Pe=()=>f(()=>import("../mine.ba9914c6.js"),["..\\mine.ba9914c6.js","mine.7accc69c.css","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css","..\\vendor.84b6da42.js"],import.meta.url),Re=()=>f(()=>import("../order.15ef1d87.js"),["..\\order.15ef1d87.js","order.7accc69c.css","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css","..\\vendor.84b6da42.js"],import.meta.url),He=()=>f(()=>import("../sign.7f5aa708.js"),["..\\sign.7f5aa708.js","sign.c7c4efa0.css","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css","..\\vendor.84b6da42.js","..\\index.b751e843.js"],import.meta.url),Le=()=>f(()=>import("../all.36d98dd2.js"),["..\\all.36d98dd2.js","..\\vendor.84b6da42.js","..\\vant-vendor.c8248ff1.js","vant-vendor.4dc5a783.css"],import.meta.url),Ie=[{name:"auth",path:"/auth",component:De,props:!0,meta:{title:"auth",hideHeader:!0,hideFooter:!0}},{name:"index",path:"/",component:Ce,props:!0,meta:{title:"home",hideHeader:!0}},{name:"login",path:"/login",component:Se,props:!0,meta:{title:"Login",hideHeader:!0,hideFooter:!0}},{name:"mine",path:"/mine",component:Pe,props:!0,meta:{title:"mine",hideHeader:!0}},{name:"order",path:"/order",component:Re,props:!0,meta:{title:"order",hideHeader:!0}},{name:"sign",path:"/sign",component:He,props:!0,meta:{title:"Sign up",hideHeader:!0,hideFooter:!0}},{name:"all",path:"/:all(.*)*",component:Le,props:!0,meta:{title:"Page Not Found",leftArrow:!0,rightText:"\u5237\u65B0"}}],I=Q({history:z(),routes:Ie});I.beforeEach(async(e,s,a)=>{var l;const r=await E.getItem("Authorization"),o=await E.getItem("userInfo")||{},n=(l=e.meta)==null?void 0:l.roles,i=e.path==="/login"||e.path==="/sign",u=!!r,c=!!n,g=n&&n.includes(o.role);!i&&!u?(m({message:"\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\uFF0C\u8BF7\u5148\u767B\u5F55"}),a("/login")):!i&&u&&c&&!g?(m({message:"\u60A8\u6CA1\u6709\u6743\u5229\u8BBF\u95EE\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5347\u7EA7"}),a("/404")):a()});const S=[{name:"Home",path:"/",icon:"home-o"},{name:"Order",path:"/order",icon:"orders-o"},{name:"Me",path:"/mine",icon:"contact"}],Ve=x({__name:"AppFooter",setup(e){const s=k(),a=p(0),r=o=>{s.push({path:S[o].path})};return(o,n)=>{const i=O,u=U;return d(),b(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),class:"!static",onChange:r},{default:F(()=>[(d(!0),A(X,null,K(v(S),c=>(d(),b(i,{key:c.icon,icon:c.icon},{default:F(()=>[_(T(c.name),1)]),_:2},1032,["icon"]))),128))]),_:1},8,["modelValue"])}}}),Oe=J("header-store",()=>({title:p("\u9996\u9875")}),{persistedState:{persist:!0,storage:sessionStorage}}),Ue={"w-4em":"","rounded-full":"","border-base":"","border-pramiry":"","p-2":"","text-sm":"","scale-75":""},Ne=x({__name:"AppHeader",setup(e){const{title:s}=Y(Oe()),a=k(),r=P(),o=Z("emitter"),n=p(""),i=p(!1),u=p(""),c=p(!1);ee({title:s}),R(()=>r.meta,l=>{n.value=l.toPath,s.value=l.title,i.value=l.leftArrow,u.value=l.rightText,c.value=l.isPlain},{immediate:!0});function g(){o.emit("on-click-right")}return(l,w)=>{const V=N;return d(),b(V,{title:v(s),"left-arrow":i.value,"right-text":u.value,onClickRight:g,onClickLeft:w[0]||(w[0]=We=>n.value?v(a).push(n.value):v(a).go(-1))},te({_:2},[c.value?{name:"right",fn:F(()=>[t("p",Ue,T(u.value),1)])}:void 0]),1032,["title","left-arrow","right-text"])}}}),je={flex:"~ col","justify-between":"","w-100vw":"","h-100vh":""},$e=x({__name:"App",setup(e){const s=P(),a=p(!0),r=p(!0);return R(()=>s.meta,o=>{a.value=!o.hideHeader,r.value=!o.hideFooter}),(o,n)=>{const i=Ne,u=se("RouterView"),c=Ve;return d(),A("div",je,[a.value?(d(),b(i,{key:0})):B("",!0),oe(u,{"flex-1":"","overflow-auto":""}),r.value?(d(),b(c,{key:1})):B("",!0)])}}}),qe=ae(),Me=re();ne($e).use(qe).use(I).use(ie).provide("emitter",Me).mount("#app");export{me as P,Be as _,D as a,Ke as b,ze as g,Oe as u};
