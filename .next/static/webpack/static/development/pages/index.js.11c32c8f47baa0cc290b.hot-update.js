webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home/TopWeek.js":
/*!************************************!*\
  !*** ./components/Home/TopWeek.js ***!
  \************************************/
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





var TopWeek =
/*#__PURE__*/
function (_Component) {
  _inherits(TopWeek, _Component);

  function TopWeek(props) {
    var _this;

    _classCallCheck(this, TopWeek);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopWeek).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(TopWeek, [{
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
        }, "Loading fail...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-xxl-7 col-lg-8"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex flex-row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "sub-title inactive-color"
        }, "Top Week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "Top tu\u1EA7n c\xF3 g\xEC hot ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button-right ml-auto ml-auto mt-auto mb-4 d-flex"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, "See all ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-icon pl-1 icon-arrow icon-1x"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
          xlinkHref: "#icon-see-all-arrow-right"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel music-img-box-cont-sm ",
          "data-animation-item": ".item",
          "data-auto-width": "yes",
          "data-loop": "no",
          "data-dots": "yes",
          "data-responsive-width": "0:100%|600:50%|900:33.33%|1200:25%"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key < 5) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 5 && key < 10) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 10 && key < 15) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 15 && key < 20) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 20 && key < 25) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 25 && key < 30) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: key,
              className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "img-box img-box-sm box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain + "/50/50" || "",
              alt: ""
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "des"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              className: "title fs-2"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "sub-title"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#"
            }, "Rachel Platten"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "hover-state d-flex justify-content-between align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer play-btn-dark box-rounded-sm"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "play-icon"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "d-flex align-items-center"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "adonis-icon text-light pointer mr-2 icon-2x"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank"
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "pointer dropdown-menu-toggle"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "icon-dot-nav-horizontal text-light"
            })))));
          }
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-xxl-5 col-lg-4"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title pb-e-15"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "title inactive-color"
        }, "Video Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "Watch Now")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "music-img-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box box-rounded-md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "/static/assets/images/watch-now/watch-now.jpg",
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-state show"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "album-name text-light"
        }, "Album:  Life Changes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: ""
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "album-title text-light"
        }, "The Ones That Like Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "artist-name text-light"
        }, "David Jame"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ml-auto"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "pointer play-btn-dark play-btn-dark round-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "play-icon"
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-30 pt-e-lg-40"
        }))));
      }
    }
  }]);

  return TopWeek;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.topWeek
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(TopWeek));

/***/ })

})
//# sourceMappingURL=index.js.11c32c8f47baa0cc290b.hot-update.js.map