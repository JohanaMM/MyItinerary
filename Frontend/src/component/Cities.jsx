import { useEffect, useState } from 'react';
import '../styles/Cities.css';
import Footer from './Footer';
import { FaMapPin, FaHeart, FaStar, FaAngleUp } from 'react-icons/fa';
import axios from 'axios';
import { Link as LinkRouter } from 'react-router-dom';
import Navbar from './Navbar';

function Cities() {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({ country: '', search: '' });

  async function getData() {
    const citiesDB = await axios.get("http://localhost:5000/api/cities");
    setCities(citiesDB.data.response.cities);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='bodyCountry'>
        <div className="searchFilters">
          <div className='select'>
            <select
              name="format"
              id="format"
              value={filter.country}
              onChange={(e) => setFilter({ ...filter, country: e.target.value })}
            >
              <option value="">Choose the country you want to visit</option>
              {/* se le dio un value " " para filtrar todas las tarjetas cuando el usuario marque algun pais y de vuelta esa opcion */}
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
          <div>
            <input
              type="search"
              placeholder="Find your destiny"
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            />
          </div>
        </div>
        <div>
          {cities.length > 0 ? (
            <div className="Country">
              {cities.filter((city) => {
                const cityNameNormalized = city.name
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .trim()
                  .toLowerCase();
                const filterSearchNormalized = filter.search
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .trim()
                  .toLowerCase();

                if (filter.search && !cityNameNormalized.includes(filterSearchNormalized)) {
                  return false; // Si filter.search tiene un valor y el nombre de la ciudad no coincide, se devuelve false
                }else
                if (filter.country && city.country !== filter.country) {
                  return false; // Si filter.country tiene un valor y el país de la ciudad no coincide, también se devuelve false para excluir esa ciudad del resultado.
                }else
                if (!filter.search && !filter.country) {
                  return true; // Mostrar todas las ciudades si no hay filtros
                }else
                return true;
              })
                .map((city, index) => (
                  <LinkRouter key={index} to={'/CityDetails/' + city._id}>
                    <div
                      className="cardCities"
                      style={{
                        backgroundImage: `url(${city.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '100% 100%',
                        backgroundSize: 'cover',
                      }}>
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
                ))
              }
            </div>
          ) : (
            <div className='loading'>
              <h3>LOADING...</h3>
            </div>
          )}
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

