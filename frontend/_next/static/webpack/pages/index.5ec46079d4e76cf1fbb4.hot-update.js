webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx":
/*!********************************************************************************!*\
  !*** ./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx ***!
  \********************************************************************************/
/*! exports provided: ZoomedOverlaidPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomedOverlaidPlot\", function() { return ZoomedOverlaidPlot; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"./components/plots/zoomedPlots/zoomedOverlayPlots/utils.ts\");\n/* harmony import */ var _containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../containers/display/styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../plot/singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu */ \"./components/plots/zoomedPlots/menu.tsx\");\n/* harmony import */ var _customization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../customization */ \"./components/customization/index.tsx\");\n/* harmony import */ var _containers_display_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../containers/display/portal */ \"./containers/display/portal/index.tsx\");\n/* harmony import */ var _hooks_useBlinkOnUpdate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useBlinkOnUpdate */ \"./hooks/useBlinkOnUpdate.tsx\");\n/* harmony import */ var _plot_plotImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../plot/plotImage */ \"./components/plots/plot/plotImage.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ZoomedOverlaidPlot = function ZoomedOverlaidPlot(_ref) {\n  _s();\n\n  var _copy_of_params$width, _params_for_api$width;\n\n  var selected_plot = _ref.selected_plot,\n      params_for_api = _ref.params_for_api;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      customizationParams = _useState[0],\n      setCustomizationParams = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      openCustomization = _useState2[0],\n      toggleCustomizationMenu = _useState2[1];\n\n  params_for_api.customizeProps = customizationParams;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isPortalWindowOpen = _React$useState2[0],\n      setIsPortalWindowOpen = _React$useState2[1];\n\n  var zoomedPlotMenuOptions = [{\n    label: 'Open in a new tab',\n    value: 'open_in_a_new_tab',\n    action: function action() {\n      return setIsPortalWindowOpen(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    })\n  }, {\n    label: 'Customize',\n    value: 'Customize',\n    action: function action() {\n      return toggleCustomizationMenu(true);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"SettingOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    })\n  }, {\n    label: 'Overlay with another plot',\n    value: 'Customize',\n    action: function action() {\n      var _query$overlay_data;\n\n      var basePath = router.basePath;\n      var page = 'plotsLocalOverlay';\n      var run = 'run_number=' + query.run_number;\n      var dataset = 'dataset_name=' + query.dataset_name;\n      var path = 'folders_path=' + selected_plot.path;\n      var plot_name = 'plot_name=' + selected_plot.name;\n      var globally_overlaid_plots = (_query$overlay_data = query.overlay_data) === null || _query$overlay_data === void 0 ? void 0 : _query$overlay_data.split('&').map(function (plot) {\n        var parts = plot.split('/');\n        var run_number = parts.shift();\n        var pathAndLabel = parts.splice(3);\n        var dataset_name = parts.join('/');\n        var path = selected_plot.path;\n        var plot_name = selected_plot.name;\n        var label = pathAndLabel.pop();\n        var string = [run_number, dataset_name, path, plot_name].join(';');\n        return \"\".concat(string, \";reflabel=\").concat(label);\n      });\n      var global_overlay = 'overlaidGlobally=' + globally_overlaid_plots.join('&');\n      var baseURL = [basePath, page].join('/');\n      var queryURL = [run, dataset, path, plot_name, global_overlay].join('&');\n      var plotsLocalOverlayURL = [baseURL, queryURL].join('?');\n      console.log(global_overlay);\n      window.open(plotsLocalOverlayURL);\n    },\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"BlockOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    })\n  }];\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var query = router.query;\n  var overlaid_plots_urls = Object(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"get_overlaied_plots_urls\"])(params_for_api);\n  var joined_overlaid_plots_urls = overlaid_plots_urls.join('');\n  params_for_api.joined_overlaied_plots_urls = joined_overlaid_plots_urls;\n  var source = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"get_plot_source\"])(params_for_api);\n\n  var copy_of_params = _objectSpread({}, params_for_api);\n\n  copy_of_params.height = window.innerHeight;\n  copy_of_params.width = Math.round(window.innerHeight * 1.33);\n  var zoomed_plot_url = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"get_plot_source\"])(copy_of_params);\n\n  var _useBlinkOnUpdate = Object(_hooks_useBlinkOnUpdate__WEBPACK_IMPORTED_MODULE_12__[\"useBlinkOnUpdate\"])(),\n      blink = _useBlinkOnUpdate.blink,\n      updated_by_not_older_than = _useBlinkOnUpdate.updated_by_not_older_than;\n\n  return __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"StyledCol\"], {\n    space: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(_containers_display_portal__WEBPACK_IMPORTED_MODULE_11__[\"Plot_portal\"], {\n    isPortalWindowOpen: isPortalWindowOpen,\n    setIsPortalWindowOpen: setIsPortalWindowOpen,\n    title: selected_plot.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"StyledPlotRow\"], {\n    justifycontent: \"center\",\n    isLoading: blink.toString(),\n    animation: (_config_config__WEBPACK_IMPORTED_MODULE_5__[\"functions_config\"].mode === 'ONLINE').toString(),\n    minheight: copy_of_params.height,\n    width: (_copy_of_params$width = copy_of_params.width) === null || _copy_of_params$width === void 0 ? void 0 : _copy_of_params$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"ImageDiv\"], {\n    id: selected_plot.name,\n    width: copy_of_params.width,\n    height: copy_of_params.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, __jsx(_plot_plotImage__WEBPACK_IMPORTED_MODULE_13__[\"PlotImage\"], {\n    blink: blink,\n    params_for_api: copy_of_params,\n    plot: selected_plot,\n    plotURL: zoomed_plot_url,\n    query: query,\n    updated_by_not_older_than: updated_by_not_older_than,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  })))), __jsx(_customization__WEBPACK_IMPORTED_MODULE_10__[\"Customization\"], {\n    plot_name: selected_plot.name,\n    open: openCustomization,\n    onCancel: function onCancel() {\n      return toggleCustomizationMenu(false);\n    },\n    setCustomizationParams: setCustomizationParams,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"StyledPlotRow\"], {\n    isLoading: blink.toString(),\n    animation: (_config_config__WEBPACK_IMPORTED_MODULE_5__[\"functions_config\"].mode === 'ONLINE').toString(),\n    minheight: params_for_api.height,\n    width: (_params_for_api$width = params_for_api.width) === null || _params_for_api$width === void 0 ? void 0 : _params_for_api$width.toString(),\n    is_plot_selected: true.toString(),\n    nopointer: true.toString(),\n    justifycontent: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"PlotNameCol\"], {\n    error: Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__[\"get_plot_error\"])(selected_plot).toString(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, selected_plot.name), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"Column\"], {\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_9__[\"ZoomedPlotMenu\"], {\n    options: zoomedPlotMenuOptions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 11\n    }\n  }), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"MinusIcon\"], {\n    onClick: function onClick() {\n      return Object(_plot_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__[\"removePlotFromRightSide\"])(query, selected_plot);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 11\n    }\n  })), __jsx(_containers_display_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"ImageDiv\"], {\n    id: selected_plot.name,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, __jsx(_plot_plotImage__WEBPACK_IMPORTED_MODULE_13__[\"PlotImage\"], {\n    blink: blink,\n    params_for_api: params_for_api,\n    plot: selected_plot,\n    plotURL: source,\n    query: query,\n    updated_by_not_older_than: updated_by_not_older_than,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ZoomedOverlaidPlot, \"n7HfDH0SxZV5E2eKjp3X83/7eok=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], _hooks_useBlinkOnUpdate__WEBPACK_IMPORTED_MODULE_12__[\"useBlinkOnUpdate\"]];\n});\n\n_c = ZoomedOverlaidPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"ZoomedOverlaidPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy96b29tZWRQbG90cy96b29tZWRPdmVybGF5UGxvdHMvem9vbWVkT3ZlcmxhaWRQbG90LnRzeD9jYjc2Il0sIm5hbWVzIjpbIlpvb21lZE92ZXJsYWlkUGxvdCIsInNlbGVjdGVkX3Bsb3QiLCJwYXJhbXNfZm9yX2FwaSIsInVzZVN0YXRlIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInNldEN1c3RvbWl6YXRpb25QYXJhbXMiLCJvcGVuQ3VzdG9taXphdGlvbiIsInRvZ2dsZUN1c3RvbWl6YXRpb25NZW51IiwiY3VzdG9taXplUHJvcHMiLCJSZWFjdCIsImlzUG9ydGFsV2luZG93T3BlbiIsInNldElzUG9ydGFsV2luZG93T3BlbiIsInpvb21lZFBsb3RNZW51T3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJhY3Rpb24iLCJpY29uIiwiYmFzZVBhdGgiLCJyb3V0ZXIiLCJwYWdlIiwicnVuIiwicXVlcnkiLCJydW5fbnVtYmVyIiwiZGF0YXNldCIsImRhdGFzZXRfbmFtZSIsInBhdGgiLCJwbG90X25hbWUiLCJuYW1lIiwiZ2xvYmFsbHlfb3ZlcmxhaWRfcGxvdHMiLCJvdmVybGF5X2RhdGEiLCJzcGxpdCIsIm1hcCIsInBsb3QiLCJwYXJ0cyIsInNoaWZ0IiwicGF0aEFuZExhYmVsIiwic3BsaWNlIiwiam9pbiIsInBvcCIsInN0cmluZyIsImdsb2JhbF9vdmVybGF5IiwiYmFzZVVSTCIsInF1ZXJ5VVJMIiwicGxvdHNMb2NhbE92ZXJsYXlVUkwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib3BlbiIsInVzZVJvdXRlciIsIm92ZXJsYWlkX3Bsb3RzX3VybHMiLCJnZXRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMiLCJqb2luZWRfb3ZlcmxhaWRfcGxvdHNfdXJscyIsImpvaW5lZF9vdmVybGFpZWRfcGxvdHNfdXJscyIsInNvdXJjZSIsImdldF9wbG90X3NvdXJjZSIsImNvcHlfb2ZfcGFyYW1zIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsInpvb21lZF9wbG90X3VybCIsInVzZUJsaW5rT25VcGRhdGUiLCJibGluayIsInVwZGF0ZWRfYnlfbm90X29sZGVyX3RoYW4iLCJ0b1N0cmluZyIsImZ1bmN0aW9uc19jb25maWciLCJtb2RlIiwiZ2V0X3Bsb3RfZXJyb3IiLCJyZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBVUE7QUFDQTtBQVNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FHVjtBQUFBOztBQUFBOztBQUFBLE1BRnRCQyxhQUVzQixRQUZ0QkEsYUFFc0I7QUFBQSxNQUR0QkMsY0FDc0IsUUFEdEJBLGNBQ3NCOztBQUFBLGtCQUNnQ0Msc0RBQVEsRUFEeEM7QUFBQSxNQUNmQyxtQkFEZTtBQUFBLE1BQ01DLHNCQUROOztBQUFBLG1CQUkrQkYsc0RBQVEsQ0FBQyxLQUFELENBSnZDO0FBQUEsTUFJZkcsaUJBSmU7QUFBQSxNQUlJQyx1QkFKSjs7QUFLdEJMLGdCQUFjLENBQUNNLGNBQWYsR0FBZ0NKLG1CQUFoQzs7QUFMc0Isd0JBTThCSyw0Q0FBSyxDQUFDTixRQUFOLENBQWUsS0FBZixDQU45QjtBQUFBO0FBQUEsTUFNZk8sa0JBTmU7QUFBQSxNQU1LQyxxQkFOTDs7QUFRdEIsTUFBTUMscUJBQXFCLEdBQUcsQ0FDNUI7QUFDRUMsU0FBSyxFQUFFLG1CQURUO0FBRUVDLFNBQUssRUFBRSxtQkFGVDtBQUdFQyxVQUFNLEVBQUU7QUFBQSxhQUFNSixxQkFBcUIsQ0FBQyxJQUFELENBQTNCO0FBQUEsS0FIVjtBQUlFSyxRQUFJLEVBQUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlIsR0FENEIsRUFPNUI7QUFDRUgsU0FBSyxF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FsQkYsQ0F4Q0YsQ0FERjtBQTRFRCxDQXBKTTs7R0FBTWhFLGtCO1VBd0RJZ0QscUQsRUFjOEJjLHlFOzs7S0F0RWxDOUQsa0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bsb3RzL3pvb21lZFBsb3RzL3pvb21lZE92ZXJsYXlQbG90cy96b29tZWRPdmVybGFpZFBsb3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdhbnRkL2xpYi9mb3JtL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQsIEZ1bGxzY3JlZW5PdXRsaW5lZCwgQmxvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuaW1wb3J0IHtcbiAgZ2V0X292ZXJsYWllZF9wbG90c191cmxzLFxuICBmdW5jdGlvbnNfY29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7XG4gIFBhcmFtc0ZvckFwaVByb3BzLFxuICBQbG90RGF0YVByb3BzLFxuICBRdWVyeVByb3BzLFxuICBDdXN0b21pemVQcm9wcyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0X3Bsb3Rfc291cmNlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuICBTdHlsZWRQbG90Um93LFxuICBQbG90TmFtZUNvbCxcbiAgQ29sdW1uLFxuICBTdHlsZWRDb2wsXG4gIEltYWdlRGl2LFxuICBJbWFnZSxcbiAgTWludXNJY29uLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvc3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQge1xuICByZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSxcbiAgZ2V0X3Bsb3RfZXJyb3IsXG59IGZyb20gJy4uLy4uL3Bsb3Qvc2luZ2xlUGxvdC91dGlscyc7XG5pbXBvcnQgeyBab29tZWRQbG90TWVudSB9IGZyb20gJy4uL21lbnUnO1xuaW1wb3J0IHsgQ3VzdG9taXphdGlvbiB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWl6YXRpb24nO1xuaW1wb3J0IHsgUGxvdF9wb3J0YWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvcG9ydGFsJztcbmltcG9ydCB7IHVzZUJsaW5rT25VcGRhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VCbGlua09uVXBkYXRlJztcbmltcG9ydCB7IFBsb3RJbWFnZSB9IGZyb20gJy4uLy4uL3Bsb3QvcGxvdEltYWdlJztcblxuaW50ZXJmYWNlIFpvb21lZFBsb3RzUHJvcHMge1xuICBzZWxlY3RlZF9wbG90OiBQbG90RGF0YVByb3BzO1xuICBwYXJhbXNfZm9yX2FwaTogUGFyYW1zRm9yQXBpUHJvcHM7XG59XG5cbmV4cG9ydCBjb25zdCBab29tZWRPdmVybGFpZFBsb3QgPSAoe1xuICBzZWxlY3RlZF9wbG90LFxuICBwYXJhbXNfZm9yX2FwaSxcbn06IFpvb21lZFBsb3RzUHJvcHMpID0+IHtcbiAgY29uc3QgW2N1c3RvbWl6YXRpb25QYXJhbXMsIHNldEN1c3RvbWl6YXRpb25QYXJhbXNdID0gdXNlU3RhdGU8XG4gICAgUGFydGlhbDxTdG9yZT4gJiBDdXN0b21pemVQcm9wc1xuICA+KCk7XG4gIGNvbnN0IFtvcGVuQ3VzdG9taXphdGlvbiwgdG9nZ2xlQ3VzdG9taXphdGlvbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBwYXJhbXNfZm9yX2FwaS5jdXN0b21pemVQcm9wcyA9IGN1c3RvbWl6YXRpb25QYXJhbXM7XG4gIGNvbnN0IFtpc1BvcnRhbFdpbmRvd09wZW4sIHNldElzUG9ydGFsV2luZG93T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgem9vbWVkUGxvdE1lbnVPcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnT3BlbiBpbiBhIG5ldyB0YWInLFxuICAgICAgdmFsdWU6ICdvcGVuX2luX2FfbmV3X3RhYicsXG4gICAgICBhY3Rpb246ICgpID0+IHNldElzUG9ydGFsV2luZG93T3Blbih0cnVlKSxcbiAgICAgIGljb246IDxGdWxsc2NyZWVuT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0N1c3RvbWl6ZScsXG4gICAgICB2YWx1ZTogJ0N1c3RvbWl6ZScsXG4gICAgICBhY3Rpb246ICgpID0+IHRvZ2dsZUN1c3RvbWl6YXRpb25NZW51KHRydWUpLFxuICAgICAgaWNvbjogPFNldHRpbmdPdXRsaW5lZCAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnT3ZlcmxheSB3aXRoIGFub3RoZXIgcGxvdCcsXG4gICAgICB2YWx1ZTogJ0N1c3RvbWl6ZScsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSByb3V0ZXIuYmFzZVBhdGhcbiAgICAgICAgY29uc3QgcGFnZSA9ICdwbG90c0xvY2FsT3ZlcmxheSdcbiAgICAgICAgY29uc3QgcnVuID0gJ3J1bl9udW1iZXI9JyArIHF1ZXJ5LnJ1bl9udW1iZXIgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSAnZGF0YXNldF9uYW1lPScgKyBxdWVyeS5kYXRhc2V0X25hbWUgYXMgc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhdGggPSAnZm9sZGVyc19wYXRoPScgKyBzZWxlY3RlZF9wbG90LnBhdGhcbiAgICAgICAgY29uc3QgcGxvdF9uYW1lID0gJ3Bsb3RfbmFtZT0nICsgc2VsZWN0ZWRfcGxvdC5uYW1lXG4gICAgICAgIGNvbnN0IGdsb2JhbGx5X292ZXJsYWlkX3Bsb3RzID0gcXVlcnkub3ZlcmxheV9kYXRhPy5zcGxpdCgnJicpLm1hcCgocGxvdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gcGxvdC5zcGxpdCgnLycpXG4gICAgICAgICAgY29uc3QgcnVuX251bWJlciA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICAgICBjb25zdCBwYXRoQW5kTGFiZWwgPSBwYXJ0cy5zcGxpY2UoMylcbiAgICAgICAgICBjb25zdCBkYXRhc2V0X25hbWUgPSBwYXJ0cy5qb2luKCcvJylcbiAgICAgICAgICBjb25zdCBwYXRoID0gIHNlbGVjdGVkX3Bsb3QucGF0aFxuICAgICAgICAgIGNvbnN0IHBsb3RfbmFtZSA9IHNlbGVjdGVkX3Bsb3QubmFtZVxuICAgICAgICAgIGNvbnN0IGxhYmVsID0gcGF0aEFuZExhYmVsLnBvcCgpXG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gW3J1bl9udW1iZXIsIGRhdGFzZXRfbmFtZSwgcGF0aCwgcGxvdF9uYW1lXS5qb2luKCc7JylcbiAgICAgICAgICByZXR1cm4gYCR7c3RyaW5nfTtyZWZsYWJlbD0ke2xhYmVsfWBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2xvYmFsX292ZXJsYXkgPSAnb3ZlcmxhaWRHbG9iYWxseT0nICsgKGdsb2JhbGx5X292ZXJsYWlkX3Bsb3RzIGFzIHN0cmluZ1tdKS5qb2luKCcmJylcbiAgICAgICAgY29uc3QgYmFzZVVSTCA9IFtiYXNlUGF0aCwgcGFnZV0uam9pbignLycpXG4gICAgICAgIGNvbnN0IHF1ZXJ5VVJMID0gW3J1biwgZGF0YXNldCwgcGF0aCwgcGxvdF9uYW1lLCBnbG9iYWxfb3ZlcmxheV0uam9pbignJicpXG4gICAgICAgIGNvbnN0IHBsb3RzTG9jYWxPdmVybGF5VVJMID0gW2Jhc2VVUkwsIHF1ZXJ5VVJMXS5qb2luKCc/JylcbiAgICAgICAgY29uc29sZS5sb2coZ2xvYmFsX292ZXJsYXkpXG4gICAgICAgIHdpbmRvdy5vcGVuKHBsb3RzTG9jYWxPdmVybGF5VVJMKVxuICAgICAgfSxcbiAgICAgIGljb246IDxCbG9ja091dGxpbmVkIC8+LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHF1ZXJ5OiBRdWVyeVByb3BzID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IG92ZXJsYWlkX3Bsb3RzX3VybHMgPSBnZXRfb3ZlcmxhaWVkX3Bsb3RzX3VybHMocGFyYW1zX2Zvcl9hcGkpO1xuICBjb25zdCBqb2luZWRfb3ZlcmxhaWRfcGxvdHNfdXJscyA9IG92ZXJsYWlkX3Bsb3RzX3VybHMuam9pbignJyk7XG4gIHBhcmFtc19mb3JfYXBpLmpvaW5lZF9vdmVybGFpZWRfcGxvdHNfdXJscyA9IGpvaW5lZF9vdmVybGFpZF9wbG90c191cmxzO1xuXG4gIGNvbnN0IHNvdXJjZSA9IGdldF9wbG90X3NvdXJjZShwYXJhbXNfZm9yX2FwaSk7XG5cbiAgY29uc3QgY29weV9vZl9wYXJhbXMgPSB7IC4uLnBhcmFtc19mb3JfYXBpIH07XG4gIGNvcHlfb2ZfcGFyYW1zLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29weV9vZl9wYXJhbXMud2lkdGggPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuMzMpO1xuICBjb25zdCB6b29tZWRfcGxvdF91cmwgPSBnZXRfcGxvdF9zb3VyY2UoY29weV9vZl9wYXJhbXMpO1xuXG4gIGNvbnN0IHsgYmxpbmssIHVwZGF0ZWRfYnlfbm90X29sZGVyX3RoYW4gfSA9IHVzZUJsaW5rT25VcGRhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb2wgc3BhY2U9ezJ9PlxuICAgICAgPFBsb3RfcG9ydGFsXG4gICAgICAgIGlzUG9ydGFsV2luZG93T3Blbj17aXNQb3J0YWxXaW5kb3dPcGVufVxuICAgICAgICBzZXRJc1BvcnRhbFdpbmRvd09wZW49e3NldElzUG9ydGFsV2luZG93T3Blbn1cbiAgICAgICAgdGl0bGU9e3NlbGVjdGVkX3Bsb3QubmFtZX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZFBsb3RSb3dcbiAgICAgICAgICBqdXN0aWZ5Y29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgaXNMb2FkaW5nPXtibGluay50b1N0cmluZygpfVxuICAgICAgICAgIGFuaW1hdGlvbj17KGZ1bmN0aW9uc19jb25maWcubW9kZSA9PT0gJ09OTElORScpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgbWluaGVpZ2h0PXtjb3B5X29mX3BhcmFtcy5oZWlnaHR9XG4gICAgICAgICAgd2lkdGg9e2NvcHlfb2ZfcGFyYW1zLndpZHRoPy50b1N0cmluZygpfVxuICAgICAgICAgIGlzX3Bsb3Rfc2VsZWN0ZWQ9e3RydWUudG9TdHJpbmcoKX1cbiAgICAgICAgICBub3BvaW50ZXI9e3RydWUudG9TdHJpbmcoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQbG90TmFtZUNvbCBlcnJvcj17Z2V0X3Bsb3RfZXJyb3Ioc2VsZWN0ZWRfcGxvdCkudG9TdHJpbmcoKX0+XG4gICAgICAgICAgICB7c2VsZWN0ZWRfcGxvdC5uYW1lfVxuICAgICAgICAgIDwvUGxvdE5hbWVDb2w+XG4gICAgICAgICAgPEltYWdlRGl2XG4gICAgICAgICAgICBpZD17c2VsZWN0ZWRfcGxvdC5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9e2NvcHlfb2ZfcGFyYW1zLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtjb3B5X29mX3BhcmFtcy5oZWlnaHR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsb3RJbWFnZVxuICAgICAgICAgICAgICBibGluaz17Ymxpbmt9XG4gICAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtjb3B5X29mX3BhcmFtc31cbiAgICAgICAgICAgICAgcGxvdD17c2VsZWN0ZWRfcGxvdH1cbiAgICAgICAgICAgICAgcGxvdFVSTD17em9vbWVkX3Bsb3RfdXJsfVxuICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgIHVwZGF0ZWRfYnlfbm90X29sZGVyX3RoYW49e3VwZGF0ZWRfYnlfbm90X29sZGVyX3RoYW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW1hZ2VEaXY+XG4gICAgICAgIDwvU3R5bGVkUGxvdFJvdz5cbiAgICAgIDwvUGxvdF9wb3J0YWw+XG4gICAgICA8Q3VzdG9taXphdGlvblxuICAgICAgICBwbG90X25hbWU9e3NlbGVjdGVkX3Bsb3QubmFtZX1cbiAgICAgICAgb3Blbj17b3BlbkN1c3RvbWl6YXRpb259XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0b2dnbGVDdXN0b21pemF0aW9uTWVudShmYWxzZSl9XG4gICAgICAgIHNldEN1c3RvbWl6YXRpb25QYXJhbXM9e3NldEN1c3RvbWl6YXRpb25QYXJhbXN9XG4gICAgICAvPlxuICAgICAgPFN0eWxlZFBsb3RSb3dcbiAgICAgICAgaXNMb2FkaW5nPXtibGluay50b1N0cmluZygpfVxuICAgICAgICBhbmltYXRpb249eyhmdW5jdGlvbnNfY29uZmlnLm1vZGUgPT09ICdPTkxJTkUnKS50b1N0cmluZygpfVxuICAgICAgICBtaW5oZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cbiAgICAgICAgd2lkdGg9e3BhcmFtc19mb3JfYXBpLndpZHRoPy50b1N0cmluZygpfVxuICAgICAgICBpc19wbG90X3NlbGVjdGVkPXt0cnVlLnRvU3RyaW5nKCl9XG4gICAgICAgIG5vcG9pbnRlcj17dHJ1ZS50b1N0cmluZygpfVxuICAgICAgICBqdXN0aWZ5Y29udGVudD1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxQbG90TmFtZUNvbCBlcnJvcj17Z2V0X3Bsb3RfZXJyb3Ioc2VsZWN0ZWRfcGxvdCkudG9TdHJpbmcoKX0+XG4gICAgICAgICAge3NlbGVjdGVkX3Bsb3QubmFtZX1cbiAgICAgICAgPC9QbG90TmFtZUNvbD5cbiAgICAgICAgPENvbHVtbiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgIDxab29tZWRQbG90TWVudSBvcHRpb25zPXt6b29tZWRQbG90TWVudU9wdGlvbnN9IC8+XG4gICAgICAgICAgPE1pbnVzSWNvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlUGxvdEZyb21SaWdodFNpZGUocXVlcnksIHNlbGVjdGVkX3Bsb3QpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8SW1hZ2VEaXZcbiAgICAgICAgICBpZD17c2VsZWN0ZWRfcGxvdC5uYW1lfVxuICAgICAgICAgIHdpZHRoPXtwYXJhbXNfZm9yX2FwaS53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH1cbiAgICAgICAgPlxuICAgICAgICAgIDxQbG90SW1hZ2VcbiAgICAgICAgICAgIGJsaW5rPXtibGlua31cbiAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtwYXJhbXNfZm9yX2FwaX1cbiAgICAgICAgICAgIHBsb3Q9e3NlbGVjdGVkX3Bsb3R9XG4gICAgICAgICAgICBwbG90VVJMPXtzb3VyY2V9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICB1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuPXt1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW1hZ2VEaXY+XG4gICAgICA8L1N0eWxlZFBsb3RSb3c+XG4gICAgPC9TdHlsZWRDb2w+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/plots/zoomedPlots/zoomedOverlayPlots/zoomedOverlaidPlot.tsx\n");

/***/ })

})