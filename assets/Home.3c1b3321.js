import{_ as L,u as P,g as S,s as A,r,o as H,z as N,a as t,c as o,b as m,l as h,f as u,F as R,e as b,k as E,x as M}from"./index.a58e534f.js";import{u as V,a as w}from"./userStore.b723377f.js";import{u as C,L as y,_ as D}from"./Posts.4679b120.js";const F={class:"post-content"},U={key:0,class:"is-loading"},z={key:2,class:"no-post"},I={key:0,class:"is-loading"},T={setup($){const i=P();V();const k=S(),d=C(),{posts:_,currentPage:n,hasNext:a}=A(d),{patchPosts:x,pushPosts:B}=d,{openModalAlert:v}=k,l=r(!0);(async()=>{l.value=!0;const{data:e}=await w(i,n.value);e.status==="success"?(x(e.data.list),a.value=e.data.page.has_next):v(e.message),l.value=!1})();const p=r(null),c=r(!0),g=async()=>{const{top:e}=p.value.getBoundingClientRect(),f=window.innerHeight;if(c.value&&e<f&&a.value){c.value=!1,n.value+=1;const{data:s}=await w(i,n.value);s.status==="success"?(B(s.data.list),a.value=s.data.page.has_next,c.value=!0):v(s.message)}};return H(()=>{window.addEventListener("scroll",g)}),N(()=>{window.removeEventListener("scroll",g),n.value=1,a.value=!1}),(e,f)=>(t(),o("section",null,[m("div",F,[l.value?(t(),o("div",U,[h(y)])):u(_).length?(t(!0),o(R,{key:1},b(u(_),s=>(t(),M(D,{key:s._id,post:s,"data-aos":"clip-left"},null,8,["post"]))),128)):(t(),o("div",z," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u8A66\u8457\u65B0\u589E\u4E00\u5247\u52D5\u614B\u5427\uFF01 ")),m("div",{class:"loading-detector",ref_key:"loadingDetector",ref:p},[u(a)?(t(),o("div",I,[h(y)])):E("",!0)],512)])]))}};var K=L(T,[["__scopeId","data-v-48adbbad"]]);export{K as default};
