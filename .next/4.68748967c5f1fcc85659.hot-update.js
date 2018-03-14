webpackHotUpdate(4,{

/***/ "./components/Prices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/leonelaguzman/Documents/React/nextCC/components/Prices.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Prices = function (_Component) {
  _inherits(Prices, _Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Prices.__proto__ || Object.getPrototypeOf(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currency: 'USD'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Prices, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = '';

      if (this.state.currency === 'USD') {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'list-group-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          'Bitcoin rate for ',
          this.props.bpi.USD.description,
          ':\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'badge badge-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            this.props.bpi.USD.code
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            '\xA0',
            this.props.bpi.USD.rate
          )
        );
      } else if (this.state.currency === 'GBP') {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'list-group-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          'Bitcoin rate for ',
          this.props.bpi.GBP.description,
          ':\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'badge badge-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            this.props.bpi.GBP.code
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            '\xA0',
            this.props.bpi.GBP.rate
          )
        );
      } else if (this.state.currency === 'EUR') {
        list = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'list-group-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'Bitcoin rate for ',
          this.props.bpi.EUR.description,
          ':\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'badge badge-primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            this.props.bpi.EUR.code
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            '\xA0',
            this.props.bpi.EUR.rate
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'list-group', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          list
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'select',
          { onChange: function onChange(e) {
              return _this2.setState({ currency: e.target.value });
            },
            className: 'form-control', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: 'USD', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            'USD'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: 'GBP', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            'GBP'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: 'EUR', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            'EUR'
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Prices;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Prices;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prices, 'Prices', '/Users/leonelaguzman/Documents/React/nextCC/components/Prices.js');
  reactHotLoader.register(_default, 'default', '/Users/leonelaguzman/Documents/React/nextCC/components/Prices.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.68748967c5f1fcc85659.hot-update.js.map