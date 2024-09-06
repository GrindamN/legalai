import{s as de,B as me,E as ve,p as Te,j as Be,G as Le,e as p,t as q,k as z,c as h,a as w,b as G,d as m,o as O,A as pe,f as n,i as re,g as o,u as ae,D as He,h as J,F as je,n as ce,y as De,z as Se}from"./scheduler.zIJcXxfw.js";import{S as he,i as _e,f as ge,b as oe,d as ne,m as ie,t as X,a as $,e as fe,g as Ae,c as Ne}from"./index.AJ44Rmxa.js";import{t as ue}from"./Toaster.svelte_svelte_type_style_lang.DWI_AZqd.js";import{M as Ce}from"./Modal.Q0e3-D_j.js";import{b as ze,d as Oe,e as Fe}from"./index.DQFZQg_T.js";import{b as Ue,f as We,h as Ye}from"./index.B7nlHbW3.js";import{S as Ze}from"./Spinner.CZs3vQQE.js";import"./create.BkENi-Q3.js";import{V as Re}from"./Valves.D0fH_Vdb.js";function Pe(a){let e,t;return e=new Ze({props:{className:"size-5"}}),{c(){oe(e.$$.fragment)},l(s){ne(e.$$.fragment,s)},m(s,i){ie(e,s,i),t=!0},p:ce,i(s){t||(X(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function qe(a){let e,t,s;function i(l){a[11](l)}let u={valvesSpec:a[3]};return a[4]!==void 0&&(u.valves=a[4]),e=new Re({props:u}),me.push(()=>ge(e,"valves",i)),{c(){oe(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ie(e,l,r),s=!0},p(l,r){const d={};r&8&&(d.valvesSpec=l[3]),!t&&r&16&&(t=!0,d.valves=l[4],ve(()=>t=!1)),e.$set(d)},i(l){s||(X(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){fe(e,l)}}}function Me(a){let e,t=`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
												transform-origin: center;
												animation: spinner_AtaB 0.75s infinite linear;
											}
											@keyframes spinner_AtaB {
												100% {
													transform: rotate(360deg);
												}
											}
										</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(s){e=h(s,"DIV",{class:!0,"data-svelte-h":!0}),pe(e)!=="svelte-1vuzrxa"&&(e.innerHTML=t),this.h()},h(){n(e,"class","ml-2 self-center")},m(s,i){re(s,e,i)},d(s){s&&m(e)}}}function Ge(a){let e,t,s,i=a[5].t("Valves")+"",u,l,r,d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',T,v,_,f,b,k,V,F,B,y,c=a[5].t("Save")+"",D,S,N,L,H,Z;const K=[qe,Pe],j=[];function C(g,I){return g[2]?1:0}k=C(a),V=j[k]=K[k](a);let x=a[1]&&Me();return{c(){e=p("div"),t=p("div"),s=p("div"),u=q(i),l=z(),r=p("button"),r.innerHTML=d,T=z(),v=p("div"),_=p("div"),f=p("form"),b=p("div"),V.c(),F=z(),B=p("div"),y=p("button"),D=q(c),S=z(),x&&x.c(),this.h()},l(g){e=h(g,"DIV",{});var I=w(e);t=h(I,"DIV",{class:!0});var A=w(t);s=h(A,"DIV",{class:!0});var W=w(s);u=G(W,i),W.forEach(m),l=O(A),r=h(A,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-745w2y"&&(r.innerHTML=d),A.forEach(m),T=O(I),v=h(I,"DIV",{class:!0});var U=w(v);_=h(U,"DIV",{class:!0});var R=w(_);f=h(R,"FORM",{class:!0});var Y=w(f);b=h(Y,"DIV",{class:!0});var Q=w(b);V.l(Q),Q.forEach(m),F=O(Y),B=h(Y,"DIV",{class:!0});var ee=w(B);y=h(ee,"BUTTON",{class:!0,type:!0});var E=w(y);D=G(E,c),S=O(E),x&&x.l(E),E.forEach(m),ee.forEach(m),Y.forEach(m),R.forEach(m),U.forEach(m),I.forEach(m),this.h()},h(){n(s,"class","text-lg font-medium self-center"),n(r,"class","self-center"),n(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),n(b,"class","px-1"),n(y,"class",N="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-gray-100 transition rounded-lg flex flex-row space-x-1 items-center "+(a[1]?" cursor-not-allowed":"")),n(y,"type","submit"),y.disabled=a[1],n(B,"class","flex justify-end pt-3 text-sm font-medium"),n(f,"class","flex flex-col w-full"),n(_,"class","flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"),n(v,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(g,I){re(g,e,I),o(e,t),o(t,s),o(s,u),o(t,l),o(t,r),o(e,T),o(e,v),o(v,_),o(_,f),o(f,b),j[k].m(b,null),o(f,F),o(f,B),o(B,y),o(y,D),o(y,S),x&&x.m(y,null),L=!0,H||(Z=[ae(r,"click",a[10]),ae(f,"submit",He(a[12]))],H=!0)},p(g,I){(!L||I&32)&&i!==(i=g[5].t("Valves")+"")&&J(u,i);let A=k;k=C(g),k===A?j[k].p(g,I):(Ae(),$(j[A],1,1,()=>{j[A]=null}),Ne(),V=j[k],V?V.p(g,I):(V=j[k]=K[k](g),V.c()),X(V,1),V.m(b,null)),(!L||I&32)&&c!==(c=g[5].t("Save")+"")&&J(D,c),g[1]?x||(x=Me(),x.c(),x.m(y,null)):x&&(x.d(1),x=null),(!L||I&2&&N!==(N="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-gray-100 transition rounded-lg flex flex-row space-x-1 items-center "+(g[1]?" cursor-not-allowed":"")))&&n(y,"class",N),(!L||I&2)&&(y.disabled=g[1])},i(g){L||(X(V),L=!0)},o(g){$(V),L=!1},d(g){g&&m(e),j[k].d(),x&&x.d(),H=!1,je(Z)}}}function Je(a){let e,t,s;function i(l){a[13](l)}let u={size:"sm",$$slots:{default:[Ge]},$$scope:{ctx:a}};return a[0]!==void 0&&(u.show=a[0]),e=new Ce({props:u}),me.push(()=>ge(e,"show",i)),{c(){oe(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ie(e,l,r),s=!0},p(l,[r]){const d={};r&65599&&(d.$$scope={dirty:r,ctx:l}),!t&&r&1&&(t=!0,d.show=l[0],ve(()=>t=!1)),e.$set(d)},i(l){s||(X(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){fe(e,l)}}}function Ke(a,e,t){let s;const i=Te("i18n");Be(a,i,c=>t(5,s=c));const u=Le();let{show:l=!1}=e,{type:r="tool"}=e,{id:d=null}=e,T=!1,v=!1,_=null,f={};const b=async()=>{var c;if(t(1,T=!0),_){for(const S in _.properties)((c=_.properties[S])==null?void 0:c.type)==="array"&&t(4,f[S]=(f[S]??"").split(",").map(N=>N.trim()),f);let D=null;r==="tool"?D=await Ye(localStorage.token,d,f).catch(S=>{ue.error(S)}):r==="function"&&(D=await Fe(localStorage.token,d,f).catch(S=>{ue.error(S)})),D&&(ue.success("Valves updated successfully"),u("save"))}t(1,T=!1)},k=async()=>{var c;if(t(2,v=!0),t(4,f={}),t(3,_=null),r==="tool"?(t(4,f=await Ue(localStorage.token,d)),t(3,_=await We(localStorage.token,d))):r==="function"&&(t(4,f=await ze(localStorage.token,d)),t(3,_=await Oe(localStorage.token,d))),f||t(4,f={}),_)for(const D in _.properties)((c=_.properties[D])==null?void 0:c.type)==="array"&&t(4,f[D]=(f[D]??[]).join(","),f);t(2,v=!1)},V=()=>{t(0,l=!1)};function F(c){f=c,t(4,f)}const B=()=>{b()};function y(c){l=c,t(0,l)}return a.$$set=c=>{"show"in c&&t(0,l=c.show),"type"in c&&t(8,r=c.type),"id"in c&&t(9,d=c.id)},a.$$.update=()=>{a.$$.dirty&1&&l&&k()},[l,T,v,_,f,s,i,b,r,d,V,F,B,y]}class ct extends he{constructor(e){super(),_e(this,e,Ke,Je,de,{show:0,type:8,id:9})}}function Qe(a){let e,t,s,i=a[2].t("Show your support!")+"",u,l,r,d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',T,v,_,f,b,k,V=a[2].t("The developers behind this plugin are passionate volunteers from the community. If you find this plugin helpful, please consider contributing to its development.")+"",F,B,y,c=a[2].t("Your entire contribution will go directly to the plugin developer; Open WebUI does not take any percentage. However, the chosen funding platform might have its own fees.")+"",D,S,N,L,H,Z=a[2].t("Support this plugin:")+"",K,j,C,x=a[1].funding_url+"",g,I,A,W,U,R=a[2].t("Done")+"",Y,Q,ee;return{c(){e=p("div"),t=p("div"),s=p("div"),u=q(i),l=z(),r=p("button"),r.innerHTML=d,T=z(),v=p("div"),_=p("div"),f=p("form"),b=p("div"),k=p("div"),F=q(V),B=z(),y=p("div"),D=q(c),S=z(),N=p("hr"),L=z(),H=p("div"),K=q(Z),j=z(),C=p("a"),g=q(x),A=z(),W=p("div"),U=p("button"),Y=q(R),this.h()},l(E){e=h(E,"DIV",{});var M=w(e);t=h(M,"DIV",{class:!0});var te=w(t);s=h(te,"DIV",{class:!0});var we=w(s);u=G(we,i),we.forEach(m),l=O(te),r=h(te,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-745w2y"&&(r.innerHTML=d),te.forEach(m),T=O(M),v=h(M,"DIV",{class:!0});var be=w(v);_=h(be,"DIV",{class:!0});var ye=w(_);f=h(ye,"FORM",{class:!0});var se=w(f);b=h(se,"DIV",{class:!0});var P=w(b);k=h(P,"DIV",{class:!0});var ke=w(k);F=G(ke,V),ke.forEach(m),B=O(P),y=h(P,"DIV",{class:!0});var xe=w(y);D=G(xe,c),xe.forEach(m),S=O(P),N=h(P,"HR",{class:!0}),L=O(P),H=h(P,"DIV",{class:!0});var le=w(H);K=G(le,Z),j=O(le),C=h(le,"A",{href:!0,target:!0,class:!0});var Ve=w(C);g=G(Ve,x),Ve.forEach(m),le.forEach(m),P.forEach(m),A=O(se),W=h(se,"DIV",{class:!0});var Ie=w(W);U=h(Ie,"BUTTON",{class:!0,type:!0});var Ee=w(U);Y=G(Ee,R),Ee.forEach(m),Ie.forEach(m),se.forEach(m),ye.forEach(m),be.forEach(m),M.forEach(m),this.h()},h(){n(s,"class","text-lg font-medium self-center"),n(r,"class","self-center"),n(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),n(k,"class","my-2"),n(y,"class","my-2"),n(N,"class","dark:border-gray-800 my-3"),n(C,"href",I=a[1].funding_url),n(C,"target","_blank"),n(C,"class","underline text-blue-400 hover:text-blue-300"),n(H,"class","my-2"),n(b,"class","px-1 text-sm"),n(U,"class","px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-gray-100 transition rounded-lg flex flex-row space-x-1 items-center"),n(U,"type","submit"),n(W,"class","flex justify-end pt-3 text-sm font-medium"),n(f,"class","flex flex-col w-full"),n(_,"class","flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"),n(v,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(E,M){re(E,e,M),o(e,t),o(t,s),o(s,u),o(t,l),o(t,r),o(e,T),o(e,v),o(v,_),o(_,f),o(f,b),o(b,k),o(k,F),o(b,B),o(b,y),o(y,D),o(b,S),o(b,N),o(b,L),o(b,H),o(H,K),o(H,j),o(H,C),o(C,g),o(f,A),o(f,W),o(W,U),o(U,Y),Q||(ee=[ae(r,"click",a[4]),ae(f,"submit",He(a[5]))],Q=!0)},p(E,M){M&4&&i!==(i=E[2].t("Show your support!")+"")&&J(u,i),M&4&&V!==(V=E[2].t("The developers behind this plugin are passionate volunteers from the community. If you find this plugin helpful, please consider contributing to its development.")+"")&&J(F,V),M&4&&c!==(c=E[2].t("Your entire contribution will go directly to the plugin developer; Open WebUI does not take any percentage. However, the chosen funding platform might have its own fees.")+"")&&J(D,c),M&4&&Z!==(Z=E[2].t("Support this plugin:")+"")&&J(K,Z),M&2&&x!==(x=E[1].funding_url+"")&&J(g,x),M&2&&I!==(I=E[1].funding_url)&&n(C,"href",I),M&4&&R!==(R=E[2].t("Done")+"")&&J(Y,R)},d(E){E&&m(e),Q=!1,je(ee)}}}function Xe(a){let e,t,s;function i(l){a[6](l)}let u={size:"sm",$$slots:{default:[Qe]},$$scope:{ctx:a}};return a[0]!==void 0&&(u.show=a[0]),e=new Ce({props:u}),me.push(()=>ge(e,"show",i)),{c(){oe(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ie(e,l,r),s=!0},p(l,[r]){const d={};r&263&&(d.$$scope={dirty:r,ctx:l}),!t&&r&1&&(t=!0,d.show=l[0],ve(()=>t=!1)),e.$set(d)},i(l){s||(X(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){fe(e,l)}}}function $e(a,e,t){let s;const i=Te("i18n");Be(a,i,v=>t(2,s=v)),Le();let{show:u=!1}=e,{manifest:l={}}=e;const r=()=>{t(0,u=!1)},d=()=>{t(0,u=!1)};function T(v){u=v,t(0,u)}return a.$$set=v=>{"show"in v&&t(0,u=v.show),"manifest"in v&&t(1,l=v.manifest)},[u,l,s,i,r,d,T]}class dt extends he{constructor(e){super(),_e(this,e,$e,Xe,de,{show:0,manifest:1})}}function et(a){let e,t;return{c(){e=De("svg"),t=De("path"),this.h()},l(s){e=Se(s,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=w(e);t=Se(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(t).forEach(m),i.forEach(m),this.h()},h(){n(t,"stroke-linecap","round"),n(t,"stroke-linejoin","round"),n(t,"d","M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"fill","none"),n(e,"viewBox","0 0 24 24"),n(e,"stroke-width",a[1]),n(e,"stroke","currentColor"),n(e,"class",a[0])},m(s,i){re(s,e,i),o(e,t)},p(s,[i]){i&2&&n(e,"stroke-width",s[1]),i&1&&n(e,"class",s[0])},i:ce,o:ce,d(s){s&&m(e)}}}function tt(a,e,t){let{className:s="size-4"}=e,{strokeWidth:i="1.5"}=e;return a.$$set=u=>{"className"in u&&t(0,s=u.className),"strokeWidth"in u&&t(1,i=u.strokeWidth)},[s,i]}class mt extends he{constructor(e){super(),_e(this,e,tt,et,de,{className:0,strokeWidth:1})}}export{mt as H,dt as M,ct as V};
//# sourceMappingURL=Heart.BjjDoTau.js.map
