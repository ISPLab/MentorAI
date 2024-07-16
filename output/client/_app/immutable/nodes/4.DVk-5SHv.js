import{r as Ae,s as Ge,x as Se,n as le,c as Ne,i as De,y as re}from"../chunks/scheduler.Dk-snqIU.js";import{q as Pe,S as Le,i as Oe,e as W,s as O,n as ie,k as Xe,c as j,d as b,f as X,l as Y,a as D,m as y,C as G,h as S,g as M,D as te,t as P,b as L,r as R,j as ne,E as Ce,F as Te}from"../chunks/index.B-IpIKmi.js";import{p as ze,i as Fe,a as Ie}from"../chunks/entry.CElNCuGP.js";import{r as qe}from"../chunks/index.Ice1EKvx.js";const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Me(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,a,r,c,l,s,f,g,h,_){let m=n.length,u=c.length,i=m;const o={};for(;i--;)o[n[i].key]=i;const p=[],C=new Map,T=new Map,k=[];for(i=u;i--;){const v=_(r,c,i),E=t(v);let d=l.get(E);d?k.push(()=>d.p(v,e)):(d=g(E,v),d.c()),C.set(E,p[i]=d),E in o&&T.set(E,Math.abs(i-o[E]))}const A=new Set,z=new Set;function N(v){Pe(v,1),v.m(s,h),l.set(v.key,v),h=v.first,u--}for(;m&&u;){const v=p[u-1],E=n[m-1],d=v.key,w=E.key;v===E?(h=v.first,m--,u--):C.has(w)?!l.has(d)||A.has(d)?N(v):z.has(w)?m--:T.get(d)>T.get(w)?(z.add(d),N(v)):(A.add(w),m--):(f(E,l),m--)}for(;m--;){const v=n[m];C.has(v.key)||f(v,l)}for(;u;)N(p[u-1]);return Ae(k),p}const Ue=(n,e={})=>{he(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:a=3500,force:r=.5,particleCount:c=150,particleShape:l="mix",particleSize:s=12,destroyAfterDone:f=!0,stageHeight:g=800,stageWidth:h=1600}=e;(function(o){const p=Z("style");p.dataset.neoconfetti="",p.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',$(document.head,p)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",g+"px");let _,m=ue(c,t),u=oe(n,m);function i(o,p){const C=U(F()*(Ke-1)),T=l!=="rectangles"&&(l==="circles"||Qe(C)),k=(N,v)=>o.style.setProperty(N,v+"");k("--x-landing-point",J(V(de(p,90)-180),0,180,-h/2,h/2)+"px"),k("--duration-chaos",a-U(1e3*F())+"ms");const A=F()<Be?q(F()*Re,2):0;k("--x1",A),k("--x2",-1*A),k("--x3",A),k("--x4",q(V(J(V(de(p,90)-180),0,180,-1,1)),4)),k("--y1",q(F()*fe,4)),k("--y2",q(F()*r*(je()?1:-1),4)),k("--y3",fe),k("--y4",q(Je(J(V(p-180),0,180,r,-r),0),4)),k("--width",(T?s:U(4*F())+s/2)+"px"),k("--height",(T?s:U(2*F())+s)+"px");const z=C.toString(2).padStart(3,"0").split("");k("--half-rotation",z.map(N=>+N/2+"")),k("--rotation",z),k("--rotation-duration",q(F()*(Ve-ce)+ce)+"ms"),k("--border-radius",T?"50%":0)}for(const[o,p]of Object.entries(u))i(p,m[+o].degree);return Promise.resolve().then(()=>_=setTimeout(()=>f&&(n.innerHTML=""),a)),{update(o){he(o);const p=o.particleCount??c,C=o.colors??t,T=o.stageHeight??g;if(m=ue(p,C),p===c&&JSON.stringify(t)!==JSON.stringify(C))for(const[k,{color:A}]of Object.entries(m))u[+k].style.setProperty("--bgcolor",A);p!==c&&(n.innerHTML="",u=oe(n,m)),f&&!o.destroyAfterDone&&clearTimeout(_),n.style.setProperty("--stage-height",T+"px"),t=C,a=o.duration??a,r=o.force??r,c=p,l=o.particleShape??l,s=o.particleSize??s,f=o.destroyAfterDone??f,g=T,h=o.stageWidth??h},destroy(){clearTimeout(_)}}};function oe(n,e=[]){const t=[];for(const{color:a}of e){const r=Z("div");r.className="fk9XWG_particle",r.style.setProperty("--bgcolor",a);const c=Z("div");$(r,c),$(n,r),t.push(r)}return t}const ce=200,Ve=800,Be=.1,Re=.3,fe=.5,V=Math.abs,F=Math.random,U=Math.round,Je=Math.max,Z=n=>document.createElement(n),$=(n,e)=>n.appendChild(e),ue=(n,e)=>Array.from({length:n},(t,a)=>({color:e[a%e.length],degree:360*a/n})),q=(n,e=2)=>U((n+Number.EPSILON)*10**e)/10**e,J=(n,e,t,a,r)=>(n-e)*(r-a)/(t-e)+a,de=(n,e)=>n+e>360?n+e-360:n+e,je=()=>F()>.5,Ke=6,Qe=n=>n!==1&&je(),ee=n=>n===void 0,x=(n,e)=>{if(!ee(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},he=({particleCount:n,duration:e,colors:t,particleSize:a,force:r,stageHeight:c,stageWidth:l,particleShape:s})=>{if(x(n,"particleCount"),x(e,"duration"),x(a,"particleSize"),x(r,"force"),x(c,"stageHeight"),x(l,"stageWidth"),!ee(s)&&!/^(mix|circles|rectangles)$/i.test(s))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!ee(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(r>1)throw new Error("force must be within 0 and 1")};function Ye(n){const e=JSON.parse(n);return e.data&&(e.data=ze(e.data)),e}function K(n){return HTMLElement.prototype.cloneNode.call(n)}function Ze(n,e=()=>{}){const t=async({action:r,result:c,reset:l=!0,invalidateAll:s=!0})=>{c.type==="success"&&(l&&HTMLFormElement.prototype.reset.call(n),s&&await Fe()),(location.origin+location.pathname===r.origin+r.pathname||c.type==="redirect"||c.type==="error")&&Ie(c)};async function a(r){var o,p,C,T,k;if(((o=r.submitter)!=null&&o.hasAttribute("formmethod")?r.submitter.formMethod:K(n).method)!=="post")return;r.preventDefault();const l=new URL((p=r.submitter)!=null&&p.hasAttribute("formaction")?r.submitter.formAction:K(n).action),s=(C=r.submitter)!=null&&C.hasAttribute("formenctype")?r.submitter.formEnctype:K(n).enctype,f=new FormData(n),g=(T=r.submitter)==null?void 0:T.getAttribute("name");g&&f.append(g,((k=r.submitter)==null?void 0:k.getAttribute("value"))??"");const h=new AbortController;let _=!1;const u=await e({action:l,cancel:()=>_=!0,controller:h,formData:f,formElement:n,submitter:r.submitter})??t;if(_)return;let i;try{const A=new Headers({accept:"application/json","x-sveltekit-action":"true"});s!=="multipart/form-data"&&A.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(s)?s:"application/x-www-form-urlencoded");const z=s==="multipart/form-data"?f:new URLSearchParams(f),N=await fetch(l,{method:"POST",headers:A,cache:"no-store",body:z,signal:h.signal});i=Ye(await N.text()),i.type==="error"&&(i.status=N.status)}catch(A){if((A==null?void 0:A.name)==="AbortError")return;i={type:"error",error:A}}u({action:l,formData:f,formElement:n,update:A=>t({action:l,result:i,reset:A==null?void 0:A.reset,invalidateAll:A==null?void 0:A.invalidateAll}),result:i})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",a)}}}const He="(prefers-reduced-motion: reduce)",$e=()=>window.matchMedia(He).matches,et=qe($e(),n=>{{const e=a=>{n(a.matches)},t=window.matchMedia(He);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}}),{document:Q,window:tt}=xe;function me(n,e,t){const a=n.slice();return a[11]=e[t],a}function pe(n,e,t){const a=n.slice();return a[14]=e[t],a}function _e(n,e,t){const a=n.slice();a[11]=e[t];const r=a[11]===a[4];return a[17]=r,a}function be(n,e,t){var _,m;const a=n.slice();a[20]=e[t];const r=a[17]?a[3]:a[1].guesses[a[11]];a[21]=r;const c=(_=a[1].answers[a[11]])==null?void 0:_[a[20]];a[22]=c;const l=((m=a[21])==null?void 0:m[a[20]])??"";a[23]=l;const s=a[17]&&a[20]===a[21].length;a[24]=s;const f=a[22]==="x";a[25]=f;const g=a[22]==="c";a[26]=g;const h=a[22]==="_";return a[27]=h,a}function nt(n){let e;return{c(){e=P("empty")},l(t){e=L(t,"empty")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function at(n){let e;return{c(){e=P("(absent)")},l(t){e=L(t,"(absent)")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function st(n){let e;return{c(){e=P("(present)")},l(t){e=L(t,"(present)")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function lt(n){let e;return{c(){e=P("(correct)")},l(t){e=L(t,"(correct)")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function ge(n,e){let t,a=e[23]+"",r,c,l,s,f,g,h;function _(i,o){return i[25]?lt:i[26]?st:i[27]?at:nt}let m=_(e),u=m(e);return{key:n,first:null,c(){t=W("div"),r=P(a),c=O(),l=W("span"),u.c(),s=O(),f=W("input"),this.h()},l(i){t=j(i,"DIV",{class:!0});var o=D(t);r=L(o,a),c=X(o),l=j(o,"SPAN",{class:!0});var p=D(l);u.l(p),p.forEach(b),s=X(o),f=j(o,"INPUT",{name:!0,type:!0}),o.forEach(b),this.h()},h(){y(l,"class","visually-hidden"),y(f,"name","guess"),f.disabled=g=!e[17],y(f,"type","hidden"),f.value=h=e[23],y(t,"class","letter svelte-1pg2j5l"),G(t,"exact",e[25]),G(t,"close",e[26]),G(t,"missing",e[27]),G(t,"selected",e[24]),this.first=t},m(i,o){M(i,t,o),S(t,r),S(t,c),S(t,l),u.m(l,null),S(t,s),S(t,f)},p(i,o){e=i,o&26&&a!==(a=e[23]+"")&&ne(r,a),m!==(m=_(e))&&(u.d(1),u=m(e),u&&(u.c(),u.m(l,null))),o&16&&g!==(g=!e[17])&&(f.disabled=g),o&26&&h!==(h=e[23])&&(f.value=h),o&2&&G(t,"exact",e[25]),o&2&&G(t,"close",e[26]),o&2&&G(t,"missing",e[27]),o&26&&G(t,"selected",e[24])},d(i){i&&b(t),u.d()}}}function ye(n,e){let t,a,r=e[11]+1+"",c,l,s,f=[],g=new Map,h,_=I(Array.from(Array(5).keys()));const m=u=>u[20];for(let u=0;u<_.length;u+=1){let i=be(e,_,u),o=m(i);g.set(o,f[u]=ge(o,i))}return{key:n,first:null,c(){t=W("h2"),a=P("Row "),c=P(r),l=O(),s=W("div");for(let u=0;u<f.length;u+=1)f[u].c();h=O(),this.h()},l(u){t=j(u,"H2",{class:!0});var i=D(t);a=L(i,"Row "),c=L(i,r),i.forEach(b),l=X(u),s=j(u,"DIV",{class:!0});var o=D(s);for(let p=0;p<f.length;p+=1)f[p].l(o);h=X(o),o.forEach(b),this.h()},h(){y(t,"class","visually-hidden"),y(s,"class","row svelte-1pg2j5l"),G(s,"current",e[17]),this.first=t},m(u,i){M(u,t,i),S(t,a),S(t,c),M(u,l,i),M(u,s,i);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(s,null);S(s,h)},p(u,i){e=u,i&26&&(_=I(Array.from(Array(5).keys())),f=We(f,i,m,1,e,_,g,s,Me,ge,h,be)),i&16&&G(s,"current",e[17])},d(u){u&&(b(t),b(l),b(s));for(let i=0;i<f.length;i+=1)f[i].d()}}}function rt(n){let e,t,a,r,c,l,s="back",f,g,h,_=I(["qwertyuiop","asdfghjkl","zxcvbnm"]),m=[];for(let u=0;u<3;u+=1)m[u]=we(me(n,_,u));return{c(){e=W("div"),t=W("button"),a=P("enter"),c=O(),l=W("button"),l.textContent=s,f=O();for(let u=0;u<3;u+=1)m[u].c();this.h()},l(u){e=j(u,"DIV",{class:!0});var i=D(e);t=j(i,"BUTTON",{"data-key":!0,class:!0});var o=D(t);a=L(o,"enter"),o.forEach(b),c=X(i),l=j(i,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Y(l)!=="svelte-1ptb1bp"&&(l.textContent=s),f=X(i);for(let p=0;p<3;p+=1)m[p].l(i);i.forEach(b),this.h()},h(){y(t,"data-key","enter"),t.disabled=r=!n[7],y(t,"class","svelte-1pg2j5l"),G(t,"selected",n[7]),y(l,"data-key","backspace"),y(l,"formaction","?/update"),y(l,"name","key"),l.value="backspace",y(l,"class","svelte-1pg2j5l"),y(e,"class","keyboard svelte-1pg2j5l")},m(u,i){M(u,e,i),S(e,t),S(t,a),S(e,c),S(e,l),S(e,f);for(let o=0;o<3;o+=1)m[o]&&m[o].m(e,null);g||(h=te(l,"click",Ce(n[9])),g=!0)},p(u,i){if(i&128&&r!==(r=!u[7])&&(t.disabled=r),i&128&&G(t,"selected",u[7]),i&708){_=I(["qwertyuiop","asdfghjkl","zxcvbnm"]);let o;for(o=0;o<3;o+=1){const p=me(u,_,o);m[o]?m[o].p(p,i):(m[o]=we(p),m[o].c(),m[o].m(e,null))}for(;o<3;o+=1)m[o].d(1)}},d(u){u&&b(e),Te(m,u),g=!1,h()}}}function it(n){let e,t,a=n[5]?"you won :)":"game over :(",r,c,l=!n[5]&&n[1].answer&&ke(n);return{c(){l&&l.c(),e=O(),t=W("button"),r=P(a),c=P(" play again?"),this.h()},l(s){l&&l.l(s),e=X(s),t=j(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var f=D(t);r=L(f,a),c=L(f," play again?"),f.forEach(b),this.h()},h(){y(t,"data-key","enter"),y(t,"class","restart selected svelte-1pg2j5l"),y(t,"formaction","?/restart")},m(s,f){l&&l.m(s,f),M(s,e,f),M(s,t,f),S(t,r),S(t,c)},p(s,f){!s[5]&&s[1].answer?l?l.p(s,f):(l=ke(s),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),f&32&&a!==(a=s[5]?"you won :)":"game over :(")&&ne(r,a)},d(s){s&&(b(e),b(t)),l&&l.d(s)}}}function ve(n){let e,t,a,r,c,l;return{c(){e=W("button"),t=P(n[14]),this.h()},l(s){e=j(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var f=D(e);t=L(f,n[14]),f.forEach(b),this.h()},h(){y(e,"data-key",n[14]),y(e,"class",a=re(n[2][n[14]])+" svelte-1pg2j5l"),e.disabled=n[7],y(e,"formaction","?/update"),y(e,"name","key"),e.value=n[14],y(e,"aria-label",r=n[14]+" "+(n[6][n[14]]||""))},m(s,f){M(s,e,f),S(e,t),c||(l=te(e,"click",Ce(n[9])),c=!0)},p(s,f){f&4&&a!==(a=re(s[2][s[14]])+" svelte-1pg2j5l")&&y(e,"class",a),f&128&&(e.disabled=s[7]),f&64&&r!==(r=s[14]+" "+(s[6][s[14]]||""))&&y(e,"aria-label",r)},d(s){s&&b(e),c=!1,l()}}}function we(n){let e,t,a=I(n[11]),r=[];for(let c=0;c<a.length;c+=1)r[c]=ve(pe(n,a,c));return{c(){e=W("div");for(let c=0;c<r.length;c+=1)r[c].c();t=O(),this.h()},l(c){e=j(c,"DIV",{class:!0});var l=D(e);for(let s=0;s<r.length;s+=1)r[s].l(l);t=X(l),l.forEach(b),this.h()},h(){y(e,"class","row svelte-1pg2j5l")},m(c,l){M(c,e,l);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);S(e,t)},p(c,l){if(l&708){a=I(c[11]);let s;for(s=0;s<a.length;s+=1){const f=pe(c,a,s);r[s]?r[s].p(f,l):(r[s]=ve(f),r[s].c(),r[s].m(e,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=a.length}},d(c){c&&b(e),Te(r,c)}}}function ke(n){let e,t,a=n[1].answer+"",r,c;return{c(){e=W("p"),t=P('the answer was "'),r=P(a),c=P('"')},l(l){e=j(l,"P",{});var s=D(e);t=L(s,'the answer was "'),r=L(s,a),c=L(s,'"'),s.forEach(b)},m(l,s){M(l,e,s),S(e,t),S(e,r),S(e,c)},p(l,s){s&2&&a!==(a=l[1].answer+"")&&ne(r,a)},d(l){l&&b(e)}}}function Ee(n){let e,t,a,r;return{c(){e=W("div"),this.h()},l(c){e=j(c,"DIV",{style:!0}),D(e).forEach(b),this.h()},h(){R(e,"position","absolute"),R(e,"left","50%"),R(e,"top","30%")},m(c,l){M(c,e,l),a||(r=Se(t=Ue.call(null,e,{particleCount:n[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(c,l){t&&De(t.update)&&l&256&&t.update.call(null,{particleCount:c[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(c){c&&b(e),a=!1,r()}}}function ot(n){let e,t,a,r="Sverdle",c,l,s,f="How to play",g,h,_=[],m=new Map,u,i,o,p,C,T,k=I(Array.from(Array(6).keys()));const A=d=>d[11];for(let d=0;d<k.length;d+=1){let w=_e(n,k,d),H=A(w);m.set(H,_[d]=ye(H,w))}function z(d,w){return d[5]||d[1].answers.length>=6?it:rt}let N=z(n),v=N(n),E=n[5]&&Ee(n);return{c(){e=W("meta"),t=O(),a=W("h1"),a.textContent=r,c=O(),l=W("form"),s=W("a"),s.textContent=f,g=O(),h=W("div");for(let d=0;d<_.length;d+=1)_[d].c();u=O(),i=W("div"),v.c(),o=O(),E&&E.c(),p=ie(),this.h()},l(d){const w=Xe("svelte-18lvto8",Q.head);e=j(w,"META",{name:!0,content:!0}),w.forEach(b),t=X(d),a=j(d,"H1",{class:!0,"data-svelte-h":!0}),Y(a)!=="svelte-16hvqlg"&&(a.textContent=r),c=X(d),l=j(d,"FORM",{method:!0,action:!0,class:!0});var H=D(l);s=j(H,"A",{class:!0,href:!0,"data-svelte-h":!0}),Y(s)!=="svelte-1w3fhu3"&&(s.textContent=f),g=X(H),h=j(H,"DIV",{class:!0});var ae=D(h);for(let B=0;B<_.length;B+=1)_[B].l(ae);ae.forEach(b),u=X(H),i=j(H,"DIV",{class:!0});var se=D(i);v.l(se),se.forEach(b),H.forEach(b),o=X(d),E&&E.l(d),p=ie(),this.h()},h(){var d;Q.title="Sverdle",y(e,"name","description"),y(e,"content","A Wordle clone written in SvelteKit"),y(a,"class","visually-hidden"),y(s,"class","how-to-play svelte-1pg2j5l"),y(s,"href","/sverdle/how-to-play"),y(h,"class","grid svelte-1pg2j5l"),G(h,"playing",!n[5]),G(h,"bad-guess",(d=n[0])==null?void 0:d.badGuess),y(i,"class","controls svelte-1pg2j5l"),y(l,"method","POST"),y(l,"action","?/enter"),y(l,"class","svelte-1pg2j5l")},m(d,w){S(Q.head,e),M(d,t,w),M(d,a,w),M(d,c,w),M(d,l,w),S(l,s),S(l,g),S(l,h);for(let H=0;H<_.length;H+=1)_[H]&&_[H].m(h,null);S(l,u),S(l,i),v.m(i,null),M(d,o,w),E&&E.m(d,w),M(d,p,w),C||(T=[te(tt,"keydown",n[10]),Se(Ze.call(null,l,ct))],C=!0)},p(d,[w]){var H;w&26&&(k=I(Array.from(Array(6).keys())),_=We(_,w,A,1,d,k,m,h,Me,ye,null,_e)),w&32&&G(h,"playing",!d[5]),w&1&&G(h,"bad-guess",(H=d[0])==null?void 0:H.badGuess),N===(N=z(d))&&v?v.p(d,w):(v.d(1),v=N(d),v&&(v.c(),v.m(i,null))),d[5]?E?E.p(d,w):(E=Ee(d),E.c(),E.m(p.parentNode,p)):E&&(E.d(1),E=null)},i:le,o:le,d(d){d&&(b(t),b(a),b(c),b(l),b(o),b(p)),b(e);for(let w=0;w<_.length;w+=1)_[w].d();v.d(),E&&E.d(d),C=!1,Ae(T)}}}const ct=()=>({update:n})=>{n({reset:!1})};function ft(n,e,t){let a,r,c,l,s;Ne(n,et,i=>t(8,s=i));let{data:f}=e,{form:g}=e,h,_;function m(i){const o=i.target.getAttribute("data-key");o==="backspace"?(t(3,c=c.slice(0,-1)),g!=null&&g.badGuess&&t(0,g.badGuess=!1,g)):c.length<5&&t(3,c+=o)}function u(i){var o;i.metaKey||i.key==="Enter"&&!l||(o=document.querySelector(`[data-key="${i.key}" i]`))==null||o.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}return n.$$set=i=>{"data"in i&&t(1,f=i.data),"form"in i&&t(0,g=i.form)},n.$$.update=()=>{n.$$.dirty&2&&t(5,a=f.answers.at(-1)==="xxxxx"),n.$$.dirty&34&&t(4,r=a?-1:f.answers.length),n.$$.dirty&18&&t(3,c=f.guesses[r]||""),n.$$.dirty&8&&t(7,l=c.length===5),n.$$.dirty&6&&(t(2,h={}),t(6,_={}),f.answers.forEach((i,o)=>{const p=f.guesses[o];for(let C=0;C<5;C+=1){const T=p[C];i[C]==="x"?(t(2,h[T]="exact",h),t(6,_[T]="correct",_)):h[T]||(t(2,h[T]=i[C]==="c"?"close":"missing",h),t(6,_[T]=i[C]==="c"?"present":"absent",_))}}))},[g,f,h,c,r,a,_,l,s,m,u]}class pt extends Le{constructor(e){super(),Oe(this,e,ft,ot,Ge,{data:1,form:0})}}export{pt as component};
