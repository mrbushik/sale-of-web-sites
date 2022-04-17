/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_pop_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pop-up */ \"./modules/pop-up.js\");\n/* harmony import */ var _modules_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/examples */ \"./modules/examples.js\");\n/* harmony import */ var _modules_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cost */ \"./modules/cost.js\");\n/* harmony import */ var _modules_costSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/costSubmit */ \"./modules/costSubmit.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_pop_up__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_examples__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_cost__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_costSubmit__WEBPACK_IMPORTED_MODULE_4__.costSubmit)({\r\n    formName: '.form-question_bonus',\r\n    mobilePhoneInput: 'bonus-input',\r\n    mobilePhoneRectangle: '.phone-rectangl_bonus'\r\n\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cost.js":
/*!*************************!*\
  !*** ./modules/cost.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cost = () => {\r\n    const btn = document.querySelectorAll('.next-btn');\r\n    const targetItem = document.querySelectorAll('.form-target_item');\r\n    const form = document.querySelectorAll('.form-question');\r\n    const formWrapper = document.querySelector('.price-form');\r\n    const submit = document.querySelector('submit-next_rectang');\r\n    let count = 0;\r\n    let nextForm = 1;\r\n    targetItem.forEach((item, index) => {\r\n        item.addEventListener('click', (e) => {\r\n            item.classList.toggle('item-active');\r\n            targetItem[14].classList.remove('item-active');\r\n\r\n        });\r\n    });\r\n    btn.forEach((item, index) => {\r\n        item.addEventListener('click', (e) => {\r\n\r\n            const checkItem = () => {\r\n                let success = false;\r\n                const itemActive = document.querySelectorAll('.item-active');\r\n                itemActive.forEach((item, index) => {\r\n                    if (count === 3) {\r\n                        item.classList.remove('item-active');\r\n                        formWrapper.classList.add('d-none')\r\n                        success = true;\r\n                    }\r\n                    if (index >= 0) {\r\n                        item.classList.remove('item-active');\r\n                        success = true;\r\n                    }\r\n\r\n\r\n                });\r\n                return success;\r\n\r\n            };\r\n\r\n            if (checkItem()) {\r\n                form[count].classList.add('d-none');\r\n                form[nextForm].classList.remove('d-none');\r\n\r\n                count++;\r\n                nextForm++;\r\n            }\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cost);\n\n//# sourceURL=webpack:///./modules/cost.js?");

/***/ }),

/***/ "./modules/costSubmit.js":
/*!*******************************!*\
  !*** ./modules/costSubmit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"costSubmit\": () => (/* binding */ costSubmit)\n/* harmony export */ });\nconst costSubmit = ({\r\n    formName,\r\n    mobilePhoneInput,\r\n    mobilePhoneRectangle\r\n}) => {\r\n    const thanksMenu = document.querySelector('.thanks-window');\r\n    const inputPhoneRectangle = document.querySelector(mobilePhoneRectangle);\r\n    const inputPhone = document.getElementById(mobilePhoneInput);\r\n    const form = document.querySelector(formName);\r\n    const okBtn = document.querySelector('.thanks-btn');\r\n\r\n\r\n\r\n    okBtn.addEventListener('click', () => {\r\n        thanksMenu.classList.add('d-none');\r\n\r\n    });\r\n\r\n\r\n    const closePopUpMenu = () => {\r\n        thanksMenu.classList.remove('d-none');\r\n    };\r\n\r\n\r\n    inputPhone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d\\+]/, '');\r\n        if (inputPhone.value.length > 4 || inputPhone.value.length < 16) {\r\n            inputPhoneRectangle.style.border = \"none\";\r\n        }\r\n\r\n    });\r\n\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n        list.forEach((input) => {\r\n            if (input.value.length < 4 || input.value.length > 16) {\r\n                success = false;\r\n\r\n\r\n            }\r\n\r\n        });\r\n        return success;\r\n    };\r\n\r\n\r\n    const sendData = (data) => {\r\n        return fetch(' https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n\r\n    const submitForm = () => {\r\n        const formDate = new FormData(form);\r\n        const formBody = {};\r\n\r\n        const formElements = form.querySelectorAll('input');\r\n        formDate.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        if (validate(formElements)) {\r\n            closePopUpMenu();\r\n\r\n            sendData(formBody)\r\n                .then(data => {\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n\r\n                .catch(error => {\r\n                    console.log('some err');\r\n                });\r\n        } else {\r\n            inputPhoneRectangle.style.border = \"1px solid red\";\r\n\r\n        }\r\n\r\n\r\n    };\r\n\r\n\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('добавьте элемент');\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n// export default costSubmit;\n\n//# sourceURL=webpack:///./modules/costSubmit.js?");

/***/ }),

/***/ "./modules/examples.js":
/*!*****************************!*\
  !*** ./modules/examples.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst siteExamples = () => {\r\n\r\n    const examplesBtn = document.querySelectorAll('.project-btn');\r\n    const onleneShopItems = document.querySelectorAll('.online-shop_item');\r\n    const multiPageItems = document.querySelectorAll('.multi-page_item');\r\n    const lendingItems = document.querySelectorAll('.lending_item ');\r\n\r\n\r\n    examplesBtn.forEach((item, index) => {\r\n\r\n        item.addEventListener('click', (e) => {\r\n            examplesBtn[0].classList.remove('btn-active');\r\n            examplesBtn[1].classList.remove('btn-active');\r\n            examplesBtn[2].classList.remove('btn-active');\r\n\r\n            if (index === 0) {\r\n                item.classList.toggle('btn-active');\r\n                onleneShopItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n                lendingItems.forEach((item) => {\r\n                    item.classList.remove('d-none');\r\n                });\r\n                multiPageItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n\r\n            } else if (index === 1) {\r\n                item.classList.toggle('btn-active');\r\n\r\n                multiPageItems.forEach((item) => {\r\n                    item.classList.remove('d-none');\r\n                });\r\n                lendingItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n                onleneShopItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n\r\n            } else if (index === 2) {\r\n                item.classList.toggle('btn-active');\r\n\r\n                multiPageItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n                onleneShopItems.forEach((item) => {\r\n                    item.classList.remove('d-none');\r\n                });\r\n                lendingItems.forEach((item) => {\r\n                    item.classList.add('d-none');\r\n                });\r\n            }\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteExamples);\n\n//# sourceURL=webpack:///./modules/examples.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector(\".menu-block-btn\");\r\n    const dropMenu = document.querySelector(\".drop-menu\");\r\n    const row = document.querySelectorAll(\".header-row\");\r\n    const closeMenuBtn = document.querySelector(\".menu-active_btn\");\r\n    const header = document.querySelector(\".header\");\r\n\r\n\r\n    let count = 0;\r\n\r\n    menuBtn.addEventListener(\"click\", () => {\r\n\r\n        row.forEach((item) => {\r\n            item.classList.toggle(\"d-none\");\r\n        });\r\n\r\n        header.classList.toggle(\"active-menu\");\r\n        dropMenu.classList.toggle(\"d-none\");\r\n        closeMenuBtn.classList.toggle(\"d-none\");\r\n\r\n        if (!closeMenuBtn.classList.contains(\"d-none\")) {\r\n\r\n            appearanceBtn(closeMenuBtn);\r\n\r\n        } else {\r\n            closeMenuBtn.style.opacity = 0;\r\n        }\r\n\r\n\r\n\r\n    });\r\n\r\n    const appearanceBtn = (elem) => {\r\n\r\n        const appearanceBtnTimer = setInterval(() => {\r\n            count += 0.05;\r\n            elem.style.opacity = count;\r\n            if (count >= 1) {\r\n                clearInterval(appearanceBtnTimer);\r\n                count = 0;\r\n            }\r\n        }, 10);\r\n\r\n    };\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/pop-up.js":
/*!***************************!*\
  !*** ./modules/pop-up.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popUp = () => {\r\n    const leaveRequestBtn = document.querySelector('.create-rectangle_titile');\r\n    const popUpMenu = document.querySelector('.pop-up_menu');\r\n    const closePopUp = document.querySelector('.pop-up_closeBtn');\r\n    const thanksMenu = document.querySelector('.thanks-window');\r\n    const inputPhoneRectangle = document.querySelector('.pop-up_phone');\r\n    const inputPhone = document.getElementById('ppop-up_phone-input');\r\n    const form = document.querySelector('.mobile-phone_form');\r\n    const okBtn = document.querySelector('.thanks-btn');\r\n\r\n\r\n    leaveRequestBtn.addEventListener('click', () => {\r\n        popUpMenu.classList.remove('d-none');\r\n    });\r\n\r\n    closePopUp.addEventListener('click', () => {\r\n        popUpMenu.classList.add('d-none');\r\n    });\r\n\r\n\r\n    okBtn.addEventListener('click', () => {\r\n        thanksMenu.classList.add('d-none');\r\n\r\n    });\r\n\r\n\r\n    const closePopUpMenu = () => {\r\n        popUpMenu.classList.add('d-none');\r\n        thanksMenu.classList.remove('d-none');\r\n    };\r\n\r\n\r\n    inputPhone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d\\+]/, '');\r\n        if (inputPhone.value.length > 4 || inputPhone.value.length < 16) {\r\n            inputPhoneRectangle.style.border = \"none\";\r\n        }\r\n\r\n    });\r\n\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n        list.forEach((input) => {\r\n            if (input.value.length < 4 || input.value.length > 16) {\r\n                success = false;\r\n\r\n\r\n            }\r\n\r\n        });\r\n        return success;\r\n    };\r\n\r\n\r\n    const sendData = (data) => {\r\n        return fetch(' https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n\r\n    const submitForm = () => {\r\n        const formDate = new FormData(form);\r\n        const formBody = {};\r\n\r\n        const formElements = form.querySelectorAll('input');\r\n        formDate.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        if (validate(formElements)) {\r\n            closePopUpMenu();\r\n\r\n            sendData(formBody)\r\n                .then(data => {\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n\r\n                .catch(error => {\r\n                    console.log('some err');\r\n                });\r\n        } else {\r\n            inputPhoneRectangle.style.border = \"1px solid red\";\r\n\r\n        }\r\n\r\n\r\n    };\r\n\r\n\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('добавьте элемент');\r\n        }\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack:///./modules/pop-up.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;