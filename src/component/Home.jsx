import React, { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaPlaneDeparture } from 'react-icons/fa';
import "../styles/Home.css";
import Navbar from './Navbar';
import Footer from './Footer'
import { Link as LinkRouter } from 'react-router-dom'

function HomeTEST() {
    const slideRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            id: 1,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 2,
            imgUrl:
                "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 3,
            imgUrl:
                "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 5,
            imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 6,
            imgUrl:
                "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 7,
            imgUrl:
                "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 8,
            imgUrl: "https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 9,
            imgUrl:
                "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 10,
            imgUrl:
                "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 11,
            imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        },
        {
            id: 12,
            imgUrl:
                "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
            desc: "NOMBRE PAIS",
            name: "Popular My Itineraries",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickNext();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };


    return (
        <>
            <Navbar />
            <div className="bodyHome">
                <div className='CallTo'>
                    <h4>Where will your next adventure be?</h4>
                    <LinkRouter to={"/Cities"}>
                        <button className="animationI buttonI">Find out <FaPlaneDeparture /></button>
                    </LinkRouter>
                </div>
                <div className="container">
                    <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                    <div id="slide" ref={slideRef}>
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="item"
                                style={{ backgroundImage: `url(${item.imgUrl})` }}
                            >
                                <div className="overlayHome">
                                    <div className="content">
                                    <div className="name">{item.name}</div>
                                    <div className="des">{item.desc}</div>

                                </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <button id="prev" onClick={handleClickPrev}>
                            <FaAngleLeft />
                        </button>
                        <button id="next" onClick={handleClickNext}>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomeTEST;