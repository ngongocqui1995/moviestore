import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

/////////////// TẠO ACTION ///////////////////////////////////////////////
export const storeCarouselTop = ( data ) => ( {
    type: "STORE_CAROUSEL_TOP",
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
    type: "STORE_FEATURE_MAIN_HOME",
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


/////////////////////////// REDUCER ////////////////////////////////////////
const carouselTopReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_CAROUSEL_TOP":
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
        case "STORE_FEATURE_MAIN_HOME":
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


const reducer = combineReducers( {                                                   
    carouselTop: carouselTopReducer,
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
})                                                                              
                                                                                     
////////////////////////////////////////////////////////////////////////////////////////

export default ( initialState ) =>
createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) )