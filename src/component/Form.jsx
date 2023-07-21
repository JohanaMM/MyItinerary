import '../styles/ShoppingCart.css'
import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import smallImage from '../images/UC.png';

function Form() {

    return (
        <>
            <div className='overlayI'>
                <Navbar />
                <div className="containerI">
                    <div className="imgCotainerI">
                        <p className='textI'>FORM UNDER CONSTRUCTION</p>
                        <img src={smallImage} className="imageI" alt="UNDER CONSTRUCTION" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Form