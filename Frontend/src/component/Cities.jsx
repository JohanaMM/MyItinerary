import React from 'react';
import '../styles/Cities.css'
import img1 from '../images/SHANGAI.svg'
import img2 from '../images/VENICE.svg'
import img3 from '../images/MANCHESTER.svg'
import Footer from './Footer'
import { FaMapPin, FaHeart, FaStar, FaAngleUp } from 'react-icons/fa';

function Cities() {


  return (
    <>
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
        <div className="Country">
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="imgCountry" alt="" />
            <div className="overlay">
              <div className='punctuation'><FaStar color='#ffff29' /> 4.8</div>
              <div className="likeButton">
                <FaHeart />
              </div>
              <div className="infCountry">
                <p className="titleLocation">Title location</p>
                <p className="nameCountry">
                  <FaMapPin /> Country, City
                </p>
              </div>
            </div>
          </div>
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
