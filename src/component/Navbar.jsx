import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logoMI from '../imagenes/mytinerary.png'
import '../styles/Navbar.css'
import { FaUser } from "react-icons/fa"
import { Link as LinkRouter } from 'react-router-dom'


function Navbar() {

    const NavLinks = [
        {
            name: <FaUser />,
            path: "LogIn"
        },
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Cities",
            path: "/Cities"
        },
        {
            name: "About Us",
            path: "/AboutUs"
        },
        {
            name: "Contact Us",
            path: "/ContactUs"
        }
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <LinkRouter to={"/Home"}><img src={logoMI} className='logoNav' alt="logo" /></LinkRouter>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            {
                            NavLinks.map(Link => {

                              return <LinkRouter to={Link.path}><li className="nav-link active">{Link.name}</li></LinkRouter>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;