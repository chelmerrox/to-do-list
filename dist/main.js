"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  -webkit-box-sizing: border-box;  /* for Google Chrome and Apple Safari */\\r\\n  -moz-box-sizing: border-box;    /* for Mozilla Firefox */\\r\\n  -ms-box-sizing: border-box;   /* for Microsoft's Internet Explorer */\\r\\n  box-sizing: border-box;       /* box-sizing is a property allows us to change exactly how the box-model works  */\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Quicksand', Helvetica, sans-serif;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n\\r\\n  /*  position: relative; */\\r\\n  min-height: 100vh;  /* vh (viewport height as unit of measure)) */\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin: 5% 20%;\\r\\n  width: 60%;\\r\\n  padding: 10px 5px;\\r\\n  border: 1px solid #d3d3d3;\\r\\n  border-radius: 1px;\\r\\n  box-shadow: 1px 1px 10px #d3d3d3;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid #b9b9b9;\\r\\n}\\r\\n\\r\\n.header p {\\r\\n  font-size: medium;\\r\\n  font-weight: bold;\\r\\n  color: rgb(61, 61, 61);\\r\\n}\\r\\n\\r\\n.header .loop-icon {\\r\\n  color: #b2b2b2;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n  width: 100%;\\r\\n  padding: 2% 0;\\r\\n  border-bottom: 1px solid #b9b9b9;\\r\\n}\\r\\n\\r\\n.add-task input {\\r\\n  border: none;\\r\\n  width: 80%;\\r\\n  padding-top: 10px;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.add-task input::placeholder {\\r\\n  font-size: medium;\\r\\n  font-style: italic;\\r\\n  color: #b2b2b2;\\r\\n}\\r\\n\\r\\n.add-task button {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.add-task .return-icon {\\r\\n  color: #b2b2b2;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  padding-left: 0;\\r\\n  padding-right: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 2% 0;\\r\\n  border-bottom: 1px solid #b9b9b9;\\r\\n}\\r\\n\\r\\nul li.active {\\r\\n  height: 100%;\\r\\n  padding-top: 15px;\\r\\n  padding-bottom: 15px;\\r\\n}\\r\\n\\r\\nul li input[type=\\\"text\\\"] {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nul li input[type=\\\"text\\\"]::placeholder {\\r\\n  color: black;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\nul li .task-to-edit.active {\\r\\n  border: 1px solid black;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nul li .vertical-line-btn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\nul li .vertical-line-icon {\\r\\n  color: #b2b2b2;\\r\\n}\\r\\n\\r\\nul li .remove-icon {\\r\\n  color: #b2b2b2;\\r\\n}\\r\\n\\r\\n.clear-list-btn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  font-size: medium;\\r\\n  font-style: italic;\\r\\n  color: #b2b2b2;\\r\\n  padding: 2% 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n\n\n\n\nconst formSubmission = document.getElementById('form');\n\nconst taskOne = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // instance for a task\n\nformSubmission.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const addTaskInput = document.querySelector('.add-task-input');\n\n  if (addTaskInput.value !== '') {\n    const taskObject = {\n      name: addTaskInput.value,\n      isDone: false,\n    };\n\n    taskOne.addTask(taskObject);\n  }\n\n  formSubmission.reset();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nconst ul = document.querySelector('ul');\nlet i = 0;\n\nclass Task {\n  constructor(tasks = []) {\n    this.tasks = tasks;\n    this.getFromLocal();\n  }\n\n  changeElementAndIcon(taskObject, verticalLineBtn, verticalLineIcon, li) {\n    li.classList.add('active');\n\n    const taskContainer = document.querySelector(`.task-${taskObject.i}`);\n\n    const p = document.querySelector(`.task-to-edit-${taskObject.i}`);\n\n    taskContainer.removeChild(p);\n\n    const taskToEditInput = document.createElement('input');\n    taskToEditInput.setAttribute('type', 'text');\n    taskToEditInput.setAttribute('name', `task-to-edit-${taskObject.i}`);\n    taskToEditInput.setAttribute('value', `${taskObject.name}`);\n    taskToEditInput.classList.add(`task-to-edit-${taskObject.i}`);\n    taskToEditInput.classList.add('task-to-edit');\n    taskToEditInput.classList.add('active');\n    taskToEditInput.setAttribute('autocomplete', 'off');\n\n    taskContainer.appendChild(taskToEditInput);\n\n    const removeIcon = document.createElement('i');\n    removeIcon.classList.add('material-icons');\n    removeIcon.classList.add('remove-icon');\n    removeIcon.innerHTML = 'delete';\n\n    verticalLineBtn.removeChild(verticalLineIcon);\n    verticalLineBtn.appendChild(removeIcon);\n\n    taskToEditInput.addEventListener('change', (e) => {\n      e.preventDefault();\n\n      taskObject.name = e.target.value;\n\n      localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n    });\n\n    taskToEditInput.addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        taskContainer.removeChild(taskToEditInput);\n        this.editTask(taskObject, taskToEditInput.value);\n      }\n    });\n  }\n\n  displayEditedTask = (editedTaskObject, index) => {\n    const taskContainer2 = document.querySelector(`.task-${index + 1}`);\n\n    const p2 = document.createElement('p');\n    p2.classList.add(`.task-to-edit-${index + 1}`);\n    p2.innerText = `${editedTaskObject.name}`;\n\n    taskContainer2.appendChild(p2);\n\n    document.location.reload();\n  }\n\n  editTask(taskObject, taskToEditInputValue) {\n    this.tasks = JSON.parse(localStorage.getItem('tasksArray'));\n\n    const taskObjectIndex = taskObject.i;\n\n    this.tasks.forEach((task, k) => {\n      if (k === taskObjectIndex - 1) {\n        task.name = taskToEditInputValue;\n\n        localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n\n        this.displayEditedTask(task, k);\n      }\n    });\n  }\n\n  removeCheckedTask(checkedBoxesIndexes){\n    const lists = Array.from(document.querySelectorAll('.list'));\n\n    lists.forEach((list, a) => {\n      checkedBoxesIndexes.forEach((checkedBoxesIndex, b) => {\n        if (checkedBoxesIndex === a){\n          this.tasks.forEach((task, c) => {\n            if (c === checkedBoxesIndex){\n              const { isDone } = task;\n\n              this.tasks = this.tasks.filter((obj) => obj.isDone !== isDone);\n\n              this.tasks.forEach((task, j) => {\n                task.i = j + 1;\n              });\n            }\n          });\n          ul.removeChild(list);\n        }\n      });\n    });\n\n    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n    document.location.reload();\n  }\n\n  removeTask(taskObject, index) {\n    const list = document.getElementById(index + 1);\n\n    const { name, i } = taskObject;\n\n    this.tasks = this.tasks.filter((task) => task.name !== name && task.i !== i);\n\n    this.tasks.forEach((task, j) => {\n      task.i = j + 1;\n    });\n\n    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n    ul.removeChild(list);\n  }\n\n  displayTask(taskObject, index) {\n    const li = document.createElement('li');\n    li.classList.add('list');\n    li.id = index + 1;\n\n    li.innerHTML = `\n      <div class=\"task task-${taskObject.i}\">\n        <input type=\"checkbox\" class=\"task-${taskObject.i}\" id=\"task-${taskObject.i}\" name=\"task-${taskObject.i}\" value=\"\"/>\n        <p class=\"line-through-text task-to-edit-${taskObject.i}\">${taskObject.name}</p>\n      </div>\n    `;\n\n    const verticalLineBtn = document.createElement('button');\n    verticalLineBtn.classList.add('vertical-line-btn');\n    verticalLineBtn.id = `vertical-line-btn-${taskObject.i}`;\n\n    const verticalLineIcon = document.createElement('i');\n    verticalLineIcon.classList.add('vertical-line-icon');\n    verticalLineIcon.classList.add('material-icons');\n    verticalLineIcon.innerHTML = 'more_vert';\n\n    verticalLineBtn.appendChild(verticalLineIcon);\n    li.appendChild(verticalLineBtn);\n\n    // Click on the vertical line button once to show Remove icon & change <p> to <input>\n    verticalLineBtn.onclick = () => {\n      this.changeElementAndIcon(taskObject, verticalLineBtn, verticalLineIcon, li);\n\n      // Clicking on this again removes the task from the list\n      verticalLineBtn.onclick = () => {\n        this.removeTask(taskObject, index);\n      };\n    };\n\n    ul.appendChild(li);\n\n    const checkboxes = Array.from(document.querySelectorAll('input[type=\"checkbox\"]'));\n\n    const clearListBtn = document.querySelector('.clear-list-btn');\n\n    let checkedBoxesIndexes = [];\n\n    checkboxes.forEach((checkbox, j) => {\n      const lineThrough = document.querySelector(`.task-to-edit-${j + 1}`);\n      checkbox.addEventListener('change', (e) => {\n        if (checkbox.checked === true){\n          this.tasks.forEach((task, k) => {\n            if (k === j){\n              lineThrough.style.textDecoration = 'line-through';\n              task.isDone = true;\n              checkedBoxesIndexes.push(j);\n            }\n          });\n        } else {\n          this.tasks.forEach((task, m) => {\n            if (m === j){\n              lineThrough.style.textDecoration = 'none';\n              task.isDone = false;\n              checkedBoxesIndexes = checkedBoxesIndexes.filter(checkboxIndex => checkboxIndex !== j);\n            }\n          });\n        }\n\n        localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n      });\n    });\n\n    clearListBtn.onclick = () => {\n      checkedBoxesIndexes.sort(function(a,b) { return a-b; });\n      this.removeCheckedTask(checkedBoxesIndexes);\n    };\n  }\n\n  addTask(taskObject) {\n    i = (this.tasks.length === 0) ? 1 : this.tasks.length + 1; // index for taskObject\n\n    taskObject.i = i;\n\n    this.tasks.push(taskObject);\n\n    localStorage.setItem('tasksArray', JSON.stringify(this.tasks));\n\n    this.displayTask(taskObject, this.tasks.length - 1);\n  }\n\n  // check local storage before adding a task\n  // (upon first visit to page or reload of page in the same browser)\n  getFromLocal() {\n    if (localStorage.getItem('tasksArray')) {\n      this.tasks = JSON.parse(localStorage.getItem('tasksArray'));\n\n      this.tasks.forEach((taskObject, index) => {\n        this.displayTask(taskObject, index);\n      });\n    } else {\n      localStorage.setItem('tasksArray', '');\n      this.tasks = [];\n    }\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);