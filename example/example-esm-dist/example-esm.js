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

/***/ "./example/example-esm.js":
/*!********************************!*\
  !*** ./example/example-esm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_fuckill_esmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/fuckill.esmodule */ \"./lib/fuckill.esmodule.js\");\n/* harmony import */ var _lib_fuckill_esmodule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_fuckill_esmodule__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nnew (_lib_fuckill_esmodule__WEBPACK_IMPORTED_MODULE_0___default())({\r\n    el: '#app',\r\n    data: {\r\n        testtext: 'xxxxxxxxxxxxxxxxxx'\r\n    },\r\n    methods: {\r\n        clickFn () {\r\n            alert(6666)\r\n        }\r\n    },\r\n    beforeCreate () {\r\n        console.log('beforeCreate')\r\n    },\r\n    created () {\r\n        console.log('created')\r\n    },\r\n    mounted () {\r\n        console.log('mounted')\r\n    }\r\n})\n\n//# sourceURL=webpack://fuckill/./example/example-esm.js?");

/***/ }),

/***/ "./lib/fuckill.esmodule.js":
/*!*********************************!*\
  !*** ./lib/fuckill.esmodule.js ***!
  \*********************************/
/***/ ((module) => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse { var i, a; }\n})(self, () => {\nreturn /******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/compile.js\":\n/*!************************!*\\\n  !*** ./src/compile.js ***!\n  \\************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ \\\"./src/sub.js\\\");\\n\\n\\nfunction Compile(vm) {\\n    this.vm = vm\\n    this.el = document.querySelector(vm.el)\\n    this.fragment = null\\n    this.init()\\n}\\n\\nCompile.prototype.init = function () {\\n    this.fragment = this.getFragment()\\n    this.formatFragment(this.fragment)\\n    this.el.appendChild(this.fragment)\\n}\\n\\n// 把指定el 里面的所有节点移入 代码块中\\nCompile.prototype.getFragment = function () {\\n    let fragment = document.createDocumentFragment()\\n    // 通过appendChild 把元素全部移入 fragment中\\n    let child = this.el.firstChild\\n    while (child) {\\n        fragment.appendChild(child)\\n        child = this.el.firstChild\\n    }\\n    return fragment\\n}\\n\\n// 格式化文档片段\\nCompile.prototype.formatFragment = function (el) {\\n    [].slice.call(el.childNodes).forEach(node => {\\n        let reg = /((?:\\\\{\\\\{)[^\\\\{\\\\}]*(?:\\\\}\\\\}))/g,\\n            text = node.textContent\\n        if (node.nodeType === 3 && text.match(reg) && text.match(reg).length) { // 该节点时文本节点 且 具有 {{}} 指令\\n            this.formatText(node, text.match(reg))\\n        } else if (node.nodeType === 1 && node.attributes.length > 0) { // 该节点为元素节点时\\n            this.getDirective(node)\\n        }\\n        if (node.childNodes && node.childNodes.length) {\\n            this.formatFragment(node)\\n        }\\n    })\\n}\\n\\n// 格式化文本节点的内容\\nCompile.prototype.formatText = function (node, attrs) {\\n    let initText = node.textContent // 获取文本\\n    attrs.forEach(attr => {\\n        let val = this.getAttrVal(attr.slice(2, -2))\\n        node.textContent = node.textContent.replace(attr, val) // 初始化属性值\\n\\n\\n        let text = initText\\n        new _sub__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"](this.vm, attr.slice(2, -2), val => {\\n            console.log(val)\\n            node.textContent = attrs.forEach(key => { // 获取到值后 重新遍历该文本节点中的 {{}} 指令\\n                let keyVal = this.getAttrVal(key.slice(2, -2))\\n                text = text.replace(key, keyVal)\\n            })\\n            node.textContent = text\\n            text = initText // 设置完毕, 重新初始化值便于下次修改赋值\\n        })\\n    })\\n}\\n\\nCompile.prototype.getAttrVal = function (attr) {\\n    if (attr.indexOf('.') >= 0) {\\n        let attrArr = attr.split('.')\\n        return attrArr.reduce((obj, attr) => {\\n            if (typeof obj !== 'object') {\\n                return this.vm[obj][attr]\\n            }\\n            return obj[attr]\\n        })\\n    } else {\\n        return this.vm[attr]\\n    }\\n}\\n\\nCompile.prototype.getDirective = function (node) {\\n    let attrs = node.attributes;\\n    [].slice.call(attrs).forEach(attr => {\\n        if (attr.name.indexOf('v-') >= 0) {\\n            let val = attr.value\\n            if (attr.name.indexOf('v-on:') >= 0) {\\n                this.compileEvent(node, attr)\\n            } else if (attr.name.indexOf('v-model') >= 0) {\\n                this.compileModel(node, val)\\n            } else if (attr.name.indexOf('v-bind') >= 0) {\\n                this.compileBind(node, attr)\\n            } else {\\n                console.log('其余指令')\\n            }\\n        } else if (attr.name.indexOf(':') === 0) {\\n            this.compileBind(node, attr)\\n        } else if (attr.name.indexOf('@') === 0) {\\n            this.compileEvent(node, attr)\\n        }\\n    })\\n}\\n\\nCompile.prototype.compileModel = function (input, attr) {\\n    let reg = /((?:\\\\{\\\\{)[^\\\\{\\\\}]*(?:\\\\}\\\\}))/g,\\n        getNodeText = el => {\\n            [].slice.call(el.childNodes).forEach(node => {\\n                let text = node.textContent\\n                if (node.nodeType === 3 && node.textContent.indexOf(`{{${attr}}}`) >= 0) {\\n                    this.formatText(node, text.match(reg))\\n                }\\n                if (node.childNodes && node.childNodes.length > 0) {\\n                    getNodeText.call(this, node)\\n                }\\n            })\\n        }\\n    getNodeText.call(this, this.fragment)\\n    input.value = this.getAttrVal(attr)\\n    input.addEventListener('input', e => {\\n        if (attr.indexOf('.') < 0) return this.vm[attr] = e.target.value\\n\\n        attr.split('.').reduce((obj, attr, index, arr) => {\\n            if (index >= arr.length - 1) {\\n                if (typeof obj !== 'object') {\\n                    return this.vm[obj][attr] = e.target.value\\n                }\\n                return obj[attr] = e.target.value\\n            }\\n            if (typeof obj !== 'object') {\\n                return this.vm[obj][attr]\\n            }\\n            return obj[attr]\\n        })\\n    })\\n}\\n\\nCompile.prototype.compileEvent = function (node, attr) {\\n    let ev = attr.name.indexOf(':') >= 0 && attr.name.split(':')[1] || attr.name.indexOf('@') >= 0 && attr.name.split('@')[1],\\n        fn = attr.value\\n    if (typeof this.vm.methods[fn] !== 'function') return console.warn('methods 里面只能放函数')\\n    node.addEventListener(ev, this.vm.methods[fn].bind(this.vm))\\n}\\n\\nCompile.prototype.compileBind = function (node, attr) {\\n    let name = attr.name.split(':')[1],\\n        value = attr.value\\n    new _sub__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"](this.vm, value, val => {\\n        console.log(val)\\n        node[name] = this.getAttrValue(value)\\n    })\\n    node[name] = this.getAttrValue(value)\\n}\\n\\nCompile.prototype.getAttrValue = function (attr) {\\n    if (attr.indexOf('.') < 0) return this.vm[attr]\\n    return attr.split('.').reduce((obj, attr, index, arr) => {\\n        if (index >= arr.length - 1) {\\n            if (typeof obj !== 'object') {\\n                return this.vm[obj][attr]\\n            }\\n            return obj[attr]\\n        }\\n        if (typeof obj !== 'object') {\\n            return this.vm[obj][attr]\\n        }\\n        return obj[attr]\\n    })\\n}\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compile);\\n\\n//# sourceURL=webpack://fuckill/./src/compile.js?\");\n\n/***/ }),\n\n/***/ \"./src/fuckill.esmodule.js\":\n/*!*********************************!*\\\n  !*** ./src/fuckill.esmodule.js ***!\n  \\*********************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ \\\"./src/sub.js\\\");\\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \\\"./src/observer.js\\\");\\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile */ \\\"./src/compile.js\\\");\\n\\n\\n\\n\\n\\nfunction Fuckill(opts) {\\n    if (!opts.el) return console.warn('请填写参数: el')\\n    opts.beforeCreate && opts.beforeCreate.call(this) // beforeCreate 钩子\\n    this.el = opts.el\\n    this.created = opts.created.bind(this) // created 钩子\\n    this.data = opts.data || {} // 数据\\n    this.methods = opts.methods // 实例方法\\n    this.subQueue = new _sub__WEBPACK_IMPORTED_MODULE_0__.SubQueue() //订阅器队列\\n    this.init()\\n    opts.mounted && opts.mounted.call(this) // mounted 钩子\\n}\\n\\nFuckill.prototype.init = function () {\\n    Object.keys(this.data).forEach(key => {\\n        this.proxyKeys(key)\\n    })\\n    new _observer__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"](this.data, this) // 数据绑定\\n    this.created && this.created() // created 钩子\\n    new _compile__WEBPACK_IMPORTED_MODULE_2__[\\\"default\\\"](this) // 节点解析\\n}\\n\\nFuckill.prototype.proxyKeys = function (attr) {\\n    Object.defineProperty(this, attr, {\\n        enumerable: true,\\n        configurable: true,\\n        get() {\\n            return this.data[attr]\\n        },\\n        set(newVal) {\\n            if (this.data[attr] === newVal) return\\n            this.data[attr] = newVal\\n        }\\n    })\\n}\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fuckill);\\n\\n//# sourceURL=webpack://fuckill/./src/fuckill.esmodule.js?\");\n\n/***/ }),\n\n/***/ \"./src/observer.js\":\n/*!*************************!*\\\n  !*** ./src/observer.js ***!\n  \\*************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\nfunction Observer(data, vm) {\\n    this.data = data\\n    this.vm = vm\\n    this.init()\\n}\\n\\nObserver.prototype.init = function () {\\n    this.initData(this.data)\\n}\\n\\nObserver.prototype.initData = function (data) {\\n    if (!data || typeof data !== 'object') return\\n    Object.keys(data).forEach(key => {\\n        this.defineProperty(data, key, data[key])\\n    })\\n}\\n\\nObserver.prototype.defineProperty = function (parent, attr, val) {\\n    this.initData(val)\\n    let _this = this\\n    Object.defineProperty(parent, attr, {\\n        enumerable: true,\\n        configurable: true,\\n        get() {\\n            if (_this.vm.subQueue.target) {\\n                if (_this.vm.subQueue.subs.some(sub => sub === _this.vm.subQueue.target)) return val\\n                _this.vm.subQueue.addSub(_this.vm.subQueue.target)\\n            }\\n            return val\\n        },\\n        set(newVal) {\\n            if (val === newVal) return\\n            val = newVal\\n            _this.vm.subQueue.notifyAllSubs()\\n        }\\n    })\\n}\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observer);\\n\\n//# sourceURL=webpack://fuckill/./src/observer.js?\");\n\n/***/ }),\n\n/***/ \"./src/sub.js\":\n/*!********************!*\\\n  !*** ./src/sub.js ***!\n  \\********************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"SubQueue\\\": () => (/* binding */ SubQueue),\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\nfunction Suber(vm, attr, cb) {\\n    this.vm = vm\\n    this.attr = attr\\n    this.cb = cb\\n    this.value = this.get()\\n}\\n\\nSuber.prototype.get = function () {\\n    this.vm.subQueue.target = this // 添加当前订阅者\\n    let value = this.getAttrVal(this.attr) // 通过获取该属性值来把当前订阅者放入队列\\n    this.vm.subQueue.target = null // 清除缓存\\n    return value\\n}\\n\\nSuber.prototype.update = function () {\\n    let value = this.getAttrVal(this.attr)\\n    if (value !== this.value) {\\n        this.cb && this.cb(value)\\n        this.value = value\\n    }\\n}\\n\\nSuber.prototype.getAttrVal = function (attr) {\\n    let vm = this.vm\\n    if (attr.indexOf('.') >= 0) {\\n        let arr = attr.split('.')\\n        return arr.reduce((obj, attr) => {\\n            if (typeof obj !== 'object') {\\n                return this.vm[obj][attr]\\n            }\\n            return obj[attr]\\n        })\\n    } else {\\n        return this.vm[this.attr]\\n    }\\n}\\n\\nfunction SubQueue() {\\n    this.subs = []\\n    this.target = null\\n}\\n\\nSubQueue.prototype.addSub = function (sub) {\\n    this.subs.push(sub)\\n}\\n\\nSubQueue.prototype.notifyAllSubs = function () {\\n    this.subs.forEach(sub => {\\n        sub.update()\\n    })\\n}\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suber);\\n\\n\\n\\n\\n//# sourceURL=webpack://fuckill/./src/sub.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_13071__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_13071__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_13071__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_13071__.o(definition, key) && !__nested_webpack_require_13071__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_13071__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_13071__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \tvar __webpack_exports__ = __nested_webpack_require_13071__(\"./src/fuckill.esmodule.js\");\n/******/ \t__webpack_exports__ = __webpack_exports__[\"default\"];\n/******/ \t\n/******/ \treturn __webpack_exports__;\n/******/ })()\n;\n});\n\n//# sourceURL=webpack://fuckill/./lib/fuckill.esmodule.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./example/example-esm.js");
/******/ 	
/******/ })()
;