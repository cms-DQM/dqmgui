webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sizeChanger.tsx":
/*!************************************!*\
  !*** ./components/sizeChanger.tsx ***!
  \************************************/
/*! exports provided: SizeChanger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeChanger\", function() { return SizeChanger; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButtonsGroup */ \"./components/radioButtonsGroup.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/sizeChanger.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar formatOptions = function formatOptions() {\n  var sizesKeys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"]);\n  var options = sizesKeys.map(function (sizeKey) {\n    //@ts-ignore\n    return {\n      label: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].label,\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].size\n    };\n  });\n  return options;\n};\n\nvar SizeChanger = function SizeChanger(_ref) {\n  _s();\n\n  var setSize = _ref.setSize,\n      currentValue = _ref.currentValue,\n      disabled = _ref.disabled,\n      plotsAreaWidth = _ref.plotsAreaWidth;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      return setSize(currentValue);\n    };\n  }, []);\n  return __jsx(_radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonsGroup\"], {\n    disabled: disabled,\n    current_value: currentValue,\n    getOptionLabel: function getOptionLabel(option) {\n      return option.label;\n    },\n    getOptionValue: function getOptionValue(option) {\n      return option.value;\n    },\n    action: function action(value) {\n      if (value.w === _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.w && value.h === _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.h) {\n        var ratio = value.w / value.h;\n        var newHeight = Math.floor(plotsAreaWidth / ratio);\n        var newWidth = plotsAreaWidth;\n        setSize({\n          h: newHeight,\n          w: newWidth\n        });\n      } else {\n        setSize(value);\n      }\n    },\n    options: formatOptions(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(SizeChanger, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = SizeChanger;\n\nvar _c;\n\n$RefreshReg$(_c, \"SizeChanger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaXplQ2hhbmdlci50c3g/ZWJmMCJdLCJuYW1lcyI6WyJmb3JtYXRPcHRpb25zIiwic2l6ZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNpemVzIiwib3B0aW9ucyIsIm1hcCIsInNpemVLZXkiLCJsYWJlbCIsInZhbHVlIiwic2l6ZSIsIlNpemVDaGFuZ2VyIiwic2V0U2l6ZSIsImN1cnJlbnRWYWx1ZSIsImRpc2FibGVkIiwicGxvdHNBcmVhV2lkdGgiLCJ1c2VFZmZlY3QiLCJvcHRpb24iLCJ3IiwiZmlsbCIsImgiLCJyYXRpbyIsIm5ld0hlaWdodCIsIk1hdGgiLCJmbG9vciIsIm5ld1dpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0RBQVosQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLE9BQUQsRUFBcUI7QUFDakQ7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUosZ0RBQUssQ0FBQ0csT0FBRCxDQUFMLENBQWVDLEtBQXhCO0FBQStCQyxXQUFLLEVBQUVMLGdEQUFLLENBQUNHLE9BQUQsQ0FBTCxDQUFlRztBQUFyRCxLQUFQO0FBQ0QsR0FIZSxDQUFoQjtBQUlBLFNBQU9MLE9BQVA7QUFDRCxDQVBEOztBQVNPLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BS0g7QUFBQTs7QUFBQSxNQUp0QkMsT0FJc0IsUUFKdEJBLE9BSXNCO0FBQUEsTUFIdEJDLFlBR3NCLFFBSHRCQSxZQUdzQjtBQUFBLE1BRnRCQyxRQUVzQixRQUZ0QkEsUUFFc0I7QUFBQSxNQUR0QkMsY0FDc0IsUUFEdEJBLGNBQ3NCO0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxXQUFPO0FBQUEsYUFBTUosT0FBTyxDQUFDQyxZQUFELENBQWI7QUFBQSxLQUFQO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUMsUUFEWjtBQUVFLGlCQUFhLEVBQUVELFlBRmpCO0FBR0Usa0JBQWMsRUFBRSx3QkFBQ0ksTUFBRDtBQUFBLGFBQXlCQSxNQUFNLENBQUNULEtBQWhDO0FBQUEsS0FIbEI7QUFJRSxrQkFBYyxFQUFFLHdCQUFDUyxNQUFEO0FBQUEsYUFBeUJBLE1BQU0sQ0FBQ1IsS0FBaEM7QUFBQSxLQUpsQjtBQUtFLFVBQU0sRUFBRSxnQkFBQ0EsS0FBRCxFQUFzQjtBQUM1QixVQUFJQSxLQUFLLENBQUNTLENBQU4sS0FBWWQsZ0RBQUssQ0FBQ2UsSUFBTixDQUFXVCxJQUFYLENBQWdCUSxDQUE1QixJQUFpQ1QsS0FBSyxDQUFDVyxDQUFOLEtBQVloQixnREFBSyxDQUFDZSxJQUFOLENBQVdULElBQVgsQ0FBZ0JVLENBQWpFLEVBQW9FO0FBQ2xFLFlBQU1DLEtBQUssR0FBR1osS0FBSyxDQUFDUyxDQUFOLEdBQVVULEtBQUssQ0FBQ1csQ0FBOUI7QUFDQSxZQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxjQUFjLEdBQUdNLEtBQTVCLENBQWxCO0FBQ0EsWUFBTUksUUFBUSxHQUFHVixjQUFqQjtBQUNBSCxlQUFPLENBQUM7QUFBRVEsV0FBQyxFQUFFRSxTQUFMO0FBQWdCSixXQUFDLEVBQUVPO0FBQW5CLFNBQUQsQ0FBUDtBQUVELE9BTkQsTUFNTztBQUNMYixlQUFPLENBQUNILEtBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FmSDtBQWdCRSxXQUFPLEVBQUVULGFBQWEsRUFoQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQW9CRCxDQTlCTTs7R0FBTVcsVzs7S0FBQUEsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2l6ZUNoYW5nZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNpemVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25zR3JvdXAgfSBmcm9tICcuL3JhZGlvQnV0dG9uc0dyb3VwJztcbmltcG9ydCB7IFNpemVQcm9wcywgT3B0aW9uUHJvcHMgfSBmcm9tICcuLi9jb250YWluZXJzL2Rpc3BsYXkvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBTaXplQ2hhbmdlclByb3BzIHtcbiAgc2V0U2l6ZSh2YWx1ZTogU2l6ZVByb3BzKTogYW55O1xuICBjdXJyZW50VmFsdWU6IFNpemVQcm9wcztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBwbG90c0FyZWFXaWR0aDogbnVtYmVyO1xufVxuXG5jb25zdCBmb3JtYXRPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBzaXplc0tleXMgPSBPYmplY3Qua2V5cyhzaXplcyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBzaXplc0tleXMubWFwKChzaXplS2V5OiBzdHJpbmcpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4geyBsYWJlbDogc2l6ZXNbc2l6ZUtleV0ubGFiZWwsIHZhbHVlOiBzaXplc1tzaXplS2V5XS5zaXplIH07XG4gIH0pO1xuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmV4cG9ydCBjb25zdCBTaXplQ2hhbmdlciA9ICh7XG4gIHNldFNpemUsXG4gIGN1cnJlbnRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIHBsb3RzQXJlYVdpZHRoLFxufTogU2l6ZUNoYW5nZXJQcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBzZXRTaXplKGN1cnJlbnRWYWx1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSYWRpb0J1dHRvbnNHcm91cFxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY3VycmVudF92YWx1ZT17Y3VycmVudFZhbHVlfVxuICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb246IE9wdGlvblByb3BzKSA9PiBvcHRpb24ubGFiZWx9XG4gICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbjogT3B0aW9uUHJvcHMpID0+IG9wdGlvbi52YWx1ZX1cbiAgICAgIGFjdGlvbj17KHZhbHVlOiBTaXplUHJvcHMpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLncgPT09IHNpemVzLmZpbGwuc2l6ZS53ICYmIHZhbHVlLmggPT09IHNpemVzLmZpbGwuc2l6ZS5oKSB7XG4gICAgICAgICAgY29uc3QgcmF0aW8gPSB2YWx1ZS53IC8gdmFsdWUuaFxuICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IE1hdGguZmxvb3IocGxvdHNBcmVhV2lkdGggLyByYXRpbylcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHBsb3RzQXJlYVdpZHRoXG4gICAgICAgICAgc2V0U2l6ZSh7IGg6IG5ld0hlaWdodCwgdzogbmV3V2lkdGggfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNpemUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb3B0aW9ucz17Zm9ybWF0T3B0aW9ucygpfVxuICAgIC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sizeChanger.tsx\n");

/***/ })

})