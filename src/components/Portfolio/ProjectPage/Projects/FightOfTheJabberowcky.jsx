import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";
import ProjectContributions from "../../PortfolioSections/PortfolioTemplates/ProjectContributions";
import ProjectTeamContact from "../../PortfolioSections/PortfolioTemplates/ProjectTeamContact";
import ProjectProcess from "../../PortfolioSections/PortfolioTemplates/ProjectProcess";
import ProjectGallery from "../../PortfolioSections/PortfolioTemplates/ProjectGallery";
import ProcessEntry from "../../PortfolioSections/PortfolioTemplates/ProcessEntry";

import FOTJCoverPhoto from '../../../../assets/FightOfTheJabberwocky/FOTJCoverPhoto.png'
import GameScreenshot00 from '../../../../assets/FightOfTheJabberwocky/GameScreenshot00.PNG';
import GameScreenshot01 from '../../../../assets/FightOfTheJabberwocky/GameScreenshot01.png';
import GameScreenshot02 from '../../../../assets/FightOfTheJabberwocky/GameScreenshot02.png';
import PlayerRoaring from '../../../../assets/FightOfTheJabberwocky/PlayerRoaring.PNG';
import ShowcasePhoto00 from '../../../../assets/FightOfTheJabberwocky/ShowcasePhoto00.jpg';
import ShowcasePhoto01 from '../../../../assets/FightOfTheJabberwocky/ShowcasePhoto01.jpg';
import ShowcasePhoto02 from '../../../../assets/FightOfTheJabberwocky/ShowcasePhoto02.jpg';
import ShowcasePhoto03 from '../../../../assets/FightOfTheJabberwocky/ShowcasePhoto03.jpg';
import ElevatorPitch from '../../../../assets/FightOfTheJabberwocky/ElevatorPitch.jpg';
import Iteration00 from '../../../../assets/FightOfTheJabberwocky/Iteration00.gif';
import Iteration01 from '../../../../assets/FightOfTheJabberwocky/Iteration01.JPG';

let projectSpecifications = {
    type: 'Alt-Ctrl Game',
    role: 'Unity Developer and Designer',
    duration: 'Fall 2024 (UT Austin)'
}

let teamMembers = [
    {
        fullName: 'Bella Cruz',
        role: 'Audio',
        contact: 'https://www.linkedin.com/in/bellaacruz/'
    },
    {
        fullName: 'Eduardo Garcia',
        role: '2D Art & Animation',
        contact: 'https://www.linkedin.com/in/eduardo-garcia-54b0451a0/'
    },
    {
        fullName: 'Irwin Gutierrez',
        role: '3D Artist',
        contact: 'https://www.linkedin.com/in/irwin-gutierrez-54596a225/'
    },
    {
        fullName: 'Christian Wilson',
        role: 'Fabrication & Design',
        contact: 'https://www.linkedin.com/in/christian-wilson-7b46651b7/'
    },
]

function FightOfTheJabberwocky() {
    return (
        <main>
            <ProjectHeadline
                title='Fight of the Jabberwocky'
                description='Fight of the Jabberwocky is an Alt Ctrl Arcade game where you step into the claws of Jerry, a misunderstood jabberwocky just trying to enjoy some peace in his forest home. But villagers, knights, and obnoxious children keep storming in! Wearing a custom jabberwocky mask, players use their own roars and voice to scare off intruders in this chaotic, voice-activated arcade experience.'
                tags={['Team Project', 'Unity', 'C#', 'Game Design']}
                coverImage={FOTJCoverPhoto}
                projectSpecs={projectSpecifications}
           />
            <ProjectVideo videoType={'Tutorial'} caption='(Tutorial for playing. Includes early gameplay footage)'>
                <iframe src="https://www.youtube.com/embed/vw-27ANv1gY?si=O_ogtDTXgwPNHqe6" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectContributions
                contributions={[
                    'Developed for an Alt Ctrl Arcade setting, designing gameplay around nontraditional inputs like a foot pedal and real-time microphone voice detection',
                    'Programmed core systems in Unity (C#) including enemy spawning, player input, and audio-based damage logic across a three-display immersive setup',
                    'Created physically engaging gameplay mechanics by tightly integrating hardware with responsive in-game reactions',
                    'Collaborated with a multidisciplinary team on design, storytelling, and hardware integration',
                    'Contributed to exhibition setup and technical implementation to ensure smooth, public-ready gameplay'
                ]}
            />
            <ProjectVideo videoType={'Gameplay'}>
                <iframe src="https://www.youtube.com/embed/4Ip5enukh1E?si=VcYJE4NZmnHxHKbn" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectProcess>
                <ProcessEntry
                    title='Ideation & Design'
                    description='The game began as an idea for a horror experience where players would use a flashlight controller to scare off monsters, inspired by Five Nights at Freddy’s. Through team brainstorming and iteration, the concept evolved into a more playful twist—putting players in the role of the monster instead. This shift led to the creation of Fight of the Jabberwocky, where players use their voice and physical input to scare away humans in a whimsical, dragon-themed arcade game.'
                >
                    <img src={ElevatorPitch} alt='Original elevator pitch made for Fight of the Jabberwocky'className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='Core System Development'
                    description='I programmed core gameplay systems in Unity, focusing on foot pedal input, microphone-based roaring, enemy behavior, and logic—all using placeholder assets.

                    Throughout development, I maintained close communication with my team to ensure that the gameplay systems aligned with our intended tone, pacing, and player experience.'
                    mediaOnRight
                >
                    <img src={Iteration00} alt='Early version of Fight of the Jabberwocky with enemy and roaring menchanincs implemented' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='Playtesting & Iteration'
                    description='Frequent playtests led to major refinements in gameplay. One key evolution was the roaring mechanic: originally, players would build up a roar by making their loudest sound, which was stored and then released when stepping on a pedal tied to a screen. Based on player confusion and pacing feedback, we redesigned the system—players now step on a pedal to target a screen, then roar in real-time while holding the sound to continue damaging enemies. This change made gameplay more intuitive, physical, and immersive.'
                >
                    <img src={Iteration01} alt='Early version of Fight of the Jabberwocky with some placeholder assets.' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='Asset Integration & Visual Polish'
                    description='Integrated 2D animations and audio cues, coordinating closely with artists to ensure seamless alignment between mechanics and visuals. I also added juice elements (like screen shake and directional flash alerts) to enhance responsiveness and clarity.'
                    mediaOnRight
                >
                    <img src={GameScreenshot00} alt='Screenshot of gameplay with approaching enemies in the center screen' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='Final Tuning & Exhibition'
                    description='In December 2024, we conducted internal playtests with AET faculty and staff, gathering feedback on player experience. We then fine-tuned visual indicators, adjusted difficulty pacing, and improved onboarding elements. The polished version of the game was then publicly showcased at the AET Elevate Showcase in Spring 2025, where it was presented in its setup for hands-on play.'
                >
                    <img src={ShowcasePhoto00} alt="People playing Fight of the Jabberwocky at UT Austin's SDCT Elevate 2025 showcase" className="media"/>
                </ProcessEntry>
            </ProjectProcess>
            <ProjectGallery
                galleryMedia={[
                    {src: GameScreenshot00, alt: 'Screenshot of gameplay with approaching enemies in the center screen'},
                    {src: GameScreenshot01, alt: 'Screenshot of gameplay with a approaching farmer enemy on the left screen'},
                    {src: GameScreenshot02, alt: 'Screenshot of gameplay from the right screen'},
                    {src: PlayerRoaring, alt: 'Player wearing the Jerry the Jabberwocky mask'},
                    {src: ShowcasePhoto00, alt: "People playing Fight of the Jabberwocky at UT Austin's SDCT Elevate 2025 showcase"},
                    {src: ShowcasePhoto01, alt: "Descriptive pedestal for Fight of the Jabberwocky's exhibit at UT Austin's SDCT Elevate 2025 showcase"},
                    {src: ShowcasePhoto02, alt: "Player viewing the left screen Fight of the Jabberwocky's exhibit at UT Austin's SDCT Elevate 2025 showcase"},
                    {src: ShowcasePhoto03, alt: "Some of the team testing Fight of the Jabberwocky before UT Austin's SDCT Elevate 2025 showcase"},
                ]}
            />
             <ProjectTeamContact teamMembers={teamMembers}/>
        </main>
    )
}

export default FightOfTheJabberwocky;