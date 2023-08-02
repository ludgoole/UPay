import{T as m,a as $,b as j,N as q}from"../vant-vendor.ad17fd77.js";import{A as M,B as W,C as G,D as k,E as H,r as d,k as F,b as Q,G as C,H as t,I as T,j as x,u as f,x as _,J as h,_ as E,K,L as X,M as S,N as J,O as Y,P as v,Q as A,R as Z,F as z,S as ee,U as I,i as te,V as oe,w as V,W as se,X as D,Y as ae,Z as ne,y as re,$ as ie}from"../vendor.a3e3785a.js";const ue=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};ue();const ce=e=>{const s=M();s.use(W({persist:!0,storage:localStorage})),e.use(s)},le="modulepreload",de=function(e,s){return new URL(e,s).href},P={},g=function(s,a,r){return!a||a.length===0?s():Promise.all(a.map(o=>{if(o=de(o,r),o in P)return;P[o]=!0;const n=o.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":le,n||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),n)return new Promise((c,b)=>{i.addEventListener("load",c),i.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())},_e=""+new URL("invite.6938d7d2.png",import.meta.url).href,pe="https://api.cashpayments.in",y=G.create({baseURL:pe,timeout:15e3});y.interceptors.request.use(async e=>{const s=await k.getItem("token");return e.loading&&m.loading({message:"loading...",forbidClick:!0,duration:0}),e.headers=Object.assign({},e.headers,{"X-Token":s}),e},e=>Promise.reject(e));y.interceptors.response.use(e=>(e.config.loading&&m.clear(),e.data.code===200?e.data.data:(e.data.code===509&&w.push("/login"),e.config.toast&&m.fail(e.data.message),Promise.reject(e.data))),e=>{var s,a;switch(e.config.loading&&m.clear(),(s=e.response)==null?void 0:s.status){case 400:e.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:e.message="\u672A\u6388\u6743(401)";break;case 403:e.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:e.message="\u8BF7\u6C42\u51FA\u9519(404)";break;case 408:e.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:e.message="\u670D\u52A1\u5668\u9519\u8BEF(500)";break;case 501:e.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:e.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:e.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:e.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:e.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:e.message=`\u8FDE\u63A5\u51FA\u9519(${(a=e.response)==null?void 0:a.status})!`}return e.config.toast&&m.fail(e.message),Promise.reject(e)});function O(e,s,{loading:a=!1,toast:r=!0}={}){return y.request({method:"GET",url:e,data:s,loading:a,toast:r})}function me(e,s,{loading:a=!1,toast:r=!0}={}){return y.request({method:"POSt",url:e,data:s,loading:a,toast:r})}const he=(e={})=>O("/home/detail",e),pt=(e={})=>O("/client/generateQRCode",e),mt=e=>me("/client/bind/google/code",e),fe=H("login-store",()=>{const e=d(""),s=d(0),a=d({});return{token:e,bingCode:s,userInfo:a}},{persistedState:{persist:!0,storage:localStorage}}),l=e=>(K("data-v-b91105d0"),e=e(),X(),e),ge={class:"Home p-4 bg-gray-1"},be={class:"cash p-4 rounded-md bg-slate-600 color-white"},ve=l(()=>t("header",null,"Cashable Balance",-1)),xe=l(()=>t("i",{"i-material-symbols:download":""},null,-1)),Fe=_(" Recharge"),ye=[xe,Fe],Ee=l(()=>t("i",{"i-material-symbols:upload-rounded":""},null,-1)),ke=_(" Withdrawal"),Ae=[Ee,ke],Ce=l(()=>t("section",{class:"invite box-base"},[t("img",{src:_e,alt:""})],-1)),Te=l(()=>t("section",{class:"usdp box-base px-0 flex text-center color-slate-700"},[t("div",{"flex-1":""},[t("p",{"text-sm":""}," Today's order income "),t("p",{"py-2":""}," USDT "),t("p",null,"2.89 USDT")]),t("div",{"w-1px":"","bg-gray-1":""}),t("div",{"flex-1":""},[t("p",{"text-sm":""}," Today's team earnings "),t("p",{"py-2":""}," USDT "),t("p",null,"0.89 USDT")])],-1)),Se=l(()=>t("section",{class:"notice box-base flex-justify"},[t("p",null,"Notice"),t("p",null,[_("more "),t("i",{"i-gg:more-o":""})])],-1)),we={class:"info box-base"},Be=l(()=>t("header",null,"More Information",-1)),De={"mt-2":""},Pe={"flex-justify":"","mt-2":""},Re=l(()=>t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),Le=l(()=>t("p",null,"29293.23",-1)),He={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-green-1":"","border-green-2":"","color-green":""},Ie=_(" +"),Ve={"flex-justify":"","mt-4":""},Oe=l(()=>t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),Ue=l(()=>t("p",null,"2293.23",-1)),Ne={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-red-1":"","border-red-2":"","color-red":""},$e=_(" +"),je={"flex-justify":"","mt-4":""},qe=l(()=>t("p",null,[_("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),Me=l(()=>t("p",null,"2923.23",-1)),We={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-blue-1":"","border-blue-2":"","color-blue":""},Ge=_(" +"),U=F({__name:"index",setup(e){const s=d(0),a=S(),{bingCode:r}=fe(),o=()=>{console.log("\u{1F680} ~ file: index.vue:17 ~ toAuth ~ bingCode:",r),r===0?a.push("/auth"):m(`bingCode\uFF1A${r}`)};return Q(()=>{he().then(n=>{console.log("\u{1F680} ~ file: index.vue:18 ~ detail ~ res:",n),s.value=n.usdtBalance})}),(n,u)=>(h(),C("div",ge,[t("section",be,[ve,t("p",null,T(s.value),1),t("p",{flex:"","text-center":"","mt-8":""},[t("span",{"flex-1":"",onClick:o},ye),t("span",{"flex-1":"",onClick:o},Ae)])]),Ce,Te,Se,t("section",we,[Be,t("ul",De,[t("li",Pe,[Re,Le,t("p",He,[Ie,x(f(E),{"start-val":.001,"end-val":.564,"decimal-places":3,loop:""},null,8,["start-val","end-val"])])]),t("li",Ve,[Oe,Ue,t("p",Ne,[$e,x(f(E),{"start-val":.002,"end-val":1,"decimal-places":3,loop:""},null,8,["start-val"])])]),t("li",je,[qe,Me,t("p",We,[Ge,x(f(E),{"start-val":.005,"end-val":.298,"decimal-places":3,loop:""},null,8,["start-val","end-val"])])])])])]))}});const R={},Qe=(e,s)=>{const a=e.__vccOpts||e;for(const[r,o]of s)a[r]=o;return a};typeof R=="function"&&R(U);const Ke=Qe(U,[["__scopeId","data-v-b91105d0"]]),Xe=()=>g(()=>import("../auth.f069ce95.js"),["..\\auth.f069ce95.js","auth.f2b2b4ad.css","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css","..\\vendor.a3e3785a.js"],import.meta.url),Je=()=>g(()=>import("../login.8238a1c3.js"),["..\\login.8238a1c3.js","login.f34c653e.css","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css","..\\vendor.a3e3785a.js","..\\login.bb1edf72.js"],import.meta.url),Ye=()=>g(()=>import("../mine.a8977353.js"),["..\\mine.a8977353.js","mine.7accc69c.css","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css","..\\vendor.a3e3785a.js"],import.meta.url),Ze=()=>g(()=>import("../order.0d6cc285.js"),["..\\order.0d6cc285.js","order.7accc69c.css","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css","..\\vendor.a3e3785a.js"],import.meta.url),ze=()=>g(()=>import("../sign.003a7d67.js"),["..\\sign.003a7d67.js","sign.c7c4efa0.css","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css","..\\vendor.a3e3785a.js","..\\login.bb1edf72.js"],import.meta.url),et=()=>g(()=>import("../all.6192fc0b.js"),["..\\all.6192fc0b.js","..\\vendor.a3e3785a.js","..\\vant-vendor.ad17fd77.js","vant-vendor.4dc5a783.css"],import.meta.url),tt=[{name:"auth",path:"/auth",component:Xe,props:!0,meta:{title:"auth",hideHeader:!0,hideFooter:!0}},{name:"index",path:"/",component:Ke,props:!0,meta:{title:"home",hideHeader:!0}},{name:"login",path:"/login",component:Je,props:!0,meta:{title:"Login",hideHeader:!0,hideFooter:!0}},{name:"mine",path:"/mine",component:Ye,props:!0,meta:{title:"mine",hideHeader:!0}},{name:"order",path:"/order",component:Ze,props:!0,meta:{title:"order",hideHeader:!0}},{name:"sign",path:"/sign",component:ze,props:!0,meta:{title:"Sign up",hideHeader:!0,hideFooter:!0}},{name:"all",path:"/:all(.*)*",component:et,props:!0,meta:{title:"Page Not Found",leftArrow:!0,rightText:"\u5237\u65B0"}}],w=J({history:Y(),routes:tt});w.beforeEach(async(e,s,a)=>{var p;const r=await k.getItem("token"),o=await k.getItem("userInfo")||{},n=(p=e.meta)==null?void 0:p.roles,u=e.path==="/login"||e.path==="/sign",i=!!r,c=!!n,b=n&&n.includes(o.role);!u&&!i?(m({message:"\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\uFF0C\u8BF7\u5148\u767B\u5F55"}),a("/login")):!u&&i&&c&&!b?(m({message:"\u60A8\u6CA1\u6709\u6743\u5229\u8BBF\u95EE\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5347\u7EA7"}),a("/404")):a()});const L=[{name:"Home",path:"/",icon:"home-o"},{name:"Order",path:"/order",icon:"orders-o"},{name:"Me",path:"/mine",icon:"contact"}],ot=F({__name:"AppFooter",setup(e){const s=S(),a=d(0),r=o=>{s.push({path:L[o].path})};return(o,n)=>{const u=$,i=j;return h(),v(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=c=>a.value=c),class:"!static",onChange:r},{default:A(()=>[(h(!0),C(z,null,Z(f(L),c=>(h(),v(u,{key:c.icon,icon:c.icon},{default:A(()=>[_(T(c.name),1)]),_:2},1032,["icon"]))),128))]),_:1},8,["modelValue"])}}}),st=H("header-store",()=>({title:d("\u9996\u9875")}),{persistedState:{persist:!0,storage:sessionStorage}}),at={"w-4em":"","rounded-full":"","border-base":"","border-pramiry":"","p-2":"","text-sm":"","scale-75":""},nt=F({__name:"AppHeader",setup(e){const{title:s}=ee(st()),a=S(),r=I(),o=te("emitter"),n=d(""),u=d(!1),i=d(""),c=d(!1);oe({title:s}),V(()=>r.meta,p=>{n.value=p.toPath,s.value=p.title,u.value=p.leftArrow,i.value=p.rightText,c.value=p.isPlain},{immediate:!0});function b(){o.emit("on-click-right")}return(p,B)=>{const N=q;return h(),v(N,{title:f(s),"left-arrow":u.value,"right-text":i.value,onClickRight:b,onClickLeft:B[0]||(B[0]=lt=>n.value?f(a).push(n.value):f(a).go(-1))},se({_:2},[c.value?{name:"right",fn:A(()=>[t("p",at,T(i.value),1)])}:void 0]),1032,["title","left-arrow","right-text"])}}}),rt={flex:"~ col","justify-between":"","w-100vw":"","h-100vh":""},it=F({__name:"App",setup(e){const s=I(),a=d(!0),r=d(!0);return V(()=>s.meta,o=>{a.value=!o.hideHeader,r.value=!o.hideFooter}),(o,n)=>{const u=nt,i=ae("RouterView"),c=ot;return h(),C("div",rt,[a.value?(h(),v(u,{key:0})):D("",!0),x(i,{"flex-1":"","overflow-auto":""}),r.value?(h(),v(c,{key:1})):D("",!0)])}}}),ut=ne(),ct=ie();re(it).use(ut).use(w).use(ce).provide("emitter",ct).mount("#app");export{me as P,Qe as _,R as a,mt as b,st as c,pt as g,fe as u};