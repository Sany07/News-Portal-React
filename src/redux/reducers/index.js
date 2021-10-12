import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import HomePageReducer from './HomePageReducer';

export const reducers = combineReducers({ 
newsReducer ,
HomePageReducer
});
