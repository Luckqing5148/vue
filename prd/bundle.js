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
//# sourceMappingURL=bundle.js.map