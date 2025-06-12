import {Link} from 'react-router';
import './Highlights.css'
import GolfCoverPhoto from '../../../assets/GolfGaitCoverPhoto.JPG'
import RunCoverPhoto from '../../../assets/Run/RunCoverPhoto.png'
import NorElisCakesCoverPhoto from '../../../assets/NorElisCakesCoverPhoto.png'
import HighlightsProjectCard from './HighlightsProjectCard/HighlightsProjectCard'

let highligtedProjects = [
    {
        title: 'Golf & Gait',
        description: `A mini-game that uses motion capture software to detect physical therapy movements, such as lifting and holding a leg up.
        Tailored for individuals recovering from a stroke, the game promotes rehabilitation through gentle, guided activity. The goal is to immerse
        players in a soothing, yet stimulating audio-visual experience that shifts focus away from the physical effort.`,
        tags: ['Team Project', 'Unity', 'C#', 'Game Design'],
        coverPhoto: GolfCoverPhoto,
        link: '/projects/golf-and-gait'
    },
    {
        title: 'Run',
        description: "2D game prototype implementing Unity's post processing effects and lighting to create a creepy and spooky ambience.",
        tags: ['Unity', 'C#', 'Game Design', 'Prototype', 'Aseprite', 'Ableton'],
        coverPhoto: RunCoverPhoto,
        link: '/projects/run'
    },
    {
        title: 'NorElis Cakes App',
        description: `iOS e-commerce mock/demo app for browsing, customizing, and ordering cakes from NorElisCakes. Features a dynamic customization screen,
        a scalable architecture that makes it easy to add new cakes, and Core Data integration for persistent cart management.`,
        tags: ['iOS Dev', 'Swift', 'UIKit', 'Storyboard'],
        coverPhoto: NorElisCakesCoverPhoto,
        link: '/projects/noreliscakes'
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
                    return (
                        <Link to={projectInfo.link} className='highlights-link-wrapper'>
                            <HighlightsProjectCard projectInfo={projectInfo}/>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Highlights