import 'animate.css';

import './HeroSection.css'
import staticVideo from '../../../assets/TVStatic.mp4'

function HeroSection(){
    return (
        <section className="hero-section">
            <video src={staticVideo} autoPlay loop muted playsInline className='static-overlay'/>
            <div className='grunge-overlay'></div>
            <div className='hero-text'>
                <h1 className='animate__animated animate__fadeInUp'>Camilo Medel</h1>
                <p className='animate__animated animate__fadeInUp'> iOS developer, Front-End Developer, and Game Designer/Developer</p>
            </div>
        </section>
    )
}

export default HeroSection