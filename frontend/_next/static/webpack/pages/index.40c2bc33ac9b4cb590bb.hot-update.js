webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx":
/*!*****************************************************************************!*\
  !*** ./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx ***!
  \*****************************************************************************/
/*! exports provided: SummaryPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SummaryPlot\", function() { return SummaryPlot; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _plot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plot */ \"./components/plots/plot/plotsWithLayouts/plot.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _getReportInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getReportInfo */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/getReportInfo.ts\");\n/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../contexts/leftSideContext */ \"./contexts/leftSideContext.tsx\");\n/* harmony import */ var _form_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form_header */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/form_header.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styledComponents */ \"./components/plots/plot/plotsWithLayouts/styledComponents.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styledComponents */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/styledComponents.tsx\");\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\nvar SummaryPlot = function SummaryPlot(_ref) {\n  _s();\n\n  var subsystem = _ref.subsystem,\n      dataset_name = _ref.dataset_name,\n      run_number = _ref.run_number,\n      lumi = _ref.lumi,\n      plot = _ref.plot,\n      query = _ref.query,\n      selected_plots = _ref.selected_plots,\n      set_report_info = _ref.set_report_info,\n      toggle_modal = _ref.toggle_modal,\n      open = _ref.open,\n      modal_id = _ref.modal_id,\n      set_modal_id = _ref.set_modal_id;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"]([]),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      header = _React$useState2[0],\n      setHeader = _React$useState2[1];\n\n  var imageRef = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"](null);\n  var plots_names = ['reportSummary', 'processTimeStamp'];\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    Object(_getReportInfo__WEBPACK_IMPORTED_MODULE_4__[\"getReportInfo\"])({\n      run_number: run_number,\n      dataset_name: dataset_name,\n      lumi: lumi,\n      subsystem: subsystem,\n      plots_names: plots_names\n    }).then(function (response) {\n      var formed = Object(_form_header__WEBPACK_IMPORTED_MODULE_6__[\"form_header\"])({\n        header_data: response,\n        subsystem: subsystem\n      });\n      setHeader(formed);\n    });\n  }, []);\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"](_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__[\"store\"]),\n      size = _React$useContext.size;\n\n  var strokeColor = {\n    '0%': 'red',\n    '100%': 'red'\n  };\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"ParentWrapper\"], {\n    size: {\n      w: size.w + 10,\n      h: size.h + 60\n    } //+ 40 to fit a button\n    ,\n    plotsAmount: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"LayoutName\"], {\n    style: {\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    style: {\n      fontWeight: \"bold\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }\n  }, header.subsystem), \"  \", __jsx(\"text\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 72\n    }\n  }, header.processTimeStamp)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"], {\n    percent: parseFloat(header.reportSummary),\n    strokeColor: header.reportSummary < 95 && strokeColor,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"LayoutWrapper\"], {\n    auto: '1',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_plot__WEBPACK_IMPORTED_MODULE_2__[\"Plot\"], {\n    query: query,\n    plot: plot,\n    onePlotHeight: size.h,\n    onePlotWidth: size.w,\n    selected_plots: selected_plots,\n    imageRef: imageRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"Report_summary_button\"], {\n    onClick: function onClick() {\n      set_modal_id(subsystem);\n      toggle_modal(!open);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, \"REPORT\"));\n};\n\n_s(SummaryPlot, \"xMjJurgOIjbRxH71sdzx5KYebPg=\");\n\n_c = SummaryPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"SummaryPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RzV2l0aExheW91dHMvc3VtbWFyeVBsb3RzL3N1bW1hcnlQbG90LnRzeD8zZTFjIl0sIm5hbWVzIjpbIlN1bW1hcnlQbG90Iiwic3Vic3lzdGVtIiwiZGF0YXNldF9uYW1lIiwicnVuX251bWJlciIsImx1bWkiLCJwbG90IiwicXVlcnkiLCJzZWxlY3RlZF9wbG90cyIsInNldF9yZXBvcnRfaW5mbyIsInRvZ2dsZV9tb2RhbCIsIm9wZW4iLCJtb2RhbF9pZCIsInNldF9tb2RhbF9pZCIsIlJlYWN0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaW1hZ2VSZWYiLCJwbG90c19uYW1lcyIsImdldFJlcG9ydEluZm8iLCJ0aGVuIiwicmVzcG9uc2UiLCJmb3JtZWQiLCJmb3JtX2hlYWRlciIsImhlYWRlcl9kYXRhIiwic3RvcmUiLCJzaXplIiwic3Ryb2tlQ29sb3IiLCJ3IiwiaCIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwicHJvY2Vzc1RpbWVTdGFtcCIsInBhcnNlRmxvYXQiLCJyZXBvcnRTdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWlCTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUErSjtBQUFBOztBQUFBLE1BQTVKQyxTQUE0SixRQUE1SkEsU0FBNEo7QUFBQSxNQUFqSkMsWUFBaUosUUFBakpBLFlBQWlKO0FBQUEsTUFBbklDLFVBQW1JLFFBQW5JQSxVQUFtSTtBQUFBLE1BQXZIQyxJQUF1SCxRQUF2SEEsSUFBdUg7QUFBQSxNQUFqSEMsSUFBaUgsUUFBakhBLElBQWlIO0FBQUEsTUFBM0dDLEtBQTJHLFFBQTNHQSxLQUEyRztBQUFBLE1BQXBHQyxjQUFvRyxRQUFwR0EsY0FBb0c7QUFBQSxNQUFwRkMsZUFBb0YsUUFBcEZBLGVBQW9GO0FBQUEsTUFBbkVDLFlBQW1F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Q1gsU0FBRCxDQUFaO0FBQ0FRLGtCQUFZLENBQUMsQ0FBQ0MsSUFBRixDQUFaO0FBQ0QsS0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGLENBREY7QUErQkQsQ0FoRE07O0dBQU1WLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bsb3RzL3Bsb3QvcGxvdHNXaXRoTGF5b3V0cy9zdW1tYXJ5UGxvdHMvc3VtbWFyeVBsb3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBQbG90IH0gZnJvbSAnLi4vcGxvdCc7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyBnZXRSZXBvcnRJbmZvIH0gZnJvbSAnLi9nZXRSZXBvcnRJbmZvJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29udGV4dHMvbGVmdFNpZGVDb250ZXh0JztcbmltcG9ydCB7IGZvcm1faGVhZGVyIH0gZnJvbSAnLi9mb3JtX2hlYWRlcic7XG5pbXBvcnQgeyBRdWVyeVByb3BzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUGFyZW50V3JhcHBlciwgTGF5b3V0TmFtZSwgTGF5b3V0V3JhcHBlciB9IGZyb20gJy4uL3N0eWxlZENvbXBvbmVudHMnXG5pbXBvcnQgeyBSZXBvcnRfc3VtbWFyeV9idXR0b24gfSBmcm9tICcuL3N0eWxlZENvbXBvbmVudHMnXG5cbmludGVyZmFjZSBTdW1tYXJ5UGxvdFByb3BzIHtcbiAgcGxvdDogYW55XG4gIHNlbGVjdGVkX3Bsb3RzOiBhbnlcbiAgcXVlcnk6IFF1ZXJ5UHJvcHM7XG4gIHN1YnN5c3RlbTogc3RyaW5nO1xuICBsdW1pOiBzdHJpbmc7XG4gIHJ1bl9udW1iZXI6IHN0cmluZztcbiAgZGF0YXNldF9uYW1lOiBzdHJpbmc7XG4gIHRvZ2dsZV9tb2RhbChvcGVuOiBib29sZWFuKTogdm9pZDtcbiAgc2V0X3JlcG9ydF9pbmZvKGluZm86IGFueSk6IHZvaWQ7XG4gIG9wZW46IGJvb2xlYW47XG4gIG1vZGFsX2lkOiBzdHJpbmc7XG4gIHNldF9tb2RhbF9pZChtb2RhbF9pZDogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFN1bW1hcnlQbG90ID0gKHsgc3Vic3lzdGVtLCBkYXRhc2V0X25hbWUsIHJ1bl9udW1iZXIsIGx1bWksIHBsb3QsIHF1ZXJ5LCBzZWxlY3RlZF9wbG90cywgc2V0X3JlcG9ydF9pbmZvLCB0b2dnbGVfbW9kYWwsIG9wZW4sIG1vZGFsX2lkLCBzZXRfbW9kYWxfaWQgfTogU3VtbWFyeVBsb3RQcm9wcykgPT4ge1xuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gUmVhY3QudXNlU3RhdGUoW10pXG5cbiAgY29uc3QgaW1hZ2VSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBsb3RzX25hbWVzID0gWydyZXBvcnRTdW1tYXJ5JywgJ3Byb2Nlc3NUaW1lU3RhbXAnXVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UmVwb3J0SW5mbyh7IHJ1bl9udW1iZXIsIGRhdGFzZXRfbmFtZSwgbHVtaSwgc3Vic3lzdGVtLCBwbG90c19uYW1lcyB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBmb3JtZWQgPSBmb3JtX2hlYWRlcih7IGhlYWRlcl9kYXRhOiByZXNwb25zZSwgc3Vic3lzdGVtIH0pXG4gICAgICAgIHNldEhlYWRlcihmb3JtZWQpXG4gICAgICB9KVxuICB9LCBbXSlcblxuXG4gIGNvbnN0IHsgc2l6ZSB9ID0gUmVhY3QudXNlQ29udGV4dChzdG9yZSlcbiAgY29uc3Qgc3Ryb2tlQ29sb3IgPSB7ICcwJSc6ICdyZWQnLCAnMTAwJSc6ICdyZWQnIH1cbiAgcmV0dXJuIChcbiAgICA8UGFyZW50V3JhcHBlclxuICAgICAgc2l6ZT17eyB3OiBzaXplLncgKyAxMCwgaDogc2l6ZS5oICsgNjAgfX0gLy8rIDQwIHRvIGZpdCBhIGJ1dHRvblxuICAgICAgcGxvdHNBbW91bnQ9ezF9PlxuICAgICAgPExheW91dE5hbWUgc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snfX0gPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgPHRleHQgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19PntoZWFkZXIuc3Vic3lzdGVtfTwvdGV4dD4gIDx0ZXh0PntoZWFkZXIucHJvY2Vzc1RpbWVTdGFtcH08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICBwZXJjZW50PXtwYXJzZUZsb2F0KGhlYWRlci5yZXBvcnRTdW1tYXJ5KX1cbiAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtoZWFkZXIucmVwb3J0U3VtbWFyeSA8IDk1ICYmIHN0cm9rZUNvbG9yfVxuICAgICAgICAgIC8+XG4gICAgICA8L0xheW91dE5hbWU+XG4gICAgICA8TGF5b3V0V3JhcHBlclxuICAgICAgICBhdXRvPXsnMSd9PlxuICAgICAgICA8UGxvdFxuICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICBwbG90PXtwbG90fVxuICAgICAgICAgIG9uZVBsb3RIZWlnaHQ9e3NpemUuaH1cbiAgICAgICAgICBvbmVQbG90V2lkdGg9e3NpemUud31cbiAgICAgICAgICBzZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHN9XG4gICAgICAgICAgaW1hZ2VSZWY9e2ltYWdlUmVmfSAvPlxuICAgICAgPC9MYXlvdXRXcmFwcGVyID5cbiAgICAgIDxSZXBvcnRfc3VtbWFyeV9idXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBzZXRfbW9kYWxfaWQoc3Vic3lzdGVtKVxuICAgICAgICB0b2dnbGVfbW9kYWwoIW9wZW4pXG4gICAgICB9fT5SRVBPUlQ8L1JlcG9ydF9zdW1tYXJ5X2J1dHRvbj5cblxuICAgIDwvUGFyZW50V3JhcHBlciA+XG5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx\n");

/***/ })

})