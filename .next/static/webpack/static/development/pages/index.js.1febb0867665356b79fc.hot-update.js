webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search_Search_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search/Search_Box */ "./components/Search/Search_Box.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Tabs_Tab_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tabs/Tab_Menu */ "./components/Tabs/Tab_Menu.js");
/* harmony import */ var _views_MainHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/MainHome */ "./views/MainHome.js");
/* harmony import */ var _views_MainCenima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/MainCenima */ "./views/MainCenima.js");
/* harmony import */ var _views_MainRomance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/MainRomance */ "./views/MainRomance.js");
/* harmony import */ var _views_MainAnime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/MainAnime */ "./views/MainAnime.js");
/* harmony import */ var _views_MainComedy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/MainComedy */ "./views/MainComedy.js");
/* harmony import */ var _views_MainNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/MainNews */ "./views/MainNews.js");
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _components_SVG_SvgCustom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SVG/SvgCustom */ "./components/SVG/SvgCustom.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


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



















var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var store = Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["default"])(this.props.data);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_16__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "wrap",
        className: "light main-wrap clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        id: "main"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "master-container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-4 pt-lg-5"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tabs_Tab_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tabs-content overflow-h"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainHome__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainCenima__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainRomance__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.props.data_1
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainAnime__WEBPACK_IMPORTED_MODULE_9__["default"], {
        NewUpdate_Anime: this.props.data_4,
        Recommend_Anime: [this.props.data_4, this.props.data_5, this.props.data_4, this.props.data_5, this.props.data_4, this.props.data_5],
        TopViews_Anime: this.props.data_3
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainComedy__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_MainNews__WEBPACK_IMPORTED_MODULE_11__["default"], null)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search_Search_Box__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var store, carouselMainHome, commonMovies_1, commonMovies_2, commonMovies_3, commonMovies_4, commonMovies_5, commonMovies_6, featureMainHome, newDay_1, newDay_2, newDay_3, newDay_4, newDay_5, newDay_6, newDay_7, newDay_8, newDay_9, newDay_10, newUpdateMainHome, topWeek_1, topWeek_2, topWeek_3, topWeek_4, topWeek_5, topWeek_6, trendsMainHome, carouselCenima, newUpdateCenima, recommendCenima_1, recommendCenima_2, recommendCenima_3, recommendCenima_4, recommendCenima_5, recommendCenima_6, recommendCenima_7, recommendCenima_8, recommendCenima_9, recommendCenima_10, mainNews, topViewsCenima, mainRomance_1, mainRomance_2, mainRomance_3, mainRomance_4, mainRomance_5, mainRomance_6;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["default"])();
          carouselMainHome = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Data_Carousel_Main_Home();
          commonMovies_1 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_1();
          commonMovies_2 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_2();
          commonMovies_3 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_3();
          commonMovies_4 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_4();
          commonMovies_5 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_5();
          commonMovies_6 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Common_Movies_6();
          featureMainHome = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Feature_Main_Home();
          newDay_1 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_1();
          newDay_2 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_2();
          newDay_3 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_3();
          newDay_4 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_4();
          newDay_5 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_5();
          newDay_6 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_6();
          newDay_7 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_7();
          newDay_8 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_8();
          newDay_9 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_9();
          newDay_10 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Day_10();
          newUpdateMainHome = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Update_Main_Home();
          topWeek_1 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_1();
          topWeek_2 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_2();
          topWeek_3 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_3();
          topWeek_4 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_4();
          topWeek_5 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_5();
          topWeek_6 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Week_6();
          trendsMainHome = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Trends_Main_Home();
          carouselCenima = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Data_Carousel_Cenima();
          newUpdateCenima = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_New_Update_Cenima();
          recommendCenima_1 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_1();
          recommendCenima_2 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_2();
          recommendCenima_3 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_3();
          recommendCenima_4 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_4();
          recommendCenima_5 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_5();
          recommendCenima_6 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_6();
          recommendCenima_7 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_7();
          recommendCenima_8 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_8();
          recommendCenima_9 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_9();
          recommendCenima_10 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Recommend_Cenima_10();
          mainNews = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_News();
          topViewsCenima = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Top_Views_Cenima();
          mainRomance_1 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_1();
          mainRomance_2 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_2();
          mainRomance_3 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_3();
          mainRomance_4 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_4();
          mainRomance_5 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_5();
          mainRomance_6 = _api_api__WEBPACK_IMPORTED_MODULE_14__["default"].__get_Main_Romance_6();
          _context.next = 49;
          return Promise.all([carouselMainHome, commonMovies_1, commonMovies_2, commonMovies_3, commonMovies_4, commonMovies_5, commonMovies_6, featureMainHome, newDay_1, newDay_2, newDay_3, newDay_4, newDay_5, newDay_6, newDay_7, newDay_8, newDay_9, newDay_10, newUpdateMainHome, topWeek_1, topWeek_2, topWeek_3, topWeek_4, topWeek_5, topWeek_6, trendsMainHome, carouselCenima, newUpdateCenima, recommendCenima_1, recommendCenima_2, recommendCenima_3, recommendCenima_4, recommendCenima_5, recommendCenima_6, recommendCenima_7, recommendCenima_8, recommendCenima_9, recommendCenima_10, mainNews, topViewsCenima, mainRomance_1, mainRomance_2, mainRomance_3, mainRomance_4]).then(function (result) {
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCarouselMainHome"])(result[0]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_1"])(result[1]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_2"])(result[2]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_3"])(result[3]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_4"])(result[4]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_5"])(result[5]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCommonMovies_6"])(result[6]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeFeatureMainHome"])(result[7]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_1"])(result[8]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_2"])(result[9]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_3"])(result[10]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_4"])(result[11]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_5"])(result[12]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_6"])(result[13]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_7"])(result[14]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_8"])(result[15]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_9"])(result[16]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewDay_10"])(result[17]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewUpdateMainHome"])(result[18]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_1"])(result[19]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_2"])(result[20]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_3"])(result[21]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_4"])(result[22]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_5"])(result[23]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopWeek_6"])(result[24]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTrendsMainHome"])(result[25]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeCarouselCenima"])(result[26]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeNewUpdateCenima"])(result[27]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_1"])(result[28]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_2"])(result[29]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_3"])(result[30]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_4"])(result[31]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_5"])(result[32]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_6"])(result[33]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_7"])(result[34]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_8"])(result[35]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_9"])(result[36]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeRecommendCenima_10"])(result[37]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeMainNews"])(result[38]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeTopViewsCenima"])(result[39]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeMainRomance_1"])(result[40]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeMainRomance_2"])(result[41]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeMainRomance_3"])(result[42]));
            store.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["storeMainRomance_4"])(result[43]));
          }).catch(function (err) {
            console.log(err);
          });

        case 49:
          return _context.abrupt("return", {
            data: store.getState(),
            data_2: [],
            data_3: [],
            data_4: [],
            data_5: [],
            data_6: [],
            data_8: [],
            data_9: [],
            data_10: [],
            data_11: [],
            data_12: [],
            data_13: [],
            data_14: []
          });

        case 50:
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.1febb0867665356b79fc.hot-update.js.map