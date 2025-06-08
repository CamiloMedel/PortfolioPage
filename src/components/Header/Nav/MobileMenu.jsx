import {Link} from 'react-router';

function MobileMenu({ closeMenu }) {
    return (
        <div className="mobile-menu">
            <div className='menu-links-container'>
                <li><Link to="/" onClick={closeMenu} className='menu-link'>HOME</Link></li>
                <li><Link to ="/portfolio" onClick={closeMenu} className='menu-link'>PORTFOLIO</Link></li>
                <li><Link to="/contact" onClick={closeMenu} className='menu-link'>CONTACT</Link></li>
                <li><Link to="/resume" onClick={closeMenu} className='menu-link'>RESUME</Link></li>
            </div>
        </div>
    )
}

export default MobileMenu;