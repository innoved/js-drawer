/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/drawer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n//import './drawer.scss';\n(function ($) {\n  'use strict';\n\n  var drawerFilterIsOpen = false;\n\n  var InnovedDrawer = function InnovedDrawer() {\n    //private - render backdrop and lock page scrolling\n    var drawerBackdrop = function drawerBackdrop() {\n      if ($('.drawer').css('position') == 'absolute') {\n        if ($('.drawer').hasClass('drawer-is-open')) {\n          $('<div class=\"drawer-backdrop\"></div>').appendTo('#content');\n          setTimeout(function () {\n            $('body').addClass('has-drawer-backdrop');\n          }, 50);\n          $('body').css('overflow-y', 'hidden');\n        } else {\n          $('body').removeClass('has-drawer-backdrop');\n          setTimeout(function () {\n            $(\".drawer-backdrop\").remove();\n          }, 450);\n          $('body').css('overflow-y', 'auto');\n        }\n      }\n    }; //private - set the position of the drawer to fixed if we have scrolled past the top\n\n\n    var drawerPosFix = function drawerPosFix() {\n      var elementPosition = $('.drawer').offset().top;\n      var scrollTimeout;\n      var throttle = 250; //we can set the throttle pretty high because we wont be scrolling when the drawer is open\n\n      $(window).on('scroll', function () {\n        if (!scrollTimeout) {\n          scrollTimeout = setTimeout(function () {\n            var yScrollPos = window.pageYOffset;\n            var scrollPosTest = elementPosition;\n\n            if (yScrollPos > scrollPosTest) {\n              $('.drawer').addClass('drawer-is-fixed');\n            } else {\n              $('.drawer').removeClass('drawer-is-fixed');\n            }\n\n            scrollTimeout = null;\n          }, throttle);\n        }\n      });\n    }; //private\n\n\n    var toggleDrawerFilter = function toggleDrawerFilter(target, btn) {\n      if (drawerFilterIsOpen) {\n        TweenMax.to($(target), 0.35, {\n          left: '-250px',\n          onComplete: function onComplete() {\n            $(target).hide();\n          }\n        });\n        btn.html('Open Filter');\n        drawerFilterIsOpen = (_readOnlyError(\"drawerFilterIsOpen\"), false);\n      } else {\n        $(target).show();\n        TweenMax.to($(target), 0.3, {\n          left: '100%',\n          ease: Power3.easeOut\n        });\n        btn.html('Close Filter');\n        drawerFilterIsOpen = (_readOnlyError(\"drawerFilterIsOpen\"), true);\n      }\n    }; //private\n\n\n    var toggleDrawer = function toggleDrawer() {\n      if ($('.drawer').hasClass('drawer-is-open')) {\n        $('.drawer').removeClass('drawer-is-open');\n      } else {\n        $('.drawer').addClass('drawer-is-open');\n      }\n\n      drawerBackdrop();\n    }; //public\n\n\n    this.toggleDrawer = function () {\n      toggleDrawer();\n    }; //public\n\n\n    this.init = function () {\n      drawerBackdrop();\n      drawerPosFix();\n      $('body').on('click', '#js-open-drawer, .drawer-backdrop, .js-toggle-drawer', function () {\n        toggleDrawer();\n      });\n      $('body').on('click', '.js-toggle-drawer-filter', function () {\n        var target = $(this).data('target');\n        var btn = $(this);\n        toggleDrawerFilter(target, btn);\n      });\n    };\n  }; //return the object for global use\n\n\n  $.innovedDrawer = function () {\n    return new InnovedDrawer();\n  };\n})(jQuery); //export for package\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ($.innovedDrawer());\n\n//# sourceURL=webpack:///./src/drawer.js?");

/***/ })

/******/ });