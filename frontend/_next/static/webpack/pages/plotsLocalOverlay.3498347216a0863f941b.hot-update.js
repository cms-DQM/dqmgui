webpackHotUpdate_N_E("pages/plotsLocalOverlay",{

/***/ "./plotsLocalOverlayPageComponents/options/reference.tsx":
/*!***************************************************************!*\
  !*** ./plotsLocalOverlayPageComponents/options/reference.tsx ***!
  \***************************************************************/
/*! exports provided: Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reference\", function() { return Reference; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _jsrootSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsrootSwitch */ \"./plotsLocalOverlayPageComponents/options/jsrootSwitch.tsx\");\n/* harmony import */ var _overlayPositionSelectionProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlayPositionSelectionProps */ \"./plotsLocalOverlayPageComponents/options/overlayPositionSelectionProps.tsx\");\n/* harmony import */ var _sizeSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sizeSelection */ \"./plotsLocalOverlayPageComponents/options/sizeSelection.tsx\");\n/* harmony import */ var _checkBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkBox */ \"./plotsLocalOverlayPageComponents/options/checkBox.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styledComponents */ \"./plotsLocalOverlayPageComponents/styledComponents.ts\");\n/* harmony import */ var _components_customization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/customization */ \"./components/customization/index.tsx\");\n/* harmony import */ var _routerChangers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routerChangers */ \"./plotsLocalOverlayPageComponents/routerChangers.ts\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clean-deep */ \"./node_modules/clean-deep/src/index.js\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(clean_deep__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/plotsLocalOverlayPageComponents/options/reference.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar warning = function warning() {\n  antd__WEBPACK_IMPORTED_MODULE_5__[\"message\"].warning('Plot is already customized');\n};\n\nvar Reference = function Reference(_ref) {\n  _s();\n\n  var _React$useState7;\n\n  var router = _ref.router,\n      parameters = _ref.parameters,\n      setParameters = _ref.setParameters;\n  var query = router.query;\n  var defaultSize = parameters.size;\n  var defaultOverlayPosition = query.overlayPosition ? query.overlayPosition : 'overlay';\n  var defaultJSROOTState = query.jsroot ? query.jsroot === 'true' ? true : false : false;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"](false),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      openCustomization = _React$useState2[0],\n      setOpenCustomization = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"]({}),\n      _React$useState4 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      customizationParams = _React$useState4[0],\n      setCustomizationParams = _React$useState4[1];\n\n  var isPlotCustomized = Object.keys(parameters.customizeProps ? parameters.customizeProps : {}).length > 0;\n  var checkBoxes = [{\n    label: 'Normalize',\n    value: query.normalize ? query.normalize === 'true' ? true : false : true\n  }, {\n    label: 'Stats',\n    value: query.stats ? query.stats === 'true' ? true : false : true\n  }, {\n    label: 'Error',\n    value: query.error ? query.error === 'true' ? true : false : false\n  }];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"]((_React$useState7 = {\n    size: defaultSize,\n    jsroot: defaultJSROOTState,\n    ref: defaultOverlayPosition\n  }, Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[0].label.toLocaleLowerCase(), checkBoxes[0].value), Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[1].label.toLocaleLowerCase(), checkBoxes[1].value), Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[2].label.toLocaleLowerCase(), checkBoxes[2].value), _React$useState7)),\n      _React$useState6 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      reference = _React$useState6[0],\n      setReference = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    var copy = _objectSpread({}, parameters); //@ts-ignore\n\n\n    copy.height = _components_constants__WEBPACK_IMPORTED_MODULE_10__[\"sizes\"][reference.size].size.h; //@ts-ignore\n\n    copy.width = _components_constants__WEBPACK_IMPORTED_MODULE_10__[\"sizes\"][reference.size].size.w;\n    copy.size = reference.size;\n\n    if (copy.overlaidSeparately) {\n      copy.overlaidSeparately.ref = reference.ref;\n    }\n\n    copy.jsroot = reference.jsroot;\n    copy.size = reference.size;\n    copy.stats = reference.stats;\n    copy.normalize = reference.normalize;\n    copy.error = reference.error;\n    copy.customizeProps = customizationParams;\n\n    var addedPropsToParameters = _objectSpread(_objectSpread({}, copy), {}, {\n      overlaidSeparately: _objectSpread({}, copy.overlaidSeparately)\n    }); //@ts-ignore\n\n\n    setParameters(addedPropsToParameters);\n  }, [reference.size, reference.jsroot, reference.ref, reference[checkBoxes[0].label.toLocaleLowerCase()], reference[checkBoxes[1].label.toLocaleLowerCase()], reference[checkBoxes[2].label.toLocaleLowerCase()], customizationParams, query.ref, query.normalize, query.stats, query.error, query.jsroot, query.size]);\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    var costumization = {\n      xtype: query.xtype,\n      xmin: query.xmin,\n      xmax: query.xmax,\n      ytype: query.ytype,\n      ymin: query.ymin,\n      ymax: query.ymax,\n      ztype: query.ztype,\n      zmin: query.zmin,\n      zmax: query.zmax,\n      drawopts: query.drawopts,\n      withref: query.withref\n    };\n    setCustomizationParams(clean_deep__WEBPACK_IMPORTED_MODULE_14___default()(costumization));\n\n    if (isPlotCustomized) {\n      (function () {\n        return warning();\n      });\n    }\n  }, []);\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 10\n    }\n  }, __jsx(_components_customization__WEBPACK_IMPORTED_MODULE_12__[\"Customization\"], {\n    plot_name: parameters.plot_name,\n    open: openCustomization,\n    customizationParams: customizationParams,\n    onCancel: function onCancel() {\n      return setOpenCustomization(false);\n    },\n    setCustomizationParams: /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {\n        return _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setCustomizationParams(params);\n                _context.next = 3;\n                return Object(_routerChangers__WEBPACK_IMPORTED_MODULE_13__[\"SetCustomizationParams\"])(router, params, parameters);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, __jsx(_sizeSelection__WEBPACK_IMPORTED_MODULE_8__[\"SizeSelection\"], {\n    setReference: setReference,\n    reference: reference,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, __jsx(_overlayPositionSelectionProps__WEBPACK_IMPORTED_MODULE_7__[\"OverlayPositionSelection\"], {\n    setReference: setReference,\n    reference: reference,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, __jsx(_jsrootSwitch__WEBPACK_IMPORTED_MODULE_6__[\"JSROOTSwitch\"], {\n    disabled: !!query.overlayPlots,\n    setReference: setReference,\n    reference: reference,\n    d: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__[\"Tooltip\"], {\n    title: isPlotCustomized ? 'This plot is customized!' : '',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"StyledButton\"], {\n    isPlotCustomized: isPlotCustomized.toString(),\n    onClick: function onClick() {\n      return setOpenCustomization(!openCustomization);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  }, \"Customize\")))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 5\n    }\n  }, checkBoxes.map(function (checkBox) {\n    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n      space: '2',\n      key: checkBox.label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 11\n      }\n    }, __jsx(_checkBox__WEBPACK_IMPORTED_MODULE_9__[\"CheckBox\"], {\n      option: checkBox,\n      setReference: setReference,\n      reference: reference,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 13\n      }\n    }));\n  })));\n};\n\n_s(Reference, \"F6EjJUTTn1F/2fC/Sy5jx0qn7hA=\");\n\n_c = Reference;\n\nvar _c;\n\n$RefreshReg$(_c, \"Reference\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxvdHNMb2NhbE92ZXJsYXlQYWdlQ29tcG9uZW50cy9vcHRpb25zL3JlZmVyZW5jZS50c3g/OTI4OSJdLCJuYW1lcyI6WyJ3YXJuaW5nIiwibWVzc2FnZSIsIlJlZmVyZW5jZSIsInJvdXRlciIsInBhcmFtZXRlcnMiLCJzZXRQYXJhbWV0ZXJzIiwicXVlcnkiLCJkZWZhdWx0U2l6ZSIsInNpemUiLCJkZWZhdWx0T3ZlcmxheVBvc2l0aW9uIiwib3ZlcmxheVBvc2l0aW9uIiwiZGVmYXVsdEpTUk9PVFN0YXRlIiwianNyb290IiwiUmVhY3QiLCJvcGVuQ3VzdG9taXphdGlvbiIsInNldE9wZW5DdXN0b21pemF0aW9uIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInNldEN1c3RvbWl6YXRpb25QYXJhbXMiLCJpc1Bsb3RDdXN0b21pemVkIiwiT2JqZWN0Iiwia2V5cyIsImN1c3RvbWl6ZVByb3BzIiwibGVuZ3RoIiwiY2hlY2tCb3hlcyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJzdGF0cyIsImVycm9yIiwicmVmIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZWZlcmVuY2UiLCJzZXRSZWZlcmVuY2UiLCJjb3B5IiwiaGVpZ2h0Iiwic2l6ZXMiLCJoIiwid2lkdGgiLCJ3Iiwib3ZlcmxhaWRTZXBhcmF0ZWx5IiwiYWRkZWRQcm9wc1RvUGFyYW1ldGVycyIsImNvc3R1bWl6YXRpb24iLCJ4dHlwZSIsInhtaW4iLCJ4bWF4IiwieXR5cGUiLCJ5bWluIiwieW1heCIsInp0eXBlIiwiem1pbiIsInptYXgiLCJkcmF3b3B0cyIsIndpdGhyZWYiLCJjbGVhbkRlZXAiLCJwbG90X25hbWUiLCJwYXJhbXMiLCJTZXRDdXN0b21pemF0aW9uUGFyYW1zIiwib3ZlcmxheVBsb3RzIiwidG9TdHJpbmciLCJtYXAiLCJjaGVja0JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVB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QUVFLGVBQVMsRUFBRUQsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEYTtBQUFBLEdBQWYsQ0FGSixDQXJDSyxDQUFQO0FBaURELENBdElNOztHQUFNN0IsUzs7S0FBQUEsUyIsImZpbGUiOiIuL3Bsb3RzTG9jYWxPdmVybGF5UGFnZUNvbXBvbmVudHMvb3B0aW9ucy9yZWZlcmVuY2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtZXNzYWdlLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgSlNST09UU3dpdGNoIH0gZnJvbSAnLi9qc3Jvb3RTd2l0Y2gnO1xyXG5pbXBvcnQgeyBPdmVybGF5UG9zaXRpb25TZWxlY3Rpb24gfSBmcm9tICcuL292ZXJsYXlQb3NpdGlvblNlbGVjdGlvblByb3BzJztcclxuaW1wb3J0IHsgU2l6ZVNlbGVjdGlvbiB9IGZyb20gJy4vc2l6ZVNlbGVjdGlvbic7XHJcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSAnLi9jaGVja0JveCdcclxuaW1wb3J0IHsgUGFyYW1ldGVyc0ZvckFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR3JpZCwgU3R5bGVkQnV0dG9uLCBXcmFwcGVyIH0gZnJvbSAnLi4vc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ3VzdG9taXphdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbic7XHJcbmltcG9ydCB7IEN1c3RvbWl6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBTZXRDdXN0b21pemF0aW9uUGFyYW1zIH0gZnJvbSAnLi4vcm91dGVyQ2hhbmdlcnMnO1xyXG5pbXBvcnQgY2xlYW5EZWVwIGZyb20gJ2NsZWFuLWRlZXAnO1xyXG5cclxuXHJcbmludGVyZmFjZSBSZWZlcmVuY2VQcm9wcyB7XHJcbiAgcm91dGVyOiBOZXh0Um91dGVyXHJcbiAgcGFyYW1ldGVyczogUGFyYW1ldGVyc0ZvckFwaTtcclxuICBzZXRQYXJhbWV0ZXJzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxQYXJhbWV0ZXJzRm9yQXBpIHwgdW5kZWZpbmVkPj5cclxufVxyXG5cclxuY29uc3Qgd2FybmluZyA9ICgpID0+IHtcclxuICBtZXNzYWdlLndhcm5pbmcoJ1Bsb3QgaXMgYWxyZWFkeSBjdXN0b21pemVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUmVmZXJlbmNlID0gKHsgcm91dGVyLCBwYXJhbWV0ZXJzLCBzZXRQYXJhbWV0ZXJzIH06IFJlZmVyZW5jZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyXHJcbiAgY29uc3QgZGVmYXVsdFNpemUgPSBwYXJhbWV0ZXJzLnNpemVcclxuICBjb25zdCBkZWZhdWx0T3ZlcmxheVBvc2l0aW9uID0gcXVlcnkub3ZlcmxheVBvc2l0aW9uID8gcXVlcnkub3ZlcmxheVBvc2l0aW9uIDogJ292ZXJsYXknXHJcbiAgY29uc3QgZGVmYXVsdEpTUk9PVFN0YXRlID0gcXVlcnkuanNyb290ID8gcXVlcnkuanNyb290ID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UgOiBmYWxzZVxyXG4gIGNvbnN0IFtvcGVuQ3VzdG9taXphdGlvbiwgc2V0T3BlbkN1c3RvbWl6YXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1c3RvbWl6YXRpb25QYXJhbXMsIHNldEN1c3RvbWl6YXRpb25QYXJhbXNdID0gUmVhY3QudXNlU3RhdGU8YW55Pih7fSlcclxuICBjb25zdCBpc1Bsb3RDdXN0b21pemVkID0gT2JqZWN0LmtleXMocGFyYW1ldGVycy5jdXN0b21pemVQcm9wcyA/IHBhcmFtZXRlcnMuY3VzdG9taXplUHJvcHMgOiB7fSkubGVuZ3RoID4gMFxyXG5cclxuICBjb25zdCBjaGVja0JveGVzID0gW3tcclxuICAgIGxhYmVsOiAnTm9ybWFsaXplJyxcclxuICAgIHZhbHVlOiBxdWVyeS5ub3JtYWxpemUgPyBxdWVyeS5ub3JtYWxpemUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnU3RhdHMnLFxyXG4gICAgdmFsdWU6IHF1ZXJ5LnN0YXRzID8gcXVlcnkuc3RhdHMgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRXJyb3InLFxyXG4gICAgdmFsdWU6IHF1ZXJ5LmVycm9yID8gcXVlcnkuZXJyb3IgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IGZhbHNlXHJcbiAgfV1cclxuXHJcbiAgY29uc3QgW3JlZmVyZW5jZSwgc2V0UmVmZXJlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHNpemU6IGRlZmF1bHRTaXplLFxyXG4gICAganNyb290OiBkZWZhdWx0SlNST09UU3RhdGUsXHJcbiAgICByZWY6IGRlZmF1bHRPdmVybGF5UG9zaXRpb24sXHJcbiAgICBbY2hlY2tCb3hlc1swXS5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpXTogY2hlY2tCb3hlc1swXS52YWx1ZSxcclxuICAgIFtjaGVja0JveGVzWzFdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldOiBjaGVja0JveGVzWzFdLnZhbHVlLFxyXG4gICAgW2NoZWNrQm94ZXNbMl0ubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKV06IGNoZWNrQm94ZXNbMl0udmFsdWUsXHJcbiAgfSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvcHkgPSB7IC4uLnBhcmFtZXRlcnMgfVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBjb3B5LmhlaWdodCA9IHNpemVzW3JlZmVyZW5jZS5zaXplXS5zaXplLmhcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29weS53aWR0aCA9IHNpemVzW3JlZmVyZW5jZS5zaXplXS5zaXplLndcclxuICAgIGNvcHkuc2l6ZSA9IHJlZmVyZW5jZS5zaXplXHJcbiAgICBpZiAoY29weS5vdmVybGFpZFNlcGFyYXRlbHkpIHtcclxuICAgICAgY29weS5vdmVybGFpZFNlcGFyYXRlbHkucmVmID0gcmVmZXJlbmNlLnJlZiBhcyBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvcHkuanNyb290ID0gcmVmZXJlbmNlLmpzcm9vdFxyXG4gICAgY29weS5zaXplID0gcmVmZXJlbmNlLnNpemVcclxuICAgIGNvcHkuc3RhdHMgPSByZWZlcmVuY2Uuc3RhdHMgYXMgYm9vbGVhblxyXG4gICAgY29weS5ub3JtYWxpemUgPSByZWZlcmVuY2Uubm9ybWFsaXplIGFzIGJvb2xlYW5cclxuICAgIGNvcHkuZXJyb3IgPSByZWZlcmVuY2UuZXJyb3IgYXMgYm9vbGVhblxyXG4gICAgY29weS5jdXN0b21pemVQcm9wcyA9IGN1c3RvbWl6YXRpb25QYXJhbXNcclxuICAgIGNvbnN0IGFkZGVkUHJvcHNUb1BhcmFtZXRlcnMgPSB7IC4uLmNvcHksIG92ZXJsYWlkU2VwYXJhdGVseTogeyAuLi5jb3B5Lm92ZXJsYWlkU2VwYXJhdGVseSB9IH1cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgc2V0UGFyYW1ldGVycyhhZGRlZFByb3BzVG9QYXJhbWV0ZXJzKVxyXG5cclxuICB9LCBbcmVmZXJlbmNlLnNpemUsXHJcbiAgcmVmZXJlbmNlLmpzcm9vdCxcclxuICByZWZlcmVuY2UucmVmLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzBdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzFdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzJdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIGN1c3RvbWl6YXRpb25QYXJhbXMsXHJcbiAgcXVlcnkucmVmLFxyXG4gIHF1ZXJ5Lm5vcm1hbGl6ZSxcclxuICBxdWVyeS5zdGF0cyxcclxuICBxdWVyeS5lcnJvcixcclxuICBxdWVyeS5qc3Jvb3QsXHJcbiAgcXVlcnkuc2l6ZV0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgY29zdHVtaXphdGlvbiA9IHtcclxuICAgICAgeHR5cGU6IHF1ZXJ5Lnh0eXBlIGFzIHN0cmluZyxcclxuICAgICAgeG1pbjogcXVlcnkueG1pbiBhcyBzdHJpbmcsXHJcbiAgICAgIHhtYXg6IHF1ZXJ5LnhtYXggYXMgc3RyaW5nLFxyXG4gICAgICB5dHlwZTogcXVlcnkueXR5cGUgYXMgc3RyaW5nLFxyXG4gICAgICB5bWluOiBxdWVyeS55bWluIGFzIHN0cmluZyxcclxuICAgICAgeW1heDogcXVlcnkueW1heCBhcyBzdHJpbmcsXHJcbiAgICAgIHp0eXBlOiBxdWVyeS56dHlwZSBhcyBzdHJpbmcsXHJcbiAgICAgIHptaW46IHF1ZXJ5LnptaW4gYXMgc3RyaW5nLFxyXG4gICAgICB6bWF4OiBxdWVyeS56bWF4IGFzIHN0cmluZyxcclxuICAgICAgZHJhd29wdHM6IHF1ZXJ5LmRyYXdvcHRzIGFzIHN0cmluZyxcclxuICAgICAgd2l0aHJlZjogcXVlcnkud2l0aHJlZiBhcyBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21pemF0aW9uUGFyYW1zKGNsZWFuRGVlcChjb3N0dW1pemF0aW9uKSlcclxuICAgIGlmKGlzUGxvdEN1c3RvbWl6ZWQpe1xyXG4gICAgICAoKSA9Pndhcm5pbmcoKVxyXG4gICAgfVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiA8V3JhcHBlciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgIDxDdXN0b21pemF0aW9uXHJcbiAgICAgIHBsb3RfbmFtZT17cGFyYW1ldGVycy5wbG90X25hbWV9XHJcbiAgICAgIG9wZW49e29wZW5DdXN0b21pemF0aW9ufVxyXG4gICAgICBjdXN0b21pemF0aW9uUGFyYW1zPXtjdXN0b21pemF0aW9uUGFyYW1zfVxyXG4gICAgICBvbkNhbmNlbD17KCkgPT4gc2V0T3BlbkN1c3RvbWl6YXRpb24oZmFsc2UpfVxyXG4gICAgICBzZXRDdXN0b21pemF0aW9uUGFyYW1zPXthc3luYyAocGFyYW1zOiBDdXN0b21pemVQcm9wcykgPT4ge1xyXG4gICAgICAgIHNldEN1c3RvbWl6YXRpb25QYXJhbXMocGFyYW1zKVxyXG4gICAgICAgIGF3YWl0IFNldEN1c3RvbWl6YXRpb25QYXJhbXMocm91dGVyLCBwYXJhbXMsIHBhcmFtZXRlcnMpXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLz5cclxuICAgIDxXcmFwcGVyIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICA8R3JpZCBzcGFjZT17JzInfT5cclxuICAgICAgICA8U2l6ZVNlbGVjdGlvblxyXG4gICAgICAgICAgc2V0UmVmZXJlbmNlPXtzZXRSZWZlcmVuY2V9XHJcbiAgICAgICAgICByZWZlcmVuY2U9e3JlZmVyZW5jZX1cclxuICAgICAgICAvPjwvR3JpZD5cclxuICAgICAgPEdyaWQgc3BhY2U9eycyJ30+XHJcbiAgICAgICAgPE92ZXJsYXlQb3NpdGlvblNlbGVjdGlvblxyXG4gICAgICAgICAgc2V0UmVmZXJlbmNlPXtzZXRSZWZlcmVuY2V9XHJcbiAgICAgICAgICByZWZlcmVuY2U9e3JlZmVyZW5jZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIHNwYWNlPXsnMid9PlxyXG4gICAgICAgIDxKU1JPT1RTd2l0Y2hcclxuICAgICAgICAgIGRpc2FibGVkPXshIXF1ZXJ5Lm92ZXJsYXlQbG90c31cclxuICAgICAgICAgIHNldFJlZmVyZW5jZT17c2V0UmVmZXJlbmNlfVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXtyZWZlcmVuY2V9ZFxyXG4gICAgICAgIC8+PC9HcmlkPlxyXG4gICAgICA8R3JpZCBzcGFjZT1cIjJcIj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17aXNQbG90Q3VzdG9taXplZCA/ICdUaGlzIHBsb3QgaXMgY3VzdG9taXplZCEnIDogJyd9PlxyXG4gICAgICAgICAgPFN0eWxlZEJ1dHRvbiBpc1Bsb3RDdXN0b21pemVkPXtpc1Bsb3RDdXN0b21pemVkLnRvU3RyaW5nKCl9IG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICBzZXRPcGVuQ3VzdG9taXphdGlvbighb3BlbkN1c3RvbWl6YXRpb24pfT5DdXN0b21pemU8L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICAgIDxXcmFwcGVyIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICB7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5tYXAoKGNoZWNrQm94KSA9PlxyXG4gICAgICAgICAgPEdyaWQgc3BhY2U9eycyJ30ga2V5PXtjaGVja0JveC5sYWJlbH0+XHJcbiAgICAgICAgICAgIDxDaGVja0JveCBvcHRpb249e2NoZWNrQm94fVxyXG4gICAgICAgICAgICAgIHNldFJlZmVyZW5jZT17c2V0UmVmZXJlbmNlfVxyXG4gICAgICAgICAgICAgIHJlZmVyZW5jZT17cmVmZXJlbmNlfVxyXG4gICAgICAgICAgICAvPjwvR3JpZD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvV3JhcHBlcj5cclxuICA8L1dyYXBwZXI+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plotsLocalOverlayPageComponents/options/reference.tsx\n");

/***/ })

})