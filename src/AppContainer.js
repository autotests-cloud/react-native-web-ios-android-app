/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import { App } from './App'

import configureStore from './configureStore'

const store = configureStore()

export const AppContainer: () => React$Node = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}