import './Nav.css'
import {Link} from 'react-router';

function Nav(){
    return (
        <nav className='nav'>
            <li><Link to="/" className='nav-link'>HOME</Link></li>
            <li><Link to ="/portfolio" className='nav-link'>PORTFOLIO</Link></li>
            <li><Link to="/contact" className='nav-link'>CONTACT</Link></li>
            <li><Link to="/resume" className='nav-link'>RESUME</Link></li>
        </nav>
    )
}

export default Nav