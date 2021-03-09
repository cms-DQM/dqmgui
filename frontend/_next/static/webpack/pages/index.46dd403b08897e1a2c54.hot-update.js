webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sizeChanger.tsx":
/*!************************************!*\
  !*** ./components/sizeChanger.tsx ***!
  \************************************/
/*! exports provided: SizeChanger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeChanger\", function() { return SizeChanger; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.ts\");\n/* harmony import */ var _radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButtonsGroup */ \"./components/radioButtonsGroup.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/sizeChanger.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar formatOptions = function formatOptions() {\n  var sizesKeys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"]);\n  var options = sizesKeys.map(function (sizeKey) {\n    //@ts-ignore\n    return {\n      label: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].label,\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"][sizeKey].size\n    };\n  });\n  return options;\n};\n\nvar SizeChanger = function SizeChanger(_ref) {\n  _s();\n\n  var setSize = _ref.setSize,\n      currentValue = _ref.currentValue,\n      disabled = _ref.disabled,\n      plotsAreaWidth = _ref.plotsAreaWidth;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      return setSize(currentValue);\n    };\n  }, []);\n  return __jsx(_radioButtonsGroup__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonsGroup\"], {\n    disabled: disabled,\n    current_value: currentValue,\n    getOptionLabel: function getOptionLabel(option) {\n      return option.label;\n    },\n    getOptionValue: function getOptionValue(option) {\n      return option.value;\n    },\n    action: function action(value) {\n      if (value.w, _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.w, value.h, _constants__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].fill.size.h) {\n        var ratio = value.w / value.h;\n        var newHeight = Math.floor(plotsAreaWidth / ratio);\n        var newWidth = plotsAreaWidth;\n        setSize({\n          h: newHeight,\n          w: newWidth\n        });\n      } else {\n        setSize(value);\n      }\n    },\n    options: formatOptions(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(SizeChanger, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = SizeChanger;\n\nvar _c;\n\n$RefreshReg$(_c, \"SizeChanger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaXplQ2hhbmdlci50c3g/ZWJmMCJdLCJuYW1lcyI6WyJmb3JtYXRPcHRpb25zIiwic2l6ZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNpemVzIiwib3B0aW9ucyIsIm1hcCIsInNpemVLZXkiLCJsYWJlbCIsInZhbHVlIiwic2l6ZSIsIlNpemVDaGFuZ2VyIiwic2V0U2l6ZSIsImN1cnJlbnRWYWx1ZSIsImRpc2FibGVkIiwicGxvdHNBcmVhV2lkdGgiLCJ1c2VFZmZlY3QiLCJvcHRpb24iLCJ3IiwiZmlsbCIsImgiLCJyYXRpbyIsIm5ld0hlaWdodCIsIk1hdGgiLCJmbG9vciIsIm5ld1dpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0RBQVosQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLE9BQUQsRUFBcUI7QUFDakQ7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUosZ0RBQUssQ0FBQ0csT0FBRCxDQUFMLENBQWVDLEtBQXhCO0FBQStCQyxXQUFLLEVBQUVMLGdEQUFLLENBQUNHLE9BQUQsQ0FBTCxDQUFlRztBQUFyRCxLQUFQO0FBQ0QsR0FIZSxDQUFoQjtBQUlBLFNBQU9MLE9BQVA7QUFDRCxDQVBEOztBQVNPLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BS0g7QUFBQTs7QUFBQSxNQUp0QkMsT0FJc0IsUUFKdEJBLE9BSXNCO0FBQUEsTUFIdEJDLFlBR3NCLFFBSHRCQSxZQUdzQjtBQUFBLE1BRnRCQyxRQUVzQixRQUZ0QkEsUUFFc0I7QUFBQSxNQUR0QkMsY0FDc0IsUUFEdEJBLGNBQ3NCO0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxXQUFPO0FBQUEsYUFBTUosT0FBTyxDQUFDQyxZQUFELENBQWI7QUFBQSxLQUFQO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUMsUUFEWjtBQUVFLGlCQUFhLEVBQUVELFlBRmpCO0FBR0Usa0JBQWMsRUFBRSx3QkFBQ0ksTUFBRDtBQUFBLGFBQXlCQSxNQUFNLENBQUNULEtBQWhDO0FBQUEsS0FIbEI7QUFJRSxrQkFBYyxFQUFFLHdCQUFDUyxNQUFEO0FBQUEsYUFBeUJBLE1BQU0sQ0FBQ1IsS0FBaEM7QUFBQSxLQUpsQjtBQUtFLFVBQU0sRUFBRSxnQkFBQ0EsS0FBRCxFQUFzQjtBQUM1QixVQUFJQSxLQUFLLENBQUNTLENBQU4sRUFBU2QsZ0RBQUssQ0FBQ2UsSUFBTixDQUFXVCxJQUFYLENBQWdCUSxDQUF6QixFQUE2QlQsS0FBSyxDQUFDVyxDQUFuQyxFQUF1Q2hCLGdEQUFLLENBQUNlLElBQU4sQ0FBV1QsSUFBWCxDQUFnQlUsQ0FBM0QsRUFBOEQ7QUFDNUQsWUFBTUMsS0FBSyxHQUFHWixLQUFLLENBQUNTLENBQU4sR0FBVVQsS0FBSyxDQUFDVyxDQUE5QjtBQUNBLFlBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULGNBQWMsR0FBR00sS0FBNUIsQ0FBbEI7QUFDQSxZQUFNSSxRQUFRLEdBQUdWLGNBQWpCO0FBQ0FILGVBQU8sQ0FBQztBQUFFUSxXQUFDLEVBQUVFLFNBQUw7QUFBZ0JKLFdBQUMsRUFBRU87QUFBbkIsU0FBRCxDQUFQO0FBRUQsT0FORCxNQU1PO0FBQ0xiLGVBQU8sQ0FBQ0gsS0FBRCxDQUFQO0FBQ0Q7QUFDRixLQWZIO0FBZ0JFLFdBQU8sRUFBRVQsYUFBYSxFQWhCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBb0JELENBOUJNOztHQUFNVyxXOztLQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaXplQ2hhbmdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2l6ZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbnNHcm91cCB9IGZyb20gJy4vcmFkaW9CdXR0b25zR3JvdXAnO1xuaW1wb3J0IHsgU2l6ZVByb3BzLCBPcHRpb25Qcm9wcyB9IGZyb20gJy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIFNpemVDaGFuZ2VyUHJvcHMge1xuICBzZXRTaXplKHZhbHVlOiBTaXplUHJvcHMpOiBhbnk7XG4gIGN1cnJlbnRWYWx1ZTogU2l6ZVByb3BzO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHBsb3RzQXJlYVdpZHRoOiBudW1iZXI7XG59XG5cbmNvbnN0IGZvcm1hdE9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNpemVzS2V5cyA9IE9iamVjdC5rZXlzKHNpemVzKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNpemVzS2V5cy5tYXAoKHNpemVLZXk6IHN0cmluZykgPT4ge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiB7IGxhYmVsOiBzaXplc1tzaXplS2V5XS5sYWJlbCwgdmFsdWU6IHNpemVzW3NpemVLZXldLnNpemUgfTtcbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuZXhwb3J0IGNvbnN0IFNpemVDaGFuZ2VyID0gKHtcbiAgc2V0U2l6ZSxcbiAgY3VycmVudFZhbHVlLFxuICBkaXNhYmxlZCxcbiAgcGxvdHNBcmVhV2lkdGgsXG59OiBTaXplQ2hhbmdlclByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHNldFNpemUoY3VycmVudFZhbHVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvQnV0dG9uc0dyb3VwXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjdXJyZW50X3ZhbHVlPXtjdXJyZW50VmFsdWV9XG4gICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbjogT3B0aW9uUHJvcHMpID0+IG9wdGlvbi5sYWJlbH1cbiAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uOiBPcHRpb25Qcm9wcykgPT4gb3B0aW9uLnZhbHVlfVxuICAgICAgYWN0aW9uPXsodmFsdWU6IFNpemVQcm9wcykgPT4ge1xuICAgICAgICBpZiAodmFsdWUudywgc2l6ZXMuZmlsbC5zaXplLncgLCB2YWx1ZS5oICwgc2l6ZXMuZmlsbC5zaXplLmgpIHtcbiAgICAgICAgICBjb25zdCByYXRpbyA9IHZhbHVlLncgLyB2YWx1ZS5oXG4gICAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5mbG9vcihwbG90c0FyZWFXaWR0aCAvIHJhdGlvKVxuICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gcGxvdHNBcmVhV2lkdGhcbiAgICAgICAgICBzZXRTaXplKHsgaDogbmV3SGVpZ2h0LCB3OiBuZXdXaWR0aCB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U2l6ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvcHRpb25zPXtmb3JtYXRPcHRpb25zKCl9XG4gICAgLz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sizeChanger.tsx\n");

/***/ })

})