import './Footer.css'

function Footer(){
    return (
        <footer>
            <ul className='socials'>
                <li className='social-link'><a href='https://www.linkedin.com/in/camilo-medel-564246245/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li className='social-link'><a href='https://github.com/CamiloMedel' target='_blank'><i className="fa-brands fa-github"></i></a></li>
                <li className='social-link'><a href="mailto:camilomedelstudio@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
            </ul>
            <p>camilomedelstudio@gmail.com</p>
            <p>© 2025 Camilo Medel. All projects © 2025 Camilo Medel unless otherwise noted (see individual project pages for group projects)</p>
        </footer>
    )
}

export default Footer