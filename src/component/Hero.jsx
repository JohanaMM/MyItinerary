import '../styles/Hero.css'
import { Link as LinkRouter } from 'react-router-dom'
import Navbar from './Navbar'


function Hero() {


    return (
        <div>
        <Navbar/>
            <div className='pagP'>
                <div className='C-Texto'>
                    <span className='imgL' />
                    <h1 className='textoC'>Find your perfect trip designed by insiders who know and love their cities</h1>
                    <LinkRouter to={"/Home"}>
                        <p className='boton animacion'>GET INSPIRED</p>
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default Hero