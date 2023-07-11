import '../styles/Itineraries.css'
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../images/hero.jpeg'
import img2 from '../images/hero.jpeg'
import img3 from '../images/hero.jpeg'
import AccordionActivity from './AccordionActivity'
import { FaUserFriends, FaClock, FaGlobe } from "react-icons/fa";
import ReserveActivity from './ReserveActivity';

function Itineraries() {

    const pricePerAdult = 5;

return (
    <div>
        <Navbar />
        <div>
            <p className='titleItinerary'>TITLE</p>
        </div>

        <div className="body">
            <div className='cont-activity-img'>
                <div className='containerImg'>
                    <img src={img1} className='imgActivity' alt="actividadUno" />
                </div>
                <div className='container-Img'>
                    <div className='container-Img-'>
                        <img src={img2} className='imgActivity' alt="actividadDos" />
                    </div>
                    <div className='container-Img_'>
                        <img src={img3} className='imgActivity' alt="actividadTres" />
                    </div>

                </div>
            </div>
        </div>
        <div className='booking-info'>
            <div className='information'>
                <div className='about'>
                    <h2>TITLE</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate assumenda molestias nemo ad provident magnam eos. </span>
                    <h5>PRICE: from {pricePerAdult} per adult</h5> 
                    <p><FaUserFriends size='30px' color='white' /></p>
                    <p><FaClock size='30px' color='white' /></p>
                    <p><FaGlobe size='30px' color='white' /></p>
                </div>
                <div className='more-information'>
                    <AccordionActivity />
                </div>
            </div>
            <ReserveActivity/>
        </div>
        <Footer />
    </div>
);
}

export default Itineraries;
