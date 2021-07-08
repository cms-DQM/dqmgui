webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx":
/*!*****************************************************************************!*\
  !*** ./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx ***!
  \*****************************************************************************/
/*! exports provided: SummaryPlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SummaryPlot\", function() { return SummaryPlot; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _plot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plot */ \"./components/plots/plot/plotsWithLayouts/plot.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _getReportInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getReportInfo */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/getReportInfo.ts\");\n/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../contexts/leftSideContext */ \"./contexts/leftSideContext.tsx\");\n/* harmony import */ var _form_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form_header */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/form_header.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styledComponents */ \"./components/plots/plot/plotsWithLayouts/styledComponents.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styledComponents */ \"./components/plots/plot/plotsWithLayouts/summaryPlots/styledComponents.tsx\");\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\nvar SummaryPlot = function SummaryPlot(_ref) {\n  _s();\n\n  var subsystem = _ref.subsystem,\n      dataset_name = _ref.dataset_name,\n      run_number = _ref.run_number,\n      lumi = _ref.lumi,\n      plot = _ref.plot,\n      query = _ref.query,\n      selected_plots = _ref.selected_plots,\n      set_report_info = _ref.set_report_info,\n      toggle_modal = _ref.toggle_modal,\n      open = _ref.open,\n      modal_id = _ref.modal_id,\n      set_modal_id = _ref.set_modal_id;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"]([]),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      header = _React$useState2[0],\n      setHeader = _React$useState2[1];\n\n  var imageRef = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"](null);\n  var plots_names = ['reportSummary', 'processTimeStamp'];\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    Object(_getReportInfo__WEBPACK_IMPORTED_MODULE_4__[\"getReportInfo\"])({\n      run_number: run_number,\n      dataset_name: dataset_name,\n      lumi: lumi,\n      subsystem: subsystem,\n      plots_names: plots_names\n    }).then(function (response) {\n      var formed = Object(_form_header__WEBPACK_IMPORTED_MODULE_6__[\"form_header\"])({\n        header_data: response,\n        subsystem: subsystem\n      });\n      setHeader(formed);\n    });\n  }, []);\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"](_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_5__[\"store\"]),\n      size = _React$useContext.size;\n\n  var strokeColor = {\n    '0%': 'red',\n    '100%': 'red'\n  };\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"ParentWrapper\"], {\n    size: {\n      w: size.w + 10,\n      h: size.h + 60\n    } //+ 40 to fit a button\n    ,\n    plotsAmount: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"LayoutName\"], {\n    style: {\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"text\", {\n    style: {\n      weight: 'bold'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }\n  }, header.subsystem), \"  \", __jsx(\"text\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 68\n    }\n  }, header.processTimeStamp)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"], {\n    percent: parseFloat(header.reportSummary),\n    strokeColor: header.reportSummary < 95 && strokeColor,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[\"LayoutWrapper\"], {\n    auto: '1',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_plot__WEBPACK_IMPORTED_MODULE_2__[\"Plot\"], {\n    query: query,\n    plot: plot,\n    onePlotHeight: size.h,\n    onePlotWidth: size.w,\n    selected_plots: selected_plots,\n    imageRef: imageRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"Report_summary_button\"], {\n    onClick: function onClick() {\n      set_modal_id(subsystem);\n      toggle_modal(!open);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, \"REPORT\"));\n};\n\n_s(SummaryPlot, \"xMjJurgOIjbRxH71sdzx5KYebPg=\");\n\n_c = SummaryPlot;\n\nvar _c;\n\n$RefreshReg$(_c, \"SummaryPlot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RzV2l0aExheW91dHMvc3VtbWFyeVBsb3RzL3N1bW1hcnlQbG90LnRzeD8zZTFjIl0sIm5hbWVzIjpbIlN1bW1hcnlQbG90Iiwic3Vic3lzdGVtIiwiZGF0YXNldF9uYW1lIiwicnVuX251bWJlciIsImx1bWkiLCJwbG90IiwicXVlcnkiLCJzZWxlY3RlZF9wbG90cyIsInNldF9yZXBvcnRfaW5mbyIsInRvZ2dsZV9tb2RhbCIsIm9wZW4iLCJtb2RhbF9pZCIsInNldF9tb2RhbF9pZCIsIlJlYWN0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaW1hZ2VSZWYiLCJwbG90c19uYW1lcyIsImdldFJlcG9ydEluZm8iLCJ0aGVuIiwicmVzcG9uc2UiLCJmb3JtZWQiLCJmb3JtX2hlYWRlciIsImhlYWRlcl9kYXRhIiwic3RvcmUiLCJzaXplIiwic3Ryb2tlQ29sb3IiLCJ3IiwiaCIsImRpc3BsYXkiLCJ3ZWlnaHQiLCJwcm9jZXNzVGltZVN0YW1wIiwicGFyc2VGbG9hdCIsInJlcG9ydFN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBaUJPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQStKO0FBQUE7O0FBQUEsTUFBNUpDLFNBQTRKLFFBQTVKQSxTQUE0SjtBQUFBLE1BQWpKQyxZQUFpSixRQUFqSkEsWUFBaUo7QUFBQSxNQUFuSUMsVUFBbUksUUFBbklBLFVBQW1JO0FBQUEsTUFBdkhDLElBQXVILFFBQXZIQSxJQUF1SDtBQUFBLE1BQWpIQyxJQUFpSCxRQUFqSEEsSUFBaUg7QUFBQSxNQUEzR0MsS0FBMkcsUUFBM0dBLEtBQTJHO0FBQUEsTUFBcEdDLGNBQW9HLFFBQXBHQSxjQUFvRztBQUFBLE1BQXBGQyxlQUFvRixRQUFwRkEsZUFBb0Y7QUFBQSxNQUFuRUMsWUFBbUUsUUFB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QUQsQ0FBWjtBQUNBUSxrQkFBWSxDQUFDLENBQUNDLElBQUYsQ0FBWjtBQUNELEtBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixDQURGO0FBK0JELENBaERNOztHQUFNVixXOztLQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RzV2l0aExheW91dHMvc3VtbWFyeVBsb3RzL3N1bW1hcnlQbG90LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgUGxvdCB9IGZyb20gJy4uL3Bsb3QnO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgZ2V0UmVwb3J0SW5mbyB9IGZyb20gJy4vZ2V0UmVwb3J0SW5mbyc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnRleHRzL2xlZnRTaWRlQ29udGV4dCc7XG5pbXBvcnQgeyBmb3JtX2hlYWRlciB9IGZyb20gJy4vZm9ybV9oZWFkZXInO1xuaW1wb3J0IHsgUXVlcnlQcm9wcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBhcmVudFdyYXBwZXIsIExheW91dE5hbWUsIExheW91dFdyYXBwZXIgfSBmcm9tICcuLi9zdHlsZWRDb21wb25lbnRzJ1xuaW1wb3J0IHsgUmVwb3J0X3N1bW1hcnlfYnV0dG9uIH0gZnJvbSAnLi9zdHlsZWRDb21wb25lbnRzJ1xuXG5pbnRlcmZhY2UgU3VtbWFyeVBsb3RQcm9wcyB7XG4gIHBsb3Q6IGFueVxuICBzZWxlY3RlZF9wbG90czogYW55XG4gIHF1ZXJ5OiBRdWVyeVByb3BzO1xuICBzdWJzeXN0ZW06IHN0cmluZztcbiAgbHVtaTogc3RyaW5nO1xuICBydW5fbnVtYmVyOiBzdHJpbmc7XG4gIGRhdGFzZXRfbmFtZTogc3RyaW5nO1xuICB0b2dnbGVfbW9kYWwob3BlbjogYm9vbGVhbik6IHZvaWQ7XG4gIHNldF9yZXBvcnRfaW5mbyhpbmZvOiBhbnkpOiB2b2lkO1xuICBvcGVuOiBib29sZWFuO1xuICBtb2RhbF9pZDogc3RyaW5nO1xuICBzZXRfbW9kYWxfaWQobW9kYWxfaWQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTdW1tYXJ5UGxvdCA9ICh7IHN1YnN5c3RlbSwgZGF0YXNldF9uYW1lLCBydW5fbnVtYmVyLCBsdW1pLCBwbG90LCBxdWVyeSwgc2VsZWN0ZWRfcGxvdHMsIHNldF9yZXBvcnRfaW5mbywgdG9nZ2xlX21vZGFsLCBvcGVuLCBtb2RhbF9pZCwgc2V0X21vZGFsX2lkIH06IFN1bW1hcnlQbG90UHJvcHMpID0+IHtcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGltYWdlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBwbG90c19uYW1lcyA9IFsncmVwb3J0U3VtbWFyeScsICdwcm9jZXNzVGltZVN0YW1wJ11cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFJlcG9ydEluZm8oeyBydW5fbnVtYmVyLCBkYXRhc2V0X25hbWUsIGx1bWksIHN1YnN5c3RlbSwgcGxvdHNfbmFtZXMgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWVkID0gZm9ybV9oZWFkZXIoeyBoZWFkZXJfZGF0YTogcmVzcG9uc2UsIHN1YnN5c3RlbSB9KVxuICAgICAgICBzZXRIZWFkZXIoZm9ybWVkKVxuICAgICAgfSlcbiAgfSwgW10pXG5cblxuICBjb25zdCB7IHNpemUgfSA9IFJlYWN0LnVzZUNvbnRleHQoc3RvcmUpXG4gIGNvbnN0IHN0cm9rZUNvbG9yID0geyAnMCUnOiAncmVkJywgJzEwMCUnOiAncmVkJyB9XG4gIHJldHVybiAoXG4gICAgPFBhcmVudFdyYXBwZXJcbiAgICAgIHNpemU9e3sgdzogc2l6ZS53ICsgMTAsIGg6IHNpemUuaCArIDYwIH19IC8vKyA0MCB0byBmaXQgYSBidXR0b25cbiAgICAgIHBsb3RzQW1vdW50PXsxfT5cbiAgICAgIDxMYXlvdXROYW1lIHN0eWxlPXt7ZGlzcGxheTogJ2Jsb2NrJ319ID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgIDx0ZXh0IHN0eWxlPXt7d2VpZ2h0OiAnYm9sZCd9fT57aGVhZGVyLnN1YnN5c3RlbX08L3RleHQ+ICA8dGV4dD57aGVhZGVyLnByb2Nlc3NUaW1lU3RhbXB9PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgcGVyY2VudD17cGFyc2VGbG9hdChoZWFkZXIucmVwb3J0U3VtbWFyeSl9XG4gICAgICAgICAgICBzdHJva2VDb2xvcj17aGVhZGVyLnJlcG9ydFN1bW1hcnkgPCA5NSAmJiBzdHJva2VDb2xvcn1cbiAgICAgICAgICAvPlxuICAgICAgPC9MYXlvdXROYW1lPlxuICAgICAgPExheW91dFdyYXBwZXJcbiAgICAgICAgYXV0bz17JzEnfT5cbiAgICAgICAgPFBsb3RcbiAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgcGxvdD17cGxvdH1cbiAgICAgICAgICBvbmVQbG90SGVpZ2h0PXtzaXplLmh9XG4gICAgICAgICAgb25lUGxvdFdpZHRoPXtzaXplLnd9XG4gICAgICAgICAgc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzfVxuICAgICAgICAgIGltYWdlUmVmPXtpbWFnZVJlZn0gLz5cbiAgICAgIDwvTGF5b3V0V3JhcHBlciA+XG4gICAgICA8UmVwb3J0X3N1bW1hcnlfYnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0X21vZGFsX2lkKHN1YnN5c3RlbSlcbiAgICAgICAgdG9nZ2xlX21vZGFsKCFvcGVuKVxuICAgICAgfX0+UkVQT1JUPC9SZXBvcnRfc3VtbWFyeV9idXR0b24+XG5cbiAgICA8L1BhcmVudFdyYXBwZXIgPlxuXG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/plots/plot/plotsWithLayouts/summaryPlots/summaryPlot.tsx\n");

/***/ })

})