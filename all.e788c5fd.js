import{k as c,V as r,o as l,E as u,C as f,H as e,u as m,i as p,P as _}from"./vendor.36e6497c.js";import{a as d,b as s}from"./assets/index.ed86cc75.js";import{T as k}from"./vant-vendor.95c16213.js";import"./lunar-vendor.cb1bd71e.js";const x={absolute:"","min-w-full":"","min-h-full":"","bg-base":"",flex:"","justify-center":"","items-center":"","select-none":""},b={"px-5":"","py-10":"",flex:"~ col gap-4","justify-center":"","items-center":""},g=e("i",{"text-8xl":"","i-twemoji-crying-face":""},null,-1),h=e("span",{"text-4xl":""},"Page Not Found",-1),y=c({__name:"[...all]",setup(B){const t=p("emitter"),{title:i}=r(d()),a=_();i.value="404",t.on("on-click-right",o),l(()=>{t.off("on-click-right",o)});function o(){k({message:"\u5237\u65B0"})}return(j,n)=>(u(),f("div",x,[e("div",b,[g,h,e("button",{btn:"~ base",onClick:n[0]||(n[0]=v=>m(a).replace({path:"/"}))}," Back ")])]))}});typeof s=="function"&&s(y);export{y as default};