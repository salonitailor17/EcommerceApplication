import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit';

import {likesReducer} from './reducers/app/likesReducer';

const rootReducer = combineReducers({
  likes: likesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
