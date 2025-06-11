import ProjectHeadline from '../../PortfolioSections/PortfolioTemplates/ProjectHeadline'
import ProjectVideo from '../../PortfolioSections/PortfolioTemplates/ProjectVideo'
import ProjectProcess from '../../PortfolioSections/PortfolioTemplates/ProjectProcess'
import ProcessEntry from '../../PortfolioSections/PortfolioTemplates/ProcessEntry'

import CoverImage from '../../../../assets/Run/RunCoverPhoto.png'
import Ideation from '../../../../assets/Run/Ideation.jpg'
import Storyboarding from '../../../../assets/Run/Storyboarding.jpg'
import AssetsScreenshot from '../../../../assets/Run/AssetsScreenshot.JPG'
import UnityScreenshot from '../../../../assets/Run/UnityScreenshot.JPG'
import AbletonScreenshot from '../../../../assets/Run/AbletonScreenshot.JPG'
import GameJuice from '../../../../assets/Run/GameJuice.gif'

let projectSpecifications = {
    type: 'Game Prototype',
    role: 'Solo Developer',
    duration: 'April 2025 (3 days)'
}

function Run(){
    const overlappingImgsStyle = {
        width: '80%',
        maxWidth: '400px',
        height: '100%',
        margin: 'auto',
        position: 'relative'
    }

    const ideationImgStyle = {
        width: '90%',
        maxWidth: '300px',
        minWidth: '235px',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: '0',
    };

    const storyboardingImgStyle = {
        width: '90%',
        maxWidth: '300px',
        minWidth: '235px',
        borderRadius: '4px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        zIndex: '1',
        position: 'absolute',
        bottom: '0'
    };

    return (
        <main>
            <ProjectHeadline
                title='Run'
                description="A 2D game prototype implementing Unity's post processing effects and lighting to create a creepy and spooky ambience. On a dark and gloomy night, a player must run and stay out of sight from a monster that's chasing them. The only way to keep distance is to stay out of any light. Destroy lamps and other light sources before running into them, or else the monster will get a better look at the player and will then get one step closer.

                This project evolves from a Unity Environment I previously created when experimenting with post processing effects."
                coverImage={CoverImage}
                projectSpecs={projectSpecifications}
                tags={['Unity', 'C#', 'Game Design', 'Prototype', 'Aseprite', 'Ableton']}
            />
            <ProjectVideo videoType='Gameplay'>
                <iframe src="https://www.youtube.com/embed/qLK7yWyq_RA?si=GnYWNbfoQBvqjMl1" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectProcess>
                <ProcessEntry
                    title='I. Initial Project'
                    description="Run was created by improving a project I had previously made in a day. The initial project is of a spooky 2D environment in Unity. With this initial project, I had the goal of experimenting with Unity's post processing system.

                    I wanted to take this project further as I felt passionate about the spooky environment and its potential."
                >
                    <iframe src="https://www.youtube.com/embed/U-gdT7TcJsc?si=pr_PlN9qSSBjyXHD" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='media'></iframe>
                </ProcessEntry>
                <ProcessEntry
                    title='II. Ideation'
                    description="I thought of many ideas and I wrote every single one that came to mind down. Ideas would start leading to others. I knew that I wanted to make something that makes the player panic in the created spooky environment. I thought of what mechanics and created dynamics can create this feeling in the player.

                    Once I had some ideas fleshed out, I started storyboarding to visualize what these ideas would look like implemented.​"
                    mediaOnRight
                >
                    <div className='media' style={{height: '100%', minHeight: '300px'}}>
                        <div style={overlappingImgsStyle}>
                            <img src={Ideation} style={ideationImgStyle}/>
                            <img src={Storyboarding} style={storyboardingImgStyle}/>
                        </div>
                    </div>
                </ProcessEntry>
                <ProcessEntry
                    title='III. Art Asset Creation'
                    description="Art asset creation was done initially at the start of the project, within Aseprite, to better visualize the player and the enemy characters with their run cycles.

                    Other art asset creation was done throughout the production of the project when needed."
                >
                    <img src={AssetsScreenshot} className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='IV. Mechanic | Logic | Asset Implementation'
                    description="From my initial ideation, I implemented the ideas that I believed would create that panic feeling within the player the most. I implemented my mechanics and game logic within Unity with C#.

                    As I implemented my game, I made sure to evolve my ideas and assets to get rid of design and experience problems, to get rid of potential frustration and boredom points, and to further explore exciting points."
                    mediaOnRight
                >
                    <img src={UnityScreenshot} className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='V. Audio'
                    description="I created a music background track and sound effects within Ableton Live 12. I used audio effects and boomy sounds to create a spooky soundscape.

                    I then implemented this audio within Unity."
                >
                    <img src={AbletonScreenshot} className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title="VI. Game Juice & Polish"
                    description="To improve the player's experience and immersion, game juice such as camera shake was implemented to match the player's actions and consequences.

                    A final round of polish was also done to sort out any bugs and visual issues."
                    mediaOnRight
                >
                    <img src={GameJuice} className='media'/>
                </ProcessEntry>
            </ProjectProcess>
        </main>
    )
}

export default Run;