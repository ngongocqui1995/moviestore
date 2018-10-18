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
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
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
      activeTab: 0,
      data: _this.props.data,
      videos: [],
      linkVideo: "",
      imagePoster: ""
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClickWatchMovie = _this.onClickWatchMovie.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tab_Video, [{
    key: "onClickWatchMovie",
    value: function onClickWatchMovie(prop) {
      if (prop.linkVideo !== undefined) {
        var video = videojs('my-video');
        video.src([{
          src: "".concat(prop.linkVideo, "?authen=exp=1540052097~acl=/R4BehICXpk0/*~hmac=5c8eb39f518e85d5bb061d4f6b5b6886"),
          type: 'video/mp4'
        }]);
        video.load();
        video.play();
        this.setState({
          linkVideo: prop.linkVideo + "?authen=exp=1540052097~acl=/R4BehICXpk0/*~hmac=5c8eb39f518e85d5bb061d4f6b5b6886"
        });
      }
    }
  }, {
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
        var videos = data[0].videos.reverse();
        var imagePoster = data[0].coverImage;
        this.setState({
          videos: videos,
          imagePoster: imagePoster
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          videos = _this$state.videos,
          data = _this$state.data,
          activeTab = _this$state.activeTab,
          linkVideo = _this$state.linkVideo,
          imagePoster = _this$state.imagePoster;
      console.log(data);

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
          id: "my-video",
          className: "video-js vjs-big-play-centered",
          autoPlay: true,
          controls: true,
          style: {
            width: "100%"
          },
          poster: _variables_general__WEBPACK_IMPORTED_MODULE_4__["url"] + imagePoster || ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          tabs: true,
          style: {
            cursor: "pointer"
          }
        }, !videos || videos.length === 0 ? "" : videos.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
              active: activeTab === key
            }),
            onClick: function onClick() {
              _this2.toggle(key);
            },
            style: {
              backgroundColor: activeTab === key ? "#b08cf9" : "#ffffff",
              margin: 2
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, prop.title)));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
          activeTab: activeTab
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "adonis-album-list pt-e-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-number h6 inactive-color"
        }, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-title h6 inactive-color"
        }, "Phim"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-duration h6 inactive-color"
        }, "Th\u1EDDi Gian"))), !videos || videos.length === 0 ? "" : videos.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
            key: key,
            tabId: key,
            style: {
              cursor: "pointer"
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "adonis-album-list pb-5",
            style: {
              overflow: "auto",
              height: 500
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null), prop.episodes && prop.episodes.length > 0 ? prop.episodes.map(function (prop, key) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              key: key,
              className: "item hover-bg-item",
              onClick: function onClick() {
                _this2.onClickWatchMovie(prop);
              }
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
          }) : null));
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
//# sourceMappingURL=Detail.js.34c0c24a890394935592.hot-update.js.map