/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 17:18:12
 * @modify date 2022-02-09 17:18:12
 * @desc [description]
 */

import { compose, createStore } from 'redux'
import { reducers } from './reducers'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default createStore(reducers, composeEnhancers())
