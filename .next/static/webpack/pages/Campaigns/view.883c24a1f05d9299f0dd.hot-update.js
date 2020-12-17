webpackHotUpdate_N_E("pages/Campaigns/view",{

/***/ "./pages/Campaigns/view.js":
/*!*********************************!*\
  !*** ./pages/Campaigns/view.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_campaings_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_campaings_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_campaings_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../component/layout */ "./component/layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_campaings_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_campaings_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_campaings_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var View = /*#__PURE__*/function (_React$Component) {
  Object(E_campaings_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(View, _React$Component);

  var _super = _createSuper(View);

  function View() {
    var _this;

    Object(E_campaings_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(E_campaings_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(E_campaings_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSummary", function () {
      var _this$props = _this.props,
          minContribution = _this$props.minContribution,
          balance = _this$props.balance,
          approversCount = _this$props.approversCount,
          requestsCount = _this$props.requestsCount,
          manager = _this$props.manager;
      var item = [{
        header: manager,
        description: 'managers address',
        fluid: true
      }, {
        header: minContribution,
        description: 'managers address',
        fluid: true
      }, {
        header: approversCount,
        description: 'managers address',
        fluid: true
      }, {
        header: requestsCount,
        description: 'managers address',
        fluid: true
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__["default"].utils.fromWei(balance, 'ether'),
        description: 'managers address',
        fluid: true
      }];
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Group, {
        items: item
      });
    });

    return _this;
  }

  Object(E_campaings_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(View, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_component_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: this.renderSummary()
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(E_campaings_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_campaings_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var campaign, summary;
        return E_campaings_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minContribution: summary[0],
                  balance: summary[1],
                  approversCount: summary[2],
                  requestsCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (View);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2FtcGFpZ25zL3ZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BzIiwibWluQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdHNDb3VudCIsIm1hbmFnZXIiLCJpdGVtIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJTdW1tYXJ5IiwiY2FtcGFpZ24iLCJnZXRDYW1wYWlnbnMiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozt3UUFlWSxZQUFJO0FBQUEsd0JBT1gsTUFBS0MsS0FQTTtBQUFBLFVBRVZDLGVBRlUsZUFFVkEsZUFGVTtBQUFBLFVBR1ZDLE9BSFUsZUFHVkEsT0FIVTtBQUFBLFVBSVZDLGNBSlUsZUFJVkEsY0FKVTtBQUFBLFVBS1ZDLGFBTFUsZUFLVkEsYUFMVTtBQUFBLFVBTVZDLE9BTlUsZUFNVkEsT0FOVTtBQVFkLFVBQU1DLElBQUksR0FBQyxDQUNOO0FBQ0dDLGNBQU0sRUFBRUYsT0FEWDtBQUVHRyxtQkFBVyxFQUFDLGtCQUZmO0FBR0dDLGFBQUssRUFBRTtBQUhWLE9BRE0sRUFLSDtBQUNBRixjQUFNLEVBQUVOLGVBRFI7QUFFQU8sbUJBQVcsRUFBQyxrQkFGWjtBQUdBQyxhQUFLLEVBQUU7QUFIUCxPQUxHLEVBVVA7QUFDSUYsY0FBTSxFQUFFSixjQURaO0FBRUlLLG1CQUFXLEVBQUMsa0JBRmhCO0FBR0lDLGFBQUssRUFBRTtBQUhYLE9BVk8sRUFlUDtBQUNJRixjQUFNLEVBQUVILGFBRFo7QUFFSUksbUJBQVcsRUFBQyxrQkFGaEI7QUFHSUMsYUFBSyxFQUFFO0FBSFgsT0FmTyxFQW9CUDtBQUNJRixjQUFNLEVBQUVHLHVEQUFJLENBQUNDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlYsT0FBbkIsRUFBMkIsT0FBM0IsQ0FEWjtBQUVJTSxtQkFBVyxFQUFDLGtCQUZoQjtBQUdJQyxhQUFLLEVBQUU7QUFIWCxPQXBCTyxDQUFYO0FBMEJBLDBCQUFPLDhEQUFDLHVEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRUg7QUFBbkIsUUFBUDtBQUNILEs7Ozs7Ozs7NkJBQ087QUFDSiwwQkFDSSw4REFBQywwREFBRDtBQUFBLGtCQUNLLEtBQUtPLGFBQUw7QUFETCxRQURKO0FBTUg7Ozs7K1FBekQ0QmIsSzs7Ozs7O0FBQ25CYyx3QixHQUFVQyxtRUFBWSxDQUFDZixLQUFLLENBQUNnQixLQUFOLENBQVlDLE9BQWIsQzs7dUJBQ05ILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEU7OztBQUFoQkMsdUI7aURBRUM7QUFDRnBCLGlDQUFlLEVBQUVvQixPQUFPLENBQUMsQ0FBRCxDQUR0QjtBQUVGbkIseUJBQU8sRUFBRW1CLE9BQU8sQ0FBQyxDQUFELENBRmQ7QUFHRmxCLGdDQUFjLEVBQUVrQixPQUFPLENBQUMsQ0FBRCxDQUhyQjtBQUlGakIsK0JBQWEsRUFBRWlCLE9BQU8sQ0FBQyxDQUFELENBSnBCO0FBS0ZoQix5QkFBTyxFQUFFZ0IsT0FBTyxDQUFDLENBQUQ7QUFMZCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUxJQyw2Q0FBSyxDQUFDQyxTOztBQThEVnhCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NhbXBhaWducy92aWV3Ljg4M2MyNGExZjA1ZDkyOTlmMGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9sYXlvdXQnO1xyXG5pbXBvcnQgZ2V0Q2FtcGFpZ25zIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY2xhc3MgVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduPSBnZXRDYW1wYWlnbnMocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgbWluQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICAgICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF1cclxuXHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdW1tYXJ5PSgpPT57XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBtaW5Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgICAgICBtYW5hZ2VyXHJcbiAgICAgICAgfT0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpdGVtPVtcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidtYW5hZ2VycyBhZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbkNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidtYW5hZ2VycyBhZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonbWFuYWdlcnMgYWRkcmVzcycsXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonbWFuYWdlcnMgYWRkcmVzcycsXHJcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCdldGhlcicpLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J21hbmFnZXJzIGFkZHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW19Lz5cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1bW1hcnkoKX1cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3OyJdLCJzb3VyY2VSb290IjoiIn0=