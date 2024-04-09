import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <NavLink to='/'>About</NavLink>
                <a href='https://www.linkedin.com/in/jornen-nishiyama-4b04aa1b4/' target='_blank' rel='noopener noreferrer'>Contact</a>
                <a href='https://github.com/MoonChopperr/API-project' target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </div>
    )
}

export default Footer
