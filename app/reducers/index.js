import { combineReducers } from 'redux';

import currentWeather from './currentWeather';
import forecast from './forecast';
import settings from './settings';

export default combineReducers({
    currentWeather,
    forecast,
    settings,
});
