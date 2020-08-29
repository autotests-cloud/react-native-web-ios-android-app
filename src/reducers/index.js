import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import app from './app'

export default combineReducers({
  router: routerReducer,
  app,
  auth
})