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

/***/ "./src/lib/js/01.ListProvider.js":
/*!***************************************!*\
  !*** ./src/lib/js/01.ListProvider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListProvider)\n/* harmony export */ });\n/* harmony import */ var _01_lib_01_a_useDataHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01.lib/01-a.useDataHook */ \"./src/lib/js/01.lib/01-a.useDataHook.js\");\n/* harmony import */ var _01_lib_01_b_add_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01.lib/01-b.add_data */ \"./src/lib/js/01.lib/01-b.add_data.js\");\n/* harmony import */ var _01_lib_01_c_edit_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./01.lib/01-c.edit_data */ \"./src/lib/js/01.lib/01-c.edit_data.js\");\n/* harmony import */ var _02_1_Myform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./02-1.Myform */ \"./src/lib/js/02-1.Myform.js\");\n/* harmony import */ var _02_3_Datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./02-3.Datatable */ \"./src/lib/js/02-3.Datatable.js\");\n// function modules\n\n\n // web components\n\n\n\nfunction ListProvider() {\n  (0,_01_lib_01_a_useDataHook__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // 新增\n\n  (0,_01_lib_01_b_add_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // 修改\n\n  (0,_01_lib_01_c_edit_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // 刪除\n\n  var delete_data = function delete_data(idVal) {\n    setData(Data.filter(function (one) {\n      return one.id !== idVal;\n    }));\n  };\n\n  return /*#__PURE__*/React.createElement(DataContext.Provider, {\n    value: {\n      Data: Data,\n      add_data: _01_lib_01_b_add_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      edit_data: _01_lib_01_c_edit_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      delete_data: delete_data\n    }\n  }, /*#__PURE__*/React.createElement(_02_1_Myform__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/React.createElement(_02_3_Datatable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/01.ListProvider.js?");

/***/ }),

/***/ "./src/lib/js/01.lib/01-a.useDataHook.js":
/*!***********************************************!*\
  !*** ./src/lib/js/01.lib/01-a.useDataHook.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useDataHook)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar DataContext = React.createContext();\n\nvar useData = function useData() {\n  return React.useContext(DataContext);\n};\n\nfunction useDataHook() {\n  var _React$useState = React.useState(srcData),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      Data = _React$useState2[0],\n      setData = _React$useState2[1]; // useLayoutEffect - 【每次相依陣列的狀態變更, 渲染\"之前\"會執行的邏輯區塊】\n\n\n  React.useLayoutEffect(function () {\n    console.log(\"相依狀態變更, 畫面重新渲染前執行【包含第一次渲染】\");\n  }, [Data]); // useEffect - 【每次相依陣列的狀態變更, 渲染\"之後\"會執行的邏輯區塊】\n\n  React.useEffect(function () {\n    console.log(\"相依狀態變更, 畫面重新渲染後執行, 變更後的Data ↓【包含第一次渲染】\");\n    console.log(Data);\n  }, [Data]);\n}\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/01.lib/01-a.useDataHook.js?");

/***/ }),

/***/ "./src/lib/js/01.lib/01-b.add_data.js":
/*!********************************************!*\
  !*** ./src/lib/js/01.lib/01-b.add_data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add_data)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction add_data(idVal, productVal, priceVal) {\n  setData([].concat(_toConsumableArray(Data), [{\n    id: idVal,\n    product: productVal,\n    price: priceVal\n  }]));\n}\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/01.lib/01-b.add_data.js?");

/***/ }),

/***/ "./src/lib/js/01.lib/01-c.edit_data.js":
/*!*********************************************!*\
  !*** ./src/lib/js/01.lib/01-c.edit_data.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit_data = function edit_data(idVal, productVal, priceVal) {\n  var inputId = document.querySelector(\".myform .text-id\");\n\n  if (Data.map(function (one) {\n    return one.id;\n  }).includes(inputId.value)) {\n    setData(Data.map(function (one, i) {\n      return one.id === idVal ? {\n        id: idVal,\n        product: productVal,\n        price: priceVal\n      } : one;\n    }));\n    alert(idVal + \"，修改資料完成\");\n  } else {\n    alert(inputId.value + \", 輸入此筆資料不存在, 請再檢查\");\n  }\n});\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/01.lib/01-c.edit_data.js?");

/***/ }),

/***/ "./src/lib/js/02-1.Myform.js":
/*!***********************************!*\
  !*** ./src/lib/js/02-1.Myform.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Myform)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction Myform() {\n  var _useData = useData(),\n      Data = _useData.Data,\n      add_data = _useData.add_data,\n      edit_data = _useData.edit_data; // console.log(add_data);\n\n\n  return /*#__PURE__*/React.createElement(\"form\", {\n    className: \"myform\",\n    onSubmit: function onSubmit(e) {\n      // 新增的按鈕\n      e.preventDefault();\n      var inputId = document.querySelector(\".myform .text-id\");\n      var inputProduct = document.querySelectorAll(\".myform .product input\");\n      var inputPrice = document.querySelector(\".myform .price\");\n\n      if (Data.map(function (one) {\n        return one.id;\n      }).includes(inputId.value)) {\n        alert(inputId.value + \", 此筆資料已存在、再檢查\\n【是否要修改資料？請使用修改資料】\");\n      } else {\n        var idVal = inputId.value;\n\n        var productVal = _toConsumableArray(inputProduct).filter(function (one) {\n          return one.checked;\n        })[0].value;\n\n        var priceVal = inputPrice.value; // console.log(\"id:\", idVal);\n        // console.log(\"productVal:\", productVal);\n        // console.log(\"priceVal:\", priceVal);\n\n        inputId.value = \"\";\n\n        for (var i = 0; i < inputProduct.length; i++) {\n          inputProduct[i].checked = false;\n        }\n\n        ;\n        inputPrice.value = \"\";\n        add_data(idVal, productVal, priceVal);\n      }\n\n      ; // 把全部資料重新渲染回來\n\n      var trList = document.querySelectorAll(\".mytable tbody tr\");\n\n      _toConsumableArray(trList).map(function (one) {\n        return one.style.display = \"\";\n      });\n    }\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"id\"\n  }, \"id: \"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    name: \"id\",\n    className: \"text-id\",\n    placeholder: \"\\u8F38\\u5165\\u4EE5\\u904E\\u6FFE\\u8CC7\\u6599...\",\n    required: true,\n    onChange: function onChange(e) {\n      e.preventDefault();\n      var inputId = document.querySelector(\".myform .text-id\");\n      var idVal = inputId.value;\n      var trList = document.querySelectorAll(\".mytable tbody tr\"); // console.log(trList[0].innerHTML.includes(idVal));\n\n      _toConsumableArray(trList).map(function (one) {\n        if (one.innerHTML.includes(idVal)) {\n          one.style.display = \"\";\n        } else {\n          one.style.display = \"none\";\n        }\n      });\n    }\n  }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"product\",\n    className: \"product\"\n  }, \"product:\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"radio\",\n    name: \"product\",\n    value: \"i-phone13\",\n    required: true\n  }), \"i-phone13\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"radio\",\n    name: \"product\",\n    value: \"pixel6\",\n    required: true\n  }), \"pixel6\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"radio\",\n    name: \"product\",\n    value: \"note-20\",\n    required: true\n  }), \"note-20\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"price\"\n  }, \"price: \"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    name: \"price\",\n    className: \"price\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"submit\",\n    className: \"submit-btn\",\n    value: \"\\u65B0\\u589E\\u8CC7\\u6599\"\n  }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"button\",\n    className: \"edit-btn\",\n    value: \"\\u4FEE\\u6539\\u8CC7\\u6599\",\n    onClick: function onClick(e) {\n      e.preventDefault();\n      var inputId = document.querySelector(\".myform .text-id\");\n      var inputProduct = document.querySelectorAll(\".myform .product input\");\n      var inputPrice = document.querySelector(\".myform .price\");\n      var idVal = inputId.value;\n\n      var productVal = _toConsumableArray(inputProduct).filter(function (one) {\n        return one.checked;\n      })[0].value;\n\n      var priceVal = inputPrice.value;\n      edit_data(idVal, productVal, priceVal); // 把全部資料重新渲染回來\n\n      var trList = document.querySelectorAll(\".mytable tbody tr\");\n\n      _toConsumableArray(trList).map(function (one) {\n        return one.style.display = \"\";\n      });\n    }\n  }));\n}\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/02-1.Myform.js?");

/***/ }),

/***/ "./src/lib/js/02-3.Datatable.js":
/*!**************************************!*\
  !*** ./src/lib/js/02-3.Datatable.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataTable)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction DataTable() {\n  var _useData = useData(),\n      Data = _useData.Data,\n      delete_data = _useData.delete_data;\n\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"mytable\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"id\"), /*#__PURE__*/React.createElement(\"th\", null, \"product\"), /*#__PURE__*/React.createElement(\"th\", null, \"price\"), /*#__PURE__*/React.createElement(\"th\", null, \"editor\"))), /*#__PURE__*/React.createElement(\"tbody\", null, _toConsumableArray(Data).map(function (one, i) {\n    return /*#__PURE__*/React.createElement(\"tr\", {\n      key: i\n    }, /*#__PURE__*/React.createElement(\"td\", null, one.id), /*#__PURE__*/React.createElement(\"td\", null, one.product), /*#__PURE__*/React.createElement(\"td\", null, one.price), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"button\", {\n      onClick: function onClick(e) {\n        e.preventDefault();\n        delete_data(one.id);\n      }\n    }, \"\\u522A\\u9664\\u8CC7\\u6599\")));\n  })));\n}\n\n//# sourceURL=webpack://react-form-table/./src/lib/js/02-3.Datatable.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_js_01_ListProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/js/01.ListProvider */ \"./src/lib/js/01.ListProvider.js\");\n\nwindow.addEventListener(\"load\", function () {\n  var root = ReactDOM.createRoot(document.querySelector(\".root\"));\n  root.render( /*#__PURE__*/React.createElement(_lib_js_01_ListProvider__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n});\n\n//# sourceURL=webpack://react-form-table/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;