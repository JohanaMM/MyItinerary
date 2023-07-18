import React, { useState, useEffect } from 'react';
import '../styles/Itineraries.css'
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar'
import Footer from './Footer'
import AccordionActivity from './AccordionActivity'
import { FaDollarSign, FaUserFriends, FaClock, FaGlobe } from "react-icons/fa";
import ReserveActivity from './ReserveActivity';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Itineraries() {

    const [itineraries, setItineraries] = useState({});

    const { id } = useParams();

    async function getItineraries(id) {
        const itineraryDB = await axios.get("https://mairenevillasmil-api-itineraries-crud.onrender.com/api/itineraries/" + id)
        setItineraries(itineraryDB.data.response)

    }

    useEffect(() => {
        getItineraries(id);
    }, []);

    return (
        <>
            <Navbar />
            {
                Object.keys(itineraries).length > 0 ?

                    <div>


                        <div>
                            <p className='titleItinerary'>{itineraries.titleActivity}</p>
                        </div>

                        <div className="body">
                            <div className='cont-activity-img'>
                                <div className='containerImg'>
                                    <img src={itineraries.imageItineraryA} className='imgActivity' alt="actividadUno" />
                                </div>
                                <div className='container-Img'>
                                    <div className='container-Img-'>
                                        <img src={itineraries.imageItineraryB} className='imgActivity' alt="actividadDos" />
                                    </div>
                                    <div className='container-Img_'>
                                        <img src={itineraries.imageItineraryC} className='imgActivity' alt="actividadTres" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='booking-info'>
                            <div className='information'>
                                <div className='about'>
                                    <h3>About</h3>
                                    <span>{itineraries.description}</span> <br />
                                    <br />
                                    <p><FaDollarSign size='30px' color='white' /> from {itineraries.price} per adult</p> 
                                    <p><FaUserFriends size='30px' color='white' /> Ages {itineraries.years}, max 16 people per group</p>
                                    <p><FaClock size='30px' color='white' /> {itineraries.time}</p>
                                    <p><FaGlobe size='30px' color='white' /> English, Spanish</p>
                                </div>
                                <div className='more-information'>
                                    <AccordionActivity />
                                </div>
                            </div>
                            <ReserveActivity />
                        </div>

                    </div>
                    :
                    <div className='loadingI'>
                        <h1>Loading...</h1>
                    </div>
            }
            <Footer />
        </>
    );
}

export default Itineraries;

