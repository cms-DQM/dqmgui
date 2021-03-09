webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/index.tsx":
/*!*****************************************!*\
  !*** ./components/plots/plot/index.tsx ***!
  \*****************************************/
/*! exports provided: LeftSidePlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftSidePlots\", function() { return LeftSidePlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/leftSideContext */ \"./contexts/leftSideContext.tsx\");\n/* harmony import */ var _plotsWithLayouts_plotsWithLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plotsWithLayouts/plotsWithLayout */ \"./components/plots/plot/plotsWithLayouts/plotsWithLayout.tsx\");\n/* harmony import */ var _plotsWithoutLayouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plotsWithoutLayouts */ \"./components/plots/plot/plotsWithoutLayouts.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ \"./components/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar LeftSidePlots = function LeftSidePlots(_ref) {\n  _s();\n\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      plots_grouped_by_layouts = _ref.plots_grouped_by_layouts,\n      plotsAreaWidth = _ref.plotsAreaWidth;\n  var plots_grouped_by_layouts_checked = plots_grouped_by_layouts ? plots_grouped_by_layouts : {};\n  var globalState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_3__[\"store\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var imageRefScrollDown = globalState.imageRefScrollDown,\n      size = globalState.size,\n      setSize = globalState.setSize;\n\n  if (size.w === _constants__WEBPACK_IMPORTED_MODULE_6__[\"sizes\"].fill.size.w && size.h === _constants__WEBPACK_IMPORTED_MODULE_6__[\"sizes\"].fill.size.h) {\n    var ratio = size.w / size.h;\n    var newHeight = Math.floor(plotsAreaWidth / ratio);\n    var newWidth = plotsAreaWidth; // setSize({w: newWidth, h: newHeight})\n\n    console.log({\n      w: newWidth,\n      h: newHeight\n    });\n  }\n\n  if (plots.length > 0) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"functions_config\"].new_back_end.layouts && Object.keys(plots_grouped_by_layouts_checked).length !== 0 ? __jsx(_plotsWithLayouts_plotsWithLayout__WEBPACK_IMPORTED_MODULE_4__[\"PlotsWithLayout\"], {\n      plots_grouped_by_layouts: plots_grouped_by_layouts_checked,\n      selected_plots: selected_plots,\n      query: query,\n      imageRefScrollDown: imageRefScrollDown,\n      globalState: globalState,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }) : __jsx(_plotsWithoutLayouts__WEBPACK_IMPORTED_MODULE_5__[\"PlotsWithoutLayouts\"], {\n      plots: plots,\n      selected_plots: selected_plots,\n      query: query,\n      imageRefScrollDown: imageRefScrollDown,\n      globalState: globalState,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);\n};\n\n_s(LeftSidePlots, \"wN/sXo1Q7JeaUZSy/IPQ1dGHSUo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = LeftSidePlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"LeftSidePlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L2luZGV4LnRzeD8xZjQ1Il0sIm5hbWVzIjpbIkxlZnRTaWRlUGxvdHMiLCJwbG90cyIsInNlbGVjdGVkX3Bsb3RzIiwicGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzIiwicGxvdHNBcmVhV2lkdGgiLCJwbG90c19ncm91cGVkX2J5X2xheW91dHNfY2hlY2tlZCIsImdsb2JhbFN0YXRlIiwidXNlQ29udGV4dCIsInN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJpbWFnZVJlZlNjcm9sbERvd24iLCJzaXplIiwic2V0U2l6ZSIsInciLCJzaXplcyIsImZpbGwiLCJoIiwicmF0aW8iLCJuZXdIZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJuZXdXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmdW5jdGlvbnNfY29uZmlnIiwibmV3X2JhY2tfZW5kIiwibGF5b3V0cyIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQVNPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FLSDtBQUFBOztBQUFBLE1BSnhCQyxLQUl3QixRQUp4QkEsS0FJd0I7QUFBQSxNQUh4QkMsY0FHd0IsUUFIeEJBLGNBR3dCO0FBQUEsTUFGeEJDLHdCQUV3QixRQUZ4QkEsd0JBRXdCO0FBQUEsTUFEeEJDLGNBQ3dCLFFBRHhCQSxjQUN3QjtBQUN4QixNQUFNQyxnQ0FBZ0MsR0FBR0Ysd0JBQXdCLEdBQzdEQSx3QkFENkQsR0FFN0QsRUFGSjtBQUdBLE1BQU1HLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBOUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBaUIsR0FBR0YsTUFBTSxDQUFDRSxLQUFqQztBQU53QixNQU9oQkMsa0JBUGdCLEdBT3NCTixXQVB0QixDQU9oQk0sa0JBUGdCO0FBQUEsTUFPSUMsSUFQSixHQU9zQlAsV0FQdEIsQ0FPSU8sSUFQSjtBQUFBLE1BT1VDLE9BUFYsR0FPc0JSLFdBUHRCLENBT1VRLE9BUFY7O0FBU3hCLE1BQUlELElBQUksQ0FBQ0UsQ0FBTCxLQUFXQyxnREFBSyxDQUFDQyxJQUFOLENBQVdKLElBQVgsQ0FBZ0JFLENBQTNCLElBQWdDRixJQUFJLENBQUNLLENBQUwsS0FBV0YsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXSixJQUFYLENBQWdCSyxDQUEvRCxFQUFtRTtBQUNqRSxRQUFNQyxLQUFLLEdBQUdOLElBQUksQ0FBQ0UsQ0FBTCxHQUFTRixJQUFJLENBQUNLLENBQTVCO0FBQ0EsUUFBTUUsU0FBUyxHQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2xCLGNBQWMsR0FBR2UsS0FBNUIsQ0FBbkI7QUFDQSxRQUFNSSxRQUFRLEdBQUVuQixjQUFoQixDQUhpRSxDQUlqRTs7QUFDQW9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNWLE9BQUMsRUFBRVEsUUFBSjtBQUFjTCxPQUFDLEVBQUVFO0FBQWpCLEtBQVo7QUFDRDs7QUFFRCxNQUFJbkIsS0FBSyxDQUFDeUIsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFdBQ0UsbUVBQ0dDLCtEQUFnQixDQUFDQyxZQUFqQixDQUE4QkMsT0FBOUIsSUFDQUMsTUFBTSxDQUFDQyxJQUFQLENBQVkxQixnQ0FBWixFQUE4Q3FCLE1BQTlDLEtBQXlELENBRHpELEdBRUMsTUFBQyxpRkFBRDtBQUNFLDhCQUF3QixFQUFFckIsZ0NBRDVCO0FBRUUsb0JBQWMsRUFBRUgsY0FGbEI7QUFHRSxXQUFLLEVBQUVTLEtBSFQ7QUFJRSx3QkFBa0IsRUFBRUMsa0JBSnRCO0FBS0UsaUJBQVcsRUFBRU4sV0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkQsR0FVQyxNQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFTCxLQURUO0FBRUUsb0JBQWMsRUFBRUMsY0FGbEI7QUFHRSxXQUFLLEVBQUVTLEtBSFQ7QUFJRSx3QkFBa0IsRUFBRUMsa0JBSnRCO0FBS0UsaUJBQVcsRUFBRU4sV0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEosQ0FERjtBQXNCRDs7QUFDRCxTQUFPLGtFQUFQO0FBQ0QsQ0EvQ007O0dBQU1OLGE7VUFVSVUscUQ7OztLQVZKVixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbG90cy9wbG90L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBmdW5jdGlvbnNfY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvbGVmdFNpZGVDb250ZXh0JztcclxuaW1wb3J0IHtcclxuICBRdWVyeVByb3BzLFxyXG4gIFBsb3REYXRhUHJvcHMsXHJcbiAgUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlLFxyXG59IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUGxvdHNXaXRoTGF5b3V0IH0gZnJvbSAnLi9wbG90c1dpdGhMYXlvdXRzL3Bsb3RzV2l0aExheW91dCc7XHJcbmltcG9ydCB7IFBsb3RzV2l0aG91dExheW91dHMgfSBmcm9tICcuL3Bsb3RzV2l0aG91dExheW91dHMnO1xyXG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG5pbnRlcmZhY2UgTGVmdFNpZGVQbG90c1Byb3BzIHtcclxuICBwbG90czogUGxvdERhdGFQcm9wc1tdO1xyXG4gIHNlbGVjdGVkX3Bsb3RzOiBhbnk7XHJcbiAgcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzPzogUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlO1xyXG4gIHBsb3RzQXJlYVdpZHRoOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRTaWRlUGxvdHMgPSAoe1xyXG4gIHBsb3RzLFxyXG4gIHNlbGVjdGVkX3Bsb3RzLFxyXG4gIHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0cyxcclxuICBwbG90c0FyZWFXaWR0aFxyXG59OiBMZWZ0U2lkZVBsb3RzUHJvcHMpID0+IHtcclxuICBjb25zdCBwbG90c19ncm91cGVkX2J5X2xheW91dHNfY2hlY2tlZCA9IHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c1xyXG4gICAgPyBwbG90c19ncm91cGVkX2J5X2xheW91dHNcclxuICAgIDoge307XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VDb250ZXh0KHN0b3JlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBxdWVyeTogUXVlcnlQcm9wcyA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IGltYWdlUmVmU2Nyb2xsRG93biwgc2l6ZSwgc2V0U2l6ZSB9ID0gZ2xvYmFsU3RhdGU7XHJcbiAgXHJcbiAgaWYgKHNpemUudyA9PT0gc2l6ZXMuZmlsbC5zaXplLncgJiYgc2l6ZS5oID09PSBzaXplcy5maWxsLnNpemUuaCApIHtcclxuICAgIGNvbnN0IHJhdGlvID0gc2l6ZS53IC8gc2l6ZS5oXHJcbiAgICBjb25zdCBuZXdIZWlnaHQgPSAgTWF0aC5mbG9vcihwbG90c0FyZWFXaWR0aCAvIHJhdGlvKVxyXG4gICAgY29uc3QgbmV3V2lkdGggPXBsb3RzQXJlYVdpZHRoXHJcbiAgICAvLyBzZXRTaXplKHt3OiBuZXdXaWR0aCwgaDogbmV3SGVpZ2h0fSlcclxuICAgIGNvbnNvbGUubG9nKHt3OiBuZXdXaWR0aCwgaDogbmV3SGVpZ2h0fSlcclxuICB9XHJcblxyXG4gIGlmIChwbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtmdW5jdGlvbnNfY29uZmlnLm5ld19iYWNrX2VuZC5sYXlvdXRzICYmXHJcbiAgICAgICAgIE9iamVjdC5rZXlzKHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c19jaGVja2VkKS5sZW5ndGggIT09IDAgID8gKFxyXG4gICAgICAgICAgPFBsb3RzV2l0aExheW91dFxyXG4gICAgICAgICAgICBwbG90c19ncm91cGVkX2J5X2xheW91dHM9e3Bsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c19jaGVja2VkfVxyXG4gICAgICAgICAgICBzZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHN9XHJcbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICAgICAgaW1hZ2VSZWZTY3JvbGxEb3duPXtpbWFnZVJlZlNjcm9sbERvd259XHJcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlPXtnbG9iYWxTdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxQbG90c1dpdGhvdXRMYXlvdXRzXHJcbiAgICAgICAgICAgIHBsb3RzPXtwbG90c31cclxuICAgICAgICAgICAgc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzfVxyXG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XHJcbiAgICAgICAgICAgIGltYWdlUmVmU2Nyb2xsRG93bj17aW1hZ2VSZWZTY3JvbGxEb3dufVxyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17Z2xvYmFsU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIDw+PC8+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/plots/plot/index.tsx\n");

/***/ })

})