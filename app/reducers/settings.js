import { TOGGLE_GPS, CHANGE_CITY_NAME } from '../actions/settings';


const initialState = {
    location: {
        getLocationBy: 'GPS', //<STRING> 'GPS' | 'CITY_NAME'
        cityName: '',
    },
};
  
const reducer = (state = initialState, action) => {
    let newLocationObj= {
        ...state.location
    };
    switch (action.type) {
        case TOGGLE_GPS:
            if (action.isGpsSelected){
                newLocationObj.getLocationBy= 'GPS';
            }else{
                newLocationObj.getLocationBy= 'CITY_NAME';
            }
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