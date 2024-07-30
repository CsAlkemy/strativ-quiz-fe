"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{3541:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,i={},a=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});i[n]||(i[n]=new WeakMap);var s=i[n],d=[],f=new Set,p=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var v=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))v(e);else try{var t=e.getAttribute(c),i=null!==t&&"false"!==t,a=(r.get(e)||0)+1,u=(s.get(e)||0)+1;r.set(e,a),s.set(e,u),d.push(e),1===a&&i&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),i||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return v(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,i=s.get(e)-1;r.set(e,t),s.set(e,i),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),i||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},760:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(1462).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},8154:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(1462).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},1930:function(e,t,n){n.d(t,{Z:function(){return H}});var r,o,i,a,u,c,l,s=n(7582),d=n(7294),f="right-scroll-bar-position",p="width-before-scroll-bar";function m(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var v="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,h=new WeakMap,g=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),i=[],a=!1,u={read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=o(e,a);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){a=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=(0,s.pi)({async:!0,ssr:!1},r),u),y=function(){},E=d.forwardRef(function(e,t){var n,r,o,i,a=d.useRef(null),u=d.useState({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:y}),c=u[0],l=u[1],f=e.forwardProps,p=e.children,E=e.className,b=e.removeScrollBar,w=e.enabled,C=e.shards,N=e.sideCar,x=e.noIsolation,R=e.inert,M=e.allowPinchZoom,S=e.as,D=e.gapMode,T=(0,s._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=(n=[a,t],r=function(e){return n.forEach(function(t){return m(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,v(function(){var e=h.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||m(e,null)}),r.forEach(function(e){t.has(e)||m(e,o)})}h.set(i,n)},[n]),i),O=(0,s.pi)((0,s.pi)({},T),c);return d.createElement(d.Fragment,null,w&&d.createElement(N,{sideCar:g,removeScrollBar:b,shards:C,noIsolation:x,inert:R,setCallbacks:l,allowPinchZoom:!!M,lockRef:a,gapMode:D}),f?d.cloneElement(d.Children.only(p),(0,s.pi)((0,s.pi)({},O),{ref:k})):d.createElement(void 0===S?"div":S,(0,s.pi)({},O,{className:E,ref:k}),p))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:p,zeroRight:f};var b=function(e){var t=e.sideCar,n=(0,s._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,(0,s.pi)({},n))};b.isSideCarExport=!0;var w=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=w();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},N=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},x={left:0,top:0,right:0,gap:0},R=function(e){return parseInt(e||"",10)||0},M=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[R(n),R(r),R(o)]},S=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return x;var t=M(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},D=N(),T="data-scroll-locked",k=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(T,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(p," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(T,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},O=function(){var e=parseInt(document.body.getAttribute(T)||"0",10);return isFinite(e)?e:0},P=function(){d.useEffect(function(){return document.body.setAttribute(T,(O()+1).toString()),function(){var e=O()-1;e<=0?document.body.removeAttribute(T):document.body.setAttribute(T,e.toString())}},[])},W=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;P();var i=d.useMemo(function(){return S(o)},[o]);return d.createElement(D,{styles:k(i,!t,o,n?"":"!important")})},L=!1;if("undefined"!=typeof window)try{var j=Object.defineProperty({},"passive",{get:function(){return L=!0,!0}});window.addEventListener("test",j,j),window.removeEventListener("test",j,j)}catch(e){L=!1}var A=!!L&&{passive:!1},I=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},F=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),_(e,r)){var o=V(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},_=function(e,t){return"v"===e?I(t,"overflowY"):I(t,"overflowX")},V=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},B=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,p=0;do{var m=V(e,c),v=m[0],h=m[1]-m[2]-a*v;(v||h)&&_(e,c)&&(f+=h,p+=v),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$=function(e){return[e.deltaX,e.deltaY]},Z=function(e){return e&&"current"in e?e.current:e},z=0,X=[],K=(c=function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(z++)[0],i=d.useState(N)[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,s.ev)([e.lockRef.current],(e.shards||[]).map(Z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=U(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=F(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=F(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return B(p,t,e,"h"===p?c:l,!0)},[]),c=d.useCallback(function(e){if(X.length&&X[X.length-1]===i){var n="deltaY"in e?$(e):U(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(Z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),f=d.useCallback(function(e){n.current=U(e),r.current=void 0},[]),p=d.useCallback(function(t){l(t.type,$(t),t.target,u(t,e.lockRef.current))},[]),m=d.useCallback(function(t){l(t.type,U(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return X.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",c,A),document.addEventListener("touchmove",c,A),document.addEventListener("touchstart",f,A),function(){X=X.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,A),document.removeEventListener("touchmove",c,A),document.removeEventListener("touchstart",f,A)}},[]);var v=e.removeScrollBar,h=e.inert;return d.createElement(d.Fragment,null,h?d.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?d.createElement(W,{gapMode:e.gapMode}):null)},g.useMedium(c),b),Y=d.forwardRef(function(e,t){return d.createElement(E,(0,s.pi)({},e,{ref:t,sideCar:K}))});Y.classNames=E.classNames;var H=Y},6206:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},8771:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return i}});var r=n(7294);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(o(...e),e)}},5360:function(e,t,n){n.d(t,{b:function(){return a},k:function(){return i}});var r=n(7294),o=n(5893);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,a=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:a,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function a(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let a=r.createContext(i),u=n.length;function c(t){let{scope:n,children:i,...c}=t,l=n?.[e][u]||a,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:i})}return n=[...n,i],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][u]||a,l=r.useContext(c);if(l)return l;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},7511:function(e,t,n){n.d(t,{x8:function(){return el},VY:function(){return ea},dk:function(){return ec},aV:function(){return ei},h_:function(){return eo},fC:function(){return en},Dx:function(){return eu},xz:function(){return er}});var r=n(7294),o=n(6206),i=n(8771),a=n(5360),u=n(1276),c=n(7342),l=n(6063),s=n(5420),d=n(3935),f=n(4757),p=n(9981),m=n(5893),v=r.forwardRef((e,t)=>{let{container:n,...o}=e,[i,a]=r.useState(!1);(0,p.b)(()=>a(!0),[]);let u=n||i&&globalThis?.document?.body;return u?d.createPortal((0,m.jsx)(f.WV.div,{...o,ref:t}),u):null});v.displayName="Portal";var h=n(9115),g=n(7552),y=n(1930),E=n(3541),b=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),a=i.find(N);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,m.jsx)(w,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,m.jsx)(w,{...o,ref:t,children:n})});b.displayName="Slot";var w=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,a;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,i.F)(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});w.displayName="SlotClone";var C=({children:e})=>(0,m.jsx)(m.Fragment,{children:e});function N(e){return r.isValidElement(e)&&e.type===C}var x="Dialog",[R,M]=(0,a.b)(x),[S,D]=R(x),T=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:i,onOpenChange:a,modal:l=!0}=e,s=r.useRef(null),d=r.useRef(null),[f=!1,p]=(0,c.T)({prop:o,defaultProp:i,onChange:a});return(0,m.jsx)(S,{scope:t,triggerRef:s,contentRef:d,contentId:(0,u.M)(),titleId:(0,u.M)(),descriptionId:(0,u.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:l,children:n})};T.displayName=x;var k="DialogTrigger",O=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=D(k,n),u=(0,i.e)(t,a.triggerRef);return(0,m.jsx)(f.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":q(a.open),...r,ref:u,onClick:(0,o.M)(e.onClick,a.onOpenToggle)})});O.displayName=k;var P="DialogPortal",[W,L]=R(P,{forceMount:void 0}),j=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:i}=e,a=D(P,t);return(0,m.jsx)(W,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,m.jsx)(h.z,{present:n||a.open,children:(0,m.jsx)(v,{asChild:!0,container:i,children:e})}))})};j.displayName=P;var A="DialogOverlay",I=r.forwardRef((e,t)=>{let n=L(A,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=D(A,e.__scopeDialog);return i.modal?(0,m.jsx)(h.z,{present:r||i.open,children:(0,m.jsx)(F,{...o,ref:t})}):null});I.displayName=A;var F=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=D(A,n);return(0,m.jsx)(y.Z,{as:b,allowPinchZoom:!0,shards:[o.contentRef],children:(0,m.jsx)(f.WV.div,{"data-state":q(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),_="DialogContent",V=r.forwardRef((e,t)=>{let n=L(_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=D(_,e.__scopeDialog);return(0,m.jsx)(h.z,{present:r||i.open,children:i.modal?(0,m.jsx)(B,{...o,ref:t}):(0,m.jsx)(U,{...o,ref:t})})});V.displayName=_;var B=r.forwardRef((e,t)=>{let n=D(_,e.__scopeDialog),a=r.useRef(null),u=(0,i.e)(t,n.contentRef,a);return r.useEffect(()=>{let e=a.current;if(e)return(0,E.Ry)(e)},[]),(0,m.jsx)($,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),U=r.forwardRef((e,t)=>{let n=D(_,e.__scopeDialog),o=r.useRef(!1),i=r.useRef(!1);return(0,m.jsx)($,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||n.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let r=t.target;n.triggerRef.current?.contains(r)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),$=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:a,onCloseAutoFocus:u,...c}=e,d=D(_,n),f=r.useRef(null),p=(0,i.e)(t,f);return(0,g.EW)(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:a,onUnmountAutoFocus:u,children:(0,m.jsx)(l.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":q(d.open),...c,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ee,{titleId:d.titleId}),(0,m.jsx)(et,{contentRef:f,descriptionId:d.descriptionId})]})]})}),Z="DialogTitle",z=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=D(Z,n);return(0,m.jsx)(f.WV.h2,{id:o.titleId,...r,ref:t})});z.displayName=Z;var X="DialogDescription",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=D(X,n);return(0,m.jsx)(f.WV.p,{id:o.descriptionId,...r,ref:t})});K.displayName=X;var Y="DialogClose",H=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=D(Y,n);return(0,m.jsx)(f.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>i.onOpenChange(!1))})});function q(e){return e?"open":"closed"}H.displayName=Y;var G="DialogTitleWarning",[J,Q]=(0,a.k)(G,{contentName:_,titleName:Z,docsSlug:"dialog"}),ee=({titleId:e})=>{let t=Q(G),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return r.useEffect(()=>{e&&!document.getElementById(e)&&console.error(n)},[n,e]),null},et=({contentRef:e,descriptionId:t})=>{let n=Q("DialogDescriptionWarning"),o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return r.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");t&&n&&!document.getElementById(t)&&console.warn(o)},[o,e,t]),null},en=T,er=O,eo=j,ei=I,ea=V,eu=z,ec=K,el=H},6063:function(e,t,n){n.d(t,{XB:function(){return f}});var r,o=n(7294),i=n(6206),a=n(4757),u=n(8771),c=n(9698),l=n(5893),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:f,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:g,onDismiss:y,...E}=e,b=o.useContext(d),[w,C]=o.useState(null),N=w?.ownerDocument??globalThis?.document,[,x]=o.useState({}),R=(0,u.e)(t,e=>C(e)),M=Array.from(b.layers),[S]=[...b.layersWithOutsidePointerEventsDisabled].slice(-1),D=M.indexOf(S),T=w?M.indexOf(w):-1,k=b.layersWithOutsidePointerEventsDisabled.size>0,O=T>=D,P=function(e,t=globalThis?.document){let n=(0,c.W)(e),r=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...b.branches].some(e=>e.contains(t));!O||n||(v?.(e),g?.(e),e.defaultPrevented||y?.())},N),W=function(e,t=globalThis?.document){let n=(0,c.W)(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...b.branches].some(e=>e.contains(t))||(h?.(e),g?.(e),e.defaultPrevented||y?.())},N);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T!==b.layers.size-1||(f?.(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},N),o.useEffect(()=>{if(w)return n&&(0===b.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),b.layersWithOutsidePointerEventsDisabled.add(w)),b.layers.add(w),p(),()=>{n&&1===b.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[w,N,n,b]),o.useEffect(()=>()=>{w&&(b.layers.delete(w),b.layersWithOutsidePointerEventsDisabled.delete(w),p())},[w,b]),o.useEffect(()=>{let e=()=>x({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(a.WV.div,{...E,ref:R,style:{pointerEvents:k?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,P.onPointerDownCapture)})});function p(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.jH)(o,i):o.dispatchEvent(i)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),i=(0,u.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(a.WV.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},7552:function(e,t,n){n.d(t,{EW:function(){return i}});var r=n(7294),o=0;function i(){r.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??a()),document.body.insertAdjacentElement("beforeend",e[1]??a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},5420:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(7294),i=n(8771),a=n(4757),u=n(9698),c=n(5893),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=o.useState(null),w=(0,u.W)(f),C=(0,u.W)(g),N=o.useRef(null),x=(0,i.e)(t,e=>b(e)),R=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(R.paused||!E)return;let t=e.target;E.contains(t)?N.current=t:v(N.current,{select:!0})},t=function(e){if(R.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||v(N.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&v(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,R.paused]),o.useEffect(()=>{if(E){h.add(R);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(v(r,{select:t}),document.activeElement!==n)return}(p(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&v(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||v(e??document.body,{select:!0}),E.removeEventListener(s,C),h.remove(R)},0)}}},[E,w,C,R]);let M=o.useCallback(e=>{if(!n&&!r||R.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=p(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&v(i,{select:!0})):(e.preventDefault(),n&&v(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,R.paused]);return(0,c.jsx)(a.WV.div,{tabIndex:-1,...y,ref:x,onKeyDown:M})});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function v(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&t?.pause(),(r=g(r,e)).unshift(e)},remove(e){r=g(r,e),r[0]?.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},1276:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(7294),i=n(9981),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(a());return(0,i.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},9115:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(7294),o=n(3935),i=n(8771),a=n(9981),u=e=>{let t,n;let{present:u,children:l}=e,s=function(e){var t,n;let[i,u]=r.useState(),l=r.useRef({}),s=r.useRef(e),d=r.useRef("none"),[f,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>n[e][t]??e,t));return r.useEffect(()=>{let e=c(l.current);d.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let t=l.current,n=s.current;if(n!==e){let r=d.current,o=c(t);e?p("MOUNT"):"none"===o||t?.display==="none"?p("UNMOUNT"):n&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),s.current=e}},[e,p]),(0,a.b)(()=>{if(i){let e=e=>{let t=c(l.current).includes(e.animationName);e.target===i&&t&&o.flushSync(()=>p("ANIMATION_END"))},t=e=>{e.target===i&&(d.current=c(l.current))};return i.addEventListener("animationstart",t),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",t),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),u(e)},[])}}(u),d="function"==typeof l?l({present:s.isPresent}):r.Children.only(l),f=(0,i.e)(s.ref,(t=Object.getOwnPropertyDescriptor(d.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?d.ref:(t=Object.getOwnPropertyDescriptor(d,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof l||s.isPresent?r.cloneElement(d,{ref:f}):null};function c(e){return e?.animationName||"none"}u.displayName="Presence"},4757:function(e,t,n){n.d(t,{WV:function(){return d},jH:function(){return f}});var r=n(7294),o=n(3935),i=n(8771),a=n(5893),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),u=i.find(s);if(u){let e=u.props.children,n=i.map(t=>t!==u?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(c,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,a.jsx)(c,{...o,ref:t,children:n})});u.displayName="Slot";var c=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,a;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,i.F)(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});c.displayName="SlotClone";var l=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===l}var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?u:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function f(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},9698:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(7294);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},7342:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(7294),o=n(9698);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,a=r.useRef(i),u=(0,o.W)(t);return r.useEffect(()=>{a.current!==i&&(u(i),a.current=i)},[i,a,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,c=u?e:i,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else a(t)},[u,e,a,l])]}},9981:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(7294),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);