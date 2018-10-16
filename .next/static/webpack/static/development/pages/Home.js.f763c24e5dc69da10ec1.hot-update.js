webpackHotUpdate("static\\development\\pages\\Home.js",{

/***/ "./components/Home/CarouselTop.js":
/*!****************************************!*\
  !*** ./components/Home/CarouselTop.js ***!
  \****************************************/
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





var CarouselTop =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselTop, _Component);

  function CarouselTop(props) {
    var _this;

    _classCallCheck(this, CarouselTop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselTop).call(this, props));
    _this.state = {
      data: [],
      isLoading: false
    };
    return _this;
  }

  _createClass(CarouselTop, [{
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "adonis-carousel mb-3",
        "data-auto-width": "yes",
        "data-loop": "yes",
        "data-center": "yes",
        "data-dots": "yes",
        "data-responsive-width": "0:70%|600:580px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gutter-30"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "owl-carousel owl-theme-adonis"
      }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "radio"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box-text-over lg box-rounded-lg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "resize1",
          style: {
            height: 380
          },
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-info"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-highlight-dark"
        }, prop.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-highlight-dark"
        }, "T\u1EADp ".concat(prop.episodes || ""))))))));
      }))));
    }
  }]);

  return CarouselTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.carousel_Main_Home
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CarouselTop));

/***/ })

})
//# sourceMappingURL=Home.js.f763c24e5dc69da10ec1.hot-update.js.map