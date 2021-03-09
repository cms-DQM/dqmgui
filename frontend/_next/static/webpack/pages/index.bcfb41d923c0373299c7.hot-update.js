webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/*! exports provided: Nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styledComponents */ "./components/styledComponents.ts");
/* harmony import */ var _searchButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchButton */ "./components/searchButton.tsx");
/* harmony import */ var _helpButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpButton */ "./components/helpButton.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "./config/config.ts");



var _jsxFileName = "/mnt/c/Users/ernes/Desktop/cernProject/dqmgui_frontend/components/Nav.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Nav = function Nav(_ref) {
  _s();

  var initial_search_run_number = _ref.initial_search_run_number,
      initial_search_dataset_name = _ref.initial_search_dataset_name,
      setRunNumber = _ref.setRunNumber,
      setDatasetName = _ref.setDatasetName,
      handler = _ref.handler,
      type = _ref.type,
      defaultRunNumber = _ref.defaultRunNumber,
      defaultDatasetName = _ref.defaultDatasetName;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial_search_run_number || ''),
      form_search_run_number = _useState[0],
      setFormRunNumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial_search_dataset_name || ''),
      form_search_dataset_name = _useState2[0],
      setFormDatasetName = _useState2[1]; // We have to wait for changin initial_search_run_number and initial_search_dataset_name coming from query, because the first render they are undefined and therefore the initialValues doesn't grab them


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    form.resetFields();
    setFormRunNumber(initial_search_run_number || '');
    setFormDatasetName(initial_search_dataset_name || '');
  }, [initial_search_run_number, initial_search_dataset_name, form]);
  var layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  var tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 4
    }
  };
  return __jsx("div", {
    style: {
      justifyContent: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__["CustomForm"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    form: form,
    layout: 'inline',
    justifycontent: "center"
  }, layout, {
    name: "search_form".concat(type),
    className: "fieldLabel",
    initialValues: {
      run_number: initial_search_run_number,
      dataset_name: initial_search_dataset_name
    },
    onFinish: function onFinish() {
      setRunNumber && setRunNumber(form_search_run_number);
      setDatasetName && setDatasetName(form_search_dataset_name);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_helpButton__WEBPACK_IMPORTED_MODULE_6__["QuestionButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledFormItem"], {
    name: "run_number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledInput"], {
    id: "run_number",
    onChange: function onChange(e) {
      return setFormRunNumber(e.target.value);
    },
    placeholder: "Enter run number",
    type: "text",
    name: "run_number",
    value: defaultRunNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), _config_config__WEBPACK_IMPORTED_MODULE_7__["functions_config"].mode !== 'ONLINE' && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledFormItem"], {
    name: "dataset_name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledInput"], {
    id: "dataset_name",
    placeholder: "Enter dataset name",
    onChange: function onChange(e) {
      return setFormDatasetName(e.target.value);
    },
    type: "text",
    value: defaultDatasetName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_searchButton__WEBPACK_IMPORTED_MODULE_5__["SearchButton"], {
    onClick: function onClick() {
      return handler(form_search_run_number, form_search_dataset_name);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }))));
};

_s(Nav, "d/o1hn25bH6EF0LAvbTEx8d/DOY=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4Il0sIm5hbWVzIjpbIk5hdiIsImluaXRpYWxfc2VhcmNoX3J1bl9udW1iZXIiLCJpbml0aWFsX3NlYXJjaF9kYXRhc2V0X25hbWUiLCJzZXRSdW5OdW1iZXIiLCJzZXREYXRhc2V0TmFtZSIsImhhbmRsZXIiLCJ0eXBlIiwiZGVmYXVsdFJ1bk51bWJlciIsImRlZmF1bHREYXRhc2V0TmFtZSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiZm9ybV9zZWFyY2hfcnVuX251bWJlciIsInNldEZvcm1SdW5OdW1iZXIiLCJmb3JtX3NlYXJjaF9kYXRhc2V0X25hbWUiLCJzZXRGb3JtRGF0YXNldE5hbWUiLCJ1c2VFZmZlY3QiLCJyZXNldEZpZWxkcyIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwianVzdGlmeUNvbnRlbnQiLCJydW5fbnVtYmVyIiwiZGF0YXNldF9uYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZnVuY3Rpb25zX2NvbmZpZyIsIm1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBY08sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FTSDtBQUFBOztBQUFBLE1BUmRDLHlCQVFjLFFBUmRBLHlCQVFjO0FBQUEsTUFQZEMsMkJBT2MsUUFQZEEsMkJBT2M7QUFBQSxNQU5kQyxZQU1jLFFBTmRBLFlBTWM7QUFBQSxNQUxkQyxjQUtjLFFBTGRBLGNBS2M7QUFBQSxNQUpkQyxPQUljLFFBSmRBLE9BSWM7QUFBQSxNQUhkQyxJQUdjLFFBSGRBLElBR2M7QUFBQSxNQUZkQyxnQkFFYyxRQUZkQSxnQkFFYztBQUFBLE1BRGRDLGtCQUNjLFFBRGRBLGtCQUNjOztBQUFBLHNCQUNDQyx5Q0FBSSxDQUFDQyxPQUFM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SyxFQUFFdEIsa0JBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaENKLEVBNENFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFDUEgsT0FBTyxDQUFDUSxzQkFBRCxFQUF5QkUsd0JBQXpCLENBREE7QUFBQSxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTVDRixDQURGLENBREY7QUF3REQsQ0F6Rk07O0dBQU1mLEc7VUFVSVMseUNBQUksQ0FBQ0MsTzs7O0tBVlRWLEc7QUEyRkVBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjZmI0MWQ5MjNjMDM3MzI5OWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIERpc3BhdGNoLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBTdHlsZWRGb3JtSXRlbSwgU3R5bGVkSW5wdXQsIEN1c3RvbUZvcm0gfSBmcm9tICcuL3N0eWxlZENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdXR0b24gfSBmcm9tICcuL3NlYXJjaEJ1dHRvbic7XHJcbmltcG9ydCB7IFF1ZXN0aW9uQnV0dG9uIH0gZnJvbSAnLi9oZWxwQnV0dG9uJztcclxuaW1wb3J0IHsgZnVuY3Rpb25zX2NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5cclxuaW50ZXJmYWNlIE5hdlByb3BzIHtcclxuICBzZXRSdW5OdW1iZXI/OiBEaXNwYXRjaDxhbnk+O1xyXG4gIHNldERhdGFzZXROYW1lPzogRGlzcGF0Y2g8YW55PjtcclxuICBpbml0aWFsX3NlYXJjaF9ydW5fbnVtYmVyPzogc3RyaW5nO1xyXG4gIGluaXRpYWxfc2VhcmNoX2RhdGFzZXRfbmFtZT86IHN0cmluZztcclxuICBpbml0aWFsX3NlYXJjaF9sdW1pc2VjdGlvbj86IHN0cmluZztcclxuICBoYW5kbGVyKHNlYXJjaF9ieV9ydW5fbnVtYmVyOiBzdHJpbmcsIHNlYXJjaF9ieV9kYXRhc2V0X25hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGRlZmF1bHRSdW5OdW1iZXI/OiB1bmRlZmluZWQgfCBzdHJpbmc7XHJcbiAgZGVmYXVsdERhdGFzZXROYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKHtcclxuICBpbml0aWFsX3NlYXJjaF9ydW5fbnVtYmVyLFxyXG4gIGluaXRpYWxfc2VhcmNoX2RhdGFzZXRfbmFtZSxcclxuICBzZXRSdW5OdW1iZXIsXHJcbiAgc2V0RGF0YXNldE5hbWUsXHJcbiAgaGFuZGxlcixcclxuICB0eXBlLFxyXG4gIGRlZmF1bHRSdW5OdW1iZXIsXHJcbiAgZGVmYXVsdERhdGFzZXROYW1lLFxyXG59OiBOYXZQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtmb3JtX3NlYXJjaF9ydW5fbnVtYmVyLCBzZXRGb3JtUnVuTnVtYmVyXSA9IHVzZVN0YXRlKFxyXG4gICAgaW5pdGlhbF9zZWFyY2hfcnVuX251bWJlciB8fCAnJ1xyXG4gICk7XHJcbiAgY29uc3QgW2Zvcm1fc2VhcmNoX2RhdGFzZXRfbmFtZSwgc2V0Rm9ybURhdGFzZXROYW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgaW5pdGlhbF9zZWFyY2hfZGF0YXNldF9uYW1lIHx8ICcnXHJcbiAgKTtcclxuXHJcbiAgLy8gV2UgaGF2ZSB0byB3YWl0IGZvciBjaGFuZ2luIGluaXRpYWxfc2VhcmNoX3J1bl9udW1iZXIgYW5kIGluaXRpYWxfc2VhcmNoX2RhdGFzZXRfbmFtZSBjb21pbmcgZnJvbSBxdWVyeSwgYmVjYXVzZSB0aGUgZmlyc3QgcmVuZGVyIHRoZXkgYXJlIHVuZGVmaW5lZCBhbmQgdGhlcmVmb3JlIHRoZSBpbml0aWFsVmFsdWVzIGRvZXNuJ3QgZ3JhYiB0aGVtXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIHNldEZvcm1SdW5OdW1iZXIoaW5pdGlhbF9zZWFyY2hfcnVuX251bWJlciB8fCAnJyk7XHJcbiAgICBzZXRGb3JtRGF0YXNldE5hbWUoaW5pdGlhbF9zZWFyY2hfZGF0YXNldF9uYW1lIHx8ICcnKTtcclxuICB9LCBbaW5pdGlhbF9zZWFyY2hfcnVuX251bWJlciwgaW5pdGlhbF9zZWFyY2hfZGF0YXNldF9uYW1lLCBmb3JtXSk7XHJcblxyXG4gIGNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDggfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMTYgfSxcclxuICB9O1xyXG4gIGNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7IG9mZnNldDogMCwgc3BhbjogNCB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+IFxyXG4gICAgICA8Q3VzdG9tRm9ybVxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgbGF5b3V0PXsnaW5saW5lJ31cclxuICAgICAgICBqdXN0aWZ5Y29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICBuYW1lPXtgc2VhcmNoX2Zvcm0ke3R5cGV9YH1cclxuICAgICAgICBjbGFzc05hbWU9XCJmaWVsZExhYmVsXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBydW5fbnVtYmVyOiBpbml0aWFsX3NlYXJjaF9ydW5fbnVtYmVyLFxyXG4gICAgICAgICAgZGF0YXNldF9uYW1lOiBpbml0aWFsX3NlYXJjaF9kYXRhc2V0X25hbWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZpbmlzaD17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0UnVuTnVtYmVyICYmIHNldFJ1bk51bWJlcihmb3JtX3NlYXJjaF9ydW5fbnVtYmVyKTtcclxuICAgICAgICAgIHNldERhdGFzZXROYW1lICYmIHNldERhdGFzZXROYW1lKGZvcm1fc2VhcmNoX2RhdGFzZXRfbmFtZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8UXVlc3Rpb25CdXR0b24gLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8U3R5bGVkRm9ybUl0ZW0gbmFtZT1cInJ1bl9udW1iZXJcIj5cclxuICAgICAgICAgIDxTdHlsZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD1cInJ1bl9udW1iZXJcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICAgIHNldEZvcm1SdW5OdW1iZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBydW4gbnVtYmVyXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicnVuX251bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkZWZhdWx0UnVuTnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0eWxlZEZvcm1JdGVtPlxyXG4gICAgICAgIHtmdW5jdGlvbnNfY29uZmlnLm1vZGUgIT09ICdPTkxJTkUnICYmIChcclxuICAgICAgICAgIDxTdHlsZWRGb3JtSXRlbSBuYW1lPVwiZGF0YXNldF9uYW1lXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZGF0YXNldF9uYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRhdGFzZXQgbmFtZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhc2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZWZhdWx0RGF0YXNldE5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1N0eWxlZEZvcm1JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZvcm0uSXRlbSA+XHJcbiAgICAgICAgICA8U2VhcmNoQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgaGFuZGxlcihmb3JtX3NlYXJjaF9ydW5fbnVtYmVyLCBmb3JtX3NlYXJjaF9kYXRhc2V0X25hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvQ3VzdG9tRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=