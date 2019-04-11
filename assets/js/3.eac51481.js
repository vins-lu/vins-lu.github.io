(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(v,_,t){v.exports=t.p+"assets/img/request-page.0a9905dd.jpg"},175:function(v,_,t){v.exports=t.p+"assets/img/dns-simple.02ed3def.jpg"},176:function(v,_,t){v.exports=t.p+"assets/img/dns.ee50275f.jpg"},177:function(v,_,t){v.exports=t.p+"assets/img/tcp.d9d45a1a.jpg"},210:function(v,_,t){"use strict";t.r(_);var e=[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"浏览器的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的工作原理","aria-hidden":"true"}},[v._v("#")]),v._v(" 浏览器的工作原理")]),v._v(" "),e("h2",{attrs:{id:"认识浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认识浏览器","aria-hidden":"true"}},[v._v("#")]),v._v(" 认识浏览器")]),v._v(" "),e("p",[v._v("浏览器的功能是将用户搜索的界面资源显示出来")]),v._v(" "),e("p",[v._v("简单来说浏览器可以分为两部分，界面和内核")]),v._v(" "),e("p",[v._v("界面包含菜单，导航，工具栏等等，提供给用户操作和设置")]),v._v(" "),e("p",[v._v("内核才是浏览器的核心，常见的浏览器内核可以分这四种：Trident、Gecko、 Presto、Webkit")]),v._v(" "),e("h2",{attrs:{id:"浏览器的主要进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的主要进程","aria-hidden":"true"}},[v._v("#")]),v._v(" 浏览器的主要进程")]),v._v(" "),e("p",[v._v("js是单线程的，但是浏览器是多线程的，每打开一个tab，就会创建一个独立的浏览器进程(渲染进程)")]),v._v(" "),e("p",[v._v("浏览器多进程的优点：")]),v._v(" "),e("ul",[e("li",[v._v("不同tab相互独立，避免一个出现问题影响整个浏览器")]),v._v(" "),e("li",[v._v("避免第三方插件出现问题影响整个浏览器")]),v._v(" "),e("li",[v._v("充分利用系统的多核优势，提高效率")])]),v._v(" "),e("p",[v._v("多进程就意味着需要给每一个进程分配内存和资源")]),v._v(" "),e("p",[v._v("为什么js是单线程呢?\njs是一个脚本语言，主要用于实现用户与浏览器的交互行为。设计为单线程可以简化问题")]),v._v(" "),e("p",[v._v("浏览器主要包含的进程：")]),v._v(" "),e("ol",[e("li",[v._v("Browser进程：浏览器的主进程（负责协调、主控），只有一个。作用有")])]),v._v(" "),e("ul",[e("li",[v._v("负责浏览器界面显示，与用户交互。如前进，后退等")]),v._v(" "),e("li",[v._v("将Renderer进程得到的内存中的Bitmap，绘制到用户界面上")]),v._v(" "),e("li",[v._v("负责各个页面的管理，创建和销毁其他进程")]),v._v(" "),e("li",[v._v("网络资源的管理，请求下载等")])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[v._v("GPU进程：用于3D绘制等")])]),v._v(" "),e("li",[e("p",[v._v("浏览器渲染(Renderer)进程：默认每个Tab页面一个进程，互不影响。主要作用有")])])]),v._v(" "),e("ul",[e("li",[v._v("页面渲染")]),v._v(" "),e("li",[v._v("脚本执行")]),v._v(" "),e("li",[v._v("事件处理")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建")])]),v._v(" "),e("h2",{attrs:{id:"浏览器渲染进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程","aria-hidden":"true"}},[v._v("#")]),v._v(" 浏览器渲染进程")]),v._v(" "),e("p",[v._v("渲染进程是浏览器的核心，是如何将拿到的资源渲染为我们看到的页面的核心，渲染进程的主要线程有：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("GUI渲染线程: 页面的渲染和重绘")])]),v._v(" "),e("li",[e("p",[v._v("JS引擎: 解析js脚本，运行代码")])]),v._v(" "),e("li",[e("p",[v._v("事件处理线程: eventLoop")])]),v._v(" "),e("li",[e("p",[v._v("定时触发器线程")])]),v._v(" "),e("li",[e("p",[v._v("异步http请求线程")])])]),v._v(" "),e("h2",{attrs:{id:"web页面的展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web页面的展示","aria-hidden":"true"}},[v._v("#")]),v._v(" web页面的展示")]),v._v(" "),e("p",[v._v("我们打开浏览器，在地址栏输入地址，到页面显示的这一过程中发生了什么事情呢")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("资源的请求\n浏览器主进程发送一个请求\n"),e("img",{attrs:{src:t(174),alt:"请求"}}),v._v("\n域名解析:\n"),e("img",{attrs:{src:t(175),alt:"域名解析"}}),v._v("\n详细的域名解析\n"),e("img",{attrs:{src:t(176),alt:"详细的域名解析"}}),v._v("\ntcp链接\n"),e("img",{attrs:{src:t(177),alt:"tcp链接"}})])]),v._v(" "),e("li",[e("p",[v._v("页面解析")]),v._v(" "),e("ol",[e("li",[v._v("浏览器主进程获取页面后，通过RendererHost接口传递给浏览器渲染进程")]),v._v(" "),e("li",[v._v("浏览器渲染进程传递给GUI渲染线程")]),v._v(" "),e("li",[v._v("GUI渲染线程解析html\n"),e("ol",[e("li",[v._v("解析html建立DOM树")]),v._v(" "),e("li",[v._v("解析css构建CSSOM树")]),v._v(" "),e("li",[v._v("将DOM树和CSSOM树合成render树")]),v._v(" "),e("li",[v._v("布局render树（Layout/reflow），负责各元素尺寸、位置的计算")]),v._v(" "),e("li",[v._v("绘制render树（paint），绘制页面像素信息")]),v._v(" "),e("li",[v._v("复合图层，浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。")])])]),v._v(" "),e("li",[v._v("js解析\n"),e("ol",[e("li",[v._v("JS引擎解析js代码，词法解析和语法解析")]),v._v(" "),e("li",[v._v("运行代码")]),v._v(" "),e("li",[v._v("遇到http请求，异步http请求线程去请求资源")]),v._v(" "),e("li",[v._v("遇到异步函数，事件处理线程将回调函数推入事件队列")]),v._v(" "),e("li",[v._v("遇到计时器，定时触发器线程将回调函数推入事件队列中，同时精准计时")])])]),v._v(" "),e("li",[v._v("EventLoop")])])]),v._v(" "),e("li",[e("p",[v._v("回流、重绘")])])])])}],i=t(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);_.default=s.exports}}]);