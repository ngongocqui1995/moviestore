webpackHotUpdate("static\\development\\pages\\Cenima.js",{

/***/ "./components/Cenima/Recommend_Cenima.js":
/*!***********************************************!*\
  !*** ./components/Cenima/Recommend_Cenima.js ***!
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





var Recommend_Cenima =
/*#__PURE__*/
function (_Component) {
  _inherits(Recommend_Cenima, _Component);

  function Recommend_Cenima(props) {
    var _this;

    _classCallCheck(this, Recommend_Cenima);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Recommend_Cenima).call(this, props));
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
      data_10: []
    };
    return _this;
  }

  _createClass(Recommend_Cenima, [{
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
        }, " Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "sub-title inactive-color"
        }, "Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "C\xF3 th\u1EC3 b\u1EA1n th\xEDch ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button-right ml-auto ml-auto d-flex align-items-end"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "mb-4"
        }, "Xem th\xEAm", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pl-1 icon-arrow icon-1x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-see-all-arrow-right"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel music-img-box-cont-sm",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-auto-width": "yes",
          "data-responsive-width": "0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis",
          style: {
            cursor: "grab"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_1 || data_1.length === 0 ? "" : data_1.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_2 || data_2.length === 0 ? "" : data_2.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_3 || data_3.length === 0 ? "" : data_3.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_4 || data_4.length === 0 ? "" : data_4.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_5 || data_5.length === 0 ? "" : data_5.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_6 || data_6.length === 0 ? "" : data_6.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_7 || data_7.length === 0 ? "" : data_7.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_8 || data_8.length === 0 ? "" : data_8.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_9 || data_9.length === 0 ? "" : data_9.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_10 || data_10.length === 0 ? "" : data_10.map(function (prop, key) {
          if (key === 0) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box mb-e-30 mb-e-md-40"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "music-img-box"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box box-rounded-md img-box-md"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 145
              },
              className: "retina",
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: ""
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-bottom-left pl-e-15 pb-e-15"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark round-btn"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "absolute-top-right pr-e-15 pt-e-15"
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
              href: "/detail/".concat(prop.key)
            }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title category"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "/detail/".concat(prop.key)
            }, "T\u1EADp ".concat(prop.episodes || ""))));
          }
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        }));
      }
    }
  }]);

  return Recommend_Cenima;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data_1: state.recommend_Cenima_1,
    data_2: state.recommend_Cenima_2,
    data_3: state.recommend_Cenima_3,
    data_4: state.recommend_Cenima_4,
    data_5: state.recommend_Cenima_5,
    data_6: state.recommend_Cenima_6,
    data_7: state.recommend_Cenima_7,
    data_8: state.recommend_Cenima_8,
    data_9: state.recommend_Cenima_9,
    data_10: state.recommend_Cenima_10
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Recommend_Cenima));

/***/ })

})
//# sourceMappingURL=Cenima.js.679a82f7a7ea677b8e3d.hot-update.js.map