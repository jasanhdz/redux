import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';
// import Playlist from '../playlist/components/playlist.jsx';
import data from '../api.json';

// ReactDOM.render(que voy a renderizar, donde lo haré)
const modalContainer = document.getElementById('home-container');
ReactDOM.render(<Home data={data} />, modalContainer);