import { compose, createStore } from 'redux';
import { reducers } from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(reducers, composeEnhancers());
