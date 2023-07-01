import { useEffect, useState } from 'react';
import '../styles/Cities.css'
import Footer from './Footer'
import { FaMapPin, FaHeart, FaStar, FaAngleUp } from 'react-icons/fa';
import axios from 'axios'
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'

function Cities() {

  const [cities, setCities] = useState([])
  let citiesDB
  async function getData() {
    citiesDB = await axios.get("http://localhost:5000/api/cities");
    setCities(citiesDB.data.response.cities);
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(cities);
  }, [cities]);



  return (
    <>
     <Navbar />
      <div className='bodyCountry'>
        <div className="searchFilters">
          <div className='select'>
            <select name="format" id="format">
              <option defaultValue>Choose the country you want to visit</option>
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Brazil">Brazil</option>
              <option value="fb2">China</option>
              <option value="China">Colombia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="USA">USA</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
          <div>
            <input type="search" placeholder='Find your destiny' />
          </div>
        </div>
        <div>

          {cities.length > 0 ?
            <div className="Country">
              {cities.map((city, index) =>
                <LinkRouter key={index} to={'/CityDetails/' + city._id}>
                  <div className="cardCities">
                    <img src={city.image} className="imgCountry" alt="" />
                    <div className="overlay">
                      <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
                      <div className="likeButton"><FaHeart /></div>
                      <div className="infCountry">
                        <p className="titleLocation">{city.name}</p>
                        <p className="nameCountry"><FaMapPin /> {city.country}</p>
                      </div>
                    </div>
                  </div>
                </LinkRouter>


              )}

            </div>
            :
            <div className='loading'>
              <h3>LOADING</h3>
            </div>

          }

        </div>
      </div>
      <div className='up'>
        <a href="#UP" className='buttonUp'><FaAngleUp /></a>
      </div>

      <Footer />
    </>
  );
}

export default Cities;
