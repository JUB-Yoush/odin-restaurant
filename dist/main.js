/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 634:
/***/ (() => {

const buildPage = () => {
  console.log('ran from startup.js');
  const container = document.getElementById('container');

  const header = document.createElement('div');
  header.textContent = 'untitled food place';
  const headerLinks = document.createElement('div');
  const home = document.createElement('div');
  const homeAnchor = document.createElement('a');
  homeAnchor.textContent = 'home';
  const menu = document.createElement('div');
  const menuAnchor = document.createElement('a');
  menuAnchor.textContent = 'menu';
  const contact = document.createElement('div');
  const contactAnchor = document.createElement('a');
  contactAnchor.textContent = 'contact';

  const main = document.createElement('div');
  const mainHeader = document.createElement('h1');
  const mainBtn = document.createElement('button');

  const footer = document.createElement('div');

  header.classList.add('header');
  headerLinks.classList.add('header-links');

  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');

  main.classList.add('main');
  mainHeader.classList.add('main-header');

  footer.classList.add('footer');

  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);

  home.appendChild(homeAnchor);
  menu.appendChild(menuAnchor);
  contact.appendChild(contactAnchor);
  headerLinks.appendChild(home);
  headerLinks.appendChild(menu);
  headerLinks.appendChild(contact);
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  main.appendChild(mainHeader);
  main.appendChild(mainBtn);
};
buildPage();


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _startup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634);
/* harmony import */ var _startup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_startup_js__WEBPACK_IMPORTED_MODULE_0__);


_startup_js__WEBPACK_IMPORTED_MODULE_0___default().buildPage();

})();

/******/ })()
;