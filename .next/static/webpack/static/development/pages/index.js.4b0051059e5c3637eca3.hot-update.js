webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home/CommonMovies.js":
/*!*****************************************!*\
  !*** ./components/Home/CommonMovies.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CommonMovies =
/*#__PURE__*/
function (_Component) {
  _inherits(CommonMovies, _Component);

  function CommonMovies(props) {
    var _this;

    _classCallCheck(this, CommonMovies);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommonMovies).call(this, props));
    _this.state = {
      data_1: [],
      data_2: [],
      data_3: [],
      data_4: [],
      data_5: [],
      data_6: []
    };
    return _this;
  }

  _createClass(CommonMovies, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".adonis-carousel").each(function () {
        adonisObj.carousel($(this));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data_1 = _this$props.data_1,
          data_2 = _this$props.data_2,
          data_3 = _this$props.data_3,
          data_4 = _this$props.data_4,
          data_5 = _this$props.data_5,
          data_6 = _this$props.data_6;

      if (!data_1 || data_1.lenght === 0 || !data_2 || data_2.lenght === 0 || !data_3 || data_3.lenght === 0 || !data_4 || data_4.lenght === 0 || !data_5 || data_5.lenght === 0 || !data_6 || data_6.lenght === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, " Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex flex-row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "T\u1ED5ng h\u1EE3p"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel music-img-box-cont-sm auto-fit-columns",
          "data-auto-fit-items": ".item",
          "data-item-parent": ".owl-carousel",
          "data-item-width": "336",
          "data-item-max-width": "630",
          "data-animation-item": ".item",
          "data-auto-width": "yes",
          "data-loop": "no",
          "data-dots": "yes"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_1 || data_1.length === 0 ? "" : data_1.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_2 || data_2.length === 0 ? "" : data_2.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_3 || data_3.length === 0 ? "" : data_3.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_4 || data_4.length === 0 ? "" : data_4.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_5 || data_5.length === 0 ? "" : data_5.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_6 || data_6.length === 0 ? "" : data_6.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state d-flex justify-content-between align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex align-items-center"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer mr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer dropdown-menu-toggle"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "icon-dot-nav-horizontal text-light"
          })))));
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        }));
      }
    }
  }]);

  return CommonMovies;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data_1: state.commonMovies_1,
    data_2: state.commonMovies_2,
    data_3: state.commonMovies_3,
    data_4: state.commonMovies_4,
    data_5: state.commonMovies_5,
    data_6: state.commonMovies_6
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CommonMovies));

/***/ })

})
//# sourceMappingURL=index.js.4b0051059e5c3637eca3.hot-update.js.map