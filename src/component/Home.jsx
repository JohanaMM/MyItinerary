import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import imgA from '../imagenes/ARGENTINA.svg'
import imgB from '../imagenes/AUSTRALIA.svg'
import imgC from '../imagenes/USA.svg'
import imgD from '../imagenes/ESPANA.svg'
import imgE from '../imagenes/JAPON.svg'
import imgF from '../imagenes/COLOMBIA.svg'
import imgG from '../imagenes/PARIS.svg'
import imgH from '../imagenes/REINO-UNIDO.svg'
import imgI from '../imagenes/CHINA.svg'
import imgJ from '../imagenes/BRASIL.svg'
import imgK from '../imagenes/ITALIA.svg'
import imgL from '../imagenes/VENEZUELA.svg'
import { FaPlaneDeparture } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'


function Home() {
  return (
    <div>
      <Navbar/>
      <div className="carousel-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <h2>Popular MYtineraries</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img src={imgA} className="carousel-image" alt="Imagen 1" />
                  <p className='nombre-img'>ARGENTINA</p>
                </div>
                <div className="col">
                  <img src={imgB} className="carousel-image" alt="Imagen 2" />
                  <p className='nombre-img'>AUSTRALIA</p>
                </div>
                <div className="col">
                  <img src={imgC} className="carousel-image" alt="Imagen 3" />
                  <p className='nombre-img'>USA</p>
                </div>
                <div className="col">
                  <img src={imgD} className="carousel-image" alt="Imagen 4" />
                  <p className='nombre-img'>SPAIN</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgE} className="carousel-image" alt="Imagen 5" />
                  <p className='nombre-img'>JAPAN</p>
                </div>
                <div className="col">
                  <img src={imgF} className="carousel-image" alt="Imagen 6" />
                  <p className='nombre-img'>COLOMBIA</p>
                </div>
                <div className="col">
                  <img src={imgG} className="carousel-image" alt="Imagen 7" />
                  <p className='nombre-img'>PARIS</p>
                </div>
                <div className="col">
                  <img src={imgH} className="carousel-image" alt="Imagen 7" />
                  <p className='nombre-img'>UNITED KINGDOM</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgI} className="carousel-image" alt="Imagen 9" />
                  <p className='nombre-img'>CHINA</p>
                </div>
                <div className="col">
                  <img src={imgJ} className="carousel-image" alt="Imagen 10" />
                  <p className='nombre-img'>BRAZIL</p>
                </div>
                <div className="col">
                  <img src={imgK} className="carousel-image" alt="Imagen 11" />
                  <p className='nombre-img'>ITALY</p>
                </div>
                <div className="col">
                  <img src={imgL} className="carousel-image" alt="Imagen 12" />
                  <p className='nombre-img'>VENEZUELA</p>
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
          <button className="botonI animacion">Find out <FaPlaneDeparture /></button>
        </LinkRouter>
      </div>
    </div>
  );
}

export default Home;
