(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{232:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("$attrs 和 $listeners 的使用")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("使用 "),r("strong",[t._v("vuex")]),t._v(" 提供的插件机制："),r("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuex插件"),r("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("如果是引用类型，子组件修改，则不会报错")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("类似react中的子组件调用父组件的事件，修改数据")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("当前组件的数据变化，只会渲染当前组件,如果子组件依赖父组件的部分数据，则子组件也会渲染")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("vue 2.4之前使用优先microTask，2.5使用task，2.6使用microTask;")]),t._v(" "),r("p",[t._v("优先级： Promise.then > MutationObserver(2.6 | < 2.4) > MessageChannel >  setImmediate > setTimeout")]),t._v(" "),r("p",[t._v("task带来的潜藏问题，回调函数放在task队列的尾部，会在别的task队列之后执行")]),t._v(" "),r("p",[t._v("mocroTask,会把回调放在微任务队列的尾部，当和promise.then一起使用时，存在先后问题")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"小想法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小想法","aria-hidden":"true"}},[this._v("#")]),this._v(" 小想法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一些可优化的地方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些可优化的地方","aria-hidden":"true"}},[this._v("#")]),this._v(" 一些可优化的地方")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("同组件的复用，需要监听路由变化")])]),this._v(" "),e("li",[e("p",[this._v("高阶组件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修饰符","aria-hidden":"true"}},[this._v("#")]),this._v(" 修饰符")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("前提：使用 "),e("strong",[this._v("class")]),this._v(" 的形式定义组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("在 "),e("strong",[this._v("vue")]),this._v(" 或者vue实例上添加全局的修饰符（修饰符可以统一的对象管理）")])]),this._v(" "),e("li",[e("p",[this._v("对特定行为(加载，数据请求，错误分析等)，可以使用混入的方式记录，或者使用vue插件，添加或修饰原型方法")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"记录状态管理的行为，数据分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录状态管理的行为，数据分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 记录状态管理的行为，数据分析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue的prop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的prop","aria-hidden":"true"}},[this._v("#")]),this._v(" vue的prop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"prop验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prop验证","aria-hidden":"true"}},[this._v("#")]),this._v(" prop验证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("引用类型的修改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("函数的传递")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"跨组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨组件通信","aria-hidden":"true"}},[this._v("#")]),this._v(" 跨组件通信")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("p",[t._v("vuex")])]),t._v(" "),r("li",[r("p",[t._v("eventbus")])]),t._v(" "),r("li",[r("p",[t._v("$attr 和 $listeners 事件传递，可以emit触发，也可以直接调用")])]),t._v(" "),r("li",[r("p",[t._v("使用根组件 "),r("strong",[t._v("$root")]),t._v(" 或者父组件 "),r("strong",[t._v("$parent")]),t._v("， 获取和同步数据，类似于小程序")])]),t._v(" "),r("li",[r("p",[t._v("使用 "),r("strong",[t._v("Vue.observable")]),t._v(" 创建一个响应式数据")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据变化到页面渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据变化到页面渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据变化到页面渲染")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("strong",[this._v("MutationObserver")]),this._v(" (microtask) 检测dom变化，查看内部diff算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("diff的dom差异会通过原生dom操作添加和删除（优化；当操作过多时采用 "),e("strong",[this._v("DocumentFragment")]),this._v(" 来批量添加）；使用v-if会添加一个注释节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexttick","aria-hidden":"true"}},[this._v("#")]),this._v(" nextTick")])}],!1,null,null,null);e.default=i.exports}}]);