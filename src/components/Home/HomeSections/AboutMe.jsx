import {Link} from 'react-router';
import 'animate.css';
import './AboutMe.css'
import proffesionalPhoto from '../../../assets/ProPhotoEdited&Centered.JPG'

function AboutMe(){
    return (
        <section className='about-me-section'>
            <img src={proffesionalPhoto} className='animate__animated animate__fadeIn' alt='Portrait of Camilo Medel'/>
            <div className='descriptive-text animate__animated animate__fadeIn'>
                <h1 className='title'>ABOUT ME</h1>
                <div>
                    <p>
                        Hi, I'm Camilo Medel — a recent graduate from The University of Texas at Austin, where I earned a Bachelor of Science in Arts and Entertainment
                        Technologies and a Elements of Computing Certificate (Spring 2025).
                    </p>
                    <p>
                        I'm passionate about combining technology and creativity to build meaningful digital experiences — whether through interactive games, intuitive
                        applications, or thoughtfully designed websites. My goal is to create work that not only functions well, but also connects with people.
                    </p>
                </div>
                <Link to='/contact' className='contact-button'>
                    CONTACT
                </Link>
            </div>
        </section>
    )
}

export default AboutMe