import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import HomePageReducer from './HomePageReducer';
import sidebarReducer from './sidebarReducer';

export const reducers = combineReducers({
    newsReducer,
    HomePageReducer,
    sidebarReducer

});
