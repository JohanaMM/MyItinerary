import React from 'react';
import '../styles/Cities.css';
import imgCons from '../imagenes/fondo-main.jpg';
import smallImage from '../imagenes/UC.png';

function LogIn (){
    return (
        <div className="container">
          <div className="image-container">
            <img src={imgCons} className="imgCons" alt="" />
            <div className="overlay"></div>
            <h1 className='text'>UNDER CONSTRUCTION</h1>
            <img src={smallImage} className="small-image" alt="" />
          </div>
        </div>
      );
}

export default LogIn