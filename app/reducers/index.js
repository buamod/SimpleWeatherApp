import { combineReducers } from 'redux';

import currentWeather from './currentWeather';
import forcast from './forcast';
import settings from './settings';

export default combineReducers({
    currentWeather,
    forcast,
    settings,
});
