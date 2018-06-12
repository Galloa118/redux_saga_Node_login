import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux';
import signup from '../pages/Auth/signup/reducer'
import login from '../pages/Auth/login/reducer'
import app from '../pages/App/modules/index'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  signup,
  login,
  app,
})