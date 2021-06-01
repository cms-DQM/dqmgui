webpackHotUpdate_N_E("pages/index",{

/***/ "./containers/display/content/quickCollectionPlotsAndFoldersHandling/get_plots_and_folders_from_workspace.tsx":
/*!********************************************************************************************************************!*\
  !*** ./containers/display/content/quickCollectionPlotsAndFoldersHandling/get_plots_and_folders_from_workspace.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: get_plots_and_folders_from_workspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_plots_and_folders_from_workspace\", function() { return get_plots_and_folders_from_workspace; });\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n/* harmony import */ var _workspaces_online__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../workspaces/online */ \"./workspaces/online.ts\");\n/* harmony import */ var _workspaces_offline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workspaces/offline */ \"./workspaces/offline.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/config */ \"./config/config.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar all_workspaces = _config_config__WEBPACK_IMPORTED_MODULE_3__[\"functions_config\"].mode === 'ONLINE' ? _workspaces_online__WEBPACK_IMPORTED_MODULE_1__[\"workspaces\"] : _workspaces_offline__WEBPACK_IMPORTED_MODULE_2__[\"workspaces\"];\nvar get_plots_and_folders_from_workspace = function get_plots_and_folders_from_workspace(selected_workspace, current_path) {\n  var workspaces_section;\n  var folders;\n  var quickCollections;\n\n  var _iterator = _createForOfIteratorHelper(all_workspaces),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      workspaces_section = _step.value;\n      var workspace_info = workspaces_section.workspaces.filter(function (workspace) {\n        return workspace.label === selected_workspace;\n      });\n\n      if (workspace_info.length > 0) {\n        var _ret = function () {\n          var all_folders_path = workspace_info[0].foldersPath;\n          var layers = current_path ? current_path.split('/').length : 0; //all_folders_path can be null, when it has no folders in workspace\n\n          if (all_folders_path) {\n            console.log(layers);\n            folders = all_folders_path.map(function (folders_path) {\n              var folders_in_path = folders_path.split('/');\n\n              if (folders_in_path.length >= layers) {\n                return folders_in_path[layers];\n              } else {\n                return [];\n              }\n            });\n          } else {\n            folders = null;\n          } // quickCollections should be shown just on the top level of folders' structure\n\n\n          if (layers >= 1) {\n            quickCollections = [];\n          } else {\n            var quickCollections_with_full_path = workspace_info[0].quickCollections;\n            quickCollections = quickCollections_with_full_path.map(function (quick_collection) {\n              var parts = quick_collection.split('/');\n              var name = parts.pop();\n              var path = parts.join('/');\n              return {\n                name: name,\n                path: path\n              };\n            });\n          }\n\n          return \"break\";\n        }();\n\n        if (_ret === \"break\") break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var folders_ = folders ? Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"uniq\"])(folders).filter(Boolean) : null; //filter(Boolean) removes empty and undef values from array\n\n  return {\n    folders: folders_,\n    quickCollections: quickCollections\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9kaXNwbGF5L2NvbnRlbnQvcXVpY2tDb2xsZWN0aW9uUGxvdHNBbmRGb2xkZXJzSGFuZGxpbmcvZ2V0X3Bsb3RzX2FuZF9mb2xkZXJzX2Zyb21fd29ya3NwYWNlLnRzeD85ZTc2Il0sIm5hbWVzIjpbImFsbF93b3Jrc3BhY2VzIiwiZnVuY3Rpb25zX2NvbmZpZyIsIm1vZGUiLCJvbmxpbmVfd29ya3NwYWNlcyIsIm9mZmxpbmVfd29ya3NwYWNlcyIsImdldF9wbG90c19hbmRfZm9sZGVyc19mcm9tX3dvcmtzcGFjZSIsInNlbGVjdGVkX3dvcmtzcGFjZSIsImN1cnJlbnRfcGF0aCIsIndvcmtzcGFjZXNfc2VjdGlvbiIsImZvbGRlcnMiLCJxdWlja0NvbGxlY3Rpb25zIiwid29ya3NwYWNlX2luZm8iLCJ3b3Jrc3BhY2VzIiwiZmlsdGVyIiwid29ya3NwYWNlIiwibGFiZWwiLCJsZW5ndGgiLCJhbGxfZm9sZGVyc19wYXRoIiwiZm9sZGVyc1BhdGgiLCJsYXllcnMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJmb2xkZXJzX3BhdGgiLCJmb2xkZXJzX2luX3BhdGgiLCJxdWlja0NvbGxlY3Rpb25zX3dpdGhfZnVsbF9wYXRoIiwicXVpY2tfY29sbGVjdGlvbiIsInBhcnRzIiwibmFtZSIsInBvcCIsInBhdGgiLCJqb2luIiwiZm9sZGVyc18iLCJ1bmlxIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLCtEQUFnQixDQUFDQyxJQUFqQixLQUEwQixRQUExQixHQUFxQ0MsNkRBQXJDLEdBQXlEQyw4REFBaEY7QUFFTyxJQUFNQyxvQ0FBb0MsR0FBRyxTQUF2Q0Esb0NBQXVDLENBQUNDLGtCQUFELEVBQXFCQyxZQUFyQixFQUFzQztBQUN4RixNQUFJQyxrQkFBSjtBQUNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxnQkFBSjs7QUFId0YsNkNBSzdEVixjQUw2RDtBQUFBOztBQUFBO0FBS3hGLHdEQUEyQztBQUF0Q1Esd0JBQXNDO0FBQ3pDLFVBQU1HLGNBQWMsR0FBR0gsa0JBQWtCLENBQUNJLFVBQW5CLENBQThCQyxNQUE5QixDQUFxQyxVQUFBQyxTQUFTO0FBQUEsZUFBSUEsU0FBUyxDQUFDQyxLQUFWLEtBQW9CVCxrQkFBeEI7QUFBQSxPQUE5QyxDQUF2Qjs7QUFDQSxVQUFJSyxjQUFjLENBQUNLLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFBQTtBQUM3QixjQUFNQyxnQkFBZ0IsR0FBR04sY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQk8sV0FBM0M7QUFDQSxjQUFNQyxNQUFNLEdBQUdaLFlBQVksR0FBR0EsWUFBWSxDQUFDYSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCSixNQUEzQixHQUFvQyxDQUEvRCxDQUY2QixDQUc3Qjs7QUFDQSxjQUFJQyxnQkFBSixFQUFzQjtBQUNwQkksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0FWLG1CQUFPLEdBQUdRLGdCQUFnQixDQUFDTSxHQUFqQixDQUFxQixVQUFBQyxZQUFZLEVBQUk7QUFDN0Msa0JBQU1DLGVBQWUsR0FBR0QsWUFBWSxDQUFDSixLQUFiLENBQW1CLEdBQW5CLENBQXhCOztBQUNBLGtCQUFJSyxlQUFlLENBQUNULE1BQWhCLElBQTBCRyxNQUE5QixFQUFzQztBQUNwQyx1QkFBT00sZUFBZSxDQUFDTixNQUFELENBQXRCO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU8sRUFBUDtBQUNEO0FBQ0YsYUFQUyxDQUFWO0FBUUQsV0FWRCxNQVdLO0FBQ0hWLG1CQUFPLEdBQUcsSUFBVjtBQUNELFdBakI0QixDQWtCN0I7OztBQUNBLGNBQUlVLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2ZULDRCQUFnQixHQUFHLEVBQW5CO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQU1nQiwrQkFBK0IsR0FBR2YsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkQsZ0JBQTFEO0FBQ0FBLDRCQUFnQixHQUFHZ0IsK0JBQStCLENBQUNILEdBQWhDLENBQW9DLFVBQUFJLGdCQUFnQixFQUFJO0FBQ3pFLGtCQUFNQyxLQUFLLEdBQUdELGdCQUFnQixDQUFDUCxLQUFqQixDQUF1QixHQUF2QixDQUFkO0FBQ0Esa0JBQU1TLElBQUksR0FBR0QsS0FBSyxDQUFDRSxHQUFOLEVBQWI7QUFDQSxrQkFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLElBQU4sQ0FBVyxHQUFYLENBQWI7QUFDQSxxQkFBTztBQUFFSCxvQkFBSSxFQUFKQSxJQUFGO0FBQVFFLG9CQUFJLEVBQUpBO0FBQVIsZUFBUDtBQUNELGFBTGtCLENBQW5CO0FBTUQ7O0FBQ0Q7QUE5QjZCOztBQUFBLDhCQThCN0I7QUFDRDtBQUNGO0FBdkN1RjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdDeEYsTUFBTUUsUUFBUSxHQUFHeEIsT0FBTyxHQUFHeUIsa0RBQUksQ0FBQ3pCLE9BQUQsQ0FBSixDQUFjSSxNQUFkLENBQXFCc0IsT0FBckIsQ0FBSCxHQUFtQyxJQUEzRCxDQXhDd0YsQ0F3Q3hCOztBQUNoRSxTQUFPO0FBQUUxQixXQUFPLEVBQUV3QixRQUFYO0FBQXFCdkIsb0JBQWdCLEVBQWhCQTtBQUFyQixHQUFQO0FBQ0QsQ0ExQ00iLCJmaWxlIjoiLi9jb250YWluZXJzL2Rpc3BsYXkvY29udGVudC9xdWlja0NvbGxlY3Rpb25QbG90c0FuZEZvbGRlcnNIYW5kbGluZy9nZXRfcGxvdHNfYW5kX2ZvbGRlcnNfZnJvbV93b3Jrc3BhY2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5pcSB9IGZyb20gJ3JhbWRhJztcblxuaW1wb3J0IHsgd29ya3NwYWNlcyBhcyBvbmxpbmVfd29ya3NwYWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3dvcmtzcGFjZXMvb25saW5lJ1xuaW1wb3J0IHsgd29ya3NwYWNlcyBhcyBvZmZsaW5lX3dvcmtzcGFjZXMgfSBmcm9tICcuLi8uLi8uLi8uLi93b3Jrc3BhY2VzL29mZmxpbmUnXG5pbXBvcnQgeyBmdW5jdGlvbnNfY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcblxuY29uc3QgYWxsX3dvcmtzcGFjZXMgPSBmdW5jdGlvbnNfY29uZmlnLm1vZGUgPT09ICdPTkxJTkUnID8gb25saW5lX3dvcmtzcGFjZXMgOiBvZmZsaW5lX3dvcmtzcGFjZXNcblxuZXhwb3J0IGNvbnN0IGdldF9wbG90c19hbmRfZm9sZGVyc19mcm9tX3dvcmtzcGFjZSA9IChzZWxlY3RlZF93b3Jrc3BhY2UsIGN1cnJlbnRfcGF0aCkgPT4ge1xuICBsZXQgd29ya3NwYWNlc19zZWN0aW9uO1xuICBsZXQgZm9sZGVycztcbiAgbGV0IHF1aWNrQ29sbGVjdGlvbnM7XG5cbiAgZm9yICh3b3Jrc3BhY2VzX3NlY3Rpb24gb2YgYWxsX3dvcmtzcGFjZXMpIHtcbiAgICBjb25zdCB3b3Jrc3BhY2VfaW5mbyA9IHdvcmtzcGFjZXNfc2VjdGlvbi53b3Jrc3BhY2VzLmZpbHRlcih3b3Jrc3BhY2UgPT4gd29ya3NwYWNlLmxhYmVsID09PSBzZWxlY3RlZF93b3Jrc3BhY2UpXG4gICAgaWYgKHdvcmtzcGFjZV9pbmZvLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFsbF9mb2xkZXJzX3BhdGggPSB3b3Jrc3BhY2VfaW5mb1swXS5mb2xkZXJzUGF0aDtcbiAgICAgIGNvbnN0IGxheWVycyA9IGN1cnJlbnRfcGF0aCA/IGN1cnJlbnRfcGF0aC5zcGxpdCgnLycpLmxlbmd0aCA6IDBcbiAgICAgIC8vYWxsX2ZvbGRlcnNfcGF0aCBjYW4gYmUgbnVsbCwgd2hlbiBpdCBoYXMgbm8gZm9sZGVycyBpbiB3b3Jrc3BhY2VcbiAgICAgIGlmIChhbGxfZm9sZGVyc19wYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxheWVycylcbiAgICAgICAgZm9sZGVycyA9IGFsbF9mb2xkZXJzX3BhdGgubWFwKGZvbGRlcnNfcGF0aCA9PiB7XG4gICAgICAgICAgY29uc3QgZm9sZGVyc19pbl9wYXRoID0gZm9sZGVyc19wYXRoLnNwbGl0KCcvJylcbiAgICAgICAgICBpZiAoZm9sZGVyc19pbl9wYXRoLmxlbmd0aCA+PSBsYXllcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2xkZXJzX2luX3BhdGhbbGF5ZXJzXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZm9sZGVycyA9IG51bGxcbiAgICAgIH1cbiAgICAgIC8vIHF1aWNrQ29sbGVjdGlvbnMgc2hvdWxkIGJlIHNob3duIGp1c3Qgb24gdGhlIHRvcCBsZXZlbCBvZiBmb2xkZXJzJyBzdHJ1Y3R1cmVcbiAgICAgIGlmIChsYXllcnMgPj0gMSkge1xuICAgICAgICBxdWlja0NvbGxlY3Rpb25zID0gW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHF1aWNrQ29sbGVjdGlvbnNfd2l0aF9mdWxsX3BhdGggPSB3b3Jrc3BhY2VfaW5mb1swXS5xdWlja0NvbGxlY3Rpb25zXG4gICAgICAgIHF1aWNrQ29sbGVjdGlvbnMgPSBxdWlja0NvbGxlY3Rpb25zX3dpdGhfZnVsbF9wYXRoLm1hcChxdWlja19jb2xsZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IHF1aWNrX2NvbGxlY3Rpb24uc3BsaXQoJy8nKVxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBwYXJ0cy5wb3AoKVxuICAgICAgICAgIGNvbnN0IHBhdGggPSBwYXJ0cy5qb2luKCcvJylcbiAgICAgICAgICByZXR1cm4geyBuYW1lLCBwYXRoIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBmb2xkZXJzXyA9IGZvbGRlcnMgPyB1bmlxKGZvbGRlcnMpLmZpbHRlcihCb29sZWFuKSA6IG51bGwgLy9maWx0ZXIoQm9vbGVhbikgcmVtb3ZlcyBlbXB0eSBhbmQgdW5kZWYgdmFsdWVzIGZyb20gYXJyYXlcbiAgcmV0dXJuIHsgZm9sZGVyczogZm9sZGVyc18sIHF1aWNrQ29sbGVjdGlvbnMgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/display/content/quickCollectionPlotsAndFoldersHandling/get_plots_and_folders_from_workspace.tsx\n");

/***/ })

})