import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

/////////////// TẠO ACTION ///////////////////////////////////////////////
export const storeCarouselMainHome = ( data ) => ( {
    type: "STORE_CAROUSEL_MAIN_HOME",
    data
});

export const storeCommonMovies_1 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_1",
    data
});

export const storeCommonMovies_2 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_2",
    data
});

export const storeCommonMovies_3 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_3",
    data
});

export const storeCommonMovies_4 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_4",
    data
});

export const storeCommonMovies_5 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_5",
    data
});


export const storeCommonMovies_6 = ( data ) => ( {
    type: "STORE_COMMON_MOVIES_6",
    data
});

export const storeFeatureMainHome = ( data ) => ( {
    type: "STORE_FEATURE_MAIN_HOME_1",
    data
});

export const storeNewDay_1 = ( data ) => ( {
    type: "STORE_NEW_DAY_1",
    data
});

export const storeNewDay_2 = ( data ) => ( {
    type: "STORE_NEW_DAY_2",
    data
});

export const storeNewDay_3 = ( data ) => ( {
    type: "STORE_NEW_DAY_3",
    data
});

export const storeNewDay_4 = ( data ) => ( {
    type: "STORE_NEW_DAY_4",
    data
});

export const storeNewDay_5 = ( data ) => ( {
    type: "STORE_NEW_DAY_5",
    data
});

export const storeNewDay_6 = ( data ) => ( {
    type: "STORE_NEW_DAY_6",
    data
});

export const storeNewDay_7 = ( data ) => ( {
    type: "STORE_NEW_DAY_7",
    data
});

export const storeNewDay_8 = ( data ) => ( {
    type: "STORE_NEW_DAY_8",
    data
});

export const storeNewDay_9 = ( data ) => ( {
    type: "STORE_NEW_DAY_9",
    data
});

export const storeNewDay_10 = ( data ) => ( {
    type: "STORE_NEW_DAY_10",
    data
});

export const storeNewUpdateMainHome = ( data ) => ( {
    type: "STORE_NEW_UPDATE_MAIN_HOME",
    data
});

export const storeTopWeek_1 = ( data ) => ( {
    type: "STORE_TOP_WEEK_1",
    data
});

export const storeTopWeek_2 = ( data ) => ( {
    type: "STORE_TOP_WEEK_2",
    data
});

export const storeTopWeek_3 = ( data ) => ( {
    type: "STORE_TOP_WEEK_3",
    data
});

export const storeTopWeek_4 = ( data ) => ( {
    type: "STORE_TOP_WEEK_4",
    data
});

export const storeTopWeek_5 = ( data ) => ( {
    type: "STORE_TOP_WEEK_5",
    data
});

export const storeTopWeek_6 = ( data ) => ( {
    type: "STORE_TOP_WEEK_6",
    data
});

export const storeTrendsMainHome = ( data ) => ( {
    type: "STORE_TRENDS_MAIN_HOME",
    data
});

export const storeMainNews_1 = ( data ) => ( {
    type: "STORE_MAIN_NEWS_1",
    data
});

export const storeMainNews_2 = ( data ) => ( {
    type: "STORE_MAIN_NEWS_2",
    data
});

export const storeMainNews_3 = ( data ) => ( {
    type: "STORE_MAIN_NEWS_3",
    data
});

export const storeMainNews_4 = ( data ) => ( {
    type: "STORE_MAIN_NEWS_4",
    data
});

export const storeMainComedy = ( data ) => ( {
    type: "STORE_MAIN_COMEDY",
    data
});

export const storeMainRomance_1 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_1",
    data
});

export const storeMainRomance_2 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_2",
    data
});

export const storeMainRomance_3 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_3",
    data
});

export const storeMainRomance_4 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_4",
    data
});

export const storeMainRomance_5 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_5",
    data
});

export const storeMainRomance_6 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_6",
    data
});

export const storeMainRomance_7 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_7",
    data
});

export const storeMainRomance_8 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_8",
    data
});

export const storeMainRomance_9 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_9",
    data
});

export const storeMainRomance_10 = ( data ) => ( {
    type: "STORE_MAIN_ROMANCE_10",
    data
});


////////////////////////////////////////////////////////////////////////////
/////////////////////////// CENIMA /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const storeCarouselCenima = ( data ) => ( {
    type: "STORE_CAROUSEL_CENIMA",
    data
});

export const storeNewUpdateCenima = ( data ) => ( {
    type: "STORE_NEW_UPDATE_CENIMA",
    data
});

export const storeRecommendCenima_1 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_1",
    data
});

export const storeRecommendCenima_2 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_2",
    data
});

export const storeRecommendCenima_3 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_3",
    data
});

export const storeRecommendCenima_4 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_4",
    data
});

export const storeRecommendCenima_5 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_5",
    data
});

export const storeRecommendCenima_6 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_6",
    data
});

export const storeRecommendCenima_7 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_7",
    data
});

export const storeRecommendCenima_8 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_8",
    data
});

export const storeRecommendCenima_9 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_9",
    data
});

export const storeRecommendCenima_10 = ( data ) => ( {
    type: "STORE_RECOMMEND_CENIMA_10",
    data
});

export const storeTopViewsCenima = ( data ) => ( {
    type: "STORE_TOP_VIEWS_CENIMA",
    data
});

////////////////////////////////////////////////////////////////////////////
//////////////////////////// ANIME /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const storeTopViewsAnime = ( data ) => ( {
    type: "STORE_TOP_VIEWS_ANIME",
    data
});

export const storeNewUpdateAnime = ( data ) => ( {
    type: "STORE_NEW_UPDATE_ANIME",
    data
});

export const storeRecommendAnime_1 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_1",
    data
});

export const storeRecommendAnime_2 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_2",
    data
});

export const storeRecommendAnime_3 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_3",
    data
});

export const storeRecommendAnime_4 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_4",
    data
});

export const storeRecommendAnime_5 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_5",
    data
});

export const storeRecommendAnime_6 = ( data ) => ( {
    type: "STORE_RECOMMEND_ANIME_6",
    data
});

/////////////////////////// REDUCER ////////////////////////////////////////
const carouselMainHomeReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_CAROUSEL_MAIN_HOME":
            return action.data;
        default: return state;
    }
}

const commonMovies_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_1":
            return action.data;
        default: return state;
    }
}

const commonMovies_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_2":
            return action.data;
        default: return state;
    }
}

const commonMovies_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_3":
            return action.data;
        default: return state;
    }
}

const commonMovies_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_4":
            return action.data;
        default: return state;
    }
}

const commonMovies_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_5":
            return action.data;
        default: return state;
    }
}

const commonMovies_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_COMMON_MOVIES_6":
            return action.data;
        default: return state;
    }
}

const feature_Main_Home_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_FEATURE_MAIN_HOME_1":
            return action.data;
        default: return state;
    }
}

const newDay_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_1":
            return action.data;
        default: return state;
    }
}

const newDay_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_2":
            return action.data;
        default: return state;
    }
}

const newDay_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_3":
            return action.data;
        default: return state;
    }
}

const newDay_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_4":
            return action.data;
        default: return state;
    }
}

const newDay_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_5":
            return action.data;
        default: return state;
    }
}

const newDay_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_6":
            return action.data;
        default: return state;
    }
}

const newDay_7_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_7":
            return action.data;
        default: return state;
    }
}

const newDay_8_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_8":
            return action.data;
        default: return state;
    }
}

const newDay_9_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_9":
            return action.data;
        default: return state;
    }
}

const newDay_10_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_DAY_10":
            return action.data;
        default: return state;
    }
}

const newUpdate_Main_Home_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_UPDATE_MAIN_HOME":
            return action.data;
        default: return state;
    }
}

const topWeek_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_1":
            return action.data;
        default: return state;
    }
}

const topWeek_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_2":
            return action.data;
        default: return state;
    }
}

const topWeek_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_3":
            return action.data;
        default: return state;
    }
}

const topWeek_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_4":
            return action.data;
        default: return state;
    }
}

const topWeek_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_5":
            return action.data;
        default: return state;
    }
}

const topWeek_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_WEEK_6":
            return action.data;
        default: return state;
    }
}

const trends_Main_Home_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TRENDS_MAIN_HOME":
            return action.data;
        default: return state;
    }
}

const main_Romance_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_1":
            return action.data;
        default: return state;
    }
}

const main_Romance_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_2":
            return action.data;
        default: return state;
    }
}

const main_Romance_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_3":
            return action.data;
        default: return state;
    }
}

const main_Romance_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_4":
            return action.data;
        default: return state;
    }
}

const main_Romance_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_5":
            return action.data;
        default: return state;
    }
}

const main_Romance_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_6":
            return action.data;
        default: return state;
    }
}

const main_Romance_7_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_7":
            return action.data;
        default: return state;
    }
}

const main_Romance_8_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_8":
            return action.data;
        default: return state;
    }
}

const main_Romance_9_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_9":
            return action.data;
        default: return state;
    }
}

const main_Romance_10_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_ROMANCE_10":
            return action.data;
        default: return state;
    }
}

////////////////////////////////////////////////////////////////////////////
///////////////////////////// CENIMA ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const carouselCenimaReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_CAROUSEL_CENIMA":
            return action.data;
        default: return state;
    }
}

const newUpdate_Cenima_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_UPDATE_CENIMA":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_1":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_2":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_3":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_4":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_5":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_6":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_7_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_7":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_8_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_8":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_9_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_9":
            return action.data;
        default: return state;
    }
}

const recommend_Cenima_10_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_CENIMA_10":
            return action.data;
        default: return state;
    }
}

const mainNews_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_NEWS_1":
            return action.data;
        default: return state;
    }
}

const mainNews_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_NEWS_2":
            return action.data;
        default: return state;
    }
}

const mainNews_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_NEWS_3":
            return action.data;
        default: return state;
    }
}

const mainNews_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_NEWS_4":
            return action.data;
        default: return state;
    }
}

const mainComedy_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_MAIN_COMEDY":
            return action.data;
        default: return state;
    }
}

const topViews_Cenima_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_VIEWS_CENIMA":
            return action.data;
        default: return state;
    }
}

////////////////////////////////////////////////////////////////////////
/////////////////////////// ANIME //////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const topViews_Anime_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_TOP_VIEWS_ANIME":
            return action.data;
        default: return state;
    }
}

const newUpdate_Anime_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_NEW_UPDATE_ANIME":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_1_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_1":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_2_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_2":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_3_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_3":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_4_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_4":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_5_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_5":
            return action.data;
        default: return state;
    }
}

const recommend_Anime_6_Reducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_RECOMMEND_ANIME_6":
            return action.data;
        default: return state;
    }
}


const reducer = combineReducers( {                                                   
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
})

////////////////////////////////////////////////////////////////////////////////////////

export default ( initialState ) =>
createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) )