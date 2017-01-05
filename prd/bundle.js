<<<<<<< HEAD
!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=i(1),a=s(n),r=i(4),o=s(r),v=i(7),c=s(v),l=i(9),_=s(l);i(11);var u=i(15),m=i(16);m.render(u);var d=[{path:"/",component:a.default,children:[{path:"/",component:o.default},{path:"/sort",component:c.default},{path:"/my",component:_.default}]}],p=new VueRouter({routes:d});new Vue({router:p}).$mount("#app")},function(t,e,i){var s,n;s=i(2);var a=i(3);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e){"use strict";t.exports={data:function(){return{navIndex:0,footerNav:[{router:"/",ico:"&#xe7ae;",title:"首页"},{router:"/sort",ico:"&#xe65b;",title:"分类"},{router:"/cart",ico:"&#xe611;",title:"购物车"},{router:"/my",ico:"&#xe609;",title:"我的"}]}},methods:{changeNav:function(t){this.navIndex=t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("router-view"),t._v(" "),i("footer",[i("ul",t._l(t.footerNav,function(e,s){return i("li",{class:{active:s==t.navIndex},on:{click:function(e){t.changeNav(s)}}},[i("router-link",{attrs:{to:e.router}},[i("i",{staticClass:"yo-ico",domProps:{innerHTML:t._s(e.ico)}}),t._v(" "),i("b",[t._v(t._s(e.title))])])],1)}))])],1)},staticRenderFns:[]}},function(t,e,i){var s,n;s=i(5);var a=i(6);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e){"use strict";t.exports={data:function(){return{list:[],banner:["/images/images/IMG_4730_02.png","/images/images/IMG_4730_02.png","/images/images/IMG_4730_02.png","/images/images/IMG_4730_02.png","/images/images/IMG_4730_02.png"]}},mounted:function(){var t=this;fetch("/api/list").then(function(t){return t.json()}).then(function(e){console.log(e),t.list=e,t.swiper=new Swiper("#index-swiper",{loop:!0,pagination:".swiper-pagination",autoplay:2e3,autoplayStopOnLast:!0})})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",attrs:{id:"home"}},[t._m(0),t._v(" "),i("section",[i("div",[i("div",{staticClass:"swiper-container",attrs:{id:"index-swiper"}},[i("div",{staticClass:"swiper-wrapper",attrs:{id:"swipet-font"}},t._l(t.banner,function(t){return i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:t}})])})),t._v(" "),i("div",{staticClass:"swiper-pagination"})])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",[i("h1",[t._v("商家推荐")]),t._v(" "),i("ol",t._l(t.list,function(e){return i("li",[t._m(3,!0),t._v(" "),i("div",[i("h2",{domProps:{textContent:t._s(e.title)}}),t._v(" "),i("h3",{domProps:{textContent:t._s(e.instruction)}}),t._v(" "),i("span",{domProps:{textContent:t._s(e.nowprice)}}),t._v(" "),i("b",{domProps:{textContent:t._s(e.sales)}}),t._v(" "),i("b",{staticClass:"price",domProps:{textContent:t._s(e.oldprice)}})])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("ul",[i("li",[i("div",[i("b",{staticClass:"yo-ico"},[t._v("")]),t._v(" "),i("input",{attrs:{type:"text"}})])]),t._v(" "),i("li",{staticClass:"yo-ico"},[t._v("")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[i("b",[t._v("e食汇公告")]),t._v(" "),i("b",{staticClass:"yo-ico"},[t._v("")]),t._v(" "),i("b",[t._v("e食汇退出限时抢购活动，优惠不断，欢迎前来选购")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",[i("li",[i("img",{attrs:{src:"/images/images/news.png"}}),t._v(" "),i("b",[t._v("新品抢购")])]),t._v(" "),i("li",[i("img",{attrs:{src:"/images/images/limit.png"}}),t._v(" "),i("b",[t._v("限时抢购")])]),t._v(" "),i("li",[i("img",{attrs:{src:"/images/images/hot.png"}}),t._v(" "),i("b",[t._v("热销商品")])]),t._v(" "),i("li",[i("img",{attrs:{src:"/images/images/integral.png"}}),t._v(" "),i("b",[t._v("积分兑换")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:"/images/images/IMG_4731_03.png"}})])}]}},function(t,e,i){var s,n,a=i(8);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sort",attrs:{id:"sort"}},[i("header",[i("b",[t._v("分类")])]),t._v(" "),i("section",[i("ol",[i("li",[i("div",[i("p",[i("b",[t._v("套餐")]),t._v(" "),i("b",[t._v("进入专区")])])])]),t._v(" "),i("li",[i("div",[i("p",[i("b",[t._v("套餐")]),t._v(" "),i("b",[t._v("进入专区")])])])]),t._v(" "),i("li",[i("div",[i("p",[i("b",[t._v("套餐")]),t._v(" "),i("b",[t._v("进入专区")])])])]),t._v(" "),i("li",[i("div",[i("p",[i("b",[t._v("套餐")]),t._v(" "),i("b",[t._v("进入专区")])])])])])])])}]}},function(t,e,i){var s,n,a=i(10);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my",attrs:{id:"my"}},[s("header",[s("ul",[s("li"),t._v(" "),s("li",[t._v("我的")]),t._v(" "),s("li",[t._v("设置")])])]),t._v(" "),s("section",[s("ul",[s("li",[s("img",{staticClass:"my_head",attrs:{src:"/images/images/my_head.png"}})]),t._v(" "),s("li",[s("ul",[s("li",[s("h2",[t._v("路人9658")])]),t._v(" "),s("li",[s("span",[t._v("普通用户")])]),t._v(" "),s("li",[s("b",[t._v("了解会员制度")]),s("i",[t._v(">")])])]),t._v(" "),s("img",{staticClass:"dao",attrs:{src:"/images/images/dao.png"}})]),t._v(" "),s("li",[s("img",{staticClass:"erweima",attrs:{src:"/images/images/erweima.png"}})])]),t._v(" "),s("ol",[s("li",[s("img",{attrs:{src:"/images/images/yue.png",alt:""}}),t._v(" "),s("b",[t._v("余额/"),s("span",[t._v("充值")])]),t._v(" "),s("span",[t._v("0.00")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/yongjin.png",alt:""}}),t._v(" "),s("b",[t._v("佣金")]),t._v(" "),s("span",[t._v("0.00")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/integral1.png",alt:""}}),t._v(" "),s("b",[t._v("积分")]),t._v(" "),s("span",[t._v("5")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",{staticClass:"te"}),t._v(" "),s("li",{staticClass:"zhong"},[s("img",{attrs:{src:"/images/images/vip.png",alt:""}}),t._v(" "),s("b",[t._v("会员套餐领取")]),t._v(" "),s("span",[t._v("0/0")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",{staticClass:"te"}),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/my_indents1.png",alt:""}}),t._v(" "),s("b",[t._v("全部订单")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/collection.jpg",alt:""}}),t._v(" "),s("b",[t._v("地址管理")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:i(!function(){var t=new Error('Cannot find module "./images/images/huiyuan.png"');throw t.code="MODULE_NOT_FOUND",t}()),alt:""}}),t._v(" "),s("b",[t._v("会员升级")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/teem.png",alt:""}}),t._v(" "),s("b",[t._v("我的团队")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/henghui.png",alt:""}}),t._v(" "),s("b",[t._v("恒慧学堂")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/yuanc.png",alt:""}}),t._v(" "),s("b",[t._v("远程监控")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/feedback.png",alt:""}}),t._v(" "),s("b",[t._v("客户建议")]),t._v(" "),s("i",[t._v(">")])]),t._v(" "),s("li",[s("img",{attrs:{src:"/images/images/dianhua.png",alt:""}}),t._v(" "),s("b",[t._v("客服电话")]),t._v(" "),s("p",[t._v("400-888-0746")])])])])])}]}},function(t,e){},,,,function(t,e){t.exports='<div id="app">  <router-view></router-view></div>'},function(t,e){"use strict";var i={render:function(t){var e=document.body;e.innerHTML=t+e.innerHTML},isAllLoaded:function(t,e){function i(e){$(t).find("img").each(function(){if(0===this.height)return n=!1,!1}),n?(clearTimeout(s),e()):(n=!0,s=setTimeout(function(){i(e)},3e3))}var s,n=!0;return i(e)},scroll:function(t){var e=new IScroll("#index-scroll",{probeType:3,mouseWheel:!0}),i=35;$(".head.hide").removeClass("hide"),$(".foot.hide").removeClass("hide"),e.scrollBy(0,-i);var s=$(".head img"),n=s.hasClass("up"),a=$(".foot img"),r=s.hasClass("down");e.on("scroll",function(){var t=this.y,e=this.maxScrollY-t;return t>=0?(!n&&s.addClass("up"),""):e>=0?(!r&&a.addClass("down"),""):void 0}),e.on("scrollEnd",function(){this.y>=-i&&this.y<0?(e.scrollTo(0,-i),s.removeClass("up")):this.y>=0&&(s.attr("src","/images/images/ajax-loader.gif"),setTimeout(function(){e.scrollTo(0,-i),s.removeClass("up"),s.attr("src","/images/images/arrow.png")},3e3));var n=this.maxScrollY-this.y;if(n>-i&&n<0){var r=this;e.scrollTo(0,r.maxScrollY+i),a.removeClass("down")}else if(n>=0){a.attr("src","/images/images/ajax-loader.gif");var r=this;fetch("/api/list").then(function(t){return t.json()}).then(function(i){t.list=t.list.concat(i),e.refresh(),e.scrollTo(0,r.maxScrollY-60),a.removeClass("down"),a.attr("src","/images/images/arrow.png")})}})}};t.exports=i}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(3);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(6);
	
	var layout = __webpack_require__(10);
	var common = __webpack_require__(11);
	common.render(layout);
	
	//components
	
	
	//router
	
	var routes = [{
		path: '/',
		component: _index2.default,
		children: [{
			path: '/',
			component: _home2.default
		}]
	}];
	
	var router = new VueRouter({
		routes: routes
	});
	
	var app = new Vue({
		/*router:router,
	 render:h => h(home)*/
		router: router
	}).$mount('#app');
	
	// require('./scripts/views/home.js');
	
	
	/*var common = require('./scripts/utils/util.common.js');
	var home = require('./scripts/tpls/home.html');
	var list = require('./scripts/tpls/list.html');
	var my =require('./scripts/tpls/my.html');
	var register=require('./scripts/tpls/register.html');
	// common.render(home);
	common.render(home);
	// require('./scripts/views/list.js');
	require('./scripts/views/home.js');
	*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home",
	    attrs: {
	      "id": "home"
	    }
	  }, [_c('router-view'), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('ul', [_c('li', {
	    staticClass: "active"
	  }, [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("首页")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico a"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("分类")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("购物车")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("我的")])])])])
	}]}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	new Vue({
		el: '#home',
		data: {
			list: [],
			banner: ['/images/images/IMG_4730_02.png', '/images/images/IMG_4730_02.png', '/images/images/IMG_4730_02.png', '/images/images/IMG_4730_02.png', '/images/images/IMG_4730_02.png']
		},
		mounted: function () {
			fetch('/api/list').then(response => response.json()).then(res => {
				console.log(res);
				this.list = res;
				console.log(res);
				this.swiper = new Swiper("#index-swiper", {
					loop: true,
					pagination: '.swiper-pagination',
					autoplay: 2000,
					autoplayStopOnLast: true
				});
			});
		}
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_vm._m(0), _vm._v(" "), _c('section', [_c('div', [_c('div', {
	    staticClass: "swiper-container",
	    attrs: {
	      "id": "index-swiper"
	    }
	  }, [_c('div', {
	    staticClass: "swiper-wrapper",
	    attrs: {
	      "id": "swipet-font"
	    }
	  }, _vm._l((_vm.banner), function(item) {
	    return _c('div', {
	      staticClass: "swiper-slide"
	    }, [_c('img', {
	      attrs: {
	        "src": item
	      }
	    })])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "swiper-pagination"
	  })])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', [_c('h1', [_vm._v("商家推荐")]), _vm._v(" "), _c('ol', _vm._l((_vm.list), function(item) {
	    return _c('li', [_vm._m(3, true), _vm._v(" "), _c('div', [_c('h2', {
	      domProps: {
	        "textContent": _vm._s(item.title)
	      }
	    }), _vm._v(" "), _c('h3', {
	      domProps: {
	        "textContent": _vm._s(item.instruction)
	      }
	    }), _vm._v(" "), _c('span', {
	      domProps: {
	        "textContent": _vm._s(item.nowprice)
	      }
	    }), _vm._v(" "), _c('b', {
	      domProps: {
	        "textContent": _vm._s(item.sales)
	      }
	    }), _vm._v(" "), _c('b', {
	      staticClass: "price",
	      domProps: {
	        "textContent": _vm._s(item.oldprice)
	      }
	    })])])
	  }))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', [_c('div', [_c('b', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text"
	    }
	  })])]), _vm._v(" "), _c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('p', [_c('b', [_vm._v("e食汇公告")]), _vm._v(" "), _c('b', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("e食汇退出限时抢购活动，优惠不断，欢迎前来选购")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('ul', [_c('li', [_c('img', {
	    attrs: {
	      "src": "/images/images/news.png"
	    }
	  }), _vm._v(" "), _c('b', [_vm._v("新品抢购")])]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/images/limit.png"
	    }
	  }), _vm._v(" "), _c('b', [_vm._v("限时抢购")])]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/images/hot.png"
	    }
	  }), _vm._v(" "), _c('b', [_vm._v("热销商品")])]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": "/images/images/integral.png"
	    }
	  }), _vm._v(" "), _c('b', [_vm._v("积分兑换")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('img', {
	    attrs: {
	      "src": "/images/images/IMG_4731_03.png"
	    }
	  })])
	}]}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">	<router-view></router-view></div>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	var common = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		}
	};
	module.exports = common;

/***/ }
/******/ ]);
>>>>>>> gxz
//# sourceMappingURL=bundle.js.map