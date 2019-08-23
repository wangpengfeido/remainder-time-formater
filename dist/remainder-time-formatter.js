(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/remainder-time-formatter.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/remainder-time-formatter.ts":
/*!*****************************************!*\
  !*** ./src/remainder-time-formatter.ts ***!
  \*****************************************/
/*! exports provided: RemainderTimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemainderTimeFormatter\", function() { return RemainderTimeFormatter; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\n/**\r\n * the configuration fragment item.\r\n */\n\nclass RemainderTimeFormatter {\n  /**\r\n   * @param {Date} date the date to calculate\r\n   * @param  {Date} relativeDate the relative date to contrast\r\n   * @param {ConfigItem[]} config the segmented configuration to set the start of the time range(ms),the end of the time range(ms),template or render function\r\n   */\n  constructor({\n    date,\n    relativeDate,\n    config\n  }) {\n    this.date = date;\n    this.relativeDate = relativeDate;\n    this.config = config.map(item => {\n      return {\n        timeStart: item.timeStart,\n        timeEnd: item.timeEnd,\n        template: item.template,\n        render: item.render\n      };\n    }).sort((a, b) => {\n      if (a.timeStart !== b.timeStart) {\n        return a.timeStart - b.timeStart;\n      }\n    });\n    this.timeInterval = this.relativeDate.getTime() - this.date.getTime();\n  }\n\n  get Y() {\n    return this.date.getFullYear().toString();\n  }\n\n  get YYYY() {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"fillLeftByZero\"])(this.Y, 4);\n  }\n\n  get M() {\n    return (this.date.getMonth() + 1).toString();\n  }\n\n  get MM() {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"fillLeftByZero\"])(this.M, 2);\n  }\n\n  get D() {\n    return this.date.getDate().toString();\n  }\n\n  get DD() {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"fillLeftByZero\"])(this.D, 2);\n  }\n\n  get H() {\n    return this.date.getHours().toString();\n  }\n\n  get HH() {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"fillLeftByZero\"])(this.H, 2);\n  }\n\n  get m() {\n    return this.date.getMinutes().toString();\n  }\n\n  get mm() {\n    return;\n  }\n\n  getResult() {}\n\n}\n\n//# sourceURL=webpack:///./src/remainder-time-formatter.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: fillLeftByZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillLeftByZero\", function() { return fillLeftByZero; });\nfunction fillLeftByZero(str, length) {\n  str = str.toString();\n\n  while (str.length < length) {\n    str = `0${str}`;\n  }\n\n  return str;\n}\n\n//# sourceURL=webpack:///./src/util.ts?");

/***/ })

/******/ });
});