/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/timer */ \"./src/js/module/timer.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_module_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://gulp-started/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/timer.js":
/*!********************************!*\
  !*** ./src/js/module/timer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar timer = function timer() {\n  var newYear = new Date('Jan 1 2023 00:00:00');\n  var daysVal = document.querySelector('.timer-box__count-days .timer-box__value');\n  var hourseVal = document.querySelector('.timer-box__count-hours .timer-box__value');\n  var minutesVal = document.querySelector('.timer-box__count-minutes .timer-box__value');\n  var secondsVal = document.querySelector('.timer-box__count-seconds .timer-box__value');\n  var end = false;\n  var daysText = document.querySelector('.timer-box__count-days .timer-box__text');\n\n  function declOfNum(number, titles) {\n    var cases = [2, 0, 1, 1, 1, 2];\n    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];\n  }\n\n  var timeCount = function timeCount() {\n    var now = new Date();\n    var leftUntil = newYear - now;\n    var days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);\n    var hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;\n    var minutes = Math.floor(leftUntil / 1000 / 60) % 60;\n    var seconds = Math.floor(leftUntil / 1000) % 60;\n    daysVal.textContent = days;\n    hourseVal.textContent = hours;\n    minutesVal.textContent = minutes;\n    secondsVal.textContent = seconds;\n    daysText.textContent = declOfNum(days, ['????????', '??????', '????????']);\n  };\n\n  timeCount();\n  setInterval(timeCount, 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;