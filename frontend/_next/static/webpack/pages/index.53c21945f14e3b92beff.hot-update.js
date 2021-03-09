webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sizeChanger.tsx":
/*!************************************!*\
  !*** ./components/sizeChanger.tsx ***!
  \************************************/
/*! exports provided: SizeChanger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeChanger\", function() { return SizeChanger; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButtonsGroup */ \"./components/radioButtonsGroup.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/sizeChanger.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar formatOptions = function formatOptions() {\n  var sizesKeys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"]);\n  var options = sizesKeys.map(function (sizeKey) {\n    //@ts-ignore\n    return {\n      label: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].label,\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].size\n    };\n  });\n  return options;\n};\n\nvar SizeChanger = function SizeChanger(_ref) {\n  _s();\n\n  var setSize = _ref.setSize,\n      currentValue = _ref.currentValue,\n      disabled = _ref.disabled,\n      plotsAreaWidth = _ref.plotsAreaWidth;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      return setSize(currentValue);\n    };\n  }, []);\n  return __jsx(_radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonsGroup\"], {\n    disabled: disabled,\n    current_value: currentValue,\n    getOptionLabel: function getOptionLabel(option) {\n      return option.label;\n    },\n    getOptionValue: function getOptionValue(option) {\n      return option.value;\n    },\n    action: function action(value) {\n      if (value.w === _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.w && value.h === _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.h) {\n        var ratio = value.w / value.h;\n        var newHeight = Math.floor(plotsAreaWidth / ratio) - 24; //because of margin and padding of plot frame\n\n        var newWidth = plotsAreaWidth - 24; //because of margin and padding of plot frame\n\n        setSize({\n          h: newHeight,\n          w: newWidth\n        });\n      } else {\n        setSize(value);\n      }\n    },\n    options: formatOptions(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(SizeChanger, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = SizeChanger;\n\nvar _c;\n\n$RefreshReg$(_c, \"SizeChanger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaXplQ2hhbmdlci50c3g/ZWJmMCJdLCJuYW1lcyI6WyJmb3JtYXRPcHRpb25zIiwic2l6ZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNpemVzIiwib3B0aW9ucyIsIm1hcCIsInNpemVLZXkiLCJsYWJlbCIsInZhbHVlIiwic2l6ZSIsIlNpemVDaGFuZ2VyIiwic2V0U2l6ZSIsImN1cnJlbnRWYWx1ZSIsImRpc2FibGVkIiwicGxvdHNBcmVhV2lkdGgiLCJ1c2VFZmZlY3QiLCJvcHRpb24iLCJ3IiwiZmlsbCIsImgiLCJyYXRpbyIsIm5ld0hlaWdodCIsIk1hdGgiLCJmbG9vciIsIm5ld1dpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0RBQVosQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLE9BQUQsRUFBcUI7QUFDakQ7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUosZ0RBQUssQ0FBQ0csT0FBRCxDQUFMLENBQWVDLEtBQXhCO0FBQStCQyxXQUFLLEVBQUVMLGdEQUFLLENBQUNHLE9BQUQsQ0FBTCxDQUFlRztBQUFyRCxLQUFQO0FBQ0QsR0FIZSxDQUFoQjtBQUlBLFNBQU9MLE9BQVA7QUFDRCxDQVBEOztBQVNPLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BS0g7QUFBQTs7QUFBQSxNQUp0QkMsT0FJc0IsUUFKdEJBLE9BSXNCO0FBQUEsTUFIdEJDLFlBR3NCLFFBSHRCQSxZQUdzQjtBQUFBLE1BRnRCQyxRQUVzQixRQUZ0QkEsUUFFc0I7QUFBQSxNQUR0QkMsY0FDc0IsUUFEdEJBLGNBQ3NCO0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxXQUFPO0FBQUEsYUFBTUosT0FBTyxDQUFDQyxZQUFELENBQWI7QUFBQSxLQUFQO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUMsUUFEWjtBQUVFLGlCQUFhLEVBQUVELFlBRmpCO0FBR0Usa0JBQWMsRUFBRSx3QkFBQ0ksTUFBRDtBQUFBLGFBQXlCQSxNQUFNLENBQUNULEtBQWhDO0FBQUEsS0FIbEI7QUFJRSxrQkFBYyxFQUFFLHdCQUFDUyxNQUFEO0FBQUEsYUFBeUJBLE1BQU0sQ0FBQ1IsS0FBaEM7QUFBQSxLQUpsQjtBQUtFLFVBQU0sRUFBRSxnQkFBQ0EsS0FBRCxFQUFzQjtBQUM1QixVQUFJQSxLQUFLLENBQUNTLENBQU4sS0FBWWQsZ0RBQUssQ0FBQ2UsSUFBTixDQUFXVCxJQUFYLENBQWdCUSxDQUE1QixJQUFpQ1QsS0FBSyxDQUFDVyxDQUFOLEtBQVloQixnREFBSyxDQUFDZSxJQUFOLENBQVdULElBQVgsQ0FBZ0JVLENBQWpFLEVBQW9FO0FBQ2xFLFlBQU1DLEtBQUssR0FBR1osS0FBSyxDQUFDUyxDQUFOLEdBQVVULEtBQUssQ0FBQ1csQ0FBOUI7QUFDQSxZQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxjQUFjLEdBQUdNLEtBQTVCLElBQXFDLEVBQXZELENBRmtFLENBRVI7O0FBQzFELFlBQU1JLFFBQVEsR0FBR1YsY0FBYyxHQUFHLEVBQWxDLENBSGtFLENBRzdCOztBQUNyQ0gsZUFBTyxDQUFDO0FBQUVRLFdBQUMsRUFBRUUsU0FBTDtBQUFnQkosV0FBQyxFQUFFTztBQUFuQixTQUFELENBQVA7QUFFRCxPQU5ELE1BTU87QUFDTGIsZUFBTyxDQUFDSCxLQUFELENBQVA7QUFDRDtBQUNGLEtBZkg7QUFnQkUsV0FBTyxFQUFFVCxhQUFhLEVBaEJ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFvQkQsQ0E5Qk07O0dBQU1XLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpemVDaGFuZ2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFJhZGlvQnV0dG9uc0dyb3VwIH0gZnJvbSAnLi9yYWRpb0J1dHRvbnNHcm91cCc7XG5pbXBvcnQgeyBTaXplUHJvcHMsIE9wdGlvblByb3BzIH0gZnJvbSAnLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xuXG5pbnRlcmZhY2UgU2l6ZUNoYW5nZXJQcm9wcyB7XG4gIHNldFNpemUodmFsdWU6IFNpemVQcm9wcyk6IGFueTtcbiAgY3VycmVudFZhbHVlOiBTaXplUHJvcHM7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgcGxvdHNBcmVhV2lkdGg6IG51bWJlcjtcbn1cblxuY29uc3QgZm9ybWF0T3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3Qgc2l6ZXNLZXlzID0gT2JqZWN0LmtleXMoc2l6ZXMpO1xuICBjb25zdCBvcHRpb25zID0gc2l6ZXNLZXlzLm1hcCgoc2l6ZUtleTogc3RyaW5nKSA9PiB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIHsgbGFiZWw6IHNpemVzW3NpemVLZXldLmxhYmVsLCB2YWx1ZTogc2l6ZXNbc2l6ZUtleV0uc2l6ZSB9O1xuICB9KTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgU2l6ZUNoYW5nZXIgPSAoe1xuICBzZXRTaXplLFxuICBjdXJyZW50VmFsdWUsXG4gIGRpc2FibGVkLFxuICBwbG90c0FyZWFXaWR0aCxcbn06IFNpemVDaGFuZ2VyUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gc2V0U2l6ZShjdXJyZW50VmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmFkaW9CdXR0b25zR3JvdXBcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGN1cnJlbnRfdmFsdWU9e2N1cnJlbnRWYWx1ZX1cbiAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uOiBPcHRpb25Qcm9wcykgPT4gb3B0aW9uLmxhYmVsfVxuICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb246IE9wdGlvblByb3BzKSA9PiBvcHRpb24udmFsdWV9XG4gICAgICBhY3Rpb249eyh2YWx1ZTogU2l6ZVByb3BzKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS53ID09PSBzaXplcy5maWxsLnNpemUudyAmJiB2YWx1ZS5oID09PSBzaXplcy5maWxsLnNpemUuaCkge1xuICAgICAgICAgIGNvbnN0IHJhdGlvID0gdmFsdWUudyAvIHZhbHVlLmhcbiAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLmZsb29yKHBsb3RzQXJlYVdpZHRoIC8gcmF0aW8pIC0gMjQgLy9iZWNhdXNlIG9mIG1hcmdpbiBhbmQgcGFkZGluZyBvZiBwbG90IGZyYW1lXG4gICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBwbG90c0FyZWFXaWR0aCAtIDI0IC8vYmVjYXVzZSBvZiBtYXJnaW4gYW5kIHBhZGRpbmcgb2YgcGxvdCBmcmFtZVxuICAgICAgICAgIHNldFNpemUoeyBoOiBuZXdIZWlnaHQsIHc6IG5ld1dpZHRoIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTaXplKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIG9wdGlvbnM9e2Zvcm1hdE9wdGlvbnMoKX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sizeChanger.tsx\n");

/***/ })

})