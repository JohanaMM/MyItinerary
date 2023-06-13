import React from 'react';
import '../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgA from '../imagenes/Brasil.jpg'
import imgB from '../imagenes/Colombia.jpg'
import imgC from '../imagenes/N-zelanda.jpg'
import imgD from '../imagenes/belgica.webp'
import imgE from '../imagenes/egipto.jpg'
import imgF from '../imagenes/grecia.jpg'
import imgG from '../imagenes/jesuralen.jpg'
import imgH from '../imagenes/marruecos.webp'
import imgI from '../imagenes/mexico.webp'
import { FaPlaneDeparture } from 'react-icons/fa';


function Main() {
  return (
    <>
    <h1>Where will your next adventure be?</h1> 
        <p className="eslogan">Find your perfect trip, designed by insiders who know and love their cities</p>
        <div className="carousel-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img src={imgA} className="carousel-image" alt="Imagen 1" />
              </div>
              <div className="col">
                <img src={imgB} className="carousel-image" alt="Imagen 2" />
              </div>
              <div className="col">
                <img src={imgC} className="carousel-image" alt="Imagen 3" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={imgD} className="carousel-image" alt="Imagen 4" />
              </div>
              <div className="col">
                <img src={imgE} className="carousel-image" alt="Imagen 5" />
              </div>
              <div className="col">
                <img src={imgF} className="carousel-image" alt="Imagen 6" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={imgG} className="carousel-image" alt="Imagen 4" />
              </div>
              <div className="col">
                <img src={imgH} className="carousel-image" alt="Imagen 5" />
              </div>
              <div className="col">
                <img src={imgI} className="carousel-image" alt="Imagen 6" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
    <div className='CallTo'>
    <button className="button_slide slide_down">Find out <FaPlaneDeparture/></button>
    </div>
    </>
      );
}

export default Main;
