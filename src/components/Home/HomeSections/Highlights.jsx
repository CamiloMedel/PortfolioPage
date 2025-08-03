import {Link} from 'react-router';
import './Highlights.css'
import GolfCoverPhoto from '../../../assets/GolfGaitCoverPhoto.JPG'
import RunCoverPhoto from '../../../assets/Run/RunCoverPhoto.png'
import NorElisCakesCoverPhoto from '../../../assets/NorElisCakesCoverPhoto.png'
import HighlightsProjectCard from './HighlightsProjectCard/HighlightsProjectCard'

let highligtedProjects = [
    {
        title: 'Golf & Gait',
        description: `A mini-game that uses motion capture software to detect physical therapy movements. Made for stroke rehabilitation reserach.`,
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
        description: `iOS e-commerce mock/demo app for NorElis Cakes, featuring a dynamic customization screen,
        a scalable architecture, and Core Data integration.`,
        tags: ['iOS Dev', 'Swift', 'UIKit', 'Storyboard'],
        coverPhoto: NorElisCakesCoverPhoto,
        link: '/projects/noreliscakes'
    }
]

function Highlights(){
    return (
        <section className="highlights-section">
            <div className='highlights-heading-container'>
                <h1 className='title'>HIGHLIGHTS</h1>
                <h1><Link to="/portfolio" className='link-to-projects'><i class="fa-solid fa-chevron-right"/></Link></h1>
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