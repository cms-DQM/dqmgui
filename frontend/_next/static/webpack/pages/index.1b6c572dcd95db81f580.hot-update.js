webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/display/content/display_folders_or_plots.tsx":
/*!*****************************************************************!*\
  !*** ./containers/display/content/display_folders_or_plots.tsx ***!
  \*****************************************************************/
/*! exports provided: DisplayFordersOrPlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayFordersOrPlots\", function() { return DisplayFordersOrPlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _search_styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/styledComponents */ \"./containers/search/styledComponents.tsx\");\n/* harmony import */ var _search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../search/noResultsFound */ \"./containers/search/noResultsFound.tsx\");\n/* harmony import */ var _components_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _directories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directories */ \"./containers/display/content/directories.tsx\");\n/* harmony import */ var _components_plots_plot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/plots/plot */ \"./components/plots/plot/index.tsx\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/containers/display/content/display_folders_or_plots.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\nvar DisplayFordersOrPlots = function DisplayFordersOrPlots(_ref) {\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      plots_grouped_by_layouts = _ref.plots_grouped_by_layouts,\n      isLoading = _ref.isLoading,\n      viewPlotsPosition = _ref.viewPlotsPosition,\n      proportion = _ref.proportion,\n      errors = _ref.errors,\n      filteredFolders = _ref.filteredFolders,\n      plotsAreaRef = _ref.plotsAreaRef;\n  console.log(isLoading);\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    ref: plotsAreaRef,\n    any_selected_plots: selected_plots.length > 0 && errors.length === 0,\n    position: viewPlotsPosition,\n    proportion: proportion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, isLoading && filteredFolders.length === 0 ? __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"SpinnerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"Spinner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, !isLoading && filteredFolders.length === 0 && plots.length === 0 && errors.length === 0 ? __jsx(_search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__[\"NoResultsFound\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }) : errors.length === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"CustomRow\"], {\n    width: \"100%\",\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 19\n    }\n  }, __jsx(_directories__WEBPACK_IMPORTED_MODULE_6__[\"Directories\"], {\n    directories: filteredFolders,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  }, __jsx(_components_plots_plot__WEBPACK_IMPORTED_MODULE_7__[\"LeftSidePlots\"], {\n    plots: plots,\n    selected_plots: selected_plots,\n    plots_grouped_by_layouts: plots_grouped_by_layouts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }))) : !isLoading && errors.length > 0 && errors.map(function (error) {\n    return __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"StyledAlert\"], {\n      key: error,\n      message: error,\n      type: \"error\",\n      showIcon: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n_c = DisplayFordersOrPlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"DisplayFordersOrPlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9kaXNwbGF5L2NvbnRlbnQvZGlzcGxheV9mb2xkZXJzX29yX3Bsb3RzLnRzeD81OGY3Il0sIm5hbWVzIjpbIkRpc3BsYXlGb3JkZXJzT3JQbG90cyIsInBsb3RzIiwic2VsZWN0ZWRfcGxvdHMiLCJwbG90c19ncm91cGVkX2J5X2xheW91dHMiLCJpc0xvYWRpbmciLCJ2aWV3UGxvdHNQb3NpdGlvbiIsInByb3BvcnRpb24iLCJlcnJvcnMiLCJmaWx0ZXJlZEZvbGRlcnMiLCJwbG90c0FyZWFSZWYiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFxQk8sSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQVVqQjtBQUFBLE1BVGxCQyxLQVNrQixRQVRsQkEsS0FTa0I7QUFBQSxNQVJsQkMsY0FRa0IsUUFSbEJBLGNBUWtCO0FBQUEsTUFQbEJDLHdCQU9rQixRQVBsQkEsd0JBT2tCO0FBQUEsTUFObEJDLFNBTWtCLFFBTmxCQSxTQU1rQjtBQUFBLE1BTGxCQyxpQkFLa0IsUUFMbEJBLGlCQUtrQjtBQUFBLE1BSmxCQyxVQUlrQixRQUpsQkEsVUFJa0I7QUFBQSxNQUhsQkMsTUFHa0IsUUFIbEJBLE1BR2tCO0FBQUEsTUFGbEJDLGVBRWtCLFFBRmxCQSxlQUVrQjtBQUFBLE1BRGxCQyxZQUNrQixRQURsQkEsWUFDa0I7QUFDcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxTQUFaO0FBQ0UsU0FDRSxNQUFDLHlEQUFEO0FBQ0UsT0FBRyxFQUFFSyxZQURQO0FBRUUsc0JBQWtCLEVBQUVQLGNBQWMsQ0FBQ1UsTUFBZixHQUF3QixDQUF4QixJQUE2QkwsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBRnJFO0FBR0UsWUFBUSxFQUFFUCxpQkFIWjtBQUlFLGNBQVUsRUFBRUMsVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdGLFNBQVMsSUFBSUksZUFBZSxDQUFDSSxNQUFoQixLQUEyQixDQUF4QyxHQUNDLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsR0FLRyw0REFDRyxDQUFDUixTQUFELElBQ0NJLGVBQWUsQ0FBQ0ksTUFBaEIsS0FBMkIsQ0FENUIsSUFFQ1gsS0FBSyxDQUFDVyxNQUFOLEtBQWlCLENBRmxCLElBR0NMLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUhuQixHQUlHLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpILEdBS0tMLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUFsQixHQUNGLDREQUNFLE1BQUMsc0VBQUQ7QUFBVyxTQUFLLEVBQUMsTUFBakI7QUFBd0IsU0FBSyxFQUFFLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQWEsZUFBVyxFQUFFSixlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxTQUFLLEVBQUVQLEtBRFQ7QUFFRSxrQkFBYyxFQUFFQyxjQUZsQjtBQUdFLDRCQUF3QixFQUFFQyx3QkFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERSxHQWNBLENBQUNDLFNBQUQsSUFDQUcsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLENBRGhCLElBRUFMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxXQUNULE1BQUMsb0VBQUQ7QUFBYSxTQUFHLEVBQUVBLEtBQWxCO0FBQXlCLGFBQU8sRUFBRUEsS0FBbEM7QUFBeUMsVUFBSSxFQUFDLE9BQTlDO0FBQXNELGNBQVEsTUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBWCxDQXRCUixDQVhOLENBREY7QUEwQ0QsQ0F0RE07S0FBTWQscUIiLCJmaWxlIjoiLi9jb250YWluZXJzL2Rpc3BsYXkvY29udGVudC9kaXNwbGF5X2ZvbGRlcnNfb3JfcGxvdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBTcGlubmVyV3JhcHBlcixcclxuICBTcGlubmVyLFxyXG4gIFN0eWxlZEFsZXJ0LFxyXG59IGZyb20gJy4uLy4uL3NlYXJjaC9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTm9SZXN1bHRzRm91bmQgfSBmcm9tICcuLi8uLi9zZWFyY2gvbm9SZXN1bHRzRm91bmQnO1xyXG5pbXBvcnQgeyBDdXN0b21Sb3cgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEaXJlY3RvcmllcyB9IGZyb20gJy4vZGlyZWN0b3JpZXMnO1xyXG5pbXBvcnQgeyBMZWZ0U2lkZVBsb3RzIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wbG90cy9wbG90JztcclxuaW1wb3J0IHtcclxuICBQbG90RGF0YVByb3BzLFxyXG4gIFBsb3RzR3JvdXBlZEJ5TGF5b3V0c0ludGVyZmFjZSxcclxuICBPcHRpb25Qcm9wcyxcclxuICBRdWVyeVByb3BzLFxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRlbnRQcm9wcyB7XHJcbiAgcGxvdHM6IFBsb3REYXRhUHJvcHNbXTtcclxuICBzZWxlY3RlZF9wbG90czogYW55W107XHJcbiAgcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzPzogUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICB2aWV3UGxvdHNQb3NpdGlvbjogT3B0aW9uUHJvcHM7XHJcbiAgcHJvcG9ydGlvbjogT3B0aW9uUHJvcHM7XHJcbiAgZXJyb3JzOiBzdHJpbmdbXTtcclxuICBmaWx0ZXJlZEZvbGRlcnM6IGFueVtdO1xyXG4gIHF1ZXJ5OiBRdWVyeVByb3BzO1xyXG4gIHBsb3RzQXJlYVJlZjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlzcGxheUZvcmRlcnNPclBsb3RzID0gKHtcclxuICBwbG90cyxcclxuICBzZWxlY3RlZF9wbG90cyxcclxuICBwbG90c19ncm91cGVkX2J5X2xheW91dHMsXHJcbiAgaXNMb2FkaW5nLFxyXG4gIHZpZXdQbG90c1Bvc2l0aW9uLFxyXG4gIHByb3BvcnRpb24sXHJcbiAgZXJyb3JzLFxyXG4gIGZpbHRlcmVkRm9sZGVycyxcclxuICBwbG90c0FyZWFSZWZcclxufTogQ29udGVudFByb3BzKSA9PiB7XHJcbmNvbnNvbGUubG9nKGlzTG9hZGluZylcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgcmVmPXtwbG90c0FyZWFSZWZ9XHJcbiAgICAgIGFueV9zZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHMubGVuZ3RoID4gMCAmJiBlcnJvcnMubGVuZ3RoID09PSAwfVxyXG4gICAgICBwb3NpdGlvbj17dmlld1Bsb3RzUG9zaXRpb259XHJcbiAgICAgIHByb3BvcnRpb249e3Byb3BvcnRpb259XHJcbiAgICA+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgZmlsdGVyZWRGb2xkZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8U3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7IWlzTG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkRm9sZGVycy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICBwbG90cy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICBlcnJvcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPE5vUmVzdWx0c0ZvdW5kIC8+XHJcbiAgICAgICAgICAgICAgKSA6IGVycm9ycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tUm93IHdpZHRoPVwiMTAwJVwiIHNwYWNlPXsnMid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXJlY3RvcmllcyBkaXJlY3Rvcmllcz17ZmlsdGVyZWRGb2xkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0N1c3RvbVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8TGVmdFNpZGVQbG90c1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGxvdHM9e3Bsb3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzPXtwbG90c19ncm91cGVkX2J5X2xheW91dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAhaXNMb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgIGVycm9ycy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGVycm9ycy5tYXAoKGVycm9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEFsZXJ0IGtleT17ZXJyb3J9IG1lc3NhZ2U9e2Vycm9yfSB0eXBlPVwiZXJyb3JcIiBzaG93SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/display/content/display_folders_or_plots.tsx\n");

/***/ })

})