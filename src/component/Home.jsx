import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import imgA from '../imagenes/Brasil.jpg'
import imgB from '../imagenes/Colombia.jpg'
import imgC from '../imagenes/N-zelanda.jpg'
import imgD from '../imagenes/belgica.webp'
import imgE from '../imagenes/egipto.jpg'
import imgF from '../imagenes/grecia.jpg'
import imgG from '../imagenes/jesuralen.jpg'
import imgH from '../imagenes/marruecos.webp'
import imgI from '../imagenes/mexico.webp'
import imgJ from '../imagenes/venezuela.jpeg'
import imgK from '../imagenes/buenosAires.jpg'
import imgL from '../imagenes/manchester.webp'
import { FaPlaneDeparture } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="carousel-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <h2>Popular MYtineraries</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img src={imgA} className="carousel-image" alt="Imagen 1" />
                  <p className='nombre-img'>BRASIL</p>
                </div>
                <div className="col">
                  <img src={imgB} className="carousel-image" alt="Imagen 2" />
                  <p className='nombre-img'>COLOMBIA</p>
                </div>
                <div className="col">
                  <img src={imgC} className="carousel-image" alt="Imagen 3" />
                  <p className='nombre-img'>NUEVA ZELANDA</p>
                </div>
                <div className="col">
                  <img src={imgD} className="carousel-image" alt="Imagen 4" />
                  <p className='nombre-img'>BÉLGICA</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgE} className="carousel-image" alt="Imagen 5" />
                  <p className='nombre-img'>EGIPTO</p>
                </div>
                <div className="col">
                  <img src={imgF} className="carousel-image" alt="Imagen 6" />
                  <p className='nombre-img'>GRECIA</p>
                </div>
                <div className="col">
                  <img src={imgG} className="carousel-image" alt="Imagen 7" />
                  <p className='nombre-img'>JERUSALÉN</p>
                </div>
                <div className="col">
                  <img src={imgH} className="carousel-image" alt="Imagen 7" />
                  <p className='nombre-img'>MARRUECOS</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgI} className="carousel-image" alt="Imagen 9" />
                  <p className='nombre-img'>MÉXICO</p>
                </div>
                <div className="col">
                  <img src={imgJ} className="carousel-image" alt="Imagen 10" />
                  <p className='nombre-img'>VENEZUELA</p>
                </div>
                <div className="col">
                  <img src={imgK} className="carousel-image" alt="Imagen 11" />
                  <p className='nombre-img'>BUENOS AIRES</p>
                </div>
                <div className="col">
                  <img src={imgL} className="carousel-image" alt="Imagen 12" />
                  <p className='nombre-img'>MÁNCHESTER</p>
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
        <h3>Where will your next adventure be?</h3>
        <LinkRouter to={"/Cities"}>
          <button className="button_slide slide_down">Find out <FaPlaneDeparture /></button>
        </LinkRouter>
      </div>
    </div>
  );
}

export default Home;
