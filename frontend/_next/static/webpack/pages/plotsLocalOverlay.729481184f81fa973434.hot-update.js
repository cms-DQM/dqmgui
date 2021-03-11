webpackHotUpdate_N_E("pages/plotsLocalOverlay",{

/***/ "./plotsLocalOverlay/main.tsx":
/*!************************************!*\
  !*** ./plotsLocalOverlay/main.tsx ***!
  \************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _plots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plots */ \"./plotsLocalOverlay/plots/index.tsx\");\n/* harmony import */ var _plotsLocalOverlay_serchContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plotsLocalOverlay/serchContent */ \"./plotsLocalOverlay/serchContent.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _plotsLocalOverlay_options_reference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plotsLocalOverlay/options/reference */ \"./plotsLocalOverlay/options/reference.tsx\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styledComponents */ \"./plotsLocalOverlay/styledComponents.ts\");\n/* harmony import */ var _styles_styledComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styledComponents */ \"./styles/styledComponents.ts\");\n/* harmony import */ var _plotsSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plotsSearch */ \"./plotsLocalOverlay/plotsSearch.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/plotsLocalOverlay/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var query = router.query;\n  var run_number = query.run_number,\n      dataset_name = query.dataset_name,\n      folders_path = query.folders_path,\n      plot_name = query.plot_name,\n      size = query.size;\n  var refReference = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"](null);\n  var plotsAreaRef = react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"](null);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      parameters = _React$useState2[0],\n      setParameters = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      referenceHeight = _React$useState4[0],\n      setReferenceHeight = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](0),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      plotsAreaWidth = _React$useState6[0],\n      setPlotsAreaWidth = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    if (refReference.current) {\n      setReferenceHeight(refReference.current.clientHeight);\n    }\n  }, [refReference.current]);\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    if (plotsAreaRef.current) {\n      setPlotsAreaWidth(plotsAreaRef.current.clientWidth);\n    }\n  }, [plotsAreaRef.current]);\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    if (Object.keys(query).length > 0) {\n      var overlaidGloballyPlots = query.overlaidGlobally.split('&');\n      var overlaidGloballyPlotsObjects = overlaidGloballyPlots.map(function (plot) {\n        var parts = plot.split('/');\n        var label = parts.pop();\n        var plot_name = parts.pop();\n        var run_number = parts.shift();\n        var folders_path = parts.splice(3).join('/');\n        var dataset_name = '/' + parts.join('/');\n        return {\n          run_number: run_number,\n          dataset_name: dataset_name,\n          folders_path: folders_path,\n          plot_name: plot_name,\n          label: label\n        };\n      });\n      var params_for_api = {\n        run_number: run_number,\n        dataset_name: dataset_name,\n        folders_path: folders_path,\n        plot_name: plot_name,\n        size: query.size ? query.size : 'large',\n        jsroot: query.jsroot ? query.jsroot === 'true' ? true : false : false,\n        stats: query.stats ? query.stats === 'true' ? true : false : false,\n        normalize: query.normalize ? query.normalize === 'true' ? true : false : true,\n        overlaidSeparately: {\n          plots: [],\n          ref: 'overlay'\n        },\n        overlaidGlobally: overlaidGloballyPlotsObjects,\n        //@ts-ignore\n        height: _components_constants__WEBPACK_IMPORTED_MODULE_6__[\"sizes\"][query.size ? query.size : 'large'].size.h,\n        //@ts-ignore\n        width: _components_constants__WEBPACK_IMPORTED_MODULE_6__[\"sizes\"][query.size ? query.size : 'large'].size.w\n      };\n      setParameters(params_for_api);\n    }\n  }, [query.plot_name]);\n\n  if (parameters) {\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }\n    }, __jsx(_styles_styledComponents__WEBPACK_IMPORTED_MODULE_9__[\"StyledHeader\"], {\n      justifyContent: \"space-between\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }\n    }, __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(_styles_styledComponents__WEBPACK_IMPORTED_MODULE_9__[\"StyledLogoDiv\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }\n    }, __jsx(_styles_styledComponents__WEBPACK_IMPORTED_MODULE_9__[\"StyledLogoWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 15\n      }\n    }, __jsx(_styles_styledComponents__WEBPACK_IMPORTED_MODULE_9__[\"StyledLogo\"], {\n      src: \"../images/CMSlogo_white_red_nolabel_1024_May2014.png\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }\n    }))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"TagsWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }\n    }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"TagWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      color: \"geekblue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, \"Run :\", parameters.run_number)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"TagWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      color: \"geekblue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }\n    }, \"Dataset: \", parameters.dataset_name)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"TagWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      color: \"geekblue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, \" Folders path: \", parameters.folders_path)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"TagWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      color: \"geekblue\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }\n    }, \"Plot name:  \", parameters.plot_name)), __jsx(_plotsSearch__WEBPACK_IMPORTED_MODULE_10__[\"PlotSearch\"], {\n      parameters: parameters,\n      setParameters: setParameters,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    })))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"SyledContent\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }\n    }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"Wrapper\"], {\n      direction: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }\n    }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"Side\"], {\n      ref: plotsAreaRef,\n      proportion: \"50%\",\n      border: true.toString(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }\n    }, __jsx(_plots__WEBPACK_IMPORTED_MODULE_4__[\"Plots\"], {\n      plotsAreaWidth: plotsAreaWidth,\n      parameters: parameters,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 15\n      }\n    })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"Side\"], {\n      proportion: \"50%\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      ref: refReference,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 15\n      }\n    }, __jsx(_plotsLocalOverlay_options_reference__WEBPACK_IMPORTED_MODULE_7__[\"Reference\"], {\n      parameters: parameters,\n      router: router,\n      setParameters: setParameters,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }\n    })), __jsx(_plotsLocalOverlay_serchContent__WEBPACK_IMPORTED_MODULE_5__[\"SearchContent\"], {\n      referenceHeight: referenceHeight,\n      parameters: parameters,\n      setParameters: setParameters,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 15\n      }\n    })))));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null);\n};\n\n_s(Main, \"uemsSzYn3d2R7UHQiET1heIgXrw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxvdHNMb2NhbE92ZXJsYXkvbWFpbi50c3g/YjBlNyJdLCJuYW1lcyI6WyJNYWluIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJydW5fbnVtYmVyIiwiZGF0YXNldF9uYW1lIiwiZm9sZGVyc19wYXRoIiwicGxvdF9uYW1lIiwic2l6ZSIsInJlZlJlZmVyZW5jZSIsIlJlYWN0IiwicGxvdHNBcmVhUmVmIiwicGFyYW1ldGVycyIsInNldFBhcmFtZXRlcnMiLCJyZWZlcmVuY2VIZWlnaHQiLCJzZXRSZWZlcmVuY2VIZWlnaHQiLCJwbG90c0FyZWFXaWR0aCIsInNldFBsb3RzQXJlYVdpZHRoIiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm92ZXJsYWlkR2xvYmFsbHlQbG90cyIsIm92ZXJsYWlkR2xvYmFsbHkiLCJzcGxpdCIsIm92ZXJsYWlkR2xvYmFsbHlQbG90c09iamVjdHMiLCJtYXAiLCJwbG90IiwicGFydHMiLCJsYWJlbCIsInBvcCIsInNoaWZ0Iiwic3BsaWNlIiwiam9pbiIsInBhcmFtc19mb3JfYXBpIiwianNyb290Iiwic3RhdHMiLCJub3JtYWxpemUiLCJvdmVybGFpZFNlcGFyYXRlbHkiLCJwbG90cyIsInJlZiIsImhlaWdodCIsInNpemVzIiwiaCIsIndpZHRoIiwidyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFyQjtBQUZ3QixNQUdoQkMsVUFIZ0IsR0FHNENELEtBSDVDLENBR2hC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bnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgUGxvdHMgfSBmcm9tICcuL3Bsb3RzJ1xuaW1wb3J0IHsgU2VhcmNoQ29udGVudCB9IGZyb20gJy4uL3Bsb3RzTG9jYWxPdmVybGF5L3NlcmNoQ29udGVudCdcbmltcG9ydCB7IHNpemVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSAnLi4vcGxvdHNMb2NhbE92ZXJsYXkvb3B0aW9ucy9yZWZlcmVuY2UnXG5pbXBvcnQgeyBQYXJhbWV0ZXJzRm9yQXBpIH0gZnJvbSAnLi4vcGxvdHNMb2NhbE92ZXJsYXkvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTaWRlLCBTeWxlZENvbnRlbnQsIFRhZ3NXcmFwcGVyLCBUYWdXcmFwcGVyLCBXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZWRDb21wb25lbnRzJztcbmltcG9ydCB7IFN0eWxlZEhlYWRlciwgU3R5bGVkTG9nbywgU3R5bGVkTG9nb0RpdiwgU3R5bGVkTG9nb1dyYXBwZXIgfSBmcm9tICcuLi9zdHlsZXMvc3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsb3RTZWFyY2ggfSBmcm9tICcuL3Bsb3RzU2VhcmNoJztcblxuXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7IHJ1bl9udW1iZXIsIGRhdGFzZXRfbmFtZSwgZm9sZGVyc19wYXRoLCBwbG90X25hbWUsIHNpemUgfSA9IHF1ZXJ5XG4gIGNvbnN0IHJlZlJlZmVyZW5jZSA9IFJlYWN0LnVzZVJlZjxhbnk+KG51bGwpXG4gIGNvbnN0IHBsb3RzQXJlYVJlZiA9IFJlYWN0LnVzZVJlZjxhbnk+KG51bGwpXG5cbiAgY29uc3QgW3BhcmFtZXRlcnMsIHNldFBhcmFtZXRlcnNdID0gUmVhY3QudXNlU3RhdGU8UGFyYW1ldGVyc0ZvckFwaSB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBbcmVmZXJlbmNlSGVpZ2h0LCBzZXRSZWZlcmVuY2VIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMClcbiAgY29uc3QgW3Bsb3RzQXJlYVdpZHRoLCBzZXRQbG90c0FyZWFXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZlJlZmVyZW5jZS5jdXJyZW50KSB7XG4gICAgICBzZXRSZWZlcmVuY2VIZWlnaHQocmVmUmVmZXJlbmNlLmN1cnJlbnQuY2xpZW50SGVpZ2h0KVxuICAgIH1cbiAgfSwgW3JlZlJlZmVyZW5jZS5jdXJyZW50XSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbG90c0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgc2V0UGxvdHNBcmVhV2lkdGgocGxvdHNBcmVhUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpXG4gICAgfVxuICB9LCBbcGxvdHNBcmVhUmVmLmN1cnJlbnRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvdmVybGFpZEdsb2JhbGx5UGxvdHMgPSAocXVlcnkub3ZlcmxhaWRHbG9iYWxseSBhcyBzdHJpbmcpLnNwbGl0KCcmJylcbiAgICAgIGNvbnN0IG92ZXJsYWlkR2xvYmFsbHlQbG90c09iamVjdHMgPSBvdmVybGFpZEdsb2JhbGx5UGxvdHMubWFwKChwbG90KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gcGxvdC5zcGxpdCgnLycpXG4gICAgICAgIGNvbnN0IGxhYmVsID0gcGFydHMucG9wKClcbiAgICAgICAgY29uc3QgcGxvdF9uYW1lID0gcGFydHMucG9wKClcbiAgICAgICAgY29uc3QgcnVuX251bWJlciA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICAgY29uc3QgZm9sZGVyc19wYXRoID0gcGFydHMuc3BsaWNlKDMpLmpvaW4oJy8nKVxuICAgICAgICBjb25zdCBkYXRhc2V0X25hbWUgPSAnLycgKyBwYXJ0cy5qb2luKCcvJylcbiAgICAgICAgcmV0dXJuIHsgcnVuX251bWJlciwgZGF0YXNldF9uYW1lLCBmb2xkZXJzX3BhdGgsIHBsb3RfbmFtZSwgbGFiZWwgfVxuICAgICAgfSlcbiAgICAgIGNvbnN0IHBhcmFtc19mb3JfYXBpOiBhbnkgPSB7XG4gICAgICAgIHJ1bl9udW1iZXI6IHJ1bl9udW1iZXIgYXMgc3RyaW5nLFxuICAgICAgICBkYXRhc2V0X25hbWU6IGRhdGFzZXRfbmFtZSBhcyBzdHJpbmcsXG4gICAgICAgIGZvbGRlcnNfcGF0aDogZm9sZGVyc19wYXRoIGFzIHN0cmluZyxcbiAgICAgICAgcGxvdF9uYW1lOiBwbG90X25hbWUgYXMgc3RyaW5nLFxuICAgICAgICBzaXplOiBxdWVyeS5zaXplID8gcXVlcnkuc2l6ZSBhcyBzdHJpbmcgOiAnbGFyZ2UnLFxuICAgICAgICBqc3Jvb3Q6IHF1ZXJ5Lmpzcm9vdCA/IChxdWVyeS5qc3Jvb3QgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZSxcbiAgICAgICAgc3RhdHM6IHF1ZXJ5LnN0YXRzID8gKHF1ZXJ5LnN0YXRzID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2UsXG4gICAgICAgIG5vcm1hbGl6ZTogcXVlcnkubm9ybWFsaXplID8gKHF1ZXJ5Lm5vcm1hbGl6ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSA6IHRydWUsXG4gICAgICAgIG92ZXJsYWlkU2VwYXJhdGVseTogeyBwbG90czogW10sIHJlZjogJ292ZXJsYXknIH0sXG4gICAgICAgIG92ZXJsYWlkR2xvYmFsbHk6IG92ZXJsYWlkR2xvYmFsbHlQbG90c09iamVjdHMsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBoZWlnaHQ6IHNpemVzW3F1ZXJ5LnNpemUgPyBxdWVyeS5zaXplIGFzIHN0cmluZyA6ICdsYXJnZSddLnNpemUuaCxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHdpZHRoOiBzaXplc1txdWVyeS5zaXplID8gcXVlcnkuc2l6ZSBhcyBzdHJpbmcgOiAnbGFyZ2UnXS5zaXplLndcbiAgICAgIH1cbiAgICAgIHNldFBhcmFtZXRlcnMocGFyYW1zX2Zvcl9hcGkpXG4gICAgfVxuICB9LCBbcXVlcnkucGxvdF9uYW1lXSlcblxuICBpZiAocGFyYW1ldGVycykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0ID5cbiAgICAgICAgPFN0eWxlZEhlYWRlciBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTdHlsZWRMb2dvRGl2PlxuICAgICAgICAgICAgICA8U3R5bGVkTG9nb1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPFN0eWxlZExvZ28gc3JjPVwiLi4vaW1hZ2VzL0NNU2xvZ29fd2hpdGVfcmVkX25vbGFiZWxfMTAyNF9NYXkyMDE0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTG9nb1dyYXBwZXI+XG4gICAgICAgICAgICA8L1N0eWxlZExvZ29EaXY+XG4gICAgICAgICAgICA8VGFnc1dyYXBwZXI+XG4gICAgICAgICAgICAgIDxUYWdXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCJnZWVrYmx1ZVwiPlJ1biA6e3BhcmFtZXRlcnMucnVuX251bWJlcn08L1RhZz5cbiAgICAgICAgICAgICAgPC9UYWdXcmFwcGVyPlxuICAgICAgICAgICAgICA8VGFnV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiZ2Vla2JsdWVcIj5EYXRhc2V0OiB7cGFyYW1ldGVycy5kYXRhc2V0X25hbWV9PC9UYWc+XG4gICAgICAgICAgICAgIDwvVGFnV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFRhZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cImdlZWtibHVlXCI+IEZvbGRlcnMgcGF0aDoge3BhcmFtZXRlcnMuZm9sZGVyc19wYXRofTwvVGFnPlxuICAgICAgICAgICAgICA8L1RhZ1dyYXBwZXI+XG4gICAgICAgICAgICAgIDxUYWdXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCJnZWVrYmx1ZVwiPlBsb3QgbmFtZTogIHtwYXJhbWV0ZXJzLnBsb3RfbmFtZX08L1RhZz5cbiAgICAgICAgICAgICAgPC9UYWdXcmFwcGVyPlxuICAgICAgICAgICAgICA8UGxvdFNlYXJjaCBwYXJhbWV0ZXJzPXtwYXJhbWV0ZXJzfSBzZXRQYXJhbWV0ZXJzPXtzZXRQYXJhbWV0ZXJzfSAvPlxuICAgICAgICAgICAgPC9UYWdzV3JhcHBlcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9TdHlsZWRIZWFkZXI+XG4gICAgICAgIDxTeWxlZENvbnRlbnQ+XG4gICAgICAgICAgPFdyYXBwZXIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICA8U2lkZSByZWY9e3Bsb3RzQXJlYVJlZn0gcHJvcG9ydGlvbj1cIjUwJVwiIGJvcmRlcj17dHJ1ZS50b1N0cmluZygpfSA+XG4gICAgICAgICAgICAgIDxQbG90cyBwbG90c0FyZWFXaWR0aD17cGxvdHNBcmVhV2lkdGh9IHBhcmFtZXRlcnM9e3BhcmFtZXRlcnN9IC8+XG4gICAgICAgICAgICA8L1NpZGU+XG4gICAgICAgICAgICA8U2lkZSBwcm9wb3J0aW9uPVwiNTAlXCIgPlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmUmVmZXJlbmNlfT5cbiAgICAgICAgICAgICAgICA8UmVmZXJlbmNlIHBhcmFtZXRlcnM9e3BhcmFtZXRlcnN9IHJvdXRlcj17cm91dGVyfSBzZXRQYXJhbWV0ZXJzPXtzZXRQYXJhbWV0ZXJzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlYXJjaENvbnRlbnRcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VIZWlnaHQ9e3JlZmVyZW5jZUhlaWdodH1cbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzPXtwYXJhbWV0ZXJzfSBzZXRQYXJhbWV0ZXJzPXtzZXRQYXJhbWV0ZXJzfSAvPlxuICAgICAgICAgICAgPC9TaWRlPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9TeWxlZENvbnRlbnQ+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDw+PC8+XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plotsLocalOverlay/main.tsx\n");

/***/ })

})