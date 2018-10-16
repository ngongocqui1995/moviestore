webpackHotUpdate("static\\development\\pages\\Detail.js",{

/***/ "./pages/Detail.js":
/*!*************************!*\
  !*** ./pages/Detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, _getPrototypeOf(Detail).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "wrap",
        className: "light main-wrap clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box-text-over lg box-rounded-lg",
        style: {
          maxWidth: "100%",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "resize1",
        src: "/assets/images/single/single-2.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-3 flex-column-sidebar-md text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-image"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box d-inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina box-rounded-md",
        src: "/assets/images/single/single-2.jpg",
        "data-2x": "/assets/images/single/single-2@2x.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light",
        "data-album-id": "1",
        role: "button",
        tabindex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-play icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        id: "icon-brand-play",
        viewBox: "0 0 27 32",
        width: "100%",
        height: "100%"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-pause icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pb-4 d-inline-block album-likes"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pr-2"
      }, "1256"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "125K")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "About this album"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-9 flex-column-content-md pl-e-xl-40"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-top-box text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "inactive-color"
      }, "ALBUM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "album-title"
      }, "The Ones That Like Me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "By: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Danielle Bradberry"), "  classNameical"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "separator mb-4 mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "separator-md"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "14 Songs - 30 minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "adonis-album-list pb-5 pt-e-30"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number h6 inactive-color"
      }, "#"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title h6 inactive-color"
      }, "Song"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre h6 inactive-color"
      }, "Genre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration h6 inactive-color"
      }, "Time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon h6 inactive-color icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Begining To See The Light"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Ugly Christmas Sweater"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "10:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1010"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "03"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Feliz Navidad"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "11:08")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1110"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "04"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What are You Doing New Year's Eve?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "05"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Mashmallow World"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "12:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "06"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Hard Candy Christmas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "13:15")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1325"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Baby, It's Cold Outside"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "16:16")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1980"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "The Man With The Bag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "18:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1745"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "09"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What I'm Thankful for"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "19:26")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1428"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "10"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What I've Done - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1563"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "11"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Talking to Myself - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "17:16")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1536"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "\xA9 2018 Adonis Inc."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "more-items"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "title-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "title h3-md"
      }, "More By Danielle Bradbery")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "adonis-carousel auto-fit-columns",
        "data-auto-width": "no",
        "data-item-parent": ".owl-carousel",
        "data-auto-fit-items": ".item",
        "data-dots": "yes",
        "data-items-responsive": "0:1|400:2|600:3|900:4|1200:5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gutter-30"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "owl-carousel owl-theme-adonis"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-1.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-1@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-2.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-2@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-3.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-3@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-4.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-4@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-5.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-5@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-6.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-6@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-7.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-7@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-8.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-8@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-9.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-9@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-5 pt-e-lg-10"
      })))))));
    }
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var store, metaKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = Object(_store_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
            metaKey = context.query.metaKey;
            return _context.abrupt("return", {
              data: store.getState()
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Detail")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Detail.js.18c85f84be0623a2a177.hot-update.js.map