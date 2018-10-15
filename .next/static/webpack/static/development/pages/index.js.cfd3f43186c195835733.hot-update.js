webpackHotUpdate("static\\development\\pages\\index.js",{

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
    }() //////////////////////////////////////////////////////////////////////
    /////////////////////// API CENIMA ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////

  }, {
    key: "__get_Data_Carousel_Cenima",
    value: function () {
      var _get_Data_Carousel_Cenima = _asyncToGenerator(
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
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
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

      return function __get_Data_Carousel_Cenima() {
        return _get_Data_Carousel_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Cenima",
    value: function () {
      var _get_New_Update_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
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

      return function __get_New_Update_Cenima() {
        return _get_New_Update_Cenima.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}();



/***/ })

})
//# sourceMappingURL=index.js.cfd3f43186c195835733.hot-update.js.map