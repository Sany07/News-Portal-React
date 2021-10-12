
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './redux/reducers';

const inititalState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  inititalState, 
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
