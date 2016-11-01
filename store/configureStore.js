import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import logger from 'redux-logger';

export default function configureStore(initialSate) {
  return createStore(
    rootReducer,
    initialSate,
    applyMiddleware(
      thunkMiddleware,
      logger()
    )
  );
};