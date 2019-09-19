parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dHNg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react")),r=t(require("prop-types"));function t(e){return e&&e.__esModule?e:{default:e}}var u=function(r){return e.default.createElement("div",null,"This is dummy page")},a=u;exports.default=a;
},{"react":"ccIB","prop-types":"3/B0"}],"oQbF":[function(require,module,exports) {
function n(n,r){for(var e=-1,l=null==n?0:n.length;++e<l&&!1!==r(n[e],e,n););return n}module.exports=n;
},{}],"jmhn":[function(require,module,exports) {
var e=require("./_getNative"),r=function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch(t){}}();module.exports=r;
},{"./_getNative":"7jJu"}],"tZex":[function(require,module,exports) {
var e=require("./_defineProperty");function r(r,o,u){"__proto__"==o&&e?e(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}module.exports=r;
},{"./_defineProperty":"jmhn"}],"5cCM":[function(require,module,exports) {
var e=require("./_baseAssignValue"),r=require("./eq"),o=Object.prototype,a=o.hasOwnProperty;function i(o,i,t){var n=o[i];a.call(o,i)&&r(n,t)&&(void 0!==t||i in o)||e(o,i,t)}module.exports=i;
},{"./_baseAssignValue":"tZex","./eq":"0huu"}],"RW/c":[function(require,module,exports) {
var r=require("./_assignValue"),e=require("./_baseAssignValue");function a(a,i,u,n){var o=!u;u||(u={});for(var s=-1,v=i.length;++s<v;){var l=i[s],t=n?n(u[l],a[l],l,u,a):void 0;void 0===t&&(t=a[l]),o?e(u,l,t):r(u,l,t)}return u}module.exports=a;
},{"./_assignValue":"5cCM","./_baseAssignValue":"tZex"}],"AERn":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./keys");function u(u,o){return u&&e(o,r(o),u)}module.exports=u;
},{"./_copyObject":"RW/c","./keys":"d+Uu"}],"0uou":[function(require,module,exports) {
function r(r){var n=[];if(null!=r)for(var u in Object(r))n.push(u);return n}module.exports=r;
},{}],"+x5d":[function(require,module,exports) {
var r=require("./isObject"),e=require("./_isPrototype"),t=require("./_nativeKeysIn"),o=Object.prototype,i=o.hasOwnProperty;function n(o){if(!r(o))return t(o);var n=e(o),u=[];for(var s in o)("constructor"!=s||!n&&i.call(o,s))&&u.push(s);return u}module.exports=n;
},{"./isObject":"xwKO","./_isPrototype":"g5RI","./_nativeKeysIn":"0uou"}],"8Z/L":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeysIn"),i=require("./isArrayLike");function u(u){return i(u)?e(u,!0):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"VZjL","./_baseKeysIn":"+x5d","./isArrayLike":"K2yx"}],"Q9yq":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./keysIn");function u(u,n){return u&&e(n,r(n),u)}module.exports=u;
},{"./_copyObject":"RW/c","./keysIn":"8Z/L"}],"Dg6I":[function(require,module,exports) {

var e=require("./_root"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t?e.Buffer:void 0,u=p?p.allocUnsafe:void 0;function n(e,o){if(o)return e.slice();var r=e.length,t=u?u(r):new e.constructor(r);return e.copy(t),t}module.exports=n;
},{"./_root":"VjBI"}],"8IIJ":[function(require,module,exports) {
function r(r,e){var n=-1,o=r.length;for(e||(e=Array(o));++n<o;)e[n]=r[n];return e}module.exports=r;
},{}],"mv67":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./_getSymbols");function o(o,t){return e(o,r(o),t)}module.exports=o;
},{"./_copyObject":"RW/c","./_getSymbols":"WfqQ"}],"qq0B":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.getPrototypeOf,Object);module.exports=r;
},{"./_overArg":"QRZr"}],"LBAU":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./_getPrototype"),t=require("./_getSymbols"),o=require("./stubArray"),u=Object.getOwnPropertySymbols,y=u?function(o){for(var u=[];o;)r(u,t(o)),o=e(o);return u}:o;module.exports=y;
},{"./_arrayPush":"15Wi","./_getPrototype":"qq0B","./_getSymbols":"WfqQ","./stubArray":"C2H/"}],"qGCh":[function(require,module,exports) {
var e=require("./_copyObject"),r=require("./_getSymbolsIn");function o(o,t){return e(o,r(o),t)}module.exports=o;
},{"./_copyObject":"RW/c","./_getSymbolsIn":"LBAU"}],"yXac":[function(require,module,exports) {
var e=require("./_baseGetAllKeys"),r=require("./_getSymbolsIn"),u=require("./keysIn");function n(n){return e(n,u,r)}module.exports=n;
},{"./_baseGetAllKeys":"1WNX","./_getSymbolsIn":"LBAU","./keysIn":"8Z/L"}],"LdMp":[function(require,module,exports) {
var t=Object.prototype,n=t.hasOwnProperty;function e(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}module.exports=e;
},{}],"TYOR":[function(require,module,exports) {
var e=require("./_Uint8Array");function r(r){var n=new r.constructor(r.byteLength);return new e(n).set(new e(r)),n}module.exports=r;
},{"./_Uint8Array":"wTs6"}],"Kklp":[function(require,module,exports) {
var e=require("./_cloneArrayBuffer");function r(r,f){var t=f?e(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}module.exports=r;
},{"./_cloneArrayBuffer":"TYOR"}],"5S4m":[function(require,module,exports) {
var e=/\w*$/;function r(r){var n=new r.constructor(r.source,e.exec(r));return n.lastIndex=r.lastIndex,n}module.exports=r;
},{}],"gse3":[function(require,module,exports) {
var e=require("./_Symbol"),o=e?e.prototype:void 0,r=o?o.valueOf:void 0;function t(e){return r?Object(r.call(e)):{}}module.exports=t;
},{"./_Symbol":"S8m2"}],"Kep1":[function(require,module,exports) {
var r=require("./_cloneArrayBuffer");function e(e,f){var t=f?r(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}module.exports=e;
},{"./_cloneArrayBuffer":"TYOR"}],"WXSb":[function(require,module,exports) {
var e=require("./_cloneArrayBuffer"),r=require("./_cloneDataView"),c=require("./_cloneRegExp"),t=require("./_cloneSymbol"),a=require("./_cloneTypedArray"),o="[object Boolean]",n="[object Date]",b="[object Map]",s="[object Number]",u="[object RegExp]",j="[object Set]",y="[object String]",i="[object Symbol]",l="[object ArrayBuffer]",A="[object DataView]",w="[object Float32Array]",p="[object Float64Array]",f="[object Int8Array]",m="[object Int16Array]",q="[object Int32Array]",_="[object Uint8Array]",S="[object Uint8ClampedArray]",U="[object Uint16Array]",d="[object Uint32Array]";function g(g,x,B){var D=g.constructor;switch(x){case l:return e(g);case o:case n:return new D(+g);case A:return r(g,B);case w:case p:case f:case m:case q:case _:case S:case U:case d:return a(g,B);case b:return new D;case s:case y:return new D(g);case u:return c(g);case j:return new D;case i:return t(g)}}module.exports=g;
},{"./_cloneArrayBuffer":"TYOR","./_cloneDataView":"Kklp","./_cloneRegExp":"5S4m","./_cloneSymbol":"gse3","./_cloneTypedArray":"Kep1"}],"IpMP":[function(require,module,exports) {
var r=require("./isObject"),e=Object.create,t=function(){function t(){}return function(n){if(!r(n))return{};if(e)return e(n);t.prototype=n;var o=new t;return t.prototype=void 0,o}}();module.exports=t;
},{"./isObject":"xwKO"}],"zyHt":[function(require,module,exports) {
var e=require("./_baseCreate"),r=require("./_getPrototype"),t=require("./_isPrototype");function o(o){return"function"!=typeof o.constructor||t(o)?{}:e(r(o))}module.exports=o;
},{"./_baseCreate":"IpMP","./_getPrototype":"qq0B","./_isPrototype":"g5RI"}],"7W0w":[function(require,module,exports) {
var e=require("./_getTag"),r=require("./isObjectLike"),t="[object Map]";function i(i){return r(i)&&e(i)==t}module.exports=i;
},{"./_getTag":"gfIQ","./isObjectLike":"7Zib"}],"0KpY":[function(require,module,exports) {
var e=require("./_baseIsMap"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isMap,s=i?r(i):e;module.exports=s;
},{"./_baseIsMap":"7W0w","./_baseUnary":"+ASY","./_nodeUtil":"G5bk"}],"iuLs":[function(require,module,exports) {
var e=require("./_getTag"),r=require("./isObjectLike"),t="[object Set]";function i(i){return r(i)&&e(i)==t}module.exports=i;
},{"./_getTag":"gfIQ","./isObjectLike":"7Zib"}],"LW22":[function(require,module,exports) {
var e=require("./_baseIsSet"),r=require("./_baseUnary"),i=require("./_nodeUtil"),s=i&&i.isSet,a=s?r(s):e;module.exports=a;
},{"./_baseIsSet":"iuLs","./_baseUnary":"+ASY","./_nodeUtil":"G5bk"}],"NGmv":[function(require,module,exports) {
var e=require("./_Stack"),r=require("./_arrayEach"),t=require("./_assignValue"),i=require("./_baseAssign"),o=require("./_baseAssignIn"),n=require("./_cloneBuffer"),a=require("./_copyArray"),c=require("./_copySymbols"),u=require("./_copySymbolsIn"),b=require("./_getAllKeys"),j=require("./_getAllKeysIn"),y=require("./_getTag"),s=require("./_initCloneArray"),f=require("./_initCloneByTag"),q=require("./_initCloneObject"),l=require("./isArray"),A=require("./isBuffer"),_=require("./isMap"),g=require("./isObject"),p=require("./isSet"),v=require("./keys"),m=1,I=2,S=4,d="[object Arguments]",B="[object Array]",E="[object Boolean]",k="[object Date]",C="[object Error]",F="[object Function]",U="[object GeneratorFunction]",h="[object Map]",M="[object Number]",O="[object Object]",w="[object RegExp]",x="[object Set]",D="[object String]",K="[object Symbol]",T="[object WeakMap]",V="[object ArrayBuffer]",G="[object DataView]",N="[object Float32Array]",R="[object Float64Array]",W="[object Int8Array]",z="[object Int16Array]",H="[object Int32Array]",J="[object Uint8Array]",L="[object Uint8ClampedArray]",P="[object Uint16Array]",Q="[object Uint32Array]",X={};function Y(B,E,k,C,h,M){var w,x=E&m,D=E&I,K=E&S;if(k&&(w=h?k(B,C,h,M):k(B)),void 0!==w)return w;if(!g(B))return B;var T=l(B);if(T){if(w=s(B),!x)return a(B,w)}else{var V=y(B),G=V==F||V==U;if(A(B))return n(B,x);if(V==O||V==d||G&&!h){if(w=D||G?{}:q(B),!x)return D?u(B,o(w,B)):c(B,i(w,B))}else{if(!X[V])return h?B:{};w=f(B,V,x)}}M||(M=new e);var N=M.get(B);if(N)return N;M.set(B,w),p(B)?B.forEach(function(e){w.add(Y(e,E,k,e,B,M))}):_(B)&&B.forEach(function(e,r){w.set(r,Y(e,E,k,r,B,M))});var R=K?D?j:b:D?keysIn:v,W=T?void 0:R(B);return r(W||B,function(e,r){W&&(e=B[r=e]),t(w,r,Y(e,E,k,r,B,M))}),w}X[d]=X[B]=X[V]=X[G]=X[E]=X[k]=X[N]=X[R]=X[W]=X[z]=X[H]=X[h]=X[M]=X[O]=X[w]=X[x]=X[D]=X[K]=X[J]=X[L]=X[P]=X[Q]=!0,X[C]=X[F]=X[T]=!1,module.exports=Y;
},{"./_Stack":"eVeQ","./_arrayEach":"oQbF","./_assignValue":"5cCM","./_baseAssign":"AERn","./_baseAssignIn":"Q9yq","./_cloneBuffer":"Dg6I","./_copyArray":"8IIJ","./_copySymbols":"mv67","./_copySymbolsIn":"qGCh","./_getAllKeys":"qJJc","./_getAllKeysIn":"yXac","./_getTag":"gfIQ","./_initCloneArray":"LdMp","./_initCloneByTag":"WXSb","./_initCloneObject":"zyHt","./isArray":"zOp4","./isBuffer":"UlFJ","./isMap":"0KpY","./isObject":"xwKO","./isSet":"LW22","./keys":"d+Uu"}],"4DQK":[function(require,module,exports) {
function n(n){var e=null==n?0:n.length;return e?n[e-1]:void 0}module.exports=n;
},{}],"IqdZ":[function(require,module,exports) {
function r(r,e,n){var o=-1,t=r.length;e<0&&(e=-e>t?0:t+e),(n=n>t?t:n)<0&&(n+=t),t=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(t);++o<t;)a[o]=r[o+e];return a}module.exports=r;
},{}],"d/w2":[function(require,module,exports) {
var e=require("./_baseGet"),r=require("./_baseSlice");function t(t,u){return u.length<2?t:e(t,r(u,0,-1))}module.exports=t;
},{"./_baseGet":"Vf/c","./_baseSlice":"IqdZ"}],"XEoB":[function(require,module,exports) {
var e=require("./_castPath"),r=require("./last"),t=require("./_parent"),u=require("./_toKey");function a(a,i){return i=e(i,a),null==(a=t(a,i))||delete a[u(r(i))]}module.exports=a;
},{"./_castPath":"Hnr2","./last":"4DQK","./_parent":"d/w2","./_toKey":"4dmE"}],"EUXB":[function(require,module,exports) {
var t=require("./_baseGetTag"),e=require("./_getPrototype"),r=require("./isObjectLike"),o="[object Object]",c=Function.prototype,n=Object.prototype,u=c.toString,i=n.hasOwnProperty,a=u.call(Object);function l(c){if(!r(c)||t(c)!=o)return!1;var n=e(c);if(null===n)return!0;var l=i.call(n,"constructor")&&n.constructor;return"function"==typeof l&&l instanceof l&&u.call(l)==a}module.exports=l;
},{"./_baseGetTag":"r1rA","./_getPrototype":"qq0B","./isObjectLike":"7Zib"}],"W3/q":[function(require,module,exports) {
var e=require("./isPlainObject");function r(r){return e(r)?void 0:r}module.exports=r;
},{"./isPlainObject":"EUXB"}],"rOv1":[function(require,module,exports) {
var r=require("./_Symbol"),e=require("./isArguments"),i=require("./isArray"),u=r?r.isConcatSpreadable:void 0;function o(r){return i(r)||e(r)||!!(u&&r&&r[u])}module.exports=o;
},{"./_Symbol":"S8m2","./isArguments":"Qziv","./isArray":"zOp4"}],"jrlN":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./_isFlattenable");function a(t,n,u,l,i){var o=-1,h=t.length;for(u||(u=e),i||(i=[]);++o<h;){var s=t[o];n>0&&u(s)?n>1?a(s,n-1,u,l,i):r(i,s):l||(i[i.length]=s)}return i}module.exports=a;
},{"./_arrayPush":"15Wi","./_isFlattenable":"rOv1"}],"lqP1":[function(require,module,exports) {
var e=require("./_baseFlatten");function n(n){return(null==n?0:n.length)?e(n,1):[]}module.exports=n;
},{"./_baseFlatten":"jrlN"}],"W/Il":[function(require,module,exports) {
function e(e,l,r){switch(r.length){case 0:return e.call(l);case 1:return e.call(l,r[0]);case 2:return e.call(l,r[0],r[1]);case 3:return e.call(l,r[0],r[1],r[2])}return e.apply(l,r)}module.exports=e;
},{}],"ORg+":[function(require,module,exports) {
var r=require("./_apply"),t=Math.max;function a(a,e,n){return e=t(void 0===e?a.length-1:e,0),function(){for(var o=arguments,u=-1,i=t(o.length-e,0),f=Array(i);++u<i;)f[u]=o[e+u];u=-1;for(var h=Array(e+1);++u<e;)h[u]=o[u];return h[e]=n(f),r(a,this,h)}}module.exports=a;
},{"./_apply":"W/Il"}],"UqIc":[function(require,module,exports) {
function n(n){return function(){return n}}module.exports=n;
},{}],"Wxwx":[function(require,module,exports) {
var e=require("./constant"),r=require("./_defineProperty"),t=require("./identity"),i=r?function(t,i){return r(t,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;module.exports=i;
},{"./constant":"UqIc","./_defineProperty":"jmhn","./identity":"atk5"}],"LOwu":[function(require,module,exports) {
var r=800,e=16,n=Date.now;function t(t){var o=0,u=0;return function(){var a=n(),i=e-(a-u);if(u=a,i>0){if(++o>=r)return arguments[0]}else o=0;return t.apply(void 0,arguments)}}module.exports=t;
},{}],"1GA3":[function(require,module,exports) {
var e=require("./_baseSetToString"),r=require("./_shortOut"),t=r(e);module.exports=t;
},{"./_baseSetToString":"Wxwx","./_shortOut":"LOwu"}],"5ahd":[function(require,module,exports) {
var e=require("./flatten"),r=require("./_overRest"),t=require("./_setToString");function i(i){return t(r(i,void 0,e),i+"")}module.exports=i;
},{"./flatten":"lqP1","./_overRest":"ORg+","./_setToString":"1GA3"}],"dkGe":[function(require,module,exports) {
var e=require("./_arrayMap"),r=require("./_baseClone"),t=require("./_baseUnset"),u=require("./_castPath"),n=require("./_copyObject"),a=require("./_customOmitClone"),i=require("./_flatRest"),l=require("./_getAllKeysIn"),o=1,q=2,s=4,_=i(function(i,_){var c={};if(null==i)return c;var f=!1;_=e(_,function(e){return e=u(e,i),f||(f=e.length>1),e}),n(i,l(i),c),f&&(c=r(c,o|q|s,a));for(var v=_.length;v--;)t(c,_[v]);return c});module.exports=_;
},{"./_arrayMap":"eKAY","./_baseClone":"NGmv","./_baseUnset":"XEoB","./_castPath":"Hnr2","./_copyObject":"RW/c","./_customOmitClone":"W3/q","./_flatRest":"5ahd","./_getAllKeysIn":"yXac"}],"fbQy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("bem-cn"),t=(0,e.setup)({mod:"--"});exports.default=t;
},{"bem-cn":"4UQ8"}],"lz6S":[function(require,module,exports) {

},{}],"TU+0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),r=i(require("prop-types")),t=i(require("lodash/omit")),l=i(require("../../utils/bem"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,l,i=n(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function n(e,r){if(null==e)return{};var t,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],r.indexOf(t)>=0||(i[t]=e[t]);return i}require("./style.scss");var u=function(r){var i=(0,t.default)(r,["primary","success","error","warn","info","mini","micro","small","big","xbig"]),n=(i.size,i.type),u=i.children,s=i.className,f=i.onClick,c=a(i,["size","type","children","className","onClick"]),d=(0,l.default)("k_button")({primary:r.primary,success:r.success,error:r.error,warn:r.warn,info:r.info,mini:r.mini,micro:r.micro,small:r.small,big:r.big,xbig:r.xbig});return e.default.createElement("button",o({className:d.mix(s),type:n,onClick:f},c),u)};u.propTypes={primary:r.default.bool,success:r.default.bool,error:r.default.bool,warn:r.default.bool,info:r.default.bool,mini:r.default.bool,micro:r.default.bool,small:r.default.bool,big:r.default.bool,xbig:r.default.bool,size:r.default.oneOfType([r.default.string,r.default.number]),type:r.default.string,children:r.default.oneOfType([r.default.string,r.default.node,r.default.number]).isRequired,className:r.default.string},u.defaultProps={primary:!1,success:!1,error:!1,warn:!1,info:!1,mini:!1,micro:!1,small:!1,big:!1,xbig:!1,size:null,type:"button",className:null};var s=u;exports.default=s;
},{"react":"ccIB","prop-types":"3/B0","lodash/omit":"dkGe","../../utils/bem":"fbQy","./style.scss":"lz6S"}],"VNNP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Notification",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"Button",{enumerable:!0,get:function(){return t.default}});var e=r(require("./Notification")),t=r(require("./Button"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Notification":"dHNg","./Button":"TU+0"}],"R4MS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),t=require("../../../lib");function l(e){return e&&e.__esModule?e:{default:e}}var r={marginRight:"5px"},n=function(l){return e.default.createElement("div",{style:{margin:"10px"}},e.default.createElement("h2",null,"Button"),e.default.createElement(t.Button,{style:r},"Default"),e.default.createElement(t.Button,{success:!0,style:r},"Success"),e.default.createElement(t.Button,{error:!0,style:r},"Error"),e.default.createElement(t.Button,{warn:!0,style:r},"Warn"),e.default.createElement(t.Button,{info:!0,style:r},"Info"),e.default.createElement("h2",null,"Button Size"),e.default.createElement(t.Button,{style:r,micro:!0},"Micro"),e.default.createElement(t.Button,{success:!0,style:r,mini:!0},"Mini"),e.default.createElement(t.Button,{error:!0,style:r,small:!0},"Small"),e.default.createElement(t.Button,{warn:!0,style:r,big:!0},"Big"),e.default.createElement(t.Button,{info:!0,style:r,xbig:!0},"Extra Big"))},u=n;exports.default=u;
},{"react":"ccIB","../../../lib":"VNNP"}]},{},[], null)
//# sourceMappingURL=/Button.92fd2126.js.map