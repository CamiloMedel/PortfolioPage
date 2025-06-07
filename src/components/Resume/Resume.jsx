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
                    <a href='https://drive.google.com/file/d/1e8XwXvyuS_wRAjIU1VBX7Bp4Qsb1ZBr4/view?usp=sharing'>Resume</a>
                </div>
            </div>
            <div id='tech-resume'>
                <div id='resume-content'>
                    <h1 className='title'>iOS & Front End Development</h1>
                    <a href='https://drive.google.com/file/d/1zPFow5GNsGcLjOkzXaDOTDIWXiP_hCce/view?usp=sharing' target='_blank'>Resume</a>
                </div>
            </div>
        </main>
    )
}

export default Resume