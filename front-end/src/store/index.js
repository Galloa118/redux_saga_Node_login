import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import combineReducer from './reducer';
import rootsaga from '../rootsaga';

export const history = createHistory()

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware,routerMiddleware(history), logger];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(combineReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootsaga);