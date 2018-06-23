export const UPDATE_CURRENT_WEATHER_DATA = 'UPDATE_CURRENT_WEATHER_DATA';

export const updateCurrentWeather = (newData) => ({
    type: UPDATE_CURRENT_WEATHER_DATA,
    newData: newData,
});