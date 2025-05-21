import './Footer.css'

function Footer(){
    return (
        <footer>
            <ul className='socials'>
                <li className='social-link'><a href='https://www.linkedin.com/in/camilo-medel-564246245/' target='_blank'><i class="fa-brands fa-linkedin-in"/></a></li>
                <li className='social-link'><a href='https://github.com/CamiloMedel' target='_blank'><i className="fa-brands fa-github"/></a></li>
                <li className='social-link'><a href="mailto:camilomedelstudio@gmail.com"><i className="fa-solid fa-envelope"/></a></li>
            </ul>
            <p>camilomedelstudio@gmail.com</p>
        </footer>
    )
}

export default Footer