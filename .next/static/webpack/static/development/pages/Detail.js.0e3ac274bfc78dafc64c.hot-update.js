webpackHotUpdate("static\\development\\pages\\Detail.js",{

/***/ "./components/Tabs/Tab_Video.js":
/*!**************************************!*\
  !*** ./components/Tabs/Tab_Video.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Tab_Video =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab_Video, _Component);

  function Tab_Video(props) {
    var _this;

    _classCallCheck(this, Tab_Video);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab_Video).call(this, props));
    _this.state = {
      activeTab: '1',
      data: _this.props.data,
      videos: []
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tab_Video, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.state.data;

      if (data.length > 0) {
        var videos = data[0].videos;
        this.setState({
          videos: videos
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          videos = _this$state.videos,
          data = _this$state.data,
          activeTab = _this$state.activeTab;
      console.log(data);

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tab-style-1 scroll-x",
          style: {
            maxHeight: 50,
            fontSize: 2
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "nav nav-border"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item active"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link active",
          "data-toggle": "tab",
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-3x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 15"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          "data-name": "Layer 2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "overviews_icon",
          "data-name": "overviews icon",
          className: "cls-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "overviews_icon-2",
          "data-name": "overviews icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          className: "cls-2",
          d: "M16,1.4A1.43,1.43,0,0,0,14.55,0l-8,.7a1.43,1.43,0,0,0-1.45,1.4v7h0v2.78h0a2,2,0,0,1,0,.38,2.14,2.14,0,0,1-2.19,2.09,2.1,2.1,0,1,1,0-4.19,2.25,2.25,0,0,1,.72.13v-.13h0a.34.34,0,0,0,0-.69h0a.33.33,0,0,0-.18.06,2.75,2.75,0,0,0-.54-.06A2.85,2.85,0,0,0,0,12.22,2.85,2.85,0,0,0,2.91,15a2.85,2.85,0,0,0,2.91-2.78s0,0,0-.06h0V2.09a.71.71,0,0,1,.73-.7l8-.7a.71.71,0,0,1,.73.7v7h0v2.78h0a2,2,0,0,1,0,.36,2.19,2.19,0,1,1-2.19-2.08,2.27,2.27,0,0,1,.72.12V9.44h0a.36.36,0,0,0,.36-.36h0a.36.36,0,0,0-.36-.36h0a.35.35,0,0,0-.18.06,2.72,2.72,0,0,0-.52-.06A2.8,2.8,0,1,0,16,11.52h0Z"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          "data-toggle": "tab",
          href: "/cenima"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-4x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 455.005 455.005"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Chi\u1EBFu r\u1EA1p - Phim l\u1EBB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link",
          "data-toggle": "tab",
          href: "/romance"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-1x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 12.29 16.21"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".cls-1{isolation:isolate}.cls-2{fill-rule:evenodd}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          "data-name": "Layer 2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "new_music_icon",
          "data-name": "new music icon",
          className: "cls-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "new_music_icon-2",
          "data-name": "new music icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          className: "cls-2",
          d: "M6.37,16.21l.12,0H6.37ZM6.58.08h0L6.37,0V0h0a.4.4,0,0,0-.4.4V10.5a3.4,3.4,0,1,0,.81,2.91.39.39,0,0,0,.07-.21V1.12a7.6,7.6,0,0,1,3.26,2.74.39.39,0,0,0-.17,0,.4.4,0,1,0,.55.15l0,0,.63-.31A8.51,8.51,0,0,0,6.58.08ZM3.37,15.36a2.56,2.56,0,1,1,2.56-2.56A2.56,2.56,0,0,1,3.37,15.36ZM11.31,4.14V7c0,.23.08.46.09.7h.89A8.41,8.41,0,0,0,11.31,4.14Z"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "T\xECnh C\u1EA3m - Ng\xF4n T\xECnh"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link adonis-ajax-load",
          "data-toggle": "tab",
          href: "/anime"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-3x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 17.98 17.17"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".cls-1{isolation:isolate}.cls-2{fill-rule:evenodd}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          "data-name": "Layer 2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "playlist_icon",
          "data-name": "playlist icon",
          className: "cls-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "playlist_icon-2",
          "data-name": "playlist icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          className: "cls-2",
          d: "M.42.93A.44.44,0,0,0,0,1.38a.44.44,0,0,0,.42.45.44.44,0,0,0,.42-.45A.44.44,0,0,0,.42.93Zm0,5.41a.45.45,0,0,0,0,.91.45.45,0,0,0,0-.91Zm1.31.91H9.39a.45.45,0,0,0,.45-.45h0a.45.45,0,0,0-.45-.45H1.73a.45.45,0,0,0-.45.45h0A.45.45,0,0,0,1.73,7.24Zm0-5.41H9.39a.45.45,0,0,0,.45-.45h0A.45.45,0,0,0,9.39.93H1.73a.45.45,0,0,0-.45.45h0A.45.45,0,0,0,1.73,1.84ZM18,8.13h0Zm-.9-3.54,0,0h0A8.74,8.74,0,0,0,12.25.1.42.42,0,0,0,12.09,0L12,0V0h0a.43.43,0,0,0-.43.43v10.7A3.35,3.35,0,0,0,9,9.93a3.53,3.53,0,0,0-3.44,3.61A3.53,3.53,0,0,0,9,17.15a3.48,3.48,0,0,0,3.37-2.93.42.42,0,0,0,.06-.21V1.16A7.89,7.89,0,0,1,16.31,5h0a.44.44,0,0,0,0,.08.42.42,0,0,0,.59.16A.46.46,0,0,0,17.09,4.6ZM9,16.24a2.64,2.64,0,0,1-2.56-2.7A2.64,2.64,0,0,1,9,10.84a2.64,2.64,0,0,1,2.56,2.7A2.64,2.64,0,0,1,9,16.24Zm-4.73-4.5H1.73a.45.45,0,0,0-.45.45h0a.45.45,0,0,0,.45.45H4.27a.45.45,0,0,0,.45-.45h0A.45.45,0,0,0,4.27,11.74ZM12,17.17l.06,0H12ZM.42,11.74a.45.45,0,0,0,0,.91.45.45,0,0,0,0-.91Z"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Th\u1EBF gi\u1EDBi Anime"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link adonis-ajax-load",
          "data-toggle": "tab",
          href: "/comedy"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-3x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 16 16"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".cls-1{isolation:isolate}.cls-2{fill-rule:evenodd}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          "data-name": "Layer 2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "Stats_2",
          className: "cls-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "Stats_2-2",
          "data-name": "Stats_2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          className: "cls-2",
          d: "M15.67,0a.33.33,0,0,0-.33.33V1.94L12.89,3.22a1.85,1.85,0,1,0-2.5,2.67L9.57,7.72a1.84,1.84,0,0,0-.44-.06A1.86,1.86,0,0,0,7.27,9.52a1.84,1.84,0,0,0,.06.44l-1.83.81a1.86,1.86,0,1,0-2.61,2.55l-1,2H.33a.33.33,0,0,0,0,.65H14.77A1.23,1.23,0,0,0,16,14.77V.33A.33.33,0,0,0,15.67,0ZM10.22,4.35a1.2,1.2,0,0,1,2.27-.56h0a1.19,1.19,0,0,1,.14.55,1.21,1.21,0,1,1-2.41,0Zm-1.09,4A1.2,1.2,0,1,1,7.93,9.52,1.21,1.21,0,0,1,9.13,8.32Zm-6.37,3.5a1.22,1.22,0,1,1,.69,1.09h0A1.2,1.2,0,0,1,2.76,11.82Zm12.59,3a.57.57,0,0,1-.57.57H2.65l.82-1.74a1.83,1.83,0,0,0,.48.07,1.86,1.86,0,0,0,1.86-1.86,1.84,1.84,0,0,0-.06-.44l1.83-.81A1.86,1.86,0,1,0,10.17,8L11,6.15a1.84,1.84,0,0,0,.44.06,1.86,1.86,0,0,0,1.86-1.86,1.83,1.83,0,0,0-.09-.55l2.15-1.12Z"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "X\xE3 Stress - H\xE0i h\u01B0\u1EDBc"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "menu-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link adonis-ajax-load",
          "data-toggle": "tab",
          href: "/news"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pr-3 icon-3x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 17 17.01"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".cls-1{isolation:isolate}.cls-2{fill-rule:evenodd}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          "data-name": "Layer 2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "icon_genres",
          "data-name": "icon genres",
          className: "cls-1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          id: "icon_genres-2",
          "data-name": "icon genres"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          className: "cls-2",
          d: "M17,8.5a.39.39,0,0,0-.17-.32l-1.55-1,1.55-1a.39.39,0,0,0,0-.64L8.71.07a.38.38,0,0,0-.43,0L.17,5.48a.39.39,0,0,0,0,.64l1.55,1-1.55,1a.39.39,0,0,0,0,.64l1.55,1-1.55,1a.39.39,0,0,0,0,.64l8.11,5.41a.39.39,0,0,0,.43,0l8.11-5.41a.39.39,0,0,0,0-.64l-1.55-1,1.55-1A.39.39,0,0,0,17,8.5ZM1.08,5.8,8.5.85,15.92,5.8,8.5,10.74,2.63,6.83h0Zm14.83,5.41L8.5,16.16,1.08,11.21l1.33-.89,5.87,3.92a.39.39,0,0,0,.43,0l5.87-3.92ZM8.5,13.45,2.63,9.53h0l-1.54-1,1.33-.89,5.87,3.92a.39.39,0,0,0,.43,0l5.87-3.92,1.33.89Z"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tin T\u1EE9c")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          className: "border-hr"
        })));
      }
    }
  }]);

  return Tab_Video;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.movieInformation
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Tab_Video));

/***/ })

})
//# sourceMappingURL=Detail.js.0e3ac274bfc78dafc64c.hot-update.js.map