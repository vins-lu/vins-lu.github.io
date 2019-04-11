(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{213:function(t,e,a){"use strict";a.r(e);var v=a(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"生命周期简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期简述","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期简述")]),t._v(" "),a("p",[t._v("按照页面的加载到卸载，生命周期主要有以下：")]),t._v(" "),a("ol",[a("li",[t._v("预加载")]),t._v(" "),a("li",[t._v("完全加载")]),t._v(" "),a("li",[t._v("(非)活动状态")]),t._v(" "),a("li",[t._v("后台状态")]),t._v(" "),a("li",[t._v("冻结状态(假死状态)")]),t._v(" "),a("li",[t._v("卸载")])]),t._v(" "),a("h2",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),a("p",[t._v("html文档加载，外联资源未处理，可以使用document监听"),a("strong",[t._v("DOMContentLoaded")]),t._v("事件进行处理")]),t._v(" "),a("h2",{attrs:{id:"完全加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完全加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 完全加载")]),t._v(" "),a("p",[t._v("文档的所有资源都完全加载(无论资源加载成功与否)，可以使用"),a("strong",[t._v("onload")]),t._v("事件监听")]),t._v(" "),a("p",[t._v("document.readyState 属性描述了文档的加载状态。")]),t._v(" "),a("ul",[a("li",[t._v("loading: 加载")]),t._v(" "),a("li",[t._v("document: 文档加载。")]),t._v(" "),a("li",[t._v("interactive: 文档已经完成加载，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载。")]),t._v(" "),a("li",[t._v("complete: 文档和所有子资源已完成加载。状态表示 load 事件即将被触发。\n当这个属性的值变化时，document 对象上的readystatechange 事件将被触发。")])]),t._v(" "),a("h2",{attrs:{id:"活动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 活动状态")]),t._v(" "),a("p",[t._v("页面可以监听用户的操作的输入等")]),t._v(" "),a("h2",{attrs:{id:"后台状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 后台状态")]),t._v(" "),a("p",[t._v("页面隐藏，最小化，可以使用document监听"),a("strong",[t._v("visibilitychange")]),t._v("事件，获取document.visibilityState的值来判断")]),t._v(" "),a("p",[t._v("document.visibilityState（只读属性）, 返回document的可见性,")]),t._v(" "),a("ul",[a("li",[t._v("visible: 此时页面内容至少是部分可见. 即此页面在前景标签页中，并且窗口没有最小化.")]),t._v(" "),a("li",[t._v("hidden: 此时页面对用户不可见. 即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 锁屏状态 .")]),t._v(" "),a("li",[t._v("prerender: 页面此时正在渲染中, 因此是不可见的 (considered hidden for purposes of document.hidden). 文档只能从此状态开始，永远不能从其他值变为此状态.注意: 浏览器支持是可选的.")]),t._v(" "),a("li",[t._v("unloaded: 页面从内存中卸载清除. 注意: 浏览器支持是可选的.\n当此属性的值改变时, 会递交 visibilitychange 事件给Document.")])]),t._v(" "),a("h2",{attrs:{id:"冻结状态-假死状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冻结状态-假死状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 冻结状态(假死状态)")]),t._v(" "),a("p",[t._v("网页处于后台时间过久，用户又不关闭网页，浏览器就有可能冻结网页，可以使用"),a("strong",[t._v("document.onfreeze")]),t._v("事件监听")]),t._v(" "),a("h2",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载","aria-hidden":"true"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),a("p",[t._v("用户手动关闭或者被系统强制关闭，页面就会卸载，"),a("strong",[t._v("beforeunload")]),t._v("事件在窗口或文档即将卸载时触发，"),a("strong",[t._v("unload")]),t._v("事件在页面正在卸载时触发")]),t._v(" "),a("h1",{attrs:{id:"浏览器前进、后退使用机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器前进、后退使用机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器前进、后退使用机制")]),t._v(" "),a("p",[t._v("pageshow和pagehide事件，跟页面的可见性其实毫无关系，只跟浏览器的 History 记录的是否变化有关")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("pageshow事件在用户加载网页时触发(可能是首次加载，也可能是页面返回)。如果是页面返回或者从缓存中获取，则该事件对象的event.persisted属性为true，否则为false。")])]),t._v(" "),a("li",[a("p",[t._v("pagehide事件在用户离开当前网页时触发")])])])])}],!1,null,null,null);e.default=_.exports}}]);