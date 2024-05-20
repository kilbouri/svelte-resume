var Ze=Object.defineProperty;var xe=(i,e,l)=>e in i?Ze(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l;var G=(i,e,l)=>(xe(i,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function R(){}function et(i,e){for(const l in e)i[l]=e[l];return i}function Ke(i){return i()}function he(){return Object.create(null)}function ne(i){i.forEach(Ke)}function Qe(i){return typeof i=="function"}function O(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function tt(i){return Object.keys(i).length===0}function Y(i,e,l,n){if(i){const t=Ve(i,e,l,n);return i[0](t)}}function Ve(i,e,l,n){return i[1]&&n?et(l.ctx.slice(),i[1](n(e))):l.ctx}function Z(i,e,l,n){if(i[2]&&n){const t=i[2](n(l));if(e.dirty===void 0)return t;if(typeof t=="object"){const s=[],r=Math.max(e.dirty.length,t.length);for(let f=0;f<r;f+=1)s[f]=e.dirty[f]|t[f];return s}return e.dirty|t}return e.dirty}function x(i,e,l,n,t,s){if(t){const r=Ve(e,l,n,s);i.p(r,t)}}function ee(i){if(i.ctx.length>32){const e=[],l=i.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function u(i,e){i.appendChild(e)}function _(i,e,l){i.insertBefore(e,l||null)}function $(i){i.parentNode&&i.parentNode.removeChild(i)}function K(i,e){for(let l=0;l<i.length;l+=1)i[l]&&i[l].d(e)}function v(i){return document.createElement(i)}function nt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function C(i){return document.createTextNode(i)}function P(){return C(" ")}function I(){return C("")}function h(i,e,l){l==null?i.removeAttribute(e):i.getAttribute(e)!==l&&i.setAttribute(e,l)}function lt(i){return Array.from(i.childNodes)}function B(i,e){e=""+e,i.data!==e&&(i.data=e)}function qe(i,e,l,n){l==null?i.style.removeProperty(e):i.style.setProperty(e,l,n?"important":"")}class oe{constructor(e=!1){G(this,"is_svg",!1);G(this,"e");G(this,"n");G(this,"t");G(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,l,n=null){this.e||(this.is_svg?this.e=nt(l.nodeName):this.e=v(l.nodeType===11?"TEMPLATE":l.nodeName),this.t=l.tagName!=="TEMPLATE"?l:l.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let l=0;l<this.n.length;l+=1)_(this.t,this.n[l],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}let de;function te(i){de=i}const q=[],ge=[];let X=[];const be=[],it=Promise.resolve();let ce=!1;function rt(){ce||(ce=!0,it.then(Xe))}function ue(i){X.push(i)}const ae=new Set;let V=0;function Xe(){if(V!==0)return;const i=de;do{try{for(;V<q.length;){const e=q[V];V++,te(e),st(e.$$)}}catch(e){throw q.length=0,V=0,e}for(te(null),q.length=0,V=0;ge.length;)ge.pop()();for(let e=0;e<X.length;e+=1){const l=X[e];ae.has(l)||(ae.add(l),l())}X.length=0}while(q.length);for(;be.length;)be.pop()();ce=!1,ae.clear(),te(i)}function st(i){if(i.fragment!==null){i.update(),ne(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(ue)}}function ot(i){const e=[],l=[];X.forEach(n=>i.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),X=e}const re=new Set;let Q;function U(){Q={r:0,c:[],p:Q}}function J(){Q.r||ne(Q.c),Q=Q.p}function c(i,e){i&&i.i&&(re.delete(i),i.i(e))}function m(i,e,l,n){if(i&&i.o){if(re.has(i))return;re.add(i),Q.c.push(()=>{re.delete(i),n&&(l&&i.d(1),n())}),i.o(e)}else n&&n()}function M(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function E(i){i&&i.c()}function N(i,e,l){const{fragment:n,after_update:t}=i.$$;n&&n.m(e,l),ue(()=>{const s=i.$$.on_mount.map(Ke).filter(Qe);i.$$.on_destroy?i.$$.on_destroy.push(...s):ne(s),i.$$.on_mount=[]}),t.forEach(ue)}function A(i,e){const l=i.$$;l.fragment!==null&&(ot(l.after_update),ne(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function ft(i,e){i.$$.dirty[0]===-1&&(q.push(i),rt(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function z(i,e,l,n,t,s,r=null,f=[-1]){const o=de;te(i);const a=i.$$={fragment:null,ctx:[],props:s,update:R,not_equal:t,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:he(),dirty:f,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let g=!1;if(a.ctx=l?l(i,e.props||{},(k,T,...j)=>{const D=j.length?j[0]:T;return a.ctx&&t(a.ctx[k],a.ctx[k]=D)&&(!a.skip_bound&&a.bound[k]&&a.bound[k](D),g&&ft(i,k)),T}):[],a.update(),g=!0,ne(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const k=lt(e.target);a.fragment&&a.fragment.l(k),k.forEach($)}else a.fragment&&a.fragment.c();e.intro&&c(i.$$.fragment),N(i,e.target,e.anchor),Xe()}te(o)}class W{constructor(){G(this,"$$");G(this,"$$set")}$destroy(){A(this,1),this.$destroy=R}$on(e,l){if(!Qe(l))return R;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const t=n.indexOf(l);t!==-1&&n.splice(t,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(at);function ve(i){let e,l,n,t=i[0].phone+"",s;return{c(){e=v("span"),l=v("i"),n=P(),s=C(t),h(l,"class","fa fa-phone"),h(e,"class","svelte-1x8a3f3")},m(r,f){_(r,e,f),u(e,l),u(e,n),u(e,s)},p(r,f){f&1&&t!==(t=r[0].phone+"")&&B(s,t)},d(r){r&&$(e)}}}function ke(i){let e,l,n,t,s=i[0].website+"",r,f;return{c(){e=v("span"),l=v("i"),n=P(),t=v("a"),r=C(s),h(l,"class","fa fa-link"),h(t,"href",f="https://"+i[0].website),h(t,"target","_blank"),h(e,"class","svelte-1x8a3f3")},m(o,a){_(o,e,a),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,a){a&1&&s!==(s=o[0].website+"")&&B(r,s),a&1&&f!==(f="https://"+o[0].website)&&h(t,"href",f)},d(o){o&&$(e)}}}function we(i){let e,l,n,t,s=i[0].github+"",r,f;return{c(){e=v("span"),l=v("i"),n=P(),t=v("a"),r=C(s),h(l,"class","fa fa-github"),h(t,"href",f="https://github.com/"+i[0].github),h(t,"target","_blank"),h(e,"class","svelte-1x8a3f3")},m(o,a){_(o,e,a),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,a){a&1&&s!==(s=o[0].github+"")&&B(r,s),a&1&&f!==(f="https://github.com/"+o[0].github)&&h(t,"href",f)},d(o){o&&$(e)}}}function ye(i){let e,l,n,t,s=i[0].linkedin+"",r,f;return{c(){e=v("span"),l=v("i"),n=P(),t=v("a"),r=C(s),h(l,"class","fa fa-linkedin"),h(t,"href",f="https://linkedin.com/in/"+i[0].linkedin),h(t,"target","_blank"),h(e,"class","svelte-1x8a3f3")},m(o,a){_(o,e,a),u(e,l),u(e,n),u(e,t),u(t,r)},p(o,a){a&1&&s!==(s=o[0].linkedin+"")&&B(r,s),a&1&&f!==(f="https://linkedin.com/in/"+o[0].linkedin)&&h(t,"href",f)},d(o){o&&$(e)}}}function ct(i){let e,l=i[0].name+"",n,t,s,r,f,o,a,g=i[0].email+"",k,T,j,D,L,S,b=i[0].phone&&ve(i),d=i[0].website&&ke(i),p=i[0].github&&we(i),w=i[0].linkedin&&ye(i);return{c(){e=v("h1"),n=C(l),t=P(),s=v("div"),r=v("span"),f=v("i"),o=P(),a=v("a"),k=C(g),j=P(),b&&b.c(),D=P(),d&&d.c(),L=P(),p&&p.c(),S=P(),w&&w.c(),h(e,"class","svelte-1x8a3f3"),h(f,"class","fa fa-envelope"),h(a,"href",T="mailto:"+i[0].email),h(a,"target","_blank"),h(r,"class","svelte-1x8a3f3"),h(s,"class","links svelte-1x8a3f3")},m(y,H){_(y,e,H),u(e,n),_(y,t,H),_(y,s,H),u(s,r),u(r,f),u(r,o),u(r,a),u(a,k),u(s,j),b&&b.m(s,null),u(s,D),d&&d.m(s,null),u(s,L),p&&p.m(s,null),u(s,S),w&&w.m(s,null)},p(y,[H]){H&1&&l!==(l=y[0].name+"")&&B(n,l),H&1&&g!==(g=y[0].email+"")&&B(k,g),H&1&&T!==(T="mailto:"+y[0].email)&&h(a,"href",T),y[0].phone?b?b.p(y,H):(b=ve(y),b.c(),b.m(s,D)):b&&(b.d(1),b=null),y[0].website?d?d.p(y,H):(d=ke(y),d.c(),d.m(s,L)):d&&(d.d(1),d=null),y[0].github?p?p.p(y,H):(p=we(y),p.c(),p.m(s,S)):p&&(p.d(1),p=null),y[0].linkedin?w?w.p(y,H):(w=ye(y),w.c(),w.m(s,null)):w&&(w.d(1),w=null)},i:R,o:R,d(y){y&&($(e),$(t),$(s)),b&&b.d(),d&&d.d(),p&&p.d(),w&&w.d()}}}function ut(i,e,l){let{info:n}=e;return i.$$set=t=>{"info"in t&&l(0,n=t.info)},[n]}class dt extends W{constructor(e){super(),z(this,e,ut,ct,O,{info:0})}}function mt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=v("p"),t&&t.c(),h(e,"class","tiny svelte-1fcc390")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){m(t,s),l=!1},d(s){s&&$(e),t&&t.d(s)}}}function $t(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class pt extends W{constructor(e){super(),z(this,e,$t,mt,O,{})}}function _t(i){let e,l,n=(i[0]||"")+"",t,s,r,f,o;const a=i[2].default,g=Y(a,i,i[1],null);return{c(){e=v("div"),l=v("h1"),t=C(n),s=P(),r=v("hr"),f=P(),g&&g.c(),h(l,"class","svelte-j658xz"),h(r,"class","svelte-j658xz"),h(e,"id",i[0])},m(k,T){_(k,e,T),u(e,l),u(l,t),u(e,s),u(e,r),u(e,f),g&&g.m(e,null),o=!0},p(k,[T]){(!o||T&1)&&n!==(n=(k[0]||"")+"")&&B(t,n),g&&g.p&&(!o||T&2)&&x(g,a,k,k[1],o?Z(a,k[1],T,null):ee(k[1]),null),(!o||T&1)&&h(e,"id",k[0])},i(k){o||(c(g,k),o=!0)},o(k){m(g,k),o=!1},d(k){k&&$(e),g&&g.d(k)}}}function ht(i,e,l){let{$$slots:n={},$$scope:t}=e,{name:s}=e;return i.$$set=r=>{"name"in r&&l(0,s=r.name),"$$scope"in r&&l(1,t=r.$$scope)},[s,t,n]}class le extends W{constructor(e){super(),z(this,e,ht,_t,O,{name:0})}}const se=(i,e)=>e?i+" - "+e:i;function gt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=v("h3"),t&&t.c(),h(e,"class","primary-heading svelte-1l1xr4b")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){m(t,s),l=!1},d(s){s&&$(e),t&&t.d(s)}}}function bt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class Ye extends W{constructor(e){super(),z(this,e,bt,gt,O,{})}}function vt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=v("h4"),t&&t.c(),h(e,"class","secondary-heading svelte-ay9110")},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){m(t,s),l=!1},d(s){s&&$(e),t&&t.d(s)}}}function kt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class me extends W{constructor(e){super(),z(this,e,kt,vt,O,{})}}function wt(i){let e,l;const n=i[1].default,t=Y(n,i,i[0],null);return{c(){e=v("ul"),t&&t.c()},m(s,r){_(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){t&&t.p&&(!l||r&1)&&x(t,n,s,s[0],l?Z(n,s[0],r,null):ee(s[0]),null)},i(s){l||(c(t,s),l=!0)},o(s){m(t,s),l=!1},d(s){s&&$(e),t&&t.d(s)}}}function yt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class ie extends W{constructor(e){super(),z(this,e,yt,wt,O,{})}}function St(i){let e,l,n;const t=i[1].default,s=Y(t,i,i[0],null);return{c(){e=v("li"),l=C("- "),s&&s.c(),h(e,"class","item-text svelte-vbpaez")},m(r,f){_(r,e,f),u(e,l),s&&s.m(e,null),n=!0},p(r,[f]){s&&s.p&&(!n||f&1)&&x(s,t,r,r[0],n?Z(t,r[0],f,null):ee(r[0]),null)},i(r){n||(c(s,r),n=!0)},o(r){m(s,r),n=!1},d(r){r&&$(e),s&&s.d(r)}}}function Pt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,n]}class fe extends W{constructor(e){super(),z(this,e,Pt,St,O,{})}}function Tt(i){let e;return{c(){e=v("div"),h(e,"class","dotted-separator svelte-99c9za")},m(l,n){_(l,e,n)},p:R,i:R,o:R,d(l){l&&$(e)}}}class $e extends W{constructor(e){super(),z(this,e,null,Tt,O,{})}}function Se(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Pe(i,e,l){const n=i.slice();return n[4]=e[l],n}function Nt(i){let e=i[1].certification+"",l;return{c(){l=C(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].certification+"")&&B(l,e)},d(n){n&&$(l)}}}function At(i){let e=i[1].location+"",l;return{c(){l=C(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].location+"")&&B(l,e)},d(n){n&&$(l)}}}function Te(i){let e,l;return e=new ie({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Dt(i){let e,l=i[4]+"",n;return{c(){e=new oe(!1),n=I(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&($(n),e.d())}}}function Ne(i){let e,l;return e=new fe({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Et(i){let e,l,n=M(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ne(Pe(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,f){if(f&1){n=M(r[1].details);let o;for(o=0;o<n.length;o+=1){const a=Pe(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=Ne(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function Ae(i){let e,l;return e=new $e({}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function De(i){let e,l,n,t,s,r,f,o,a,g=se(i[1].start,i[1].end)+"",k,T,j,D,L;l=new Ye({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),t=new me({props:{$$slots:{default:[At]},$$scope:{ctx:i}}});let S=i[1].details&&Te(i),b=i[3]<i[0].length-1&&Ae();return{c(){e=v("div"),E(l.$$.fragment),n=P(),E(t.$$.fragment),s=P(),r=v("div"),f=v("span"),o=v("i"),a=P(),k=C(g),T=P(),S&&S.c(),j=P(),b&&b.c(),D=I(),h(o,"class","fa fa-calendar"),h(r,"class","icon-row"),qe(r,"width","100%"),h(e,"class","education")},m(d,p){_(d,e,p),N(l,e,null),u(e,n),N(t,e,null),u(e,s),u(e,r),u(r,f),u(f,o),u(f,a),u(f,k),u(e,T),S&&S.m(e,null),_(d,j,p),b&&b.m(d,p),_(d,D,p),L=!0},p(d,p){const w={};p&129&&(w.$$scope={dirty:p,ctx:d}),l.$set(w);const y={};p&129&&(y.$$scope={dirty:p,ctx:d}),t.$set(y),(!L||p&1)&&g!==(g=se(d[1].start,d[1].end)+"")&&B(k,g),d[1].details?S?(S.p(d,p),p&1&&c(S,1)):(S=Te(d),S.c(),c(S,1),S.m(e,null)):S&&(U(),m(S,1,1,()=>{S=null}),J()),d[3]<d[0].length-1?b?p&1&&c(b,1):(b=Ae(),b.c(),c(b,1),b.m(D.parentNode,D)):b&&(U(),m(b,1,1,()=>{b=null}),J())},i(d){L||(c(l.$$.fragment,d),c(t.$$.fragment,d),c(S),c(b),L=!0)},o(d){m(l.$$.fragment,d),m(t.$$.fragment,d),m(S),m(b),L=!1},d(d){d&&($(e),$(j),$(D)),A(l),A(t),S&&S.d(),b&&b.d(d)}}}function Ct(i){let e,l,n=M(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=De(Se(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,[f]){if(f&1){n=M(r[0]);let o;for(o=0;o<n.length;o+=1){const a=Se(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=De(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function Lt(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class jt extends W{constructor(e){super(),z(this,e,Lt,Ct,O,{items:0})}}function Ee(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Ce(i,e,l){const n=i.slice();return n[4]=e[l],n}function Bt(i){let e=i[1].title+"",l;return{c(){l=C(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].title+"")&&B(l,e)},d(n){n&&$(l)}}}function Mt(i){let e=i[1].company+"",l;return{c(){l=C(e)},m(n,t){_(n,l,t)},p(n,t){t&1&&e!==(e=n[1].company+"")&&B(l,e)},d(n){n&&$(l)}}}function Le(i){let e,l,n,t=i[1].location+"",s;return{c(){e=v("span"),l=v("i"),n=P(),s=C(t),h(l,"class","fa fa-map-marker")},m(r,f){_(r,e,f),u(e,l),u(e,n),u(e,s)},p(r,f){f&1&&t!==(t=r[1].location+"")&&B(s,t)},d(r){r&&$(e)}}}function Rt(i){let e,l=i[4]+"",n;return{c(){e=new oe(!1),n=I(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&($(n),e.d())}}}function je(i){let e,l;return e=new fe({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Ht(i){let e,l,n=M(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=je(Ce(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,f){if(f&1){n=M(r[1].details);let o;for(o=0;o<n.length;o+=1){const a=Ce(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=je(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function Be(i){let e,l;return e=new $e({}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Me(i){let e,l,n,t,s,r,f,o,a,g=se(i[1].start,i[1].end)+"",k,T,j,D,L,S,b;l=new Ye({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),t=new me({props:{$$slots:{default:[Mt]},$$scope:{ctx:i}}});let d=i[1].location&&Le(i);D=new ie({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}});let p=i[3]<i[0].length-1&&Be();return{c(){e=v("div"),E(l.$$.fragment),n=P(),E(t.$$.fragment),s=P(),r=v("div"),f=v("span"),o=v("i"),a=P(),k=C(g),T=P(),d&&d.c(),j=P(),E(D.$$.fragment),L=P(),p&&p.c(),S=I(),h(o,"class","fa fa-calendar"),h(r,"class","icon-row"),qe(r,"width","100%"),h(e,"class","job")},m(w,y){_(w,e,y),N(l,e,null),u(e,n),N(t,e,null),u(e,s),u(e,r),u(r,f),u(f,o),u(f,a),u(f,k),u(r,T),d&&d.m(r,null),u(e,j),N(D,e,null),_(w,L,y),p&&p.m(w,y),_(w,S,y),b=!0},p(w,y){const H={};y&129&&(H.$$scope={dirty:y,ctx:w}),l.$set(H);const pe={};y&129&&(pe.$$scope={dirty:y,ctx:w}),t.$set(pe),(!b||y&1)&&g!==(g=se(w[1].start,w[1].end)+"")&&B(k,g),w[1].location?d?d.p(w,y):(d=Le(w),d.c(),d.m(r,null)):d&&(d.d(1),d=null);const _e={};y&129&&(_e.$$scope={dirty:y,ctx:w}),D.$set(_e),w[3]<w[0].length-1?p?y&1&&c(p,1):(p=Be(),p.c(),c(p,1),p.m(S.parentNode,S)):p&&(U(),m(p,1,1,()=>{p=null}),J())},i(w){b||(c(l.$$.fragment,w),c(t.$$.fragment,w),c(D.$$.fragment,w),c(p),b=!0)},o(w){m(l.$$.fragment,w),m(t.$$.fragment,w),m(D.$$.fragment,w),m(p),b=!1},d(w){w&&($(e),$(L),$(S)),A(l),A(t),d&&d.d(),A(D),p&&p.d(w)}}}function Ot(i){let e,l,n=M(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Me(Ee(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,[f]){if(f&1){n=M(r[0]);let o;for(o=0;o<n.length;o+=1){const a=Ee(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=Me(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function It(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class zt extends W{constructor(e){super(),z(this,e,It,Ot,O,{items:0})}}function Re(i,e,l){const n=i.slice();return n[1]=e[l],n}function Wt(i){let e,l=[i[1].title,i[1].location].filter(Oe).join(" | ")+"",n,t,s,r=i[1].description+"",f;return{c(){e=v("b"),n=C(l),t=C(": "),s=new oe(!1),f=P(),s.a=f},m(o,a){_(o,e,a),u(e,n),_(o,t,a),s.m(r,o,a),_(o,f,a)},p(o,a){a&1&&l!==(l=[o[1].title,o[1].location].filter(Oe).join(" | ")+"")&&B(n,l),a&1&&r!==(r=o[1].description+"")&&s.p(r)},d(o){o&&($(e),$(t),s.d(),$(f))}}}function He(i){let e,l;return e=new fe({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,t){const s={};t&17&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Ft(i){let e,l,n=M(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=He(Re(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,f){if(f&1){n=M(r[0]);let o;for(o=0;o<n.length;o+=1){const a=Re(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=He(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function Ut(i){let e,l,n,t;return e=new ie({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment),l=P(),n=v("ul")},m(s,r){N(e,s,r),_(s,l,r),_(s,n,r),t=!0},p(s,[r]){const f={};r&17&&(f.$$scope={dirty:r,ctx:s}),e.$set(f)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){s&&($(l),$(n)),A(e,s)}}}const Oe=i=>i;function Jt(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class Gt extends W{constructor(e){super(),z(this,e,Jt,Ut,O,{items:0})}}function Ie(i,e,l){const n=i.slice();return n[1]=e[l],n}function ze(i){let e,l,n=i[1].category+"",t,s,r=i[1].items.join(", ")+"",f,o;return{c(){e=v("ul"),l=v("b"),t=C(n),s=C(`:\r
      `),f=C(r),o=P(),h(e,"class","skill svelte-motwnl")},m(a,g){_(a,e,g),u(e,l),u(l,t),u(e,s),u(e,f),u(e,o)},p(a,g){g&1&&n!==(n=a[1].category+"")&&B(t,n),g&1&&r!==(r=a[1].items.join(", ")+"")&&B(f,r)},d(a){a&&$(e)}}}function Kt(i){let e,l=M(i[0]),n=[];for(let t=0;t<l.length;t+=1)n[t]=ze(Ie(i,l,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=I()},m(t,s){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,s);_(t,e,s)},p(t,s){if(s&1){l=M(t[0]);let r;for(r=0;r<l.length;r+=1){const f=Ie(t,l,r);n[r]?n[r].p(f,s):(n[r]=ze(f),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},d(t){t&&$(e),K(n,t)}}}function Qt(i){let e,l;return e=new ie({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,[t]){const s={};t&17&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Vt(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class qt extends W{constructor(e){super(),z(this,e,Vt,Qt,O,{items:0})}}function We(i,e,l){const n=i.slice();return n[1]=e[l],n[3]=l,n}function Fe(i,e,l){const n=i.slice();return n[4]=e[l],n}function Xt(i){let e,l,n,t=i[1].title+"",s,r;return{c(){e=v("a"),l=v("i"),n=P(),s=C(t),h(l,"class","fa fa-github"),h(e,"href",r=i[1].link),h(e,"target","_blank")},m(f,o){_(f,e,o),u(e,l),u(e,n),u(e,s)},p(f,o){o&1&&t!==(t=f[1].title+"")&&B(s,t),o&1&&r!==(r=f[1].link)&&h(e,"href",r)},d(f){f&&$(e)}}}function Yt(i){let e,l=i[4]+"",n;return{c(){e=new oe(!1),n=I(),e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,s){s&1&&l!==(l=t[4]+"")&&e.p(l)},d(t){t&&($(n),e.d())}}}function Ue(i){let e,l;return e=new fe({props:{$$slots:{default:[Yt]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p(n,t){const s={};t&129&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Zt(i){let e,l,n=M(i[1].details),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ue(Fe(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,f){if(f&1){n=M(r[1].details);let o;for(o=0;o<n.length;o+=1){const a=Fe(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=Ue(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function Je(i){let e,l;return e=new $e({}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function Ge(i){let e,l,n,t,s,r,f;l=new me({props:{$$slots:{default:[Xt]},$$scope:{ctx:i}}}),t=new ie({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}});let o=i[3]<i[0].length-1&&Je();return{c(){e=v("div"),E(l.$$.fragment),n=P(),E(t.$$.fragment),s=P(),o&&o.c(),r=I(),h(e,"class","project svelte-1tdn71x")},m(a,g){_(a,e,g),N(l,e,null),u(e,n),N(t,e,null),_(a,s,g),o&&o.m(a,g),_(a,r,g),f=!0},p(a,g){const k={};g&129&&(k.$$scope={dirty:g,ctx:a}),l.$set(k);const T={};g&129&&(T.$$scope={dirty:g,ctx:a}),t.$set(T),a[3]<a[0].length-1?o?g&1&&c(o,1):(o=Je(),o.c(),c(o,1),o.m(r.parentNode,r)):o&&(U(),m(o,1,1,()=>{o=null}),J())},i(a){f||(c(l.$$.fragment,a),c(t.$$.fragment,a),c(o),f=!0)},o(a){m(l.$$.fragment,a),m(t.$$.fragment,a),m(o),f=!1},d(a){a&&($(e),$(s),$(r)),A(l),A(t),o&&o.d(a)}}}function xt(i){let e,l,n=M(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ge(We(i,n,r));const s=r=>m(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,f);_(r,e,f),l=!0},p(r,[f]){if(f&1){n=M(r[0]);let o;for(o=0;o<n.length;o+=1){const a=We(r,n,o);t[o]?(t[o].p(a,f),c(t[o],1)):(t[o]=Ge(a),t[o].c(),c(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=n.length;o<t.length;o+=1)s(o);J()}},i(r){if(!l){for(let f=0;f<n.length;f+=1)c(t[f]);l=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);l=!1},d(r){r&&$(e),K(t,r)}}}function en(i,e,l){let{items:n}=e;return i.$$set=t=>{"items"in t&&l(0,n=t.items)},[n]}class tn extends W{constructor(e){super(),z(this,e,en,xt,O,{items:0})}}const nn="resume.schema.json",ln={name:"Isaac Kilbourne",email:"isaac@kilbourne.ca",website:"isaac.kilbourne.ca",github:"kilbouri",linkedin:"kilbouri"},rn="Bachelors of Computer Science (Honours) with Mathematics Minor, University of Windsor (September 2020 - April 2024)",sn=[{location:"University of Windsor",certification:"Bachelors of Computer Science (Honours)",start:"September 2020",end:"April 2024",details:["Minor in Mathematics","Achieved Dean's Honour Roll in every year","Topics covered include web design, data structures, algorithm design, computer networking, and operating systems"]}],on=[{title:"Full-Stack Software Developer Intern",company:"Purolator Digital Lab",location:"Kitchener, ON",start:"May 2022",end:"April 2023",details:["Worked in an Agile team to implement an IoT device monitoring front-end with <b>React</b> and <b>Bootstrap</b>","Created backend <b>REST</b> and <b>GraphQL</b> APIs with <b>Microsoft Azure</b>, <b>PostgreSQL</b>, and <b>.NET</b>","Performed back-end unit tests using <b>XUnit</b> and stress tests using Apache JMeter","Developed <b>CI/CD</b> pipelines using <b>Azure Pipelines</b> to provision infrastructure with <b>Hashicorp Terraform</b>, build, test, and deploy systems","Deployed IoT solution to improve efficiency in Purolator sorting facilities, users stated strong preference over previous system"]},{title:"Software Developer",company:"University of Windsor Computer Science Society",location:"Windsor, ON",start:"February 2021",end:"April 2022",details:["Developed features for an open-source Discord bot written in Ruby with DiscordRB","Collaborated on a rewrite of the above bot using <b>TypeScript</b> and Discord.JS","Worked in a team to create a wiki for computer science students using <b>Docusaurus</b>"]},{title:"Programming Team & Lead Programmer",company:"FIRST Robotics Team 7058 - StrathDroids",location:"Strathroy, ON",start:"March 2018",end:"July 2019",details:["Led a team of 4 to program a robot for the Destination: Deep Space season using <b>Java</b> (2019)","Worked in a team of 3 to program a robot in <b>Java</b> which <b>won at the regional level</b> for the First Power Up! season (2018)"]}],fn=[{category:"Languages",items:["C","C++","C#","Python","Lua","JavaScript","TypeScript","Java","HTML5","CSS","SCSS","SQL"]},{category:"Front-end",items:["React","Svelte","SvelteKit","Bootstrap","TailwindCSS"]},{category:"Back-end",items:["NodeJS","Bun","Express","Azure Functions","MongoDB","PostgreSQL","Redis","SQLite"]},{category:"Tools",items:["Git","VS Code","Eclipse","Docker","Hashicorp Terraform","Azure DevOps","Azure Pipelines","GitHub Actions"]},{category:"Platforms",items:["Windows","Linux","Google Cloud Platform","Microsoft Azure"]}],an=[{title:"Passman",link:"https://github.com/chorman0773/comp3340-passman",details:["A password manager that uses <b>end-to-end encryption</b> to ensure only the user can view their data","Designed so that not even the servers running Passman are ever able to view a user's data","Developed a <b>SvelteKit</b> front-end and Rust backend using zero-knowledge proofs and end-to-end encryption","Created user interface prototypes using <b>Figma</b>"]},{title:"StudentSync",link:"https://github.com/kilbouri/student-sync",details:["A <b>C++ 20</b> client/server application that enables educators to remotely view the screens of their students","Server supports multiple concurrent clients via threading","Utilized Winsock2's TCP sockets, GDI+, and FFmpeg to send H.264-encoded images from clients to the server"]},{title:"isaac.kilbourne.ca",link:"https://isaac.kilbourne.ca",details:["Created responsive mobile-first website with <b>HTML5</b>, <b>Bootstrap</b>, and <b>CSS</b>","Designed a theme system with persistence using <b>JavaScript</b>","Used GitHub <b>REST API</b> to fetch an up-to-date list of projects on page load"]},{title:"Terminal-3D",link:"https://github.com/kilbouri/terminal-3d",details:["Realtime 3D viewer written in <b>C</b> for Linux terminals","Wrote routines to load 3D mesh data from STL files, perform 3D perspective rendering and shading","Problem-solved and optimized around terminal throughput bottleneck"]}],cn=[{title:"Teaching Assistant",location:"University of Windsor",description:"Lead labs and provided valuable feedback on students' assignments to guide students to success (2021, 2022)"},{title:"Advent of Code",location:"University of Windsor",description:"Completed all challenges and ranked first among all students (2020, 2021)"}],F={$schema:nn,info:ln,tiny_text:rn,education:sn,experience:on,skills:fn,projects:an,extracurricular:cn};function un(i){let e,l;return e=new pt({props:{$$slots:{default:[dn]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function dn(i){let e=F.tiny_text+"",l;return{c(){l=C(e)},m(n,t){_(n,l,t)},p:R,d(n){n&&$(l)}}}function mn(i){let e,l;return e=new le({props:{name:"Experience",$$slots:{default:[$n]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function $n(i){let e,l;return e=new zt({props:{items:F.experience}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p:R,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function pn(i){let e,l;return e=new le({props:{name:"Skills",$$slots:{default:[_n]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function _n(i){let e,l;return e=new qt({props:{items:F.skills}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p:R,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function hn(i){let e,l;return e=new le({props:{name:"Education",$$slots:{default:[gn]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function gn(i){let e,l;return e=new jt({props:{items:F.education}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p:R,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function bn(i){let e,l;return e=new le({props:{name:"Projects",$$slots:{default:[vn]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function vn(i){let e,l;return e=new tn({props:{items:F.projects}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p:R,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function kn(i){let e,l;return e=new le({props:{name:"Extracurricular",$$slots:{default:[wn]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function wn(i){let e,l;return e=new Gt({props:{items:F.extracurricular}}),{c(){E(e.$$.fragment)},m(n,t){N(e,n,t),l=!0},p:R,i(n){l||(c(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function yn(i){let e,l,n,t,s,r,f,o,a,g,k;e=new dt({props:{info:F.info}});let T=un(i),j=F.experience&&mn(i),D=F.skills&&pn(i),L=F.education&&hn(i),S=F.projects&&bn(i),b=F.extracurricular&&kn(i);return{c(){E(e.$$.fragment),l=P(),n=v("main"),t=v("div"),T&&T.c(),s=P(),j&&j.c(),r=P(),D&&D.c(),f=P(),o=v("div"),L&&L.c(),a=P(),S&&S.c(),g=P(),b&&b.c(),h(t,"class","svelte-17siahu"),h(o,"class","svelte-17siahu"),h(n,"class","svelte-17siahu")},m(d,p){N(e,d,p),_(d,l,p),_(d,n,p),u(n,t),T&&T.m(t,null),u(t,s),j&&j.m(t,null),u(t,r),D&&D.m(t,null),u(n,f),u(n,o),L&&L.m(o,null),u(o,a),S&&S.m(o,null),u(o,g),b&&b.m(o,null),k=!0},p:R,i(d){k||(c(e.$$.fragment,d),c(T),c(j),c(D),c(L),c(S),c(b),k=!0)},o(d){m(e.$$.fragment,d),m(T),m(j),m(D),m(L),m(S),m(b),k=!1},d(d){d&&($(l),$(n)),A(e,d),T&&T.d(),j&&j.d(),D&&D.d(),L&&L.d(),S&&S.d(),b&&b.d()}}}class Sn extends W{constructor(e){super(),z(this,e,null,yn,O,{})}}new Sn({target:document.getElementById("app")});
