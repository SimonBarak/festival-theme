/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://project-archive/./src/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_fullscreen_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/fullscreen-menu.js */ \"./src/js/fullscreen-menu.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n(0,_js_fullscreen_menu_js__WEBPACK_IMPORTED_MODULE_0__.buildToggleMenu)();\n\nconst getMinutes = (int) => {\n  if (int === 0) return 0;\n  const y = 6 / int;\n  const z = 1 / y;\n  return z;\n};\n\nconst getPosition = (int) => {\n  const startPosition = int - 9.5;\n  return startPosition * 2 * 8;\n};\n\nconst getDecimal = (time) => {\n  const split = time.split(\".\");\n  const numbers = split.map((x) => parseInt(x));\n  const minutesToDeci = getMinutes(numbers[1]);\n  const timeNumber = numbers[0] + minutesToDeci;\n  return timeNumber;\n};\n\nconst getSart = (slot, start) => {\n  const decimal = getDecimal(start);\n  const position = getPosition(decimal);\n\n  slot.style.left = position + \"rem\";\n};\n\nconst getLenght = (start, end) => {\n  const count = getDecimal(end) - getDecimal(start);\n  const inRem = count * 2 * 8;\n  const withBuffer = inRem - 0.5;\n  return withBuffer;\n};\n\nconst handelSlots = (startData, endData, slotEls) => {\n  slotEls.forEach((slot, index) => {\n    const fridayStart = slot.getAttribute(startData);\n    const fridayEnd = slot.getAttribute(endData);\n\n    getSart(slot, fridayStart);\n\n    const lenght = getLenght(fridayStart, fridayEnd);\n    slot.style.width = lenght + \"rem\";\n    slot.style.top = \"-\" + index * 4.5 + \"rem\";\n\n    // slot.style.background(`rgb(66, ${Math.floor(Math.random() * 255)}, 225)`);\n  });\n};\n\nconst rowFridayEls = Array.from(\n  document.getElementsByClassName(\"timeline-row-friday\")\n);\n\nconst rowSaturdayEls = Array.from(\n  document.getElementsByClassName(\"timeline-row-saturday\")\n);\n\nif (rowFridayEls.length > 0) {\n  rowFridayEls.forEach((row) => {\n    const slotEls = Array.from(row.getElementsByClassName(\"slot\"));\n    if (slotEls.length > 0)\n      handelSlots(\"data-friday-start\", \"data-friday-end\", slotEls);\n  });\n\n  rowSaturdayEls.forEach((row) => {\n    const slotEls = Array.from(row.getElementsByClassName(\"slot\"));\n    if (slotEls.length > 0)\n      handelSlots(\"data-saturday-start\", \"data-saturday-end\", slotEls);\n  });\n}\n\n\n//# sourceURL=webpack://project-archive/./src/index.js?");

/***/ }),

/***/ "./src/js/fullscreen-menu.js":
/*!***********************************!*\
  !*** ./src/js/fullscreen-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildToggleMenu\": () => (/* binding */ buildToggleMenu)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n\n\nconst buildToggleMenu = params => {\n  const menuBtn = document.getElementById(\"main-nav__button\");\n  const bodyEl = document.querySelector(\"body\");\n  const navEL = document.getElementById(\"navmenu\");\n\n  // Evet listenere for menu button to active menu Layer\n  if (menuBtn) {\n    menuBtn.addEventListener(\"click\", e => {\n      console.log(\"test\");\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.toggleLayer)(\n        { el: menuBtn, class: \"active\" },\n        { el: navEL, class: \"hidden\" },\n        { el: bodyEl, class: \"menu-is-open\" }\n      );\n    });\n  }\n};\n\n\n//# sourceURL=webpack://project-archive/./src/js/fullscreen-menu.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleLayer\": () => (/* binding */ toggleLayer)\n/* harmony export */ });\n// function for toggle button and another element\nconst toggleLayer = (button, layer, body) => {\n  button.el.classList.toggle(button.class);\n  layer.el.classList.toggle(layer.class);\n  body.el.classList.toggle(body.class);\n};\n\n\n//# sourceURL=webpack://project-archive/./src/js/utils.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;