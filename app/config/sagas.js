import { 
    takeEvery, //This function will enable us to listen to specified actions and do something upun receiving them 
    select, //This function will allow us to access redux state
    call, // This function facilitates testing request returned object
    put, // This function dispatches an action
} from 'redux-saga/effects'; 

//we need to fetch data from API once these actions are dispatched
import { 
    UPDATE_CURRENT_WEATHER_DATA, 
    CURRENT_WEATHER_DATA_RESULT, 
    CURRENT_WEATHER_DATA_ERROR,
} from '../actions/currentWeather';
import { 
    UPDATE_FORECAST_DATA,
    FORECAST_DATA_RESULT, 
    FORECAST_DATA_ERROR,
} from '../actions/forecast';

const baseUrl= 'http://api.openweathermap.org/data/2.5/';
const appId= '6660d2ece82717bbbc5388727bbb2fd6';

const DATA_TYPE_CURRENT_WEATHER= 'DATA_TYPE_CURRENT_WEATHER';
const DATA_TYPE_FORECAST= 'DATA_TYPE_FORECAST';

const fetchByGpsCoordinates = (dataType, lat, lon)=> {
    let fullUrl;
    switch (dataType){
        case DATA_TYPE_CURRENT_WEATHER:
            fullUrl= `${baseUrl}weather?appid=${appId}&lat=${lat.toString()}&lon=${lon.toString()}`;
            break;
        case DATA_TYPE_FORECAST:
            fullUrl= `${baseUrl}forecast?appid=${appId}&lat=${lat.toString()}&lon=${lon.toString()}`;
            break;
        default:
            alert('Invalid fetch type: ', dataType);
            return null;
    }
    return fetch(fullUrl);
}

const fetchByCity = (dataType, cityName)=> {
    let fullUrl;
    switch (dataType){
        case DATA_TYPE_CURRENT_WEATHER:
            fullUrl= `${baseUrl}weather?appid=${appId}&q=${cityName}`;
            break;
        case DATA_TYPE_FORECAST:
            fullUrl= `${baseUrl}forecast?appid=${appId}&q=${cityName}`;
            break;
        default:
            alert('Invalid fetch type: ', dataType);
            return null;
    }
    return fetch(fullUrl);
}

const getUserLocation = () => new Promise((resolve, reject) => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            location => resolve(location),
            error => reject(error),
            {timeout:10000},
        );
    } else{
        alert('Please turn on GPS');
        reject('Geolocation is not enabled');
    }
});

function* currentPositionOnSuccess(dataType, postData){
    try{
        const response= yield call(
            fetchByGpsCoordinates, //function name
            dataType, //1st arg
            postData.coords.latitude, //2nd arg
            postData.coords.longitude, //3rd arg
        );
        const result = yield response.json();
        if (result.cod != 200){
            //server returned an error
            switch (dataType){
                case DATA_TYPE_CURRENT_WEATHER:
                    yield put({type: CURRENT_WEATHER_DATA_ERROR, error: result.message});
                    break;
                case DATA_TYPE_FORECAST:
                    yield put({type: FORECAST_DATA_ERROR, error: result.message});
                    break;
                default:
                    alert ('Invalid dataType: ', dataType);
            }
            
        }else{
            //server returned valid response
            switch (dataType){
                case DATA_TYPE_CURRENT_WEATHER:
                    yield put({type: CURRENT_WEATHER_DATA_RESULT, result});
                    break;
                case DATA_TYPE_FORECAST:
                    yield put({type: FORECAST_DATA_RESULT, result});
                    break;
                default:
                    alert ('Invalid dataType: ', dataType);
            }
        }
    }catch (e){
        switch (dataType){
            case DATA_TYPE_CURRENT_WEATHER:
                yield put({type: CURRENT_WEATHER_DATA_ERROR, error: e.message});
                break;
            case DATA_TYPE_FORECAST:
                yield put({type: FORECAST_DATA_ERROR, error: e.message});
                break;
            default:
                alert ('Invalid dataType: ', dataType);
        }
    }
}

function* updateCurrentWeather(){
    isGpsSelected= yield select(state => state.settings.location.isGpsSelected);
    if (isGpsSelected){
        try{
            const postData = yield call(getUserLocation);
            yield currentPositionOnSuccess(DATA_TYPE_CURRENT_WEATHER, postData);
        }catch (e){
            yield put({type: CURRENT_WEATHER_DATA_ERROR, error: e.message});
        }
    } else{
        try{
            const cityName= yield select(state => state.settings.location.cityName);
            const response= yield call(
                fetchByCity,
                DATA_TYPE_CURRENT_WEATHER,
                cityName,
            );
            const result = yield response.json()
            if (result.cod != 200){
                //invalid response
                yield put({type: CURRENT_WEATHER_DATA_ERROR, error: result.message});
            }else{
                //valid response
                yield put({type: CURRENT_WEATHER_DATA_RESULT, result})
            }
        }catch (e){
            yield put({type: CURRENT_WEATHER_DATA_ERROR, error: e.message});
        }
    }
};

function* updateForecast(){
    isGpsSelected= yield select(state => state.settings.location.isGpsSelected);
    if (isGpsSelected){
        try{
            const postData = yield call(getUserLocation);
            yield currentPositionOnSuccess(DATA_TYPE_FORECAST, postData);
        }catch (e){
            yield put({type: FORECAST_DATA_ERROR, error: e.message});
        }

    } else{
        try{
            const cityName= yield select(state => state.settings.location.cityName);
            const response= yield call(
                fetchByCity,
                DATA_TYPE_FORECAST,
                cityName,
            );
            const result = yield response.json()
            if (result.cod != 200){
                //invalid response
                yield put({type: FORECAST_DATA_ERROR, error: result.message});
            }else{
                //valid response
                yield put({type: FORECAST_DATA_RESULT, result})
            }
        }catch (e){
            yield put({type: FORECAST_DATA_ERROR, error: e.message});
        }
    }
};

//This is a generator function
export default function* rootSaga(){
    //yield will cause the middleware to pause here
    yield takeEvery(UPDATE_CURRENT_WEATHER_DATA, updateCurrentWeather);
    yield takeEvery(UPDATE_FORECAST_DATA, updateForecast); 
}