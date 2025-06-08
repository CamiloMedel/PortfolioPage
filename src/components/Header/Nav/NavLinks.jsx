import {Link} from 'react-router';

function NavLinks(){
    return (
        <nav className='nav-links'>
            <li><Link to="/" className='nav-link'>HOME</Link></li>
            <li><Link to ="/portfolio" className='nav-link'>PORTFOLIO</Link></li>
            <li><Link to="/contact" className='nav-link'>CONTACT</Link></li>
            <li><Link to="/resume" className='nav-link'>RESUME</Link></li>
        </nav>
    )
}

export default NavLinks