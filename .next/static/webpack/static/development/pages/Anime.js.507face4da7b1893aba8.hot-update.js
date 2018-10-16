webpackHotUpdate("static\\development\\pages\\Anime.js",{

/***/ "./pages/Anime.js":
/*!************************!*\
  !*** ./pages/Anime.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anime; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search_Search_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search/Search_Box */ "./components/Search/Search_Box.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Tabs_Tab_Menu_Anime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tabs/Tab_Menu_Anime */ "./components/Tabs/Tab_Menu_Anime.js");
/* harmony import */ var _views_MainAnime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/MainAnime */ "./views/MainAnime.js");
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Anime")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Anime.js.507face4da7b1893aba8.hot-update.js.map