import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';
// import Playlist from '../playlist/components/playlist.jsx';
import data from '../api.json';
import { Provider } from 'react-redux';
// import reducer from '../reducers/data';
import reducer from '../reducers/index';
import normalizedData from '../schemas/index';
import { Map as map } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

console.log(normalizedData)

const logger_ = ({getState, dispatch}) => next => action => {
  console.log('Esté es mi estado anterior', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action);
  console.log('Esté es mi nuevo estado', getState().toJS())
  return value;
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      logger_,
      thunk
    ),
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const modalContainer = document.getElementById('home-container');

ReactDOM.render(
<Provider store={store}>
  <Home /> 
</Provider>,
  modalContainer
);