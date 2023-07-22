import '../styles/ShoppingCart.css'
import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

function ShoppingCart() {

    return (
        <>
            <Navbar />
                <div className='shoppingCart'>

                </div>
            <Footer />
        </>
    );
}

export default ShoppingCart