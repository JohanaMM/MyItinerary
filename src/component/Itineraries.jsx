import '../styles/Itineraries.css'
import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../images/hero.jpeg'
import img2 from '../images/hero.jpeg'
import img3 from '../images/hero.jpeg'
import AcordionActivity from './AcordionActivity'
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FaUserFriends, FaClock, FaGlobe } from "react-icons/fa";

function Itineraries() {
    return (
        <div>
            <Navbar />
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
                        <h5>PRICE</h5>
                        <p><FaUserFriends size='30px' color='white' /></p>
                        <p><FaClock size='30px' color='white' /></p>
                        <p><FaGlobe size='30px' color='white' /></p>
                    </div>
                    <div className='more-information'>
                        <AcordionActivity />
                    </div>
                </div>
                <div className='reserve'>
                    <div>
                        <h2>TITLE</h2>
                        <div className='calendar'>
                            <span>CALENDAR</span>
                        </div>
                        <h6>This package adheres to our cancellation policy</h6>
                        <div className='trolley'>
                            <LinkRouter to='/ShoppingCart'>
                                <Button variant="contained" sx={{ backgroundColor: '#3c3e88', color: 'white' }}>
                                    Add to cart <AddShoppingCartIcon />
                                </Button>
                            </LinkRouter>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Itineraries;
