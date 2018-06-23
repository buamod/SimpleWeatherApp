import { TOGGLE_GPS, CHANGE_CITY_NAME } from '../actions/settings';


const initialState = {
    location: {
        isGpsSelected: true,
        cityName: '',
    },
};
  
const reducer = (state = initialState, action) => {
    let newLocationObj= {
        ...state.location
    };
    switch (action.type) {
        case TOGGLE_GPS:
            newLocationObj.isGpsSelected= action.isGpsSelected;
            return {
                ...state,
                location:newLocationObj,

            };
        case CHANGE_CITY_NAME:
            newLocationObj.cityName= action.cityName || '';
            return {
                ...state,
                location:newLocationObj,

            };
        default:
            return state;
    }
};

export default reducer;