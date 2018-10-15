webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5, storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5, storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2, storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome, storeMainNews, storeMainRomance_1, storeMainRomance_2, storeMainRomance_3, storeMainRomance_4, storeMainRomance_5, storeMainRomance_6, storeCarouselCenima, storeNewUpdateCenima, storeRecommendCenima_1, storeRecommendCenima_2, storeRecommendCenima_3, storeRecommendCenima_4, storeRecommendCenima_5, storeRecommendCenima_6, storeRecommendCenima_7, storeRecommendCenima_8, storeRecommendCenima_9, storeRecommendCenima_10, storeTopViewsCenima, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews", function() { return storeMainNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_1", function() { return storeMainRomance_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_2", function() { return storeMainRomance_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_3", function() { return storeMainRomance_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_4", function() { return storeMainRomance_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_5", function() { return storeMainRomance_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_6", function() { return storeMainRomance_6; });
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

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
    type: "STORE_FEATURE_MAIN_HOME",
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
var storeMainNews = function storeMainNews(data) {
  return {
    type: "STORE_MAIN_NEWS",
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
    case "STORE_FEATURE_MAIN_HOME":
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

var mainNews_Reducer = function mainNews_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS":
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
  mainNews: mainNews_Reducer,
  topViews_Cenima: topViews_Cenima_Reducer,
  main_Romance_1: main_Romance_1_Reducer,
  main_Romance_2: main_Romance_2_Reducer,
  main_Romance_3: main_Romance_3_Reducer,
  main_Romance_4: main_Romance_4_Reducer,
  main_Romance_5: main_Romance_5_Reducer,
  main_Romance_6: main_Romance_6_Reducer
}); ////////////////////////////////////////////////////////////////////////////////////////

/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
});

/***/ })

})
//# sourceMappingURL=index.js.3f5b106d93981ea2f532.hot-update.js.map