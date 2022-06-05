var $=Object.defineProperty,g=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(e,s,t)=>s in e?$(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,d=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&m(e,t,s[t]);if(p)for(var t of p(s))_.call(s,t)&&m(e,t,s[t]);return e},f=(e,s)=>g(e,k(s));import{q as y,s as b,N as c,O as P,d as w}from"./index.521ebd07.js";const{VITE_API_URL:h}={VITE_API_URL:"https://obscure-temple-95558.herokuapp.com",VITE_GOOGLE_OAUTH_LOGIN_URL:"https://obscure-temple-95558.herokuapp.com/auth/google",VITE_ENV:"production",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},o={user:`${h}/users`,post:`${h}/posts`},E=y(),{useModalAlert:i,useModalAlertText:n}=b(E),r=c.create({baseURL:"http://127.0.0.1:3005"});c.defaults.timeout=1e3;c.defaults.retry=4;c.defaults.retryDelay=1e3;r.interceptors.request.use(e=>(localStorage.getItem("token")&&(e.headers.Authorization="Bearer "+localStorage.getItem("token")),e),e=>(e.method.toUpperCase(),e),e=>e,e=>Promise.reject(e));r.interceptors.response.use(e=>{var t;return f(d({},e),{target:((t=e==null?void 0:e.data)==null?void 0:t.data)||{}})},e=>{if(e.response){const{status:t}=e.response,{name:l}=e.response.data.error,{message:a}=e.response.data;switch(t){case 400:i.value=!0;let u="";switch(l){case"40001":u=`\uFF0C${a}`,n.value=`\u683C\u5F0F\u932F\u8AA4${u}`;break;case"40002":u=`\uFF0C${a}`,a.includes("\u60A8\u7684\u5BC6\u78BC\u4E0D\u6B63\u78BA")&&(u="\uFF0C\u5E33\u865F\u6216\u5BC6\u78BC\u932F\u8AA4"),a.includes("\u5DF2\u8A3B\u518A\u6B64\u7528\u6236")&&(u="\uFF0C\u6B64 Email \u5DF2\u88AB\u8A3B\u518A"),a.includes("\u60A8\u7684\u820A\u5BC6\u78BC\u4E0D\u6B63\u78BA")&&(u="\uFF0C\u60A8\u7684\u539F\u5BC6\u78BC\u4E0D\u6B63\u78BA"),n.value=`\u5167\u5BB9\u932F\u8AA4${u}`;break;case"40003":n.value="\u4F60\u5C1A\u672A\u767B\u5165",P.push({name:"login"});break;case"40004":u=`\uFF0C${a}`,n.value=`\u64CD\u4F5C\u932F\u8AA4${u}`;break;case"40005":a.includes("File too large")&&(u="\uFF0C\u6A94\u6848\u8D85\u904E 2MB \u9650\u5236\uFF0C\u8ACB\u91CD\u65B0\u4E0A\u50B3"),n.value=`\u932F\u8AA4${u}`;break;case"40010":u=`\uFF0C${a}`,a.includes("\u4E0D\u5B58\u5728\u8A72\u7B46\u8CC7\u6599")&&(u="\uFF0C\u6B64 Email \u5C1A\u672A\u8A3B\u518A"),n.value=`ID \u932F\u8AA4${u}`;break;case"40011":n.value="Mongoose \u5B58\u5728\u91CD\u8907\u7684 _id";break;default:n.value="\u683C\u5F0F\u932F\u8AA4";break}break;case 401:i.value=!0,n.value="\u8EAB\u4EFD\u9A57\u8B49\u932F\u8AA4";case 404:break;case 500:switch(i.value=!0,l){case"50001":n.value="\u4E0A\u50B3\u767C\u751F\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u4E0A\u50B3";break;default:n.value=`${t}: \u7CFB\u7D71\u932F\u8AA4\uFF0C\u8ACB\u6D3D\u7CFB\u7D71\u7BA1\u7406\u54E1`;break}break;default:i.value=!0,n.value=`${t}: \u7CFB\u7D71\u932F\u8AA4\uFF0C\u8ACB\u6D3D\u7CFB\u7D71\u7BA1\u7406\u54E1`;break}}if(e.code==="ECONNABORTED"&&e.message.indexOf("timeout")!==-1){const{config:t}=e;if(t.__retryCount=t.__retryCount||0,t.__retryCount>=t.retry)return Promise.reject(e);t.__retryCount+=1;var s=new Promise(function(l){setTimeout(function(){i.value=!0,n.value="\u4F3A\u670D\u5668\u6C92\u6709\u5373\u6642\u56DE\u61C9\uFF0C\u6B63\u5728\u5617\u8A66\u91CD\u65B0\u8ACB\u6C42\u670D\u52D9...",l()},t.retryDelay||1)});return s.then(()=>c(t)).finally(()=>{}).catch(l=>{i.value=!0,n.value="\u7CFB\u7D71\u932F\u8AA4\uFF0C\u8ACB\u6D3D\u7CFB\u7D71\u7BA1\u7406\u54E1",console.error(l)})}return e.response});function L(e){return r({url:`${o.user}/sign_in`,method:"post",data:e})}function U(e){return r({url:`${o.user}/sign_up_check`,method:"post",data:e})}function O(e){return r({url:`${o.user}/sign_up`,method:"post",data:e})}function T(){return r({url:`${o.user}/profile`,method:"get"})}function A(e){return r({url:`${o.user}/profile/${e}`,method:"get"})}function B(e){return r({url:`${o.user}/profile/${e.id}`,method:"patch",data:e.data})}function R(e){return r({url:`${o.user}/updatePassword`,method:"patch",data:e})}function D(e){let s=o.post;if(e){const{query:t}=e;Object.keys(t).forEach((a,u)=>{u===0?s+=`?${a}=${t[a]}`:s+=`&${a}=${t[a]}`})}return r({url:s,method:"get"})}function M(e){return r({url:`${o.post}/${e}`,method:"get"})}function S(e){return r({url:o.post,method:"post",data:e})}function N(e){return r({url:`${o.post}/image`,method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function V(e){return r({url:`${o.post}/${e}`,method:"delete"})}function x(e){const{_id:s,content:t,image:l}=e;return r({url:`${o.post}/${s}`,method:"patch",data:{content:t,image:l}})}function j(e){return r({url:`${o.user}/follows/${e}`,method:"get"})}function F(e){return r({url:`${o.user}/follows/${e}`,method:"post"})}function q(e){return r({url:`${o.user}/follows/${e}`,method:"delete"})}function G(e){return r({url:`${o.user}/avatar`,method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function z(){return r({url:`${o.post}/likes`,method:"get"})}function H(e){return r({url:`${o.post}/likes/${e}`,method:"put"})}function J(e){return r({url:`${o.post}/likes/${e}`,method:"delete"})}function K(e,s){return r({url:`${o.post}/comment/${e}`,method:"post",data:{comment:s}})}function Q(e,s){return r({url:`${o.post}/comment/${e}`,method:"patch",data:{comment:s}})}function W(e){return r({url:`${o.post}/comment/${e}`,method:"delete"})}const X=w("user",{state:()=>({_id:"",name:"",image:"",follows:[],likes:[]}),actions:{async patchUser(e){this.$patch(d({},e))}}});export{x as a,N as b,j as c,q as d,z as e,V as f,D as g,W as h,T as i,Q as j,K as k,H as l,J as m,G as n,B as o,S as p,R as q,A as r,M as s,F as t,X as u,L as v,U as w,O as x};
