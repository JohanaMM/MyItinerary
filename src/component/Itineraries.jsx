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

    const { id } = useParams();

    const [itineraries, setItineraries] = useState([]);
    async function getItineraries(id) {
        const itinerariesDB = await axios.get("https://mairenevillasmil-api-itineraries-crud.onrender.com/api/itineraries/cities/" + id);
        setItineraries(itinerariesDB.data.response.itineraries);
        console.log(itinerariesDB);
    }

    useEffect(() => {
        getItineraries(id);
    }, [id]);

    return (
        <>
            {
                itineraries.length > 0 ? (
                    <div>
                        <Navbar />

                        <div>
                            <p className='titleItinerary'>{itineraries[0].titleActivity}</p>
                        </div>

                        <div className="body">
                            <div className='cont-activity-img'>
                                <div className='containerImg'>
                                    <img src={itineraries[0].imageItineraryA} className='imgActivity' alt="actividadUno" />
                                </div>
                                <div className='container-Img'>
                                    <div className='container-Img-'>
                                        <img src={itineraries[0].imageItineraryB} className='imgActivity' alt="actividadDos" />
                                    </div>
                                    <div className='container-Img_'>
                                        <img src={itineraries[0].imageItineraryC} className='imgActivity' alt="actividadTres" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='booking-info'>
                            <div className='information'>
                                <div className='about'>
                                    <h3>About</h3>
                                    <span>{itineraries[0].description}</span>
                                    <p><FaDollarSign size='30px' color='white' /> from {itineraries[0].price} per adult</p> <br />
                                    <p><FaUserFriends size='30px' color='white' /> Ages 5-75, max 9 people per group</p>
                                    <p><FaClock size='30px' color='white' /> {itineraries[0].time}</p>
                                    <p><FaGlobe size='30px' color='white' /> English, Spanish</p>
                                </div>
                                <div className='more-information'>
                                    <AccordionActivity />
                                </div>
                            </div>
                            <ReserveActivity />
                        </div>
                        <Footer />
                    </div>
                ) : <h1></h1>
            }
        </>
    );
}

export default Itineraries;
