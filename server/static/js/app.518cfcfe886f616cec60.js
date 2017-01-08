webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(9),i=o(r),s=n(5),a=o(s),c=n(1),u=o(c),f=n(4),l=o(f);i.default.use(u.default),i.default.use(l.default);var d=new u.default.Store({state:{news:{},cats:["jobbole","freebuf","bobao","hacker"]},mutations:{getNews:function(t,e){t.news[e.cat]=e.data.data}},actions:{getNews:function(t,e){i.default.http({url:"http://127.0.0.1:5000/api/getNews",method:"get",params:{cat:e.cat}}).then(function(n){return n.json().then(function(n){t.commit("getNews",{data:n,cat:e.cat})})})}}});new i.default({el:"#app",store:d,template:"<App/>",components:{App:a.default}})},function(t,e,n){/**
	 * vuex v2.1.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){x&&(t._devtoolHook=x,x.emit("vuex:init",t),x.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){x.emit("vuex:mutation",t,e)}))}function e(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:e}:{beforeCreate:e})}else{var r=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,r.call(this,t)}}}function n(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function o(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function r(t,e){console.error("[vuex] module namespace not found in "+t+"(): "+e)}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function c(t,e){if(!t)throw new Error("[vuex] "+e)}function u(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");u(t.getChild(n),e.modules[n])}}function f(t){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var e=t.state;d(t,e,[],t._modules.root,!0),l(t,e)}function l(t,e){var n=t._vm;t.getters={};var o=t._wrappedGetters,r={};i(o,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=A.config.silent;A.config.silent=!0,t._vm=new A({data:{state:e},computed:r}),A.config.silent=s,t.strict&&y(t),n&&(t._withCommit(function(){n.state=null}),A.nextTick(function(){return n.$destroy()}))}function d(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(s&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=g(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){A.set(a,c,o.state)})}var u=o.context=p(t,s);o.forEachMutation(function(e,o){var r=s+o;m(t,r,e,n)}),o.forEachAction(function(e,o){var r=s+o;v(t,r,e,u,n)}),o.forEachGetter(function(e,o){var r=s+o;_(t,r,e,u,n)}),o.forEachChild(function(o,i){d(t,e,n.concat(i),o,r)})}function p(t,e){var n=""===e,o={dispatch:n?t.dispatch:function(n,o,r){var i=w(n,o,r),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c,t._actions[c])?t.dispatch(c,s):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:n?t.commit:function(n,o,r){var i=w(n,o,r),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c,t._mutations[c])?void t.commit(c,s,a):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperty(o,"getters",{get:n?function(){return t.getters}:function(){return h(t,e)}}),o}function h(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function m(t,e,n,o){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n(g(t.state,o),e)})}function v(t,e,n,o,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var s=n({dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:g(t.state,r),rootGetters:t.getters,rootState:t.state},e,i);return a(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function _(t,e,n,o,r){return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){return n(g(t.state,r),o.getters,t.state,t.getters)})}function y(t){t._vm.$watch("state",function(){c(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function w(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function b(t){return A?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(A=t,void e(A))}var x="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,M=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,i=e.val;o[n]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=this.$store._modulesNamespaceMap[t];if(!o)return void r("mapState",t);e=o.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]}}),o}),O=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.commit.apply(this.$store,[r].concat(t))}}),o}),$=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){return r in this.$store.getters||console.error("[vuex] unknown getter: "+r),this.$store.getters[r]}}),o}),j=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.dispatch.apply(this.$store,[r].concat(t))}}),o}),k=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},C={state:{},namespaced:{}};C.state.get=function(){return this._rawModule.state||{}},C.namespaced.get=function(){return!!this._rawModule.namespaced},k.prototype.addChild=function(t,e){this._children[t]=e},k.prototype.removeChild=function(t){delete this._children[t]},k.prototype.getChild=function(t){return this._children[t]},k.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},k.prototype.forEachChild=function(t){i(this._children,t)},k.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},k.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},k.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(k.prototype,C);var E=function(t){var e=this;this.root=new k(t,!1),t.modules&&i(t.modules,function(t,n){e.register([n],t,!1)})};E.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},E.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},E.prototype.update=function(t){u(this.root,t)},E.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=this.get(t.slice(0,-1)),s=new k(e,n);r.addChild(t[t.length-1],s),e.modules&&i(e.modules,function(e,r){o.register(t.concat(r),e,n)})},E.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var A,N=function(e){var n=this;void 0===e&&(e={}),c(A,"must call Vue.use(Vuex) before creating a store instance."),c("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new E(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new A;var s=this,a=this,u=a.dispatch,f=a.commit;this.dispatch=function(t,e){return u.call(s,t,e)},this.commit=function(t,e,n){return f.call(s,t,e,n)},this.strict=i,d(this,o,[],this._modules.root),l(this,o),r.concat(t).forEach(function(t){return t(n)})},P={state:{}};P.state.get=function(){return this._vm.$data.state},P.state.set=function(t){c(!1,"Use store.replaceState() to explicit replace store state.")},N.prototype.commit=function(t,e,n){var o=this,r=w(t,e,n),i=r.type,s=r.payload,a=r.options,c={type:i,payload:s},u=this._mutations[i];return u?(this._withCommit(function(){u.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(c,o.state)}),void(a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i)},N.prototype.dispatch=function(t,e){var n=w(t,e),o=n.type,r=n.payload,i=this._actions[o];return i?i.length>1?Promise.all(i.map(function(t){return t(r)})):i[0](r):void console.error("[vuex] unknown action type: "+o)},N.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},N.prototype.watch=function(t,e,n){var o=this;return c("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},N.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm.state=t})},N.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t)),l(this,this.state)},N.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=g(e.state,t.slice(0,-1));A.delete(n,t[t.length-1])}),f(this)},N.prototype.hotUpdate=function(t){this._modules.update(t),f(this)},N.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(N.prototype,P),"undefined"!=typeof window&&window.Vue&&b(window.Vue);var G={Store:N,install:b,version:"2.1.1",mapState:M,mapMutations:O,mapGetters:$,mapActions:j};return G})},function(t,e){},function(t,e){},,function(t,e,n){var o,r;n(2),o=n(10);var i=n(7);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;n(3),o=n(11);var i=n(8);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"app"}},t._l(t.cats,function(e){return n("news_wraper",{attrs:{cat:e,cn_id:t.cn_id}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3",attrs:{id:"t"}},[n("div",{attrs:{id:"wraper"}},[n("div",{attrs:{id:"select"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.c_cat,expression:"c_cat"}],staticClass:"form-control",on:{change:function(e){t.c_cat=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},t._l(t.cats,function(e){return n("option",[t._v(t._s(e))])}))]),t._v(" "),n("ul",t._l(t.c_news[this.c_cat],function(e){return n("div",{attrs:{id:"item-box"}},[n("div",{attrs:{id:"item-name"}},[n("a",{attrs:{href:e.url,target:"__blank"}},[t._v(t._s(e.title))])]),t._v(" "),e.intro?n("div",{attrs:{id:"item-intro"}},[t._v(t._s(e.intro))]):t._e(),t._v(" "),e.time?n("div",{attrs:{id:"item-time"}},[t._v(t._s(e.time))]):t._e()])}))])])},staticRenderFns:[]}},,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),i=o(r);e.default={name:"app",data:function(){return{}},computed:{cats:function(){return this.$store.state.cats}},components:{news_wraper:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{c_news:{},c_cat:""}},props:["cat"],mounted:function(){this.c_cat=this.cat,this.c_id=this.cn_id},computed:{cats:function(){return this.$store.state.cats},news:function(){return this.$store.state.news}},watch:{c_cat:function(){this.$store.dispatch("getNews",{cat:this.c_cat}),this.c_news=this.$store.state.news}}}}]);
//# sourceMappingURL=app.518cfcfe886f616cec60.js.map