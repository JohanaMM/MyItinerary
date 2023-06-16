import '../styles/Hero.css'
import { Link as LinkRouter } from 'react-router-dom'


function Hero() {


    return (
        <div className='pagP'>
            <div className='C-Texto'>
                <span className='imgL' />
                <h1 className='textC'>Find your perfect trip designed by insiders who know and love their cities</h1>
                <LinkRouter to={"/Home"}>
                        <p className='boton'>GET INSPIRED</p>
                </LinkRouter>
            </div>
        </div>
    )
}

export default Hero