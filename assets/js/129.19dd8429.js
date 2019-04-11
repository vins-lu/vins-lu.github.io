(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{188:function(t,s,e){"use strict";e.r(s);var n=e(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("脚本传参对命令组合，提供了方便")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("钩子命令对命令运行前后的变量设置或者清理工作提供了一些方便，可以使我们不用再单独写一个命令")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-env"),e("OutboundLink")],1),t._v(" 跨平台的设置node变量")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"npm-脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" npm 脚本")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("npm 可以使用 "),s("strong",[this._v("npm run script")]),this._v(" 命令，运行在package.json文件里面使用"),s("strong",[this._v("scripts")]),this._v("字段定义的脚本命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本传参","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本传参")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("向 npm 脚本传入参数，要使用 "),s("strong",[this._v("--")]),this._v(" 标明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"scripts": {\n\t"mode": "set ENV_MODE=test npm run",\n\t"test": "node test.js",\n}\n\n// shell运行\nnpm run mode -- test\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在node文件中使用 "),s("strong",[this._v("process.argv")]),this._v(" 可以获取node脚本的参数，返回一个数组，第一个值表示node程序的执行路径，第二个表示执行文件的路径，后面的值表示获取到的命令的参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"多个命令执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个命令执行顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 多个命令执行顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("顺序(继发)执行使用 "),s("strong",[this._v("&&")])]),this._v(" "),s("li",[this._v("并行执行使用 "),s("strong",[this._v("&")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"scripts": {\n\t"setmode": "set ENV_MODE=test",\n\t"test": "npm run setmode & node test.js", # 继发执行\n}\n\n// shell运行\nnpm run test\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前后挂钩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前后挂钩","aria-hidden":"true"}},[this._v("#")]),this._v(" 前后挂钩")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("前钩子：使用 "),s("strong",[this._v("pre-")]),this._v(" + script 定义命令后，在运行script前会运行此命令")]),this._v(" "),s("li",[this._v("后钩子：使用 "),s("strong",[this._v("post-")]),this._v(" + script 定义命令后，在运行script后会运行此命令")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"scripts": {\n\t"pretest": "set ENV_MODE=test",\n\t"test": "node test.js",\n}\n\n// shell运行\nnpm run test\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"npm-变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-变量","aria-hidden":"true"}},[this._v("#")]),this._v(" npm 变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("获取")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("npm可以获取package.json对象里面的值，使用 "),s("strong",[this._v("npm_package_")]),this._v(" + 对象的 key(嵌套使用 "),s("strong",[this._v("_")]),this._v(" 链接)，获取相对应的值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{\n  "name": "npms",\n  "version": "1.0.0",\n  "description": "npms script",\n  "main": "index.js",\n  "scripts": {\n\t"setmode": "set ENV_MODE=test",\n\t"test": "npm run setmode & node test.js"\n  },\n  "config": {\n\t  "vins": "lu"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\nnpm_package_name -> name -> \'npms\'\nnpm_package_scripts_setmode -> \'set ENV_MODE=test\'\nnpm_package_config_vins -> \'lu\'\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在node文件中可以这样获取 "),s("strong",[this._v("process.env.npm_package_")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("设置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("strong",[this._v("npm config set")]),this._v(" 可以设置package.json文件 "),s("strong",[this._v("config")]),this._v(" 里面的字段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"跨平台的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨平台的设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 跨平台的设置")])}],!1,null,null,null);s.default=r.exports}}]);