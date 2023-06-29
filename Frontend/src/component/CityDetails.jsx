import React, { useState } from 'react';
import '../styles/CityDetails.css';
import bodyCity from '../images/hero.jpeg';
import { FaAngleDown, FaCloudSun, FaGlobe, FaDollarSign, FaUsers } from "react-icons/fa";

function CityDetails() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='containerCity'>
            <img src={bodyCity} className='bodyCity' alt="" />
            <p className='title'>NAME CITY</p>
            <span className='buttonDetails' onClick={handleToggle}>
                <FaAngleDown />
            </span>

            {isExpanded && (
                <div className="Details">
                    <section className='sectionInf'>
                        <div className='items'>
                            <p><FaCloudSun /> Weather</p>
                            <p><FaGlobe /> Language</p>
                            <p><FaDollarSign /> Currency</p>
                            <p><FaUsers /> Population</p>
                        </div>
                        <div className='description'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa tempora, 
                                dolores recusandae, quaerat, officiis consequuntur necessitatibus harum sequi 
                                atque quas quis distinctio quae inventore labore iste architecto aliquam consequatur.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa tempora, 
                                dolores recusandae, quaerat, officiis consequuntur necessitatibus harum sequi 
                                atque quas quis distinctio quae inventore labore iste architecto aliquam consequatur.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa tempora, 
                                dolores recusandae, quaerat, officiis consequuntur necessitatibus harum sequi 
                                atque quas quis distinctio quae inventore labore iste architecto aliquam consequatur.
                            </p>
                        </div>
                    </section>
                    <section className='activities'>
                        <div>
                            <p className='titleActivities'>ACTIVITIES</p>
                        </div>
                        <p className='typeActivities'>Excursions</p>
                        <div className='containerCArds'>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                        </div>
                        <p className='typeActivities'>Gastronomy</p>
                        <div className='containerCArds'>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                            <div className='card'>
                                <img src={bodyCity} className='imgActivities' alt="" />
                                <p className='titleCard'>TITLE</p>
                                <span className='type'>
                                    <p className='DetailsTitle'>Type Activity:</p>
                                    <p className='detailsinf'>$0000</p>
                                </span>
                                <span className='time'>
                                    <p className='DetailsTitle'>Time:</p>
                                    <p className='detailsinf'>3 hours</p>
                                </span>
                                <p className='day'>days of the activity</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </section>
    );
}

export default CityDetails;
