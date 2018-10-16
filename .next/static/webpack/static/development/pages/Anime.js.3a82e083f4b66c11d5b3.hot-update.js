webpackHotUpdate("static\\development\\pages\\Anime.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/general */ "./variables/general.js");
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/database */ "./config/database.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, null, [{
    key: "__get_Data_Carousel_Main_Home",
    value: function () {
      var _get_Data_Carousel_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context.sent;
                data = res.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function __get_Data_Carousel_Main_Home() {
        return _get_Data_Carousel_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_1",
    value: function () {
      var _get_Common_Movies_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context2.sent;
                data = res.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function __get_Common_Movies_1() {
        return _get_Common_Movies_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_2",
    value: function () {
      var _get_Common_Movies_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context3.sent;
                data = res.data;
                return _context3.abrupt("return", data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function __get_Common_Movies_2() {
        return _get_Common_Movies_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_3",
    value: function () {
      var _get_Common_Movies_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context4.sent;
                data = res.data;
                return _context4.abrupt("return", data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function __get_Common_Movies_3() {
        return _get_Common_Movies_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_4",
    value: function () {
      var _get_Common_Movies_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context5.sent;
                data = res.data;
                return _context5.abrupt("return", data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function __get_Common_Movies_4() {
        return _get_Common_Movies_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_5",
    value: function () {
      var _get_Common_Movies_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context6.sent;
                data = res.data;
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function __get_Common_Movies_5() {
        return _get_Common_Movies_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_6",
    value: function () {
      var _get_Common_Movies_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context7.sent;
                data = res.data;
                return _context7.abrupt("return", data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function __get_Common_Movies_6() {
        return _get_Common_Movies_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Feature_Main_Home",
    value: function () {
      var _get_Feature_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 10,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context8.sent;
                data = res.data;
                return _context8.abrupt("return", data);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function __get_Feature_Main_Home() {
        return _get_Feature_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_1",
    value: function () {
      var _get_New_Day_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context9.sent;
                data = res.data;
                return _context9.abrupt("return", data);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function __get_New_Day_1() {
        return _get_New_Day_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_2",
    value: function () {
      var _get_New_Day_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context10.sent;
                data = res.data;
                return _context10.abrupt("return", data);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function __get_New_Day_2() {
        return _get_New_Day_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_3",
    value: function () {
      var _get_New_Day_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context11.sent;
                data = res.data;
                return _context11.abrupt("return", data);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function __get_New_Day_3() {
        return _get_New_Day_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_4",
    value: function () {
      var _get_New_Day_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context12.sent;
                data = res.data;
                return _context12.abrupt("return", data);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function __get_New_Day_4() {
        return _get_New_Day_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_5",
    value: function () {
      var _get_New_Day_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context13.sent;
                data = res.data;
                return _context13.abrupt("return", data);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function __get_New_Day_5() {
        return _get_New_Day_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_6",
    value: function () {
      var _get_New_Day_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context14.sent;
                data = res.data;
                return _context14.abrupt("return", data);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function __get_New_Day_6() {
        return _get_New_Day_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_7",
    value: function () {
      var _get_New_Day_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context15.sent;
                data = res.data;
                return _context15.abrupt("return", data);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function __get_New_Day_7() {
        return _get_New_Day_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_8",
    value: function () {
      var _get_New_Day_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context16.sent;
                data = res.data;
                return _context16.abrupt("return", data);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function __get_New_Day_8() {
        return _get_New_Day_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_9",
    value: function () {
      var _get_New_Day_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context17.sent;
                data = res.data;
                return _context17.abrupt("return", data);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function __get_New_Day_9() {
        return _get_New_Day_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_10",
    value: function () {
      var _get_New_Day_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context18.sent;
                data = res.data;
                return _context18.abrupt("return", data);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function __get_New_Day_10() {
        return _get_New_Day_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Main_Home",
    value: function () {
      var _get_New_Update_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context19.sent;
                data = res.data;
                return _context19.abrupt("return", data);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function __get_New_Update_Main_Home() {
        return _get_New_Update_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_1",
    value: function () {
      var _get_Top_Week_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context20.sent;
                data = res.data;
                return _context20.abrupt("return", data);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function __get_Top_Week_1() {
        return _get_Top_Week_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_2",
    value: function () {
      var _get_Top_Week_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context21.sent;
                data = res.data;
                return _context21.abrupt("return", data);

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function __get_Top_Week_2() {
        return _get_Top_Week_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_3",
    value: function () {
      var _get_Top_Week_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context22.sent;
                data = res.data;
                return _context22.abrupt("return", data);

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function __get_Top_Week_3() {
        return _get_Top_Week_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_4",
    value: function () {
      var _get_Top_Week_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context23.sent;
                data = res.data;
                return _context23.abrupt("return", data);

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function __get_Top_Week_4() {
        return _get_Top_Week_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_5",
    value: function () {
      var _get_Top_Week_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context24.sent;
                data = res.data;
                return _context24.abrupt("return", data);

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function __get_Top_Week_5() {
        return _get_Top_Week_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_6",
    value: function () {
      var _get_Top_Week_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context25.sent;
                data = res.data;
                return _context25.abrupt("return", data);

              case 5:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function __get_Top_Week_6() {
        return _get_Top_Week_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Trends_Main_Home",
    value: function () {
      var _get_Trends_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context26.sent;
                data = res.data;
                return _context26.abrupt("return", data);

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      return function __get_Trends_Main_Home() {
        return _get_Trends_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_1",
    value: function () {
      var _get_Main_News_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context27.sent;
                data = res.data;
                return _context27.abrupt("return", data);

              case 5:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      return function __get_Main_News_1() {
        return _get_Main_News_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_2",
    value: function () {
      var _get_Main_News_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context28.sent;
                data = res.data;
                return _context28.abrupt("return", data);

              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      return function __get_Main_News_2() {
        return _get_Main_News_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_3",
    value: function () {
      var _get_Main_News_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context29.sent;
                data = res.data;
                return _context29.abrupt("return", data);

              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      return function __get_Main_News_3() {
        return _get_Main_News_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_4",
    value: function () {
      var _get_Main_News_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context30.sent;
                data = res.data;
                return _context30.abrupt("return", data);

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      return function __get_Main_News_4() {
        return _get_Main_News_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Comedy",
    value: function () {
      var _get_Main_Comedy = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context31.sent;
                data = res.data;
                return _context31.abrupt("return", data);

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      return function __get_Main_Comedy() {
        return _get_Main_Comedy.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_1",
    value: function () {
      var _get_Main_Romance_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context32.sent;
                data = res.data;
                return _context32.abrupt("return", data);

              case 5:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      return function __get_Main_Romance_1() {
        return _get_Main_Romance_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_2",
    value: function () {
      var _get_Main_Romance_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context33.sent;
                data = res.data;
                return _context33.abrupt("return", data);

              case 5:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      return function __get_Main_Romance_2() {
        return _get_Main_Romance_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_3",
    value: function () {
      var _get_Main_Romance_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context34.sent;
                data = res.data;
                return _context34.abrupt("return", data);

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      return function __get_Main_Romance_3() {
        return _get_Main_Romance_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_4",
    value: function () {
      var _get_Main_Romance_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context35.sent;
                data = res.data;
                return _context35.abrupt("return", data);

              case 5:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      return function __get_Main_Romance_4() {
        return _get_Main_Romance_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_5",
    value: function () {
      var _get_Main_Romance_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context36.sent;
                data = res.data;
                return _context36.abrupt("return", data);

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      return function __get_Main_Romance_5() {
        return _get_Main_Romance_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_6",
    value: function () {
      var _get_Main_Romance_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context37.sent;
                data = res.data;
                return _context37.abrupt("return", data);

              case 5:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      return function __get_Main_Romance_6() {
        return _get_Main_Romance_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_7",
    value: function () {
      var _get_Main_Romance_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee38() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 7,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context38.sent;
                data = res.data;
                return _context38.abrupt("return", data);

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      return function __get_Main_Romance_7() {
        return _get_Main_Romance_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_8",
    value: function () {
      var _get_Main_Romance_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee39() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 8,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context39.sent;
                data = res.data;
                return _context39.abrupt("return", data);

              case 5:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      return function __get_Main_Romance_8() {
        return _get_Main_Romance_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_9",
    value: function () {
      var _get_Main_Romance_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee40() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 9,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context40.sent;
                data = res.data;
                return _context40.abrupt("return", data);

              case 5:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      return function __get_Main_Romance_9() {
        return _get_Main_Romance_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_10",
    value: function () {
      var _get_Main_Romance_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee41() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 10,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context41.sent;
                data = res.data;
                return _context41.abrupt("return", data);

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      return function __get_Main_Romance_10() {
        return _get_Main_Romance_10.apply(this, arguments);
      };
    }() //////////////////////////////////////////////////////////////////////
    /////////////////////// API CENIMA ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////

  }, {
    key: "__get_Data_Carousel_Cenima",
    value: function () {
      var _get_Data_Carousel_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context42.sent;
                data = res.data;
                return _context42.abrupt("return", data);

              case 5:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      return function __get_Data_Carousel_Cenima() {
        return _get_Data_Carousel_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Cenima",
    value: function () {
      var _get_New_Update_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context43.sent;
                data = res.data;
                return _context43.abrupt("return", data);

              case 5:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      return function __get_New_Update_Cenima() {
        return _get_New_Update_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_1",
    value: function () {
      var _get_Recommend_Cenima_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee44() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context44.sent;
                data = res.data;
                return _context44.abrupt("return", data);

              case 5:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      return function __get_Recommend_Cenima_1() {
        return _get_Recommend_Cenima_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_2",
    value: function () {
      var _get_Recommend_Cenima_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee45() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context45.sent;
                data = res.data;
                return _context45.abrupt("return", data);

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      return function __get_Recommend_Cenima_2() {
        return _get_Recommend_Cenima_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_3",
    value: function () {
      var _get_Recommend_Cenima_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee46() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context46.sent;
                data = res.data;
                return _context46.abrupt("return", data);

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      return function __get_Recommend_Cenima_3() {
        return _get_Recommend_Cenima_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_4",
    value: function () {
      var _get_Recommend_Cenima_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee47() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context47.sent;
                data = res.data;
                return _context47.abrupt("return", data);

              case 5:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      return function __get_Recommend_Cenima_4() {
        return _get_Recommend_Cenima_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_5",
    value: function () {
      var _get_Recommend_Cenima_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee48() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context48.sent;
                data = res.data;
                return _context48.abrupt("return", data);

              case 5:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      return function __get_Recommend_Cenima_5() {
        return _get_Recommend_Cenima_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_6",
    value: function () {
      var _get_Recommend_Cenima_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee49() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context49.sent;
                data = res.data;
                return _context49.abrupt("return", data);

              case 5:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      return function __get_Recommend_Cenima_6() {
        return _get_Recommend_Cenima_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_7",
    value: function () {
      var _get_Recommend_Cenima_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee50() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context50.sent;
                data = res.data;
                return _context50.abrupt("return", data);

              case 5:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      return function __get_Recommend_Cenima_7() {
        return _get_Recommend_Cenima_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_8",
    value: function () {
      var _get_Recommend_Cenima_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee51() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _context51.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context51.sent;
                data = res.data;
                return _context51.abrupt("return", data);

              case 5:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      return function __get_Recommend_Cenima_8() {
        return _get_Recommend_Cenima_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_9",
    value: function () {
      var _get_Recommend_Cenima_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee52() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _context52.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context52.sent;
                data = res.data;
                return _context52.abrupt("return", data);

              case 5:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      return function __get_Recommend_Cenima_9() {
        return _get_Recommend_Cenima_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_10",
    value: function () {
      var _get_Recommend_Cenima_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee53() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                _context53.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context53.sent;
                data = res.data;
                return _context53.abrupt("return", data);

              case 5:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      return function __get_Recommend_Cenima_10() {
        return _get_Recommend_Cenima_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Views_Cenima",
    value: function () {
      var _get_Top_Views_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee54() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context54.sent;
                data = res.data;
                return _context54.abrupt("return", data);

              case 5:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      return function __get_Top_Views_Cenima() {
        return _get_Top_Views_Cenima.apply(this, arguments);
      };
    }() //////////////////////////////////////////////////////////////////////
    ///////////////////////// API ANIME //////////////////////////////////
    //////////////////////////////////////////////////////////////////////

  }, {
    key: "__get_Data_Carousel_Anime",
    value: function () {
      var _get_Data_Carousel_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee55() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context55.sent;
                data = res.data;
                return _context55.abrupt("return", data);

              case 5:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      return function __get_Data_Carousel_Anime() {
        return _get_Data_Carousel_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Anime",
    value: function () {
      var _get_New_Update_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee56() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _context56.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context56.sent;
                data = res.data;
                return _context56.abrupt("return", data);

              case 5:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      return function __get_New_Update_Anime() {
        return _get_New_Update_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_1",
    value: function () {
      var _get_Recommend_Anime_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee57() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context57.sent;
                data = res.data;
                return _context57.abrupt("return", data);

              case 5:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      return function __get_Recommend_Anime_1() {
        return _get_Recommend_Anime_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_2",
    value: function () {
      var _get_Recommend_Anime_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee58() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                _context58.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context58.sent;
                data = res.data;
                return _context58.abrupt("return", data);

              case 5:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      return function __get_Recommend_Anime_2() {
        return _get_Recommend_Anime_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_3",
    value: function () {
      var _get_Recommend_Anime_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee59() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _context59.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context59.sent;
                data = res.data;
                return _context59.abrupt("return", data);

              case 5:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      return function __get_Recommend_Anime_3() {
        return _get_Recommend_Anime_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_4",
    value: function () {
      var _get_Recommend_Anime_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee60() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context60.sent;
                data = res.data;
                return _context60.abrupt("return", data);

              case 5:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      return function __get_Recommend_Anime_4() {
        return _get_Recommend_Anime_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_5",
    value: function () {
      var _get_Recommend_Anime_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee61() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context61.sent;
                data = res.data;
                return _context61.abrupt("return", data);

              case 5:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      return function __get_Recommend_Anime_5() {
        return _get_Recommend_Anime_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_6",
    value: function () {
      var _get_Recommend_Anime_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee62() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _context62.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context62.sent;
                data = res.data;
                return _context62.abrupt("return", data);

              case 5:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      return function __get_Recommend_Anime_6() {
        return _get_Recommend_Anime_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Views_Anime",
    value: function () {
      var _get_Top_Views_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee63() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                _context63.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context63.sent;
                data = res.data;
                return _context63.abrupt("return", data);

              case 5:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      return function __get_Top_Views_Anime() {
        return _get_Top_Views_Anime.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}();



/***/ })

})
//# sourceMappingURL=Anime.js.3a82e083f4b66c11d5b3.hot-update.js.map