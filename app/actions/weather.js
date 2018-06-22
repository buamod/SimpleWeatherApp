export const UPDATE_CURRENT_WEATHER_DATA = 'UPDATE_CURRENT_WEATHER_DATA';
export const UPDATE_FORCAST_DATA = 'UPDATE_FORCAST_DATA';

export const updateCurrentWeather = (newData) => ({
    type: UPDATE_CURRENT_WEATHER_DATA,
    newData: newData,
});

export const updateForcast = (newData) => ({
    type: UPDATE_FORCAST_DATA,
    newData: newData,
});