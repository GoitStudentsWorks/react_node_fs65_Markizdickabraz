(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2467:function(t,e,n){t=n.nmd(t);var r="__lodash_hash_undefined__",i=1,o=2,a=9007199254740991,u="[object Arguments]",s="[object Array]",c="[object AsyncFunction]",l="[object Boolean]",f="[object Date]",p="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",y="[object Number]",b="[object Null]",_="[object Object]",g="[object Promise]",w="[object Proxy]",m="[object RegExp]",j="[object Set]",E="[object String]",O="[object Symbol]",x="[object Undefined]",k="[object WeakMap]",T="[object ArrayBuffer]",z="[object DataView]",P=/^\[object .+?Constructor\]$/,S=/^(?:0|[1-9]\d*)$/,L={};L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L[u]=L[s]=L[T]=L[l]=L[z]=L[f]=L[p]=L[d]=L[v]=L[y]=L[_]=L[m]=L[j]=L[E]=L[k]=!1;var A="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,D="object"==typeof self&&self&&self.Object===Object&&self,M=A||D||Function("return this")(),C=e&&!e.nodeType&&e,I=C&&t&&!t.nodeType&&t,N=I&&I.exports===C,U=N&&A.process,F=function(){try{return U&&U.binding&&U.binding("util")}catch(t){}}(),$=F&&F.isTypedArray;function B(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function R(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function W(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var V,X,Y=Array.prototype,G=Function.prototype,Z=Object.prototype,q=M["__core-js_shared__"],H=G.toString,J=Z.hasOwnProperty,K=function(){var t=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Q=Z.toString,tt=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=N?M.Buffer:void 0,nt=M.Symbol,rt=M.Uint8Array,it=Z.propertyIsEnumerable,ot=Y.splice,at=nt?nt.toStringTag:void 0,ut=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ct=(V=Object.keys,X=Object,function(t){return V(X(t))}),lt=Ut(M,"DataView"),ft=Ut(M,"Map"),pt=Ut(M,"Promise"),dt=Ut(M,"Set"),ht=Ut(M,"WeakMap"),vt=Ut(Object,"create"),yt=Rt(lt),bt=Rt(ft),_t=Rt(pt),gt=Rt(dt),wt=Rt(ht),mt=nt?nt.prototype:void 0,jt=mt?mt.valueOf:void 0;function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function kt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new xt;++e<n;)this.add(t[e])}function Tt(t){var e=this.__data__=new Ot(t);this.size=e.size}function zt(t,e){var n=Xt(t),r=!n&&Vt(t),i=!n&&!r&&Yt(t),o=!n&&!r&&!i&&Jt(t),a=n||r||i||o,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],s=u.length;for(var c in t)!e&&!J.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Bt(c,s))||u.push(c);return u}function Pt(t,e){for(var n=t.length;n--;)if(Wt(t[n][0],e))return n;return-1}function St(t){return null==t?void 0===t?x:b:at&&at in Object(t)?function(t){var e=J.call(t,at),n=t[at];try{t[at]=void 0;var r=!0}catch(o){}var i=Q.call(t);r&&(e?t[at]=n:delete t[at]);return i}(t):function(t){return Q.call(t)}(t)}function Lt(t){return Ht(t)&&St(t)==u}function At(t,e,n,r,a){return t===e||(null==t||null==e||!Ht(t)&&!Ht(e)?t!==t&&e!==e:function(t,e,n,r,a,c){var d=Xt(t),h=Xt(e),b=d?s:$t(t),g=h?s:$t(e),w=(b=b==u?_:b)==_,x=(g=g==u?_:g)==_,k=b==g;if(k&&Yt(t)){if(!Yt(e))return!1;d=!0,w=!1}if(k&&!w)return c||(c=new Tt),d||Jt(t)?Ct(t,e,n,r,a,c):function(t,e,n,r,a,u,s){switch(n){case z:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case T:return!(t.byteLength!=e.byteLength||!u(new rt(t),new rt(e)));case l:case f:case y:return Wt(+t,+e);case p:return t.name==e.name&&t.message==e.message;case m:case E:return t==e+"";case v:var c=R;case j:var d=r&i;if(c||(c=W),t.size!=e.size&&!d)return!1;var h=s.get(t);if(h)return h==e;r|=o,s.set(t,e);var b=Ct(c(t),c(e),r,a,u,s);return s.delete(t),b;case O:if(jt)return jt.call(t)==jt.call(e)}return!1}(t,e,b,n,r,a,c);if(!(n&i)){var P=w&&J.call(t,"__wrapped__"),S=x&&J.call(e,"__wrapped__");if(P||S){var L=P?t.value():t,A=S?e.value():e;return c||(c=new Tt),a(L,A,n,r,c)}}if(!k)return!1;return c||(c=new Tt),function(t,e,n,r,o,a){var u=n&i,s=It(t),c=s.length,l=It(e),f=l.length;if(c!=f&&!u)return!1;var p=c;for(;p--;){var d=s[p];if(!(u?d in e:J.call(e,d)))return!1}var h=a.get(t);if(h&&a.get(e))return h==e;var v=!0;a.set(t,e),a.set(e,t);var y=u;for(;++p<c;){var b=t[d=s[p]],_=e[d];if(r)var g=u?r(_,b,d,e,t,a):r(b,_,d,t,e,a);if(!(void 0===g?b===_||o(b,_,n,r,a):g)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var w=t.constructor,m=e.constructor;w==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof w&&w instanceof w&&"function"==typeof m&&m instanceof m||(v=!1)}return a.delete(t),a.delete(e),v}(t,e,n,r,a,c)}(t,e,n,r,At,a))}function Dt(t){return!(!qt(t)||function(t){return!!K&&K in t}(t))&&(Gt(t)?tt:P).test(Rt(t))}function Mt(t){if(!function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||Z;return t===n}(t))return ct(t);var e=[];for(var n in Object(t))J.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ct(t,e,n,r,a,u){var s=n&i,c=t.length,l=e.length;if(c!=l&&!(s&&l>c))return!1;var f=u.get(t);if(f&&u.get(e))return f==e;var p=-1,d=!0,h=n&o?new kt:void 0;for(u.set(t,e),u.set(e,t);++p<c;){var v=t[p],y=e[p];if(r)var b=s?r(y,v,p,e,t,u):r(v,y,p,t,e,u);if(void 0!==b){if(b)continue;d=!1;break}if(h){if(!B(e,(function(t,e){if(i=e,!h.has(i)&&(v===t||a(v,t,n,r,u)))return h.push(e);var i}))){d=!1;break}}else if(v!==y&&!a(v,y,n,r,u)){d=!1;break}}return u.delete(t),u.delete(e),d}function It(t){return function(t,e,n){var r=e(t);return Xt(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Kt,Ft)}function Nt(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ut(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(n)?n:void 0}Et.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},Et.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Et.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===r?void 0:n}return J.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:J.call(e,t)},Et.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vt&&void 0===e?r:e,this},Ot.prototype.clear=function(){this.__data__=[],this.size=0},Ot.prototype.delete=function(t){var e=this.__data__,n=Pt(e,t);return!(n<0)&&(n==e.length-1?e.pop():ot.call(e,n,1),--this.size,!0)},Ot.prototype.get=function(t){var e=this.__data__,n=Pt(e,t);return n<0?void 0:e[n][1]},Ot.prototype.has=function(t){return Pt(this.__data__,t)>-1},Ot.prototype.set=function(t,e){var n=this.__data__,r=Pt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},xt.prototype.clear=function(){this.size=0,this.__data__={hash:new Et,map:new(ft||Ot),string:new Et}},xt.prototype.delete=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},xt.prototype.get=function(t){return Nt(this,t).get(t)},xt.prototype.has=function(t){return Nt(this,t).has(t)},xt.prototype.set=function(t,e){var n=Nt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,r),this},kt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.clear=function(){this.__data__=new Ot,this.size=0},Tt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Ot){var r=n.__data__;if(!ft||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new xt(r)}return n.set(t,e),this.size=n.size,this};var Ft=ut?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}(ut(t),(function(e){return it.call(t,e)})))}:function(){return[]},$t=St;function Bt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||S.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){if(null!=t){try{return H.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Wt(t,e){return t===e||t!==t&&e!==e}(lt&&$t(new lt(new ArrayBuffer(1)))!=z||ft&&$t(new ft)!=v||pt&&$t(pt.resolve())!=g||dt&&$t(new dt)!=j||ht&&$t(new ht)!=k)&&($t=function(t){var e=St(t),n=e==_?t.constructor:void 0,r=n?Rt(n):"";if(r)switch(r){case yt:return z;case bt:return v;case _t:return g;case gt:return j;case wt:return k}return e});var Vt=Lt(function(){return arguments}())?Lt:function(t){return Ht(t)&&J.call(t,"callee")&&!it.call(t,"callee")},Xt=Array.isArray;var Yt=st||function(){return!1};function Gt(t){if(!qt(t))return!1;var e=St(t);return e==d||e==h||e==c||e==w}function Zt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function qt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ht(t){return null!=t&&"object"==typeof t}var Jt=$?function(t){return function(e){return t(e)}}($):function(t){return Ht(t)&&Zt(t.length)&&!!L[St(t)]};function Kt(t){return null!=(e=t)&&Zt(e.length)&&!Gt(e)?zt(t):Mt(t);var e}t.exports=function(t,e){return At(t,e)}},4965:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(2007)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(2791)),o=u(n(412)),a=u(n(2467));function u(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),n=e,r=[{key:"componentDidMount",value:function(){this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.childCount,r=e.swipeOptions;(t.childCount!==n||!(0,a.default)(t.swipeOptions,r))&&(this.swipe.kill(),this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions))}},{key:"componentWillUnmount",value:function(){this.swipe.kill(),this.swipe=void 0}},{key:"next",value:function(){this.swipe.next()}},{key:"prev",value:function(){this.swipe.prev()}},{key:"slide",value:function(){var t;(t=this.swipe).slide.apply(t,arguments)}},{key:"getPos",value:function(){return this.swipe.getPos()}},{key:"getNumSlides",value:function(){return this.swipe.getNumSlides()}},{key:"render",value:function(){var t=this,e=this.props,n=e.id,r=e.className,o=e.style,a=e.children;return i.default.createElement("div",{id:n,ref:function(e){return t.containerEl=e},className:"react-swipe-container ".concat(r),style:o.container},i.default.createElement("div",{style:o.wrapper},i.default.Children.map(a,(function(t){if(!t)return null;var e=t.props.style?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){d(t,e,n[e])}))}return t}({},o.child,t.props.style):o.child;return i.default.cloneElement(t,{style:e})}))))}}],r&&c(n.prototype,r),u&&c(n,u),e}(i.Component);d(h,"propTypes",{swipeOptions:r.default.shape({startSlide:r.default.number,speed:r.default.number,auto:r.default.number,continuous:r.default.bool,disableScroll:r.default.bool,stopPropagation:r.default.bool,swiping:r.default.func,callback:r.default.func,transitionEnd:r.default.func}),style:r.default.shape({container:r.default.object,wrapper:r.default.object,child:r.default.object}),id:r.default.string,className:r.default.string,childCount:r.default.number}),d(h,"defaultProps",{swipeOptions:{},style:{container:{overflow:"hidden",visibility:"hidden",position:"relative"},wrapper:{overflow:"hidden",position:"relative"},child:{float:"left",width:"100%",position:"relative",transitionProperty:"transform"}},className:"",childCount:0});var v=h;e.default=v,t.exports=e.default},412:function(t){var e,n;e=this,n=function(){"use strict";return function(t,e){var n=function(){},r=function(t){setTimeout(t||n,0)},i={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"))};if(t){var o,a,u,s,c=t.children[0];e=e||{};var l,f,p=parseInt(e.startSlide,10)||0,d=e.speed||300,h=parseInt(e.widthOfSiblingSlidePreview,10)||0,v=e.continuous=void 0===e.continuous||e.continuous,y=e.auto||0,b={},_={},g={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":r(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(t));break;case"resize":r(w)}e.stopPropagation&&t.stopPropagation()},start:function(t){var e=t.touches[0];b={x:e.pageX,y:e.pageY,time:+new Date},f=void 0,_={},c.addEventListener("touchmove",this,!1),c.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)&&!e.disableScroll){var n=t.touches[0];_={x:n.pageX-b.x,y:n.pageY-b.y},"undefined"==typeof f&&(f=!!(f||Math.abs(_.x)<Math.abs(_.y))),f||(t.preventDefault(),T(),v?(x(j(p-1),_.x+a[j(p-1)],0),x(p,_.x+a[p],0),x(j(p+1),_.x+a[j(p+1)],0)):(_.x=_.x/(!p&&_.x>0||p==o.length-1&&_.x<0?Math.abs(_.x)/u+1:1),x(p-1,_.x+a[p-1],0),x(p,_.x+a[p],0),x(p+1,_.x+a[p+1],0)),e.swiping&&e.swiping(-_.x/u))}},end:function(t){var n=+new Date-b.time,r=Number(n)<250&&Math.abs(_.x)>20||Math.abs(_.x)>u/2,i=!p&&_.x>0||p==o.length-1&&_.x<0;v&&(i=!1);var s=_.x<0;f||(r&&!i?(s?(v?(O(j(p-1),-u,0),O(j(p+2),u,0)):O(p-1,-u,0),O(p,a[p]-u,d),O(j(p+1),a[j(p+1)]-u,d),p=j(p+1)):(v?(O(j(p+1),u,0),O(j(p-2),-u,0)):O(p+1,u,0),O(p,a[p]+u,d),O(j(p-1),a[j(p-1)]+u,d),p=j(p-1)),e.callback&&e.callback(p,o[p])):v?(O(j(p-1),-u,d),O(p,0,d),O(j(p+1),u,d)):(O(p-1,-u,d),O(p,0,d),O(p+1,u,d))),c.removeEventListener("touchmove",g,!1),c.removeEventListener("touchend",g,!1),c.removeEventListener("touchforcechange",(function(){}),!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==p&&(y&&k(),e.transitionEnd&&e.transitionEnd.call(t,p,o[p]))}};return w(),y&&k(),i.addEventListener?(i.touch&&(c.addEventListener("touchstart",g,!1),c.addEventListener("touchforcechange",(function(){}),!1)),i.transitions&&(c.addEventListener("webkitTransitionEnd",g,!1),c.addEventListener("msTransitionEnd",g,!1),c.addEventListener("oTransitionEnd",g,!1),c.addEventListener("otransitionend",g,!1),c.addEventListener("transitionend",g,!1)),window.addEventListener("resize",g,!1)):window.onresize=function(){w()},{setup:function(){w()},slide:function(t,e){T(),E(t,e)},prev:function(){T(),(v||p)&&E(p-1)},next:function(){T(),m()},stop:function(){T()},getPos:function(){return p},getNumSlides:function(){return s},kill:function(){T(),c.style.width="",c.style.left="";for(var t=o.length;t--;){var e=o[t];e.style.width="",e.style.left="",i.transitions&&x(t,0,0)}i.addEventListener?(c.removeEventListener("touchstart",g,!1),c.removeEventListener("webkitTransitionEnd",g,!1),c.removeEventListener("msTransitionEnd",g,!1),c.removeEventListener("oTransitionEnd",g,!1),c.removeEventListener("otransitionend",g,!1),c.removeEventListener("transitionend",g,!1),window.removeEventListener("resize",g,!1)):window.onresize=null}}}function w(){o=c.children,s=o.length,v=!(o.length<2)&&e.continuous,a=new Array(o.length),u=Math.round(t.getBoundingClientRect().width||t.offsetWidth)-2*h,c.style.width=o.length*u+"px";for(var n=o.length;n--;){var r=o[n];r.style.width=u+"px",r.setAttribute("data-index",n),i.transitions&&(r.style.left=n*-u+h+"px",O(n,p>n?-u:p<n?u:0,0))}v&&i.transitions&&(O(j(p-1),-u,0),O(j(p+1),u,0)),i.transitions||(c.style.left=p*-u+h+"px"),t.style.visibility="visible"}function m(){(v||p<o.length-1)&&E(p+1)}function j(t){return(o.length+t%o.length)%o.length}function E(t,n){if(p!=t){if(i.transitions){var s=Math.abs(p-t)/(p-t);if(v){var l=s;(s=-a[j(t)]/u)!==l&&(t=-s*o.length+t)}for(var f=Math.abs(p-t)-1;f--;)O(j((t>p?t:p)-f-1),u*s,0);t=j(t),O(p,u*s,n||d),O(t,0,n||d),v&&O(j(t-s),-u*s,0)}else t=j(t),function(t,n,r){if(r)var i=+new Date,a=setInterval((function(){var u=+new Date-i;if(u>r)return c.style.left=n+"px",y&&k(),e.transitionEnd&&e.transitionEnd.call(event,p,o[p]),void clearInterval(a);c.style.left=(n-t)*(Math.floor(u/r*100)/100)+t+"px"}),4);else c.style.left=n+"px"}(p*-u,t*-u,n||d);p=t,r(e.callback&&e.callback(p,o[p]))}}function O(t,e,n){x(t,e,n),a[t]=e}function x(t,e,n){var r=o[t],i=r&&r.style;i&&(i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms",i.webkitTransform="translate("+e+"px,0)translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+e+"px)")}function k(){clearTimeout(l),l=setTimeout(m,y)}function T(){y=0,clearTimeout(l)}}},t.exports?t.exports=n():e.Swipe=n()},5984:function(t,e,n){"use strict";n.d(e,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=415.04bbab01.chunk.js.map