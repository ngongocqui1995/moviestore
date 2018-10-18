webpackHotUpdate("static\\development\\pages\\Detail.js",{

/***/ "./components/Detail/MovieInformation.js":
/*!***********************************************!*\
  !*** ./components/Detail/MovieInformation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MovieInformation =
/*#__PURE__*/
function (_Component) {
  _inherits(MovieInformation, _Component);

  function MovieInformation(props) {
    var _this;

    _classCallCheck(this, MovieInformation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MovieInformation).call(this, props));
    _this.state = {
      data: _this.props.data,
      categories: [],
      countries: [],
      fansub: [],
      isLoading: false
    };
    return _this;
  }

  _createClass(MovieInformation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.state.data;

      if (data.length > 0) {
        var categories = data[0].categories;
        var countries = data[0].countries;
        var fansub = data[0].fansub;
        this.setState({
          categories: categories,
          countries: countries,
          fansub: fansub
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          categories = _this$state.categories,
          countries = _this$state.countries,
          fansub = _this$state.fansub;
      console.log(data);

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-detail"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box-text-over lg box-rounded-lg"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "resize1",
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.coverImage || "",
            style: {
              width: "100%",
              height: 300,
              marginBottom: 20
            },
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "row"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-3 flex-column-sidebar-md text-center text-md-left"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "album-image"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "music-img-box d-inline-block"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "retina box-rounded-md",
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "absolute-info"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light",
            "data-album-id": "1",
            role: "button",
            tabIndex: "0"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon icon-pause icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            height: "20",
            viewBox: "0 0 29 32"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
          }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "pb-4 d-inline-block album-likes"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon pr-2 icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pr-2"
          }, "L\u01B0\u1EE3t Xem: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon pr-2 icon-1x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-brand-play"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, prop.view)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "detail",
            style: {
              marginBottom: 25
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Th\xF4ng Tin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "T\xEAn Phim: ".concat(prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, prop.releaseYear !== "" ? "N\u0103m ph\xE1t h\xE0nh ".concat(prop.releaseYear) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Th\u1EC3 Lo\u1EA1i:", categories.length > 0 ? categories.map(function (prop, key) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              style: {
                marginLeft: 10
              },
              href: "#",
              key: key
            }, prop.title);
          }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Qu\u1ED1c Gia:", countries.length > 0 ? countries.map(function (prop, key) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              style: {
                marginLeft: 10
              },
              key: key
            }, prop.title);
          }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nh\xF3m d\u1ECBch:", fansub.length > 0 ? fansub.map(function (prop, key) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              style: {
                marginLeft: 10
              },
              key: key
            }, prop.title);
          }) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "content"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "N\u1ED9i Dung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, prop.content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "pt-e-20 pt-e-lg-40"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-9 flex-column-content-md pl-e-xl-40"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "album-top-box text-center text-md-left"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
            id: "my-video",
            className: "video-js vjs-big-play-centered",
            autoPlay: true,
            controls: true,
            preload: "true",
            style: {
              width: "100%",
              height: 264
            },
            poster: "MY_VIDEO_POSTER.jpg",
            "data-setup": "{}"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
            src: "https://scontent-nrt1-1.xx.fbcdn.net/v/t66.18014-6/10000000_246516985946901_3673472486675015888_n.mp4?_nc_cat=109&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-nrt1-1.xx&oh=c562ef01207a4f01c409631e725a75a1&oe=5C452866",
            type: "video/mp4"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "adonis-album-list pt-e-30"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "item-number h6 inactive-color"
          }, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "item-title h6 inactive-color"
          }, "Phim"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "item-duration h6 inactive-color"
          }, "Th\u1EDDi Gian"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
          }) : null))));
        }));
      }
    }
  }]);

  return MovieInformation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.movieInformation
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MovieInformation));

/***/ })

})
//# sourceMappingURL=Detail.js.ff2cdb3686026d92de38.hot-update.js.map