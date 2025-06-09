import 'animate.css';

import './HeroSection.css'
import backgroundVideo from '../../../assets/HomeIntroBackground.mp4'
import staticVideo from '../../../assets/TVStatic.mp4'

function HeroSection(){
    return (
        <section className="hero-section">
            <video src={backgroundVideo} autoPlay loop muted playsInline className='background-video'/>
            <video src={staticVideo} autoPlay loop muted playsInline className='static-overlay'/>
            <div className='grunge-overlay'></div>
            <div className='hero-text'>
                <h1 className='animate__animated animate__fadeInUp'>Camilo Medel</h1>
                <p className='animate__animated animate__fadeInUp'> iOS developer, Front-End Developer, and Game Designer/Developer</p>
                <ul className='socials'>
                    <li className='social-link animate__animated animate__bounceIn animate__delay-2s'>
                        <a href='https://www.linkedin.com/in/camilo-medel-564246245/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li className='social-link animate__animated animate__bounceIn animate__delay-2s'>
                        <a href='https://github.com/CamiloMedel' target='_blank'><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className='social-link animate__animated animate__bounceIn animate__delay-2s'>
                        <a href="mailto:camilomedelstudio@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroSection