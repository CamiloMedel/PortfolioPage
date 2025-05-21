import 'animate.css';
import './AboutMe.css'
import proffesionalPhoto from '../../../assets/ProPhotoEdited.JPG'

function AboutMe(){
    return (
        <section className='about-me-section'>
            <h1 className='title'>About Me</h1>
            <img src={proffesionalPhoto} className='animate__animated animate__fadeIn'/>
            <div className='descriptive-text animate__animated animate__fadeIn'>
                <p>Hi! I'm Camilo Medel, a recent graduate from The University of Texas at Austin with a Bachelor of Science in Arts and Entertainment Technologies and
                    a Certificate in the Elements of Computing (Spring 2025).
                </p>
                <p>I'm passionate about blending technology and design to craft engaging digital experiences—whether it's through games, applications, or websites.</p>
            </div>
        </section>
    )
}

export default AboutMe