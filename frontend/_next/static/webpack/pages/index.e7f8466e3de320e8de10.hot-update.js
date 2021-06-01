webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/display/content/display_folders_or_plots.tsx":
/*!*****************************************************************!*\
  !*** ./containers/display/content/display_folders_or_plots.tsx ***!
  \*****************************************************************/
/*! exports provided: DisplayFordersOrPlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayFordersOrPlots\", function() { return DisplayFordersOrPlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styledComponents */ \"./containers/display/styledComponents.tsx\");\n/* harmony import */ var _search_styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/styledComponents */ \"./containers/search/styledComponents.tsx\");\n/* harmony import */ var _search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../search/noResultsFound */ \"./containers/search/noResultsFound.tsx\");\n/* harmony import */ var _components_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _directories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directories */ \"./containers/display/content/directories.tsx\");\n/* harmony import */ var _components_plots_plot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/plots/plot */ \"./components/plots/plot/index.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ \"./utils/index.tsx\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/containers/display/content/display_folders_or_plots.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\n\nvar DisplayFordersOrPlots = function DisplayFordersOrPlots(_ref) {\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      plots_grouped_by_layouts = _ref.plots_grouped_by_layouts,\n      isLoading = _ref.isLoading,\n      viewPlotsPosition = _ref.viewPlotsPosition,\n      proportion = _ref.proportion,\n      errors = _ref.errors,\n      query = _ref.query,\n      filteredFolders = _ref.filteredFolders,\n      plotsAreaRef = _ref.plotsAreaRef,\n      blink = _ref.blink;\n  console.log(plots_grouped_by_layouts);\n  var live_mode_is_on = Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"isItLiveMode\"])({\n    run_number: query.run_number,\n    dataset_name: query.dataset_name\n  });\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    ref: plotsAreaRef,\n    any_selected_plots: selected_plots.length > 0 && errors.length === 0,\n    position: viewPlotsPosition,\n    proportion: proportion,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, live_mode_is_on && isLoading && filteredFolders.length === 0 || !live_mode_is_on && isLoading ? __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"SpinnerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"Spinner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, !isLoading && filteredFolders.length === 0 && plots.length === 0 && errors.length === 0 ? __jsx(_search_noResultsFound__WEBPACK_IMPORTED_MODULE_4__[\"NoResultsFound\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }) : errors.length === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_5__[\"CustomRow\"], {\n    width: \"100%\",\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, __jsx(_directories__WEBPACK_IMPORTED_MODULE_6__[\"Directories\"], {\n    blink: blink,\n    isLoading: isLoading,\n    directories: filteredFolders,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, __jsx(_components_plots_plot__WEBPACK_IMPORTED_MODULE_7__[\"LeftSidePlots\"], {\n    plots: plots,\n    selected_plots: selected_plots,\n    plots_grouped_by_layouts: plots_grouped_by_layouts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }))) : !isLoading && errors.length > 0 && __jsx(_search_styledComponents__WEBPACK_IMPORTED_MODULE_3__[\"StyledAlert\"], {\n    key: errors,\n    message: errors,\n    type: \"error\",\n    showIcon: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })));\n};\n_c = DisplayFordersOrPlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"DisplayFordersOrPlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9kaXNwbGF5L2NvbnRlbnQvZGlzcGxheV9mb2xkZXJzX29yX3Bsb3RzLnRzeD81OGY3Il0sIm5hbWVzIjpbIkRpc3BsYXlGb3JkZXJzT3JQbG90cyIsInBsb3RzIiwic2VsZWN0ZWRfcGxvdHMiLCJwbG90c19ncm91cGVkX2J5X2xheW91dHMiLCJpc0xvYWRpbmciLCJ2aWV3UGxvdHNQb3NpdGlvbiIsInByb3BvcnRpb24iLCJlcnJvcnMiLCJxdWVyeSIsImZpbHRlcmVkRm9sZGVycyIsInBsb3RzQXJlYVJlZiIsImJsaW5rIiwiY29uc29sZSIsImxvZyIsImxpdmVfbW9kZV9pc19vbiIsImlzSXRMaXZlTW9kZSIsInJ1bl9udW1iZXIiLCJkYXRhc2V0X25hbWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFpQk8sSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQVlqQjtBQUFBLE1BWGxCQyxLQVdrQixRQVhsQkEsS0FXa0I7QUFBQSxNQVZsQkMsY0FVa0IsUUFWbEJBLGNBVWtCO0FBQUEsTUFUbEJDLHdCQVNrQixRQVRsQkEsd0JBU2tCO0FBQUEsTUFSbEJDLFNBUWtCLFFBUmxCQSxTQVFrQjtBQUFBLE1BUGxCQyxpQkFPa0IsUUFQbEJBLGlCQU9rQjtBQUFBLE1BTmxCQyxVQU1rQixRQU5sQkEsVUFNa0I7QUFBQSxNQUxsQkMsTUFLa0IsUUFMbEJBLE1BS2tCO0FBQUEsTUFKbEJDLEtBSWtCLFFBSmxCQSxLQUlrQjtBQUFBLE1BSGxCQyxlQUdrQixRQUhsQkEsZUFHa0I7QUFBQSxNQUZsQkMsWUFFa0IsUUFGbEJBLFlBRWtCO0FBQUEsTUFEbEJDLEtBQ2tCLFFBRGxCQSxLQUNrQjtBQUNwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLHdCQUFaO0FBQ0UsTUFBTVcsZUFBZSxHQUFHQywyREFBWSxDQUFDO0FBQUVDLGNBQVUsRUFBRVIsS0FBSyxDQUFDUSxVQUFwQjtBQUFnQ0MsZ0JBQVksRUFBRVQsS0FBSyxDQUFDUztBQUFwRCxHQUFELENBQXBDO0FBQ0EsU0FDRSxNQUFDLHlEQUFEO0FBQ0UsT0FBRyxFQUFFUCxZQURQO0FBRUUsc0JBQWtCLEVBQUVSLGNBQWMsQ0FBQ2dCLE1BQWYsR0FBd0IsQ0FBeEIsSUFBNkJYLE1BQU0sQ0FBQ1csTUFBUCxLQUFrQixDQUZyRTtBQUdFLFlBQVEsRUFBRWIsaUJBSFo7QUFJRSxjQUFVLEVBQUVDLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JUSxlQUFlLElBQUlWLFNBQW5CLElBQWdDSyxlQUFlLENBQUNTLE1BQWhCLEtBQTJCLENBQTNELElBQ0csQ0FBQ0osZUFBRCxJQUFvQlYsU0FEdkIsR0FFQSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZBLEdBTUEsNERBRUksQ0FBQ0EsU0FBRCxJQUNFSyxlQUFlLENBQUNTLE1BQWhCLEtBQTJCLENBRDdCLElBRUVqQixLQUFLLENBQUNpQixNQUFOLEtBQWlCLENBRm5CLElBR0VYLE1BQU0sQ0FBQ1csTUFBUCxLQUFrQixDQUhwQixHQUlFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEdBS0lYLE1BQU0sQ0FBQ1csTUFBUCxLQUFrQixDQUFsQixHQUNKLDREQUNFLE1BQUMsc0VBQUQ7QUFBVyxTQUFLLEVBQUMsTUFBakI7QUFBd0IsU0FBSyxFQUFFLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFUCxLQURUO0FBRUUsYUFBUyxFQUFFUCxTQUZiO0FBR0UsZUFBVyxFQUFFSyxlQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBT0UsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFNBQUssRUFBRVIsS0FEVDtBQUVFLGtCQUFjLEVBQUVDLGNBRmxCO0FBR0UsNEJBQXdCLEVBQUVDLHdCQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQURJLEdBaUJKLENBQUNDLFNBQUQsSUFDQUcsTUFBTSxDQUFDVyxNQUFQLEdBQWdCLENBRGhCLElBRUEsTUFBQyxvRUFBRDtBQUFhLE9BQUcsRUFBRVgsTUFBbEI7QUFBMEIsV0FBTyxFQUFFQSxNQUFuQztBQUEyQyxRQUFJLEVBQUMsT0FBaEQ7QUFBd0QsWUFBUSxNQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLENBYkosQ0FERjtBQThDRCxDQTdETTtLQUFNUCxxQiIsImZpbGUiOiIuL2NvbnRhaW5lcnMvZGlzcGxheS9jb250ZW50L2Rpc3BsYXlfZm9sZGVyc19vcl9wbG90cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIFNwaW5uZXJXcmFwcGVyLFxyXG4gIFNwaW5uZXIsXHJcbiAgU3R5bGVkQWxlcnQsXHJcbn0gZnJvbSAnLi4vLi4vc2VhcmNoL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBOb1Jlc3VsdHNGb3VuZCB9IGZyb20gJy4uLy4uL3NlYXJjaC9ub1Jlc3VsdHNGb3VuZCc7XHJcbmltcG9ydCB7IEN1c3RvbVJvdyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERpcmVjdG9yaWVzIH0gZnJvbSAnLi9kaXJlY3Rvcmllcyc7XHJcbmltcG9ydCB7IExlZnRTaWRlUGxvdHMgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3Bsb3RzL3Bsb3QnO1xyXG5pbXBvcnQge1xyXG4gIFBsb3REYXRhUHJvcHMsXHJcbiAgUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlLFxyXG4gIE9wdGlvblByb3BzLFxyXG4gIFF1ZXJ5UHJvcHMsXHJcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGlzSXRMaXZlTW9kZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xyXG4gIHBsb3RzOiBQbG90RGF0YVByb3BzW107XHJcbiAgc2VsZWN0ZWRfcGxvdHM6IGFueVtdO1xyXG4gIHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0cz86IFBsb3RzR3JvdXBlZEJ5TGF5b3V0c0ludGVyZmFjZTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgdmlld1Bsb3RzUG9zaXRpb246IE9wdGlvblByb3BzO1xyXG4gIHByb3BvcnRpb246IE9wdGlvblByb3BzO1xyXG4gIGVycm9yczogc3RyaW5nO1xyXG4gIGZpbHRlcmVkRm9sZGVyczogYW55W107XHJcbiAgcXVlcnk6IFF1ZXJ5UHJvcHM7XHJcbiAgcGxvdHNBcmVhUmVmOiBhbnk7XHJcbiAgYmxpbms6IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEaXNwbGF5Rm9yZGVyc09yUGxvdHMgPSAoe1xyXG4gIHBsb3RzLFxyXG4gIHNlbGVjdGVkX3Bsb3RzLFxyXG4gIHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0cyxcclxuICBpc0xvYWRpbmcsXHJcbiAgdmlld1Bsb3RzUG9zaXRpb24sXHJcbiAgcHJvcG9ydGlvbixcclxuICBlcnJvcnMsXHJcbiAgcXVlcnksXHJcbiAgZmlsdGVyZWRGb2xkZXJzLFxyXG4gIHBsb3RzQXJlYVJlZixcclxuICBibGlua1xyXG59OiBDb250ZW50UHJvcHMpID0+IHtcclxuY29uc29sZS5sb2cocGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzKVxyXG4gIGNvbnN0IGxpdmVfbW9kZV9pc19vbiA9IGlzSXRMaXZlTW9kZSh7IHJ1bl9udW1iZXI6IHF1ZXJ5LnJ1bl9udW1iZXIsIGRhdGFzZXRfbmFtZTogcXVlcnkuZGF0YXNldF9uYW1lIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIHJlZj17cGxvdHNBcmVhUmVmfVxyXG4gICAgICBhbnlfc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzLmxlbmd0aCA+IDAgJiYgZXJyb3JzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgcG9zaXRpb249e3ZpZXdQbG90c1Bvc2l0aW9ufVxyXG4gICAgICBwcm9wb3J0aW9uPXtwcm9wb3J0aW9ufVxyXG4gICAgPlxyXG5cclxuICAgICAgeyBsaXZlX21vZGVfaXNfb24gJiYgaXNMb2FkaW5nICYmIGZpbHRlcmVkRm9sZGVycy5sZW5ndGggPT09IDBcclxuICAgICAgICB8fCAhbGl2ZV9tb2RlX2lzX29uICYmIGlzTG9hZGluZyA/IChcclxuICAgICAgICA8U3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIWlzTG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkRm9sZGVycy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICBwbG90cy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICBlcnJvcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxOb1Jlc3VsdHNGb3VuZCAvPlxyXG4gICAgICAgICAgICApIDogZXJyb3JzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q3VzdG9tUm93IHdpZHRoPVwiMTAwJVwiIHNwYWNlPXsnMid9PlxyXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgIGJsaW5rPXtibGlua31cclxuICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yaWVzPXtmaWx0ZXJlZEZvbGRlcnN9IC8+XHJcbiAgICAgICAgICAgICAgPC9DdXN0b21Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxMZWZ0U2lkZVBsb3RzXHJcbiAgICAgICAgICAgICAgICAgIHBsb3RzPXtwbG90c31cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzfVxyXG4gICAgICAgICAgICAgICAgICBwbG90c19ncm91cGVkX2J5X2xheW91dHM9e3Bsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgIWlzTG9hZGluZyAmJlxyXG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8U3R5bGVkQWxlcnQga2V5PXtlcnJvcnN9IG1lc3NhZ2U9e2Vycm9yc30gdHlwZT1cImVycm9yXCIgc2hvd0ljb24gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/display/content/display_folders_or_plots.tsx\n");

/***/ })

})