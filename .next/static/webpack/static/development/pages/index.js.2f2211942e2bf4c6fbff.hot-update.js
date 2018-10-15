webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Cenima/NewUpdate_Cenima.js":
/*!***********************************************!*\
  !*** ./components/Cenima/NewUpdate_Cenima.js ***!
  \***********************************************/
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





var NewUpdate_Cenima =
/*#__PURE__*/
function (_Component) {
  _inherits(NewUpdate_Cenima, _Component);

  function NewUpdate_Cenima(datas) {
    var _this;

    _classCallCheck(this, NewUpdate_Cenima);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewUpdate_Cenima).call(this, datas));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(NewUpdate_Cenima, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "title h3"
        }, "M\u1EDBi c\u1EADp nh\u1EADt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel viewport-animate",
          "data-animation": "slideUp",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-items": "7",
          "data-items-responsive": "0:1|300:2|900:4|1200:5|1600:7"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[0] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[0].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[0].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[1] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[1].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[1].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[2] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[2].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[2].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[3] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[3].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[3].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[4] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[4].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[4].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[5] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[5].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[5].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[6] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[6].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[6].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data[7] ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            height: 200
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[7].imageMain || "",
          "data-2x": "assets/images/new-releases/new-releases-1@2x.jpg",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top-right pr-e-20 pt-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer dropdown-menu-toggle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-horizontal-dots"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, data[7].title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        }));
      }
    }
  }]);

  return NewUpdate_Cenima;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.carousel_Cenima
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CarouselTop_Cenima));

/***/ })

})
//# sourceMappingURL=index.js.2f2211942e2bf4c6fbff.hot-update.js.map