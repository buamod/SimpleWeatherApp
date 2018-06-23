export const TOGGLE_GPS = 'TOGGLE_GPS';
export const CHANGE_CITY_NAME = 'CHANGE_CITY_NAME';

export const toggleGps = (isGpsSelected) => ({
    type: TOGGLE_GPS,
    isGpsSelected: isGpsSelected,
});

export const changeCityName= (cityName) =>({
    type: CHANGE_CITY_NAME,
    cityName: cityName ,
});