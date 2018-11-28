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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ConfigClass.ts":
/*!****************************!*\
  !*** ./src/ConfigClass.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ConfigClass {\r\n    static getUrlApi() {\r\n        //this.urlApi = \"https://api.bitfinex.com/v1\";\r\n        return this.urlApi;\r\n    }\r\n}\r\nConfigClass.urlApi = \"https://min-api.cryptocompare.com/data/\";\r\nexports.ConfigClass = ConfigClass;\r\n\n\n//# sourceURL=webpack:///./src/ConfigClass.ts?");

/***/ }),

/***/ "./src/controller/IndexController.ts":
/*!*******************************************!*\
  !*** ./src/controller/IndexController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/model/index.ts\");\r\nclass IndexController {\r\n    constructor(_model, _view) {\r\n        this._model = _model;\r\n        this._view = _view;\r\n    }\r\n    initialize() {\r\n        this._view.initialize();\r\n    }\r\n    onGetValue() {\r\n        let self = this;\r\n        let promise = new Promise(function (resolve, reject) {\r\n            let promiseFetch = self._model.getAll();\r\n            promiseFetch.then(response => {\r\n                resolve(response);\r\n            });\r\n        });\r\n        promise.then(response => {\r\n            console.log(response);\r\n            let stringResposta = JSON.stringify(response);\r\n            let coins = JSON.parse(stringResposta);\r\n            let iota = coins.RAW.IOT;\r\n            let ripplexrp = coins.RAW.XRP;\r\n            let coinsValues = new model_1.CoinsObj();\r\n            coinsValues._iota = iota.USD.PRICE;\r\n            coinsValues._ripple = ripplexrp.USD.PRICE;\r\n            this._view.showValues(coinsValues);\r\n        });\r\n    }\r\n}\r\nexports.IndexController = IndexController;\r\n\n\n//# sourceURL=webpack:///./src/controller/IndexController.ts?");

/***/ }),

/***/ "./src/controller/index.ts":
/*!*********************************!*\
  !*** ./src/controller/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./IndexController */ \"./src/controller/IndexController.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/controller/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst model_1 = __webpack_require__(/*! ./model */ \"./src/model/index.ts\");\r\nconst view_1 = __webpack_require__(/*! ./view */ \"./src/view/index.ts\");\r\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./src/controller/index.ts\");\r\nconst elRaiz = document.getElementById(\"root\");\r\nconst model = new model_1.EndPointModel();\r\nconst view = new view_1.IndexView(elRaiz);\r\nconst controller = new controller_1.IndexController(model, view);\r\nview.controller = controller;\r\ncontroller.initialize();\r\nconst btnConsultar = document.getElementById(\"btn-consultar\");\r\nbtnConsultar.addEventListener(\"click\", function () {\r\n    controller.onGetValue();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/EndPointModel.ts":
/*!************************************!*\
  !*** ./src/model/EndPointModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ConfigClass_1 = __webpack_require__(/*! ./../ConfigClass */ \"./src/ConfigClass.ts\");\r\nclass EndPointModel {\r\n    getAll() {\r\n        let url = `${ConfigClass_1.ConfigClass.getUrlApi()}pricemultifull?fsyms=IOT,XRP&tsyms=BTC,USD,BRL`;\r\n        return fetch(url)\r\n            .then(response => {\r\n            if (response.status != 200) {\r\n                throw new Error(\"Erro!\");\r\n            }\r\n            return response.json();\r\n        });\r\n    }\r\n}\r\nexports.EndPointModel = EndPointModel;\r\nclass CoinsObj {\r\n    constructor() {\r\n        this._iota = 0;\r\n        this._ripple = 0;\r\n    }\r\n}\r\nexports.CoinsObj = CoinsObj;\r\n\n\n//# sourceURL=webpack:///./src/model/EndPointModel.ts?");

/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./EndPointModel */ \"./src/model/EndPointModel.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/model/index.ts?");

/***/ }),

/***/ "./src/view/IndexView.ts":
/*!*******************************!*\
  !*** ./src/view/IndexView.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass IndexView {\r\n    constructor(raiz) {\r\n        this.raiz = raiz;\r\n    }\r\n    initialize() {\r\n        this.getValues();\r\n    }\r\n    showValues(values) {\r\n        console.log(\"Iota:\", values._iota);\r\n        if (this.raiz) {\r\n            let iota = this.raiz.getElementsByClassName(\"iota-value\")[0];\r\n            iota.textContent = `${values._iota}`;\r\n        }\r\n        console.log(\"Ripple:\", values._ripple);\r\n        if (this.raiz) {\r\n            let iota = this.raiz.getElementsByClassName(\"ripple-value\")[0];\r\n            iota.textContent = `${values._ripple}`;\r\n        }\r\n    }\r\n    getValues() {\r\n        if (this.controller) {\r\n            this.controller.onGetValue();\r\n        }\r\n    }\r\n}\r\nexports.IndexView = IndexView;\r\n\n\n//# sourceURL=webpack:///./src/view/IndexView.ts?");

/***/ }),

/***/ "./src/view/index.ts":
/*!***************************!*\
  !*** ./src/view/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./IndexView */ \"./src/view/IndexView.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/view/index.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts?");

/***/ })

/******/ });