import { TOGGLE_GPS, CHANGE_CITY_NAME } from '../actions/settings';


const initialState = {
    location: {
        getLocationBy: 'GPS', //<STRING> 'GPS' | 'CITY_NAME'
        cityName: 'City Name',
    },
},
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GPS:
            let newLocationObj= {
                ...state.location
            };
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
            let newLocationObj= {
                ...state.location,
                cityName: action.cityName || '',
            };
            return {
                ...state,
                location:newLocationObj,

            };
        default:
            return state;
    }
};

export default reducer;