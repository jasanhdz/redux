import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';
// import Playlist from '../playlist/components/playlist.jsx';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
import normalizedData from '../schemas/index';

console.log(normalizedData)

const initialState = {
  data: {
    // ...data
    entities: normalizedData.entities,
    categories: normalizedData.result.categories
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState());

// ReactDOM.render(que voy a renderizar, donde lo haré)
const modalContainer = document.getElementById('home-container');

ReactDOM.render(
<Provider store={store}>
  <Home /> 
</Provider>,
  modalContainer
);