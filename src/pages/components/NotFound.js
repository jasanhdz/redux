import React from "react";
import "./NotFound.css";
import Astronaut from ".../../../images/astronaut.png";

const NotFound = props => {
  const handleForwardClick = e => {
    props.history.goForward();
  };
  const handleBackClick = e => {
    // props.history.goBack();
    props.history.go(-1);
  };
  const handleRandomClick = e => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    props.history.push(`/videos/?id=${random}`, { id: random });
  };
  return (
    <div className="Container">
      <div className="NotFound__description">
        <h1>Error 404: La página que estas buscando no existe:</h1>
        <p>
          La página pudo ser movida o eliminada, si crees que esto es un error
          contacta al desarrollador
        </p>
      </div>
      <img src={Astronaut} alt="Astronaut" />
      <button onClick={handleForwardClick} className="btn btn-primary">
        Ir a la siguiente Ruta 👉
      </button>
      <button onClick={handleBackClick} className="btn btn-primary">
        Ir a la Ruta anterior 👈
      </button>
      <button onClick={handleRandomClick} className="btn btn-primary">
        Video Random 🍀
      </button>
    </div>
  );
};

export default NotFound;
