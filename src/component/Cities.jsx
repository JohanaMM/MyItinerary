import React from 'react';
import '../styles/Cities.css';
import imgCons from '../imagenes/fondo-main.jpg';
import smallImage from '../imagenes/UC.png';
import Navbar from './Navbar'

function Cities() {
  return (
    <>
    <Navbar/>
    <div className="contenedor">
      <div className="imagen-contenedor">
        <img src={imgCons} className="imgCons" alt="" />
        <div className="capa"></div>
        <h1 className='texto'>UNDER CONSTRUCTION</h1>
        <img src={smallImage} className="imagenPe" alt="" />
      </div>
    </div>
    </>
  );
}

export default Cities;

