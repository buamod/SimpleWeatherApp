import { UPDATE_FORCAST_DATA } from '../actions/forcast';

import { defaultState } from '../data/data';

const initialState = defaultState.forcast.data;
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORCAST_DATA:
            return {
                ...state,
                isFetching: true,
            };
        default:
            return state;
    }
};

export default reducer;