import ProjectHeadline from '../../PortfolioSections/PortfolioTemplates/ProjectHeadline'
import ProjectVideo from '../../PortfolioSections/PortfolioTemplates/ProjectVideo'
import ProjectContributions from '../../PortfolioSections/PortfolioTemplates/ProjectContributions'
import ProjectGallery from '../../PortfolioSections/PortfolioTemplates/ProjectGallery'

import CoverImage from '../../../../assets/GolfGaitCoverPhoto.JPG'
import GameplayGif00 from '../../../../assets/Golf&Gait/GameplayClip00.gif'
import GameplayGif01 from '../../../../assets/Golf&Gait/GameplayClip01.gif'
import InGameScreenshot00 from '../../../../assets/Golf&Gait/InGameScreenshot00.png'
import InGameScreenshot01 from '../../../../assets/Golf&Gait/InGameScreenshot01.png'
import InGameScreenshot02 from '../../../../assets/Golf&Gait/InGameScreenshot02.png'
import ShowcasePhoto00 from '../../../../assets/Golf&Gait/ShowcasePhoto00.jpg'
import ShowcasePhoto01 from '../../../../assets/Golf&Gait/ShowcasePhoto01.jpg'
import ProjectTeamContact from '../../PortfolioSections/PortfolioTemplates/ProjectTeamContact'

let projectSpecifications = {
    type: 'Unity Game',
    role: 'Unity Developer / Game Design',
    duration: 'Spring 2025 (UT Austin)'
}

let teamMembers = [
    {
        fullName: 'Schuyler Burke',
        role: 'producer & UI asset creation',
        contact: 'https://www.linkedin.com/in/schuylerburke/'
    },
    {
        fullName: 'Ezra Ramirez',
        role: '3D Character models',
        contact: 'https://www.linkedin.com/in/ezra-ramirez/'
    },
    {
        fullName: 'Irwin Gutierrez',
        role: '3D Environment Artist',
        contact: 'https://www.linkedin.com/in/irwin-gutierrez-54596a225/'
    },
    {
        fullName: 'Breeze Ayala',
        role: 'Level Design',
        contact: 'https://www.linkedin.com/in/breezeayala/'
    },
    {
        fullName: 'Daniel Zuniga',
        role: 'Audio',
        contact: 'https://www.linkedin.com/in/daniel-zuniga-893b642ab/'
    }
]

function GolfAndGait(){
    return (
        <main>
            <ProjectHeadline
                title='Golf & Gait'
                description='Golf and Gait is a motion-tracked golf minigame designed to support stroke rehabilitation. Created as part of the AET Gaitway Arcade initiative at UT Austin, the game encourages physical therapy through playful, balance-focused interaction. Players lift and lower their legs to swing at a virtual golf ball, with motion capture ensuring that real-world movements translate into meaningful, in-game feedback.'
                coverImage = {CoverImage}
                projectSpecs={projectSpecifications}
                tags={['Unity', 'Team Project', 'Game Design', 'C#']}
            />
            <ProjectVideo videoType='Gameplay'>
                <iframe src="https://www.youtube.com/embed/yt4sgAbD4MQ?si=qz01-iGqGw8t8ax0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectGallery
                galleryMedia={[
                    {src: InGameScreenshot00, alt: '2D menu screen of a robot playing golf'},
                    {src: ShowcasePhoto00, alt: 'Player raising their leg as the play Golf & Gait at the AET Elevate 2025 Showcase'},
                    {src: InGameScreenshot01, alt: 'In game screenshot of the golf swing power bar raising as a robot charges a golf club'},
                    {src: ShowcasePhoto01, alt: 'Player lowering their leg as the play Golf & Gait at the AET Elevate 2025 Showcase'},
                    {src: GameplayGif00, alt: 'Gif of in game footage of the robot character hitting a golf ball with low power'},
                    {src: InGameScreenshot02, alt: 'In game screenshot of golf ball flying in the air'},
                    {src: GameplayGif01, alt: 'Gif of in game footage of a golf ball rolling and marking a new high score on the ground'}
                ]}
            />
            <ProjectContributions
                contributions={[
                    'Developed a motion-tracked golf minigame designed to support stroke rehabilitation, created in collaboration with a UT research partner focused on gait therapy',
                    'Programmed core gameplay systems in Unity using C#, including motion input integration (via Captury), score tracking, and responsive player feedback',
                    'Collaborated closely with a multidisciplinary team of artists, designers, and audio engineers to implement animations, environmental assets, and game polish',
                    'Used Git for version control throughout development to manage features, coordinate with teammates, and maintain a stable production build',
                    'Contributed to iterative design through on-site playtesting, adjusting mechanics and visuals based on feedback to align the game experience with therapeutic goals',
                    'Helped prepare and present the project for public exhibition at the AET student showcase at UT Austin'
                ]}
            />
            <ProjectTeamContact teamMembers={teamMembers}/>
        </main>
    )
}

export default GolfAndGait;