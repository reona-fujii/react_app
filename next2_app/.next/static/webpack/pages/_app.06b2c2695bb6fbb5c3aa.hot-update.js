webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n // ステートの初期値\n\nconst initial = {\n  message: 'START',\n  count: 0\n}; // レデューサー\n\nfunction counterReducer(state = initial, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        message: 'INCREMENT',\n        count: StaticRange.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        message: 'DECREMENT',\n        count: StaticRange.count - 1\n      };\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        count: initial.count\n      };\n\n    default:\n      return state;\n  }\n} // initStore関数(redux-store.jsで必要)\n// applyMiddleware(thunkMiddleware)はNext.jsでReduxの機能がうまく動くようにしている\n\n\nfunction initStore(state = initial) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImNvdW50IiwiY291bnRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTdGF0aWNSYW5nZSIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRSxPQURLO0FBRWRDLE9BQUssRUFBRTtBQUZPLENBQWhCLEMsQ0FLQTs7QUFDQSxTQUFTQyxjQUFULENBQXlCQyxLQUFLLEdBQUdKLE9BQWpDLEVBQTBDSyxNQUExQyxFQUFrRDtBQUNoRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFdBQUw7QUFDRSxhQUFPO0FBQ0xMLGVBQU8sRUFBRSxXQURKO0FBRUxDLGFBQUssRUFBRUssV0FBVyxDQUFDTCxLQUFaLEdBQW1CO0FBRnJCLE9BQVA7O0FBSUYsU0FBSyxXQUFMO0FBQ0UsYUFBTztBQUNMRCxlQUFPLEVBQUUsV0FESjtBQUVMQyxhQUFLLEVBQUVLLFdBQVcsQ0FBQ0wsS0FBWixHQUFtQjtBQUZyQixPQUFQOztBQUlGLFNBQUssT0FBTDtBQUNFLGFBQU87QUFDTEQsZUFBTyxFQUFFLE9BREo7QUFFTEMsYUFBSyxFQUFFRixPQUFPLENBQUNFO0FBRlYsT0FBUDs7QUFJRjtBQUNFLGFBQU9FLEtBQVA7QUFqQko7QUFtQkQsQyxDQUVEO0FBQ0E7OztBQUNPLFNBQVNJLFNBQVQsQ0FBbUJKLEtBQUssR0FBR0osT0FBM0IsRUFBb0M7QUFDekMsU0FBT1MseURBQVcsQ0FBQ04sY0FBRCxFQUFpQkMsS0FBakIsRUFBd0JNLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQWxCO0FBQ0QiLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vLyDjgrnjg4bjg7zjg4jjga7liJ3mnJ/lgKRcbmNvbnN0IGluaXRpYWwgPSB7XG4gIG1lc3NhZ2U6ICdTVEFSVCcsXG4gIGNvdW50OiAwXG59XG5cbi8vIOODrOODh+ODpeODvOOCteODvFxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdJTkNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogJ0lOQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OiBTdGF0aWNSYW5nZS5jb3VudCArMVxuICAgICAgfTtcbiAgICBjYXNlICdERUNSRU1FTlQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogJ0RFQ1JFTUVOVCcsXG4gICAgICAgIGNvdW50OiBTdGF0aWNSYW5nZS5jb3VudCAtMVxuICAgICAgfTtcbiAgICBjYXNlICdSRVNFVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiAnUkVTRVQnLFxuICAgICAgICBjb3VudDogaW5pdGlhbC5jb3VudFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIGluaXRTdG9yZemWouaVsChyZWR1eC1zdG9yZS5qc+OBp+W/heimgSlcbi8vIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUp44GvTmV4dC5qc+OBp1JlZHV444Gu5qmf6IO944GM44GG44G+44GP5YuV44GP44KI44GG44Gr44GX44Gm44GE44KLXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})