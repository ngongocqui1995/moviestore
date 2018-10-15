webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home/NewUpdate.js":
/*!**************************************!*\
  !*** ./components/Home/NewUpdate.js ***!
  \**************************************/
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





var NewUpdate =
/*#__PURE__*/
function (_Component) {
  _inherits(NewUpdate, _Component);

  function NewUpdate(datas) {
    var _this;

    _classCallCheck(this, NewUpdate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewUpdate).call(this, datas));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(NewUpdate, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".adonis-carousel").each(function () {
        adonisObj.carousel($(this));
      });
    }
  }, {
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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "sub-title inactive-color"
        }, "New Update"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "M\u1EDBi c\u1EADp nh\u1EADt (Li\xEAn t\u1EE5c 24/7)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-scrollbar": "yes",
          "data-loop": "no",
          "data-auto-width": "yes",
          "data-responsive-width": "0:100%|400:50%|730:33.33%|1100:25%|1460:20%"
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[0].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[0].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[1].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[1].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[2].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[2].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[3].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[3].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[4].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[4].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
            height: 218
          },
          className: "retina",
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + data[5].imageMain + "/293/218" || "",
          "data-2x": "assets/images/videos/videos-1@2x.jpg",
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
          className: "absolute-bottom-right pr-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "mr-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon text-light pointer icon-2x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-heart-blank"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
        }, data[5].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "sub-title category"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "Adonis Music Pop"))))))));
      }
    }
  }]);

  return NewUpdate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.newUpdate
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(NewUpdate));

/***/ })

})
//# sourceMappingURL=index.js.f1683ffa3e80862299e7.hot-update.js.map