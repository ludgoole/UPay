import{F as k,B as F,g as B,e as T,f as N,T as R}from"./vant-vendor.62befb3b.js";import{r as q,b as c}from"./assets/index.23673566.js";import{m as G}from"./mine.db093cf0.js";import{k as U,a as E,r as g,K as y,H as _,I as l,j as a,R as n,F as I,S,u as e,x as w}from"./vendor.eddfbfa3.js";const $={class:"Blank px-4 bg-gray-1 flex-1"},j=l("i",{"i-ic:outline-lock":""},null,-1),H=l("i",{"i-ic:outline-lock":""},null,-1),K=l("i",{"i-gg:keyboard":""},null,-1),L={"mt-16":""},M=U({__name:"password",setup(z){const f=[{title:"login password",value:1},{title:"payment password",value:2}],o=E({newPassword:"",renewPassword:"",type:1,googleCode:""}),d=g("password"),i=g("password"),P=p=>{if(p!==o.newPassword)return"renewPassword is not equal with newPassword"},m=()=>{o.newPassword="",o.renewPassword="",o.googleCode=""},b=()=>{m()},V=()=>{G(o).then(()=>{m(),R("modify success!"),q.go(-1)})};return(p,t)=>{const u=k,v=F,x=B,C=T,h=N;return y(),_("div",$,[l("section",null,[a(h,{active:e(o).type,"onUpdate:active":t[5]||(t[5]=r=>e(o).type=r),type:"card","mt-4":"",onChange:b},{default:n(()=>[(y(),_(I,null,S(f,r=>a(C,{key:r.title,name:r.value,title:r.title},{default:n(()=>[a(x,{"bg-white":"","mt-4":"","py-4":"","box-base":"",onSubmit:V},{default:n(()=>[a(u,{modelValue:e(o).newPassword,"onUpdate:modelValue":t[0]||(t[0]=s=>e(o).newPassword=s),type:e(d),name:"newPassword",label:"New Password",placeholder:"Enter the new password",rules:[{required:!0,message:"Please enter the new password"}],"right-icon":e(d)==="text"?"closed-eye":"eye-o",onClickRightIcon:t[1]||(t[1]=s=>d.value=e(d)==="text"?"password":"text")},{label:n(()=>[j,w(" New Password ")]),_:1},8,["modelValue","type","right-icon"]),a(u,{modelValue:e(o).renewPassword,"onUpdate:modelValue":t[2]||(t[2]=s=>e(o).renewPassword=s),"mt-8":"",type:e(i),name:"renewPassword",label:"Renew Password",placeholder:"Enter the renew password",rules:[{required:!0,message:"Please enter the renew password"},{validator:P}],"right-icon":e(i)==="text"?"closed-eye":"eye-o",onClickRightIcon:t[3]||(t[3]=s=>i.value=e(i)==="text"?"password":"text")},{label:n(()=>[H,w(" Renew Password ")]),_:1},8,["modelValue","type","rules","right-icon"]),a(u,{modelValue:e(o).googleCode,"onUpdate:modelValue":t[4]||(t[4]=s=>e(o).googleCode=s),"mt-8":"",name:"googleCode",label:"Google Code",placeholder:"Google Code",rules:[{required:!0,message:"Please enter Google Code"}]},{label:n(()=>[K,w(" Google Code ")]),_:1},8,["modelValue"]),l("div",L,[a(v,{block:"",type:"primary","native-type":"submit"},{default:n(()=>[w(" submit ")]),_:1})])]),_:1})]),_:2},1032,["name","title"])),64))]),_:1},8,["active"])])])}}});typeof c=="function"&&c(M);export{M as default};
