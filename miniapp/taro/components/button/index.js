require("../../runtime");
require("../../taro");
require("../../vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/button/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=components/button/index!./src/components/button/index.jsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=components/button/index!./src/components/button/index.jsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var handleClick = function handleClick() {
    // props.$scope.triggerEvent('onClick', {pops: props.title + props.text + Math.random() * 100 })
    props.onTap({
      pops: props.title + props.text + Math.random() * 100
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "b"], {
    className: "dyson-button",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "b"], {
      className: "label",
      children: ["Label: ", props.title]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Button */ "a"], {
      className: "bg",
      onClick: handleClick,
      children: ["PickerItem: ", props.text]
    })]
  });
});

/***/ }),

/***/ "./src/components/button/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/button/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");







var component = __webpack_require__(/*! !../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=components/button/index!./index.jsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=components/button/index!./src/components/button/index.jsx").default
var config = {"styleIsolation":"isolated","virtualHost":true,"isNewBlended":false};
var inst = Component(Object(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_1__[/* createNativeComponentConfig */ "a"])(component, react__WEBPACK_IMPORTED_MODULE_2__, react_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], config))

/* harmony default export */ __webpack_exports__["default"] = (component);


/***/ }),

/***/ "./src/components/button/index.scss":
/*!******************************************!*\
  !*** ./src/components/button/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/button/index.jsx","runtime","taro","vendors"]]]);;