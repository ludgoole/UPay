import{G as a,P as o}from"./assets/index.85e916c9.js";const r=(t={})=>a("/home/total/detail",t),i=t=>o("/recharge/history",t,{loading:!0}),l=t=>o("/bank/account/withdrawal/detail",t,{loading:!0}),n=t=>a(`/bank/account/split/order/${t.txnId}/${t.pageNum}/${t.pageSize}`,{},{loading:!0});export{n as o,i as r,r as t,l as w};
