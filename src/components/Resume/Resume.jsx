import './Resume.css'
import gameplayVideo from '../../assets/BoomAndCatchGameplay.mp4'
import HoverVideo from './HoverVideo'

function Resume(){
    return (
        <main className='resume-container'>
            <div id='game-design-resume'>
                <HoverVideo video={gameplayVideo} className='video-background'/>
                <div id='resume-content'>
                    <h1 className='title'>Game Design & Development</h1>
                    <button><a>View</a></button>
                </div>
            </div>
            <div id='tech-resume'>
                <div id='resume-content'>
                    <h1 className='title'>iOS & Front End Development</h1>
                    <button><a>View</a></button>
                </div>
            </div>
        </main>
    )
}

export default Resume