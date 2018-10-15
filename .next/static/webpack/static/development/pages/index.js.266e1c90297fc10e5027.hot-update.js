webpackHotUpdate("static\\development\\pages\\index.js",{

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
      data: [],
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
      var data = this.props.data;
      console.log(data);

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading ...");
      } else {
        var _React$createElement;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "news",
          className: "inactive-hide"
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
        }, _defineProperty(_React$createElement, "data-animation", "slideUp"), _defineProperty(_React$createElement, "data-column-width", ".masonry-item"), _React$createElement), !data || data.length === 0 ? "" : data.map(function (prop, key) {
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
          }, "T\u1EADp ", prop.episodesCurrent || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || ""), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "excerpt"
          }, prop.content || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Oct 6th, 2017 by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Jon Snow"))))));
        })))));
      }
    }
  }]);

  return MainNews;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.mainNews
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MainNews));

/***/ })

})
//# sourceMappingURL=index.js.266e1c90297fc10e5027.hot-update.js.map