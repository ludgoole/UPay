import{F as y,B as k,f as v,T as C}from"./vant-vendor.c1d1d286.js";import{k as h,G as w,r as m,L,H as U,I as o,J as B,j as t,S as s,u as l,f as p,x as a,E as _}from"./vendor.b3a4d035.js";import{l as F}from"./login.c4219b9c.js";import{b}from"./assets/index.61c1ea86.js";const P={class:"Login flex-center bg-gray-1 px-8"},S={class:"container box-base bg-white"},G=o("i",{"i-ic:baseline-person-outline":""},null,-1),N=o("i",{"i-ic:outline-lock":""},null,-1),T=o("i",{"i-gg:keyboard":""},null,-1),q={style:{margin:"16px"}},E="Login to UPay",R=h({__name:"login",setup(j){const g=w(),i=m(""),r=m(""),u=m(""),f=c=>{F(c).then(e=>{console.log("\u{1F680} ~ file: login.vue:32 ~ login ~ res:",e),C("login success!"),_.set("token",e.token,{expires:1}),_.set("bingCode",(e.bingCode||0).toString(),{expires:1}),g.push("/")})};return(c,e)=>{const d=y,x=k,V=v;return L(),U("div",P,[o("section",S,[o("h1",{"mt-4":"","text-2xl":"","text-center":""},B(E)),t(V,{onSubmit:f},{default:s(()=>[t(d,{modelValue:l(i),"onUpdate:modelValue":e[0]||(e[0]=n=>p(i)?i.value=n:null),name:"clientName",label:"Login Username",placeholder:"Login Username",rules:[{required:!0,message:"Please enter username"}]},{label:s(()=>[G,a(" Login Username ")]),_:1},8,["modelValue"]),t(d,{modelValue:l(r),"onUpdate:modelValue":e[1]||(e[1]=n=>p(r)?r.value=n:null),type:"password",name:"password",label:"Login Password",placeholder:"Login password",rules:[{required:!0,message:"Please enter password"}]},{label:s(()=>[N,a(" Login Password ")]),_:1},8,["modelValue"]),t(d,{modelValue:l(u),"onUpdate:modelValue":e[2]||(e[2]=n=>p(u)?u.value=n:null),name:"googleCode",label:"Google Code",placeholder:"Google Code"},{label:s(()=>[T,a(" Google Code ")]),_:1},8,["modelValue"]),o("div",q,[t(x,{block:"",type:"primary","native-type":"submit"},{default:s(()=>[a(" login ")]),_:1})])]),_:1}),o("p",{"pr-4":"","text-right":"","color-gray-4":"",onClick:e[3]||(e[3]=n=>l(g).push("/sign"))}," Sign up ")])])}}});typeof b=="function"&&b(R);export{R as default};
