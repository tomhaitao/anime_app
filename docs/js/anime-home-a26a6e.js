webpackJsonp([5],{35:function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},0:function(e,t,n){e.exports=n(187)},6:function(e,t){"use strict";function n(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"}function r(e){return n("Boolean",e)}function a(e){return n("Number",e)}function o(e){return n("String",e)}function i(e){return n("Function",e)}function s(e){return n("Array",e)}function u(e){return n("Date",e)}function l(e){return n("RegExp",e)}function c(e){return n("Object",e)}function f(e){return n("Error",e)}t.__esModule=!0,t.isType=n,t.isBoolean=r,t.isNumber=a,t.isString=o,t.isFunction=i,t.isArray=s,t.isDate=u,t.isRegExp=l,t.isObject=c,t.isError=f},7:function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(16),s=r(i),u=n(5),l=o.default.createClass({displayName:"Routes",childContextTypes:{runType:a.PropTypes.string.isRequired},getChildContext:function(){return{runType:"alone"}},render:function(){var e=(0,u.parse)(window.location.search),t=this.props.children;return o.default.createElement(s.default,null,o.default.Children.map(t,function(t){return o.default.cloneElement(t,{params:e})}))}});t.default=l},10:function(e,t){"use strict";t.__esModule=!0,t.default={ANIME_SAY_HELLO:"ANIME_SAY_HELLO"}},11:function(e,t){var n=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports={canUseDOM:n,hasPushState:n&&window.history&&"pushState"in window.history,hasReplaceState:n&&window.history&&"replaceState"in window.history,hasHashbang:function(){return n&&0===window.location.hash.indexOf("#")},hasEventConstructor:function(){return"function"==typeof window.Event}}},12:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(t){t({type:i.default.ANIME_SAY_HELLO,name:e}),u.default.get("./")}}t.__esModule=!0,t.sayHello=a;var o=n(10),i=r(o),s=n(15),u=r(s)},23:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case i.default.ANIME_SAY_HELLO:return(0,u.default)({},e,t);default:return e}}t.__esModule=!0,t.default=a;var o=n(10),i=r(o),s=n(9),u=r(s),l={name:""}},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return(0,s.combineReducers)((0,i.default)({ANIME:l.default},e))}t.__esModule=!0;var o=n(18),i=r(o);t.default=a;var s=n(2),u=n(23),l=r(u)},25:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=u.applyMiddleware.apply(void 0,f)(u.createStore),t=e((0,c.default)());return t.asyncReducers={},t}function o(e,t,n){e.asyncReducers[t]=n,e.replaceReducer((0,c.default)(e.asyncReducers))}t.__esModule=!0,t.default=a,t.injectAsyncReducer=o;var i=n(20),s=r(i),u=n(2),l=n(24),c=r(l),f=[s.default]},29:function(e,t,n){e.exports={RouterMixin:n(36),navigate:n(37),replaceNavigate:n(38)}},30:function(e,t,n){var r=n(11);e.exports={createEvent:function(e){if(r.hasEventConstructor())return new window.Event(e);var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}},32:function(e,t,n){"use strict";var r=n(33),a={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):(console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:r})},registerDefault:function(){}};e.exports=a},33:function(e,t){"use strict";function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},34:function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,i="",s=t&&t.delimiter||"/";null!=(n=w.exec(e));){var c=n[0],f=n[1],p=n.index;if(i+=e.slice(o,p),o=p+c.length,f)i+=f[1];else{var h=e[o],d=n[2],m=n[3],v=n[4],g=n[5],y=n[6],E=n[7];i&&(r.push(i),i="");var _=null!=d&&null!=h&&h!==d,x="+"===y||"*"===y,k="?"===y||"*"===y,R=n[2]||s,C=v||g;r.push({name:m||a++,prefix:d||"",delimiter:R,optional:k,repeat:x,partial:_,asterisk:!!E,pattern:C?l(C):E?".*":"[^"+u(R)+"]+?"})}}return o<e.length&&(i+=e.substr(o)),i&&r.push(i),r}function a(e,t){return s(r(e,t))}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",s=n||{},u=r||{},l=u.pretty?o:encodeURIComponent,c=0;c<e.length;c++){var f=e[c];if("string"!=typeof f){var p,h=s[f.name];if(null==h){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(g(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(p=l(h[d]),!t[c].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===d?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?i(h):l(h),!t[c].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');a+=f.prefix+p}}else a+=f}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}function h(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(v(e[a],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",f(n));return c(o,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){g(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,a=n.end!==!1,o="",i=e[e.length-1],s="string"==typeof i&&/\/$/.test(i),l=0;l<e.length;l++){var p=e[l];if("string"==typeof p)o+=u(p);else{var h=u(p.prefix),d="(?:"+p.pattern+")";t.push(p),p.repeat&&(d+="(?:"+h+d+")*"),d=p.optional?p.partial?h+"("+d+")?":"(?:"+h+"("+d+"))?":h+"("+d+")",o+=d}}return r||(o=(s?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=a?"$":r&&s?"":"(?=\\/|$)",c(new RegExp("^"+o,f(n)),t)}function v(e,t,n){return g(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):g(e)?h(e,t,n):d(e,t,n)}var g=n(35);e.exports=v,e.exports.parse=r,e.exports.compile=a,e.exports.tokensToFunction=s,e.exports.tokensToRegExp=m;var w=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t="";return e&&0!=e.length?(t=e.replace(/&/g,"&#38;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=t.replace(/\'/g,"&#39;"),t=t.replace(/\"/g,"&quot;"),t=t.replace(/ /g,"&nbsp;"),t=t.replace(/\n/g,"<br>")):""}function o(e){var t="";return 0==e.length?"":(t=e.replace(/&#38;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&#39;/g,"'"),t=t.replace(/&quot;/g,'"'),t=t.replace(/&nbsp;/g," "),t=t.replace(/<br>/g,"\n"))}function i(e){try{return encodeURIComponent(e)}catch(t){return e}}function s(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}}function u(e){var t=/(\w+)\[(\d+)\]/;if("string"!=typeof e)return{};if(e=(0,f.default)(e),""==e)return{};"?"==e.charAt(0)&&(e=e.slice(1));for(var n={},r=e.split("&"),a=0;a<r.length;a++){var o,i=r[a].split("="),u=s(i[0]);(o=t.exec(u))?(n[o[1]]=n[o[1]]||[],n[o[1]][o[2]]=s(i[1])):n[i[0]]=null==i[1]?"":s(i[1])}return n}function l(e){if(!e)return"";var t=[];for(var n in e){var r=e[n];if((0,p.isArray)(r))for(var a=0;a<r.length;++a)t.push(i(n+"["+a+"]")+"="+i(r[a]));else t.push(i(n)+"="+i(e[n]))}return t.join("&")}t.__esModule=!0,t.encodeHTML=a,t.decodeHTML=o,t.encode=i,t.decode=s,t.parse=u,t.stringify=l;var c=n(7),f=r(c),p=n(6)},36:function(e,t,n){function r(e){var t,n,r=e.props.path||e.context.path;return!r&&c.canUseDOM&&(n=l(window.location.href),e.props.history?r=n.pathname+n.search:n.hash&&(t=l(n.hash.slice(1)),r=t.pathname+t.search)),r||"/"}function a(e,t,n){var r,a,o,i,s,l=[];for(r in t)t.hasOwnProperty(r)&&(o=[],a=u(e+r,o),i=t[r],s=n[i],l.push({pattern:a,params:o,handler:s}));return l}function o(e){var t={};if(0===e.indexOf("?")){e=e.slice(1);var n=e.split("&");n.forEach(function(e){var n=e.split("=");t[decodeURIComponent(n[0])]=decodeURIComponent(n[1])})}return t}var i=n(1),s=(n(4),n(32)),u=(n(39),n(34)),l=n(40),c=n(11),f={path:i.PropTypes.string,root:i.PropTypes.string,useHistory:i.PropTypes.bool};e.exports={propTypes:f,contextTypes:f,childContextTypes:f,getChildContext:function(){return{path:this.state.path,root:this.state.root,useHistory:this.state.useHistory}},getDefaultProps:function(){return{routes:{}}},getInitialState:function(){return{path:r(this),root:this.props.root||this.context.path||"",useHistory:(this.props.history||this.context.useHistory)&&c.hasPushState}},componentWillMount:function(){this.setState({_routes:a(this.state.root,this.routes,this)})},componentDidMount:function(){var e=this._events=[];this.state.useHistory?e.push(s.listen(window,"popstate",this.onPopState)):(window.location.hash.indexOf("#")===-1&&(window.location.hash="#/"),e.push(s.listen(window,"hashchange",this.onPopState)))},componentWillUnmount:function(){this._events.forEach(function(e){e.remove()})},onPopState:function(){var e=l(window.location.href),t=e.hash||"",n=this.state.useHistory?e.pathname:t.slice(1);0===n.length&&(n="/"),this.setState({path:n+e.search})},renderCurrentRoute:function(){var e=this.state.path,t=l(e),n=o(t.search),r=t.pathname;r&&0!==r.length||(r="/");var a=this.matchRoute(r);if(a)return a.handler.apply(this,a.params.concat(n));if(this.notFound)return this.notFound(r,n);throw new Error("No route matched path: "+r)},matchRoute:function(e){if(!e)return!1;var t={};return this.state._routes.some(function(n){var r=n.pattern.exec(e);return!!r&&(t.handler=n.handler,t.params=r.slice(1,n.params.length+1),!0)}),!!t.handler&&t}}},37:function(e,t,n){var r=n(11),a=n(30);e.exports=function(e,t){r.hasHashbang()?window.location.hash="#"+e:r.hasPushState?(window.history.pushState({},"",e),t||window.dispatchEvent(a.createEvent("popstate"))):console.error("Browser does not support pushState, and hash is missing a hashbang prefix!")}},38:function(e,t,n){var r=n(11),a=n(30);e.exports=function(e,t){r.hasReplaceState?(window.history.replaceState({},"","#"+e),t||window.dispatchEvent(a.createEvent("popstate"))):r.hasHashbang()?window.location.hash="#"+e:console.error("Browser does not support replaceState, and hash is missing a hashbang prefix!")}},39:function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}e.exports=n},40:function(e,t){(function(){var t,n,r,a,o={}.hasOwnProperty;n=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,a=function(e,t){return a.URL.parse(e,t)},a.URL=t=function(){function e(e){var t,n,a;for(t in r)o.call(r,t)&&(n=r[t],this[t]=null!=(a=e[t])?a:n);this.host||(this.host=this.hostname&&this.port?""+this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?""+this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var t,r,o;return t=e.toString().match(n),r=t[8]||"",o=t[1],new a.URL({protocol:o,username:t[3],password:t[4],hostname:t[6],port:t[7],pathname:o&&"/"!==r.charAt(0)?"/"+r:r,search:t[9],hash:t[10],isSchemeRelative:null!=t[2]})},e}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=a}).call(this)},42:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(31),s=r(i);n(46);var u=o.default.createClass({displayName:"ItemCell",onClick:function(){this.props.onClickLink&&this.props.onClickLink(this.props.link)},getDefaultProps:function(){return{link:null}},render:function(){var e=this.props,t=e.style,n=e.children,r={"cex-item-cell":!0,"cex-item-link":!!this.props.link||""};return o.default.createElement("div",{onClick:this.onClick,className:(0,s.default)(this.props.className,r),style:t},n)}});t.default=u},43:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(31),s=r(i);n(47);var u=o.default.createClass({displayName:"ItemTitle",render:function(){var e=this.props,t=e.style,n=e.children;return o.default.createElement("a",{className:(0,s.default)(this.props.className,"cex-item-title"),style:t},n)}});t.default=u},44:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(31),s=r(i);n(48);var u=o.default.createClass({displayName:"List",render:function(){var e=this.props,t=e.style,n=e.children;return o.default.createElement("div",{className:(0,s.default)(this.props.className,"cex-list"),style:t},n)}});t.default=u},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),o=n(29),i=n(50),s=r(i),u=n(9),l=r(u),c=n(5),f=n(53);e.exports={contextTypes:{runType:a.PropTypes.string.isRequired},generatePath:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return n||(n=this.context.runType),"spa"==n?(a?r:"/")+(0,s.default)(e,"/")+(t?"?"+(0,c.stringify)(t):""):(0,s.default)(e,"-")+".html"+(t?"?"+(0,c.stringify)(t):"")},navTo:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(n||(n=this.context.runType),r||(r=""),"spa"==n){var i=this.generatePath(e,t,n,r,a);(0,o.navigate)(i)}else{var s=(0,c.parse)(window.location.search),u=this.generatePath(e,(0,l.default)({},s,t),n,r,a),p=(0,f.getTenantAndLoginType)(window.location.href),h=p[1],d=p[0],m=window.location.origin+"/-"+d+"-/-"+h+"-/"+u;window.location.href=m}},navReplace:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(n||(n=this.context.runType),"spa"==n){var i=this.generatePath(e,t,n,r,a);a?window.location.href=i:(0,o.replaceNavigate)(i)}else{var s=(0,c.parse)(window.location.search),u=this.generatePath(e,(0,l.default)({},s,t),n,r,a),p=(0,f.getTenantAndLoginType)(window.location.href),h=p[1],d=p[0],m=window.location.origin+"/-"+d+"-/-"+h+"-/"+u;window.location.href=m}}}},46:function(e,t){},47:function(e,t){},48:function(e,t){},50:function(e,t){function n(e,t){return null==e?"":a.call(e,t)}var r=Array.prototype,a=r.join;e.exports=n},69:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return{name:e.ANIME.name}}function i(e){return{actions:(0,c.bindActionCreators)(u,e)}}t.__esModule=!0;var s=n(12),u=a(s),l=n(3),c=n(2),f=n(78),p=r(f);t.default=(0,l.connect)(o,i)(p.default)},78:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),i=n(44),s=r(i),u=n(43),l=r(u),c=n(42),f=r(c),p=n(45),h=r(p),d=o.default.createClass({displayName:"Home",mixins:[h.default],onClickLink:function(e){var t=e.params,n=null;this.navTo(t,n,this.context.runType,"/#/")},render:function(){return o.default.createElement(s.default,null,o.default.createElement(f.default,{link:{params:["anime","transforms3d"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"3D变形")),o.default.createElement(f.default,{link:{params:["anime","colors"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"颜色")),o.default.createElement(f.default,{link:{params:["anime","domstress"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"DOM压力测试")),o.default.createElement(f.default,{link:{params:["anime","easings"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"缓动")),o.default.createElement(f.default,{link:{params:["anime","motionpath"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"指定运动轨迹")),o.default.createElement(f.default,{link:{params:["anime","svgpath"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"外形变化")),o.default.createElement(f.default,{link:{params:["anime","funcb"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"函数回调")),o.default.createElement(f.default,{link:{params:["anime","removeanime"]},onClickLink:this.onClickLink},o.default.createElement(l.default,null,"移除动画")))}});t.default=d},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),o=r(a),i=n(4),s=r(i),u=n(3),l=n(25),c=r(l),f=n(8),p=r(f),h=n(69),d=r(h);n(19),n(17)(o.default,{errorHandler:function(){}}),s.default.render(o.default.createElement(u.Provider,{store:(0,c.default)()},o.default.createElement(p.default,null,o.default.createElement(d.default,null))),document.getElementById("container"))}});