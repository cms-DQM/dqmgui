webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx":
/*!*****************************************************************!*\
  !*** ./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx ***!
  \*****************************************************************/
/*! exports provided: ZoomedPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomedPlot\", function() { return ZoomedPlot; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../containers/display/styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plot/singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n/* harmony import */ var _customisation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../customisation */ \"./components/customisation/index.tsx\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ \"./components/plots/zoomedPlots/menu.tsx\");\n/* harmony import */ var _containers_display_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../containers/display/portal */ \"./containers/display/portal/index.tsx\");\n/* harmony import */ var _plot_plotImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../plot/plotImages */ \"./components/plots/plot/plotImages/index.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils */ \"./components/utils.ts\");\n/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../api/utils */ \"./api/utils.ts\");\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ZoomedPlot = function ZoomedPlot(_ref) {\n  _s();\n\n  var _copy_of_params$width, _params_for_api$width;\n\n  var selected_plot = _ref.selected_plot,\n      params_for_api = _ref.params_for_api;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      customizationParams = _useState[0],\n      setCustomisationParams = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openCustomisation = _useState2[0],\n      toggleCustomisationMenu = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPortalWindowOpen = _useState3[0],\n      setIsPortalWindowOpen = _useState3[1];\n\n  params_for_api.customiseProps = customizationParams;\n  var plot_url = Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__[\"chooseApiForGettingPlotUrl\"])(params_for_api);\n\n  var copy_of_params = _objectSpread({}, params_for_api);\n\n  copy_of_params.height = window.innerHeight;\n  copy_of_params.width = Math.round(window.innerHeight * 1.33);\n  var zoomed_plot_url = Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__[\"chooseApiForGettingPlotUrl\"])(copy_of_params);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var query = router.query;\n  var url = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[\"getZoomedPlotsUrlForOverlayingPlotsWithDifferentNames\"])(query, selected_plot);\n  var zoomedPlotMenuOptions = [{\n    label: 'Open in a new tab',\n    value: 'open_in_a_new_tab',\n    action: function action() {\n      return setIsPortalWindowOpen(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"FullscreenOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    })\n  }, {\n    label: 'Customize',\n    value: 'customise',\n    action: function action() {\n      return toggleCustomisationMenu(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"SettingOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }\n    })\n  }, _config_config__WEBPACK_IMPORTED_MODULE_4__[\"functions_config\"].new_back_end.new_back_end && {\n    label: 'Overlay with another plot',\n    value: 'overlay',\n    url: url,\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"BlockOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }\n    })\n  }];\n  console.log(selected_plot);\n  return __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"StyledCol\"], {\n    space: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, __jsx(_containers_display_portal__WEBPACK_IMPORTED_MODULE_9__[\"Plot_portal\"], {\n    isPortalWindowOpen: isPortalWindowOpen,\n    setIsPortalWindowOpen: setIsPortalWindowOpen,\n    title: selected_plot.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"StyledPlotRow\"], {\n    minheight: copy_of_params.height,\n    width: (_copy_of_params$width = copy_of_params.width) === null || _copy_of_params$width === void 0 ? void 0 : _copy_of_params$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_6__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"ImageDiv\"], {\n    id: selected_plot.name,\n    width: copy_of_params.width,\n    height: copy_of_params.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(_plot_plotImages__WEBPACK_IMPORTED_MODULE_10__[\"PlotImage\"], {\n    params_for_api: copy_of_params,\n    plot: selected_plot,\n    plotURL: zoomed_plot_url,\n    query: query,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  })))), __jsx(_customisation__WEBPACK_IMPORTED_MODULE_7__[\"Customisation\"], {\n    plot_name: selected_plot.name,\n    open: openCustomisation,\n    onCancel: function onCancel() {\n      return toggleCustomisationMenu(false);\n    },\n    setCustomisationParams: setCustomisationParams,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"StyledPlotRow\"], {\n    minheight: params_for_api.height,\n    width: (_params_for_api$width = params_for_api.width) === null || _params_for_api$width === void 0 ? void 0 : _params_for_api$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_6__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"Column\"], {\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_8__[\"ZoomedPlotMenu\"], {\n    options: zoomedPlotMenuOptions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"MinusIcon\"], {\n    onClick: function onClick() {\n      return Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_6__[\"removePlotFromRightSide\"])(query, selected_plot);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  })), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"ImageDiv\"], {\n    alignitems: \"center\",\n    id: selected_plot.name,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, __jsx(_plot_plotImages__WEBPACK_IMPORTED_MODULE_10__[\"PlotImage\"], {\n    params_for_api: params_for_api,\n    plot: selected_plot,\n    plotURL: plot_url,\n    query: query,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ZoomedPlot, \"cx27cUvS5hby96WTXBaigWmFQXI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = ZoomedPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"ZoomedPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRQbG90cy96b29tZWRQbG90LnRzeD8zNTBiIl0sIm5hbWVzIjpbIlpvb21lZFBsb3QiLCJzZWxlY3RlZF9wbG90IiwicGFyYW1zX2Zvcl9hcGkiLCJ1c2VTdGF0ZSIsImN1c3RvbWl6YXRpb25QYXJhbXMiLCJzZXRDdXN0b21pc2F0aW9uUGFyYW1zIiwib3BlbkN1c3RvbWlzYXRpb24iLCJ0b2dnbGVDdXN0b21pc2F0aW9uTWVudSIsImlzUG9ydGFsV2luZG93T3BlbiIsInNldElzUG9ydGFsV2luZG93T3BlbiIsImN1c3RvbWlzZVByb3BzIiwicGxvdF91cmwiLCJjaG9vc2VBcGlGb3JHZXR0aW5nUGxvdFVybCIsImNvcHlfb2ZfcGFyYW1zIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInpvb21lZF9wbG90X3VybCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXJsIiwiZ2V0Wm9vbWVkUGxvdHNVcmxGb3JPdmVybGF5aW5nUGxvdHNXaXRoRGlmZmVyZW50TmFtZXMiLCJ6b29tZWRQbG90TWVudU9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiYWN0aW9uIiwiaWNvbiIsImZ1bmN0aW9uc19jb25maWciLCJuZXdfYmFja19lbmQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRvU3RyaW5nIiwiZ2V0X3Bsb3RfZXJyb3IiLCJyZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BR0Y7QUFBQTs7QUFBQTs7QUFBQSxNQUZ0QkMsYUFFc0IsUUFGdEJBLGFBRXNC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SUFEakIsQ0FORixFQVNFLE1BQUMsMkVBQUQ7QUFBUSxXQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBZ0IsV0FBTyxFQUFFVCxxQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4RUFBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1ZLHNGQUF1QixDQUFDZixLQUFELEVBQVF0QixhQUFSLENBQTdCO0FBQUEsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FURixFQWVFLE1BQUMsNkVBQUQ7QUFDRSxjQUFVLEVBQUMsUUFEYjtBQUVFLE1BQUUsRUFBRUEsYUFBYSxDQUFDa0MsSUFGcEI7QUFHRSxTQUFLLEVBQUVqQyxjQUFjLENBQUNlLEtBSHhCO0FBSUUsVUFBTSxFQUFFZixjQUFjLENBQUNZLE1BSnpCO0FBS0UsV0FBTyxFQUFDLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsMkRBQUQ7QUFDRSxrQkFBYyxFQUFFWixjQURsQjtBQUVFLFFBQUksRUFBRUQsYUFGUjtBQUdFLFdBQU8sRUFBRVUsUUFIWDtBQUlFLFNBQUssRUFBRVksS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FmRixDQXJDRixDQURGO0FBc0VELENBbEhNOztHQUFNdkIsVTtVQWtCSXNCLHFEOzs7S0FsQkp0QixVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRQbG90cy96b29tZWRQbG90LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGdWxsc2NyZWVuT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdhbnRkL2xpYi9mb3JtL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEJsb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZ1bmN0aW9uc19jb25maWcsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgUGFyYW1zRm9yQXBpUHJvcHMsXHJcbiAgUGxvdERhdGFQcm9wcyxcclxuICBRdWVyeVByb3BzLFxyXG4gIEN1c3RvbWl6ZVByb3BzLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDb2wsXHJcbiAgUGxvdE5hbWVDb2wsXHJcbiAgU3R5bGVkUGxvdFJvdyxcclxuICBDb2x1bW4sXHJcbiAgSW1hZ2VEaXYsXHJcbiAgTWludXNJY29uLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSxcclxuICBnZXRfcGxvdF9lcnJvcixcclxufSBmcm9tICcuLi8uLi9wbG90L3NpbmdsZVBsb3QvdXRpbHMnO1xyXG5pbXBvcnQgeyBDdXN0b21pc2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY3VzdG9taXNhdGlvbic7XHJcbmltcG9ydCB7IFpvb21lZFBsb3RNZW51IH0gZnJvbSAnLi4vbWVudSc7XHJcbmltcG9ydCB7IFBsb3RfcG9ydGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L3BvcnRhbCc7XHJcbmltcG9ydCB7IFBsb3RJbWFnZSB9IGZyb20gJy4uLy4uL3Bsb3QvcGxvdEltYWdlcyc7XHJcbmltcG9ydCB7IGdldFpvb21lZFBsb3RzVXJsRm9yT3ZlcmxheWluZ1Bsb3RzV2l0aERpZmZlcmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBjaG9vc2VBcGlGb3JHZXR0aW5nUGxvdFVybCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgWm9vbWVkUGxvdHNQcm9wcyB7XHJcbiAgc2VsZWN0ZWRfcGxvdDogUGxvdERhdGFQcm9wcztcclxuICBwYXJhbXNfZm9yX2FwaTogUGFyYW1zRm9yQXBpUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBab29tZWRQbG90ID0gKHtcclxuICBzZWxlY3RlZF9wbG90LFxyXG4gIHBhcmFtc19mb3JfYXBpLFxyXG59OiBab29tZWRQbG90c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgW2N1c3RvbWl6YXRpb25QYXJhbXMsIHNldEN1c3RvbWlzYXRpb25QYXJhbXNdID0gdXNlU3RhdGU8XHJcbiAgICBQYXJ0aWFsPFN0b3JlPiAmIEN1c3RvbWl6ZVByb3BzXHJcbiAgPigpO1xyXG4gIGNvbnN0IFtvcGVuQ3VzdG9taXNhdGlvbiwgdG9nZ2xlQ3VzdG9taXNhdGlvbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1BvcnRhbFdpbmRvd09wZW4sIHNldElzUG9ydGFsV2luZG93T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHBhcmFtc19mb3JfYXBpLmN1c3RvbWlzZVByb3BzID0gY3VzdG9taXphdGlvblBhcmFtcztcclxuICBjb25zdCBwbG90X3VybCA9IGNob29zZUFwaUZvckdldHRpbmdQbG90VXJsKHBhcmFtc19mb3JfYXBpKTtcclxuICBjb25zdCBjb3B5X29mX3BhcmFtcyA9IHsgLi4ucGFyYW1zX2Zvcl9hcGkgfTtcclxuICBjb3B5X29mX3BhcmFtcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgY29weV9vZl9wYXJhbXMud2lkdGggPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuMzMpO1xyXG5cclxuICBjb25zdCB6b29tZWRfcGxvdF91cmwgPSBjaG9vc2VBcGlGb3JHZXR0aW5nUGxvdFVybChjb3B5X29mX3BhcmFtcyk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5OiBRdWVyeVByb3BzID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuY29uc3QgdXJsID0gZ2V0Wm9vbWVkUGxvdHNVcmxGb3JPdmVybGF5aW5nUGxvdHNXaXRoRGlmZmVyZW50TmFtZXMoIHF1ZXJ5LCBzZWxlY3RlZF9wbG90KVxyXG4gIGNvbnN0IHpvb21lZFBsb3RNZW51T3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdPcGVuIGluIGEgbmV3IHRhYicsXHJcbiAgICAgIHZhbHVlOiAnb3Blbl9pbl9hX25ld190YWInLFxyXG4gICAgICBhY3Rpb246ICgpID0+IHNldElzUG9ydGFsV2luZG93T3Blbih0cnVlKSxcclxuICAgICAgaWNvbjogPEZ1bGxzY3JlZW5PdXRsaW5lZCAvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnQ3VzdG9taXplJyxcclxuICAgICAgdmFsdWU6ICdjdXN0b21pc2UnLFxyXG4gICAgICBhY3Rpb246ICgpID0+IHRvZ2dsZUN1c3RvbWlzYXRpb25NZW51KHRydWUpLFxyXG4gICAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uc19jb25maWcubmV3X2JhY2tfZW5kLm5ld19iYWNrX2VuZCAmJiB7XHJcbiAgICAgIGxhYmVsOiAnT3ZlcmxheSB3aXRoIGFub3RoZXIgcGxvdCcsXHJcbiAgICAgIHZhbHVlOiAnb3ZlcmxheScsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBpY29uOiA8QmxvY2tPdXRsaW5lZCAvPixcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZF9wbG90KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbCBzcGFjZT17Mn0+XHJcbiAgICAgIHsvKiBQbG90IG9wZW5lZCBpbiBhIG5ldyB0YWIgKi99XHJcbiAgICAgIDxQbG90X3BvcnRhbFxyXG4gICAgICAgIGlzUG9ydGFsV2luZG93T3Blbj17aXNQb3J0YWxXaW5kb3dPcGVufVxyXG4gICAgICAgIHNldElzUG9ydGFsV2luZG93T3Blbj17c2V0SXNQb3J0YWxXaW5kb3dPcGVufVxyXG4gICAgICAgIHRpdGxlPXtzZWxlY3RlZF9wbG90Lm5hbWV9XHJcbiAgICAgID5cclxuICAgICAgICA8U3R5bGVkUGxvdFJvd1xyXG4gICAgICAgICAgbWluaGVpZ2h0PXtjb3B5X29mX3BhcmFtcy5oZWlnaHR9XHJcbiAgICAgICAgICB3aWR0aD17Y29weV9vZl9wYXJhbXMud2lkdGg/LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICBpc19wbG90X3NlbGVjdGVkPXt0cnVlLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICBub3BvaW50ZXI9e3RydWUudG9TdHJpbmcoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGxvdE5hbWVDb2wgZXJyb3I9e2dldF9wbG90X2Vycm9yKHNlbGVjdGVkX3Bsb3QpLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgICAgPC9QbG90TmFtZUNvbD5cclxuICAgICAgICAgIDxJbWFnZURpdlxyXG4gICAgICAgICAgICBpZD17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgICAgICB3aWR0aD17Y29weV9vZl9wYXJhbXMud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17Y29weV9vZl9wYXJhbXMuaGVpZ2h0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGxvdEltYWdlXHJcbiAgICAgICAgICAgICAgcGFyYW1zX2Zvcl9hcGk9e2NvcHlfb2ZfcGFyYW1zfVxyXG4gICAgICAgICAgICAgIHBsb3Q9e3NlbGVjdGVkX3Bsb3R9XHJcbiAgICAgICAgICAgICAgcGxvdFVSTD17em9vbWVkX3Bsb3RfdXJsfVxyXG4gICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgPC9TdHlsZWRQbG90Um93PlxyXG4gICAgICA8L1Bsb3RfcG9ydGFsPlxyXG4gICAgICB7LyogUGxvdCBvcGVuZWQgaW4gYSBuZXcgdGFiICovfVxyXG4gICAgICA8Q3VzdG9taXNhdGlvblxyXG4gICAgICAgIHBsb3RfbmFtZT17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgIG9wZW49e29wZW5DdXN0b21pc2F0aW9ufVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0b2dnbGVDdXN0b21pc2F0aW9uTWVudShmYWxzZSl9XHJcbiAgICAgICAgc2V0Q3VzdG9taXNhdGlvblBhcmFtcz17c2V0Q3VzdG9taXNhdGlvblBhcmFtc31cclxuICAgICAgLz5cclxuICAgICAgPFN0eWxlZFBsb3RSb3dcclxuICAgICAgICBtaW5oZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cclxuICAgICAgICB3aWR0aD17cGFyYW1zX2Zvcl9hcGkud2lkdGg/LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgaXNfcGxvdF9zZWxlY3RlZD17dHJ1ZS50b1N0cmluZygpfVxyXG4gICAgICAgIG5vcG9pbnRlcj17dHJ1ZS50b1N0cmluZygpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBsb3ROYW1lQ29sIGVycm9yPXtnZXRfcGxvdF9lcnJvcihzZWxlY3RlZF9wbG90KS50b1N0cmluZygpfT5cclxuICAgICAgICAgIHtzZWxlY3RlZF9wbG90Lm5hbWV9XHJcbiAgICAgICAgPC9QbG90TmFtZUNvbD5cclxuICAgICAgICA8Q29sdW1uIGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8Wm9vbWVkUGxvdE1lbnUgb3B0aW9ucz17em9vbWVkUGxvdE1lbnVPcHRpb25zfSAvPlxyXG4gICAgICAgICAgPE1pbnVzSWNvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZShxdWVyeSwgc2VsZWN0ZWRfcGxvdCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sdW1uPlxyXG4gICAgICAgIDxJbWFnZURpdlxyXG4gICAgICAgICAgYWxpZ25pdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBpZD17c2VsZWN0ZWRfcGxvdC5uYW1lfVxyXG4gICAgICAgICAgd2lkdGg9e3BhcmFtc19mb3JfYXBpLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtwYXJhbXNfZm9yX2FwaS5oZWlnaHR9XHJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsb3RJbWFnZVxyXG4gICAgICAgICAgICBwYXJhbXNfZm9yX2FwaT17cGFyYW1zX2Zvcl9hcGl9XHJcbiAgICAgICAgICAgIHBsb3Q9e3NlbGVjdGVkX3Bsb3R9XHJcbiAgICAgICAgICAgIHBsb3RVUkw9e3Bsb3RfdXJsfVxyXG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgIDwvU3R5bGVkUGxvdFJvdz5cclxuICAgIDwvU3R5bGVkQ29sPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/plots/zoomedPlots/zoomedPlots/zoomedPlot.tsx\n");

/***/ })

})