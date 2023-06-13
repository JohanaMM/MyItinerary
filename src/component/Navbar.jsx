import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logoMI from '../imagenes/mytinerary.png'
import '../styles/Navbar.css'
import { FaUser } from "react-icons/fa"
import { useState } from "react"
import Cities from './Cities';


function Navbar() {

let [vistaUno, setVistaUno] = useState(Cities)
console.log(vistaUno);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logoMI} className='logoNav' alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-link active"><FaUser /></li>
                            <li className="nav-link active">Home</li>
                            <li className="nav-link active" onClick={() => setVistaUno(!vistaUno)}>Cities</li>
                             <li className="nav-link active" >Information</li>
                            <li className="nav-link active">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;