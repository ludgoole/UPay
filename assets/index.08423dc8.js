import{T as w,a as G,b as M,S as K,N as Q,L as X,s as z}from"../vant-vendor.89a2157f.js";import{B as J,C as Y,D as Z,E as R,k as A,r as h,G as P,b as N,H as E,I as t,J as y,u as l,x as b,j as x,K as g,_ as S,L as ee,M as te,N as oe,O as se,P as O,w as B,Q as k,R as F,F as U,S as j,f as ae,U as re,V as ne,W as ie,i as le,X as ce,Y as ue,Z as _e,$ as D,a0 as de,y as pe,a1 as me}from"../vendor.a80ff229.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const he=e=>{const s=J();s.use(Y({persist:!0,storage:localStorage})),e.use(s)},fe="modulepreload",ge=function(e,s){return new URL(e,s).href},$={},f=function(s,a,i){if(!a||a.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(a.map(o=>{if(o=ge(o,i),o in $)return;$[o]=!0;const c=o.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!i)for(let _=r.length-1;_>=0;_--){const u=r[_];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":fe,c||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),c)return new Promise((_,u)=>{n.addEventListener("load",_),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())},be=""+new URL("invite.6938d7d2.png",import.meta.url).href,ve="https://api.cashpayments.in",L=Z.create({baseURL:ve,timeout:15e3});L.interceptors.request.use(e=>{const s=R.get("token");return e.loading&&w.loading({message:"loading...",forbidClick:!0,duration:0}),e.headers=Object.assign({},e.headers,{"X-Token":s}),e},e=>Promise.reject(e));L.interceptors.response.use(e=>(e.config.loading&&w.clear(),e.data.code===200?e.data.data:(["NO LOGIN","TOKEN OVERDUE"].includes(e.data.message)&&C.push("/login"),e.config.toast&&w.fail(e.data.message),Promise.reject(e.data))),e=>{var s,a;switch(e.config.loading&&w.clear(),(s=e.response)==null?void 0:s.status){case 400:e.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:e.message="\u672A\u6388\u6743(401)";break;case 403:e.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:e.message="\u8BF7\u6C42\u51FA\u9519(404)";break;case 408:e.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:e.message="\u670D\u52A1\u5668\u9519\u8BEF(500)";break;case 501:e.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:e.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:e.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:e.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:e.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:e.message=`\u8FDE\u63A5\u51FA\u9519(${(a=e.response)==null?void 0:a.status})!`}return e.config.toast&&w.fail(e.message),Promise.reject(e)});function V(e,s,{loading:a=!1,toast:i=!0}={}){return L.request({method:"GET",url:e,data:s,loading:a,toast:i})}function I(e,s,{loading:a=!1,toast:i=!0}={}){return L.request({method:"POSt",url:e,data:s,loading:a,toast:i})}const we=(e={})=>V("/home/detail",e),Dt=(e={})=>V("/client/generateQRCode",e,{loading:!0}),Pt=(e={})=>V("/recharge/system/address",e),Ot=e=>I("/client/bind/google/code",e),Bt=e=>I("/recharge/usdt",e),Vt=e=>I("/bank/account/withdrawal",e),T=(e=0,s=1)=>`${s===1?"$":"\u20B9"}${e.toString().replace(new RegExp("(?<!.*\\..*)(\\d)(?=(\\d{3})+($|\\.))","g"),"$1,")}`,It=e=>e.slice(0,1).toLocaleUpperCase()+e.slice(1),d=e=>(ee("data-v-520291be"),e=e(),te(),e),ye={class:"Home p-4 bg-gray-1"},xe={class:"cash p-4 rounded-md bg-slate-600 color-white"},Ee={"flex-justify":""},ke=d(()=>t("p",null,"USDT Balance",-1)),Ae=d(()=>t("p",null,"Withdrawal Balance",-1)),Te={flex:"","text-center":"","mt-8":""},Re=d(()=>t("i",{"i-material-symbols:download":""},null,-1)),Fe=d(()=>t("i",{"i-material-symbols:upload-rounded":""},null,-1)),Le=d(()=>t("section",{class:"invite box-base"},[t("img",{src:be,alt:""})],-1)),Se={class:"usdp box-base px-0 flex text-center color-slate-700"},De={"flex-1":""},Pe=d(()=>t("p",{"text-sm":""}," Today's recharge ",-1)),Oe={"pt-2":""},Be=d(()=>t("div",{"w-1px":"","bg-gray-1":""},null,-1)),Ve={"flex-1":""},Ie=d(()=>t("p",{"text-sm":""}," Today's withdrawal ",-1)),Ce={"pt-2":""},$e=d(()=>t("section",{class:"notice box-base flex-justify"},[t("p",null,"Notice"),t("p",null,[b("more "),t("i",{"i-gg:more-o":""})])],-1)),He={class:"info box-base"},Ne=d(()=>t("header",null,"More Information",-1)),Ue={"mt-2":""},je={"flex-justify":"","mt-2":""},We=d(()=>t("p",null,[b("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),qe=d(()=>t("p",null,"1093.12",-1)),Ge={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-green-1":"","border-green-2":"","color-green":""},Me={"flex-justify":"","mt-4":""},Ke=d(()=>t("p",null,[b("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),Qe=d(()=>t("p",null,"3393.23",-1)),Xe={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-red-1":"","border-red-2":"","color-red":""},ze={"flex-justify":"","mt-4":""},Je=d(()=>t("p",null,[b("BTC"),t("span",{"text-sm":""},"/USDT")],-1)),Ye=d(()=>t("p",null,"2923.03",-1)),Ze={class:"Home-tag",flex:"","border-base":"","px-2":"","bg-blue-1":"","border-blue-2":"","color-blue":""},W=A({__name:"index",setup(e){const s=h(0),a=h(0),i=h(0),r=h(0),o=P(),c=R.get("bingCode"),p={easingFn:(n,_,u,v)=>u*n/v+_},m=(n="recharge")=>{console.log("\u{1F680} ~ file: index.vue:17 ~ toAuth ~ bingCode:",c),c==="0"?o.push("/auth"):o.push(n==="recharge"?"/recharge":"/withdrawal")};return N(()=>{we().then(n=>{console.log("\u{1F680} ~ file: index.vue:18 ~ detail ~ res:",n),s.value=n.usdtBalance,a.value=n.rupeeBalance,i.value=n.todayRechargeUsdt,r.value=n.todayWithdrawal})}),(n,_)=>(g(),E("div",ye,[t("section",xe,[t("header",Ee,[t("div",null,[ke,t("p",null,y(l(T)(l(s),1)),1)]),t("div",null,[Ae,t("p",null,y(l(T)(l(a),2)),1)])]),t("p",Te,[t("span",{"flex-1":"",onClick:_[0]||(_[0]=u=>m("recharge"))},[Re,b(" Recharge")]),t("span",{"flex-1":"",onClick:_[1]||(_[1]=u=>m("withdrawal"))},[Fe,b(" Withdrawal")])])]),Le,t("section",Se,[t("div",De,[Pe,t("p",Oe,y(l(T)(l(i),1)),1)]),Be,t("div",Ve,[Ie,t("p",Ce,y(l(T)(l(r),2)),1)])]),$e,t("section",He,[Ne,t("ul",Ue,[t("li",je,[We,qe,t("p",Ge,[b(" +"),x(l(S),{duration:"100","start-val":.001,"end-val":.564,"decimal-places":3,loop:"",options:p})])]),t("li",Me,[Ke,Qe,t("p",Xe,[b(" +"),x(l(S),{duration:"100","start-val":.002,"end-val":1,"decimal-places":3,loop:"",options:p})])]),t("li",ze,[Je,Ye,t("p",Ze,[b(" +"),x(l(S),{duration:"100","start-val":.005,"end-val":.298,"decimal-places":3,loop:"",options:p})])])])])]))}});const H={},et=(e,s)=>{const a=e.__vccOpts||e;for(const[i,r]of s)a[i]=r;return a};typeof H=="function"&&H(W);const tt=et(W,[["__scopeId","data-v-520291be"]]),ot=()=>f(()=>import("../address.77938169.js"),["..\\address.77938169.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\mine.bed7d997.js"],import.meta.url),st=()=>f(()=>import("../auth.984125e1.js"),["..\\auth.984125e1.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css"],import.meta.url),at=()=>f(()=>import("../detail.f0a0c202.js"),["..\\detail.f0a0c202.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\order.8e7a9452.js"],import.meta.url),rt=()=>f(()=>import("../financial.e8676a6b.js"),["..\\financial.e8676a6b.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\mine.bed7d997.js"],import.meta.url),nt=()=>f(()=>import("../login.ffe8a900.js"),["..\\login.ffe8a900.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\login.10566e51.js","./login.16331ea5.css"],import.meta.url),it=()=>f(()=>import("../mine.6c589233.js"),["..\\mine.6c589233.js","..\\AppDialog.2c0c758c.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.bed7d997.js","..\\login.10566e51.js","./mine.89ea2d70.css"],import.meta.url),lt=()=>f(()=>import("../order.2aa469bf.js"),["..\\order.2aa469bf.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\order.8e7a9452.js"],import.meta.url),ct=()=>f(()=>import("../password.2e7741c8.js"),["..\\password.2e7741c8.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\mine.bed7d997.js"],import.meta.url),ut=()=>f(()=>import("../profit.d324512f.js"),["..\\profit.d324512f.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\mine.bed7d997.js"],import.meta.url),_t=()=>f(()=>import("../recharge.2ad8357f.js"),["..\\recharge.2ad8357f.js","..\\AppDialog.2c0c758c.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.bed7d997.js"],import.meta.url),dt=()=>f(()=>import("../sign.d4ba5767.js"),["..\\sign.d4ba5767.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","..\\login.10566e51.js","./sign.c7c4efa0.css"],import.meta.url),pt=()=>f(()=>import("../withdrawal.989fe9d4.js"),["..\\withdrawal.989fe9d4.js","..\\AppDialog.2c0c758c.js","..\\vant-vendor.89a2157f.js","..\\vendor.a80ff229.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.bed7d997.js"],import.meta.url),mt=()=>f(()=>import("../all.ad74b663.js"),["..\\all.ad74b663.js","..\\vendor.a80ff229.js","..\\vant-vendor.89a2157f.js","./vant-vendor.d15ec4d9.css"],import.meta.url),ht=[{name:"address",path:"/address",component:ot,props:!0,meta:{title:"address",leftArrow:!0,hideFooter:!0}},{name:"auth",path:"/auth",component:st,props:!0,meta:{title:"authenticator",leftArrow:!0,hideFooter:!0}},{name:"detail",path:"/detail",component:at,props:!0,meta:{title:"detail",hideHeader:!0,hideFooter:!0}},{name:"financial",path:"/financial",component:rt,props:!0,meta:{title:"financial",leftArrow:!0,hideFooter:!0}},{name:"index",path:"/",component:tt,props:!0,meta:{title:"home",hideHeader:!0}},{name:"login",path:"/login",component:nt,props:!0,meta:{title:"Login",hideHeader:!0,hideFooter:!0}},{name:"mine",path:"/mine",component:it,props:!0,meta:{title:"mine",hideHeader:!0}},{name:"order",path:"/order",component:lt,props:!0,meta:{title:"order",hideHeader:!0,hideFooter:!0}},{name:"password",path:"/password",component:ct,props:!0,meta:{title:"password",leftArrow:!0,hideFooter:!0}},{name:"profit",path:"/profit",component:ut,props:!0,meta:{title:"profit",leftArrow:!0,hideFooter:!0}},{name:"recharge",path:"/recharge",component:_t,props:!0,meta:{title:"recharge",leftArrow:!0,hideFooter:!0}},{name:"sign",path:"/sign",component:dt,props:!0,meta:{title:"Sign up",hideHeader:!0,hideFooter:!0}},{name:"withdrawal",path:"/withdrawal",component:pt,props:!0,meta:{title:"withdrawal",leftArrow:!0,hideFooter:!0}},{name:"all",path:"/:all(.*)*",component:mt,props:!0,meta:{title:"Page Not Found",leftArrow:!0,rightText:"refresh"}}],C=oe({history:se(),routes:ht});C.beforeEach((e,s,a)=>{var v;const i=R.get("token"),o=R.get("userInfo")||{},c=(v=e.meta)==null?void 0:v.roles,p=e.path==="/login"||e.path==="/sign",m=!!i,n=!!c,_=c&&c.includes(o.role),u=document.querySelector(".RouterView");u&&u.scrollTo(0,0),!p&&!m?(s.path!=="/"&&w({message:"NO LOGIN"}),a("/login")):!p&&m&&n&&!_?(w({message:"NO PERMISSION"}),a("/404")):a()});const ft=[{name:"Home",path:"/",icon:"home-o"},{name:"Order",path:"/order",icon:"orders-o"},{name:"Me",path:"/mine",icon:"contact"}],gt=A({__name:"AppFooter",setup(e){const s=P(),a=O(),i=h("/");B(()=>a.path,o=>{i.value=o},{immediate:!0});const r=o=>{s.push(o)};return(o,c)=>{const p=G,m=M;return g(),k(m,{modelValue:l(i),"onUpdate:modelValue":c[0]||(c[0]=n=>ae(i)?i.value=n:null),onChange:r},{default:F(()=>[(g(!0),E(U,null,j(l(ft),n=>(g(),k(p,{key:n.icon,icon:n.icon,name:n.path},{default:F(()=>[b(y(n.name),1)]),_:2},1032,["icon","name"]))),128))]),_:1},8,["modelValue"])}}}),bt={key:0,"flex-1":"",flex:"","flex-col":"","justify-between":"","my-8":""},vt=A({__name:"AppSkeleton",props:{isLoading:{type:Boolean,default:!0}},setup(e){const s=e;return(a,i)=>{const r=K;return s.isLoading?(g(),E("div",bt,[(g(),E(U,null,j(4,o=>x(r,{key:o,title:"",row:3})),64))])):re(a.$slots,"default",{key:1})}}}),wt=ne("header-store",()=>({title:h("\u9996\u9875")}),{persistedState:{persist:!0,storage:sessionStorage}}),yt={"w-4em":"","rounded-full":"","border-base":"","border-pramiry":"","p-2":"","text-sm":"","scale-75":""},xt=A({__name:"AppHeader",setup(e){const{title:s}=ie(wt()),a=P(),i=O(),r=le("emitter"),o=h(""),c=h(!1),p=h(!1),m=h(""),n=h(!1);ce({title:s}),B(()=>i.meta,u=>{o.value=u.toPath,s.value=u.title,p.value=u.hideTitle,c.value=u.leftArrow,m.value=u.rightText,n.value=u.isPlain},{immediate:!0});function _(){r.emit("on-click-right")}return(u,v)=>{const q=Q;return g(),k(q,{title:l(p)?"":l(s),"left-arrow":l(c),"right-text":l(m),onClickRight:_,onClickLeft:v[0]||(v[0]=Ft=>l(o)?l(a).push(l(o)):l(a).go(-1))},ue({_:2},[l(n)?{name:"right",fn:F(()=>[t("p",yt,y(l(m)),1)]),key:"0"}:void 0]),1032,["title","left-arrow","right-text"])}}}),Et={flex:"~ col","justify-between":"","w-100vw":"","h-100vh":""},kt={key:0,"h-50px":""},At=A({__name:"App",setup(e){const s=O(),a=h(!1),i=h(!1),r=h(!0);return B(()=>s.meta,o=>{a.value=!o.hideHeader,i.value=!o.hideFooter}),N(()=>{r.value=!1}),(o,c)=>{const p=xt,m=_e("RouterView"),n=vt,_=gt;return g(),E("div",Et,[l(a)?(g(),k(p,{key:0})):D("",!0),x(n,{"is-loading":l(r)},{default:F(()=>[x(m,{class:"RouterView","flex-1":"","overflow-auto":""}),l(i)?(g(),E("div",kt)):D("",!0)]),_:1},8,["is-loading"]),l(i)?(g(),k(_,{key:1})):D("",!0)])}}});X.use("en-US",z);const Tt=de(),Rt=me();pe(At).use(Tt).use(C).use(he).provide("emitter",Rt).mount("#app");export{V as G,I as P,et as _,Ot as a,H as b,It as c,gt as d,Bt as e,Dt as g,C as r,Pt as s,T as t,wt as u,Vt as w};
