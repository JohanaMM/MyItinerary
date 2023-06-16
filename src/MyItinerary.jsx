import React from 'react';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Hero from './component/Hero';
import Cities from './component/Cities'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

function MyItinerary() {
  return (
      <div>
        <Navbar />
        <Routes>
        <Route path='*' element={<Home />}></Route>
          <Route path='' element={<Hero />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Cities' element={<Cities />}></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default MyItinerary;

