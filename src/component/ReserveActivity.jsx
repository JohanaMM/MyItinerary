import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {FaCalendar, FaBan } from "react-icons/fa";
import imgI from '../images/sammyI.png'
import '../styles/Itineraries.css'

function ReserveActivity(){

const [selectedDate, setSelectedDate] = useState(null);
// en este hook se almacenan los datos que se seleccionan del calendario
const [numberOfPeople, setNumberOfPeople] = useState(0);
//usamos useState para numberOfPeople que almacena el número de personas

const handleDateChange = (date) => {
    setSelectedDate(date);
};

//handleDateChange es la funcion que actualiza la fecha que se seleccione en la pagina y la va a mostrar y actualiza selectedDate

const handleDecrement = () => {
    if (numberOfPeople > 0) {
        setNumberOfPeople(numberOfPeople - 1);
    }
};

const handleIncrement = () => {
    setNumberOfPeople(numberOfPeople + 1);
};

const CustomInput = ({ value, onClick }) => (
    <div className="custom-input">
        <span>Number of people: </span>
        <Button onClick={handleDecrement}><RemoveCircleIcon sx={{ color: 'white' }}/></Button>
        <span>{numberOfPeople}</span>
        <Button onClick={handleIncrement}><AddCircleIcon sx={{ color: 'white' }}/></Button>
        <Button variant="contained" className="date-button" onClick={onClick} sx={{ backgroundColor: '#3c3e88', color: 'white' }}>
            {value || 'Select a date'}
        </Button>
    </div>
);

//con las funciones handleDecrement y handleIncrement se aumenta y disminuye el numero de personas 
//DatePicker se instalo y fue como incluimos el calendario y se le aplica la condicion que si no hay valor muestra 
//un mensaje para indicar que hay que seleccionar una fecha

const pricePerAdult = 5; 
//en esta constante se va a almacenar el precio de cada actividad desde la DB
const total = pricePerAdult * numberOfPeople;
//para calcular el total hacemos una multiplicacion de precio con el numero de personas

    return(
        <>
            <div className='reserve'>
                <div>
                    <h2>TITLE</h2>
                    <div className='calendar'>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            customInput={<CustomInput />}
                        /> <br /> <br />
                        {selectedDate && (
                            <span className='dateCalendar'><FaCalendar color='white' /> Your reservation is for {selectedDate.toLocaleDateString()}</span>
                        )}
                        {/* usamos selectedDate para mostrar un mensaje debajo del calendario despues de que se selcciona una fecha */}
                    </div>
                    <h6 className='cancellation'><FaBan color='white' /> This package adheres to our cancellation policy</h6>
                    <div className='trolley'>
                        <span>Total: {total}</span>
                        <LinkRouter to='/ShoppingCart'>
                            <Button variant="contained" sx={{ backgroundColor: '#3c3e88', color: 'white' }}>
                                Add to cart <AddShoppingCartIcon />
                            </Button>
                        </LinkRouter>
                    </div>
                </div> 
                <img src={imgI} className='imgI' alt="" />
            </div>
        </>
    )
}

export default ReserveActivity