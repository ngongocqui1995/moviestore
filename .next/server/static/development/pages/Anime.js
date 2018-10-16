module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
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
                  "limit": 2,
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
                  "limit": 2,
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
                  "limit": 2,
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
                  "limit": 2,
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
    key: "__get_Main_News_5",
    value: function () {
      var _get_Main_News_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_News_5() {
        return _get_Main_News_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_6",
    value: function () {
      var _get_Main_News_6 = _asyncToGenerator(
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
                  "indexPage": 6,
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

      return function __get_Main_News_6() {
        return _get_Main_News_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_7",
    value: function () {
      var _get_Main_News_7 = _asyncToGenerator(
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
                  "indexPage": 7,
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

      return function __get_Main_News_7() {
        return _get_Main_News_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_8",
    value: function () {
      var _get_Main_News_8 = _asyncToGenerator(
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
                  "indexPage": 8,
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

      return function __get_Main_News_8() {
        return _get_Main_News_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_9",
    value: function () {
      var _get_Main_News_9 = _asyncToGenerator(
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
                  "indexPage": 9,
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

      return function __get_Main_News_9() {
        return _get_Main_News_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_10",
    value: function () {
      var _get_Main_News_10 = _asyncToGenerator(
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
                  "indexPage": 10,
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

      return function __get_Main_News_10() {
        return _get_Main_News_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Comedy",
    value: function () {
      var _get_Main_Comedy = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
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

      return function __get_Main_Comedy() {
        return _get_Main_Comedy.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_1",
    value: function () {
      var _get_Main_Romance_ = _asyncToGenerator(
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
                  "indexPage": 1,
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

      return function __get_Main_Romance_1() {
        return _get_Main_Romance_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_2",
    value: function () {
      var _get_Main_Romance_2 = _asyncToGenerator(
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
                  "indexPage": 2,
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

      return function __get_Main_Romance_2() {
        return _get_Main_Romance_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_3",
    value: function () {
      var _get_Main_Romance_3 = _asyncToGenerator(
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
                  "indexPage": 3,
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

      return function __get_Main_Romance_3() {
        return _get_Main_Romance_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_4",
    value: function () {
      var _get_Main_Romance_4 = _asyncToGenerator(
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
                  "indexPage": 4,
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

      return function __get_Main_Romance_4() {
        return _get_Main_Romance_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_5",
    value: function () {
      var _get_Main_Romance_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_Romance_5() {
        return _get_Main_Romance_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_6",
    value: function () {
      var _get_Main_Romance_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_Romance_6() {
        return _get_Main_Romance_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_7",
    value: function () {
      var _get_Main_Romance_7 = _asyncToGenerator(
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
                  "indexPage": 7,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_Romance_7() {
        return _get_Main_Romance_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_8",
    value: function () {
      var _get_Main_Romance_8 = _asyncToGenerator(
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
                  "indexPage": 8,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_Romance_8() {
        return _get_Main_Romance_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_9",
    value: function () {
      var _get_Main_Romance_9 = _asyncToGenerator(
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
                  "indexPage": 9,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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

      return function __get_Main_Romance_9() {
        return _get_Main_Romance_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_10",
    value: function () {
      var _get_Main_Romance_10 = _asyncToGenerator(
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
                  "indexPage": 10,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee48() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
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

      return function __get_Data_Carousel_Cenima() {
        return _get_Data_Carousel_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Cenima",
    value: function () {
      var _get_New_Update_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee49() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
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

      return function __get_New_Update_Cenima() {
        return _get_New_Update_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_1",
    value: function () {
      var _get_Recommend_Cenima_ = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_1() {
        return _get_Recommend_Cenima_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_2",
    value: function () {
      var _get_Recommend_Cenima_2 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_2() {
        return _get_Recommend_Cenima_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_3",
    value: function () {
      var _get_Recommend_Cenima_3 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_3() {
        return _get_Recommend_Cenima_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_4",
    value: function () {
      var _get_Recommend_Cenima_4 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_4() {
        return _get_Recommend_Cenima_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_5",
    value: function () {
      var _get_Recommend_Cenima_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee54() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
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

      return function __get_Recommend_Cenima_5() {
        return _get_Recommend_Cenima_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_6",
    value: function () {
      var _get_Recommend_Cenima_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee55() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
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

      return function __get_Recommend_Cenima_6() {
        return _get_Recommend_Cenima_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_7",
    value: function () {
      var _get_Recommend_Cenima_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee56() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _context56.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
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

      return function __get_Recommend_Cenima_7() {
        return _get_Recommend_Cenima_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_8",
    value: function () {
      var _get_Recommend_Cenima_8 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_8() {
        return _get_Recommend_Cenima_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_9",
    value: function () {
      var _get_Recommend_Cenima_9 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_9() {
        return _get_Recommend_Cenima_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_10",
    value: function () {
      var _get_Recommend_Cenima_10 = _asyncToGenerator(
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

      return function __get_Recommend_Cenima_10() {
        return _get_Recommend_Cenima_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Views_Cenima",
    value: function () {
      var _get_Top_Views_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee60() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee61() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
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

      return function __get_Data_Carousel_Anime() {
        return _get_Data_Carousel_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Anime",
    value: function () {
      var _get_New_Update_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee62() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _context62.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
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

      return function __get_New_Update_Anime() {
        return _get_New_Update_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_1",
    value: function () {
      var _get_Recommend_Anime_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee63() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                _context63.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
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

      return function __get_Recommend_Anime_1() {
        return _get_Recommend_Anime_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_2",
    value: function () {
      var _get_Recommend_Anime_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee64() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                _context64.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context64.sent;
                data = res.data;
                return _context64.abrupt("return", data);

              case 5:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee65() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                _context65.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context65.sent;
                data = res.data;
                return _context65.abrupt("return", data);

              case 5:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee66() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                _context66.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context66.sent;
                data = res.data;
                return _context66.abrupt("return", data);

              case 5:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee67() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                _context67.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context67.sent;
                data = res.data;
                return _context67.abrupt("return", data);

              case 5:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee68() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                _context68.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context68.sent;
                data = res.data;
                return _context68.abrupt("return", data);

              case 5:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee69() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                _context69.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context69.sent;
                data = res.data;
                return _context69.abrupt("return", data);

              case 5:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      return function __get_Top_Views_Anime() {
        return _get_Top_Views_Anime.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}();



/***/ }),

/***/ "./components/Anime/CarouselTop_Anime.js":
/*!***********************************************!*\
  !*** ./components/Anime/CarouselTop_Anime.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CarouselTop_Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselTop_Anime, _Component);

  function CarouselTop_Anime() {
    _classCallCheck(this, CarouselTop_Anime);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselTop_Anime).apply(this, arguments));
  }

  _createClass(CarouselTop_Anime, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "adonis-carousel js-effect adonis-animate",
        "data-animation": "slideUp",
        "data-animation-item": ".item",
        "data-dots": "yes",
        "data-auto-width": "yes",
        "data-responsive-width": "0:100%|600:50%|900:33.33%"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gutter-30"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "owl-carousel owl-theme-adonis"
      }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "img-box-text-over lg box-rounded-lg"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "resize1",
          style: {
            height: 380
          },
          src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-info"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "absolute-bottom-left pl-e-20 pb-e-20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-highlight-dark"
        }, prop.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "adonis-highlight-dark"
        }, "T\u1EADp ".concat(prop.episodes || "")))))));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      }));
    }
  }]);

  return CarouselTop_Anime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.carousel_Anime
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CarouselTop_Anime));

/***/ }),

/***/ "./components/Anime/NewUpdate_Anime.js":
/*!*********************************************!*\
  !*** ./components/Anime/NewUpdate_Anime.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var NewUpdate_Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(NewUpdate_Anime, _Component);

  function NewUpdate_Anime(datas) {
    var _this;

    _classCallCheck(this, NewUpdate_Anime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewUpdate_Anime).call(this, datas));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(NewUpdate_Anime, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "title"
        }, "Anime m\u1EDBi c\u1EADp nh\u1EADt !")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel viewport-animate",
          "data-animation": "slideUp",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-scrollbar": "yes",
          "data-loop": "no",
          "data-auto-width": "yes",
          "data-responsive-width": "0:100%|400:50%|730:33.33%|1100:25%|1460:20%"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "music-img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box box-rounded-md"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 218
            },
            className: "retina",
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            "data-2x": "assets/images/videos/videos-1@2x.jpg",
            alt: ""
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "absolute-bottom-left pl-e-20 pb-e-20"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark round-btn"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "absolute-bottom-right pr-e-20 pb-e-20"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "mr-2"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "adonis-icon text-light pointer icon-2x"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
            xlinkHref: "#icon-heart-blank"
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
            href: "#"
          }, data[0].title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title category"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pb-e-10 pb-e-lg-30"
        }));
      }
    }
  }]);

  return NewUpdate_Anime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.newUpdate_Anime
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(NewUpdate_Anime));

/***/ }),

/***/ "./components/Anime/Recommend_Anime.js":
/*!*********************************************!*\
  !*** ./components/Anime/Recommend_Anime.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Recommend_Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(Recommend_Anime, _Component);

  function Recommend_Anime(props) {
    var _this;

    _classCallCheck(this, Recommend_Anime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Recommend_Anime).call(this, props));
    _this.state = {
      data_1: [],
      data_2: [],
      data_3: [],
      data_4: [],
      data_5: [],
      data_6: []
    };
    return _this;
  }

  _createClass(Recommend_Anime, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data_1 = _this$props.data_1,
          data_2 = _this$props.data_2,
          data_3 = _this$props.data_3,
          data_4 = _this$props.data_4,
          data_5 = _this$props.data_5,
          data_6 = _this$props.data_6;

      if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || !data_4 || data_4.length === 0 || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex flex-row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title h3-md"
        }, "\u0110\u1EC1 xu\u1EA5t cho b\u1EA1n."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel music-img-box-cont-sm viewport-animate  auto-fit-columns",
          "data-auto-fit-items": ".item",
          "data-item-parent": ".owl-carousel",
          "data-item-width": "336",
          "data-item-max-width": "630",
          "data-animation": "slideUp",
          "data-animation-item": ".item",
          "data-auto-width": "yes",
          "data-loop": "no",
          "data-dots": "yes"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_1 || data_1.length === 0 ? "" : data_1.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_2 || data_2.length === 0 ? "" : data_2.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_3 || data_3.length === 0 ? "" : data_3.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_4 || data_4.length === 0 ? "" : data_4.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_5 || data_5.length === 0 ? "" : data_5.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item"
        }, !data_6 || data_6.length === 0 ? "" : data_6.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "img-box-horizontal music-img-box h-g-bg h-d-shadow"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box img-box-sm box-rounded-sm"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            style: {
              height: 50
            },
            src: _variables_general__WEBPACK_IMPORTED_MODULE_2__["url"] + prop.imageMain || "",
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "des"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
            className: "title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, prop.title || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        }));
      }
    }
  }]);

  return Recommend_Anime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data_1: state.recommend_Anime_1,
    data_2: state.recommend_Anime_2,
    data_3: state.recommend_Anime_3,
    data_4: state.recommend_Anime_4,
    data_5: state.recommend_Anime_5,
    data_6: state.recommend_Anime_6
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Recommend_Anime));

/***/ }),

/***/ "./components/Anime/TopViews_Anime.js":
/*!********************************************!*\
  !*** ./components/Anime/TopViews_Anime.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables/general */ "./variables/general.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TopViews_Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(TopViews_Anime, _Component);

  function TopViews_Anime(datas) {
    var _this;

    _classCallCheck(this, TopViews_Anime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopViews_Anime).call(this, datas));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(TopViews_Anime, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data || data.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, "Loading fail ...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "title h3"
        }, "Anime xem nhi\u1EC1u ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "adonis-carousel viewport-animate",
          "data-animation": "slideUp",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-items": "7",
          "data-items-responsive": "0:1|300:2|900:4|1200:5|1600:7"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gutter-30"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "owl-carousel owl-theme-adonis"
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key,
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "music-img-box"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img-box box-rounded-md"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "resize2",
            src: _variables_general__WEBPACK_IMPORTED_MODULE_1__["url"] + prop.imageMain || "",
            alt: ""
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "hover-state"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "absolute-bottom-left pl-e-20 pb-e-20"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "pointer play-btn-dark round-btn"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "play-icon"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "absolute-top-right pr-e-20 pt-e-20"
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
            href: "#"
          }, prop.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "sub-title category"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, "T\u1EADp ".concat(prop.episodes || "")))));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pt-e-20 pt-e-lg-40"
        }));
      }
    }
  }]);

  return TopViews_Anime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.topViews_Anime
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(TopViews_Anime));

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "site-footer",
        id: "site-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pt-e-40"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-xl-3 order-2 order-lg-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-widget-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-logo mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "brand d-flex align-items-center",
        href: "home.html"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-md-2 mr-1 icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 27 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "p-1 fs-8"
      }, "Adonis"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "widget-title"
      }, "Adonis Music, Radio Online Network"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social-icons pb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline horizon-list fs-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 39 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "copyright"
      }, " Copyright \xA9 2018 IconikTech. All rights reserved.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 col-xl-9 pl-e-lg-70 order-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 col-xl-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "widget-title"
      }, "Adonis Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline vertical-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms & Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "News & Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 col-xl-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-manage widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "widget-title"
      }, "Manage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline vertical-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "My wisht list")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "My playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Followinge")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Purchased"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 col-xl-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "widget-title"
      }, "Recent Albums"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-album-list music-img-box-cont-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box img-box-horizontal-style-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-11.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Do You Hear What I Hear")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Band Aid"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon color-active pointer mr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-dot-nav-horizontal color-active"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box img-box-horizontal-style-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-9.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "O Come, All Ye Faithful")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Kesha"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon color-active pointer mr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-dot-nav-horizontal color-active"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box img-box-horizontal-style-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-8.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon color-active pointer mr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-dot-nav-horizontal color-active"
      })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 col-xl-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "widget-title"
      }, "Go Moblie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-apps"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline d-inline-flex mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mr-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/brand-logo/apple-logo.png",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/brand-logo/google-apps.png",
        alt: ""
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "pr-4"
      }, "Language"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/brand-logo/lang-flag.png",
        alt: ""
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb-e-30"
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "site-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "master-container-fluid header-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-2 col-xl-3 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "navbar-toggler toggle-off-canvas-main-menu mr-2",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "brand d-flex align-items-center",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-md-2 mr-1 icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 27 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "p-1 fs-6 fs-md-8"
      }, "HayDayTv"), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-6 align-items-center justify-content-center d-none d-md-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown active",
        "data-hover": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "home.html"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-mega-menu dropdown-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "SHOP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "GENRE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CHARTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-albums.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 15")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "usa-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-col"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "store.html"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-toggle": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Blog & News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-3 d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        id: "btn-search-4",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 30 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30.046 29.806l-7.127-7.287c2.109-2.395 3.397-5.558 3.397-9.021 0-3.721-1.486-7.094-3.896-9.56l0.003 0.003c-2.361-2.432-5.661-3.942-9.313-3.942s-6.953 1.51-9.31 3.939l-0.003 0.003c-2.388 2.462-3.86 5.824-3.86 9.53s1.472 7.068 3.863 9.533l-0.003-0.003c2.35 2.441 5.645 3.958 9.295 3.958 2.992 0 5.747-1.020 7.935-2.73l-0.028 0.021 7.207 7.383c0.232 0.225 0.548 0.364 0.896 0.368h0.001c0.344-0.001 0.656-0.142 0.881-0.368l0-0c0.252-0.237 0.409-0.573 0.409-0.945 0-0.34-0.131-0.65-0.345-0.881l0.001 0.001zM20.709 21.189c-1.906 1.978-4.577 3.206-7.536 3.206s-5.63-1.228-7.532-3.203l-0.003-0.003c-1.932-1.992-3.123-4.713-3.123-7.712s1.191-5.719 3.126-7.715l-0.003 0.003c1.906-1.978 4.577-3.206 7.536-3.206s5.63 1.228 7.532 3.203l0.003 0.003c1.932 1.992 3.123 4.713 3.123 7.712s-1.191 5.719-3.126 7.715l0.003-0.003z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item d-none d-md-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link notification-toggle has-notification",
        href: "#",
        id: "dropdownUsernotifications",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19.286 25.607c-0.395 0-0.714 0.32-0.714 0.714v0 0c0 2.367-1.919 4.286-4.286 4.286s-4.286-1.919-4.286-4.286v0 0c0-0.395-0.32-0.714-0.714-0.714s-0.714 0.32-0.714 0.714v0 0c0 3.156 2.558 5.714 5.714 5.714s5.714-2.558 5.714-5.714v0 0c0-0.395-0.32-0.714-0.714-0.714v0zM27.857 23.464h-2.857v-9.179c0-5.917-4.797-10.714-10.714-10.714s-10.714 4.797-10.714 10.714v0 9.214h-2.857c-0.395 0-0.714 0.32-0.714 0.714s0.32 0.714 0.714 0.714v0h27.143c0.395 0 0.714-0.32 0.714-0.714s-0.32-0.714-0.714-0.714v0zM23.571 23.464h-18.571v-9.221c0.024-5.11 4.172-9.243 9.286-9.243 0 0 0 0 0 0v0c5.128 0 9.286 4.157 9.286 9.286v0zM14.286 2.857c0.789 0 1.429-0.64 1.429-1.429v0c0-0.789-0.64-1.429-1.429-1.429s-1.429 0.64-1.429 1.429v0c0 0.789 0.64 1.429 1.429 1.429v0z"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right p-4 notifications clearfix",
        role: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Notification"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "2 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/playlists/playlist-15.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Adm Smith")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "3 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "5 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle w-nowrap pr-0",
        href: "#",
        id: "dropdownUserSettings",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-row d-inline-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle",
        src: "/assets/images/user-thumb-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-2 mt-2 fs-1 d-none d-lg-block"
      }, "Jont Henrry"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right user-settings-dropdown clearfix",
        "aria-labelledby": "dropdownUserSettings"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-cover-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/user/cover.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile-image rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "user-name text-center"
      }, "Jont hennry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "user-settings-menu list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"
      }))), "Your Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30 19l-9 9-3-3-2 2 5 5 11-11z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"
      }))), "Following"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"
      }))), " Wish list"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        fill: "#000000",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }))), "Purchased"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"
      }))), "Logout"))))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Search/Search_Box.js":
/*!*****************************************!*\
  !*** ./components/Search/Search_Box.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search_Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Search_Box =
/*#__PURE__*/
function (_Component) {
  _inherits(Search_Box, _Component);

  function Search_Box() {
    _classCallCheck(this, Search_Box);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search_Box).apply(this, arguments));
  }

  _createClass(Search_Box, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "search-box-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "btn-search-close",
        className: "btn btn-blank btn--search-close",
        "aria-label": "Close search form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon color-active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "icon-cross",
        viewBox: "0 0 24 24",
        style: {
          width: "5vmin"
        }
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      }), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-inner search-inner-up d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "master-container-fluid d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search-input",
        name: "search",
        type: "search",
        placeholder: "Start typing...",
        autoComplete: "off",
        spellCheck: "false"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-inner search-inner-down dark-theme"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "master-container-fluid pt-3 pt-md-4 d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-expand mb-2 mb-md-4 scroll-x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav moving-border flex-nowrap",
        role: "tablist"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active m-item fs-7 pr-3 pl-0",
        id: "search-tab-songs",
        "data-toggle": "tab",
        href: "#search-content-songs",
        role: "tab",
        "aria-controls": "search-content-songs",
        "aria-selected": "true"
      }, "Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link m-item fs-7 pr-3 pl-3",
        id: "search-tab-albums",
        "data-toggle": "tab",
        href: "#search-content-albums",
        role: "tab",
        "aria-controls": "search-content-albums",
        "aria-selected": "true"
      }, "Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link m-item fs-7 pr-3 pl-3",
        id: "search-tab-playlists",
        "data-toggle": "tab",
        href: "#search-content-playlists",
        role: "tab",
        "aria-controls": "search-content-playlists",
        "aria-selected": "true"
      }, "Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link m-item fs-7 pr-3 pl-3",
        id: "search-tab-artists",
        "data-toggle": "tab",
        href: "#search-content-artists",
        role: "tab",
        "aria-controls": "search-content-artists",
        "aria-selected": "true"
      }, "Artists"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "border-hr"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-content scroll-y"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-pane fade show active",
        id: "search-content-songs",
        role: "tabpanel",
        "aria-labelledby": "search-tab-songs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row auto-cols-row",
        "data-item-width": "330",
        "data-item-max-width": "630"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-2.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Country girl shake it for me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Bing Crosby"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "The Separation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-3.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Stirring of a fool")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-4.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Let You Down")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-6.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Sam Hunt"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-7.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "O Come, All Ye Faithful")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Kesha"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-8.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Fetty Wap Ft Monty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-8.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Fetty Wap Ft Monty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-9.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Do You Hear What I Hear")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Band Aid"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-10.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Look What You Made Me Do")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-11.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Carol of the Bells")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-12.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Carol of the Bells")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "You're A Mean One, Mr. Grinch")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Darius Rucker"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-14.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Joy To The World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Pentatonix"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-15.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Something Just Like This")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Demi Lovato"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "The Separation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-3.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Stirring of a fool")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-2.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Country girl shake it for me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Bing Crosby"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-4.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Let You Down")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "The Separation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-2.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Country girl shake it for me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Bing Crosby"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-4.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Let You Down")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box-horizontal music-img-box h-g-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box img-box-sm box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/hot-song/hot-4.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "des"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Nothings into Somethings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
      })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "search-content-albums",
        role: "tabpanel",
        "aria-labelledby": "search-tab-albums"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row auto-cols-row",
        "data-item-width": "150",
        "data-item-max-width": "200"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-44.jpg",
        "data-2x": "assets/images/new-releases/new-releases-44@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-43.jpg",
        "data-2x": "assets/images/new-releases/new-releases-43@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-42.jpg",
        "data-2x": "assets/images/new-releases/new-releases-42@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-41.jpg",
        "data-2x": "assets/images/new-releases/new-releases-41@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-40.jpg",
        "data-2x": "assets/images/new-releases/new-releases-40@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-39.jpg",
        "data-2x": "assets/images/new-releases/new-releases-39@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-38.jpg",
        "data-2x": "assets/images/new-releases/new-releases-38@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-37.jpg",
        "data-2x": "assets/images/new-releases/new-releases-37@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-36.jpg",
        "data-2x": "assets/images/new-releases/new-releases-36@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-35.jpg",
        "data-2x": "assets/images/new-releases/new-releases-35@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-34.jpg",
        "data-2x": "assets/images/new-releases/new-releases-34@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-33.jpg",
        "data-2x": "assets/images/new-releases/new-releases-33@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-32.jpg",
        "data-2x": "assets/images/new-releases/new-releases-32@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-31.jpg",
        "data-2x": "assets/images/new-releases/new-releases-31@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-30.jpg",
        "data-2x": "assets/images/new-releases/new-releases-30@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-29.jpg",
        "data-2x": "assets/images/new-releases/new-releases-29@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-28.jpg",
        "data-2x": "assets/images/new-releases/new-releases-28@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-27.jpg",
        "data-2x": "assets/images/new-releases/new-releases-27@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-26.jpg",
        "data-2x": "assets/images/new-releases/new-releases-26@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-25.jpg",
        "data-2x": "assets/images/new-releases/new-releases-25@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-24.jpg",
        "data-2x": "assets/images/new-releases/new-releases-24@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-23.jpg",
        "data-2x": "assets/images/new-releases/new-releases-23@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-22.jpg",
        "data-2x": "assets/images/new-releases/new-releases-22@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-21.jpg",
        "data-2x": "assets/images/new-releases/new-releases-21@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-20.jpg",
        "data-2x": "assets/images/new-releases/new-releases-20@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-19.jpg",
        "data-2x": "assets/images/new-releases/new-releases-19@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-18.jpg",
        "data-2x": "assets/images/new-releases/new-releases-18@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box mb-e-30 mb-e-lg-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-17.jpg",
        "data-2x": "assets/images/new-releases/new-releases-17@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
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
        href: "#"
      }, "Roll n Peace Remix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Imagine")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "search-content-artists",
        role: "tabpanel",
        "aria-labelledby": "search-tab-artists"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "search-content-playlists",
        role: "tabpanel",
        "aria-labelledby": "search-tab-playlists"
      })))));
    }
  }]);

  return Search_Box;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SideBar/SideBarLeft.js":
/*!*******************************************!*\
  !*** ./components/SideBar/SideBarLeft.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBarLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SideBarLeft =
/*#__PURE__*/
function (_Component) {
  _inherits(SideBarLeft, _Component);

  function SideBarLeft() {
    _classCallCheck(this, SideBarLeft);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBarLeft).apply(this, arguments));
  }

  _createClass(SideBarLeft, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "primary-menu-offcanvas",
        className: "off-canvas off-canvas-left d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "close-offcanvas-main-menu",
        href: "#",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-nav-container d-flex flex-column align-items-center ml-auto mr-auto position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "side-nav adonis-animate",
        "data-animation": "menuTwo",
        id: "site-side-nav",
        "data-level": "1",
        "data-animation-item": "> li > a"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        href: "home.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Shop ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Browse ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Genres ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Charts ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-highlight-active fs-1"
      }, "hot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-album.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "More", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline horizon-list fs-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 39 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright"
      }, " Copyright \xA9 2018 IconikTech. All rights reserved.")));
    }
  }]);

  return SideBarLeft;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Tabs/Tab_Menu_Anime.js":
/*!*******************************************!*\
  !*** ./components/Tabs/Tab_Menu_Anime.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab_Menu_Anime; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Tab_Menu_Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab_Menu_Anime, _Component);

  function Tab_Menu_Anime() {
    _classCallCheck(this, Tab_Menu_Anime);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab_Menu_Anime).apply(this, arguments));
  }

  _createClass(Tab_Menu_Anime, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-e-30 mb-e-lg-50"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-auto mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs tab-style-1 scroll-x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-border"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
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
        className: "menu-item active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active adonis-ajax-load",
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
      }))));
    }
  }]);

  return Tab_Menu_Anime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/*! exports provided: __get_Projection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__get_Projection", function() { return __get_Projection; });
function __get_Projection(title, episodes, coverImage, key, contentImages, categories, fansub, countries, startMusicName, finishMusicName, videos, _id, part, episodesCurrent, content, releaseYear, otherTitle, view, rank, group, indexGroup, producer, imageMain, followers, filmActor, filmDirector, keyClass, page, status, author, linkTrailer, createdAt, updatedAt, __v) {
  var projection = {};

  if (Number(title) === 0) {
    projection.title = 0;
  }

  if (Number(episodes) === 0) {
    projection.episodes = 0;
  }

  if (Number(coverImage) === 0) {
    projection.coverImage = 0;
  }

  if (Number(key) === 0) {
    projection.key = 0;
  }

  if (Number(contentImages) === 0) {
    projection.contentImages = 0;
  }

  if (Number(categories) === 0) {
    projection.categories = 0;
  }

  if (Number(fansub) === 0) {
    projection.fansub = 0;
  }

  if (Number(countries) === 0) {
    projection.countries = 0;
  }

  if (Number(startMusicName) === 0) {
    projection.startMusicName = 0;
  }

  if (Number(finishMusicName) === 0) {
    projection.finishMusicName = 0;
  }

  if (Number(videos) === 0) {
    projection.videos = 0;
  }

  if (Number(_id) === 0) {
    projection._id = 0;
  }

  if (Number(part) === 0) {
    projection.part = 0;
  }

  if (Number(episodesCurrent) === 0) {
    projection.episodesCurrent = 0;
  }

  if (Number(content) === 0) {
    projection.content = 0;
  }

  if (Number(releaseYear) === 0) {
    projection.releaseYear = 0;
  }

  if (Number(otherTitle) === 0) {
    projection.otherTitle = 0;
  }

  if (Number(view) === 0) {
    projection.view = 0;
  }

  if (Number(rank) === 0) {
    projection.rank = 0;
  }

  if (Number(group) === 0) {
    projection.group = 0;
  }

  if (Number(indexGroup) === 0) {
    projection.indexGroup = 0;
  }

  if (Number(producer) === 0) {
    projection.producer = 0;
  }

  if (Number(imageMain) === 0) {
    projection.imageMain = 0;
  }

  if (Number(followers) === 0) {
    projection.followers = 0;
  }

  if (Number(filmActor) === 0) {
    projection.filmActor = 0;
  }

  if (Number(filmDirector) === 0) {
    projection.filmDirector = 0;
  }

  if (Number(keyClass) === 0) {
    projection.keyClass = 0;
  }

  if (Number(page) === 0) {
    projection.page = 0;
  }

  if (Number(status) === 0) {
    projection.status = 0;
  }

  if (Number(author) === 0) {
    projection.author = 0;
  }

  if (Number(linkTrailer) === 0) {
    projection.linkTrailer = 0;
  }

  if (Number(createdAt) === 0) {
    projection.createdAt = 0;
  }

  if (Number(updatedAt) === 0) {
    projection.updatedAt = 0;
  }

  if (Number(__v) === 0) {
    projection.__v = 0;
  }

  return projection;
}



/***/ }),

/***/ "./pages/Anime.js":
/*!************************!*\
  !*** ./pages/Anime.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search_Search_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search/Search_Box */ "./components/Search/Search_Box.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Tabs_Tab_Menu_Anime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tabs/Tab_Menu_Anime */ "./components/Tabs/Tab_Menu_Anime.js");
/* harmony import */ var _views_MainAnime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/MainAnime */ "./views/MainAnime.js");
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);


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













var Anime =
/*#__PURE__*/
function (_Component) {
  _inherits(Anime, _Component);

  function Anime() {
    _classCallCheck(this, Anime);

    return _possibleConstructorReturn(this, _getPrototypeOf(Anime).apply(this, arguments));
  }

  _createClass(Anime, [{
    key: "render",
    value: function render() {
      var store = Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props.data);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "wrap",
        className: "light main-wrap clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        id: "main"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "master-container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-4 pt-lg-5"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tabs_Tab_Menu_Anime__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tabs-content overflow-h"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainAnime__WEBPACK_IMPORTED_MODULE_6__["default"], null)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search_Search_Box__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return Anime;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Anime.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var store, newUpdateAnime, carouselAnime, recommendAnime_1, recommendAnime_2, recommendAnime_3, recommendAnime_4, recommendAnime_5, recommendAnime_6, topViewsAnime;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["default"])();
          newUpdateAnime = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_New_Update_Anime();
          carouselAnime = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Data_Carousel_Anime();
          recommendAnime_1 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_1();
          recommendAnime_2 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_2();
          recommendAnime_3 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_3();
          recommendAnime_4 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_4();
          recommendAnime_5 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_5();
          recommendAnime_6 = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Recommend_Anime_6();
          topViewsAnime = _api_api__WEBPACK_IMPORTED_MODULE_8__["default"].__get_Top_Views_Anime();
          _context.next = 12;
          return Promise.all([newUpdateAnime, recommendAnime_1, recommendAnime_2, recommendAnime_3, recommendAnime_4, recommendAnime_5, recommendAnime_6, topViewsAnime, carouselAnime]).then(function (result) {
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeNewUpdateAnime"])(result[0]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_1"])(result[1]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_2"])(result[2]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_3"])(result[3]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_4"])(result[4]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_5"])(result[5]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeRecommendAnime_6"])(result[6]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeTopViewsAnime"])(result[7]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_9__["storeCarouselAnime"])(result[8]));
          }).catch(function (err) {
            console.log(err);
          });

        case 12:
          return _context.abrupt("return", {
            data: store.getState()
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5, storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5, storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2, storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome, storeMainNews_1, storeMainNews_2, storeMainNews_3, storeMainNews_4, storeMainNews_5, storeMainNews_6, storeMainNews_7, storeMainNews_8, storeMainNews_9, storeMainNews_10, storeMainComedy, storeMainRomance_1, storeMainRomance_2, storeMainRomance_3, storeMainRomance_4, storeMainRomance_5, storeMainRomance_6, storeMainRomance_7, storeMainRomance_8, storeMainRomance_9, storeMainRomance_10, storeCarouselCenima, storeNewUpdateCenima, storeRecommendCenima_1, storeRecommendCenima_2, storeRecommendCenima_3, storeRecommendCenima_4, storeRecommendCenima_5, storeRecommendCenima_6, storeRecommendCenima_7, storeRecommendCenima_8, storeRecommendCenima_9, storeRecommendCenima_10, storeTopViewsCenima, storeCarouselAnime, storeTopViewsAnime, storeNewUpdateAnime, storeRecommendAnime_1, storeRecommendAnime_2, storeRecommendAnime_3, storeRecommendAnime_4, storeRecommendAnime_5, storeRecommendAnime_6, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselMainHome", function() { return storeCarouselMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_1", function() { return storeCommonMovies_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_2", function() { return storeCommonMovies_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_3", function() { return storeCommonMovies_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_4", function() { return storeCommonMovies_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_5", function() { return storeCommonMovies_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_6", function() { return storeCommonMovies_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFeatureMainHome", function() { return storeFeatureMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_1", function() { return storeNewDay_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_2", function() { return storeNewDay_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_3", function() { return storeNewDay_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_4", function() { return storeNewDay_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_5", function() { return storeNewDay_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_6", function() { return storeNewDay_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_7", function() { return storeNewDay_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_8", function() { return storeNewDay_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_9", function() { return storeNewDay_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_10", function() { return storeNewDay_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateMainHome", function() { return storeNewUpdateMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_1", function() { return storeTopWeek_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_2", function() { return storeTopWeek_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_3", function() { return storeTopWeek_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_4", function() { return storeTopWeek_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_5", function() { return storeTopWeek_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_6", function() { return storeTopWeek_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTrendsMainHome", function() { return storeTrendsMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_1", function() { return storeMainNews_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_2", function() { return storeMainNews_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_3", function() { return storeMainNews_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_4", function() { return storeMainNews_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_5", function() { return storeMainNews_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_6", function() { return storeMainNews_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_7", function() { return storeMainNews_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_8", function() { return storeMainNews_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_9", function() { return storeMainNews_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_10", function() { return storeMainNews_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainComedy", function() { return storeMainComedy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_1", function() { return storeMainRomance_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_2", function() { return storeMainRomance_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_3", function() { return storeMainRomance_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_4", function() { return storeMainRomance_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_5", function() { return storeMainRomance_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_6", function() { return storeMainRomance_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_7", function() { return storeMainRomance_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_8", function() { return storeMainRomance_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_9", function() { return storeMainRomance_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_10", function() { return storeMainRomance_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselCenima", function() { return storeCarouselCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateCenima", function() { return storeNewUpdateCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_1", function() { return storeRecommendCenima_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_2", function() { return storeRecommendCenima_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_3", function() { return storeRecommendCenima_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_4", function() { return storeRecommendCenima_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_5", function() { return storeRecommendCenima_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_6", function() { return storeRecommendCenima_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_7", function() { return storeRecommendCenima_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_8", function() { return storeRecommendCenima_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_9", function() { return storeRecommendCenima_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_10", function() { return storeRecommendCenima_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopViewsCenima", function() { return storeTopViewsCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselAnime", function() { return storeCarouselAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopViewsAnime", function() { return storeTopViewsAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateAnime", function() { return storeNewUpdateAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_1", function() { return storeRecommendAnime_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_2", function() { return storeRecommendAnime_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_3", function() { return storeRecommendAnime_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_4", function() { return storeRecommendAnime_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_5", function() { return storeRecommendAnime_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_6", function() { return storeRecommendAnime_6; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);

 /////////////// TẠO ACTION ///////////////////////////////////////////////

var storeCarouselMainHome = function storeCarouselMainHome(data) {
  return {
    type: "STORE_CAROUSEL_MAIN_HOME",
    data: data
  };
};
var storeCommonMovies_1 = function storeCommonMovies_1(data) {
  return {
    type: "STORE_COMMON_MOVIES_1",
    data: data
  };
};
var storeCommonMovies_2 = function storeCommonMovies_2(data) {
  return {
    type: "STORE_COMMON_MOVIES_2",
    data: data
  };
};
var storeCommonMovies_3 = function storeCommonMovies_3(data) {
  return {
    type: "STORE_COMMON_MOVIES_3",
    data: data
  };
};
var storeCommonMovies_4 = function storeCommonMovies_4(data) {
  return {
    type: "STORE_COMMON_MOVIES_4",
    data: data
  };
};
var storeCommonMovies_5 = function storeCommonMovies_5(data) {
  return {
    type: "STORE_COMMON_MOVIES_5",
    data: data
  };
};
var storeCommonMovies_6 = function storeCommonMovies_6(data) {
  return {
    type: "STORE_COMMON_MOVIES_6",
    data: data
  };
};
var storeFeatureMainHome = function storeFeatureMainHome(data) {
  return {
    type: "STORE_FEATURE_MAIN_HOME_1",
    data: data
  };
};
var storeNewDay_1 = function storeNewDay_1(data) {
  return {
    type: "STORE_NEW_DAY_1",
    data: data
  };
};
var storeNewDay_2 = function storeNewDay_2(data) {
  return {
    type: "STORE_NEW_DAY_2",
    data: data
  };
};
var storeNewDay_3 = function storeNewDay_3(data) {
  return {
    type: "STORE_NEW_DAY_3",
    data: data
  };
};
var storeNewDay_4 = function storeNewDay_4(data) {
  return {
    type: "STORE_NEW_DAY_4",
    data: data
  };
};
var storeNewDay_5 = function storeNewDay_5(data) {
  return {
    type: "STORE_NEW_DAY_5",
    data: data
  };
};
var storeNewDay_6 = function storeNewDay_6(data) {
  return {
    type: "STORE_NEW_DAY_6",
    data: data
  };
};
var storeNewDay_7 = function storeNewDay_7(data) {
  return {
    type: "STORE_NEW_DAY_7",
    data: data
  };
};
var storeNewDay_8 = function storeNewDay_8(data) {
  return {
    type: "STORE_NEW_DAY_8",
    data: data
  };
};
var storeNewDay_9 = function storeNewDay_9(data) {
  return {
    type: "STORE_NEW_DAY_9",
    data: data
  };
};
var storeNewDay_10 = function storeNewDay_10(data) {
  return {
    type: "STORE_NEW_DAY_10",
    data: data
  };
};
var storeNewUpdateMainHome = function storeNewUpdateMainHome(data) {
  return {
    type: "STORE_NEW_UPDATE_MAIN_HOME",
    data: data
  };
};
var storeTopWeek_1 = function storeTopWeek_1(data) {
  return {
    type: "STORE_TOP_WEEK_1",
    data: data
  };
};
var storeTopWeek_2 = function storeTopWeek_2(data) {
  return {
    type: "STORE_TOP_WEEK_2",
    data: data
  };
};
var storeTopWeek_3 = function storeTopWeek_3(data) {
  return {
    type: "STORE_TOP_WEEK_3",
    data: data
  };
};
var storeTopWeek_4 = function storeTopWeek_4(data) {
  return {
    type: "STORE_TOP_WEEK_4",
    data: data
  };
};
var storeTopWeek_5 = function storeTopWeek_5(data) {
  return {
    type: "STORE_TOP_WEEK_5",
    data: data
  };
};
var storeTopWeek_6 = function storeTopWeek_6(data) {
  return {
    type: "STORE_TOP_WEEK_6",
    data: data
  };
};
var storeTrendsMainHome = function storeTrendsMainHome(data) {
  return {
    type: "STORE_TRENDS_MAIN_HOME",
    data: data
  };
};
var storeMainNews_1 = function storeMainNews_1(data) {
  return {
    type: "STORE_MAIN_NEWS_1",
    data: data
  };
};
var storeMainNews_2 = function storeMainNews_2(data) {
  return {
    type: "STORE_MAIN_NEWS_2",
    data: data
  };
};
var storeMainNews_3 = function storeMainNews_3(data) {
  return {
    type: "STORE_MAIN_NEWS_3",
    data: data
  };
};
var storeMainNews_4 = function storeMainNews_4(data) {
  return {
    type: "STORE_MAIN_NEWS_4",
    data: data
  };
};
var storeMainNews_5 = function storeMainNews_5(data) {
  return {
    type: "STORE_MAIN_NEWS_5",
    data: data
  };
};
var storeMainNews_6 = function storeMainNews_6(data) {
  return {
    type: "STORE_MAIN_NEWS_6",
    data: data
  };
};
var storeMainNews_7 = function storeMainNews_7(data) {
  return {
    type: "STORE_MAIN_NEWS_7",
    data: data
  };
};
var storeMainNews_8 = function storeMainNews_8(data) {
  return {
    type: "STORE_MAIN_NEWS_8",
    data: data
  };
};
var storeMainNews_9 = function storeMainNews_9(data) {
  return {
    type: "STORE_MAIN_NEWS_9",
    data: data
  };
};
var storeMainNews_10 = function storeMainNews_10(data) {
  return {
    type: "STORE_MAIN_NEWS_10",
    data: data
  };
};
var storeMainComedy = function storeMainComedy(data) {
  return {
    type: "STORE_MAIN_COMEDY",
    data: data
  };
};
var storeMainRomance_1 = function storeMainRomance_1(data) {
  return {
    type: "STORE_MAIN_ROMANCE_1",
    data: data
  };
};
var storeMainRomance_2 = function storeMainRomance_2(data) {
  return {
    type: "STORE_MAIN_ROMANCE_2",
    data: data
  };
};
var storeMainRomance_3 = function storeMainRomance_3(data) {
  return {
    type: "STORE_MAIN_ROMANCE_3",
    data: data
  };
};
var storeMainRomance_4 = function storeMainRomance_4(data) {
  return {
    type: "STORE_MAIN_ROMANCE_4",
    data: data
  };
};
var storeMainRomance_5 = function storeMainRomance_5(data) {
  return {
    type: "STORE_MAIN_ROMANCE_5",
    data: data
  };
};
var storeMainRomance_6 = function storeMainRomance_6(data) {
  return {
    type: "STORE_MAIN_ROMANCE_6",
    data: data
  };
};
var storeMainRomance_7 = function storeMainRomance_7(data) {
  return {
    type: "STORE_MAIN_ROMANCE_7",
    data: data
  };
};
var storeMainRomance_8 = function storeMainRomance_8(data) {
  return {
    type: "STORE_MAIN_ROMANCE_8",
    data: data
  };
};
var storeMainRomance_9 = function storeMainRomance_9(data) {
  return {
    type: "STORE_MAIN_ROMANCE_9",
    data: data
  };
};
var storeMainRomance_10 = function storeMainRomance_10(data) {
  return {
    type: "STORE_MAIN_ROMANCE_10",
    data: data
  };
}; ////////////////////////////////////////////////////////////////////////////
/////////////////////////// CENIMA /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var storeCarouselCenima = function storeCarouselCenima(data) {
  return {
    type: "STORE_CAROUSEL_CENIMA",
    data: data
  };
};
var storeNewUpdateCenima = function storeNewUpdateCenima(data) {
  return {
    type: "STORE_NEW_UPDATE_CENIMA",
    data: data
  };
};
var storeRecommendCenima_1 = function storeRecommendCenima_1(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_1",
    data: data
  };
};
var storeRecommendCenima_2 = function storeRecommendCenima_2(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_2",
    data: data
  };
};
var storeRecommendCenima_3 = function storeRecommendCenima_3(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_3",
    data: data
  };
};
var storeRecommendCenima_4 = function storeRecommendCenima_4(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_4",
    data: data
  };
};
var storeRecommendCenima_5 = function storeRecommendCenima_5(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_5",
    data: data
  };
};
var storeRecommendCenima_6 = function storeRecommendCenima_6(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_6",
    data: data
  };
};
var storeRecommendCenima_7 = function storeRecommendCenima_7(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_7",
    data: data
  };
};
var storeRecommendCenima_8 = function storeRecommendCenima_8(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_8",
    data: data
  };
};
var storeRecommendCenima_9 = function storeRecommendCenima_9(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_9",
    data: data
  };
};
var storeRecommendCenima_10 = function storeRecommendCenima_10(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_10",
    data: data
  };
};
var storeTopViewsCenima = function storeTopViewsCenima(data) {
  return {
    type: "STORE_TOP_VIEWS_CENIMA",
    data: data
  };
}; ////////////////////////////////////////////////////////////////////////////
//////////////////////////// ANIME /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var storeCarouselAnime = function storeCarouselAnime(data) {
  return {
    type: "STORE_CAROUSEL_ANIME",
    data: data
  };
};
var storeTopViewsAnime = function storeTopViewsAnime(data) {
  return {
    type: "STORE_TOP_VIEWS_ANIME",
    data: data
  };
};
var storeNewUpdateAnime = function storeNewUpdateAnime(data) {
  return {
    type: "STORE_NEW_UPDATE_ANIME",
    data: data
  };
};
var storeRecommendAnime_1 = function storeRecommendAnime_1(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_1",
    data: data
  };
};
var storeRecommendAnime_2 = function storeRecommendAnime_2(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_2",
    data: data
  };
};
var storeRecommendAnime_3 = function storeRecommendAnime_3(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_3",
    data: data
  };
};
var storeRecommendAnime_4 = function storeRecommendAnime_4(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_4",
    data: data
  };
};
var storeRecommendAnime_5 = function storeRecommendAnime_5(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_5",
    data: data
  };
};
var storeRecommendAnime_6 = function storeRecommendAnime_6(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_6",
    data: data
  };
}; /////////////////////////// REDUCER ////////////////////////////////////////

var carouselMainHomeReducer = function carouselMainHomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_1_Reducer = function commonMovies_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_1":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_2_Reducer = function commonMovies_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_2":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_3_Reducer = function commonMovies_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_3":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_4_Reducer = function commonMovies_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_4":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_5_Reducer = function commonMovies_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_5":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_6_Reducer = function commonMovies_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_6":
      return action.data;

    default:
      return state;
  }
};

var feature_Main_Home_Reducer = function feature_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_FEATURE_MAIN_HOME_1":
      return action.data;

    default:
      return state;
  }
};

var newDay_1_Reducer = function newDay_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_1":
      return action.data;

    default:
      return state;
  }
};

var newDay_2_Reducer = function newDay_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_2":
      return action.data;

    default:
      return state;
  }
};

var newDay_3_Reducer = function newDay_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_3":
      return action.data;

    default:
      return state;
  }
};

var newDay_4_Reducer = function newDay_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_4":
      return action.data;

    default:
      return state;
  }
};

var newDay_5_Reducer = function newDay_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_5":
      return action.data;

    default:
      return state;
  }
};

var newDay_6_Reducer = function newDay_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_6":
      return action.data;

    default:
      return state;
  }
};

var newDay_7_Reducer = function newDay_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_7":
      return action.data;

    default:
      return state;
  }
};

var newDay_8_Reducer = function newDay_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_8":
      return action.data;

    default:
      return state;
  }
};

var newDay_9_Reducer = function newDay_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_9":
      return action.data;

    default:
      return state;
  }
};

var newDay_10_Reducer = function newDay_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_10":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Main_Home_Reducer = function newUpdate_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var topWeek_1_Reducer = function topWeek_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_1":
      return action.data;

    default:
      return state;
  }
};

var topWeek_2_Reducer = function topWeek_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_2":
      return action.data;

    default:
      return state;
  }
};

var topWeek_3_Reducer = function topWeek_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_3":
      return action.data;

    default:
      return state;
  }
};

var topWeek_4_Reducer = function topWeek_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_4":
      return action.data;

    default:
      return state;
  }
};

var topWeek_5_Reducer = function topWeek_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_5":
      return action.data;

    default:
      return state;
  }
};

var topWeek_6_Reducer = function topWeek_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_6":
      return action.data;

    default:
      return state;
  }
};

var trends_Main_Home_Reducer = function trends_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TRENDS_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_1_Reducer = function main_Romance_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_1":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_2_Reducer = function main_Romance_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_2":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_3_Reducer = function main_Romance_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_3":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_4_Reducer = function main_Romance_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_4":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_5_Reducer = function main_Romance_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_5":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_6_Reducer = function main_Romance_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_6":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_7_Reducer = function main_Romance_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_7":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_8_Reducer = function main_Romance_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_8":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_9_Reducer = function main_Romance_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_9":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_10_Reducer = function main_Romance_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_10":
      return action.data;

    default:
      return state;
  }
}; ////////////////////////////////////////////////////////////////////////////
///////////////////////////// CENIMA ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


var carouselCenimaReducer = function carouselCenimaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_CENIMA":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Cenima_Reducer = function newUpdate_Cenima_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_CENIMA":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_1_Reducer = function recommend_Cenima_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_1":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_2_Reducer = function recommend_Cenima_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_2":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_3_Reducer = function recommend_Cenima_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_3":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_4_Reducer = function recommend_Cenima_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_4":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_5_Reducer = function recommend_Cenima_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_5":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_6_Reducer = function recommend_Cenima_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_6":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_7_Reducer = function recommend_Cenima_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_7":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_8_Reducer = function recommend_Cenima_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_8":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_9_Reducer = function recommend_Cenima_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_9":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_10_Reducer = function recommend_Cenima_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_10":
      return action.data;

    default:
      return state;
  }
};

var mainNews_1_Reducer = function mainNews_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_1":
      return action.data;

    default:
      return state;
  }
};

var mainNews_2_Reducer = function mainNews_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_2":
      return action.data;

    default:
      return state;
  }
};

var mainNews_3_Reducer = function mainNews_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_3":
      return action.data;

    default:
      return state;
  }
};

var mainNews_4_Reducer = function mainNews_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_4":
      return action.data;

    default:
      return state;
  }
};

var mainNews_5_Reducer = function mainNews_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_5":
      return action.data;

    default:
      return state;
  }
};

var mainNews_6_Reducer = function mainNews_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_6":
      return action.data;

    default:
      return state;
  }
};

var mainNews_7_Reducer = function mainNews_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_7":
      return action.data;

    default:
      return state;
  }
};

var mainNews_8_Reducer = function mainNews_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_8":
      return action.data;

    default:
      return state;
  }
};

var mainNews_9_Reducer = function mainNews_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_9":
      return action.data;

    default:
      return state;
  }
};

var mainNews_10_Reducer = function mainNews_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_10":
      return action.data;

    default:
      return state;
  }
};

var mainComedy_Reducer = function mainComedy_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_COMEDY":
      return action.data;

    default:
      return state;
  }
};

var topViews_Cenima_Reducer = function topViews_Cenima_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_VIEWS_CENIMA":
      return action.data;

    default:
      return state;
  }
}; ////////////////////////////////////////////////////////////////////////
/////////////////////////// ANIME //////////////////////////////////////
////////////////////////////////////////////////////////////////////////


var carouselAnimeReducer = function carouselAnimeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_ANIME":
      return action.data;

    default:
      return state;
  }
};

var topViews_Anime_Reducer = function topViews_Anime_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_VIEWS_ANIME":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Anime_Reducer = function newUpdate_Anime_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_ANIME":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_1_Reducer = function recommend_Anime_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_1":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_2_Reducer = function recommend_Anime_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_2":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_3_Reducer = function recommend_Anime_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_3":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_4_Reducer = function recommend_Anime_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_4":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_5_Reducer = function recommend_Anime_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_5":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_6_Reducer = function recommend_Anime_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_6":
      return action.data;

    default:
      return state;
  }
};

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  carousel_Main_Home: carouselMainHomeReducer,
  commonMovies_1: commonMovies_1_Reducer,
  commonMovies_2: commonMovies_2_Reducer,
  commonMovies_3: commonMovies_3_Reducer,
  commonMovies_4: commonMovies_4_Reducer,
  commonMovies_5: commonMovies_5_Reducer,
  commonMovies_6: commonMovies_6_Reducer,
  feature_Main_Home: feature_Main_Home_Reducer,
  newDay_1: newDay_1_Reducer,
  newDay_2: newDay_2_Reducer,
  newDay_3: newDay_3_Reducer,
  newDay_4: newDay_4_Reducer,
  newDay_5: newDay_5_Reducer,
  newDay_6: newDay_6_Reducer,
  newDay_7: newDay_7_Reducer,
  newDay_8: newDay_8_Reducer,
  newDay_9: newDay_9_Reducer,
  newDay_10: newDay_10_Reducer,
  newUpdate_Main_Home: newUpdate_Main_Home_Reducer,
  topWeek_1: topWeek_1_Reducer,
  topWeek_2: topWeek_2_Reducer,
  topWeek_3: topWeek_3_Reducer,
  topWeek_4: topWeek_4_Reducer,
  topWeek_5: topWeek_5_Reducer,
  topWeek_6: topWeek_6_Reducer,
  trends_Main_Home: trends_Main_Home_Reducer,
  carousel_Cenima: carouselCenimaReducer,
  newUpdate_Cenima: newUpdate_Cenima_Reducer,
  recommend_Cenima_1: recommend_Cenima_1_Reducer,
  recommend_Cenima_2: recommend_Cenima_2_Reducer,
  recommend_Cenima_3: recommend_Cenima_3_Reducer,
  recommend_Cenima_4: recommend_Cenima_4_Reducer,
  recommend_Cenima_5: recommend_Cenima_5_Reducer,
  recommend_Cenima_6: recommend_Cenima_6_Reducer,
  recommend_Cenima_7: recommend_Cenima_7_Reducer,
  recommend_Cenima_8: recommend_Cenima_8_Reducer,
  recommend_Cenima_9: recommend_Cenima_9_Reducer,
  recommend_Cenima_10: recommend_Cenima_10_Reducer,
  mainNews_1: mainNews_1_Reducer,
  mainNews_2: mainNews_2_Reducer,
  mainNews_3: mainNews_3_Reducer,
  mainNews_4: mainNews_4_Reducer,
  mainNews_5: mainNews_5_Reducer,
  mainNews_6: mainNews_6_Reducer,
  mainNews_7: mainNews_7_Reducer,
  mainNews_8: mainNews_8_Reducer,
  mainNews_9: mainNews_9_Reducer,
  mainNews_10: mainNews_10_Reducer,
  mainComedy: mainComedy_Reducer,
  topViews_Cenima: topViews_Cenima_Reducer,
  main_Romance_1: main_Romance_1_Reducer,
  main_Romance_2: main_Romance_2_Reducer,
  main_Romance_3: main_Romance_3_Reducer,
  main_Romance_4: main_Romance_4_Reducer,
  main_Romance_5: main_Romance_5_Reducer,
  main_Romance_6: main_Romance_6_Reducer,
  main_Romance_7: main_Romance_7_Reducer,
  main_Romance_8: main_Romance_8_Reducer,
  main_Romance_9: main_Romance_9_Reducer,
  main_Romance_10: main_Romance_10_Reducer,
  newUpdate_Anime: newUpdate_Anime_Reducer,
  recommend_Anime_1: recommend_Anime_1_Reducer,
  recommend_Anime_2: recommend_Anime_2_Reducer,
  recommend_Anime_3: recommend_Anime_3_Reducer,
  recommend_Anime_4: recommend_Anime_4_Reducer,
  recommend_Anime_5: recommend_Anime_5_Reducer,
  recommend_Anime_6: recommend_Anime_6_Reducer,
  topViews_Anime: topViews_Anime_Reducer,
  carousel_Anime: carouselAnimeReducer
}); ////////////////////////////////////////////////////////////////////////////////////////

/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
});

/***/ }),

/***/ "./variables/general.js":
/*!******************************!*\
  !*** ./variables/general.js ***!
  \******************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
var url = "http://localhost:4098/";


/***/ }),

/***/ "./views/MainAnime.js":
/*!****************************!*\
  !*** ./views/MainAnime.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainAnime; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Anime_CarouselTop_Anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Anime/CarouselTop_Anime */ "./components/Anime/CarouselTop_Anime.js");
/* harmony import */ var _components_Anime_Recommend_Anime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Anime/Recommend_Anime */ "./components/Anime/Recommend_Anime.js");
/* harmony import */ var _components_Anime_TopViews_Anime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Anime/TopViews_Anime */ "./components/Anime/TopViews_Anime.js");
/* harmony import */ var _components_Anime_NewUpdate_Anime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Anime/NewUpdate_Anime */ "./components/Anime/NewUpdate_Anime.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MainAnime =
/*#__PURE__*/
function (_Component) {
  _inherits(MainAnime, _Component);

  function MainAnime() {
    _classCallCheck(this, MainAnime);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainAnime).apply(this, arguments));
  }

  _createClass(MainAnime, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "anime",
        className: "inactive-hide active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Anime_CarouselTop_Anime__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Anime_Recommend_Anime__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Anime_TopViews_Anime__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Anime_NewUpdate_Anime__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return MainAnime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/Anime.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Anime.js */"./pages/Anime.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=Anime.js.map