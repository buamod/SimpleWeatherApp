import { UPDATE_CURRENT_WEATHER_DATA } from '../actions/currentWeather';

import { defaultState } from '../data/data';

const initialState = defaultState.currentWeather.data;
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_WEATHER_DATA:
            return { 
                ...state,
                isFetching: true,
            };
        default: 
            return state;
    }
};

export default reducer;