import '../styles/PP.css'
import { Link as LinkRouter } from 'react-router-dom'


function PageP() {


    return (
        <div className='pagP'>
            <div className='C-Texto'>
                <span className='imgL' />
                <LinkRouter to={"/Home"}>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </LinkRouter>
                <h1 className='textC'>Find your perfect trip <br /> designed by insiders who know and love their cities</h1>
            </div>
        </div>
    )
}

export default PageP