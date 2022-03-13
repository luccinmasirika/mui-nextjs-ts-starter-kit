import { compose, createStore } from 'redux'
import { reducers } from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose

export default createStore(reducers, composeEnhancers())
