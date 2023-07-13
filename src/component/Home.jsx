import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FaPlaneDeparture } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const imgCarousel = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/ARGENTINA.svg?alt=media&token=c53f7b56-6b52-4371-8824-916dc60ab55e',
    title: 'ARGENTINA',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/AUSTRALIA.svg?alt=media&token=9dde0a5d-de7d-4267-8245-9eab05203318',
    title: ' AUSTRALIA',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/USA.svg?alt=media&token=babb740f-c609-4d39-bb8a-d1c56a0e75aa',
    title: ' USA',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/ESPANA.svg?alt=media&token=8f83ddb9-b782-4640-b0eb-f40d143b9b3f',
    title: 'SPAIN',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/JAPON.svg?alt=media&token=d558257d-5225-45a3-b9da-b1de34cbcd20',
    title: 'JAPAN',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/COLOMBIA.svg?alt=media&token=94b953e6-048d-4aa5-bacc-8ea46159b4a5',
    title: 'COLOMBIA',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/FRANCE.svg?alt=media&token=ab5578e4-3bf0-42b3-9e4d-d8a8fb6f99be',
    title: 'FRANCE',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/REINO-UNIDO.svg?alt=media&token=9a980457-f9f6-47db-85c1-ec200f06a7e3',
    title: 'UNITED KINGDOM',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/CHINA.svg?alt=media&token=6922471b-eb63-44c3-85f8-219d68bdc1e5',
    title: 'CHINA',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/BRASIL.svg?alt=media&token=7aad24d7-94ea-4fc2-9a0c-ec5f12b20f9d',
    title: 'BRAZIL',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/ITALIA.svg?alt=media&token=3759b68e-ff24-4584-9869-bde5e788372a',
    title: 'ITALY',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-mv.appspot.com/o/VENEZUELA.svg?alt=media&token=99eabfa0-b40e-4a09-8bd7-2d5df17e6b2d',
    title: 'VENEZUELA',
  }
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <h2>Popular MYtineraries</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img src={imgCarousel[0].img} className="carousel-image" alt="img-ARGENTINA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>ARGENTINA</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[1].img} className="carousel-image" alt="img-AUSTRALIA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>AUSTRALIA</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[2].img} className="carousel-image" alt="imgUSA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>USA</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[3].img} className="carousel-image" alt="img-SPAIN" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>SPAIN</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgCarousel[4].img} className="carousel-image" alt="img-JAPAN" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>JAPAN</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[5].img} className="carousel-image" alt="img-COLOMBIA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>COLOMBIA</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[6].img} className="carousel-image" alt="img-FRANCE" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>FRANCE</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[7].img} className="carousel-image" alt="img-UNITEDKINGDOM" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>UNITED KINGDOM</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src={imgCarousel[8].img} className="carousel-image" alt="img-CHINA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>CHINA</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[9].img} className="carousel-image" alt="img-BRAZIL" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>BRAZIL</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[10].img} className="carousel-image" alt="img-ITALY" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>ITALY</p>
                </div>
                <div className="col">
                  <img src={imgCarousel[11].img} className="carousel-image" alt="img-VENEZUELA" style={{
                    backgroundSize: '100%',
                    borderRadius: '10px',

                  }} />
                  <p className='name-img'>VENEZUELA</p>
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
          <button className="animationI buttonI">Find out <FaPlaneDeparture /></button>
        </LinkRouter>
      </div>
      <Footer />
    </div>
  );
}

export default Home;