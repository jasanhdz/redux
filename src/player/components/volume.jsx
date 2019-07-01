import React from 'react';
import VolumenIcon from '../../icons/components/volume.jsx';
import './volume.css';
function Volume(props) {
  return (
    <button 
      className="Volume"
      onClick={props.handleClick}
    >
      <VolumenIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input 
          type="range"
          min={0.001}
          max={0.999}
          step={.05}
          defaultValue={props.value}
          onChange={props.handleVolumeChange}
          readOnly
        />
        <p className="Number">{props.value}</p>
      </div>
    </button>
  )
}

export default Volume;