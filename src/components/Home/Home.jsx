import './Home.css'
import AboutMe from './HomeSections/AboutMe'
import HeroSection from './HomeSections/HeroSection'
import Highlights from './HomeSections/Highlights'

function Home(){
    return (
        <main className='home-container'>
            <HeroSection/>
            <Highlights/>
            <AboutMe/>
        </main>
    )
}

export default Home