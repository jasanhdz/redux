import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen.jsx';
import './fullscreen.css';

const FullScreen = (props) => (
  <div 
    className="FullScreen"
    onClick={props.handleClick}
  >
    <FullScreenIcon 
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen;