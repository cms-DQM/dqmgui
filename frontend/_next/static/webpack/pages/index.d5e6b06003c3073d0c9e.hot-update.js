webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/plotImage.tsx":
/*!*********************************************!*\
  !*** ./components/plots/plot/plotImage.tsx ***!
  \*********************************************/
/*! exports provided: PlotImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlotImage\", function() { return PlotImage; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _errorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errorMessage */ \"./components/plots/errorMessage.tsx\");\n/* harmony import */ var _imageFallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imageFallback */ \"./components/plots/imageFallback.tsx\");\n/* harmony import */ var _singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/plotImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"];\n\n\n\n\n\n\nvar PlotImage = function PlotImage(_ref) {\n  _s();\n\n  var imageRef = _ref.imageRef,\n      query = _ref.query,\n      isPlotSelected = _ref.isPlotSelected,\n      params_for_api = _ref.params_for_api,\n      plotURL = _ref.plotURL,\n      updated_by_not_older_than = _ref.updated_by_not_older_than,\n      blink = _ref.blink,\n      plot = _ref.plot;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(updated_by_not_older_than)),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      new_image_url = _React$useState2[0],\n      set_new_image_url = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(updated_by_not_older_than)),\n      _React$useState4 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      old_image_url = _React$useState4[0],\n      set_old_image_url = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](true),\n      _React$useState6 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      show_old_img = _React$useState6[0],\n      set_show_old_img = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](false),\n      _React$useState8 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, 2),\n      imageError = _React$useState8[0],\n      setImageError = _React$useState8[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"](function () {\n    set_new_image_url(\"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"root_url\"]).concat(plotURL, \";notOlderThan=\").concat(updated_by_not_older_than));\n    set_show_old_img(blink);\n  }, [updated_by_not_older_than, params_for_api.customizeProps, params_for_api.height, params_for_api.width, params_for_api.run_number, params_for_api.dataset_name, params_for_api.lumi, params_for_api.normalize, params_for_api.overlay_plot, params_for_api.plot_name, params_for_api.folders_path, params_for_api.overlay_plot, params_for_api.joined_overlaied_plots_urls, plotURL, blink]);\n  var old_image_display = show_old_img ? '' : 'none';\n  var new_image_display = show_old_img ? 'none' : '';\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, imageError ? __jsx(_errorMessage__WEBPACK_IMPORTED_MODULE_6__[\"ErrorMessage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }) : __jsx(\"div\", {\n    onClick: /*#__PURE__*/Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!imageRef) {\n                _context.next = 9;\n                break;\n              }\n\n              if (!isPlotSelected) {\n                _context.next = 6;\n                break;\n              }\n\n              _context.next = 4;\n              return Object(_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__[\"removePlotFromRightSide\"])(query, plot);\n\n            case 4:\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.next = 8;\n              return Object(_singlePlot_utils__WEBPACK_IMPORTED_MODULE_8__[\"addPlotToRightSide\"])(query, plot);\n\n            case 8:\n              scroll(imageRef);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, !imageError && __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    height: params_for_api.height,\n    once: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(_imageFallback__WEBPACK_IMPORTED_MODULE_7__[\"ImageFallback\"], {\n    retryTimes: 3,\n    style: {\n      display: new_image_display\n    },\n    onLoad: function onLoad() {\n      set_old_image_url(new_image_url);\n      set_show_old_img(false);\n    },\n    alt: plot.name,\n    src: new_image_url,\n    setImageError: setImageError,\n    width: params_for_api.width,\n    height: params_for_api.height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }), __jsx(_imageFallback__WEBPACK_IMPORTED_MODULE_7__[\"ImageFallback\"], {\n    retryTimes: 3,\n    style: {\n      display: old_image_display\n    },\n    alt: plot.name,\n    src: old_image_url,\n    setImageError: setImageError,\n    width: 'auto',\n    height: 'auto',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 19\n    }\n  })))));\n};\n\n_s(PlotImage, \"02JUSGUXbPaqnAriS4/tfOckOvI=\");\n\n_c = PlotImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlotImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RJbWFnZS50c3g/ZmFlZCJdLCJuYW1lcyI6WyJQbG90SW1hZ2UiLCJpbWFnZVJlZiIsInF1ZXJ5IiwiaXNQbG90U2VsZWN0ZWQiLCJwYXJhbXNfZm9yX2FwaSIsInBsb3RVUkwiLCJ1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuIiwiYmxpbmsiLCJwbG90IiwiUmVhY3QiLCJyb290X3VybCIsIm5ld19pbWFnZV91cmwiLCJzZXRfbmV3X2ltYWdlX3VybCIsIm9sZF9pbWFnZV91cmwiLCJzZXRfb2xkX2ltYWdlX3VybCIsInNob3dfb2xkX2ltZyIsInNldF9zaG93X29sZF9pbWciLCJpbWFnZUVycm9yIiwic2V0SW1hZ2VFcnJvciIsImN1c3RvbWl6ZVByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJydW5fbnVtYmVyIiwiZGF0YXNldF9uYW1lIiwibHVtaSIsIm5vcm1hbGl6ZSIsIm92ZXJsYXlfcGxvdCIsInBsb3RfbmFtZSIsImZvbGRlcnNfcGF0aCIsImpvaW5lZF9vdmVybGFpZWRfcGxvdHNfdXJscyIsIm9sZF9pbWFnZV9kaXNwbGF5IiwibmV3X2ltYWdlX2Rpc3BsYXkiLCJyZW1vdmVQbG90RnJvbVJpZ2h0U2lkZSIsImFkZFBsb3RUb1JpZ2h0U2lkZSIsInNjcm9sbCIsImRpc3BsYXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQWdCTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVNIO0FBQUE7O0FBQUEsTUFScEJDLFFBUW9CLFFBUnBCQSxRQVFvQjtBQUFBLE1BUHBCQyxLQU9vQixRQVBwQkEsS0FPb0I7QUFBQSxNQU5wQkMsY0FNb0IsUUFOcEJBLGNBTW9CO0FBQUEsTUFMcEJDLGNBS29CLFFBTHBCQSxjQUtvQjtBQUFBLE1BSnBCQyxPQUlvQixRQUpwQkEsT0FJb0I7QUFBQSxNQUhwQkMseUJBR29CLFFBSHBCQSx5QkFHb0I7QUFBQSxNQUZwQkMsS0FFb0IsUUFGcEJBLEtBRW9CO0FBQUEsTUFEcEJDLElBQ29CLFFBRHBCQSxJQUNvQjs7QUFBQSx3QkFDdUJDLDhDQUFBLFdBQ3RDQyx1REFEc0MsU0FDM0JMLE9BRDJCLDJCQUNIQyx5QkFERyxFQUR2QjtBQUFBO0FBQUEsTUFDYkssYUFEYTtBQUFBLE1BQ0VDLGlCQURGOztBQUFBLHlCQUl1QkgsOENBQUEsV0FDdENDLHVEQURzQyxTQUMzQkwsT0FEMkIsMkJBQ0hDLHlCQURHLEVBSnZCO0FBQUE7QUFBQSxNQUliTyxhQUphO0FBQUEsTUFJRUMsaUJBSkY7O0FBQUEseUJBUXFCTCw4Q0FBQSxDQUFlLElBQWYsQ0FSckI7QUFBQTtBQUFBLE1BUWJNLFlBUmE7QUFBQSxNQVFDQyxnQkFSRDs7QUFBQSx5QkFTZ0JQLDhDQUFBLENBQWUsS0FBZixDQVRoQjtBQUFBO0FBQUEsTUFTYlEsVUFUYTtBQUFBLE1BU0RDLGFBVEM7O0FBV3BCVCxpREFBQSxDQUFnQixZQUFNO0FBQ3BCRyxxQkFBaUIsV0FDWkYsdURBRFksU0FDREwsT0FEQywyQkFDdUJDLHlCQUR2QixFQUFqQjtBQUdBVSxvQkFBZ0IsQ0FBQ1QsS0FBRCxDQUFoQjtBQUNELEdBTEQsRUFLRyxDQUNERCx5QkFEQyxFQUVERixjQUFjLENBQUNlLGNBRmQsRUFHRGYsY0FBYyxDQUFDZ0IsTUFIZCxFQUlEaEIsY0FBYyxDQUFDaUIsS0FKZCxFQUtEakIsY0FBYyxDQUFDa0IsVUFMZCxFQU1EbEIsY0FBYyxDQUFDbUIsWUFOZCxFQU9EbkIsY0FBYyxDQUFDb0IsSUFQZCxFQVFEcEIsY0FBYyxDQUFDcUIsU0FSZCxFQVNEckIsY0FBYyxDQUFDc0IsWUFUZCxFQVVEdEIsY0FBYyxDQUFDdUIsU0FWZCxFQVdEdkIsY0FBYyxDQUFDd0IsWUFYZCxFQVlEeEIsY0FBYyxDQUFDc0IsWUFaZCxFQWFEdEIsY0FBYyxDQUFDeUIsMkJBYmQsRUFjRHhCLE9BZEMsRUFlREUsS0FmQyxDQUxIO0FBdUJBLE1BQU11QixpQkFBaUIsR0FBR2YsWUFBWSxHQUFHLEVBQUgsR0FBUSxNQUE5QztBQUNBLE1BQU1nQixpQkFBaUIsR0FBR2hCLFlBQVksR0FBRyxNQUFILEdBQVksRUFBbEQ7QUFDQSxTQUNFLDREQUNHRSxVQUFVLEdBQ1QsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFMsR0FHUDtBQUNFLFdBQU8sc1VBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIaEIsUUFERztBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQkFFTEUsY0FGSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdLNkIsaUZBQXVCLENBQUM5QixLQUFELEVBQVFNLElBQVIsQ0FINUI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFJS3lCLDRFQUFrQixDQUFDL0IsS0FBRCxFQUFRTSxJQUFSLENBSnZCOztBQUFBO0FBS0wwQixvQkFBTSxDQUFDakMsUUFBRCxDQUFOOztBQUxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUcsQ0FBQ2dCLFVBQUQsSUFDQyw0REFDRSxNQUFDLHFEQUFEO0FBQVUsVUFBTSxFQUFFYixjQUFjLENBQUNnQixNQUFqQztBQUF5QyxRQUFJLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsY0FBVSxFQUFFLENBRGQ7QUFFRSxTQUFLLEVBQUU7QUFBRWUsYUFBTyxFQUFFSjtBQUFYLEtBRlQ7QUFHRSxVQUFNLEVBQUUsa0JBQU07QUFDWmpCLHVCQUFpQixDQUFDSCxhQUFELENBQWpCO0FBQ0FLLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRCxLQU5IO0FBT0UsT0FBRyxFQUFFUixJQUFJLENBQUM0QixJQVBaO0FBUUUsT0FBRyxFQUFFekIsYUFSUDtBQVNFLGlCQUFhLEVBQUVPLGFBVGpCO0FBVUUsU0FBSyxFQUFFZCxjQUFjLENBQUNpQixLQVZ4QjtBQVdFLFVBQU0sRUFBRWpCLGNBQWMsQ0FBQ2dCLE1BWHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQW9CRSxNQUFDLDREQUFEO0FBQ0UsY0FBVSxFQUFFLENBRGQ7QUFFRSxTQUFLLEVBQUU7QUFBRWUsYUFBTyxFQUFFTDtBQUFYLEtBRlQ7QUFHRSxPQUFHLEVBQUV0QixJQUFJLENBQUM0QixJQUhaO0FBSUUsT0FBRyxFQUFFdkIsYUFKUDtBQUtFLGlCQUFhLEVBQUVLLGFBTGpCO0FBTUUsU0FBSyxFQUFFLE1BTlQ7QUFPRSxVQUFNLEVBQUUsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBREYsQ0FYSixDQUpOLENBREY7QUFxREQsQ0FsR007O0dBQU1sQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RJbWFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcclxuXHJcbmltcG9ydCB7IHJvb3RfdXJsIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgUGFyYW1zRm9yQXBpUHJvcHMsXHJcbiAgUXVlcnlQcm9wcyxcclxufSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEltYWdlRmFsbGJhY2sgfSBmcm9tICcuLi9pbWFnZUZhbGxiYWNrJztcclxuaW1wb3J0IHtcclxuICBhZGRQbG90VG9SaWdodFNpZGUsXHJcbiAgcmVtb3ZlUGxvdEZyb21SaWdodFNpZGUsXHJcbn0gZnJvbSAnLi9zaW5nbGVQbG90L3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBQbG90SW1hZ2VQcm9wcyB7XHJcbiAgdXBkYXRlZF9ieV9ub3Rfb2xkZXJfdGhhbjogbnVtYmVyO1xyXG4gIHBhcmFtc19mb3JfYXBpOiBQYXJhbXNGb3JBcGlQcm9wcztcclxuICBibGluazogYm9vbGVhbjtcclxuICBwbG90OiBhbnk7XHJcbiAgcGxvdFVSTDogc3RyaW5nO1xyXG4gIGlzUGxvdFNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBxdWVyeTogUXVlcnlQcm9wcztcclxuICBpbWFnZVJlZj86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsb3RJbWFnZSA9ICh7XHJcbiAgaW1hZ2VSZWYsXHJcbiAgcXVlcnksXHJcbiAgaXNQbG90U2VsZWN0ZWQsXHJcbiAgcGFyYW1zX2Zvcl9hcGksXHJcbiAgcGxvdFVSTCxcclxuICB1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuLFxyXG4gIGJsaW5rLFxyXG4gIHBsb3QsXHJcbn06IFBsb3RJbWFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW25ld19pbWFnZV91cmwsIHNldF9uZXdfaW1hZ2VfdXJsXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgYCR7cm9vdF91cmx9JHtwbG90VVJMfTtub3RPbGRlclRoYW49JHt1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFufWBcclxuICApO1xyXG4gIGNvbnN0IFtvbGRfaW1hZ2VfdXJsLCBzZXRfb2xkX2ltYWdlX3VybF0gPSBSZWFjdC51c2VTdGF0ZShcclxuICAgIGAke3Jvb3RfdXJsfSR7cGxvdFVSTH07bm90T2xkZXJUaGFuPSR7dXBkYXRlZF9ieV9ub3Rfb2xkZXJfdGhhbn1gXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3Nob3dfb2xkX2ltZywgc2V0X3Nob3dfb2xkX2ltZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaW1hZ2VFcnJvciwgc2V0SW1hZ2VFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRfbmV3X2ltYWdlX3VybChcclxuICAgICAgYCR7cm9vdF91cmx9JHtwbG90VVJMfTtub3RPbGRlclRoYW49JHt1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFufWBcclxuICAgICk7XHJcbiAgICBzZXRfc2hvd19vbGRfaW1nKGJsaW5rKTtcclxuICB9LCBbXHJcbiAgICB1cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkuY3VzdG9taXplUHJvcHMsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5oZWlnaHQsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS53aWR0aCxcclxuICAgIHBhcmFtc19mb3JfYXBpLnJ1bl9udW1iZXIsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5kYXRhc2V0X25hbWUsXHJcbiAgICBwYXJhbXNfZm9yX2FwaS5sdW1pLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkubm9ybWFsaXplLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkub3ZlcmxheV9wbG90LFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkucGxvdF9uYW1lLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkuZm9sZGVyc19wYXRoLFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkub3ZlcmxheV9wbG90LFxyXG4gICAgcGFyYW1zX2Zvcl9hcGkuam9pbmVkX292ZXJsYWllZF9wbG90c191cmxzLFxyXG4gICAgcGxvdFVSTCxcclxuICAgIGJsaW5rXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IG9sZF9pbWFnZV9kaXNwbGF5ID0gc2hvd19vbGRfaW1nID8gJycgOiAnbm9uZSc7XHJcbiAgY29uc3QgbmV3X2ltYWdlX2Rpc3BsYXkgPSBzaG93X29sZF9pbWcgPyAnbm9uZScgOiAnJztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2ltYWdlRXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGltYWdlUmVmKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Bsb3RTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IHJlbW92ZVBsb3RGcm9tUmlnaHRTaWRlKHF1ZXJ5LCBwbG90KVxyXG4gICAgICAgICAgICAgICAgICA6IGF3YWl0IGFkZFBsb3RUb1JpZ2h0U2lkZShxdWVyeSwgcGxvdCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwoaW1hZ2VSZWYpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFpbWFnZUVycm9yICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkIGhlaWdodD17cGFyYW1zX2Zvcl9hcGkuaGVpZ2h0fSBvbmNlPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VGYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5VGltZXM9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbmV3X2ltYWdlX2Rpc3BsYXkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldF9vbGRfaW1hZ2VfdXJsKG5ld19pbWFnZV91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0X3Nob3dfb2xkX2ltZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bsb3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e25ld19pbWFnZV91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VFcnJvcj17c2V0SW1hZ2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17cGFyYW1zX2Zvcl9hcGkud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwYXJhbXNfZm9yX2FwaS5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPC9MYXp5TG9hZD4gKi99XHJcbiAgICAgICAgICAgICAgICB7LypXaGVuIGltYWdlcyBpcyB1cGRhdGluZywgd2UgZ2V0dGluZyBibGlua2luZyBlZmZlY3QuIFxyXG4gICAgICAgICAgICAgICAgICAgIFdlIHRyeWluZyB0byBhdm9pZCBpdCB3aXRoIHNob3dpbmcgb2xkIGltYWdlIGluc3RlYWQgb2Ygbm90aGluZyAod2hlbiBhIG5ldyBpbWFnZSBpcyBqdXN0IHJlcXVlc3RpbmcgcHJvY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBPbGQgaW1hZ2UgaXMgYW4gaW1hZ2Ugd2hpY2ggaXMgMjAgc2VjIG9sZGVyIHRoZW4gdGhlIG5ldyByZXF1ZXN0ZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxMYXp5TG9hZCBoZWlnaHQ9e3BhcmFtc19mb3JfYXBpLmhlaWdodH0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VGYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5VGltZXM9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogb2xkX2ltYWdlX2Rpc3BsYXkgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bsb3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e29sZF9pbWFnZV91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VFcnJvcj17c2V0SW1hZ2VFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17J2F1dG8nfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17J2F1dG8nfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/plots/plot/plotImage.tsx\n");

/***/ })

})