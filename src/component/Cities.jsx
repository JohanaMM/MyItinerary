import React from 'react';
import '../styles/Cities.css';
import imgCons from '../images/fondo-main.jpg';
import smallImage from '../images/UC.png';
import Navbar from './Navbar'

function Cities() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="image-container">
        <img src={imgCons} className="imgCons" alt="" />
        <div className="layer"></div>
        <h1 className='text'>UNDER CONSTRUCTION</h1>
        <img src={smallImage} className="imagePe" alt="" />
      </div>
    </div>
    </>
  );
}

export default Cities;
