(self["webpackChunkquotes_app"]=self["webpackChunkquotes_app"]||[]).push([[998],{1294:function(t,e,n){"use strict";n.d(e,{ET:function(){return rh},hJ:function(){return rl},oe:function(){return sh},JU:function(){return ol},ad:function(){return _l},cf:function(){return oh},r7:function(){return ih}});var i,s=n(5816),r=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function _(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:v,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||g(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let s=0;s<i;s++)t[n+s]=e[s]}else t.push(e)}}function N(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return t<e?-1:t>e?1:0}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=O().indexOf(t)}function L(t){return L[" "](t),t}function M(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}L[" "]=d;var F,U=P("Opera"),V=P("Trident")||P("MSIE"),j=P("Edge"),q=j||V,B=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),H=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function W(){var t=h.document;return t?t.documentMode:void 0}t:{var $="",K=function(){var t=O();return B?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&($=K?K[1]:""),V){var G=W();if(null!=G&&G>parseFloat($)){F=String(G);break t}}F=$}var z,Q={};function Y(){return M((function(){let t=0;const e=D(String(F)).split("."),n=D("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=R(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||R(0==s[2].length,0==r[2].length)||R(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(h.document&&V){var J=W();z=J||(parseInt(F,10)||void 0)}else z=void 0;var X=z;function Z(t,e){if(N.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{L(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}C(Z,N);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++nt,this.ba=this.ea=!1}function st(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=I(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(st(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}ut.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ht(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new it(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,i,s){if(i&&i.once)return yt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,i,s);return null}return n=Tt(n),t&&t[et]?t.N(e,n,p(i)?!!i.capture:!!i,s):gt(t,e,n,!1,i,s)}function gt(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Ct(t);if(a||(t[dt]=a=new ut(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=mt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)A||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(wt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function yt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)yt(t,e[r],n,i,s);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(i)?!!i.capture:!!i,s):gt(t,e,n,!0,i,s)}function _t(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)_t(t,e[r],n,i,s);else i=p(i)?!!i.capture:!!i,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ht(r,n,i,s),-1<n&&(st(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,i,s)),(n=-1<t?e[t]:null)&&vt(n))}function vt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ct(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):st(t)}}}function wt(t){return t in ft?ft[t]:ft[t]="on"+t}function bt(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&vt(t),t=n.call(i,e)}return t}function Ct(t){return t=t[dt],t instanceof ut?t:null}var Et="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[Et]||(t[Et]=function(e){return t.handleEvent(e)}),t[Et])}function It(){E.call(this),this.i=new ut(this),this.P=this,this.I=null}function St(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new N(e,t);else if(e instanceof N)e.target=e.target||t;else{var s=e;e=new N(i,t),ct(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=kt(o,i,!0,e)&&s}if(o=e.g=t,s=kt(o,i,!0,e)&&s,s=kt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=kt(o,i,!1,e)&&s}function kt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lt(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}C(It,E),It.prototype[et]=!0,It.prototype.removeEventListener=function(t,e,n,i){_t(this,t,e,n,i)},It.prototype.M=function(){if(It.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)st(n[i]);delete e.g[t],e.h--}}this.I=null},It.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},It.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Nt=h.JSON.stringify;function At(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ot),(t=>t.reset()));class Ot{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Lt(t,e){Dt||Mt(),Ft||(Dt(),Ft=!0),Ut.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Dt=function(){t.then(Vt)}}var Ft=!1,Ut=new xt;function Vt(){for(var t;t=At();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function jt(t,e){It.call(this),this.h=t||1,this.g=e||h,this.j=w(this.lb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Ht(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,Ht(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}C(jt,It),i=jt.prototype,i.ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(qt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){jt.X.M.call(this),qt(this),delete this.g};class Wt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){E.call(this),this.h=t,this.g={}}C($t,E);var Kt=[];function Gt(t,e,n,i){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var s=0;s<n.length;s++){var r=pt(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function zt(t){rt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&vt(t)}),t),t.g={}}function Qt(){this.g=!0}function Yt(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Xt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(i?" "+i:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Nt(n)}catch(a){return e}}$t.prototype.M=function(){$t.X.M.call(this),zt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ee={},ne=null;function ie(){return ne=ne||new It}function se(t){N.call(this,ee.Pa,t)}function re(t){const e=ie();St(e,new se(e))}function oe(t,e){N.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=ie();St(e,new oe(e,t))}function ce(t,e){N.call(this,ee.Qa,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",C(se,N),ee.STAT_EVENT="statevent",C(oe,N),ee.Qa="timingevent",C(ce,N);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ye(){N.call(this,"d")}function _e(){N.call(this,"c")}function ve(){}function we(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new $t(this),this.O=Ce,t=q?125:void 0,this.T=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}C(ye,N),C(_e,N),C(ve,de),ve.prototype.g=function(){return new XMLHttpRequest},ve.prototype.i=function(){return{}},ge=new ve;var Ce=45e3,Ee={},Te={};function Ie(t,e,n){t.K=1,t.v=Ge(Be(e)),t.s=n,t.P=!0,Se(t,null)}function Se(t,e){t.F=Date.now(),xe(t),t.A=Be(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),an(n.i,"t",i),t.C=0,n=t.l.H,t.h=new be,t.g=hi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Wt(w(t.La,t,t.g),t.N)),Gt(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),re(),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ne(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Ae(t,n),i==Te){4==e&&(t.o=4,ae(14),s=!1),Xt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ee){t.o=4,ae(15),Xt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Xt(t.j,t.m,i,null),Le(t,i)}ke(t)&&i!=Te&&i!=Ee&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ii(e),e.K=!0,ae(11))):(Xt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Oe(t))}function Ae(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Te:(n=Number(e.substring(n,i)),isNaN(n)?Ee:(i+=1,i+n>e.length?Te:(e=e.substr(i,n),t.C=i+n,e)))}function xe(t){t.V=Date.now()+t.O,De(t,t.O)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(w(t.gb,t),e)}function Re(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.G||t.I||oi(t.l,t)}function Pe(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),zt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ri(n),zn(n)}ni(n),ae(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ue(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ci(n,11)}else if((t.J||n.g==t)&&ri(n),!x(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(mn(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ke(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=li(i,i.H?i.ka:null,i.V),o.J){yn(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Re(a),xe(a)),i.g=o}else ei(i);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||ci(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ci(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}re(4)}catch(u){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),i=Me(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}i=we.prototype,i.setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const l=qn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==e||re(8==e||0>=d?3:2),Re(this);var n=this.g.aa();this.Y=n;e:if(ke(this)){var i=Bn(this.g);t="";var s=i.length,r=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ae(12),Pe(this),Oe(this);break t}Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.P?(Ne(this,l,o),q&&this.i&&3==l&&(Gt(this.S,this.T,"tick",this.hb),this.T.start())):(Xt(this.j,this.m,o,null),Le(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?oi(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Pe(this),Oe(this)}}}catch(l){}},i.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Re(this),Ne(this,t,e),this.i&&4!=t&&xe(this))}},i.cancel=function(){this.I=!0,Pe(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(re(),ae(17)),Pe(this),this.o=2,Oe(this)):De(this,this.V-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,He(this,t.j),this.s=t.s,this.g=t.g,We(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,He(this,n[1]||"",!0),this.s=ze(n[2]||""),this.g=ze(n[3]||"",!0),We(this,n[4]),this.l=ze(n[5]||"",!0),$e(this,n[6]||"",!0),this.o=ze(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function Be(t){return new qe(t)}function He(t,e,n){t.j=n?ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof nn?(t.i=e,un(t.i,t.h)):(n||(e=Qe(e,tn)),t.i=new nn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function Ge(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qe(n,"/"==n.charAt(0)?Ze:Xe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,en)),t.join("")};var Je=/[#\/\?@]/g,Xe=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function rn(t,e){sn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return sn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){rn(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),S(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(rn(this,e),an(this,n,t))}),t)),t.j=e}i=nn.prototype,i.add=function(t,e){sn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){sn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},i.W=function(t){sn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return sn(this),this.i=null,t=cn(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _n(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function vn(){}function wn(){this.g=new vn}function bn(t,e,n){const i=n||"";try{Ue(t,(function(t,n){let s=t;p(t)&&(s=Nt(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Cn(t,e){const n=new Qt;if(h.Image){const i=new Image;i.onload=b(En,n,i,"TestLoadImage: loaded",!0,e),i.onerror=b(En,n,i,"TestLoadImage: error",!1,e),i.onabort=b(En,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=b(En,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function En(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(r){}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}function In(t,e){It.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},vn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},vn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},C(Tn,de),Tn.prototype.g=function(){return new In(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),C(In,It);var Sn=0;function kn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Nn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=In.prototype,i.open=function(t,e){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nn(this)),this.readyState=Sn},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nn(this):An(this),3==this.readyState&&kn(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,Nn(this))},i.Ua=function(t){this.g&&(this.response=t,Nn(this))},i.ga=function(){this.g&&Nn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Dn(t){It.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}C(Dn,It);var Rn="",On=/^https?$/i,Pn=["POST","PUT"];function Ln(t){return V&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Vn(t)}function Fn(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))Bt(t.Ha,0,t);else if(St(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var s=String(t.H).match(Ve)[1]||null;if(!s&&h.self&&h.self.location){var r=h.self.location.protocol;s=r.substr(0,r.length-1)}i=!On.test(s?s.toLowerCase():"")}n=i}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){jn(t);const i=t.g,s=t.C[0]?d:null;t.g=null,t.C=null,e||St(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function Bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(ki){return null}}function Hn(t){let e="";return rt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Wn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ca=0,this.i=[],this.j=new Qt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$n("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$n("baseRetryDelayMs",5e3,t),this.bb=$n("retryDelaySeedMs",1e4,t),this.$a=$n("forwardChannelMaxRetries",2,t),this.ta=$n("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new wn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(t){if(Qn(t),3==t.G){var e=t.U++,n=Be(t.F);Ke(n,"SID",t.I),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Zn(t,n),e=new we(t,t.j,e,void 0),e.K=2,e.v=Ge(Be(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hi(e.l,null),e.g.da(e.v)),e.F=Date.now(),xe(e)}ui(t)}function zn(t){t.g&&(ii(t),t.g.cancel(),t.g=null)}function Qn(t){zn(t),t.u&&(h.clearTimeout(t.u),t.u=null),ri(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Yn(t){fn(t.h)||t.m||(t.m=!0,Lt(t.Ja,t),t.C=0)}function Jn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ue(w(t.Ja,t,e),ai(t,t.C)),t.C++,!0))}function Xn(t,e){var n;n=e?e.m:t.U++;const i=Be(t.F);Ke(i,"SID",t.I),Ke(i,"RID",n),Ke(i,"AID",t.T),Zn(t,i),t.o&&t.s&&Wn(i,t.o,t.s),n=new we(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ti(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Ie(n,i,e)}function Zn(t,e){t.ia&&rt(t.ia,(function(t,n){Ke(e,n,t)})),t.l&&Ue({},(function(t,n){Ke(e,n,t)}))}function ti(t,e,n){n=Math.min(t.i.length,n);var i=t.l?w(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{bn(c,t,"req"+n+"_")}catch(r){i&&i(c)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ei(t){t.g||t.u||(t.Z=1,Lt(t.Ia,t),t.A=0)}function ni(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ue(w(t.Ia,t),ai(t,t.A)),t.A++,!0)}function ii(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function si(t){t.g=new we(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Be(t.sa);Ke(e,"RID","rpc"),Ke(e,"SID",t.I),Ke(e,"CI",t.L?"0":"1"),Ke(e,"AID",t.T),Ke(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Wn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ge(Be(e)),n.s=null,n.P=!0,Se(n,t)}function ri(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function oi(t,e){var n=null;if(t.g==e){ri(t),ii(t),t.g=null;var i=2}else{if(!gn(t.h,e))return;n=e.D,yn(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=ie(),St(i,new ce(i,n)),Yn(t)}else ei(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==i&&Jn(t,e)||2==i&&ni(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}function ai(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ci(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=w(t.kb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||He(n,"https"),Ge(n)),Cn(n.toString(),i)}else ae(2);t.G=0,t.l&&t.l.va(e),ui(t),Qn(t)}function ui(t){if(t.G=0,t.la=[],t.l){const e=_n(t.h);0==e.length&&0==t.i.length||(k(t.la,e),k(t.la,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ua()}}function li(t,e,n){var i=n instanceof qe?Be(n):new qe(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),We(i,i.m);else{var s=h.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new qe(null,void 0);i&&He(r,i),e&&(r.g=e),s&&We(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Ke(i,n,e),Ke(i,"VER",t.ma),Zn(t,i),i}function hi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Dn(new Tn({jb:!0})):new Dn(t.ra),e.Ka(t.H),e}function di(){}function fi(){if(V&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pi(t,e){It.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yi(this)}function gi(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mi(){_e.call(this),this.status=1}function yi(t){this.g=t}i=Dn.prototype,i.Ka=function(t){this.L=t},i.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?fe(this.u):fe(ge),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Mn(this,r)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=h.FormData&&t instanceof h.FormData,!(0<=I(Pn,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Bt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Mn(this,r)}},i.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),Vn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Dn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},i.fb=function(){Un(this)},i.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Kn.prototype,i.ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new we(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ot(r),ct(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ti(this,s,e),n=Be(this.F),Ke(n,"RID",t),Ke(n,"CVER",22),this.D&&Ke(n,"X-HTTP-Session-Id",this.D),Zn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Hn(r)))+"&"+e:this.o&&Wn(n,this.o,r)),mn(this.h,s),this.Ya&&Ke(n,"TYPE","init"),this.O?(Ke(n,"$req",e),Ke(n,"SID","null"),s.Z=!0,Ie(s,n,null)):Ie(s,n,e),this.G=2}}else 3==this.G&&(t?Xn(this,t):0==this.i.length||fn(this.h)||Xn(this))},i.Ia=function(){if(this.u=null,si(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ue(w(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),zn(this),si(this))},i.cb=function(){null!=this.v&&(this.v=null,zn(this),ni(this),ae(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},i=di.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},fi.prototype.g=function(t,e){return new pi(t,e)},C(pi,It),pi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=li(t,null,t.V),Yn(t)},pi.prototype.close=function(){Gn(this.g)},pi.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nt(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Yn(e)},pi.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pi.X.M.call(this)},C(gi,ye),C(mi,_e),C(yi,di),yi.prototype.xa=function(){St(this.g,"a")},yi.prototype.wa=function(t){St(this.g,new gi(t))},yi.prototype.va=function(t){St(this.g,new mi)},yi.prototype.ua=function(){St(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,pi.prototype.send=pi.prototype.u,pi.prototype.open=pi.prototype.m,pi.prototype.close=pi.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",It.prototype.listen=It.prototype.N,Dn.prototype.listenOnce=Dn.prototype.O,Dn.prototype.getLastError=Dn.prototype.Oa,Dn.prototype.getLastErrorCode=Dn.prototype.Ea,Dn.prototype.getStatus=Dn.prototype.aa,Dn.prototype.getResponseJson=Dn.prototype.Sa,Dn.prototype.getResponseText=Dn.prototype.fa,Dn.prototype.send=Dn.prototype.da,Dn.prototype.setWithCredentials=Dn.prototype.Ka;var _i=u.createWebChannelTransport=function(){return new fi},vi=u.getStatEventTarget=function(){return ie()},wi=u.ErrorCode=le,bi=u.EventType=he,Ci=u.Event=ee,Ei=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ti=u.FetchXmlHttpFactory=Tn,Ii=u.WebChannel=pe,Si=u.XhrIo=Dn;const ki="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ni.UNAUTHENTICATED=new Ni(null),Ni.GOOGLE_CREDENTIALS=new Ni("google-credentials-uid"),Ni.FIRST_PARTY=new Ni("first-party-uid"),Ni.MOCK_USER=new Ni("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ai="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new o.Yd("@firebase/firestore");function Di(){return xi.logLevel}function Ri(t,...e){if(xi.logLevel<=o["in"].DEBUG){const n=e.map(Li);xi.debug(`Firestore (${Ai}): ${t}`,...n)}}function Oi(t,...e){if(xi.logLevel<=o["in"].ERROR){const n=e.map(Li);xi.error(`Firestore (${Ai}): ${t}`,...n)}}function Pi(t,...e){if(xi.logLevel<=o["in"].WARN){const n=e.map(Li);xi.warn(`Firestore (${Ai}): ${t}`,...n)}}function Li(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw Oi(e),new Error(e)}function Fi(t,e){t||Mi()}function Ui(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ji extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ni.UNAUTHENTICATED)))}shutdown(){}}class Wi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class $i{constructor(t){this.t=t,this.currentUser=Ni.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ri("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ri("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ri("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fi("string"==typeof e.accessToken),new Bi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fi(null===t||"string"==typeof t),new Ni(t)}}class Ki{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Ni.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fi(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gi{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new Ki(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ni.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qi{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Ri("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Ri("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ri("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Ri("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fi("string"==typeof t.token),this.A=t.token,new zi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Yi(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Xi(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ji(Vi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ji(Vi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ji(Vi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ji(Vi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ts.fromMillis(Date.now())}static fromDate(t){return ts.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ts(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Xi(this.nanoseconds,t.nanoseconds):Xi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this.timestamp=t}static fromTimestamp(t){return new es(t)}static min(){return new es(new ts(0,0))}static max(){return new es(new ts(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mi(),void 0===n?n=t.length-e:n>t.length-e&&Mi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ns.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ns?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class is extends ns{construct(t,e,n){return new is(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ji(Vi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new is(e)}static emptyPath(){return new is([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rs extends ns{construct(t,e,n){return new rs(t,e,n)}static isValidIdentifier(t){return ss.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rs.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rs(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new ji(Vi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ji(Vi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ji(Vi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new ji(Vi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rs(e)}static emptyPath(){return new rs([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this.path=t}static fromPath(t){return new os(is.fromString(t))}static fromName(t){return new os(is.fromString(t).popFirst(5))}static empty(){return new os(is.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===is.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return is.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new os(new is(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}as.UNKNOWN_ID=-1;function cs(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=es.fromTimestamp(1e9===i?new ts(n+1,0):new ts(n,i));return new ls(s,os.empty(),e)}function us(t){return new ls(t.readTime,t.key,-1)}class ls{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ls(es.min(),os.empty(),-1)}static max(){return new ls(es.max(),os.empty(),-1)}}function hs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=os.comparator(t.documentKey,e.documentKey),0!==n?n:Xi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){if(t.code!==Vi.FAILED_PRECONDITION||t.message!==ds)throw t;Ri("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gs(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gs?e:gs.resolve(e)}catch(t){return gs.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gs.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gs.reject(e)}static resolve(t){return new gs(((e,n)=>{e(t)}))}static reject(t){return new gs(((e,n)=>{n(t)}))}static waitFor(t){return new gs(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=gs.resolve(!1);for(const n of t)e=e.next((t=>t?gs.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new gs(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new gs(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ws(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys.at=-1;class bs{constructor(t,e){this.comparator=t,this.root=e||Es.EMPTY}insert(t,e){return new bs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Es.BLACK,null,null))}remove(t){return new bs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Es.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cs(this.root,t,this.comparator,!0)}}class Cs{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Es{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Es.RED,this.left=null!=i?i:Es.EMPTY,this.right=null!=s?s:Es.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Es(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Es.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Es.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Es.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Es.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mi();if(this.right.isRed())throw Mi();const t=this.left.check();if(t!==this.right.check())throw Mi();return t+(this.isRed()?0:1)}}Es.EMPTY=null,Es.RED=!0,Es.BLACK=!1,Es.EMPTY=new class{constructor(){this.size=0}get key(){throw Mi()}get value(){throw Mi()}get color(){throw Mi()}get left(){throw Mi()}get right(){throw Mi()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Es(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.comparator=t,this.data=new bs(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Is(this.data.getIterator())}getIteratorFrom(t){return new Is(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ts))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ts(this.comparator);return e.data=t,e}}class Is{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.fields=t,t.sort(rs.comparator)}static empty(){return new Ss([])}unionWith(t){let e=new Ts(rs.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ss(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ks(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ks.EMPTY_BYTE_STRING=new ks("");const Ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(t){if(Fi(!!t),"string"==typeof t){let e=0;const n=Ns.exec(t);if(Fi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:xs(t.seconds),nanos:xs(t.nanos)}}function xs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ds(t){return"string"==typeof t?ks.fromBase64String(t):ks.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Os(t){const e=t.mapValue.fields.__previous_value__;return Rs(e)?Os(e):e}function Ps(t){const e=As(t.mapValue.fields.__local_write_time__.timestampValue);return new ts(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ms{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ms&&t.projectId===this.projectId&&t.database===this.database}}function Fs(t){return null==t}function Us(t){return 0===t&&1/t==-1/0}function Vs(t){return"number"==typeof t&&Number.isInteger(t)&&!Us(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rs(t)?4:tr(t)?9007199254740991:10:Mi()}function Bs(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ps(t).isEqual(Ps(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=As(t.timestampValue),i=As(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ds(t.bytesValue).isEqual(Ds(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xs(t.geoPointValue.latitude)===xs(e.geoPointValue.latitude)&&xs(t.geoPointValue.longitude)===xs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xs(t.integerValue)===xs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xs(t.doubleValue),i=xs(e.doubleValue);return n===i?Us(n)===Us(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],Bs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(_s(n)!==_s(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Bs(n[s],i[s])))return!1;return!0}(t,e);default:return Mi()}}function Hs(t,e){return void 0!==(t.values||[]).find((t=>Bs(t,e)))}function Ws(t,e){if(t===e)return 0;const n=qs(t),i=qs(e);if(n!==i)return Xi(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xs(t.integerValue||t.doubleValue),i=xs(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return $s(t.timestampValue,e.timestampValue);case 4:return $s(Ps(t),Ps(e));case 5:return Xi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ds(t),i=Ds(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=Xi(n[s],i[s]);if(0!==t)return t}return Xi(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xi(xs(t.latitude),xs(e.latitude));return 0!==n?n:Xi(xs(t.longitude),xs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Ws(n[s],i[s]);if(t)return t}return Xi(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===js.mapValue&&e===js.mapValue)return 0;if(t===js.mapValue)return 1;if(e===js.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=Xi(i[o],r[o]);if(0!==t)return t;const e=Ws(n[i[o]],s[r[o]]);if(0!==e)return e}return Xi(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Mi()}}function $s(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xi(t,e);const n=As(t),i=As(e),s=Xi(n.seconds,i.seconds);return 0!==s?s:Xi(n.nanos,i.nanos)}function Ks(t){return Gs(t)}function Gs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=As(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,os.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Gs(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Gs(t.fields[s])}`;return n+"}"}(t.mapValue):Mi();var e,n}function zs(t){return!!t&&"integerValue"in t}function Qs(t){return!!t&&"arrayValue"in t}function Ys(t){return!!t&&"nullValue"in t}function Js(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xs(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.value=t}static empty(){return new er({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zs(e)}setAll(t){let e=rs.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Zs(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Xs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){vs(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new er(Zs(this.value))}}function nr(t){const e=[];return vs(t.fields,((t,n)=>{const i=new rs([t]);if(Xs(n)){const t=nr(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ss(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ir{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new ir(t,0,es.min(),es.min(),er.empty(),0)}static newFoundDocument(t,e,n){return new ir(t,1,e,es.min(),n,0)}static newNoDocument(t,e){return new ir(t,2,e,es.min(),er.empty(),0)}static newUnknownDocument(t,e){return new ir(t,3,e,es.min(),er.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=er.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=er.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=es.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ir&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ir(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ht=null}}function rr(t,e=null,n=[],i=[],s=null,r=null,o=null){return new sr(t,e,n,i,s,r,o)}function or(t){const e=Ui(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ks(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ks(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ks(t))).join(",")),e.ht=t}return e.ht}function ar(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ks(e.value)}`;var e})).join(", ")}]`),Fs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ks(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ks(t))).join(",")),`Target(${e})`}function cr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!br(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Bs(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Er(t.startAt,e.startAt)&&Er(t.endAt,e.endAt)}function ur(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class lr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hr(t,e,n):"array-contains"===e?new gr(t,n):"in"===e?new mr(t,n):"not-in"===e?new yr(t,n):"array-contains-any"===e?new _r(t,n):new lr(t,e,n)}static lt(t,e,n){return"in"===e?new dr(t,n):new fr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ws(e,this.value)):null!==e&&qs(this.value)===qs(e)&&this.ft(Ws(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mi()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hr extends lr{constructor(t,e,n){super(t,e,n),this.key=os.fromName(n.referenceValue)}matches(t){const e=os.comparator(t.key,this.key);return this.ft(e)}}class dr extends lr{constructor(t,e){super(t,"in",e),this.keys=pr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fr extends lr{constructor(t,e){super(t,"not-in",e),this.keys=pr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>os.fromName(t.referenceValue)))}class gr extends lr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&Hs(e.arrayValue,this.value)}}class mr extends lr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hs(this.value.arrayValue,e)}}class yr extends lr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hs(this.value.arrayValue,e)}}class _r extends lr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hs(this.value.arrayValue,t)))}}class vr{constructor(t,e){this.position=t,this.inclusive=e}}class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function br(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Cr(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Ws(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Er(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ir(t,e,n,i,s,r,o,a){return new Tr(t,e,n,i,s,r,o,a)}function Sr(t){return new Tr(t)}function kr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Nr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ar(t){for(const e of t.filters)if(e.dt())return e.field;return null}function xr(t){return null!==t.collectionGroup}function Dr(t){const e=Ui(t);if(null===e._t){e._t=[];const t=Ar(e),n=Nr(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new wr(t)),e._t.push(new wr(rs.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new wr(rs.keyField(),t))}}}return e._t}function Rr(t){const e=Ui(t);if(!e.wt)if("F"===e.limitType)e.wt=rr(e.path,e.collectionGroup,Dr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Dr(e)){const e="desc"===s.dir?"asc":"desc";t.push(new wr(s.field,e))}const n=e.endAt?new vr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new vr(e.startAt.position,e.startAt.inclusive):null;e.wt=rr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function Or(t,e,n){return new Tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return cr(Rr(t),Rr(e))&&t.limitType===e.limitType}function Lr(t){return`${or(Rr(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${ar(Rr(t))}; limitType=${t.limitType})`}function Fr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):os.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Cr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Dr(t),e))&&!(t.endAt&&!function(t,e,n){const i=Cr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Dr(t),e))}(t,e)}function Ur(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vr(t){return(e,n)=>{let i=!1;for(const s of Dr(t)){const t=jr(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function jr(t,e,n){const i=t.field.isKeyField()?os.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Ws(i,s):Mi()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Mi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function Br(t){return{integerValue:""+t}}function Hr(t,e){return Vs(e)?Br(e):qr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function $r(t,e,n){return t instanceof zr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Qr?Yr(t,e):t instanceof Jr?Xr(t,e):function(t,e){const n=Gr(t,e),i=to(n)+to(t.yt);return zs(n)&&zs(t.yt)?Br(i):qr(t.It,i)}(t,e)}function Kr(t,e,n){return t instanceof Qr?Yr(t,e):t instanceof Jr?Xr(t,e):n}function Gr(t,e){return t instanceof Zr?zs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class zr extends Wr{}class Qr extends Wr{constructor(t){super(),this.elements=t}}function Yr(t,e){const n=eo(e);for(const i of t.elements)n.some((t=>Bs(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Jr extends Wr{constructor(t){super(),this.elements=t}}function Xr(t,e){let n=eo(e);for(const i of t.elements)n=n.filter((t=>!Bs(t,i)));return{arrayValue:{values:n}}}class Zr extends Wr{constructor(t,e){super(),this.It=t,this.yt=e}}function to(t){return xs(t.integerValue||t.doubleValue)}function eo(t){return Qs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Qr&&e instanceof Qr||t instanceof Jr&&e instanceof Jr?Zi(t.elements,e.elements,Bs):t instanceof Zr&&e instanceof Zr?Bs(t.yt,e.yt):t instanceof zr&&e instanceof zr}(t.transform,e.transform)}class io{constructor(t,e){this.version=t,this.transformResults=e}}class so{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new so}static exists(t){return new so(void 0,t)}static updateTime(t){return new so(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ro(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class oo{}function ao(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new _o(t.key,so.none()):new fo(t.key,t.data,so.none());{const n=t.data,i=er.empty();let s=new Ts(rs.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new po(t.key,i,new Ss(s.toArray()),so.none())}}function co(t,e,n){t instanceof fo?function(t,e,n){const i=t.value.clone(),s=mo(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof po?function(t,e,n){if(!ro(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=mo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(go(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,i){return t instanceof fo?function(t,e,n,i){if(!ro(t.precondition,e))return n;const s=t.value.clone(),r=yo(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof po?function(t,e,n,i){if(!ro(t.precondition,e))return n;const s=yo(t.fieldTransforms,i,e),r=e.data;return r.setAll(go(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return ro(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function lo(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Gr(i.transform,t||null);null!=s&&(null===n&&(n=er.empty()),n.set(i.field,s))}return n||null}function ho(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zi(t,e,((t,e)=>no(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends oo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class po extends oo{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function go(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function mo(t,e,n){const i=new Map;Fi(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Kr(o,a,n[s]))}return i}function yo(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,$r(t,r,e))}return i}class _o extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vo extends oo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bo,Co;function Eo(t){switch(t){default:return Mi();case Vi.CANCELLED:case Vi.UNKNOWN:case Vi.DEADLINE_EXCEEDED:case Vi.RESOURCE_EXHAUSTED:case Vi.INTERNAL:case Vi.UNAVAILABLE:case Vi.UNAUTHENTICATED:return!1;case Vi.INVALID_ARGUMENT:case Vi.NOT_FOUND:case Vi.ALREADY_EXISTS:case Vi.PERMISSION_DENIED:case Vi.FAILED_PRECONDITION:case Vi.ABORTED:case Vi.OUT_OF_RANGE:case Vi.UNIMPLEMENTED:case Vi.DATA_LOSS:return!0}}function To(t){if(void 0===t)return Oi("GRPC error has no .code"),Vi.UNKNOWN;switch(t){case bo.OK:return Vi.OK;case bo.CANCELLED:return Vi.CANCELLED;case bo.UNKNOWN:return Vi.UNKNOWN;case bo.DEADLINE_EXCEEDED:return Vi.DEADLINE_EXCEEDED;case bo.RESOURCE_EXHAUSTED:return Vi.RESOURCE_EXHAUSTED;case bo.INTERNAL:return Vi.INTERNAL;case bo.UNAVAILABLE:return Vi.UNAVAILABLE;case bo.UNAUTHENTICATED:return Vi.UNAUTHENTICATED;case bo.INVALID_ARGUMENT:return Vi.INVALID_ARGUMENT;case bo.NOT_FOUND:return Vi.NOT_FOUND;case bo.ALREADY_EXISTS:return Vi.ALREADY_EXISTS;case bo.PERMISSION_DENIED:return Vi.PERMISSION_DENIED;case bo.FAILED_PRECONDITION:return Vi.FAILED_PRECONDITION;case bo.ABORTED:return Vi.ABORTED;case bo.OUT_OF_RANGE:return Vi.OUT_OF_RANGE;case bo.UNIMPLEMENTED:return Vi.UNIMPLEMENTED;case bo.DATA_LOSS:return Vi.DATA_LOSS;default:return Mi()}}(Co=bo||(bo={}))[Co.OK=0]="OK",Co[Co.CANCELLED=1]="CANCELLED",Co[Co.UNKNOWN=2]="UNKNOWN",Co[Co.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Co[Co.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Co[Co.NOT_FOUND=5]="NOT_FOUND",Co[Co.ALREADY_EXISTS=6]="ALREADY_EXISTS",Co[Co.PERMISSION_DENIED=7]="PERMISSION_DENIED",Co[Co.UNAUTHENTICATED=16]="UNAUTHENTICATED",Co[Co.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Co[Co.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Co[Co.ABORTED=10]="ABORTED",Co[Co.OUT_OF_RANGE=11]="OUT_OF_RANGE",Co[Co.UNIMPLEMENTED=12]="UNIMPLEMENTED",Co[Co.INTERNAL=13]="INTERNAL",Co[Co.UNAVAILABLE=14]="UNAVAILABLE",Co[Co.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){vs(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return ws(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new bs(os.comparator);function ko(){return So}const No=new bs(os.comparator);function Ao(...t){let e=No;for(const n of t)e=e.insert(n.key,n);return e}function xo(t){let e=No;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Do(){return Oo()}function Ro(){return Oo()}function Oo(){return new Io((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Po=new bs(os.comparator),Lo=new Ts(os.comparator);function Mo(...t){let e=Lo;for(const n of t)e=e.add(n);return e}const Fo=new Ts(Xi);function Uo(){return Fo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,jo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vo(es.min(),i,Uo(),ko(),Mo())}}class jo{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new jo(n,e,Mo(),Mo(),Mo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e,n,i){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=i}}class Bo{constructor(t,e){this.targetId=t,this.At=e}}class Ho{constructor(t,e,n=ks.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.Rt=0,this.bt=Go(),this.Pt=ks.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Mo(),e=Mo(),n=Mo();return this.bt.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Mi()}})),new jo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Go()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class $o{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=ko(),this.qt=Ko(),this.Kt=new Ts(Xi)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Mi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,i=this.Xt(e);if(i){const t=i.target;if(ur(t))if(0===n){const n=new os(t.path);this.jt(e,n,ir.newNoDocument(n,es.min()))}else Fi(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,i)=>{const s=this.Xt(i);if(s){if(n.current&&ur(s.target)){const e=new os(s.target.path);null!==this.Ut.get(e)||this.ee(i,e)||this.jt(i,e,ir.newNoDocument(e,t))}n.Dt&&(e.set(i,n.xt()),n.Nt())}}));let n=Mo();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const i=new Vo(t,e,this.Kt,this.Ut,n);return this.Ut=ko(),this.qt=Ko(),this.Kt=new Ts(Xi),i}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,e)?i.kt(e,1):i.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Wo,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ts(Xi),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Ri("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Wo),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Ko(){return new bs(os.comparator)}function Go(){return new bs(os.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Yo{constructor(t,e){this.databaseId=t,this.gt=e}}function Jo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Zo(t,e){return Jo(t,e.toTimestamp())}function ta(t){return Fi(!!t),es.fromTimestamp(function(t){const e=As(t);return new ts(e.seconds,e.nanos)}(t))}function ea(t,e){return function(t){return new is(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function na(t){const e=is.fromString(t);return Fi(Ia(e)),e}function ia(t,e){return ea(t.databaseId,e.path)}function sa(t,e){const n=na(e);if(n.get(1)!==t.databaseId.projectId)throw new ji(Vi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ji(Vi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new os(ca(n))}function ra(t,e){return ea(t.databaseId,e)}function oa(t){const e=na(t);return 4===e.length?is.emptyPath():ca(e)}function aa(t){return new is(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ca(t){return Fi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ua(t,e,n){return{name:ia(t,e),fields:n.value.mapValue.fields}}function la(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mi()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(Fi(void 0===e||"string"==typeof e),ks.fromBase64String(e||"")):(Fi(void 0===e||e instanceof Uint8Array),ks.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vi.UNKNOWN:To(t.code);return new ji(e,t.message||"")}(o);n=new Ho(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=sa(t,i.document.name),r=ta(i.document.updateTime),o=new er({mapValue:{fields:i.document.fields}}),a=ir.newFoundDocument(s,r,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new qo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=sa(t,i.document),r=i.readTime?ta(i.readTime):es.min(),o=ir.newNoDocument(s,r),a=i.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=sa(t,i.document),r=i.removedTargetIds||[];n=new qo([],r,s,null)}else{if(!("filter"in e))return Mi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new wo(i),r=t.targetId;n=new Bo(r,s)}}return n}function ha(t,e){let n;if(e instanceof fo)n={update:ua(t,e.key,e.value)};else if(e instanceof _o)n={delete:ia(t,e.key)};else if(e instanceof po)n={update:ua(t,e.key,e.data),updateMask:Ta(e.fieldMask)};else{if(!(e instanceof vo))return Mi();n={verify:ia(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof zr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zr)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Mi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Zo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mi()}(t,e.precondition)),n}function da(t,e){return t&&t.length>0?(Fi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ta(t.updateTime):ta(e);return n.isEqual(es.min())&&(n=ta(e)),new io(n,t.transformResults||[])}(t,e)))):[]}function fa(t,e){return{documents:[ra(t,e.path)]}}function pa(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ra(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ra(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Js(t.value))return{unaryFilter:{field:wa(t.field),op:"IS_NAN"}};if(Ys(t.value))return{unaryFilter:{field:wa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Js(t.value))return{unaryFilter:{field:wa(t.field),op:"IS_NOT_NAN"}};if(Ys(t.value))return{unaryFilter:{field:wa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wa(t.field),op:va(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:wa(t.field),direction:_a(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||Fs(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ga(t){let e=oa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Fi(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wr(ba(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Fs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vr(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new vr(n,e)}(n.endAt)),Ir(e,s,o,r,a,"F",c,u)}function ma(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ya(t){return t?void 0!==t.unaryFilter?[Ea(t)]:void 0!==t.fieldFilter?[Ca(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ya(t))).reduce(((t,e)=>t.concat(e))):Mi():[]}function _a(t){return zo[t]}function va(t){return Qo[t]}function wa(t){return{fieldPath:t.canonicalString()}}function ba(t){return rs.fromServerFormat(t.fieldPath)}function Ca(t){return lr.create(ba(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mi()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ea(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ba(t.unaryFilter.field);return lr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ba(t.unaryFilter.field);return lr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ba(t.unaryFilter.field);return lr.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ba(t.unaryFilter.field);return lr.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Mi()}}function Ta(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ia(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ka=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Na=ka;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&co(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=uo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ro();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=ao(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(es.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Mo())}isEqual(t){return this.batchId===t.batchId&&Zi(this.mutations,t.mutations,((t,e)=>ho(t,e)))&&Zi(this.baseMutations,t.baseMutations,((t,e)=>ho(t,e)))}}class xa{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Fi(t.mutations.length===n.length);let i=Po;const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new xa(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,i,s=es.min(),r=es.min(),o=ks.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ra(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.re=t}}function Pa(t){const e=ga({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Or(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(xs(t.integerValue));else if("doubleValue"in t){const n=xs(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Us(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ds(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?tr(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Mi()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const i of Object.keys(n))this._e(i,e),this.ae(n[i],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const i of n)this.ae(i,e)}ge(t,e){this.le(e,37),os.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}La.Te=new La;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(){this.Ye=new Fa}addToCollectionParentIndex(t,e){return this.Ye.add(e),gs.resolve()}getCollectionParents(t,e){return gs.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return gs.resolve()}deleteFieldIndex(t,e){return gs.resolve()}getDocumentsMatchingTarget(t,e){return gs.resolve(null)}getIndexType(t,e){return gs.resolve(0)}getFieldIndexes(t,e){return gs.resolve([])}getNextCollectionGroupToUpdate(t){return gs.resolve(null)}getMinOffset(t,e){return gs.resolve(ls.min())}getMinOffsetFromCollectionGroup(t,e){return gs.resolve(ls.min())}updateCollectionGroup(t,e,n){return gs.resolve()}updateIndexEntries(t,e){return gs.resolve()}}class Fa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ts(is.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ts(is.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ua{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ua(t,Ua.DEFAULT_COLLECTION_PERCENTILE,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ua.DEFAULT_COLLECTION_PERCENTILE=10,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ua.DEFAULT=new Ua(41943040,Ua.DEFAULT_COLLECTION_PERCENTILE,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ua.DISABLED=new Ua(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.changes=new Io((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ir.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gs.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&uo(n.mutation,t,Ss.empty(),ts.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Mo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Mo()){const i=Do();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Ao();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Do();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Mo())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=ko();const r=Oo(),o=Oo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof po)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),uo(o.mutation,e,o.mutation.getFieldMask(),ts.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new qa(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Oo();let i=new bs(((t,e)=>t-e)),s=Mo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Ss.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||Mo()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=Ro();c.forEach((t=>{if(!s.has(t)){const i=ao(e.get(t),n.get(t));null!==i&&u.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return gs.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return os.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xr(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):gs.resolve(Do());let o=-1,a=s;return r.next((e=>gs.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?gs.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Mo()))).next((t=>({batchId:o,changes:xo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new os(e)).next((t=>{let e=Ao();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=Ao();return this.indexManager.getCollectionParents(t,i).next((r=>gs.forEach(r,(r=>{const o=function(t,e){return new Tr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,ir.newInvalidDocument(n)))}));let n=Ao();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&uo(r.mutation,s,Ss.empty(),ts.now()),Fr(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):gs.resolve(ir.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return gs.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ta(n.createTime)}),gs.resolve()}getNamedQuery(t,e){return gs.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Pa(t.bundledQuery),readTime:ta(t.readTime)}}(e)),gs.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.overlays=new bs(os.comparator),this.es=new Map}getOverlay(t,e){return gs.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Do();return gs.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ue(t,e,i)})),gs.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),gs.resolve()}getOverlaysForCollection(t,e,n){const i=Do(),s=e.length+1,r=new os(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return gs.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new bs(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Do(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Do(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return gs.resolve(o)}ue(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Da(e,n));let s=this.es.get(e);void 0===s&&(s=Mo(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.ns=new Ts(Ka.ss),this.rs=new Ts(Ka.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ka(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ka(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new os(new is([])),n=new Ka(e,t),i=new Ka(e,t+1),s=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new os(new is([])),n=new Ka(e,t),i=new Ka(e,t+1);let s=Mo();return this.rs.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ka(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ka{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return os.comparator(t.key,e.key)||Xi(t._s,e._s)}static os(t,e){return Xi(t._s,e._s)||os.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ts(Ka.ss)}checkEmpty(t){return gs.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Aa(s,e,n,i);this.mutationQueue.push(r);for(const o of i)this.gs=this.gs.add(new Ka(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gs.resolve(r)}lookupMutationBatch(t,e){return gs.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),s=i<0?0:i;return gs.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return gs.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ka(e,0),i=new Ka(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);s.push(e)})),gs.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ts(Xi);return e.forEach((t=>{const e=new Ka(t,0),i=new Ka(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),gs.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const r=new Ka(new os(s),0);let o=new Ts(Xi);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),r),gs.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fi(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gs.forEach(e.mutations,(i=>{const s=new Ka(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ka(e,0),i=this.gs.firstAfterOrEqual(n);return gs.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,gs.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.Es=t,this.docs=new bs(os.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gs.resolve(n?n.document.mutableCopy():ir.newInvalidDocument(e))}getEntries(t,e){let n=ko();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ir.newInvalidDocument(t))})),gs.resolve(n)}getAllFromCollection(t,e,n){let i=ko();const s=new os(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hs(us(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return gs.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Mi()}As(t,e){return gs.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return gs.resolve(this.size)}}class Qa extends ja{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),gs.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.persistence=t,this.Rs=new Io((t=>or(t)),cr),this.lastRemoteSnapshotVersion=es.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $a,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),gs.resolve()}getLastRemoteSnapshotVersion(t){return gs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gs.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),gs.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),gs.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,gs.resolve()}updateTargetData(t,e){return this.Dn(e),gs.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,gs.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),gs.waitFor(s).next((()=>i))}getTargetCount(t){return gs.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return gs.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),gs.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),gs.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),gs.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return gs.resolve(n)}containsKey(t,e){return gs.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new ys(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ya(this),this.indexManager=new Ma,this.remoteDocumentCache=function(t){return new za(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Oa(e),this.Ns=new Ha(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wa,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ga(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Ri("MemoryPersistence","Starting transaction:",t);const i=new Xa(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return gs.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Xa extends fs{constructor(t){super(),this.currentSequenceNumber=t}}class Za{constructor(t){this.persistence=t,this.Fs=new $a,this.$s=null}static Bs(t){return new Za(t)}get Ls(){if(this.$s)return this.$s;throw Mi()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),gs.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),gs.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),gs.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gs.forEach(this.Ls,(n=>{const i=os.fromPath(n);return this.Us(t,i).next((t=>{t||e.removeEntry(i,es.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return gs.or([()=>gs.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=Mo(),i=Mo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tc(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((s=>s||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(kr(e))return gs.resolve(null);let n=Rr(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Or(e,null,"F"),n=Rr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=Mo(...i);return this.Ni.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,i);return this.$i(e,r,s,n.readTime)?this.ki(t,Or(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,i){return kr(e)||i.isEqual(es.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const r=this.Fi(e,s);return this.$i(e,r,n,i)?this.Mi(t,e):(Di()<=o["in"].DEBUG&&Ri("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mr(e)),this.Bi(t,r,e,cs(i,-1)))}))}Fi(t,e){let n=new Ts(Vr(t));return e.forEach(((e,i)=>{Fr(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,e){return Di()<=o["in"].DEBUG&&Ri("QueryEngine","Using full collection scan to execute query:",Mr(e)),this.Ni.getDocumentsMatchingQuery(t,e,ls.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.It=i,this.Ui=new bs(Xi),this.qi=new Io((t=>or(t)),cr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ba(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function ic(t,e,n,i){return new nc(t,e,n,i)}async function sc(t,e){const n=Ui(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Mo();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function rc(t,e){const n=Ui(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=gs.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Fi(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Mo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function oc(t){const e=Ui(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function ac(t,e){const n=Ui(t),i=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ks.EMPTY_BYTE_STRING,es.min()).withLastLimboFreeSnapshotVersion(es.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Cs.updateTargetData(t,u))}));let a=ko(),c=Mo();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(cc(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!i.isEqual(es.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return gs.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=s,t)))}function cc(t,e,n){let i=Mo(),s=Mo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=ko();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(es.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):Ri("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function uc(t,e){const n=Ui(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function lc(t,e){const n=Ui(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((s=>s?(i=s,gs.resolve(i)):n.Cs.allocateTargetId(t).next((s=>(i=new Ra(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ui.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function hc(t,e,n){const i=Ui(t),s=i.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!ms(t))throw t;Ri("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ui=i.Ui.remove(e),i.qi.delete(s.target)}function dc(t,e,n){const i=Ui(t);let s=es.min(),r=Mo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Ui(t),s=i.qi.get(n);return void 0!==s?gs.resolve(i.Ui.get(s)):i.Cs.getTargetData(e,n)}(i,t,Rr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?s:es.min(),n?r:Mo()))).next((t=>(fc(i,Ur(e),t),{documents:t,Hi:r})))))}function fc(t,e,n){let i=t.Ki.get(e)||es.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class pc{constructor(){this.activeTargetIds=Uo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Lr=new pc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new pc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Ri("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Ri("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,i,s){const r=this.ho(t,e);Ri("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then((t=>(Ri("RestConnection","Received: ",t),t)),(e=>{throw Pi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,s,r){return this.ao(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=_c[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise(((s,r)=>{const o=new Si;o.setWithCredentials(!0),o.listenOnce(bi.COMPLETE,(()=>{var e;try{switch(o.getLastErrorCode()){case wi.NO_ERROR:const n=o.getResponseJson();Ri("Connection","XHR received:",JSON.stringify(n)),s(n);break;case wi.TIMEOUT:Ri("Connection",'RPC "'+t+'" timed out'),r(new ji(Vi.DEADLINE_EXCEEDED,"Request time out"));break;case wi.HTTP_ERROR:const i=o.getStatus();if(Ri("Connection",'RPC "'+t+'" failed with status:',i,"response text:",o.getResponseText()),i>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vi).indexOf(e)>=0?e:Vi.UNKNOWN}(n.status);r(new ji(t,n.message))}else r(new ji(Vi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ji(Vi.UNAVAILABLE,"Connection failed."));break;default:Mi()}}finally{Ri("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=_i(),r=vi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ti({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");Ri("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new vc({Hr:t=>{l?Ri("Connection","Not sending because WebChannel is closed:",t):(u||(Ri("Connection","Opening WebChannel transport."),c.open(),u=!0),Ri("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Ii.EventType.OPEN,(()=>{l||Ri("Connection","WebChannel transport opened.")})),d(c,Ii.EventType.CLOSE,(()=>{l||(l=!0,Ri("Connection","WebChannel transport closed"),h.io())})),d(c,Ii.EventType.ERROR,(t=>{l||(l=!0,Pi("Connection","WebChannel transport errored:",t),h.io(new ji(Vi.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ii.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Fi(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Ri("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=bo[t];if(void 0!==e)return To(e)}(t),n=s.message;void 0===e&&(e=Vi.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.io(new ji(e,n)),c.close()}else Ri("Connection","WebChannel received:",n),h.ro(n)}})),d(r,Ci.STAT_EVENT,(t=>{t.stat===Ei.PROXY?Ri("Connection","Detected buffering proxy"):t.stat===Ei.NOPROXY&&Ri("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return new Yo(t,!0)}class Ec{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Ri("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,n,i,s,r,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ec(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Vi.RESOURCE_EXHAUSTED?(Oi(e.toString()),Oi("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Vi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new ji(Vi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return Ri("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Ri("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ic extends Tc{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.It=s}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=la(this.It,t),n=function(t){if(!("targetChange"in t))return es.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?es.min():e.readTime?ta(e.readTime):es.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=aa(this.It),e.addTarget=function(t,e){let n;const i=e.target;return n=ur(i)?{documents:fa(t,i)}:{query:pa(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Xo(t,e.resumeToken):e.snapshotVersion.compareTo(es.min())>0&&(n.readTime=Jo(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ma(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=aa(this.It),e.removeTarget=t,this.Bo(e)}}class Sc extends Tc{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Fi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=da(t.writeResults,t.commitTime),n=ta(t.commitTime);return this.listener.Zo(n,e)}return Fi(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=aa(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ha(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=i,this.nu=!1}su(){if(this.nu)throw new ji(Vi.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ji(Vi.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ji(Vi.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Nc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Oi(e),this.ou=!1):Ri("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Uc(this)&&(Ri("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ui(t);e._u.add(4),await Dc(e),e.gu.set("Unknown"),e._u.delete(4),await xc(e)}(this))}))})),this.gu=new Nc(n,i)}}async function xc(t){if(Uc(t))for(const e of t.wu)await e(!0)}async function Dc(t){for(const e of t.wu)await e(!1)}function Rc(t,e){const n=Ui(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Fc(n)?Mc(n):nu(n).ko()&&Pc(n,e))}function Oc(t,e){const n=Ui(t),i=nu(n);n.du.delete(e),i.ko()&&Lc(n,e),0===n.du.size&&(i.ko()?i.Fo():Uc(n)&&n.gu.set("Unknown"))}function Pc(t,e){t.yu.Mt(e.targetId),nu(t).zo(e)}function Lc(t,e){t.yu.Mt(e),nu(t).Ho(e)}function Mc(t){t.yu=new $o({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),nu(t).start(),t.gu.uu()}function Fc(t){return Uc(t)&&!nu(t).No()&&t.du.size>0}function Uc(t){return 0===Ui(t)._u.size}function Vc(t){t.yu=void 0}async function jc(t){t.du.forEach(((e,n)=>{Pc(t,e)}))}async function qc(t,e){Vc(t),Fc(t)?(t.gu.hu(e),Mc(t)):t.gu.set("Unknown")}async function Bc(t,e,n){if(t.gu.set("Online"),e instanceof Ho&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){Ri("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Hc(t,n)}else if(e instanceof qo?t.yu.Gt(e):e instanceof Bo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(es.min()))try{const e=await oc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(i);s&&t.du.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ks.EMPTY_BYTE_STRING,n.snapshotVersion)),Lc(t,e);const i=new Ra(n.target,e,1,n.sequenceNumber);Pc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ri("RemoteStore","Failed to raise snapshot:",e),await Hc(t,e)}}async function Hc(t,e,n){if(!ms(e))throw e;t._u.add(1),await Dc(t),t.gu.set("Offline"),n||(n=()=>oc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ri("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await xc(t)}))}function Wc(t,e){return e().catch((n=>Hc(t,n,e)))}async function $c(t){const e=Ui(t),n=iu(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Kc(e);)try{const t=await uc(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,Gc(e,t)}catch(t){await Hc(e,t)}zc(e)&&Qc(e)}function Kc(t){return Uc(t)&&t.fu.length<10}function Gc(t,e){t.fu.push(e);const n=iu(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function zc(t){return Uc(t)&&!iu(t).No()&&t.fu.length>0}function Qc(t){iu(t).start()}async function Yc(t){iu(t).eu()}async function Jc(t){const e=iu(t);for(const n of t.fu)e.Xo(n.mutations)}async function Xc(t,e,n){const i=t.fu.shift(),s=xa.from(i,e,n);await Wc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await $c(t)}async function Zc(t,e){e&&iu(t).Yo&&await async function(t,e){if(n=e.code,Eo(n)&&n!==Vi.ABORTED){const n=t.fu.shift();iu(t).Mo(),await Wc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await $c(t)}var n}(t,e),zc(t)&&Qc(t)}async function tu(t,e){const n=Ui(t);n.asyncQueue.verifyOperationInProgress(),Ri("RemoteStore","RemoteStore received new credentials");const i=Uc(n);n._u.add(3),await Dc(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await xc(n)}async function eu(t,e){const n=Ui(t);e?(n._u.delete(2),await xc(n)):e||(n._u.add(2),await Dc(n),n.gu.set("Unknown"))}function nu(t){return t.pu||(t.pu=function(t,e,n){const i=Ui(t);return i.su(),new Ic(e,i.connection,i.authCredentials,i.appCheckCredentials,i.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:jc.bind(null,t),Zr:qc.bind(null,t),Wo:Bc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Fc(t)?Mc(t):t.gu.set("Unknown")):(await t.pu.stop(),Vc(t))}))),t.pu}function iu(t){return t.Iu||(t.Iu=function(t,e,n){const i=Ui(t);return i.su(),new Sc(e,i.connection,i.authCredentials,i.appCheckCredentials,i.It,n)}(t.datastore,t.asyncQueue,{Yr:Yc.bind(null,t),Zr:Zc.bind(null,t),tu:Jc.bind(null,t),Zo:Xc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await $c(t)):(await t.Iu.stop(),t.fu.length>0&&(Ri("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class su{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new su(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ji(Vi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(Oi("AsyncQueue",`${e}: ${t}`),ms(t))return new ji(Vi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.comparator=t?(e,n)=>t(e,n)||os.comparator(e.key,n.key):(t,e)=>os.comparator(t.key,e.key),this.keyedMap=Ao(),this.sortedSet=new bs(this.comparator)}static emptySet(t){return new ou(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ou))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ou;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.Tu=new bs(os.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Mi():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class cu{constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new cu(t,e,ou.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Au=void 0,this.listeners=[]}}class lu{constructor(){this.queries=new Io((t=>Lr(t)),Pr),this.onlineState="Unknown",this.Ru=new Set}}async function hu(t,e){const n=Ui(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new uu),s)try{r.Au=await n.onListen(i)}catch(t){const n=ru(t,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&gu(n)}async function du(t,e){const n=Ui(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function fu(t,e){const n=Ui(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(s)&&(i=!0);e.Au=s}}i&&gu(n)}function pu(t,e,n){const i=Ui(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function gu(t){t.Ru.forEach((t=>{t.next()}))}class mu{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new cu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=cu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(t){this.key=t}}class _u{constructor(t){this.key=t}}class vu{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Mo(),this.mutatedKeys=Mo(),this.Gu=Vr(t),this.Qu=new ou(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new au,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),l=Fr(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new cu(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new au,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Mo(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new _u(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new yu(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=Mo();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return cu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class wu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class bu{constructor(t){this.key=t,this.nc=!1}}class Cu{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new Io((t=>Lr(t)),Pr),this.rc=new Map,this.oc=new Set,this.uc=new bs(os.comparator),this.cc=new Map,this.ac=new $a,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Eu(t,e){const n=Bu(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const t=await lc(n.localStore,Rr(e));n.isPrimaryClient&&Rc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Tu(n,e,i,"current"===r,t.resumeToken)}return s}async function Tu(t,e,n,i,s){t._c=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.$i&&(s=await dc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Mu(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const r=await dc(t.localStore,e,!0),o=new vu(e,r.Hi),a=o.Wu(r.documents),c=jo.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Mu(t,n,u.Xu);const l=new wu(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Iu(t,e){const n=Ui(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter((t=>!Pr(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await hc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Oc(n.remoteStore,i.targetId),Pu(n,i.targetId)})).catch(ps)):(Pu(n,i.targetId),await hc(n.localStore,i.targetId,!0))}async function Su(t,e,n){const i=Hu(t);try{const t=await function(t,e){const n=Ui(t),i=ts.now(),s=e.reduce(((t,e)=>t.add(e.key)),Mo());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ko(),c=Mo();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=lo(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new po(t.key,e,nr(e.value.mapValue),so.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:xo(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new bs(Xi)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Vu(i,t.changes),await $c(i.remoteStore)}catch(t){const e=ru(t,"Failed to persist write");n.reject(e)}}async function ku(t,e){const n=Ui(t);try{const t=await ac(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(Fi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?Fi(i.nc):t.removedDocuments.size>0&&(Fi(i.nc),i.nc=!1))})),await Vu(n,t,e)}catch(t){await ps(t)}}function Nu(t,e,n){const i=Ui(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const s=i.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Ui(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.bu(e)&&(i=!0)})),i&&gu(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Au(t,e,n){const i=Ui(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let t=new bs(os.comparator);t=t.insert(r,ir.newNoDocument(r,es.min()));const n=Mo().add(r),s=new Vo(es.min(),new Map,new Ts(Xi),t,n);await ku(i,s),i.uc=i.uc.remove(r),i.cc.delete(e),Uu(i)}else await hc(i.localStore,e,!1).then((()=>Pu(i,e,n))).catch(ps)}async function xu(t,e){const n=Ui(t),i=e.batch.batchId;try{const t=await rc(n.localStore,e);Ou(n,i,null),Ru(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Vu(n,t)}catch(t){await ps(t)}}async function Du(t,e,n){const i=Ui(t);try{const t=await function(t,e){const n=Ui(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fi(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Ou(i,e,n),Ru(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Vu(i,t)}catch(n){await ps(n)}}function Ru(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Ou(t,e,n){const i=Ui(t);let s=i.hc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.hc[i.currentUser.toKey()]=s}}function Pu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Lu(t,e)}))}function Lu(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Oc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Uu(t))}function Mu(t,e,n){for(const i of n)i instanceof yu?(t.ac.addReference(i.key,e),Fu(t,i)):i instanceof _u?(Ri("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||Lu(t,i.key)):Mi()}function Fu(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(Ri("SyncEngine","New document in limbo: "+n),t.oc.add(i),Uu(t))}function Uu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new os(is.fromString(e)),i=t.fc.next();t.cc.set(i,new bu(n)),t.uc=t.uc.insert(n,i),Rc(t.remoteStore,new Ra(Rr(Sr(n.path)),i,2,ys.at))}}async function Vu(t,e,n){const i=Ui(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=tc.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.sc.Wo(s),await async function(t,e){const n=Ui(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gs.forEach(e,(e=>gs.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>gs.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ms(t))throw t;Ri("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ui.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(t,s)}}}(i.localStore,r))}async function ju(t,e){const n=Ui(t);if(!n.currentUser.isEqual(e)){Ri("SyncEngine","User change. New user:",e.toKey());const t=await sc(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new ji(Vi.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vu(n,t.ji)}}function qu(t,e){const n=Ui(t),i=n.cc.get(e);if(i&&i.nc)return Mo().add(i.key);{let t=Mo();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Bu(t){const e=Ui(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ku.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Au.bind(null,e),e.sc.Wo=fu.bind(null,e.eventManager),e.sc.wc=pu.bind(null,e.eventManager),e}function Hu(t){const e=Ui(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Du.bind(null,e),e}class Wu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Cc(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return ic(this.persistence,new ec,t.initialUser,this.It)}yc(t){return new Ja(Za.Bs,this.It)}gc(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $u{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ju.bind(null,this.syncEngine),await eu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lu}createDatastore(t){const e=Cc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new wc(i));var i;return function(t,e,n,i){return new kc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Nu(this.syncEngine,t,0),r=yc.C()?new yc:new mc,new Ac(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Cu(t,e,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ui(t);Ri("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Dc(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t,e,n){if(!n)throw new ji(Vi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gu(t,e,n,i){if(!0===e&&!0===i)throw new ji(Vi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zu(t){if(!os.isDocumentKey(t))throw new ji(Vi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(os.isDocumentKey(t))throw new ji(Vi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mi()}function Ju(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ji(Vi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new ji(Vi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xu=new Map;class Zu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ji(Vi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ji(Vi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Gu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ji(Vi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ji(Vi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hi;switch(t.type){case"gapi":const e=t.client;return new Gi(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ji(Vi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xu.get(t);e&&(Ri("ComponentProvider","Removing Datastore"),Xu.delete(t),e.terminate())}(this),Promise.resolve()}}function el(t,e,n,i={}){var s;const r=(t=Ju(t,tl))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Pi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ni.MOCK_USER;else{e=(0,a.Sg)(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new ji(Vi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ni(r)}t._authCredentials=new Wi(new Bi(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nl(this.firestore,t,this._key)}}class il{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new il(this.firestore,t,this._query)}}class sl extends il{constructor(t,e,n){super(t,e,Sr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nl(this.firestore,null,new os(t))}withConverter(t){return new sl(this.firestore,t,this._path)}}function rl(t,e,...n){if(t=(0,a.m9)(t),Ku("collection","path",e),t instanceof tl){const i=is.fromString(e,...n);return Qu(i),new sl(t,null,i)}{if(!(t instanceof nl||t instanceof sl))throw new ji(Vi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(is.fromString(e,...n));return Qu(i),new sl(t.firestore,null,i)}}function ol(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Ji.R()),Ku("doc","path",e),t instanceof tl){const i=is.fromString(e,...n);return zu(i),new nl(t,null,new os(i))}{if(!(t instanceof nl||t instanceof sl))throw new ji(Vi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(is.fromString(e,...n));return zu(i),new nl(t.firestore,t instanceof sl?t.converter:null,new os(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Oi("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ni.UNAUTHENTICATED,this.clientId=Ji.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ri("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ri("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ji(Vi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ru(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),Ri("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await sc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ll(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hl(t);Ri("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>tu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>tu(e.remoteStore,n))),t.onlineComponents=e}async function hl(t){return t.offlineComponents||(Ri("FirestoreClient","Using default OfflineComponentProvider"),await ul(t,new Wu)),t.offlineComponents}async function dl(t){return t.onlineComponents||(Ri("FirestoreClient","Using default OnlineComponentProvider"),await ll(t,new $u)),t.onlineComponents}function fl(t){return dl(t).then((t=>t.syncEngine))}async function pl(t){const e=await dl(t),n=e.eventManager;return n.onListen=Eu.bind(null,e.syncEngine),n.onUnlisten=Iu.bind(null,e.syncEngine),n}class gl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ec(this,"async_queue_retry"),this.Wc=()=>{const t=bc();t&&Ri("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=bc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=bc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new qi;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(C){if(!ms(C))throw C;Ri("AsyncQueue","Operation failed with retryable error: "+C)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Oi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=su.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(i),i}zc(){this.Kc&&Mi()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}function ml(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class yl extends tl{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new gl,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wl(this),this._firestoreClient.terminate()}}function _l(t,e){const n="object"==typeof t?t:(0,s.Mq)(),i="string"==typeof t?t:e||"(default)",r=(0,s.qX)(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=(0,a.P0)("firestore");t&&el(r,...t)}return r}function vl(t){return t._firestoreClient||wl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wl(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Ls(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cl(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bl(ks.fromBase64String(t))}catch(t){throw new ji(Vi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new bl(ks.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ji(Vi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rs(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ji(Vi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ji(Vi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xi(this._lat,t._lat)||Xi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=/^__.*__$/;class Sl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new po(t,this.data,this.fieldMask,e,this.fieldTransforms):new fo(t,this.data,e,this.fieldTransforms)}}class kl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new po(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mi()}}class Al{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Al(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Hl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Nl(this.sa)&&Il.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class xl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Cc(t)}da(t,e,n,i=!1){return new Al({sa:t,methodName:e,fa:n,path:rs.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=Cc(t._databaseId);return new xl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rl(t,e,n,i,s,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,s);Vl("Data must be an object, but it was:",o,i);const a=Fl(i,o);let c,u;if(r.merge)c=new Ss(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=jl(e,i,n);if(!o.contains(s))throw new ji(Vi.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Wl(t,s)||t.push(s)}c=new Ss(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Sl(new er(a),c,u)}class Ol extends El{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ol}}function Pl(t,e,n,i){const s=t.da(1,e,n);Vl("Data must be an object, but it was:",s,i);const r=[],o=er.empty();vs(i,((t,i)=>{const c=Bl(e,t,n);i=(0,a.m9)(i);const u=s.ca(c);if(i instanceof Ol)r.push(c);else{const t=Ml(i,u);null!=t&&(r.push(c),o.set(c,t))}}));const c=new Ss(r);return new kl(o,c,s.fieldTransforms)}function Ll(t,e,n,i,s,r){const o=t.da(1,e,n),c=[jl(e,i,n)],u=[s];if(r.length%2!=0)throw new ji(Vi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)c.push(jl(e,r[a])),u.push(r[a+1]);const l=[],h=er.empty();for(let f=c.length-1;f>=0;--f)if(!Wl(l,c[f])){const t=c[f];let e=u[f];e=(0,a.m9)(e);const n=o.ca(t);if(e instanceof Ol)l.push(t);else{const i=Ml(e,n);null!=i&&(l.push(t),h.set(t,i))}}const d=new Ss(l);return new kl(h,d,o.fieldTransforms)}function Ml(t,e){if(Ul(t=(0,a.m9)(t)))return Vl("Unsupported field value:",e,t),Fl(t,e);if(t instanceof El)return function(t,e){if(!Nl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Ml(s,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hr(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ts.fromDate(t);return{timestampValue:Jo(e.It,n)}}if(t instanceof ts){const n=new ts(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Jo(e.It,n)}}if(t instanceof Tl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bl)return{bytesValue:Xo(e.It,t._byteString)};if(t instanceof nl){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Yu(t)}`)}(t,e)}function Fl(t,e){const n={};return ws(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,((t,i)=>{const s=Ml(i,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ul(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ts||t instanceof Tl||t instanceof bl||t instanceof nl||t instanceof El)}function Vl(t,e,n){if(!Ul(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Yu(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function jl(t,e,n){if((e=(0,a.m9)(e))instanceof Cl)return e._internalPath;if("string"==typeof e)return Bl(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ql=new RegExp("[~\\*/\\[\\]]");function Bl(t,e,n){if(e.search(ql)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cl(...e.split("."))._internalPath}catch(i){throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new ji(Vi.INVALID_ARGUMENT,a+t+c)}function Wl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Kl extends $l{data(){return super.data()}}function Gl(t,e){return"string"==typeof e?Bl(t,e):e instanceof Cl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ji(Vi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{convertValue(t,e="none"){switch(qs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ds(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mi()}}convertObject(t,e){const n={};return vs(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Tl(xs(t.latitude),xs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Os(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ps(t));default:return null}}convertTimestamp(t){const e=As(t);return new ts(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=is.fromString(t);Fi(Ia(n));const i=new Ms(n.get(1),n.get(3)),s=new os(n.popFirst(5));return i.isEqual(e)||Oi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xl extends $l{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Zl extends Xl{data(t={}){return super.data(t)}}class th{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Jl(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Zl(this._firestore,this._userDataWriter,n.key,n,new Jl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ji(Vi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Zl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Jl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Zl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Jl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:eh(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function eh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mi()}}class nh extends Ql{constructor(t){super(),this.firestore=t}convertBytes(t){return new bl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nl(this.firestore,null,e)}}function ih(t,e,n,...i){t=Ju(t,nl);const s=Ju(t.firestore,yl),r=Dl(s);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Cl?Ll(r,"updateDoc",t._key,e,n,i):Pl(r,"updateDoc",t._key,e),ah(s,[o.toMutation(t._key,so.exists(!0))])}function sh(t){return ah(Ju(t.firestore,yl),[new _o(t._key,so.none())])}function rh(t,e){const n=Ju(t.firestore,yl),i=ol(t),s=Yl(t.converter,e);return ah(n,[Rl(Dl(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,so.exists(!1))]).then((()=>i))}function oh(t,...e){var n,i,s;t=(0,a.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ml(e[o])||(r=e[o],o++);const c={includeMetadataChanges:r.includeMetadataChanges};if(ml(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,l,h;if(t instanceof nl)l=Ju(t.firestore,yl),h=Sr(t._key.path),u={next:n=>{e[o]&&e[o](ch(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Ju(t,il);l=Ju(n.firestore,yl),h=n._query;const i=new nh(l);u={next:t=>{e[o]&&e[o](new th(l,i,n,t))},error:e[o+1],complete:e[o+2]},zl(t._query)}return function(t,e,n,i){const s=new al(i),r=new mu(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>hu(await pl(t),r))),()=>{s.bc(),t.asyncQueue.enqueueAndForget((async()=>du(await pl(t),r)))}}(vl(l),h,c,u)}function ah(t,e){return function(t,e){const n=new qi;return t.asyncQueue.enqueueAndForget((async()=>Su(await fl(t),e,n))),n.promise}(vl(t),e)}function ch(t,e,n){const i=n.docs.get(e._key),s=new nh(t);return new Xl(t,s,e._key,i,new Jl(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Ai=t}(s.Jn),(0,s.Xd)(new r.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new yl(new $i(t.getProvider("auth-internal")),new Qi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ji(Vi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(ki,"3.7.3",t),(0,s.KN)(ki,"3.7.3","esm2017")}()},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return A},DV:function(){return B},GJ:function(){return j},L:function(){return l},LL:function(){return O},P0:function(){return k},Sg:function(){return x},UI:function(){return W},US:function(){return c},Wl:function(){return F},Yr:function(){return _},ZR:function(){return R},aH:function(){return N},b$:function(){return y},cI:function(){return M},dS:function(){return Y},eu:function(){return w},g5:function(){return r},gK:function(){return Q},gQ:function(){return z},h$:function(){return u},hl:function(){return v},hu:function(){return s},m9:function(){return X},p$:function(){return d},r3:function(){return q},uI:function(){return m},ug:function(){return J},vZ:function(){return $},w9:function(){return V},xO:function(){return G},xb:function(){return H}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(t,e){if(!t)throw r(e)},r=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},a=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length,o=r?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==l){const t=c<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){const e=o(t);return c.encodeByteArray(e,!0)},l=function(t){return u(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return f(void 0,t)}function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&p(n)&&(t[n]=f(t[n],e[n]));return t}function p(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function m(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function _(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function v(){return"object"===typeof indexedDB}function w(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function b(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=()=>b().__FIREBASE_DEFAULTS__,E=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/quotes-app/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},T=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&h(t[1]);return e&&JSON.parse(e)},I=()=>{try{return C()||E()||T()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},S=t=>{var e,n;return null===(n=null===(e=I())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},k=t=>{const e=S(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},N=()=>{var t;return null===(t=I())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?P(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new R(i,o,n);return a}}function P(t,e){return t.replace(L,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return JSON.parse(t)}function F(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=M(h(r[0])||""),n=M(h(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:e,claims:n,data:i,signature:s}},V=function(t){const e=U(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},j=function(t){const e=U(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function H(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function W(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(K(n)&&K(r)){if(!$(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function K(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let l=0;l<16;l++)n[l]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let l=0;l<16;l++)n[l]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let l=16;l<80;l++){const t=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):l<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+u+s+n[l]&4294967295;u=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<e){if(0===r)while(i<=n)this.compress_(t,i),i+=this.blockSize;if("string"===typeof t){while(i<e)if(s[r]=t.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<e)if(s[r]=t[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[i]>>e&255,++n;return t}}function Q(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const e=r-55296;i++,s(i<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(i)-56320;r=65536+(e<<10)+n}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},J=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){return t&&t._delegate?t._delegate:t}},2262:function(t,e,n){"use strict";n.d(e,{B:function(){return o},Bj:function(){return r},Fl:function(){return qt},IU:function(){return At},Jd:function(){return T},PG:function(){return It},Um:function(){return Ct},WL:function(){return Ut},X$:function(){return N},X3:function(){return Nt},Xl:function(){return xt},dq:function(){return Lt},j:function(){return S},lk:function(){return I},qj:function(){return bt},qq:function(){return w},yT:function(){return kt}});var i=n(3577);let s;class r{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function o(t){return new r(t)}function a(t,e=s){e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];u(s)&&!l(s)?s.delete(t):e[n++]=s,s.w&=~g,s.n&=~g}e.length=n}},f=new WeakMap;let p=0,g=1;const m=30;let y;const _=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=C;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,C=!0,g=1<<++p,p<=m?h(this):b(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,y=this.parent,C=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let C=!0;const E=[];function T(){E.push(C),C=!1}function I(){const t=E.pop();C=void 0===t||t}function S(t,e,n){if(C&&y){let e=f.get(t);e||f.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=c());const s=void 0;k(i,s)}}function k(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function N(t,e,n,s,r,o){const a=f.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,i.kJ)(t)){const t=(0,i.He)(s);a.forEach(((e,n)=>{("length"===n||n>=t)&&u.push(e)}))}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,i.kJ)(t)?(0,i.S0)(n)&&u.push(a.get("length")):(u.push(a.get(_)),(0,i._N)(t)&&u.push(a.get(v)));break;case"delete":(0,i.kJ)(t)||(u.push(a.get(_)),(0,i._N)(t)&&u.push(a.get(v)));break;case"set":(0,i._N)(t)&&u.push(a.get(_));break}if(1===u.length)u[0]&&A(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);A(c(t))}}function A(t,e){const n=(0,i.kJ)(t)?t:[...t];for(const i of n)i.computed&&x(i,e);for(const i of n)i.computed||x(i,e)}function x(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const D=(0,i.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.yk)),O=U(),P=U(!1,!0),L=U(!0),M=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(At)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=At(this)[e].apply(this,t);return I(),n}})),t}function U(t=!1,e=!1){return function(n,s,r){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&r===(t?e?_t:yt:e?mt:gt).get(n))return n;const o=(0,i.kJ)(n);if(!t&&o&&(0,i.RI)(M,s))return Reflect.get(M,s,r);const a=Reflect.get(n,s,r);return((0,i.yk)(s)?R.has(s):D(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&(0,i.S0)(s)?a:a.value:(0,i.Kn)(a)?t?Et(a):bt(a):a)}}const V=q(),j=q(!0);function q(t=!1){return function(e,n,s,r){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&(kt(s)||St(s)||(o=At(o),s=At(s)),!(0,i.kJ)(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=(0,i.kJ)(e)&&(0,i.S0)(n)?Number(n)<e.length:(0,i.RI)(e,n),c=Reflect.set(e,n,s,r);return e===At(r)&&(a?(0,i.aU)(s,o)&&N(e,"set",n,s,o):N(e,"add",n,s)),c}}function B(t,e){const n=(0,i.RI)(t,e),s=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&N(t,"delete",e,void 0,s),r}function H(t,e){const n=Reflect.has(t,e);return(0,i.yk)(e)&&R.has(e)||S(t,"has",e),n}function W(t){return S(t,"iterate",(0,i.kJ)(t)?"length":_),Reflect.ownKeys(t)}const $={get:O,set:V,deleteProperty:B,has:H,ownKeys:W},K={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},G=(0,i.l7)({},$,{get:P,set:j}),z=t=>t,Q=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,i=!1){t=t["__v_raw"];const s=At(t),r=At(e);n||(e!==r&&S(s,"get",e),S(s,"get",r));const{has:o}=Q(s),a=i?z:n?Rt:Dt;return o.call(s,e)?a(t.get(e)):o.call(s,r)?a(t.get(r)):void(t!==s&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],i=At(n),s=At(t);return e||(t!==s&&S(i,"has",t),S(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function X(t,e=!1){return t=t["__v_raw"],!e&&S(At(t),"iterate",_),Reflect.get(t,"size",t)}function Z(t){t=At(t);const e=At(this),n=Q(e),i=n.has.call(e,t);return i||(e.add(t),N(e,"add",t,t)),this}function tt(t,e){e=At(e);const n=At(this),{has:s,get:r}=Q(n);let o=s.call(n,t);o||(t=At(t),o=s.call(n,t));const a=r.call(n,t);return n.set(t,e),o?(0,i.aU)(e,a)&&N(n,"set",t,e,a):N(n,"add",t,e),this}function et(t){const e=At(this),{has:n,get:i}=Q(e);let s=n.call(e,t);s||(t=At(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&N(e,"delete",t,void 0,r),o}function nt(){const t=At(this),e=0!==t.size,n=void 0,i=t.clear();return e&&N(t,"clear",void 0,void 0,n),i}function it(t,e){return function(n,i){const s=this,r=s["__v_raw"],o=At(r),a=e?z:t?Rt:Dt;return!t&&S(o,"iterate",_),r.forEach(((t,e)=>n.call(i,a(t),a(e),s)))}}function st(t,e,n){return function(...s){const r=this["__v_raw"],o=At(r),a=(0,i._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=r[t](...s),h=n?z:e?Rt:Dt;return!e&&S(o,"iterate",u?v:_),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function ot(){const t={get(t){return Y(this,t)},get size(){return X(this)},has:J,add:Z,set:tt,delete:et,clear:nt,forEach:it(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return X(this)},has:J,add:Z,set:tt,delete:et,clear:nt,forEach:it(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:it(!0,!1)},i={get(t){return Y(this,t,!0,!0)},get size(){return X(this,!0)},has(t){return J.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:it(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=st(s,!1,!1),n[s]=st(s,!0,!1),e[s]=st(s,!1,!0),i[s]=st(s,!0,!0)})),[t,n,e,i]}const[at,ct,ut,lt]=ot();function ht(t,e){const n=e?t?lt:ut:t?ct:at;return(e,s,r)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,i.RI)(n,s)&&s in e?n:e,s,r)}const dt={get:ht(!1,!1)},ft={get:ht(!1,!0)},pt={get:ht(!0,!1)};const gt=new WeakMap,mt=new WeakMap,yt=new WeakMap,_t=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,i.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,$,dt,gt)}function Ct(t){return Tt(t,!1,G,ft,mt)}function Et(t){return Tt(t,!0,K,pt,yt)}function Tt(t,e,n,s,r){if(!(0,i.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=r.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return r.set(t,c),c}function It(t){return St(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function kt(t){return!(!t||!t["__v_isShallow"])}function Nt(t){return It(t)||St(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function xt(t){return(0,i.Nj)(t,"__v_skip",!0),t}const Dt=t=>(0,i.Kn)(t)?bt(t):t,Rt=t=>(0,i.Kn)(t)?Et(t):t;function Ot(t){C&&y&&(t=At(t),k(t.dep||(t.dep=c())))}function Pt(t,e){t=At(t),t.dep&&A(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Lt(t)?t.value:t}const Ft={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Ut(t){return It(t)?t:new Proxy(t,Ft)}var Vt;class jt{constructor(t,e,n,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Vt]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Pt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const t=At(this);return Ot(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let s,r;const o=(0,i.mf)(t);o?(s=t,r=i.dG):(s=t.get,r=t.set);const a=new jt(s,r,o||!r,n);return a}Vt="__v_isReadonly"},6252:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},FN:function(){return ln},Fl:function(){return Sn},HY:function(){return Ae},Ko:function(){return Mt},P$:function(){return et},Q6:function(){return at},U2:function(){return it},Us:function(){return Ee},Wm:function(){return ze},Y8:function(){return X},YP:function(){return G},_:function(){return Ge},f3:function(){return $},h:function(){return kn},iD:function(){return je},ic:function(){return Ct},j4:function(){return qe},kq:function(){return Ze},nK:function(){return ot},up:function(){return Rt},w5:function(){return L},wg:function(){return Le},wy:function(){return At}});var i=n(2262),s=n(3577);function r(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){a(r,e,n)}return s}function o(t,e,n,i){if((0,s.mf)(t)){const o=r(t,e,n,i);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,i));return c}function a(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,o=n;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;i=i.parent}const a=e.appContext.config.errorHandler;if(a)return void r(a,null,10,[t,s,o])}c(t,n,s,i)}function c(t,e,n,i=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function _(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function v(t){let e=d+1,n=h.length;while(e<n){const i=e+n>>>1,s=S(h[i]);s<t?e=i+1:n=i}return e}function w(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(v(t.id),0,t),b())}function b(){u||l||(l=!0,y=m.then(N))}function C(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function E(t){(0,s.kJ)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||f.push(t),b()}function T(t,e=(u?d+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function I(t){if(f.length){const t=[...new Set(f)];if(f.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>S(t)-S(e))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=t=>null==t.id?1/0:t.id,k=(t,e)=>{const n=S(t)-S(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function N(t){l=!1,u=!0,h.sort(k);s.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&r(t,null,14)}}finally{d=0,h.length=0,I(t),u=!1,y=null,(h.length||f.length)&&N(t)}}new Set;new Map;function A(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||s.kT;let r=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in i){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=i[t]||s.kT;o&&(r=n.map((t=>(0,s.HD)(t)?t.trim():t))),e&&(r=n.map(s.He))}let u;let l=i[u=(0,s.hR)(e)]||i[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=i[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,r);const h=i[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,r)}}function x(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(void 0!==r)return r;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const i=t=>{const n=x(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),(0,s.Kn)(t)&&i.set(t,a),a):((0,s.Kn)(t)&&i.set(t,null),null)}function D(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let R=null,O=null;function P(t){const e=R;return R=t,O=t&&t.type.__scopeId||null,e}function L(t,e=R,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Ue(-1);const s=P(e);let r;try{r=t(...n)}finally{P(s),i._d&&Ue(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function M(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let _,v;const w=P(t);try{if(4&n.shapeFlag){const t=r||i;_=tn(d.call(t,t,f,o,g,p,m)),v=l}else{const t=e;0,_=tn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),v=e.props?l:F(l)}}catch(C){Oe.length=0,a(C,t,1),_=ze(De)}let b=_;if(v&&!1!==y){const t=Object.keys(v),{shapeFlag:e}=b;t.length&&7&e&&(c&&t.some(s.tR)&&(v=U(v,c)),b=Je(b,v))}return n.dirs&&(b=Je(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),_=b,P(w),_}const F=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},U=(t,e)=>{const n={};for(const i in t)(0,s.tR)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function V(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||i!==o&&(i?!o||j(i,o,u):!!o);if(1024&c)return!0;if(16&c)return i?j(i,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!D(u,n))return!0}}return!1}function j(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!D(n,r))return!0}return!1}function q({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const B=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):E(t)}function W(t,e){if(un){let n=un.provides;const i=un.parent&&un.parent.provides;i===n&&(n=un.provides=Object.create(i)),n[t]=e}else 0}function $(t,e,n=!1){const i=un||R;if(i){const r=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(i.proxy):e}else 0}const K={};function G(t,e,n){return z(t,e,n)}function z(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=un;let d,f,p=!1,g=!1;if((0,i.dq)(t)?(d=()=>t.value,p=(0,i.yT)(t)):(0,i.PG)(t)?(d=()=>t,a=!0):(0,s.kJ)(t)?(g=!0,p=t.some((t=>(0,i.PG)(t)||(0,i.yT)(t))),d=()=>t.map((t=>(0,i.dq)(t)?t.value:(0,i.PG)(t)?J(t):(0,s.mf)(t)?r(t,h,2):void 0))):d=(0,s.mf)(t)?e?()=>r(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[y])}:s.dG,e&&a){const t=d;d=()=>J(t())}let m,y=t=>{f=C.onStop=()=>{r(t,h,4)}};if(mn){if(y=s.dG,e?n&&o(e,h,3,[d(),g?[]:void 0,y]):d(),"sync"!==c)return s.dG;{const t=An();m=t.__watcherHandles||(t.__watcherHandles=[])}}let _=g?new Array(t.length).fill(K):K;const v=()=>{if(C.active)if(e){const t=C.run();(a||p||(g?t.some(((t,e)=>(0,s.aU)(t,_[e]))):(0,s.aU)(t,_)))&&(f&&f(),o(e,h,3,[t,_===K?void 0:g&&_[0]===K?[]:_,y]),_=t)}else C.run()};let b;v.allowRecurse=!!e,"sync"===c?b=v:"post"===c?b=()=>Ce(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),b=()=>w(v));const C=new i.qq(d,b);e?n?v():_=C.run():"post"===c?Ce(C.run.bind(C),h&&h.suspense):C.run();const E=()=>{C.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,C)};return m&&m.push(E),E}function Q(t,e,n){const i=this.proxy,r=(0,s.HD)(t)?t.includes(".")?Y(i,t):()=>i[t]:t.bind(i,i);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=un;hn(this);const c=z(r,o.bind(i),n);return a?hn(a):dn(),c}function Y(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function J(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,i.dq)(t))J(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)J(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{J(t,e)}));else if((0,s.PO)(t))for(const n in t)J(t[n],e);return t}function X(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wt((()=>{t.isMounted=!0})),Et((()=>{t.isUnmounting=!0})),t}const Z=[Function,Array],tt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(t,{slots:e}){const n=ln(),s=X();let r;return()=>{const o=e.default&&at(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==De){0,a=e,t=!0;break}}const c=(0,i.IU)(t),{mode:u}=c;if(s.isLeaving)return st(a);const l=rt(a);if(!l)return st(a);const h=it(l,c,s,n);ot(l,h);const d=n.subTree,f=d&&rt(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===r?r=t:t!==r&&(r=t,p=!0)}if(f&&f.type!==De&&(!He(l,f)||p)){const t=it(f,c,s,n);if(ot(f,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,!1!==n.update.active&&n.update()},st(a);"in-out"===u&&l.type!==De&&(t.delayLeave=(t,e,n)=>{const i=nt(s,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},et=tt;function nt(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function it(t,e,n,i){const{appear:r,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:_,onAfterAppear:v,onAppearCancelled:w}=e,b=String(t.key),C=nt(n,t),E=(t,e)=>{t&&o(t,i,9,e)},T=(t,e)=>{const n=e[1];E(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let i=u;if(!n.isMounted){if(!r)return;i=y||u}e._leaveCb&&e._leaveCb(!0);const s=C[b];s&&He(t,s)&&s.el._leaveCb&&s.el._leaveCb(),E(i,[e])},enter(t){let e=l,i=h,s=d;if(!n.isMounted){if(!r)return;e=_||l,i=v||h,s=w||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,E(e?s:i,[t]),I.delayedLeave&&I.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,i){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return i();E(f,[e]);let r=!1;const o=e._leaveCb=n=>{r||(r=!0,i(),E(n?m:g,[e]),e._leaveCb=void 0,C[s]===t&&delete C[s])};C[s]=t,p?T(p,[e,o]):o()},clone(t){return it(t,e,n,i)}};return I}function st(t){if(ut(t))return t=Je(t),t.children=null,t}function rt(t){return ut(t)?t.children?t.children[0]:void 0:t}function ot(t,e){6&t.shapeFlag&&t.component?ot(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function at(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:r);o.type===Ae?(128&o.patchFlag&&s++,i=i.concat(at(o.children,e,a))):(e||o.type!==De)&&i.push(null!=a?Je(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const ct=t=>!!t.type.__asyncLoader;const ut=t=>t.type.__isKeepAlive;RegExp,RegExp;function lt(t,e){return(0,s.kJ)(t)?t.some((t=>lt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function ht(t,e){ft(t,"a",e)}function dt(t,e){ft(t,"da",e)}function ft(t,e,n=un){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(yt(e,i,n),n){let t=n.parent;while(t&&t.parent)ut(t.parent.vnode)&&pt(i,e,n,t),t=t.parent}}function pt(t,e,n,i){const r=yt(e,t,i,!0);Tt((()=>{(0,s.Od)(i[e],r)}),n)}function gt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function mt(t){return 128&t.shapeFlag?t.ssContent:t}function yt(t,e,n=un,s=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,i.Jd)(),hn(n);const r=o(e,n,t,s);return dn(),(0,i.lk)(),r});return s?r.unshift(a):r.push(a),a}}const _t=t=>(e,n=un)=>(!mn||"sp"===t)&&yt(t,((...t)=>e(...t)),n),vt=_t("bm"),wt=_t("m"),bt=_t("bu"),Ct=_t("u"),Et=_t("bum"),Tt=_t("um"),It=_t("sp"),St=_t("rtg"),kt=_t("rtc");function Nt(t,e=un){yt("ec",t,e)}function At(t,e){const n=R;if(null===n)return t;const i=En(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];t&&((0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&J(n),r.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function xt(t,e,n,s){const r=t.dirs,a=e&&e.dirs;for(let c=0;c<r.length;c++){const u=r[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,i.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,i.lk)())}}const Dt="components";function Rt(t,e){return Pt(Dt,t,!0,e)||t}const Ot=Symbol();function Pt(t,e,n=!0,i=!1){const r=R||un;if(r){const n=r.type;if(t===Dt){const t=Tn(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Lt(r[t]||n[t],e)||Lt(r.appContext[t],e);return!o&&i?n:o}}function Lt(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function Mt(t,e,n,i){let r;const o=n&&n[i];if((0,s.kJ)(t)||(0,s.HD)(t)){r=new Array(t.length);for(let n=0,i=t.length;n<i;n++)r[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,r=new Array(t);for(let n=0;n<t;n++)r[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])r=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);r=new Array(n.length);for(let i=0,s=n.length;i<s;i++){const s=n[i];r[i]=e(t[s],s,i,o&&o[i])}}else r=[];return n&&(n[i]=r),r}const Ft=t=>t?fn(t)?En(t)||t.proxy:Ft(t.parent):null,Ut=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ft(t.parent),$root:t=>Ft(t.root),$emit:t=>t.emit,$options:t=>Kt(t),$forceUpdate:t=>t.f||(t.f=()=>w(t.update)),$nextTick:t=>t.n||(t.n=_.bind(t.proxy)),$watch:t=>Q.bind(t)}),Vt=(t,e)=>t!==s.kT&&!t.__isScriptSetup&&(0,s.RI)(t,e),jt={get({_:t},e){const{ctx:n,setupState:r,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return r[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Vt(r,e))return c[e]=1,r[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];qt&&(c[e]=0)}}const d=Ut[e];let f,p;return d?("$attrs"===e&&(0,i.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return Vt(r,e)?(r[e]=n,!0):i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||Vt(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(i,a)||(0,s.RI)(Ut,a)||(0,s.RI)(r.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qt=!0;function Bt(t){const e=Kt(t),n=t.proxy,r=t.ctx;qt=!1,e.beforeCreate&&Wt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:_,beforeDestroy:v,beforeUnmount:w,destroyed:b,unmounted:C,render:E,renderTracked:T,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:N,inheritAttrs:A,components:x,directives:D,filters:R}=e,O=null;if(h&&Ht(h,r,O,t.appContext.config.unwrapInjectedRef),c)for(const i in c){const t=c[i];(0,s.mf)(t)&&(r[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,i.qj)(e))}if(qt=!0,a)for(const i in a){const t=a[i],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Sn({get:e,set:o});Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const i in u)$t(u[i],r,n,i);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{W(e,t[e])}))}function P(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Wt(d,t,"c"),P(vt,f),P(wt,p),P(bt,g),P(Ct,m),P(ht,y),P(dt,_),P(Nt,S),P(kt,T),P(St,I),P(Et,w),P(Tt,C),P(It,k),(0,s.kJ)(N))if(N.length){const e=t.exposed||(t.exposed={});N.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});E&&t.render===s.dG&&(t.render=E),null!=A&&(t.inheritAttrs=A),x&&(t.components=x),D&&(t.directives=D)}function Ht(t,e,n=s.dG,r=!1){(0,s.kJ)(t)&&(t=Jt(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?$(n.from||o,n.default,!0):$(n.from||o):$(n),(0,i.dq)(a)&&r?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Wt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function $t(t,e,n,i){const r=i.includes(".")?Y(n,i):()=>n[i];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&G(r,n)}else if((0,s.mf)(t))G(r,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>$t(t,e,n,i)));else{const i=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(i)&&G(r,i,t)}else 0}function Kt(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:r.length||n||i?(u={},r.length&&r.forEach((t=>Gt(u,t,a,!0))),Gt(u,e,a)):u=e,(0,s.Kn)(e)&&o.set(e,u),u}function Gt(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Gt(t,r,n,!0),s&&s.forEach((e=>Gt(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=zt[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const zt={data:Qt,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Zt,directives:Zt,watch:te,provide:Qt,inject:Yt};function Qt(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function Yt(t,e){return Zt(Jt(t),Jt(e))}function Jt(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function te(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function ee(t,e,n,r=!1){const o={},a={};(0,s.Nj)(a,We,1),t.propsDefaults=Object.create(null),ie(t,e,o,a);for(const i in t.propsOptions[0])i in o||(o[i]=void 0);n?t.props=r?o:(0,i.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ne(t,e,n,r){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,i.IU)(o),[l]=t.propsOptions;let h=!1;if(!(r||c>0)||16&c){let i;ie(t,e,o,a)&&(h=!0);for(const r in u)e&&((0,s.RI)(e,r)||(i=(0,s.rs)(r))!==r&&(0,s.RI)(e,i))||(l?!n||void 0===n[r]&&void 0===n[i]||(o[r]=se(l,u,r,void 0,t,!0)):delete o[r]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let r=n[i];if(D(t.emitsOptions,r))continue;const c=e[r];if(l)if((0,s.RI)(a,r))c!==a[r]&&(a[r]=c,h=!0);else{const e=(0,s._A)(r);o[e]=se(l,u,e,c,t,!1)}else c!==a[r]&&(a[r]=c,h=!0)}}h&&(0,i.X$)(t,"set","$attrs")}function ie(t,e,n,r){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let i in e){if((0,s.Gg)(i))continue;const l=e[i];let h;o&&(0,s.RI)(o,h=(0,s._A)(i))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:D(t.emitsOptions,i)||i in r&&l===r[i]||(r[i]=l,u=!0)}if(a){const e=(0,i.IU)(n),r=c||s.kT;for(let i=0;i<a.length;i++){const c=a[i];n[c]=se(o,e,c,r[c],t,!(0,s.RI)(r,c))}}return u}function se(t,e,n,i,r,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=r;n in s?i=s[n]:(hn(r),i=s[n]=t.call(null,e),dn())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,s.rs)(n)||(i=!0))}return i}function re(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const i=t=>{u=!0;const[n,i]=re(t,e,!0);(0,s.l7)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return(0,s.Kn)(t)&&i.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);oe(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(oe(e)){const n=o[t],i=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:Object.assign({},n);if(i){const t=ue(Boolean,i.type),n=ue(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||(0,s.RI)(i,"default"))&&c.push(e)}}}}const l=[a,c];return(0,s.Kn)(t)&&i.set(t,l),l}function oe(t){return"$"!==t[0]}function ae(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ce(t,e){return ae(t)===ae(e)}function ue(t,e){return(0,s.kJ)(e)?e.findIndex((e=>ce(e,t))):(0,s.mf)(e)&&ce(e,t)?0:-1}const le=t=>"_"===t[0]||"$stable"===t,he=t=>(0,s.kJ)(t)?t.map(tn):[tn(t)],de=(t,e,n)=>{if(e._n)return e;const i=L(((...t)=>he(e(...t))),n);return i._c=!1,i},fe=(t,e,n)=>{const i=t._ctx;for(const r in t){if(le(r))continue;const n=t[r];if((0,s.mf)(n))e[r]=de(r,n,i);else if(null!=n){0;const t=he(n);e[r]=()=>t}}},pe=(t,e)=>{const n=he(e);t.slots.default=()=>n},ge=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,i.IU)(e),(0,s.Nj)(e,"_",n)):fe(e,t.slots={})}else t.slots={},e&&pe(t,e);(0,s.Nj)(t.slots,We,1)},me=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,a=s.kT;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(r,e),n||1!==t||delete r._):(o=!e.$stable,fe(e,r)),a=e}else e&&(pe(t,e),a={default:1});if(o)for(const s in r)le(s)||s in a||delete r[s]};function ye(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _e=0;function ve(t,e){return function(n,i=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==i||(0,s.Kn)(i)||(i=null);const r=ye(),o=new Set;let a=!1;const c=r.app={_uid:_e++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:xn,get config(){return r.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return r.mixins.includes(t)||r.mixins.push(t),c},component(t,e){return e?(r.components[t]=e,c):r.components[t]},directive(t,e){return e?(r.directives[t]=e,c):r.directives[t]},mount(s,o,u){if(!a){0;const l=ze(n,i);return l.appContext=r,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,En(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return r.provides[t]=e,c}};return c}}function we(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,i)=>we(t,e&&((0,s.kJ)(e)?e[i]:e),n,o,a)));if(ct(o)&&!a)return;const c=4&o.shapeFlag?En(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,s.mf)(h))r(h,l,12,[u,f]);else{const e=(0,s.HD)(h),r=(0,i.dq)(h);if(e||r){const i=()=>{if(t.f){const n=e?(0,s.RI)(p,h)?p[h]:f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):r&&(h.value=u,t.k&&(f[t.k]=u))};u?(i.id=-1,Ce(i,n)):i()}else 0}}function be(){}const Ce=H;function Ee(t){return Te(t)}function Te(t,e){be();const n=(0,s.E9)();n.__VUE__=!0;const{insert:r,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=s.dG,insertStaticContent:m}=t,y=(t,e,n,i=null,s=null,r=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!He(t,e)&&(i=X(t),G(t,s,r,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case xe:_(t,e,n,i);break;case De:v(t,e,n,i);break;case Re:null==t&&b(e,n,i,o);break;case Ae:P(t,e,n,i,s,r,o,a,c);break;default:1&h?k(t,e,n,i,s,r,o,a,c):6&h?L(t,e,n,i,s,r,o,a,c):(64&h||128&h)&&u.process(t,e,n,i,s,r,o,a,c,tt)}null!=l&&s&&we(l,t&&t.ref,r,e||t,!e)},_=(t,e,n,i)=>{if(null==t)r(e.el=u(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},v=(t,e,n,i)=>{null==t?r(e.el=l(e.children||""),n,i):e.el=t.el},b=(t,e,n,i)=>{[t.el,t.anchor]=m(t.children,e,n,i,t.el,t.anchor)},E=({el:t,anchor:e},n,i)=>{let s;while(t&&t!==e)s=p(t),r(t,n,i),t=s;r(e,n,i)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,i,s,r,o,a,c)=>{o=o||"svg"===e.type,null==t?N(e,n,i,s,r,o,a,c):D(t,e,s,r,o,a,c)},N=(t,e,n,i,o,u,l,h)=>{let f,p;const{type:g,props:m,shapeFlag:y,transition:_,dirs:v}=t;if(f=t.el=c(t.type,u,m&&m.is,m),8&y?d(f,t.children):16&y&&x(t.children,f,null,i,o,u&&"foreignObject"!==g,l,h),v&&xt(t,null,i,"created"),m){for(const e in m)"value"===e||(0,s.Gg)(e)||a(f,e,null,m[e],u,t.children,i,o,J);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&rn(p,i,t)}A(f,t,t.scopeId,l,i),v&&xt(t,null,i,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;w&&_.beforeEnter(f),r(f,e,n),((p=m&&m.onVnodeMounted)||w||v)&&Ce((()=>{p&&rn(p,i,t),w&&_.enter(f),v&&xt(t,null,i,"mounted")}),o)},A=(t,e,n,i,s)=>{if(n&&g(t,n),i)for(let r=0;r<i.length;r++)g(t,i[r]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;A(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},x=(t,e,n,i,s,r,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?en(t[u]):tn(t[u]);y(null,c,e,n,i,s,r,o,a)}},D=(t,e,n,i,r,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||s.kT,g=e.props||s.kT;let m;n&&Ie(n,!1),(m=g.onVnodeBeforeUpdate)&&rn(m,n,e,t),f&&xt(e,t,n,"beforeUpdate"),n&&Ie(n,!0);const y=r&&"foreignObject"!==e.type;if(h?R(t.dynamicChildren,h,u,n,i,y,o):c||H(t,e,u,null,n,i,y,o,!1),l>0){if(16&l)O(u,e,p,g,n,i,r);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,r),4&l&&a(u,"style",p.style,g.style,r),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,r,t.children,n,i,J)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||O(u,e,p,g,n,i,r);((m=g.onVnodeUpdated)||f)&&Ce((()=>{m&&rn(m,n,e,t),f&&xt(e,t,n,"updated")}),i)},R=(t,e,n,i,s,r,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ae||!He(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,i,s,r,o,!0)}},O=(t,e,n,i,r,o,c)=>{if(n!==i){if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in i||a(t,u,n[u],null,c,e.children,r,o,J);for(const u in i){if((0,s.Gg)(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,r,o,J)}"value"in i&&a(t,"value",n.value,i.value)}},P=(t,e,n,i,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(r(h,n,i),r(d,n,i),x(e.children,n,d,s,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Se(t,e,!0)):H(t,e,n,d,s,o,a,c,l)},L=(t,e,n,i,s,r,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,i,o,c):F(e,n,i,s,r,o,c):U(t,e,c)},F=(t,e,n,i,s,r,o)=>{const a=t.component=cn(t,i,s);if(ut(t)&&(a.ctx.renderer=tt),yn(a),a.asyncDep){if(s&&s.registerDep(a,j),!t.el){const t=a.subTree=ze(De);v(null,t,e,n)}}else j(a,t,e,n,s,r,o)},U=(t,e,n)=>{const i=e.component=t.component;if(V(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void B(i,e,n);i.next=e,C(i.update),i.update()}else e.el=t.el,i.vnode=e},j=(t,e,n,r,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:i,u:r,parent:u,vnode:l}=t,h=n;0,Ie(t,!1),n?(n.el=l.el,B(t,n,c)):n=l,i&&(0,s.ir)(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&rn(e,u,n,l),Ie(t,!0);const d=M(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),X(p),t,o,a),n.el=d.el,null===h&&q(t,d.el),r&&Ce(r,o),(e=n.props&&n.props.onVnodeUpdated)&&Ce((()=>rn(e,u,n,l)),o)}else{let i;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=ct(e);if(Ie(t,!1),l&&(0,s.ir)(l),!f&&(i=u&&u.onVnodeBeforeMount)&&rn(i,d,e),Ie(t,!0),c&&nt){const n=()=>{t.subTree=M(t),nt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const i=t.subTree=M(t);0,y(null,i,n,r,t,o,a),e.el=i.el}if(h&&Ce(h,o),!f&&(i=u&&u.onVnodeMounted)){const t=e;Ce((()=>rn(i,d,t)),o)}(256&e.shapeFlag||d&&ct(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Ce(t.a,o),t.isMounted=!0,e=n=r=null}},l=t.effect=new i.qq(u,(()=>w(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Ie(t,!0),h()},B=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,ne(t,e.props,s,n),me(t,e.children,n),(0,i.Jd)(),T(),(0,i.lk)()},H=(t,e,n,i,s,r,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void $(u,h,n,i,s,r,o,a,c);if(256&f)return void W(u,h,n,i,s,r,o,a,c)}8&p?(16&l&&J(u,s,r),h!==u&&d(n,h)):16&l?16&p?$(u,h,n,i,s,r,o,a,c):J(u,s,r,!0):(8&l&&d(n,""),16&p&&x(h,n,i,s,r,o,a,c))},W=(t,e,n,i,r,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const i=e[f]=u?en(e[f]):tn(e[f]);y(t[f],i,n,null,r,o,a,c,u)}l>h?J(t,r,o,!0,!1,d):x(e,n,i,r,o,a,c,u,d)},$=(t,e,n,i,r,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const i=t[l],s=e[l]=u?en(e[l]):tn(e[l]);if(!He(i,s))break;y(i,s,n,null,r,o,a,c,u),l++}while(l<=d&&l<=f){const i=t[d],s=e[f]=u?en(e[f]):tn(e[f]);if(!He(i,s))break;y(i,s,n,null,r,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,s=t<h?e[t].el:i;while(l<=f)y(null,e[l]=u?en(e[l]):tn(e[l]),n,s,r,o,a,c,u),l++}}else if(l>f)while(l<=d)G(t[l],r,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?en(e[l]):tn(e[l]);null!=t.key&&m.set(t.key,l)}let _,v=0;const w=f-g+1;let b=!1,C=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const i=t[l];if(v>=w){G(i,r,o,!0);continue}let s;if(null!=i.key)s=m.get(i.key);else for(_=g;_<=f;_++)if(0===E[_-g]&&He(i,e[_])){s=_;break}void 0===s?G(i,r,o,!0):(E[s-g]=l+1,s>=C?C=s:b=!0,y(i,e[s],n,null,r,o,a,c,u),v++)}const T=b?ke(E):s.Z6;for(_=T.length-1,l=w-1;l>=0;l--){const t=g+l,s=e[t],d=t+1<h?e[t+1].el:i;0===E[l]?y(null,s,n,d,r,o,a,c,u):b&&(_<0||l!==T[_]?K(s,n,d,2):_--)}}},K=(t,e,n,i,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,i);if(128&l)return void t.suspense.move(e,n,i);if(64&l)return void a.move(t,e,n,tt);if(a===Ae){r(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,i);return void r(t.anchor,e,n)}if(a===Re)return void E(t,e,n);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(o),r(o,e,n),Ce((()=>c.enter(o)),s);else{const{leave:t,delayLeave:i,afterLeave:s}=c,a=()=>r(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};i?i(o,a,u):u()}else r(o,e,n)},G=(t,e,n,i=!1,s=!1)=>{const{type:r,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&we(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!ct(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&rn(g,e,t),6&l)Y(t.component,n,i);else{if(128&l)return void t.suspense.unmount(n,i);f&&xt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,tt,i):u&&(r!==Ae||h>0&&64&h)?J(u,e,n,!1,!0):(r===Ae&&384&h||!s&&16&l)&&J(c,e,n),i&&z(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ce((()=>{g&&rn(g,e,t),f&&xt(t,null,e,"unmounted")}),n)},z=t=>{const{type:e,el:n,anchor:i,transition:s}=t;if(e===Ae)return void Q(n,i);if(e===Re)return void S(t);const r=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:i}=s,o=()=>e(n,r);i?i(t.el,r,o):o()}else r()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:i,scope:r,update:o,subTree:a,um:c}=t;i&&(0,s.ir)(i),r.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Ce(c,e),Ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,i=!1,s=!1,r=0)=>{for(let o=r;o<t.length;o++)G(t[o],e,n,i,s)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),T(),I(),e._vnode=t},tt={p:y,um:G,m:K,r:z,mt:F,mc:x,pc:H,pbc:R,n:X,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:ve(Z,et)}}function Ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Se(t,e,n=!1){const i=t.children,r=e.children;if((0,s.kJ)(i)&&(0,s.kJ)(r))for(let s=0;s<i.length;s++){const t=i[s];let e=r[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=r[s]=en(r[s]),e.el=t.el),n||Se(t,e)),e.type===xe&&(e.el=t.el)}}function ke(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}r=0,o=n.length-1;while(r<o)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}r=n.length,o=n[r-1];while(r-- >0)n[r]=o,o=e[o];return n}const Ne=t=>t.__isTeleport;const Ae=Symbol(void 0),xe=Symbol(void 0),De=Symbol(void 0),Re=Symbol(void 0),Oe=[];let Pe=null;function Le(t=!1){Oe.push(Pe=t?null:[])}function Me(){Oe.pop(),Pe=Oe[Oe.length-1]||null}let Fe=1;function Ue(t){Fe+=t}function Ve(t){return t.dynamicChildren=Fe>0?Pe||s.Z6:null,Me(),Fe>0&&Pe&&Pe.push(t),t}function je(t,e,n,i,s,r){return Ve(Ge(t,e,n,i,s,r,!0))}function qe(t,e,n,i,s){return Ve(ze(t,e,n,i,s,!0))}function Be(t){return!!t&&!0===t.__v_isVNode}function He(t,e){return t.type===e.type&&t.key===e.key}const We="__vInternal",$e=({key:t})=>null!=t?t:null,Ke=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,i.dq)(t)||(0,s.mf)(t)?{i:R,r:t,k:e,f:!!n}:t:null;function Ge(t,e=null,n=null,i=0,r=null,o=(t===Ae?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$e(e),ref:e&&Ke(e),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:R};return c?(nn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),Fe>0&&!a&&Pe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Pe.push(u),u}const ze=Qe;function Qe(t,e=null,n=null,r=0,o=null,a=!1){if(t&&t!==Ot||(t=De),Be(t)){const i=Je(t,e,!0);return n&&nn(i,n),Fe>0&&!a&&Pe&&(6&i.shapeFlag?Pe[Pe.indexOf(t)]=i:Pe.push(i)),i.patchFlag|=-2,i}if(In(t)&&(t=t.__vccOpts),e){e=Ye(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,i.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:B(t)?128:Ne(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return Ge(t,e,n,r,o,c,a,!0)}function Ye(t){return t?(0,i.X3)(t)||We in t?(0,s.l7)({},t):t:null}function Je(t,e,n=!1){const{props:i,ref:r,patchFlag:o,children:a}=t,c=e?sn(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$e(c),ref:e&&e.ref?n&&r?(0,s.kJ)(r)?r.concat(Ke(e)):[r,Ke(e)]:Ke(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Je(t.ssContent),ssFallback:t.ssFallback&&Je(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx};return u}function Xe(t=" ",e=0){return ze(xe,null,t,e)}function Ze(t="",e=!1){return e?(Le(),qe(De,null,t)):ze(De,null,t)}function tn(t){return null==t||"boolean"===typeof t?ze(De):(0,s.kJ)(t)?ze(Ae,null,t.slice()):"object"===typeof t?en(t):ze(xe,null,String(t))}function en(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:Je(t)}function nn(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),nn(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||We in e?3===i&&R&&(1===R.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=R}}else(0,s.mf)(e)?(e={default:e,_ctx:R},n=32):(e=String(e),64&i?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function sn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,s.C_)([e.class,i.class]));else if("style"===t)e.style=(0,s.j5)([e.style,i.style]);else if((0,s.F7)(t)){const n=e[t],r=i[t];!r||n===r||(0,s.kJ)(n)&&n.includes(r)||(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function rn(t,e,n,i=null){o(t,e,7,[n,i])}const on=ye();let an=0;function cn(t,e,n){const r=t.type,o=(e?e.appContext:t.appContext)||on,a={uid:an++,vnode:t,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:re(r,o),emitsOptions:x(r,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:r.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=A.bind(null,a),t.ce&&t.ce(a),a}let un=null;const ln=()=>un||R,hn=t=>{un=t,t.scope.on()},dn=()=>{un&&un.scope.off(),un=null};function fn(t){return 4&t.vnode.shapeFlag}let pn,gn,mn=!1;function yn(t,e=!1){mn=e;const{props:n,children:i}=t.vnode,s=fn(t);ee(t,n,s,e),ge(t,i);const r=s?_n(t,e):void 0;return mn=!1,r}function _n(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,i.Xl)(new Proxy(t.ctx,jt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Cn(t):null;hn(t),(0,i.Jd)();const c=r(o,t,0,[t.props,n]);if((0,i.lk)(),dn(),(0,s.tI)(c)){if(c.then(dn,dn),e)return c.then((n=>{vn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else vn(t,c,e)}else wn(t,e)}function vn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,i.WL)(e)),wn(t,n)}function wn(t,e,n){const r=t.type;if(!t.render){if(!e&&pn&&!r.render){const e=r.template||Kt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=r,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},i),a);r.render=pn(e,c)}}t.render=r.render||s.dG,gn&&gn(t)}hn(t),(0,i.Jd)(),Bt(t),(0,i.lk)(),dn()}function bn(t){return new Proxy(t.attrs,{get(e,n){return(0,i.j)(t,"get","$attrs"),e[n]}})}function Cn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=bn(t))},slots:t.slots,emit:t.emit,expose:e}}function En(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ut?Ut[n](t):void 0},has(t,e){return e in t||e in Ut}}))}function Tn(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function In(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Sn=(t,e)=>(0,i.Fl)(t,e,mn);function kn(t,e,n){const i=arguments.length;return 2===i?(0,s.Kn)(e)&&!(0,s.kJ)(e)?Be(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Be(n)&&(n=[n]),ze(t,e,n))}const Nn=Symbol(""),An=()=>{{const t=$(Nn);return t}};const xn="3.2.45"},9963:function(t,e,n){"use strict";n.d(e,{F8:function(){return it},iM:function(){return nt},nr:function(){return Z},ri:function(){return ct},uT:function(){return P}});var i=n(3577),s=n(6252);n(2262);const r="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?o.createElementNS(r,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&i&&null!=i.multiple&&s.setAttribute("multiple",i.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===r||!(s=s.nextSibling))break}else{a.innerHTML=i?`<svg>${t}</svg>`:t;const s=a.content;if(i){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const s=t.style,r=(0,i.HD)(n);if(n&&!r){for(const t in n)d(s,t,n[t]);if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&d(s,t,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const h=/\s*!important$/;function d(t,e,n){if((0,i.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=g(t,e);h.test(n)?t.setProperty((0,i.rs)(s),n.replace(h,""),"important"):t[s]=n}}const f=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let s=(0,i._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,i.kC)(s);for(let i=0;i<f.length;i++){const n=f[i]+s;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,s,r){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const s=(0,i.Pq)(e);null==n||s&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function _(t,e,n,s,r,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,r,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const i=null==n?"":n;return t.value===i&&"OPTION"!==t.tagName||(t.value=i),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,i.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}function v(t,e,n,i){t.addEventListener(e,n,i)}function w(t,e,n,i){t.removeEventListener(e,n,i)}function b(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[n,a]=E(e);if(i){const o=r[e]=k(i,s);v(t,n,o,a)}else o&&(w(t,n,o,a),r[e]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function E(t){let e;if(C.test(t)){let n;e={};while(n=t.match(C))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.rs)(t.slice(2));return[n,e]}let T=0;const I=Promise.resolve(),S=()=>T||(I.then((()=>T=0)),T=Date.now());function k(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,s.$d)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=S(),n}function N(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const A=/^on[a-z]/,x=(t,e,n,s,r=!1,o,a,c,h)=>{"class"===e?u(t,s,r):"style"===e?l(t,n,s):(0,i.F7)(e)?(0,i.tR)(e)||b(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,s,r))?_(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,r))};function D(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&A.test(e)&&(0,i.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!A.test(e)||!(0,i.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const R="transition",O="animation",P=(t,{slots:e})=>(0,s.h)(s.P$,U(t),e);P.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=(P.props=(0,i.l7)({},s.P$.props,L),(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),F=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function U(t){const e={};for(const i in t)i in L||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=V(r),m=g&&g[0],y=g&&g[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:w,onLeave:b,onLeaveCancelled:C,onBeforeAppear:E=_,onAppear:T=v,onAppearCancelled:I=w}=e,S=(t,e,n)=>{B(t,e?h:c),B(t,e?l:a),n&&n()},k=(t,e)=>{t._isLeaving=!1,B(t,d),B(t,p),B(t,f),e&&e()},N=t=>(e,n)=>{const i=t?T:v,r=()=>S(e,t,n);M(i,[e,r]),H((()=>{B(e,t?u:o),q(e,t?h:c),F(i)||$(e,s,m,r)}))};return(0,i.l7)(e,{onBeforeEnter(t){M(_,[t]),q(t,o),q(t,a)},onBeforeAppear(t){M(E,[t]),q(t,u),q(t,l)},onEnter:N(!1),onAppear:N(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);q(t,d),Q(),q(t,f),H((()=>{t._isLeaving&&(B(t,d),q(t,p),F(b)||$(t,s,y,n))})),M(b,[t,n])},onEnterCancelled(t){S(t,!1),M(w,[t])},onAppearCancelled(t){S(t,!0),M(I,[t])},onLeaveCancelled(t){k(t),M(C,[t])}})}function V(t){if(null==t)return null;if((0,i.Kn)(t))return[j(t.enter),j(t.leave)];{const e=j(t);return[e,e]}}function j(t){const e=(0,i.He)(t);return e}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function B(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function H(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let W=0;function $(t,e,n,i){const s=t._endId=++W,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=K(t,e);if(!o)return i();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),r()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function K(t,e){const n=window.getComputedStyle(t),i=t=>(n[t]||"").split(", "),s=i(`${R}Delay`),r=i(`${R}Duration`),o=G(s,r),a=i(`${O}Delay`),c=i(`${O}Duration`),u=G(a,c);let l=null,h=0,d=0;e===R?o>0&&(l=R,h=o,d=r.length):e===O?u>0&&(l=O,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?R:O:null,d=l?l===R?r.length:c.length:0);const f=l===R&&/\b(transform|all)(,|$)/.test(i(`${R}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function G(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>z(e)+z(t[n]))))}function z(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Y=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function J(t){t.target.composing=!0}function X(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Z={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Y(r);const o=s||r.props&&"number"===r.props.type;v(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,i.He)(s)),t._assign(s)})),n&&v(t,"change",(()=>{t.value=t.value.trim()})),e||(v(t,"compositionstart",J),v(t,"compositionend",X),v(t,"change",X))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},o){if(t._assign=Y(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((r||"number"===t.type)&&(0,i.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const tt=["ctrl","shift","alt","meta"],et={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>tt.some((n=>t[`${n}Key`]&&!e.includes(n)))},nt=(t,e)=>(n,...i)=>{for(let t=0;t<e.length;t++){const i=et[e[t]];if(i&&i(n,e))return}return t(n,...i)},it={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):st(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!==!n&&(i?e?(i.beforeEnter(t),st(t,!0),i.enter(t)):i.leave(t,(()=>{st(t,!1)})):st(t,e))},beforeUnmount(t,{value:e}){st(t,e)}};function st(t,e){t.style.display=e?t._vod:"none"}const rt=(0,i.l7)({patchProp:x},c);let ot;function at(){return ot||(ot=(0,s.Us)(rt))}const ct=(...t)=>{const e=at().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=ut(t);if(!s)return;const r=e._component;(0,i.mf)(r)||r.render||r.template||(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ut(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}},3577:function(t,e,n){"use strict";function i(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return h},DM:function(){return O},E9:function(){return st},F7:function(){return I},Gg:function(){return $},HD:function(){return M},He:function(){return nt},Kn:function(){return U},NO:function(){return E},Nj:function(){return et},Od:function(){return N},PO:function(){return H},Pq:function(){return f},RI:function(){return x},S0:function(){return W},W7:function(){return B},WV:function(){return m},Z6:function(){return b},_A:function(){return z},_N:function(){return R},aU:function(){return Z},dG:function(){return C},e1:function(){return r},fY:function(){return i},hR:function(){return X},hq:function(){return y},ir:function(){return tt},j5:function(){return o},kC:function(){return J},kJ:function(){return D},kT:function(){return w},l7:function(){return k},mf:function(){return L},rs:function(){return Y},tI:function(){return V},tR:function(){return S},yA:function(){return p},yk:function(){return F},zw:function(){return _}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",r=i(s);function o(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=M(i)?l(i):o(i);if(s)for(const t in s)e[t]=s[t]}return e}return M(t)||U(t)?t:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(t){const e={};return t.replace(u,"").split(a).forEach((t=>{if(t){const n=t.split(c);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function h(t){let e="";if(M(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const i=h(t[n]);i&&(e+=i+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=i(d);function p(t){return!!t||""===t}function g(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=m(t[i],e[i]);return n}function m(t,e){if(t===e)return!0;let n=P(t),i=P(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=F(t),i=F(e),n||i)return t===e;if(n=D(t),i=D(e),n||i)return!(!n||!i)&&g(t,e);if(n=U(t),i=U(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const n in t){const i=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(i&&!s||!i&&s||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function y(t,e){return t.findIndex((t=>m(t,e)))}const _=t=>M(t)?t:null==t?"":D(t)||U(t)&&(t.toString===j||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:O(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||D(e)||H(e)?e:String(e),w={},b=[],C=()=>{},E=()=>!1,T=/^on[^a-z]/,I=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),k=Object.assign,N=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A=Object.prototype.hasOwnProperty,x=(t,e)=>A.call(t,e),D=Array.isArray,R=t=>"[object Map]"===q(t),O=t=>"[object Set]"===q(t),P=t=>"[object Date]"===q(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,F=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,V=t=>U(t)&&L(t.then)&&L(t.catch),j=Object.prototype.toString,q=t=>j.call(t),B=t=>q(t).slice(8,-1),H=t=>"[object Object]"===q(t),W=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,$=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},G=/-(\w)/g,z=K((t=>t.replace(G,((t,e)=>e?e.toUpperCase():"")))),Q=/\B([A-Z])/g,Y=K((t=>t.replace(Q,"-$1").toLowerCase())),J=K((t=>t.charAt(0).toUpperCase()+t.slice(1))),X=K((t=>t?`on${J(t)}`:"")),Z=(t,e)=>!Object.is(t,e),tt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},et=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let it;const st=()=>it||(it="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9662:function(t,e,n){var i=n(614),s=n(6330),r=TypeError;t.exports=function(t){if(i(t))return t;throw r(s(t)+" is not a function")}},9670:function(t,e,n){var i=n(111),s=String,r=TypeError;t.exports=function(t){if(i(t))return t;throw r(s(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),s=n(1400),r=n(6244),o=function(t){return function(e,n,o){var a,c=i(e),u=r(c),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var i=n(9781),s=n(3157),r=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(s(t)&&!o(t,"length").writable)throw r("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var i=n(1702),s=i({}.toString),r=i("".slice);t.exports=function(t){return r(s(t),8,-1)}},9920:function(t,e,n){var i=n(2597),s=n(3887),r=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=r.f,l=0;l<a.length;l++){var h=a[l];i(t,h)||n&&i(n,h)||c(t,h,u(e,h))}}},8880:function(t,e,n){var i=n(9781),s=n(3070),r=n(9114);t.exports=i?function(t,e,n){return s.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(614),s=n(3070),r=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(i(n)&&r(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var i=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var i=n(7854),s=n(111),r=i.document,o=s(r)&&s(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,s,r=n(7854),o=n(8113),a=r.process,c=r.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),s=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!s&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(s=+i[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),s=n(1236).f,r=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(l=m?i:y?i[g]||a(g,{}):(i[g]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=s(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&r(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),s=Function.prototype.call;t.exports=i?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var i=n(9781),s=n(2597),r=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=s(r,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(r,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var i=n(4374),s=Function.prototype,r=s.call,o=i&&s.bind.bind(r,r);t.exports=i?o:function(t){return function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),s=n(614),r=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662),s=n(8554);t.exports=function(t,e){var n=t[e];return s(n)?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),s=n(7908),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(s(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var i=n(9781),s=n(7293),r=n(317);t.exports=!i&&!s((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(1702),s=n(7293),r=n(4326),o=Object,a=i("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?a(t,""):o(t)}:o},2788:function(t,e,n){var i=n(1702),s=n(614),r=n(5465),o=i(Function.toString);s(r.inspectSource)||(r.inspectSource=function(t){return o(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var i,s,r,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return r(t)?s(t):i(t,{})},_=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var v=h.state||(h.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,i=function(t,e){if(v.has(t))throw g(p);return e.facade=t,v.set(t,e),e},s=function(t){return v.get(t)||{}},r=function(t){return v.has(t)}}else{var w=d("state");f[w]=!0,i=function(t,e){if(l(t,w))throw g(p);return e.facade=t,u(t,w,e),e},s=function(t){return l(t,w)?t[w]:{}},r=function(t){return l(t,w)}}t.exports={set:i,get:s,has:r,enforce:y,getterFor:_}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},614:function(t,e,n){var i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"function"==typeof t||t===s}:function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),s=n(614),r=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(s(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var i=n(614),s=n(4154),r=s.all;t.exports=s.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:i(t)||t===r}:function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),s=n(614),r=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&r(e.prototype,a(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(7293),s=n(614),r=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!i((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!r(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&r(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&r(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var i=l(t);return r(i,"source")||(i.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},3070:function(t,e,n){var i=n(9781),s=n(4664),r=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=i?r?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=l(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),s=n(6916),r=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(r.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),s=n(748),r=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),s=n(2597),r=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=r(t),u=0,l=[];for(n in i)!s(a,n)&&s(i,n)&&c(l,n);while(e.length>u)s(i,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!n.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var i=n(6916),s=n(614),r=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!r(a=i(n,t)))return a;if(s(n=t.valueOf)&&!r(a=i(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!r(a=i(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),s=n(1702),r=n(8006),o=n(5181),a=n(9670),c=s([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var i=n(8554),s=TypeError;t.exports=function(t){if(i(t))throw s("Can't call method on "+t);return t}},6200:function(t,e,n){var i=n(2309),s=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=s(t))}},5465:function(t,e,n){var i=n(7854),s=n(3072),r="__core-js_shared__",o=i[r]||s(r,{});t.exports=o},2309:function(t,e,n){var i=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var i=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1400:function(t,e,n){var i=n(9303),s=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?s(n+e,0):r(n,e)}},5656:function(t,e,n){var i=n(8361),s=n(4488);t.exports=function(t){return i(s(t))}},9303:function(t,e,n){var i=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},7466:function(t,e,n){var i=n(9303),s=Math.min;t.exports=function(t){return t>0?s(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488),s=Object;t.exports=function(t){return s(i(t))}},7593:function(t,e,n){var i=n(6916),s=n(111),r=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!s(t)||r(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!s(n)||r(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),s=n(2190);t.exports=function(t){var e=i(t,"string");return s(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var i=n(1702),s=0,r=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+r,36)}},3307:function(t,e,n){var i=n(6293);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),s=n(7293);t.exports=i&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var i=n(7854),s=n(614),r=i.WeakMap;t.exports=s(r)&&/native code/.test(String(r))},5112:function(t,e,n){var i=n(7854),s=n(2309),r=n(2597),o=n(9711),a=n(6293),c=n(3307),u=s("wks"),l=i.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!r(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&r(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},7658:function(t,e,n){"use strict";var i=n(2109),s=n(7908),r=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=s(this),n=r(e),i=arguments.length;a(n+i);for(var c=0;c<i;c++)e[n]=arguments[c],n++;return o(e,n),n}})},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(5816),s="firebase",r="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(s,r,"app")},7663:function(t,e,n){"use strict";var i=n(5816),s=n(8463),r=n(4444),o=n(3333);const a="@firebase/database",c="0.13.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(t){u=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,r.Wl)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,r.cI)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,r.r3)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new o.Yd("@firebase/database"),y=function(){let t=1;return function(){return t++}}(),_=function(t){const e=(0,r.dS)(t),n=new r.gQ;n.update(e);const i=n.digest();return r.US.encodeByteArray(i)},v=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?e+=v.apply(null,i):e+="object"===typeof i?(0,r.Wl)(i):i,e+=" "}return e};let w=null,b=!0;const C=function(t,e){(0,r.hu)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=o["in"].VERBOSE,w=m.log.bind(m),e&&g.set("logging_enabled",!0)):"function"===typeof t?w=t:(w=null,g.remove("logging_enabled"))},E=function(...t){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&C(!0)),w){const e=v.apply(null,t);w(e)}},T=function(t){return function(...e){E(t,...e)}},I=function(...t){const e="FIREBASE INTERNAL ERROR: "+v(...t);m.error(e)},S=function(...t){const e=`FIREBASE FATAL ERROR: ${v(...t)}`;throw m.error(e),new Error(e)},k=function(...t){const e="FIREBASE WARNING: "+v(...t);m.warn(e)},N=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},x=function(t){if((0,r.Yr)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},D="[MIN_NAME]",R="[MAX_NAME]",O=function(t,e){if(t===e)return 0;if(t===D||e===R)return-1;if(e===D||t===R)return 1;{const n=$(t),i=$(e);return null!==n?null!==i?n-i===0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},P=function(t,e){return t===e?0:t<e?-1:1},L=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,r.Wl)(e))},M=function(t){if("object"!==typeof t||null===t)return(0,r.Wl)(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,r.Wl)(e[i]),n+=":",n+=M(t[e[i]]);return n+="}",n},F=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function U(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const V=function(t){(0,r.hu)(!A(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,o,a,c,u;0===t?(o=0,a=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),i),o=c+i,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(s?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let t=parseInt(h.substr(u,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const B=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,W=2147483647,$=function(t){if(B.test(t)){const e=Number(t);if(e>=H&&e<=W)return e}return null},K=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e}),Math.floor(0))}},G=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},z=function(t,e){const n=setTimeout(t,e);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",Z="v",tt="s",et="r",nt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,st="ls",rt="p",ot="ac",at="websocket",ct="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,i,s=!1,r="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function lt(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ht(t,e,n){let i;if((0,r.hu)("string"===typeof e,"typeof type must == string"),(0,r.hu)("object"===typeof n,"typeof params must == object"),e===at)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ct)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}lt(t)&&(n["ns"]=t.namespace);const s=[];return U(n,((t,e)=>{s.push(t+"="+e)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,r.r3)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,r.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft={},pt={};function gt(t){const e=t.toString();return ft[e]||(ft[e]=new dt),ft[e]}function mt(t,e){const n=t.toString();return pt[n]||(pt[n]=e()),pt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&K((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="start",vt="close",wt="pLPCommand",bt="pRTLPCB",Ct="id",Et="pw",Tt="ser",It="cb",St="seg",kt="ts",Nt="d",At="dframe",xt=1870,Dt=30,Rt=xt-Dt,Ot=25e3,Pt=3e4;class Lt{constructor(t,e,n,i,s,r,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(t),this.stats_=gt(e),this.urlFn=t=>(this.appCheckToken&&(t[ot]=this.appCheckToken),ht(e,ct,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new yt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Pt)),x((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mt(((...t)=>{const[e,n,i,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===_t)this.id=n,this.password=i;else{if(e!==vt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[_t]="t",t[Tt]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[It]=this.scriptTagHolder.uniqueCallbackIdentifier),t[Z]=X,this.transportSessionId&&(t[tt]=this.transportSessionId),this.lastSessionId&&(t[st]=this.lastSessionId),this.applicationId&&(t[rt]=this.applicationId),this.appCheckToken&&(t[ot]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[et]=nt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return!(0,r.Yr)()&&(!!Lt.forceAllow_||!Lt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,r.Wl)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,r.h$)(e),i=F(n,Rt);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,r.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[At]="t",n[Ct]=t,n[Et]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,r.Wl)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Mt{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,r.Yr)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=y(),window[wt+this.uniqueCallbackIdentifier]=t,window[bt+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){E("frame writing exception"),s.stack&&E(s.stack),E(s)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||E("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ct]=this.myID,t[Et]=this.myPW,t[Tt]=this.currentSerial;let e=this.urlFn(t),n="",i=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Dt+n.length<=xt))break;{const t=this.pendingSegs.shift();n=n+"&"+St+i+"="+t.seg+"&"+kt+i+"="+t.ts+"&"+Nt+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(Ot)),s=()=>{clearTimeout(i),n()};this.addTag(t,s)}addTag(t,e){(0,r.Yr)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{E("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=16384,Ut=45e3;let Vt=null;"undefined"!==typeof MozWebSocket?Vt=MozWebSocket:"undefined"!==typeof WebSocket&&(Vt=WebSocket);class jt{constructor(t,e,n,i,s,r,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=gt(e),this.connURL=jt.connectionURL_(e,r,o,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,s){const o={};return o[Z]=X,!(0,r.Yr)()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(o[et]=nt),e&&(o[tt]=e),n&&(o[st]=n),i&&(o[ot]=i),s&&(o[rt]=s),ht(t,at,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if((0,r.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${X}/${u}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/quotes-app/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new Vt(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Vt&&!jt.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,r.cI)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,r.hu)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,r.Wl)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=F(e,Ft);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ut))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2,jt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Lt,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=jt&&jt["isAvailable"]();let n=e&&!jt.previouslyFailed();if(t.webSocketOnly&&(e||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[jt];else{const t=this.transports_=[];for(const e of qt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qt.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=6e4,Ht=5e3,Wt=10240,$t=102400,Kt="t",Gt="d",zt="s",Qt="r",Yt="e",Jt="o",Xt="a",Zt="n",te="p",ee="h";class ne{constructor(t,e,n,i,s,r,o,a,c,u){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new qt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=z((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$t?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Kt in t){const e=t[Kt];e===Xt?this.upgradeIfSecondaryHealthy_():e===Qt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=L("t",t),n=L("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:te,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=L("t",t),n=L("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=L(Kt,t);if(Gt in t){const n=t[Gt];if(e===ee)this.onHandshake_(n);else if(e===Zt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===zt?this.onConnectionShutdown_(n):e===Qt?this.onReset_(n):e===Yt?I("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),X!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),z((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Bt))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):z((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:te,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,r.hu)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===e&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(t){(0,r.hu)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends se{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,r.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new re}getInitialEvent(t){return(0,r.hu)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=32,ae=768;class ce{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new ce("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function he(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function fe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pe(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ge(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function me(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function ye(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ce(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=le(t),i=le(e);if(null===n)return e;if(n===i)return ve(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function we(t,e){if(he(t)!==he(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function be(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(he(t)>he(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ce{constructor(t,e){this.errorPrefix_=e,this.parts_=ge(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,r.ug)(this.parts_[n]);Ie(this)}}function Ee(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,r.ug)(e),Ie(t)}function Te(t){const e=t.parts_.pop();t.byteLength_-=(0,r.ug)(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ie(t){if(t.byteLength_>ae)throw new Error(t.errorPrefix_+"has a key path longer than "+ae+" bytes ("+t.byteLength_+").");if(t.parts_.length>oe)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oe+") or object contains a cycle "+Se(t))}function Se(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends se{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new ke}getInitialEvent(t){return(0,r.hu)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1e3,Ae=3e5,xe=3e4,De=1.3,Re=3e4,Oe="server_kill",Pe=3;class Le extends ie{constructor(t,e,n,i,s,o,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Le.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ne,this.maxReconnectDelay_=Ae,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,r.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ke.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&re.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,s={r:i,a:t,b:e};this.log_((0,r.Wl)(s)),(0,r.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new r.BH,n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),e.promise}listen(t,e,n,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),(0,r.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,r.hu)(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";t.tag&&(s["q"]=e._queryObject,s["t"]=t.tag),s["h"]=t.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];Le.warnOnListenWarnings_(r,e);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,r.r3)(t,"w")){const n=(0,r.DV)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,r.GJ)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xe)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,r.w9)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],i=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,r.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const r={p:e,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,r.Wl)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):I("Unrecognized action received from server: "+(0,r.Wl)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,r.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Re&&(this.reconnectDelay_=Ne),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*De)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Le.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},u=function(t){(0,r.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=c&&c.token,a=new ne(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{k(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Oe)}),s))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,r.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>M(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new ce(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pe&&(this.reconnectDelay_=xe,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){E("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pe&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,r.Yr)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+u.replace(/\./g,"-")]=1,(0,r.uI)()?t["framework.cordova"]=1:(0,r.b$)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=re.getInstance().currentlyOnline();return(0,r.xb)(this.interruptReasons_)&&t}}Le.nextPersistentConnectionId_=0,Le.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Me(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Me(D,t),i=new Me(D,e);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue;class Ve extends Fe{static get __EMPTY_NODE(){return Ue}static set __EMPTY_NODE(t){Ue=t}compare(t,e){return O(t.name,e.name)}isDefinedOn(t){throw(0,r.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Me.MIN}maxPost(){return new Me(R,Ue)}makePost(t,e){return(0,r.hu)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Me(t,Ue)}toString(){return".key"}}const je=new Ve;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!t.isEmpty())if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Be{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Be.RED,this.left=null!=i?i:We.EMPTY_NODE,this.right=null!=s?s:We.EMPTY_NODE}copy(t,e,n,i,s){return new Be(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return We.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Be.RED=!0,Be.BLACK=!1;class He{copy(t,e,n,i,s){return this}insert(t,e,n){return new Be(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(t,e=We.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new We(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(t){return new We(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new qe(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new qe(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new qe(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new qe(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $e(t,e){return O(t.name,e.name)}function Ke(t,e){return O(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge;function ze(t){Ge=t}We.EMPTY_NODE=new He;const Qe=function(t){return"number"===typeof t?"number:"+V(t):"string:"+t},Ye=function(t){if(t.isLeafNode()){const e=t.val();(0,r.hu)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,r.r3)(e,".sv"),"Priority must be a string or number.")}else(0,r.hu)(t===Ge||t.isEmpty(),"priority of unexpected type.");(0,r.hu)(t===Ge||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Je,Xe,Ze;class tn{constructor(t,e=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,r.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ye(this.priorityNode_)}static set __childrenNodeConstructor(t){Je=t}static get __childrenNodeConstructor(){return Je}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new tn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return _e(t)?this:".priority"===le(t)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=le(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,r.hu)(".priority"!==n||1===he(t),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?V(this.value_):this.value_,this.lazyHash_=_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===tn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof tn.__childrenNodeConstructor?-1:((0,r.hu)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(e),s=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,r.hu)(i>=0,"Unknown leaf type: "+e),(0,r.hu)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function en(t){Xe=t}function nn(t){Ze=t}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Fe{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?O(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(R,new tn("[PRIORITY-POST]",Ze))}makePost(t,e){const n=Xe(t);return new Me(e,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const rn=new sn,on=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){const e=t=>parseInt(Math.log(t)/on,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=n(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const cn=function(t,e,n,i){t.sort(e);const s=function(e,i){const r=i-e;let o,a;if(0===r)return null;if(1===r)return o=t[e],a=n?n(o):o,new Be(a,o.node,Be.BLACK,null,null);{const c=parseInt(r/2,10)+e,u=s(e,c),l=s(c+1,i);return o=t[c],a=n?n(o):o,new Be(a,o.node,Be.BLACK,u,l)}},r=function(e){let i=null,r=null,o=t.length;const a=function(e,i){const r=o-e,a=o;o-=e;const u=s(r+1,a),l=t[r],h=n?n(l):l;c(new Be(h,l.node,i,null,u))},c=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,Be.BLACK):(a(i,Be.BLACK),a(i,Be.RED))}return r},o=new an(t.length),a=r(o);return new We(i||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const ln={};class hn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,r.hu)(ln&&rn,"ChildrenNode.ts has not been loaded"),un=un||new hn({".priority":ln},{".priority":rn}),un}get(t){const e=(0,r.DV)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof We?e:null}hasIndex(t){return(0,r.r3)(this.indexSet_,t.toString())}addIndex(t,e){(0,r.hu)(t!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=e.getIterator(Me.Wrap);let o,a=s.getNext();while(a)i=i||t.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?cn(n,t.getCompare()):ln;const c=t.toString(),u=Object.assign({},this.indexSet_);u[c]=t;const l=Object.assign({},this.indexes_);return l[c]=o,new hn(l,u)}addToIndexes(t,e){const n=(0,r.UI)(this.indexes_,((n,i)=>{const s=(0,r.DV)(this.indexSet_,i);if((0,r.hu)(s,"Missing index implementation for "+i),n===ln){if(s.isDefinedOn(t.node)){const n=[],i=e.getIterator(Me.Wrap);let r=i.getNext();while(r)r.name!==t.name&&n.push(r),r=i.getNext();return n.push(t),cn(n,s.getCompare())}return ln}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new Me(t.name,i))),s.insert(t,t.node)}}));return new hn(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,r.UI)(this.indexes_,(n=>{if(n===ln)return n;{const i=e.get(t.name);return i?n.remove(new Me(t.name,i)):n}}));return new hn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class fn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ye(this.priorityNode_),this.children_.isEmpty()&&(0,r.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dn||(dn=new fn(new We(Ke),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dn}updatePriority(t){return this.children_.isEmpty()?this:new fn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?dn:e}}getChild(t){const e=le(t);return null===e?this:this.getImmediateChild(e).getChild(de(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,r.hu)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Me(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?dn:this.priorityNode_;return new fn(i,r,s)}}updateChild(t,e){const n=le(t);if(null===n)return e;{(0,r.hu)(".priority"!==le(t)||1===he(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(de(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(rn,((r,o)=>{e[r]=o.val(t),n++,s&&fn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(rn,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":_(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Me(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Me(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)>0)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===gn?-1:0}withIndex(t){if(t===je||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new fn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===je||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(rn),n=e.getIterator(rn);let i=t.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===je?null:this.indexMap_.get(t.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pn extends fn{constructor(){super(new We(Ke),fn.EMPTY_NODE,hn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return fn.EMPTY_NODE}isEmpty(){return!1}}const gn=new pn;Object.defineProperties(Me,{MIN:{value:new Me(D,fn.EMPTY_NODE)},MAX:{value:new Me(R,gn)}}),Ve.__EMPTY_NODE=fn.EMPTY_NODE,tn.__childrenNodeConstructor=fn,ze(gn),nn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=!0;function yn(t,e=null){if(null===t)return fn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,r.hu)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new tn(n,yn(e))}if(t instanceof Array||!mn){let n=fn.EMPTY_NODE;return U(t,((e,i)=>{if((0,r.r3)(t,e)&&"."!==e.substring(0,1)){const t=yn(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(yn(e))}{const n=[];let i=!1;const s=t;if(U(s,((t,e)=>{if("."!==t.substring(0,1)){const s=yn(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Me(t,s)))}})),0===n.length)return fn.EMPTY_NODE;const r=cn(n,$e,(t=>t.name),Ke);if(i){const t=cn(n,rn.getCompare());return new fn(r,yn(e),new hn({".priority":t},{".priority":rn}))}return new fn(r,yn(e),hn.Default)}}en(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends Fe{constructor(t){super(),this.indexPath_=t,(0,r.hu)(!_e(t)&&".priority"!==le(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?O(t.name,e.name):s}makePost(t,e){const n=yn(t),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(e,i)}maxPost(){const t=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Me(R,t)}toString(){return ge(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Fe{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?O(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(t,e){const n=yn(t);return new Me(e,n)}toString(){return".value"}}const wn=new vn,bn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Tn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function In(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,r.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,r.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:D}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,r.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,r.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,r.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rn}copy(){const t=new kn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Nn(t){const e={};if(t.isDefault())return e;let n;return t.index_===rn?n="$priority":t.index_===wn?n="$value":t.index_===je?n="$key":((0,r.hu)(t.index_ instanceof _n,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,r.Wl)(n),t.startSet_&&(e["startAt"]=(0,r.Wl)(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+(0,r.Wl)(t.indexStartName_))),t.endSet_&&(e["endAt"]=(0,r.Wl)(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+(0,r.Wl)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function An(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==rn&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ie{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,r.hu)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=xn.getListenId_(t,n),a={};this.listens_[o]=a;const c=Nn(t._queryParams);this.restRequest_(s+".json",c,((t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(s,c,!1,n),(0,r.DV)(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=xn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Nn(t._queryParams),n=t._path.toString(),i=new r.BH;return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(e["auth"]=i.accessToken),s&&s.token&&(e["ac"]=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,r.xO)(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,r.cI)(a.responseText)}catch(t){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return{value:null,children:new Map}}function On(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=le(e);t.children.has(i)||t.children.set(i,Rn());const s=t.children.get(i);e=de(e),On(s,e,n)}}function Pn(t,e,n){null!==t.value?n(e,t.value):Ln(t,((t,i)=>{const s=new ce(e.toString()+"/"+t);Pn(i,s,n)}))}function Ln(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&U(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e4,Un=3e4,Vn=3e5;class jn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Mn(t);const n=Fn+(Un-Fn)*Math.random();z(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;U(t,((t,i)=>{i>0&&(0,r.r3)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),z(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;function Bn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(qn||(qn={}));class $n{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=qn.ACK_USER_WRITE,this.source=Bn()}operationForChild(t){if(_e(this.path)){if(null!=this.affectedTree.value)return(0,r.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ce(t));return new $n(ue(),e,this.revert)}}return(0,r.hu)(le(this.path)===t,"operationForChild called for unrelated child."),new $n(de(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=qn.OVERWRITE}operationForChild(t){return _e(this.path)?new Kn(this.source,ue(),this.snap.getImmediateChild(t)):new Kn(this.source,de(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=qn.MERGE}operationForChild(t){if(_e(this.path)){const e=this.children.subtree(new ce(t));return e.isEmpty()?null:e.value?new Kn(this.source,ue(),e.value):new Gn(this.source,ue(),e)}return(0,r.hu)(le(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Gn(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(_e(t))return this.isFullyInitialized()&&!this.filtered_;const e=le(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e,n,i){const s=[],r=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push(Sn(e.childName,e.snapshotNode))})),Yn(t,s,"child_removed",e,i,n),Yn(t,s,"child_added",e,i,n),Yn(t,s,"child_moved",r,i,n),Yn(t,s,"child_changed",e,i,n),Yn(t,s,"value",e,i,n),s}function Yn(t,e,n,i,s,r){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>Xn(t,e,n))),o.forEach((n=>{const i=Jn(t,n,r);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function Jn(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xn(t,e,n){if(null==e.childName||null==n.childName)throw(0,r.g5)("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),s=new Me(n.childName,n.snapshotNode);return t.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return{eventCache:t,serverCache:e}}function ti(t,e,n,i){return Zn(new zn(e,n,i),t.serverCache)}function ei(t,e,n,i){return Zn(t.eventCache,new zn(e,n,i))}function ni(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;const ri=()=>(si||(si=new We(P)),si);class oi{constructor(t,e=ri()){this.value=t,this.children=e}static fromObject(t){let e=new oi(null);return U(t,((t,n)=>{e=e.set(new ce(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(_e(t))return null;{const n=le(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(de(t),e);if(null!=s){const t=ye(new ce(n),s.path);return{path:t,value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(_e(t))return this;{const e=le(t),n=this.children.get(e);return null!==n?n.subtree(de(t)):new oi(null)}}set(t,e){if(_e(t))return new oi(e,this.children);{const n=le(t),i=this.children.get(n)||new oi(null),s=i.set(de(t),e),r=this.children.insert(n,s);return new oi(this.value,r)}}remove(t){if(_e(t))return this.children.isEmpty()?new oi(null):new oi(null,this.children);{const e=le(t),n=this.children.get(e);if(n){const i=n.remove(de(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new oi(null):new oi(this.value,s)}return this}}get(t){if(_e(t))return this.value;{const e=le(t),n=this.children.get(e);return n?n.get(de(t)):null}}setTree(t,e){if(_e(t))return e;{const n=le(t),i=this.children.get(n)||new oi(null),s=i.setTree(de(t),e);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new oi(this.value,r)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(ye(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(_e(t))return null;{const i=le(t),s=this.children.get(i);return s?s.findOnPath_(de(t),ye(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(_e(t))return this;{this.value&&n(e,this.value);const i=le(t),s=this.children.get(i);return s?s.foreachOnPath_(de(t),ye(e,i),n):new oi(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(ye(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.writeTree_=t}static empty(){return new ai(new oi(null))}}function ci(t,e,n){if(_e(e))return new ai(new oi(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let r=i.value;const o=ve(s,e);return r=r.updateChild(o,n),new ai(t.writeTree_.set(s,r))}{const i=new oi(n),s=t.writeTree_.setTree(e,i);return new ai(s)}}}function ui(t,e,n){let i=t;return U(n,((t,n)=>{i=ci(i,ye(e,t),n)})),i}function li(t,e){if(_e(e))return ai.empty();{const n=t.writeTree_.setTree(e,new oi(null));return new ai(n)}}function hi(t,e){return null!=di(t,e)}function di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function fi(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(rn,((t,n)=>{e.push(new Me(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Me(t,n.value))})),e}function pi(t,e){if(_e(e))return t;{const n=di(t,e);return new ai(null!=n?new oi(n):t.writeTree_.subtree(e))}}function gi(t){return t.writeTree_.isEmpty()}function mi(t,e){return yi(ue(),t.writeTree_,e)}function yi(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,s)=>{".priority"===e?((0,r.hu)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=yi(ye(t,e),s,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(ye(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t,e){return ji(e,t)}function vi(t,e,n,i,s){(0,r.hu)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=ci(t.visibleWrites,e,n)),t.lastWriteId=i}function wi(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function bi(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,r.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,o=!1,a=t.allWrites.length-1;while(s&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&Ci(e,i.path)?s=!1:be(i.path,e.path)&&(o=!0)),a--}if(s){if(o)return Ei(t),!0;if(i.snap)t.visibleWrites=li(t.visibleWrites,i.path);else{const e=i.children;U(e,(e=>{t.visibleWrites=li(t.visibleWrites,ye(i.path,e))}))}return!0}return!1}function Ci(t,e){if(t.snap)return be(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&be(ye(t.path,n),e))return!0;return!1}function Ei(t){t.visibleWrites=Ii(t.allWrites,Ti,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ti(t){return t.visible}function Ii(t,e,n){let i=ai.empty();for(let s=0;s<t.length;++s){const o=t[s];if(e(o)){const t=o.path;let e;if(o.snap)be(n,t)?(e=ve(n,t),i=ci(i,e,o.snap)):be(t,n)&&(e=ve(t,n),i=ci(i,ue(),o.snap.getChild(e)));else{if(!o.children)throw(0,r.g5)("WriteRecord should have .snap or .children");if(be(n,t))e=ve(n,t),i=ui(i,e,o.children);else if(be(t,n))if(e=ve(t,n),_e(e))i=ui(i,ue(),o.children);else{const t=(0,r.DV)(o.children,le(e));if(t){const n=t.getChild(de(e));i=ci(i,ue(),n)}}}}}return i}function Si(t,e,n,i,s){if(i||s){const r=pi(t.visibleWrites,e);if(!s&&gi(r))return n;if(s||null!=n||hi(r,ue())){const r=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(be(t.path,e)||be(e,t.path))},o=Ii(t.allWrites,r,e),a=n||fn.EMPTY_NODE;return mi(o,a)}return null}{const i=di(t.visibleWrites,e);if(null!=i)return i;{const i=pi(t.visibleWrites,e);if(gi(i))return n;if(null!=n||hi(i,ue())){const t=n||fn.EMPTY_NODE;return mi(i,t)}return null}}}function ki(t,e,n){let i=fn.EMPTY_NODE;const s=di(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(rn,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=pi(t.visibleWrites,e);return n.forEachChild(rn,((t,e)=>{const n=mi(pi(s,new ce(t)),e);i=i.updateImmediateChild(t,n)})),fi(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}{const n=pi(t.visibleWrites,e);return fi(n).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}}function Ni(t,e,n,i,s){(0,r.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=ye(e,n);if(hi(t.visibleWrites,o))return null;{const e=pi(t.visibleWrites,o);return gi(e)?s.getChild(n):mi(e,s.getChild(n))}}function Ai(t,e,n,i){const s=ye(e,n),r=di(t.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const e=pi(t.visibleWrites,s);return mi(e,i.getNode().getImmediateChild(n))}return null}function xi(t,e){return di(t.visibleWrites,e)}function Di(t,e,n,i,s,r,o){let a;const c=pi(t.visibleWrites,e),u=di(c,ue());if(null!=u)a=u;else{if(null==n)return[];a=mi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&t.length<s)0!==e(c,i)&&t.push(c),c=n.getNext();return t}}function Ri(){return{visibleWrites:ai.empty(),allWrites:[],lastWriteId:-1}}function Oi(t,e,n,i){return Si(t.writeTree,t.treePath,e,n,i)}function Pi(t,e){return ki(t.writeTree,t.treePath,e)}function Li(t,e,n,i){return Ni(t.writeTree,t.treePath,e,n,i)}function Mi(t,e){return xi(t.writeTree,ye(t.treePath,e))}function Fi(t,e,n,i,s,r){return Di(t.writeTree,t.treePath,e,n,i,s,r)}function Ui(t,e,n){return Ai(t.writeTree,t.treePath,e,n)}function Vi(t,e){return ji(ye(t.treePath,e),t.writeTree)}function ji(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,r.hu)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,r.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===e&&"child_removed"===s)this.changeMap.set(n,In(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===s)this.changeMap.set(n,Tn(n,i.oldSnap));else if("child_changed"===e&&"child_added"===s)this.changeMap.set(n,En(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==s)throw(0,r.g5)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,In(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Hi=new Bi;class Wi{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ui(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ii(this.viewCache_),s=Fi(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){(0,r.hu)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,r.hu)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ki(t,e,n,i,s){const o=new qi;let a,c;if(n.type===qn.OVERWRITE){const u=n;u.source.fromUser?a=Yi(t,e,u.path,u.snap,i,s,o):((0,r.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),a=Qi(t,e,u.path,u.snap,i,s,c,o))}else if(n.type===qn.MERGE){const u=n;u.source.fromUser?a=Xi(t,e,u.path,u.children,i,s,o):((0,r.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),a=ts(t,e,u.path,u.children,i,s,c,o))}else if(n.type===qn.ACK_USER_WRITE){const r=n;a=r.revert?is(t,e,r.path,i,s,o):es(t,e,r.path,r.affectedTree,i,s,o)}else{if(n.type!==qn.LISTEN_COMPLETE)throw(0,r.g5)("Unknown operation type: "+n.type);a=ns(t,e,n.path,i,o)}const u=o.getChanges();return Gi(e,a,u),{viewCache:a,changes:u}}function Gi(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ni(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Cn(ni(e)))}}function zi(t,e,n,i,s,o){const a=e.eventCache;if(null!=Mi(i,n))return e;{let c,u;if(_e(n))if((0,r.hu)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=ii(e),s=n instanceof fn?n:fn.EMPTY_NODE,r=Pi(i,s);c=t.filter.updateFullNode(e.eventCache.getNode(),r,o)}else{const n=Oi(i,ii(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const l=le(n);if(".priority"===l){(0,r.hu)(1===he(n),"Can't have a priority with additional path components");const s=a.getNode();u=e.serverCache.getNode();const o=Li(i,n,s,u);c=null!=o?t.filter.updatePriority(s,o):a.getNode()}else{const r=de(n);let h;if(a.isCompleteForChild(l)){u=e.serverCache.getNode();const t=Li(i,n,a.getNode(),u);h=null!=t?a.getNode().getImmediateChild(l).updateChild(r,t):a.getNode().getImmediateChild(l)}else h=Ui(i,l,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),l,h,r,s,o):a.getNode()}}return ti(e,c,a.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Qi(t,e,n,i,s,r,o,a){const c=e.serverCache;let u;const l=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,i);u=l.updateFullNode(c.getNode(),t,null)}else{const t=le(n);if(!c.isCompleteForPath(n)&&he(n)>1)return e;const s=de(n),r=c.getNode().getImmediateChild(t),o=r.updateChild(s,i);u=".priority"===t?l.updatePriority(c.getNode(),o):l.updateChild(c.getNode(),t,o,s,Hi,null)}const h=ei(e,u,c.isFullyInitialized()||_e(n),l.filtersNodes()),d=new Wi(s,h,r);return zi(t,h,n,s,d,a)}function Yi(t,e,n,i,s,r,o){const a=e.eventCache;let c,u;const l=new Wi(s,e,r);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ti(e,u,!0,t.filter.filtersNodes());else{const s=le(n);if(".priority"===s)u=t.filter.updatePriority(e.eventCache.getNode(),i),c=ti(e,u,a.isFullyInitialized(),a.isFiltered());else{const r=de(n),u=a.getNode().getImmediateChild(s);let h;if(_e(r))h=i;else{const t=l.getCompleteChild(s);h=null!=t?".priority"===fe(r)&&t.getChild(me(r)).isEmpty()?t:t.updateChild(r,i):fn.EMPTY_NODE}if(u.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),s,h,r,l,o);c=ti(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Ji(t,e){return t.eventCache.isCompleteForChild(e)}function Xi(t,e,n,i,s,r,o){let a=e;return i.foreach(((i,c)=>{const u=ye(n,i);Ji(e,le(u))&&(a=Yi(t,a,u,c,s,r,o))})),i.foreach(((i,c)=>{const u=ye(n,i);Ji(e,le(u))||(a=Yi(t,a,u,c,s,r,o))})),a}function Zi(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function ts(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,u=e;c=_e(n)?i:new oi(null).setTree(n,i);const l=e.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),l=Zi(t,c,i);u=Qi(t,u,new ce(n),l,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),l=Zi(t,c,i);u=Qi(t,u,new ce(n),l,s,r,o,a)}})),u}function es(t,e,n,i,s,r,o){if(null!=Mi(s,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=i.value){if(_e(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Qi(t,e,n,c.getNode().getChild(n),s,r,a,o);if(_e(n)){let i=new oi(null);return c.getNode().forEachChild(je,((t,e)=>{i=i.set(new ce(t),e)})),ts(t,e,n,i,s,r,a,o)}return e}{let u=new oi(null);return i.foreach(((t,e)=>{const i=ye(n,t);c.isCompleteForPath(i)&&(u=u.set(t,c.getNode().getChild(i)))})),ts(t,e,n,u,s,r,a,o)}}function ns(t,e,n,i,s){const r=e.serverCache,o=ei(e,r.getNode(),r.isFullyInitialized()||_e(n),r.isFiltered());return zi(t,o,n,i,Hi,s)}function is(t,e,n,i,s,o){let a;if(null!=Mi(i,n))return e;{const c=new Wi(i,e,s),u=e.eventCache.getNode();let l;if(_e(n)||".priority"===le(n)){let n;if(e.serverCache.isFullyInitialized())n=Oi(i,ii(e));else{const t=e.serverCache.getNode();(0,r.hu)(t instanceof fn,"serverChildren would be complete if leaf node"),n=Pi(i,t)}l=t.filter.updateFullNode(u,n,o)}else{const s=le(n);let r=Ui(i,s,e.serverCache);null==r&&e.serverCache.isCompleteForChild(s)&&(r=u.getImmediateChild(s)),l=null!=r?t.filter.updateChild(u,s,r,de(n),c,o):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(u,s,fn.EMPTY_NODE,de(n),c,o):u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Oi(i,ii(e)),a.isLeafNode()&&(l=t.filter.updateFullNode(l,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=Mi(i,ue()),ti(e,l,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){const n=ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function rs(t,e,n,i){e.type===qn.MERGE&&null!==e.source.queryId&&((0,r.hu)(ii(t.viewCache_),"We should always have a full cache before handling merges"),(0,r.hu)(ni(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,o=Ki(t.processor_,s,e,n,i);return $i(t.processor_,o.viewCache),(0,r.hu)(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,os(t,o.changes,o.viewCache.eventCache.getNode(),null)}function os(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Qn(t.eventGenerator_,e,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as,cs;function us(t){(0,r.hu)(!as,"__referenceConstructor has already been defined"),as=t}function ls(t,e,n,i){const s=e.source.queryId;if(null!==s){const o=t.views.get(s);return(0,r.hu)(null!=o,"SyncTree gave us an op for an invalid query."),rs(o,e,n,i)}{let s=[];for(const r of t.views.values())s=s.concat(rs(r,e,n,i));return s}}function hs(t,e){let n=null;for(const i of t.views.values())n=n||ss(i,e);return n}function ds(t){(0,r.hu)(!cs,"__referenceConstructor has already been defined"),cs=t}class fs{constructor(t){this.listenProvider_=t,this.syncPointTree_=new oi(null),this.pendingWriteTree_=Ri(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ps(t,e,n,i,s){return vi(t.pendingWriteTree_,e,n,i,s),s?bs(t,new Kn(Bn(),e,n)):[]}function gs(t,e,n=!1){const i=wi(t.pendingWriteTree_,e),s=bi(t.pendingWriteTree_,e);if(s){let e=new oi(null);return null!=i.snap?e=e.set(ue(),!0):U(i.children,(t=>{e=e.set(new ce(t),!0)})),bs(t,new $n(i.path,e,n))}return[]}function ms(t,e,n){return bs(t,new Kn(Hn(),e,n))}function ys(t,e,n){const i=oi.fromObject(n);return bs(t,new Gn(Hn(),e,i))}function _s(t,e,n,i){const s=Ts(t,i);if(null!=s){const i=Is(s),r=i.path,o=i.queryId,a=ve(r,e),c=new Kn(Wn(o),a,n);return Ss(t,r,c)}return[]}function vs(t,e,n,i){const s=Ts(t,i);if(s){const i=Is(s),r=i.path,o=i.queryId,a=ve(r,e),c=oi.fromObject(n),u=new Gn(Wn(o),a,c);return Ss(t,r,u)}return[]}function ws(t,e,n){const i=!0,s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=ve(t,e),s=hs(n,i);if(s)return s}));return Si(s,e,r,n,i)}function bs(t,e){return Cs(e,t.syncPointTree_,null,_i(t.pendingWriteTree_,ue()))}function Cs(t,e,n,i){if(_e(t.path))return Es(t,e,n,i);{const s=e.get(ue());null==n&&null!=s&&(n=hs(s,ue()));let r=[];const o=le(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=Vi(i,o);r=r.concat(Cs(a,c,t,e))}return s&&(r=r.concat(ls(s,t,i,n))),r}}function Es(t,e,n,i){const s=e.get(ue());null==n&&null!=s&&(n=hs(s,ue()));let r=[];return e.children.inorderTraversal(((e,s)=>{const o=n?n.getImmediateChild(e):null,a=Vi(i,e),c=t.operationForChild(e);c&&(r=r.concat(Es(c,s,o,a)))})),s&&(r=r.concat(ls(s,t,i,n))),r}function Ts(t,e){return t.tagToQueryMap.get(e)}function Is(t){const e=t.indexOf("$");return(0,r.hu)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Ss(t,e,n){const i=t.syncPointTree_.get(e);(0,r.hu)(i,"Missing sync point for query tag that we're tracking");const s=_i(t.pendingWriteTree_,e);return ls(i,n,s,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new ks(e)}node(){return this.node_}}class Ns{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ye(this.path_,t);return new Ns(this.syncTree_,e)}node(){return ws(this.syncTree_,this.path_)}}const As=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},xs=function(t,e,n){return t&&"object"===typeof t?((0,r.hu)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?Ds(t[".sv"],e,n):"object"===typeof t[".sv"]?Rs(t[".sv"],e):void(0,r.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Ds=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,r.hu)(!1,"Unexpected server value: "+t)}},Rs=function(t,e,n){t.hasOwnProperty("increment")||(0,r.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t["increment"];"number"!==typeof i&&(0,r.hu)(!1,"Unexpected increment value: "+i);const s=e.node();if((0,r.hu)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},Os=function(t,e,n,i){return Ls(e,new Ns(n,t),i)},Ps=function(t,e,n){return Ls(t,new ks(e),n)};function Ls(t,e,n){const i=t.getPriority().val(),s=xs(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=xs(i.getValue(),e,n);return r!==i.getValue()||s!==i.getPriority().val()?new tn(r,yn(s)):t}{const i=t;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new tn(s))),i.forEachChild(rn,((t,i)=>{const s=Ls(i,e.getImmediateChild(t),n);s!==i&&(r=r.updateImmediateChild(t,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Fs(t,e){let n=e instanceof ce?e:new ce(e),i=t,s=le(n);while(null!==s){const t=(0,r.DV)(i.node.children,s)||{children:{},childCount:0};i=new Ms(s,i,t),n=de(n),s=le(n)}return i}function Us(t){return t.node.value}function Vs(t,e){t.node.value=e,Ks(t)}function js(t){return t.node.childCount>0}function qs(t){return void 0===Us(t)&&!js(t)}function Bs(t,e){U(t.node.children,((n,i)=>{e(new Ms(n,t,i))}))}function Hs(t,e,n,i){n&&!i&&e(t),Bs(t,(t=>{Hs(t,e,!0,i)})),n&&i&&e(t)}function Ws(t,e,n){let i=n?t:t.parent;while(null!==i){if(e(i))return!0;i=i.parent}return!1}function $s(t){return new ce(null===t.parent?t.name:$s(t.parent)+"/"+t.name)}function Ks(t){null!==t.parent&&Gs(t.parent,t.name,t)}function Gs(t,e,n){const i=qs(n),s=(0,r.r3)(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ks(t)):i||s||(t.node.children[e]=n.node,t.node.childCount++,Ks(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=/[\[\].#$\/\u0000-\u001F\u007F]/,Qs=/[\[\].#$\u0000-\u001F\u007F]/,Ys=10485760,Js=function(t){return"string"===typeof t&&0!==t.length&&!zs.test(t)},Xs=function(t){return"string"===typeof t&&0!==t.length&&!Qs.test(t)},Zs=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xs(t)},tr=function(t,e,n){const i=n instanceof ce?new Ce(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Se(i));if("function"===typeof e)throw new Error(t+"contains a function "+Se(i)+" with contents = "+e.toString());if(A(e))throw new Error(t+"contains "+e.toString()+" "+Se(i));if("string"===typeof e&&e.length>Ys/3&&(0,r.ug)(e)>Ys)throw new Error(t+"contains a string greater than "+Ys+" utf8 bytes "+Se(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,s=!1;if(U(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!Js(e)))throw new Error(t+" contains an invalid key ("+e+") "+Se(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ee(i,e),tr(t,r,i),Te(i)})),n&&s)throw new Error(t+' contains ".value" child '+Se(i)+" in addition to actual children.")}},er=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Js(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Zs(n))throw new Error((0,r.gK)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ir(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();null===n||we(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function sr(t,e,n){ir(t,n),rr(t,(t=>be(t,e)||be(e,t)))}function rr(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(or(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function or(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();w&&E("event: "+n.toString()),K(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="repo_interrupt",cr=25;class ur{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rn(),this.transactionQueueTree_=new Ms,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lr(t,e,n){if(t.stats_=gt(t.repoInfo_),t.forceRestClient_||G())t.server_=new xn(t.repoInfo_,((e,n,i,s)=>{fr(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>pr(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,r.Wl)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Le(t.repoInfo_,e,((e,n,i,s)=>{fr(t,e,n,i,s)}),(e=>{pr(t,e)}),(e=>{gr(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=mt(t.repoInfo_,(()=>new jn(t.stats_,t.server_))),t.infoData_=new Dn,t.infoSyncTree_=new fs({startListening:(e,n,i,s)=>{let r=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(r=ms(t.infoSyncTree_,e._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),mr(t,"connected",!1),t.serverSyncTree_=new fs({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const r=s(n,i);sr(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function hr(t){const e=t.infoData_.getNode(new ce(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function dr(t){return As({timestamp:hr(t)})}function fr(t,e,n,i,s){t.dataUpdateCount++;const o=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(s)if(i){const e=(0,r.UI)(n,(t=>yn(t)));a=vs(t.serverSyncTree_,o,e,s)}else{const e=yn(n);a=_s(t.serverSyncTree_,o,e,s)}else if(i){const e=(0,r.UI)(n,(t=>yn(t)));a=ys(t.serverSyncTree_,o,e)}else{const e=yn(n);a=ms(t.serverSyncTree_,o,e)}let c=o;a.length>0&&(c=Tr(t,o)),sr(t.eventQueue_,c,a)}function pr(t,e){mr(t,"connected",e),!1===e&&_r(t)}function gr(t,e){U(e,((e,n)=>{mr(t,e,n)}))}function mr(t,e,n){const i=new ce("/.info/"+e),s=yn(n);t.infoData_.updateSnapshot(i,s);const r=ms(t.infoSyncTree_,i,s);sr(t.eventQueue_,i,r)}function yr(t){return t.nextWriteId_++}function _r(t){wr(t,"onDisconnectEvents");const e=dr(t),n=Rn();Pn(t.onDisconnect_,ue(),((i,s)=>{const r=Os(i,s,t.serverSyncTree_,e);On(n,i,r)}));let i=[];Pn(n,ue(),((e,n)=>{i=i.concat(ms(t.serverSyncTree_,e,n));const s=xr(t,e);Tr(t,s)})),t.onDisconnect_=Rn(),sr(t.eventQueue_,ue(),i)}function vr(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ar)}function wr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),E(n,...e)}function br(t,e,n){return ws(t.serverSyncTree_,e,n)||fn.EMPTY_NODE}function Cr(t,e=t.transactionQueueTree_){if(e||Ar(t,e),Us(e)){const n=kr(t,e);(0,r.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((t=>0===t.status));i&&Er(t,$s(e),n)}else js(e)&&Bs(e,(e=>{Cr(t,e)}))}function Er(t,e,n){const i=n.map((t=>t.currentWriteId)),s=br(t,e,i);let o=s;const a=s.hash();for(let l=0;l<n.length;l++){const t=n[l];(0,r.hu)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const i=ve(e,t.path);o=o.updateChild(i,t.currentOutputSnapshotRaw)}const c=o.val(!0),u=e;t.server_.put(u.toString(),c,(i=>{wr(t,"transaction put response",{path:u.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(gs(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Ar(t,Fs(t.transactionQueueTree_,e)),Cr(t,t.transactionQueueTree_),sr(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)K(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{k("transaction at "+u.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Tr(t,e)}}),a)}function Tr(t,e){const n=Sr(t,e),i=$s(n),s=kr(t,n);return Ir(t,s,i),i}function Ir(t,e,n){if(0===e.length)return;const i=[];let s=[];const o=e.filter((t=>0===t.status)),a=o.map((t=>t.currentWriteId));for(let c=0;c<e.length;c++){const o=e[c],u=ve(n,o.path);let l,h=!1;if((0,r.hu)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,l=o.abortReason,s=s.concat(gs(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=cr)h=!0,l="maxretry",s=s.concat(gs(t.serverSyncTree_,o.currentWriteId,!0));else{const n=br(t,o.path,a);o.currentInputSnapshot=n;const i=e[c].update(n.val());if(void 0!==i){tr("transaction failed: Data returned ",i,o.path);let e=yn(i);const c="object"===typeof i&&null!=i&&(0,r.r3)(i,".priority");c||(e=e.updatePriority(n.getPriority()));const u=o.currentWriteId,l=dr(t),h=Ps(e,n,l);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=h,o.currentWriteId=yr(t),a.splice(a.indexOf(u),1),s=s.concat(ps(t.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),s=s.concat(gs(t.serverSyncTree_,u,!0))}else h=!0,l="nodata",s=s.concat(gs(t.serverSyncTree_,o.currentWriteId,!0))}sr(t.eventQueue_,n,s),s=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===l?i.push((()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot))):i.push((()=>e[c].onComplete(new Error(l),!1,null)))))}Ar(t,t.transactionQueueTree_);for(let r=0;r<i.length;r++)K(i[r]);Cr(t,t.transactionQueueTree_)}function Sr(t,e){let n,i=t.transactionQueueTree_;n=le(e);while(null!==n&&void 0===Us(i))i=Fs(i,n),e=de(e),n=le(e);return i}function kr(t,e){const n=[];return Nr(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function Nr(t,e,n){const i=Us(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Bs(e,(e=>{Nr(t,e,n)}))}function Ar(t,e){const n=Us(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Vs(e,n.length>0?n:void 0)}Bs(e,(e=>{Ar(t,e)}))}function xr(t,e){const n=$s(Sr(t,e)),i=Fs(t.transactionQueueTree_,e);return Ws(i,(e=>{Dr(t,e)})),Dr(t,i),Hs(i,(e=>{Dr(t,e)})),n}function Dr(t,e){const n=Us(e);if(n){const i=[];let s=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,r.hu)(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):((0,r.hu)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),s=s.concat(gs(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Vs(e,void 0):n.length=o+1,sr(t.eventQueue_,$s(e),s);for(let t=0;t<i.length;t++)K(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let t=n[s];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(i){}e+="/"+t}return e}function Or(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):k(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pr=function(t,e){const n=Lr(t),i=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ce(n.pathString)}},Lr=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"===typeof t){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let l=t.indexOf("/");-1===l&&(l=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(l,h)),l<h&&(s=Rr(t.substring(l,h)));const d=Or(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in d&&(r=d["ns"])}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return _e(this._path)?null:fe(this._path)}get ref(){return new Fr(this._repo,this._path)}get _queryIdentifier(){const t=An(this._queryParams),e=M(t);return"{}"===e?"default":e}get _queryObject(){return An(this._queryParams)}isEqual(t){if(t=(0,r.m9)(t),!(t instanceof Mr))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pe(this._path)}}class Fr extends Mr{constructor(t,e){super(t,e,new kn,!1)}get parent(){const t=me(this._path);return null===t?null:new Fr(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}us(Fr),ds(Fr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ur="FIREBASE_DATABASE_EMULATOR_HOST",Vr={};let jr=!1;function qr(t,e,n,i,s){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Pr(r,s),u=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/quotes-app/"}[Ur]),a?(o=!0,r=`http://${a}?ns=${u.namespace}`,c=Pr(r,s),u=c.repoInfo):o=!c.repoInfo.secure;const l=s&&o?new J(J.OWNER):new Y(t.name,t.options,e);er("Invalid Firebase Database URL",c),_e(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hr(u,t,l,new Q(t.name,n));return new Wr(h,t)}function Br(t,e){const n=Vr[e];n&&n[t.key]===t||S(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vr(t),delete n[t.key]}function Hr(t,e,n,i){let s=Vr[e.name];s||(s={},Vr[e.name]=s);let r=s[t.toURLString()];return r&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ur(t,jr,n,i),s[t.toURLString()]=r,r}class Wr{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fr(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Br(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&S("Cannot call "+t+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(t){l(i.Jn),(0,i.Xd)(new s.wA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return qr(n,i,s,e)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,c,t),(0,i.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Le.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$r()},6257:function(t,e,n){"use strict";n.d(e,{ad:function(){return i.ad}});var i=n(1294)},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n}},3907:function(t,e,n){"use strict";n.d(e,{MT:function(){return tt}});var i=n(6252),s=n(2262);function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},n);try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(s,e)}catch(r){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(r){}s=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,i=o(),s=r(),u=a&&n.enableEarlyProxy;if(!s||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,s):null,r=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else s.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function _(t){return null!==t&&"object"===typeof t}function v(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function C(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,s.B)(!0);l.run((function(){y(a,(function(e,n){c[n]=w(e,t),u[n]=(0,i.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,s.qj)({data:e}),t._scope=l,t.strict&&x(t),r&&n&&t._withCommit((function(){r.data=null})),o&&o.stop()}function T(t,e,n,i,s){var r=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!r&&!s){var a=D(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=i.state}))}var u=i.context=I(t,o,n);i.forEachMutation((function(e,n){var i=o+n;k(t,i,e,u)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,s=e.handler||e;N(t,i,s,u)})),i.forEachGetter((function(e,n){var i=o+n;A(t,i,e,u)})),i.forEachChild((function(i,r){T(t,e,n.concat(r),i,s)}))}function I(t,e,n){var i=""===e,s={dispatch:i?t.dispatch:function(n,i,s){var r=R(n,i,s),o=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,s){var r=R(n,i,s),o=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:i?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return D(t.state,n)}}}),s}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,i){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,i.state,e)}))}function N(t,e,n,i){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return v(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function A(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function x(t){(0,i.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function D(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return _(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var O="vuex bindings",P="vuex:mutations",L="vuex:actions",M="vuex",F=0;function U(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:V}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:V}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var i=[];$(i,e._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[W(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var i=n.nodeId;S(e,i),n.state=K(z(e._modules,i),"root"===i?e.getters:e._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var i=n.nodeId,s=n.path;"root"!==i&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit((function(){n.set(e._state.data,s,n.state.value)}))}})),e.subscribe((function(t,e){var i={};t.payload&&(i.payload=t.payload),i.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:i}})})),e.subscribeAction({before:function(t,e){var i={};t.payload&&(i.payload=t.payload),t._id=F++,t._time=Date.now(),i.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:i}})},after:function(t,e){var i={},s=Date.now()-t._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},t.payload&&(i.payload=t.payload),i.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:i}})}})}))}var V=8702998,j=6710886,q=16777215,B={label:"namespaced",textColor:q,backgroundColor:j};function H(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function W(t,e){return{id:e||"root",label:H(e),tags:t.namespaced?[B]:[],children:Object.keys(t._children).map((function(n){return W(t._children[n],e+n+"/")}))}}function $(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[B]:[]}),Object.keys(e._children).forEach((function(s){$(t,e._children[s],n,i+s+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var i=Object.keys(e),s={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(i.length){var r=G(e);s.getters=Object.keys(r).map((function(t){return{key:t.endsWith("/")?H(t):t,editable:!1,value:Q((function(){return r[t]}))}}))}return s}function G(t){var e={};return Object.keys(t).forEach((function(n){var i=n.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach((function(t){s[t]||(s[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),s=s[t]._custom.value})),s[r]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function z(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,i,s){var r=t[i];if(!r)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?r:r._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var Y=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(t,e){this._children[t]=e},Y.prototype.removeChild=function(t){delete this._children[t]},Y.prototype.getChild=function(t){return this._children[t]},Y.prototype.hasChild=function(t){return t in this._children},Y.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Y.prototype.forEachChild=function(t){y(this._children,t)},Y.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Y.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Y.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Y.prototype,J);var X=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;Z(t.concat(i),e.getChild(i),n.modules[i])}}X.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},X.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},X.prototype.update=function(t){Z([],this.root,t)},X.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var s=new Y(e,n);if(0===t.length)this.root=s;else{var r=this.get(t.slice(0,-1));r.addChild(t[t.length-1],s)}e.modules&&y(e.modules,(function(e,s){i.register(t.concat(s),e,n)}))},X.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},X.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var r=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var i=this,s=R(t,e,n),r=s.type,o=s.payload,a=(s.options,{type:r,payload:o}),c=this._mutations[r];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},et.prototype.dispatch=function(t,e){var n=this,i=R(t,e),s=i.type,r=i.payload,o={type:s,payload:r},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var s=this;return(0,i.YP)((function(){return t(s.state,s.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=D(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),C(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),C(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);rt((function(t,e){var n={};return it(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=ot(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[i].vuex=!0})),n})),rt((function(t,e){var n={};return it(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=ot(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"===typeof s?s.apply(this,[i].concat(e)):i.apply(this.$store,[s].concat(e))}})),n})),rt((function(t,e){var n={};return it(e).forEach((function(e){var i=e.key,s=e.val;s=t+s,n[i]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[s]},n[i].vuex=!0})),n})),rt((function(t,e){var n={};return it(e).forEach((function(e){var i=e.key,s=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=ot(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"===typeof s?s.apply(this,[i].concat(e)):i.apply(this.$store,[s].concat(e))}})),n}));function it(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||_(t)}function rt(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var i=t._modulesNamespaceMap[n];return i}},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return _t}});var i=n(8463),s=n(3333),r=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(C(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));d.set(t,e)}let _={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function v(t){_=t(_)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(E(this),e),C(h.get(this))}:function(...e){return C(t.apply(E(this),e))}:function(e,...n){const i=t.call(E(this),e,...n);return f.set(i,e.sort?e.sort():[e]),C(i)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,_):t)}function C(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const E=t=>g.get(t);function T(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=C(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(C(o.result),t.oldVersion,t.newVersion,C(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function N(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=S.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!I.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return k.set(e,r),r}v((t=>({...t,get:(e,n,i)=>N(e,n)||t.get(e,n,i),has:(e,n)=>!!N(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",R="0.8.4",O=new s.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",W="@firebase/functions-compat",$="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",z="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",st="9.14.0",rt="[DEFAULT]",ot={[D]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[W]:"fire-fn-compat",[$]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[z]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new r.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=st;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,r.vZ)(n,a.options)&&(0,r.vZ)(s,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new i.H0(o);for(const i of ct.values())c.addComponent(i);const u=new pt(n,s,c);return at.set(o,u),u}function yt(t=rt){const e=at.get(t);if(!e&&t===rt)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let r=null!==(s=ot[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}lt(new i.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Ct=null;function Et(){return Ct||(Ct=T(vt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function Tt(t){var e;try{const e=await Et();return e.transaction(bt).objectStore(bt).get(St(t))}catch(n){if(n instanceof r.ZR)O.warn(n.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function It(t,e){var n;try{const n=await Et(),i=n.transaction(bt,"readwrite"),s=i.objectStore(bt);return await s.put(e,St(t)),i.done}catch(i){if(i instanceof r.ZR)O.warn(i.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});O.warn(t.message)}}}function St(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1024,Nt=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Nt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=xt(),{heartbeatsToSend:e,unsentEntries:n}=Dt(this._heartbeatsCache.heartbeats),i=(0,r.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=kt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new i.wA("platform-logger",(t=>new A(t)),"PRIVATE")),lt(new i.wA("heartbeat",(t=>new At(t)),"PRIVATE")),_t(D,R,t),_t(D,R,"esm2017"),_t("fire-js","")}Pt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return s}});var i=n(4444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.9679de8c.js.map