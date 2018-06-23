import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'; //a function

import reducers from '../reducers';
import rootSaga from './sagas';
sagaMiddleware= createSagaMiddleware();

const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger); //logger should be the last middleware pushed to middleware array so it listens to all events
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
export default store;