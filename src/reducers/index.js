// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import data from './data';
import modal from './modal';
import isLoading from './is-loading';

const rootReducer = combineReducers({
  data,
  modal,
  isLoading
});

export default rootReducer;