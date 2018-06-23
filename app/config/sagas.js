import { takeEvery } from 'redux-saga/effects'; //This function will enable us to listen to specified actions and do something upun receiving them 

//we need to fetch data from API once these actions are dispatched
import { UPDATE_CURRENT_WEATHER_DATA } from '../actions/currentWeather';
import { UPDATE_FORCAST_DATA } from '../actions/forcast';

function* fetchLatestCurrentWeatherData(){
    yield;
};

function* fetchLatestForcastData(){
    yield;
};

//This is a generator function
export default function* rootSaga(){
    //yield will cause the middleware to pause here
    yield takeEvery(UPDATE_CURRENT_WEATHER_DATA, fetchLatestCurrentWeatherData);
    yield takeEvery(UPDATE_FORCAST_DATA, fetchLatestForcastData); 
}