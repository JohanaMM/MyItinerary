import '../styles/Itineraries.css'
import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import smallImage from '../images/UC.png';

function Itineraries() {
    return (
        <div className='overlayI'>
            <Navbar />
            <div className="containerI">
                <div className="imgCotainerI">
                    <p className='textI'>UNDER CONSTRUCTION</p>
                    <img src={smallImage} className="imageI" alt="UNDER CONSTRUCTION" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Itineraries;
