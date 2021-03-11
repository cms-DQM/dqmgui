webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/display/content/display_folders_or_plots.tsx":
/*!*****************************************************************!*\
  !*** ./containers/display/content/display_folders_or_plots.tsx ***!
  \*****************************************************************/
/*! exports provided: DisplayFordersOrPlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayFordersOrPlots\", function() { return DisplayFordersOrPlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _search_styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/styledComponents */ \"./containers/search/styledComponents.tsx\");\n/* harmony import */ var _search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../search/noResultsFound */ \"./containers/search/noResultsFound.tsx\");\n/* harmony import */ var _components_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _directories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directories */ \"./containers/display/content/directories.tsx\");\n/* harmony import */ var _components_plots_plot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/plots/plot */ \"./components/plots/plot/index.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ \"./utils/index.tsx\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/containers/display/content/display_folders_or_plots.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\nvar DisplayFordersOrPlots = function DisplayFordersOrPlots(_ref) {\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      plots_grouped_by_layouts = _ref.plots_grouped_by_layouts,\n      isLoading = _ref.isLoading,\n      viewPlotsPosition = _ref.viewPlotsPosition,\n      proportion = _ref.proportion,\n      errors = _ref.errors,\n      query = _ref.query,\n      filteredFolders = _ref.filteredFolders,\n      plotsAreaRef = _ref.plotsAreaRef;\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    ref: plotsAreaRef,\n    any_selected_plots: selected_plots.length > 0 && errors.length === 0,\n    position: viewPlotsPosition,\n    proportion: proportion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"isItLiveMode\"])({\n    run_number: query.run_number,\n    dataset_name: query.dataset_name\n  }) && isLoading && filteredFolders.length === 0 || !Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"isItLiveMode\"])({\n    run_number: query.run_number,\n    dataset_name: query.dataset_name\n  }) && isLoading ? __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"SpinnerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"Spinner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, !isLoading && filteredFolders.length === 0 && plots.length === 0 && errors.length === 0 ? __jsx(_search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__[\"NoResultsFound\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }) : errors.length === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"CustomRow\"], {\n    width: \"100%\",\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  }, __jsx(_directories__WEBPACK_IMPORTED_MODULE_6__[\"Directories\"], {\n    isLoading: isLoading,\n    directories: filteredFolders,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 19\n    }\n  }, __jsx(_components_plots_plot__WEBPACK_IMPORTED_MODULE_7__[\"LeftSidePlots\"], {\n    plots: plots,\n    selected_plots: selected_plots,\n    plots_grouped_by_layouts: plots_grouped_by_layouts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 21\n    }\n  }))) : !isLoading && errors.length > 0 && errors.map(function (error) {\n    return __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"StyledAlert\"], {\n      key: error,\n      message: 'ss',\n      type: \"error\",\n      showIcon: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n_c = DisplayFordersOrPlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"DisplayFordersOrPlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9kaXNwbGF5L2NvbnRlbnQvZGlzcGxheV9mb2xkZXJzX29yX3Bsb3RzLnRzeD81OGY3Il0sIm5hbWVzIjpbIkRpc3BsYXlGb3JkZXJzT3JQbG90cyIsInBsb3RzIiwic2VsZWN0ZWRfcGxvdHMiLCJwbG90c19ncm91cGVkX2J5X2xheW91dHMiLCJpc0xvYWRpbmciLCJ2aWV3UGxvdHNQb3NpdGlvbiIsInByb3BvcnRpb24iLCJlcnJvcnMiLCJxdWVyeSIsImZpbHRlcmVkRm9sZGVycyIsInBsb3RzQXJlYVJlZiIsImxlbmd0aCIsImlzSXRMaXZlTW9kZSIsInJ1bl9udW1iZXIiLCJkYXRhc2V0X25hbWUiLCJtYXAiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQWVPLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FXakI7QUFBQSxNQVZsQkMsS0FVa0IsUUFWbEJBLEtBVWtCO0FBQUEsTUFUbEJDLGNBU2tCLFFBVGxCQSxjQVNrQjtBQUFBLE1BUmxCQyx3QkFRa0IsUUFSbEJBLHdCQVFrQjtBQUFBLE1BUGxCQyxTQU9rQixRQVBsQkEsU0FPa0I7QUFBQSxNQU5sQkMsaUJBTWtCLFFBTmxCQSxpQkFNa0I7QUFBQSxNQUxsQkMsVUFLa0IsUUFMbEJBLFVBS2tCO0FBQUEsTUFKbEJDLE1BSWtCLFFBSmxCQSxNQUlrQjtBQUFBLE1BSGxCQyxLQUdrQixRQUhsQkEsS0FHa0I7QUFBQSxNQUZsQkMsZUFFa0IsUUFGbEJBLGVBRWtCO0FBQUEsTUFEbEJDLFlBQ2tCLFFBRGxCQSxZQUNrQjtBQUVsQixTQUNFLE1BQUMseURBQUQ7QUFDRSxPQUFHLEVBQUVBLFlBRFA7QUFFRSxzQkFBa0IsRUFBRVIsY0FBYyxDQUFDUyxNQUFmLEdBQXdCLENBQXhCLElBQTZCSixNQUFNLENBQUNJLE1BQVAsS0FBa0IsQ0FGckU7QUFHRSxZQUFRLEVBQUVOLGlCQUhaO0FBSUUsY0FBVSxFQUFFQyxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR00sMkRBQVksQ0FBQztBQUFFQyxjQUFVLEVBQUVMLEtBQUssQ0FBQ0ssVUFBcEI7QUFBZ0NDLGdCQUFZLEVBQUVOLEtBQUssQ0FBQ007QUFBcEQsR0FBRCxDQUFaLElBQW9GVixTQUFwRixJQUFpR0ssZUFBZSxDQUFDRSxNQUFoQixLQUEyQixDQUE1SCxJQUNJLENBQUNDLDJEQUFZLENBQUM7QUFBRUMsY0FBVSxFQUFFTCxLQUFLLENBQUNLLFVBQXBCO0FBQWdDQyxnQkFBWSxFQUFFTixLQUFLLENBQUNNO0FBQXBELEdBQUQsQ0FBYixJQUFxRlYsU0FEekYsR0FFRyxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZILEdBTUcsNERBQ0csQ0FBQ0EsU0FBRCxJQUNDSyxlQUFlLENBQUNFLE1BQWhCLEtBQTJCLENBRDVCLElBRUNWLEtBQUssQ0FBQ1UsTUFBTixLQUFpQixDQUZsQixJQUdDSixNQUFNLENBQUNJLE1BQVAsS0FBa0IsQ0FIbkIsR0FJRyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSCxHQUtLSixNQUFNLENBQUNJLE1BQVAsS0FBa0IsQ0FBbEIsR0FDRiw0REFDRSxNQUFDLHNFQUFEO0FBQVcsU0FBSyxFQUFDLE1BQWpCO0FBQXdCLFNBQUssRUFBRSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNBLGFBQVMsRUFBRVAsU0FEWDtBQUVBLGVBQVcsRUFBRUssZUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU1FLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxTQUFLLEVBQUVSLEtBRFQ7QUFFRSxrQkFBYyxFQUFFQyxjQUZsQjtBQUdFLDRCQUF3QixFQUFFQyx3QkFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERSxHQWdCQSxDQUFDQyxTQUFELElBQ0FHLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixDQURoQixJQUVBSixNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsV0FDVCxNQUFDLG9FQUFEO0FBQWEsU0FBRyxFQUFFQSxLQUFsQjtBQUF5QixhQUFPLEVBQUUsSUFBbEM7QUFBd0MsVUFBSSxFQUFDLE9BQTdDO0FBQXFELGNBQVEsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBWCxDQXhCUixDQVpOLENBREY7QUE2Q0QsQ0ExRE07S0FBTWhCLHFCIiwiZmlsZSI6Ii4vY29udGFpbmVycy9kaXNwbGF5L2NvbnRlbnQvZGlzcGxheV9mb2xkZXJzX29yX3Bsb3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnLi4vc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgU3Bpbm5lcldyYXBwZXIsXHJcbiAgU3Bpbm5lcixcclxuICBTdHlsZWRBbGVydCxcclxufSBmcm9tICcuLi8uLi9zZWFyY2gvc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE5vUmVzdWx0c0ZvdW5kIH0gZnJvbSAnLi4vLi4vc2VhcmNoL25vUmVzdWx0c0ZvdW5kJztcclxuaW1wb3J0IHsgQ3VzdG9tUm93IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGlyZWN0b3JpZXMgfSBmcm9tICcuL2RpcmVjdG9yaWVzJztcclxuaW1wb3J0IHsgTGVmdFNpZGVQbG90cyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGxvdHMvcGxvdCc7XHJcbmltcG9ydCB7XHJcbiAgUGxvdERhdGFQcm9wcyxcclxuICBQbG90c0dyb3VwZWRCeUxheW91dHNJbnRlcmZhY2UsXHJcbiAgT3B0aW9uUHJvcHMsXHJcbiAgUXVlcnlQcm9wcyxcclxufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaXNJdExpdmVNb2RlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRlbnRQcm9wcyB7XHJcbiAgcGxvdHM6IFBsb3REYXRhUHJvcHNbXTtcclxuICBzZWxlY3RlZF9wbG90czogYW55W107XHJcbiAgcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzPzogUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICB2aWV3UGxvdHNQb3NpdGlvbjogT3B0aW9uUHJvcHM7XHJcbiAgcHJvcG9ydGlvbjogT3B0aW9uUHJvcHM7XHJcbiAgZXJyb3JzOiBzdHJpbmdbXTtcclxuICBmaWx0ZXJlZEZvbGRlcnM6IGFueVtdO1xyXG4gIHF1ZXJ5OiBRdWVyeVByb3BzO1xyXG4gIHBsb3RzQXJlYVJlZjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlzcGxheUZvcmRlcnNPclBsb3RzID0gKHtcclxuICBwbG90cyxcclxuICBzZWxlY3RlZF9wbG90cyxcclxuICBwbG90c19ncm91cGVkX2J5X2xheW91dHMsXHJcbiAgaXNMb2FkaW5nLFxyXG4gIHZpZXdQbG90c1Bvc2l0aW9uLFxyXG4gIHByb3BvcnRpb24sXHJcbiAgZXJyb3JzLFxyXG4gIHF1ZXJ5LFxyXG4gIGZpbHRlcmVkRm9sZGVycyxcclxuICBwbG90c0FyZWFSZWZcclxufTogQ29udGVudFByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICByZWY9e3Bsb3RzQXJlYVJlZn1cclxuICAgICAgYW55X3NlbGVjdGVkX3Bsb3RzPXtzZWxlY3RlZF9wbG90cy5sZW5ndGggPiAwICYmIGVycm9ycy5sZW5ndGggPT09IDB9XHJcbiAgICAgIHBvc2l0aW9uPXt2aWV3UGxvdHNQb3NpdGlvbn1cclxuICAgICAgcHJvcG9ydGlvbj17cHJvcG9ydGlvbn1cclxuICAgID5cclxuICAgICAge2lzSXRMaXZlTW9kZSh7IHJ1bl9udW1iZXI6IHF1ZXJ5LnJ1bl9udW1iZXIsIGRhdGFzZXRfbmFtZTogcXVlcnkuZGF0YXNldF9uYW1lIH0pICYmIGlzTG9hZGluZyAmJiBmaWx0ZXJlZEZvbGRlcnMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgfHwgIWlzSXRMaXZlTW9kZSh7IHJ1bl9udW1iZXI6IHF1ZXJ5LnJ1bl9udW1iZXIsIGRhdGFzZXRfbmFtZTogcXVlcnkuZGF0YXNldF9uYW1lIH0pICYmIGlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxTcGlubmVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgIDwvU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHshaXNMb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRGb2xkZXJzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgIHBsb3RzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgIGVycm9ycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8Tm9SZXN1bHRzRm91bmQgLz5cclxuICAgICAgICAgICAgICApIDogZXJyb3JzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxDdXN0b21Sb3cgd2lkdGg9XCIxMDAlXCIgc3BhY2U9eycyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpcmVjdG9yaWVzIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yaWVzPXtmaWx0ZXJlZEZvbGRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ3VzdG9tUm93PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWZ0U2lkZVBsb3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbG90cz17cGxvdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbG90c19ncm91cGVkX2J5X2xheW91dHM9e3Bsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICFpc0xvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzLm1hcCgoZXJyb3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQWxlcnQga2V5PXtlcnJvcn0gbWVzc2FnZT17J3NzJ30gdHlwZT1cImVycm9yXCIgc2hvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/display/content/display_folders_or_plots.tsx\n");

/***/ })

})