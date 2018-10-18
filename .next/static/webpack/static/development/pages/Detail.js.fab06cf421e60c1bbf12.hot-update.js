webpackHotUpdate("static\\development\\pages\\Detail.js",{

/***/ "./components/Tabs/Tab_Video.js":
/*!**************************************!*\
  !*** ./components/Tabs/Tab_Video.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab_Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
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
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeTab: '1'
    };
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
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        id: "my-video",
        className: "video-js vjs-big-play-centered preview-player-dimensions",
        autoPlay: true,
        controls: true,
        preload: "true",
        style: {
          width: "100%",
          height: 275
        },
        poster: "MY_VIDEO_POSTER.jpg",
        crossOrigin: "anonymous"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: "https://scontent-nrt1-1.xx.fbcdn.net/v/t66.18014-6/10000000_246516985946901_3673472486675015888_n.mp4?_nc_cat=109&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-nrt1-1.xx&oh=c562ef01207a4f01c409631e725a75a1&oe=5C452866",
        type: "video/mp4"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        tabs: true,
        style: {
          cursor: "pointer"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tab 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tab 2")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
        activeTab: this.state.activeTab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "adonis-album-list pt-e-30"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number h6 inactive-color"
      }, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title h6 inactive-color"
      }, "Phim"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration h6 inactive-color"
      }, "Th\u1EDDi Gian"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
        tabId: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "adonis-album-list pb-5",
        style: {
          overflow: "auto",
          height: 500
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), prop.videos && prop.videos.length > 0 ? prop.videos[0].episodes.map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: key,
          className: "item hover-bg-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-number"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "hover-hide"
        }, key + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "hover-show adonis-icon icon-1x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-brand-play"
        })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-title"
        }, prop.title, prop.numberEpisodes !== "" ? " t\u1EADp ".concat(prop.numberEpisodes) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-duration"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "hover-hide hover-lg-show"
        }, prop.timeASet)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-bg gradient-adonis"
        }));
      }) : null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
        tabId: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        body: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Special Title Treatment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], null, "With supporting text below as a natural lead-in to additional content."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Go somewhere"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        body: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Special Title Treatment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], null, "With supporting text below as a natural lead-in to additional content."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Go somewhere")))))));
    }
  }]);

  return Tab_Video;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=Detail.js.fab06cf421e60c1bbf12.hot-update.js.map