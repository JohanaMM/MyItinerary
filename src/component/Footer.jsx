import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <section className='Footer'>
      <section className="iconos">
        <ul>
          <li className="instagram">
            <FaInstagram />
          </li>
          <li className="facebook">
            <FaFacebook />
          </li>
          <li className="twitter">
            <FaTwitter />
          </li>
          <li className="youtube">
            <FaYoutube />
          </li>
        </ul>
      </section>
      <section className="footer">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Legal Warning</p>
      </section>
      <div className='copy'>
        <p className="copyR">Copyright&copy; My Itinerary - All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
