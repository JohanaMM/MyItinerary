
import React from 'react';
import Navbar from './component/Navbar'
import Main from './component/Main'
import Cities from './component/Cities'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom';

function MyItinerary() {
  return (
    <div>
        <Navbar />
      <Routes>
      <Route path='*' element={<Main/>}></Route>
      <Route path='/Home' element={<Main />}></Route>
      <Route path='/Cities' element={<Cities/>}></Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default MyItinerary;

