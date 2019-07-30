// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import data from './data';
import modal from './modal';

const rootReducer = combineReducers({
  data,
  modal
});

export default rootReducer;