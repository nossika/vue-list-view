!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";i.r(e);var s={props:{list:Array,itemHeightGetter:Function,defaultItemHeight:Number},data:()=>({listView:[],listTotalHeight:0,itemOffsetCache:[],topItemIndex:0}),computed:{listViewWithInfo(){return this.listView.map((t,e)=>{const i=this.topItemIndex+e,{height:s,offset:n}=this.getItemInfo(i);return{index:i,item:t,height:s,offset:n}})}},watch:{list(){this.refreshView()}},methods:{refreshView(t){t&&(t.resize&&(this._viewHeight=this.$refs.wrapper.clientHeight),t.clearCache&&(this.itemOffsetCache=[]));const e=this.$refs.wrapper.scrollTop,i=this._viewHeight,s=this.findItemIndexByOffset(e),n=this.findItemIndexByOffset(e+i);this.topItemIndex=s,this.listView=this.list.slice(s,n+1);const o=this.defaultItemHeight?this.getItemInfo(this.itemOffsetCache.length-1).offset+(this.list.length-this.itemOffsetCache.length)*this.defaultItemHeight:this.getItemInfo(this.list.length-1).offset;this.listTotalHeight=o,this.$refs["item-wrapper"].style.transform=`translateY(${this.getItemInfo(s-1).offset}px)`,this.$emit("scroll",{topItemIndex:s,bottomItemIndex:n,listTotalHeight:o,scrollTop:e})},findItemIndexByOffset(t){if(t>=this.getItemInfo(this.itemOffsetCache.length-1).offset){for(let e=this.itemOffsetCache.length;e<this.list.length;e++)if(this.getItemInfo(e).offset>t)return e;return this.list.length-1}{let e=0,i=this.itemOffsetCache.length-1;for(;e<i;){let s=(e+i)/2|0,n=this.getItemInfo(s).offset;if(n===t)return s;n>t?i=s-1:e=s+1}return this.getItemInfo(e).offset<t&&this.getItemInfo(e+1).offset>t&&(e+=1),e}},getItemInfo(t){if(t<0||t>this.list.length-1)return{offset:0,height:0};let e=this.itemOffsetCache[t];if(!e){let i=this.itemHeightGetter?this.itemHeightGetter(this.list[t],t):this.defaultItemHeight;e=this.itemOffsetCache[t]={height:i,offset:this.getItemInfo(t-1).offset+i}}return e}},mounted(){this.refreshView({resize:!0})}},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticStyle:{width:"100%",height:"100%",overflow:"auto",position:"relative",margin:"0",padding:"0",border:"none"},on:{scroll:function(e){t.refreshView()}}},[i("div",{staticStyle:{width:"100%",padding:"0",margin:"0"},style:{height:t.listTotalHeight+"px"}}),t._v(" "),i("div",{ref:"item-wrapper",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",padding:"0",margin:"0"}},t._l(t.listViewWithInfo,function(e,s){return i("div",{key:e.index,style:{height:e.height+"px"}},[t._t("default",null,{item:e.item,height:e.height,offset:e.offset,index:e.index})],2)}))])};n._withStripped=!0;var o=function(t,e,i,s,n,o,r,f){var h=typeof(t=t||{}).default;"object"!==h&&"function"!==h||(t=t.default);var l,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=i,a._compiled=!0),s&&(a.functional=!0),o&&(a._scopeId=o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=l):n&&(l=f?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(a.functional){a._injectStyles=l;var u=a.render;a.render=function(t,e){return l.call(e),u(t,e)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:a}}(s,n,[],!1,null,null,null);o.options.__file="packages\\list-view.vue";e.default=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.listView=void 0;var s,n=i(0),o=(s=n)&&s.__esModule?s:{default:s};var r={install:function(t){t.component("list-view",o.default)}};window&&window.Vue&&window.Vue.use(r),e.listView=r}])});