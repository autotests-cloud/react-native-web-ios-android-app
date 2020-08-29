import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'

// import { createBrowserHistory } from "history"
import { createMemoryHistory } from "history"

import rootReducer from './reducers'

import sagas from './sagas/'

export const history =  createMemoryHistory()

export default (preloadedState = {}) => {
  
  const sagaMiddleware = createSagaMiddleware()

  const enhancers = []
  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
  
  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  )
  
  store.close = () => store.dispatch(END)
  
  Object.keys(sagas).forEach(key => sagaMiddleware.run(sagas[key]))

  return store
}