import{_ as H,u as O,g as T,s as j,r as u,E as $,o as b,bb as I,z as q,a as n,c as r,b as a,f as t,k,t as w,n as G,l as U,F as J,e as K,x as Q}from"./index.a58e534f.js";import{u as W,b as X,L as A,_ as Y}from"./Posts.4679b120.js";import{u as Z,k as ss,t as es,g as C,e as D,f as as,v as ts}from"./userStore.b723377f.js";const os={class:"profile","data-aos":"clip-left","data-aos-duration":"1000"},ls={class:"headshot"},ns=["src"],is={class:"content"},cs={class:"head"},rs={class:"name"},ds={class:"created"},us={class:"detail"},fs={class:"post-content"},_s={key:0,class:"is-loading"},vs={key:2,class:"no-post"},ws={key:0,class:"is-loading"},ps={setup(gs){const g=O(),i=Z(),P=W(),F=T(),{patchUser:x}=i,{profilePosts:f,currentPage:p,hasNext:_}=j(P),{pushProfilePosts:E,patchProfilePosts:R}=P;f.value.length=0;const c=u(!1),V=async()=>{const{data:s}=await ss();s.status==="success"&&x({_id:s.data._id,name:s.data.nickName,image:s.data.hasOwnProperty("avatar")?s.data.avatar:""})},{id:e}=g.params,v=$({_id:"",nickName:"",avatar:"",follows:[],likes:[]});(async()=>{const{data:s}=await es(e);s.status==="success"&&Object.assign(v,s.data)})();const h=u(!0),B=async()=>{h.value=!0;const{data:s}=await C(e,g,p.value);s.status==="success"?(R(s.data.list),_.value=s.data.page.has_next):openModalAlert(s.message),h.value=!1};B();const d=u([]),m=async()=>{if(i._id){d.value=[];const{data:s}=await D(i._id);if(s.status!=="success")return;x({follows:s.data.list});for(let o of i.follows)d.value.push(o.following[0]._id);d.value.findIndex(o=>o===e)>=0?c.value=!0:c.value=!1}};m(),b(async()=>{i._id||(await V(),await m())});const L=u(0),N=async()=>{const{data:s}=await D(e);s.status==="success"&&(L.value=s.data.list.length)};N(),I(()=>F.useModalFollows,async s=>{s||(await N(),await m())}),I(()=>[F.useModalPost,f],async s=>{s||await B()});const z=async()=>{if(e!==i._id)if(c.value){const{data:s}=await as(e);if(s.status!=="success")return;const o=d.value.findIndex(l=>l==e);o>=0&&(d.value.splice(o,1),c.value=!1)}else{const{data:s}=await ts(e);if(s.status!=="success")return;d.value.splice(0,0,e),c.value=!0}},S=u(null),y=u(!0),M=async()=>{const{top:s}=S.value.getBoundingClientRect(),o=window.innerHeight;if(y.value&&s<o&&_.value){y.value=!1,p.value+=1;const{data:l}=await C(e,g,p.value);l.status==="success"?(E(l.data.list),_.value=l.data.page.has_next,y.value=!0):openModalAlert(l.message)}};return b(()=>{window.addEventListener("scroll",M)}),q(()=>{window.removeEventListener("scroll",M),p.value=1,_.value=!1}),(s,o)=>(n(),r("section",null,[a("div",os,[a("div",ls,[t(v).avatar?(n(),r("img",{key:0,src:t(v).avatar,alt:""},null,8,ns)):k("",!0)]),a("div",is,[a("div",cs,[a("span",rs,w(t(v).nickName),1),t(i)._id!==t(e)?(n(),r("div",{key:0,class:G(["follow-btn",c.value?"unfollow":"follow"]),onClick:z},w(c.value?"\u53D6\u6D88\u8FFD\u8E64":"\u8FFD\u8E64"),3)):k("",!0)]),a("div",ds,w(t(X)(t(v).createdAt))+" \u52A0\u5165\u5143\u5B87\u5B99",1),a("div",us,[a("span",null,w(t(f).length)+" \u5247\u8CBC\u6587",1),a("span",null,w(L.value)+" \u4EBA\u8FFD\u8E64\u4E2D",1)])])]),a("div",fs,[h.value?(n(),r("div",_s,[U(A)])):t(f).length?(n(!0),r(J,{key:1},K(t(f),l=>(n(),Q(Y,{key:l._id,post:l,"data-aos":"clip-left"},null,8,["post"]))),128)):(n(),r("div",vs," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u8A66\u8457\u65B0\u589E\u4E00\u5247\u52D5\u614B\u5427\uFF01 ")),a("div",{class:"loading-detector",ref_key:"loadingDetector",ref:S},[t(_)?(n(),r("div",ws,[U(A)])):k("",!0)],512)])]))}};var Ps=H(ps,[["__scopeId","data-v-299530a2"]]);export{Ps as default};
