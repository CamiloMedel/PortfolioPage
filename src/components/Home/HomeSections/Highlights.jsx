import {Link} from 'react-router';
import './Highlights.css'
import GolfCoverPhoto from '../../../assets/GolfGaitCoverPhoto.JPG'
import LittleLemonCoverPhoto from '../../../assets/LittleLemonCoverPhoto.JPG'
import NorElisCakesCoverPhoto from '../../../assets/NorElisCakesCoverPhoto.png'
import HighlightsProjectCard from './HighlightsProjectCard/HighlightsProjectCard'

let highligtedProjects = [
    {
        title: 'Golf & Gait',
        description: `A mini-game that uses motion capture software to detect physical therapy movements, such as lifting and holding a leg up.
        Tailored for individuals recovering from a stroke, the game promotes rehabilitation through gentle, guided activity. The goal is to immerse
        players in a soothing, yet stimulating audio-visual experience that shifts focus away from the physical effort.`,
        tags: ['Team Project', 'Unity', 'C#', 'Game Design'],
        coverPhoto: GolfCoverPhoto
    },
    {
        title: 'Little Lemon Website',
        description: `A homepage and functional table reservation system for the Little Lemon restaurant, a fictional restaurant. Project made for Meta -
        Front-End Developer Capstone (Coursera).`,
        tags: ['React.js', 'UX/UI', 'Front-End Dev'],
        coverPhoto: LittleLemonCoverPhoto
    },
    {
        title: 'NorElis Cakes App',
        description: `iOS e-commerce mock/demo app for browsing, customizing, and ordering cakes from NorElisCakes. Features a dynamic customization screen,
        a scalable architecture that makes it easy to add new cakes, and Core Data integration for persistent cart management.`,
        tags: ['iOS Dev', 'Swift', 'UIKit', 'Storyboard'],
        coverPhoto: NorElisCakesCoverPhoto
    }
]

function Highlights(){
    return (
        <section className="highlights-section">
            <div className='highlights-heading-container'>
                <h1 className='title'>Highlights</h1>
                <h1><Link to="/portfolio" className='link-to-projects'>View All Projects <i class="fa-solid fa-chevron-right"/></Link></h1>
            </div>
            <div className='highlights-projects-container'>
                {highligtedProjects.map((projectInfo) => {
                    return <HighlightsProjectCard projectInfo={projectInfo}/>
                })}
            </div>
        </section>
    )
}

export default Highlights