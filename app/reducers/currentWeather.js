import {
    UPDATE_CURRENT_WEATHER_DATA,
    CURRENT_WEATHER_DATA_RESULT,
    CURRENT_WEATHER_DATA_ERROR,
} from '../actions/currentWeather';

import { defaultState } from '../data/data';

const initialState = {
    isFetching: false,
    data:{
        "coord": {
            "lon": -75.69,
            "lat": 45.42
        },
        "weather": [
            {
                "id": 801,
                "main": "Default",
                "description": "Unknown",
                "icon": "---"
            }
        ],
        "base": "---",
        "main": {
            "temp": 294,
            "pressure": 1000,
            "humidity": 20,
            "temp_min": 294,
            "temp_max": 294
        },
        "visibility": 24140,
        "wind": {
            "speed": 20,
            "deg": 360
        },
        "clouds": {
            "all": 20
        },
        "dt": 1529622000,
        "sys": {
            "type": 1,
            "id": 3694,
            "message": 0.0039,
            "country": "CA",
            "sunrise": 1529572474,
            "sunset": 1529628900
        },
        "id": 6094817,
        "name": "Unknown",
        "cod": 200
    },
    error: null,
}
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_WEATHER_DATA:
            return { 
                ...state,
                isFetching: true,
            };
        case CURRENT_WEATHER_DATA_RESULT:
            return { 
                ...state,
                isFetching: false,
                data:{
                    ...action.result,
                },
            };
        case CURRENT_WEATHER_DATA_ERROR:
            return { 
                ...state,
                isFetching: false,
                error: action.error,
            };
        default: 
            return state;
    }
};

export default reducer;