import ProjectHeadline from '../../PortfolioSections/PortfolioTemplates/ProjectHeadline';
import ProjectVideo from '../../PortfolioSections/PortfolioTemplates/ProjectVideo';
import ProjectProcess from '../../PortfolioSections/PortfolioTemplates/ProjectProcess';
import ProcessEntry from '../../PortfolioSections/PortfolioTemplates/ProcessEntry';
import ProjectItch from '../../PortfolioSections/PortfolioTemplates/ProjectItch';

import BalloonClimberCoverPhoto from '../../../../assets/BalloonClimber/BalloonClimberCoverPhoto.png';
import TrelloBoard from '../../../../assets/BalloonClimber/TrelloBoard.JPG';
import ArtComparison from '../../../../assets/BalloonClimber/ArtComparison.gif';
import LevelDesigns from '../../../../assets/BalloonClimber/LevelComparisons.png';
import MainMenuScreenshot from '../../../../assets/BalloonClimber/MainMenuScreenshot.png';
import InGameScreenshot00 from '../../../../assets/BalloonClimber/InGameScreenshot00.JPG'

let projectSpecifications = {
    type: 'Game Demo',
    role: 'Solo Developer',
    duration: 'Spring 2024 / 3 Weeks'
}

function BalloonClimber(){
    return (
        <main>
            <ProjectHeadline
                title='Balloon Climber'
                description='Balloon Climber began as a rapid prototype during a “Game a Week” challenge in my Spring 2024 prototyping course at UT Austin. I expanded the idea into a more polished indie game demo, handling all aspects of production including programming, art, sound design, and original music.

                This early build showcases the core gameplay loop, visual style, and tone of the game, with plenty of room for future growth. It’s a snapshot of a quirky, skill-based game full of charm and chaos.'
                coverImage={BalloonClimberCoverPhoto}
                projectSpecs={projectSpecifications}
                tags={['Unity', 'C#', 'Game Design', 'Ableton', 'Photoshop', 'Game Demo']}
            />
            <ProjectVideo videoType={'Trailer'}>
                <iframe src="https://www.youtube.com/embed/OFNtAAA1MjA?si=mT6bgkOosrL24QlT" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectProcess>
                <ProcessEntry
                    title='I. Creating the Initial Project'
                    description='Balloon Climber began as a submission for the Game-a-Week challenge in my prototyping class, where we were tasked with creating a new game each week based on a randomly selected prompt. For this particular week, the theme was “1 Hit Point.”

                    That constraint got me thinking about fragile things that could be fun to control — and that’s when the idea of a balloon came to mind. I wanted to design a game where players had to carefully guide something delicate through a chaotic environment. Inspired by games like Getting Over It, I aimed for something that felt punishing yet playful, where each moment felt tense but hilarious. From there, I built a prototype centered around using a leaf blower to guide a balloon upward — simple, weird, and full of potential.'
                >
                    <iframe src="https://www.youtube.com/embed/vg_YmtXS5XA?si=lW1MQaBEcUq5QwPg" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='media'></iframe>
                </ProcessEntry>
                <ProcessEntry
                    title='II. Playtesting Initial Project'
                    description='After getting the initial prototype up and running, I brought it in for class playtesting and got a ton of helpful feedback. A common note was that the balloon didn’t feel very “balloony” — it dropped too fast and felt a bit heavy, which took away from the floaty, fragile vibe I was going for. People also mentioned that adding sound effects would help make the game feel more alive, and that using a more playful color palette (or experimenting with different pixel art styles) could give it a more unique personality.

                    I started jotting down all these suggestions and ideas in a Trello board to help keep track of what I wanted to improve. It gave me a solid list of things to explore in the next phase of development.'
                    mediaOnRight
                >
                    <img src={TrelloBoard} alt='Trello board used in creating project demo' className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='III. Visual Improvements'
                    description='To give the game a stronger identity, I switched to a clean, plastic-like pixel art style and built a color palette inspired by outdoor environments to keep that breezy, open-air feel. I also replaced the dart throwers with angry geese that launch spiky eggs, which better fit the playful, nature-inspired tone I was aiming for.

                    On the polish side, I added more animations, subtle particle effects (like when the balloon bumps into walls), and a bit of camera shake to enhance player feedback and make the action feel more dynamic.'
                >
                    <img src={ArtComparison} alt='Comparison of intial project and demo art' className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='IV. Improving the Level Design'
                    description='I reworked the level layout to better support the balloon’s unique movement and to introduce new gameplay challenges over time. I focused on pacing — balancing open sections with tighter, obstacle-filled areas — and looked for ways to make the player engage more with their surroundings. One example of this was adding expressive obstacles like fans that periodically blow gusts of wind, pushing the balloon in different directions. These elements created more interactive moments and forced players to make quick decisions about timing and positioning, adding depth without overcomplicating the controls.'
                    mediaOnRight
                >
                    <img src={LevelDesigns} alt='Comparison of prototype levels and demo level' className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='V. Adding Sound'
                    description='Sound design became a key part of shaping the game’s playful tone — especially after feedback highlighted how much it was missing. I wanted the audio to complement the silly, not-so-serious vibe of the game, so I leaned into fun and unexpected choices. For example, the geese don’t honk — they let out a deep, long “quack” that I voiced and edited myself to exaggerate their personality.

                    The background music is a light jazz track I composed to match the game’s whimsical energy. My inspiration came from a jazz appreciation course I had taken the previous summer, and I wanted the track to have a slightly suspenseful, Jaws-like build in the piano chords while still keeping things playful and loose.

                    Most of the sound effects were homemade — the balloon’s bounce sound, for instance, came from me hitting a soda can and tweaking the audio to fit. Making the sounds myself helped me keep everything consistent with the game’s quirky, handmade charm.'
                >
                    <iframe src="https://www.youtube.com/embed/QCIDDUfStKs?si=TexJsv2CJphFAdtM" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='media'></iframe>
                </ProcessEntry>
                <ProcessEntry
                    title='VI. UI & Experience Improvements'
                    description='Next, I focused on refining the overall player experience. I added simple UI elements like a start screen, pause menu, and in-game prompts to make the game easier to navigate and more welcoming to new players. I also included playful UI animations to keep things feeling light and on-brand.

                    Based on feedback, I introduced an optional checkpoint system to help players who were struggling. While the game is meant to be a bit challenging, I wanted to make sure it was still approachable — and giving players the choice to activate checkpoints struck a good balance between difficulty and accessibility.'
                    mediaOnRight
                >
                    <img src={MainMenuScreenshot} alt="Screenshot of Demo's main menu" className='media'/>
                </ProcessEntry>
                <ProcessEntry
                    title='VII. The Demo'
                    description='After rounds of iteration, polish, and feedback, I released the early demo of Balloon Climber. This version showcases the core gameplay loop, introduces players to the chaotic charm of the game world, and sets the stage for future updates. Sharing the demo publicly was a major milestone — one that allowed me to celebrate the work I had put into bringing the idea to life.'
                >
                    <img src={InGameScreenshot00} alt='Screenshot from Demo gameplay' className='media'/>
                </ProcessEntry>
            </ProjectProcess>
            <ProjectItch link='https://camilo-medel.itch.io/balloon-climber-demo'/>
        </main>
    )
}

export default BalloonClimber;