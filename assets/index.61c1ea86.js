import{T as b,a as q,b as G,S as M,N as K,L as Q,s as X}from"../vant-vendor.c1d1d286.js";import{B as z,C as J,D as Y,E as L,k as x,r as p,G as S,b as N,H as y,I as a,J as v,u as i,x as k,K as R,L as f,M as Z,N as ee,O as te,P as oe,Q as D,w as V,R as A,S as T,F as H,U,f as se,V as re,j as O,W as ae,X as ne,i as ie,Y as ce,Z as ue,_ as le,$ as _e,y as pe,a0 as de}from"../vendor.b3a4d035.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const me=e=>{const o=z();o.use(J({persist:!0,storage:localStorage})),e.use(o)},he="modulepreload",fe=function(e,o){return new URL(e,o).href},C={},m=function(o,s,n){if(!s||s.length===0)return o();const r=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=fe(t,n),t in C)return;C[t]=!0;const u=t.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let l=r.length-1;l>=0;l--){const _=r[l];if(_.href===t&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":he,u||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),u)return new Promise((l,_)=>{c.addEventListener("load",l),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())},ge=""+new URL("invite.6938d7d2.png",import.meta.url).href,ve="https://api.cashpayments.in",F=Y.create({baseURL:ve,timeout:15e3});F.interceptors.request.use(e=>{const o=L.get("token");return e.loading&&b.loading({message:"loading...",forbidClick:!0,duration:0}),e.headers=Object.assign({},e.headers,{"X-Token":o}),e},e=>Promise.reject(e));F.interceptors.response.use(e=>(e.config.loading&&b.clear(),e.data.code===200?e.data.data:(["NO LOGIN","TOKEN OVERDUE"].includes(e.data.message)&&B.push("/login"),e.config.toast&&b.fail(e.data.message),Promise.reject(e.data))),e=>{var o,s;switch(e.config.loading&&b.clear(),(o=e.response)==null?void 0:o.status){case 400:e.message="\u8BF7\u6C42\u9519\u8BEF(400)";break;case 401:e.message="\u672A\u6388\u6743(401)";break;case 403:e.message="\u62D2\u7EDD\u8BBF\u95EE(403)";break;case 404:e.message="\u8BF7\u6C42\u51FA\u9519(404)";break;case 408:e.message="\u8BF7\u6C42\u8D85\u65F6(408)";break;case 500:e.message="\u670D\u52A1\u5668\u9519\u8BEF(500)";break;case 501:e.message="\u670D\u52A1\u672A\u5B9E\u73B0(501)";break;case 502:e.message="\u7F51\u7EDC\u9519\u8BEF(502)";break;case 503:e.message="\u670D\u52A1\u4E0D\u53EF\u7528(503)";break;case 504:e.message="\u7F51\u7EDC\u8D85\u65F6(504)";break;case 505:e.message="HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)";break;default:e.message=`\u8FDE\u63A5\u51FA\u9519(${(s=e.response)==null?void 0:s.status})!`}return e.config.toast&&b.fail(e.message),Promise.reject(e)});function P(e,o,{loading:s=!1,toast:n=!0}={}){return F.request({method:"GET",url:e,data:o,loading:s,toast:n})}function I(e,o,{loading:s=!1,toast:n=!0}={}){return F.request({method:"POSt",url:e,data:o,loading:s,toast:n})}const we=(e={})=>P("/home/detail",e),Et=(e={})=>P("/client/generateQRCode",e,{loading:!0}),kt=(e={})=>P("/recharge/system/address",e),At=e=>I("/client/bind/google/code",e),xt=e=>I("/recharge/usdt",e),Rt=e=>I("/bank/account/withdrawal",e),be=(e={})=>P("/home/current/price",e),E=(e=0,o=1)=>`${o===1?"$":"\u20B9"}${e.toString().replace(new RegExp("(?<!.*\\..*)(\\d)(?=(\\d{3})+($|\\.))","g"),"$1,")}`,Lt=e=>e.slice(0,1).toLocaleUpperCase()+e.slice(1),g=e=>(Z("data-v-bc0aba6f"),e=e(),ee(),e),ye={class:"Home p-4 bg-gray-1"},Ee={class:"cash p-4 rounded-md bg-slate-600 color-white"},ke={"flex-justify":""},Ae=g(()=>a("p",null,"USDT Balance",-1)),xe=g(()=>a("p",null,"Withdrawal Balance",-1)),Re={flex:"","text-center":"","mt-8":""},Le=g(()=>a("i",{"i-material-symbols:download":""},null,-1)),Te=g(()=>a("i",{"i-material-symbols:upload-rounded":""},null,-1)),Fe=g(()=>a("section",{class:"invite box-base"},[a("img",{src:ge,alt:""})],-1)),Pe={class:"usdp box-base px-0 flex text-center color-slate-700"},Oe={"flex-1":""},Se=g(()=>a("p",{"text-sm":""}," Today's recharge ",-1)),De={"pt-2":""},Ve=g(()=>a("div",{"w-1px":"","bg-gray-1":""},null,-1)),Ie={"flex-1":""},Be=g(()=>a("p",{"text-sm":""}," Today's withdrawal ",-1)),Ce={"pt-2":""},$e=g(()=>a("section",{class:"notice box-base flex-justify"},[a("p",null,"Notice"),a("p",null,[k("more "),a("i",{"i-gg:more-o":""})])],-1)),Ne={class:"info box-base"},He=g(()=>a("header",null,"More Information",-1)),Ue={key:0,"flex-justify":"","mt-2":""},je={"color-gray-4":""},j=x({__name:"index",setup(e){const o=p(0),s=p(0),n=p(0),r=p(0),t=S(),u=L.get("bingCode"),d=p(""),h=p(0),c=(l="recharge")=>{console.log("\u{1F680} ~ file: index.vue:17 ~ toAuth ~ bingCode:",u),u==="0"?t.push("/auth"):t.push(l==="recharge"?"/recharge":"/withdrawal")};return N(()=>{we().then(l=>{console.log("\u{1F680} ~ file: index.vue:18 ~ detail ~ res:",l),o.value=l.usdtBalance,s.value=l.rupeeBalance,n.value=l.todayRechargeUsdt,r.value=l.todayWithdrawal}),be().then(l=>{d.value=l.desc,h.value=l.price})}),(l,_)=>(f(),y("div",ye,[a("section",Ee,[a("header",ke,[a("div",null,[Ae,a("p",null,v(i(E)(i(o),1)),1)]),a("div",null,[xe,a("p",null,v(i(E)(i(s),2)),1)])]),a("p",Re,[a("span",{"flex-1":"",onClick:_[0]||(_[0]=w=>c("recharge"))},[Le,k(" Recharge")]),a("span",{"flex-1":"",onClick:_[1]||(_[1]=w=>c("withdrawal"))},[Te,k(" Withdrawal")])])]),Fe,a("section",Pe,[a("div",Oe,[Se,a("p",De,v(i(E)(i(n),1)),1)]),Ve,a("div",Ie,[Be,a("p",Ce,v(i(E)(i(r),2)),1)])]),$e,a("section",Ne,[He,i(d)?(f(),y("p",Ue,[k(v(i(d))+": ",1),a("span",je,v(i(E)(i(h),2)),1)])):R("",!0)])]))}});const $={},We=(e,o)=>{const s=e.__vccOpts||e;for(const[n,r]of o)s[n]=r;return s};typeof $=="function"&&$(j);const qe=We(j,[["__scopeId","data-v-bc0aba6f"]]),Ge=()=>m(()=>import("../address.dd831cba.js"),["..\\address.dd831cba.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\mine.8feb2fcb.js"],import.meta.url),Me=()=>m(()=>import("../auth.f4e7a038.js"),["..\\auth.f4e7a038.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css"],import.meta.url),Ke=()=>m(()=>import("../detail.bb54ac64.js"),["..\\detail.bb54ac64.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\order.9862af6c.js"],import.meta.url),Qe=()=>m(()=>import("../financial.abcdfbba.js"),["..\\financial.abcdfbba.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\mine.8feb2fcb.js"],import.meta.url),Xe=()=>m(()=>import("../login.66b5fd23.js"),["..\\login.66b5fd23.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\login.c4219b9c.js","./login.16331ea5.css"],import.meta.url),ze=()=>m(()=>import("../mine.5258449a.js"),["..\\mine.5258449a.js","..\\AppDialog.1b75a5fd.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.8feb2fcb.js","..\\login.c4219b9c.js","./mine.89ea2d70.css"],import.meta.url),Je=()=>m(()=>import("../order.3ef451f8.js"),["..\\order.3ef451f8.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\order.9862af6c.js"],import.meta.url),Ye=()=>m(()=>import("../password.7cdf41c5.js"),["..\\password.7cdf41c5.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\mine.8feb2fcb.js"],import.meta.url),Ze=()=>m(()=>import("../profit.3cc17a85.js"),["..\\profit.3cc17a85.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\mine.8feb2fcb.js"],import.meta.url),et=()=>m(()=>import("../recharge.e871778e.js"),["..\\recharge.e871778e.js","..\\AppDialog.1b75a5fd.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.8feb2fcb.js"],import.meta.url),tt=()=>m(()=>import("../sign.c300fb06.js"),["..\\sign.c300fb06.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\login.c4219b9c.js","./sign.c7c4efa0.css"],import.meta.url),ot=()=>m(()=>import("../system.1e1f491b.js"),["..\\system.1e1f491b.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","..\\mine.8feb2fcb.js"],import.meta.url),st=()=>m(()=>import("../telegram.321f0de4.js"),["..\\telegram.321f0de4.js","..\\vendor.b3a4d035.js","..\\vant-vendor.c1d1d286.js","./vant-vendor.d15ec4d9.css"],import.meta.url),rt=()=>m(()=>import("../withdrawal.73664ec4.js"),["..\\withdrawal.73664ec4.js","..\\AppDialog.1b75a5fd.js","..\\vant-vendor.c1d1d286.js","..\\vendor.b3a4d035.js","./vant-vendor.d15ec4d9.css","./AppDialog.013deee2.css","..\\mine.8feb2fcb.js"],import.meta.url),at=()=>m(()=>import("../all.c4d250d6.js"),["..\\all.c4d250d6.js","..\\vendor.b3a4d035.js","..\\vant-vendor.c1d1d286.js","./vant-vendor.d15ec4d9.css"],import.meta.url),nt=[{name:"address",path:"/address",component:Ge,props:!0,meta:{title:"address",leftArrow:!0,hideFooter:!0}},{name:"auth",path:"/auth",component:Me,props:!0,meta:{title:"authenticator",leftArrow:!0,hideFooter:!0}},{name:"detail",path:"/detail",component:Ke,props:!0,meta:{title:"detail",hideHeader:!0,hideFooter:!0}},{name:"financial",path:"/financial",component:Qe,props:!0,meta:{title:"financial",leftArrow:!0,hideFooter:!0}},{name:"index",path:"/",component:qe,props:!0,meta:{title:"home",hideHeader:!0}},{name:"login",path:"/login",component:Xe,props:!0,meta:{title:"Login",hideHeader:!0,hideFooter:!0}},{name:"mine",path:"/mine",component:ze,props:!0,meta:{title:"mine",hideHeader:!0}},{name:"order",path:"/order",component:Je,props:!0,meta:{title:"order",hideHeader:!0,hideFooter:!0}},{name:"password",path:"/password",component:Ye,props:!0,meta:{title:"password",leftArrow:!0,hideFooter:!0}},{name:"profit",path:"/profit",component:Ze,props:!0,meta:{title:"profit",leftArrow:!0,hideFooter:!0}},{name:"recharge",path:"/recharge",component:et,props:!0,meta:{title:"recharge",leftArrow:!0,hideFooter:!0}},{name:"sign",path:"/sign",component:tt,props:!0,meta:{title:"Sign up",hideHeader:!0,hideFooter:!0}},{name:"system",path:"/system",component:ot,props:!0,meta:{title:"system address",leftArrow:!0,hideFooter:!0}},{name:"telegram",path:"/telegram",component:st,props:!0,meta:{title:"telegram",leftArrow:!0}},{name:"withdrawal",path:"/withdrawal",component:rt,props:!0,meta:{title:"withdrawal",leftArrow:!0,hideFooter:!0}},{name:"all",path:"/:all(.*)*",component:at,props:!0,meta:{title:"Page Not Found",leftArrow:!0,rightText:"refresh"}}],B=te({history:oe(),routes:nt});B.beforeEach((e,o,s)=>{var w;const n=L.get("token"),t=L.get("userInfo")||{},u=(w=e.meta)==null?void 0:w.roles,d=e.path==="/login"||e.path==="/sign",h=!!n,c=!!u,l=u&&u.includes(t.role),_=document.querySelector(".RouterView");_&&_.scrollTo(0,0),!d&&!h?(o.path!=="/"&&b({message:"NO LOGIN"}),s("/login")):!d&&h&&c&&!l?(b({message:"NO PERMISSION"}),s("/404")):s()});const it=[{name:"Home",path:"/",icon:"home-o"},{name:"Order",path:"/order",icon:"orders-o"},{name:"Me",path:"/mine",icon:"contact"}],ct=x({__name:"AppFooter",setup(e){const o=S(),s=D(),n=p("/");V(()=>s.path,t=>{n.value=t},{immediate:!0});const r=t=>{o.push(t)};return(t,u)=>{const d=q,h=G;return f(),A(h,{modelValue:i(n),"onUpdate:modelValue":u[0]||(u[0]=c=>se(n)?n.value=c:null),onChange:r},{default:T(()=>[(f(!0),y(H,null,U(i(it),c=>(f(),A(d,{key:c.icon,icon:c.icon,name:c.path},{default:T(()=>[k(v(c.name),1)]),_:2},1032,["icon","name"]))),128))]),_:1},8,["modelValue"])}}}),ut={key:0,"flex-1":"",flex:"","flex-col":"","justify-between":"","my-8":""},lt=x({__name:"AppSkeleton",props:{isLoading:{type:Boolean,default:!0}},setup(e){const o=e;return(s,n)=>{const r=M;return o.isLoading?(f(),y("div",ut,[(f(),y(H,null,U(4,t=>O(r,{key:t,title:"",row:3})),64))])):re(s.$slots,"default",{key:1})}}}),_t=ae("header-store",()=>({title:p("\u9996\u9875")}),{persistedState:{persist:!0,storage:sessionStorage}}),pt={"w-4em":"","rounded-full":"","border-base":"","border-pramiry":"","p-2":"","text-sm":"","scale-75":""},dt=x({__name:"AppHeader",setup(e){const{title:o}=ne(_t()),s=S(),n=D(),r=ie("emitter"),t=p(""),u=p(!1),d=p(!1),h=p(""),c=p(!1);ce({title:o}),V(()=>n.meta,_=>{t.value=_.toPath,o.value=_.title,d.value=_.hideTitle,u.value=_.leftArrow,h.value=_.rightText,c.value=_.isPlain},{immediate:!0});function l(){r.emit("on-click-right")}return(_,w)=>{const W=K;return f(),A(W,{title:i(d)?"":i(o),"left-arrow":i(u),"right-text":i(h),onClickRight:l,onClickLeft:w[0]||(w[0]=wt=>i(t)?i(s).push(i(t)):i(s).go(-1))},ue({_:2},[i(c)?{name:"right",fn:T(()=>[a("p",pt,v(i(h)),1)]),key:"0"}:void 0]),1032,["title","left-arrow","right-text"])}}}),mt={flex:"~ col","justify-between":"","w-100vw":"","h-100vh":""},ht={key:0,"h-50px":""},ft=x({__name:"App",setup(e){const o=D(),s=p(!1),n=p(!1),r=p(!0);return V(()=>o.meta,t=>{s.value=!t.hideHeader,n.value=!t.hideFooter}),N(()=>{r.value=!1}),(t,u)=>{const d=dt,h=le("RouterView"),c=lt,l=ct;return f(),y("div",mt,[i(s)?(f(),A(d,{key:0})):R("",!0),O(c,{"is-loading":i(r)},{default:T(()=>[O(h,{class:"RouterView","flex-1":"","overflow-auto":""}),i(n)?(f(),y("div",ht)):R("",!0)]),_:1},8,["is-loading"]),i(n)?(f(),A(l,{key:1})):R("",!0)])}}});Q.use("en-US",X);const gt=_e(),vt=de();pe(ft).use(gt).use(B).use(me).provide("emitter",vt).mount("#app");export{P as G,I as P,We as _,At as a,$ as b,Lt as c,ct as d,xt as e,Et as g,B as r,kt as s,E as t,_t as u,Rt as w};
