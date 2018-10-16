webpackHotUpdate("static\\development\\pages\\News.js",{

/***/ "./views/MainNews.js":
/*!***************************!*\
  !*** ./views/MainNews.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables/general */ "./variables/general.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MainNews =
/*#__PURE__*/
function (_Component) {
  _inherits(MainNews, _Component);

  function MainNews(datas) {
    var _this;

    _classCallCheck(this, MainNews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainNews).call(this, datas));
    _this.state = {
      data_1: [],
      data_2: [],
      data_3: [],
      data_4: [],
      data_5: [],
      data_6: [],
      data_7: [],
      data_8: [],
      data_9: [],
      data_10: [],
      isLoading: false
    };
    return _this;
  }

  _createClass(MainNews, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      adonisObj.masonry('.adonis-masonry');
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
          data_6 = _this$props.data_6,
          data_7 = _this$props.data_7,
          data_8 = _this$props.data_8,
          data_9 = _this$props.data_9,
          data_10 = _this$props.data_10;

      if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || !data_4 || data_4.length === 0 || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0 || !data_7 || data_7.length === 0 || !data_8 || data_8.length === 0 || !data_9 || data_9.length === 0 || !data_10 || data_10.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading ...");
      } else {
        var _React$createElement;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "news",
          className: "inactive-hide active"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
          id: "main"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box text-center mb-5"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "sub-title inactive-color"
        }, "Tin T\u1EE9c/Phim \u0111i\u1EC7n \u1EA3nh"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title"
        }, "L\xE3ng m\u1EA1n, ng\u1ECDt ng\xE0o ph\u1EA3i ch\u0103ng l\xE0 \u0111\xE3 y\xEAu ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement = {
          className: "adonis-news-articles adonis-masonry row adonis-effect adonis-animate",
          "data-animation": "fadeInSkew",
          "data-column-width": ".masonry-item",
          "data-animation-item": ".masonry-item"
        }, _defineProperty(_React$createElement, "data-animation", "slideUp"), _defineProperty(_React$createElement, "data-column-width", ".masonry-item"), _React$createElement), !data_1 || data_1.length === 0 ? "" : data_1.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_2 || data_2.length === 0 ? "" : data_2.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_3 || data_3.length === 0 ? "" : data_3.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_4 || data_4.length === 0 ? "" : data_4.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_5 || data_5.length === 0 ? "" : data_5.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_6 || data_6.length === 0 ? "" : data_6.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_7 || data_7.length === 0 ? "" : data_7.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_8 || data_8.length === 0 ? "" : data_8.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_9 || data_9.length === 0 ? "" : data_9.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        }), !data_10 || data_10.length === 0 ? "" : data_10.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "col-sm-6 col-md-4 col-lg-3 masonry-item mb-4"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "news-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "box-rounded-sm img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "info-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "mb-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#",
            className: "color-active fs-1"
          }, "T\u1EADp ", prop.episodes || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ph\xE1t h\xE0nh ng\xE0y ".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(prop.createdAt).format("DD-MM-YYYY"))))));
        })))));
      }
    }
  }]);

  return MainNews;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data_1: state.mainNews_1,
    data_2: state.mainNews_2,
    data_3: state.mainNews_3,
    data_4: state.mainNews_4,
    data_5: state.mainNews_5,
    data_6: state.mainNews_6,
    data_7: state.mainNews_7,
    data_8: state.mainNews_8,
    data_9: state.mainNews_9,
    data_10: state.mainNews_10
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MainNews));

/***/ })

})
//# sourceMappingURL=News.js.b6bcea0306a996692a95.hot-update.js.map