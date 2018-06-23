import { UPDATE_CURRENT_WEATHER_DATA } from '../actions/currentWeather';

import { defaultState } from '../data/data';

const initialState = defaultState.weather.currentWeather;
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_WEATHER_DATA:
            return { 
                ...state, 
            };
        default: 
            return state;
    }
};

export default reducer;