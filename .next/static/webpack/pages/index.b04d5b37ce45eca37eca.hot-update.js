webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/mahmoudhassan/Desktop/course2021/nextjs/components/Prices.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Prices(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var bpi = props.bpi.bpi;\n  var list = '';\n\n  if (currency === \"USD\") {\n    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"list-group-item\",\n      children: [\"Bitcoin Rate For \", bpi.USD.description, \" : \", bpi.USD.rate, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"badge badge-primary\",\n        children: bpi.USD.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 69\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 16\n    }, this);\n  } else if (currency === \"EUR\") {\n    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"list-group-item\",\n      children: [\"Bitcoin Rate For \", bpi.EUR.description, \" : \", bpi.EUR.rate, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"badge badge-primary\",\n        children: bpi.EUR.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 69\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 16\n    }, this);\n  } else if (currency === \"GBP\") {\n    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"list-group-item\",\n      children: [\"Bitcoin Rate For \", bpi.GBP.description, \" : \", bpi.GBP.rate, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"badge badge-primary\",\n        children: bpi.GBP.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 69\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Check current Bitcoin Rate \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"form-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        \"for\": \"exampleSelect1\",\n        children: \"Select Currency\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        \"class\": \"form-control \",\n        id: \"exampleSelect1\",\n        onChange: function onChange(e) {\n          return setCurrency(e.target.value);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"USD\",\n          children: \"USD\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"EUR\",\n          children: \"EUR\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"GBP\",\n          children: \"GBP\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }, this), list]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Prices, \"IMt9glJKuY0gCtznVFnjeGsjS3E=\");\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/YmUyZCJdLCJuYW1lcyI6WyJQcmljZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImJwaSIsImxpc3QiLCJVU0QiLCJkZXNjcmlwdGlvbiIsInJhdGUiLCJjb2RlIiwiRVVSIiwiR0JQIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBQUEsTUFFWEMsR0FGVyxHQUVISixLQUFLLENBQUNJLEdBRkgsQ0FFWEEsR0FGVztBQUduQixNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFJSCxRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDcEJHLFFBQUksZ0JBQUc7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDZUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFdBRHZCLFNBQ3VDSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsSUFEL0Msb0JBQ3FEO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFBdUNKLEdBQUcsQ0FBQ0UsR0FBSixDQUFRRztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBR0gsR0FKRCxNQUtLLElBQUlQLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN6QkcsUUFBSSxnQkFBRztBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNlRCxHQUFHLENBQUNNLEdBQUosQ0FBUUgsV0FEdkIsU0FDdUNILEdBQUcsQ0FBQ00sR0FBSixDQUFRRixJQUQvQyxvQkFDcUQ7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLGtCQUF1Q0osR0FBRyxDQUFDTSxHQUFKLENBQVFEO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFHSCxHQUpJLE1BSUUsSUFBSVAsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzNCRyxRQUFJLGdCQUFHO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsc0NBQ2VELEdBQUcsQ0FBQ08sR0FBSixDQUFRSixXQUR2QixTQUN1Q0gsR0FBRyxDQUFDTyxHQUFKLENBQVFILElBRC9DLG9CQUNxRDtBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUEsa0JBQXVDSixHQUFHLENBQUNPLEdBQUosQ0FBUUY7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUdIOztBQUdELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVRO0FBQUssZUFBTSxZQUFYO0FBQUEsOEJBQ0k7QUFBTyxlQUFJLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGlCQUFNLGVBQWQ7QUFBOEIsVUFBRSxFQUFDLGdCQUFqQztBQUFrRCxnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQVFULFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxTQUE1RDtBQUFBLGdDQUNJO0FBQVEsZUFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGVBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBUSxlQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixFQVVLVCxJQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQXJDUU4sTTs7S0FBQUEsTTtBQXNDTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUHJpY2VzKHByb3BzKSB7XG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSgnVVNEJylcbiAgICBjb25zdCB7IGJwaSB9ID0gcHJvcHMuYnBpXG4gICAgbGV0IGxpc3QgPSAnJztcbiAgICBpZiAoY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcbiAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG4gICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHticGkuVVNELmRlc2NyaXB0aW9ufSA6IHticGkuVVNELnJhdGV9IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57YnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICB9XG4gICAgZWxzZSBpZiAoY3VycmVuY3kgPT09IFwiRVVSXCIpIHtcbiAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG4gICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHticGkuRVVSLmRlc2NyaXB0aW9ufSA6IHticGkuRVVSLnJhdGV9IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57YnBpLkVVUi5jb2RlfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICB9IGVsc2UgaWYgKGN1cnJlbmN5ID09PSBcIkdCUFwiKSB7XG4gICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7YnBpLkdCUC5kZXNjcmlwdGlvbn0gOiB7YnBpLkdCUC5yYXRlfSA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5HQlAuY29kZX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+Q2hlY2sgY3VycmVudCBCaXRjb2luIFJhdGUgPC9wPiAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZVNlbGVjdDFcIj5TZWxlY3QgQ3VycmVuY3k8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIFwiIGlkPVwiZXhhbXBsZVNlbGVjdDFcIiBvbkNoYW5nZT17KGUpID0+IChzZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSkpfSAgPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj5HQlA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgIHsvKiB7cHJvcHMuYnBpLnRpbWUudXBkYXRlZH0gKi99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5leHBvcnQgZGVmYXVsdCBQcmljZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})