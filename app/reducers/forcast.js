import { UPDATE_FORCAST_DATA } from '../actions/forcast';

import { defaultState } from '../data/data';

const initialState = defaultState.weather.forcast;
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORCAST_DATA:
            return {
                ...state,

            };
        default:
            return state;
    }
};

export default reducer;