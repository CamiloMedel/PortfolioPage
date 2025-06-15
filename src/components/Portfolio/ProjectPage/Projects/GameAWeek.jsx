import BlogHeadline from "../../PortfolioSections/PortfolioTemplates/BlogHeadline";
import ProjectProcess from "../../PortfolioSections/PortfolioTemplates/ProjectProcess";
import ProcessEntry from '../../PortfolioSections/PortfolioTemplates/ProcessEntry';

import GameAWeekCoverPhoto from '../../../../assets/GameAWeek/GameAWeekCoverPhoto.png';
import Week4Photo from '../../../../assets/GameAWeek/Week4Photo.png';
import ProjectReflection from "../../PortfolioSections/PortfolioTemplates/ProjectReflection";

function GameAWeek() {
    return (
        <main>
            <BlogHeadline
            title='Game a Week'
            description="As part of my Prototyping course at UT Austin, I participated in a rapid design challenge where we created a brand-new digital game prototype every week. Each week started with a randomly generated prompt, and from there, it was a full sprint—ideating, designing, and producing a playable game by the week's end. This process pushed my creativity, technical skills, and time management to the limit.

            Throughout the semester, I explored a variety of mechanics, genres, and experimental ideas—all while learning to scope effectively and iterate fast. This blog documents each of the weekly prototypes, the design choices I made, and reflections on what worked (and what didn’t).

            Blog is work in progress."
            coverImage={GameAWeekCoverPhoto}
            datePosted='06/13/2025'
            />
            <ProjectProcess title='Weekly Projects'>
                <ProcessEntry
                title='Week 1 - You are the Environment'
                description='A rhythm-based puzzle game where you control the environment to help a dog move through the level. Objects move across the screen, and players time their inputs to lock them into place, creating safe paths.

                I wanted to flip the typical player role—rather than control a character, you are the world helping them. A dog made sense since it can’t open doors. Inspired by Melatonin, I added rhythm timing mechanics to make interaction more engaging.

                This was my first Unity project after learning scripting, so I ran into a lot of issues—mainly with camera work, sequencing, and art. Despite the rough edges, I learned a lot and got excited to keep exploring Unity.'
                >
                    <iframe src="https://www.youtube.com/embed/uX3BwPK4F3Q?si=rqbADMaan0fC_UW5" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 2 - A Day at the Zoo'
                description='A stealth game where you play as a duck trying to escape a zoo before the gates close at night. Avoid patrolling zookeepers and make your way to the exit without being caught.

                I wanted to shift perspective and make an animal the playable character. A duck felt like a fun, sneaky choice. I already knew I wanted to explore stealth mechanics and thought the zoo setting gave that idea a playful twist.

                This was my first time trying a top-down view, and I struggled with the art and camera movement—it felt disorienting. But I was proud of the lighting system, which darkened the screen over time. It sparked my interest in using Unity’s lighting tools more in future games.'
                mediaOnRight
                >
                    <iframe src="https://www.youtube.com/embed/6LgX_uhON1Q?si=0rAfDJaLYIsrpdVS" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 3 - Breakup'
                description='A tycoon-style game where players mine rocks using a hammer and tweezers to separate good crystals from junk. Players must meet a money quota before time runs out by sorting materials into the correct bins.

                At first, I was stuck on making a romance-themed game, but creative block made it hard to follow through. I eventually pivoted to a more systems-based idea, inspired by classic Roblox tycoon games, and built the game around sorting and resource management.

                This week taught me not to get too attached to a single idea. I learned to ideate by throwing out lots of concepts and connecting them freely. While I ran into issues with object interactions and time constraints, the project helped me refine both my design process and Unity skills.'
                >
                    <iframe src="https://www.youtube.com/embed/N4qLyKLtITA?si=WuGCXGtqtVaOtETk" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 4 - Bad Pet'
                description='I opted to skip this week’s prototype due to a heavy workload in my other classes. Our course allowed one missed week without penalty.

                While I didn’t produce a game this week, it was a helpful reminder to pace myself and manage creative energy across multiple projects. Taking this break allowed me to come back more focused the following week.'
                mediaOnRight
                >
                    <img src={Week4Photo} alt='Photo showing that no prototype was made for week 4' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                title='Week 5 - 1 Hit Point'
                description='A physics-based platformer where you use a leaf blower to guide a fragile balloon upward through a vertical level filled with hazards. One hit—like spikes or darts—and it’s game over.

                Inspired by Getting Over It, I wanted a tense, high-stakes challenge using a balloon as the one-hit-point character. The leaf blower mechanic created fun risk/reward moments, and I added puzzle elements like popping other balloons to progress.

                This project was so fun I later turned it into a full demo, Balloon Climber. Looking back, I realized I focused too much on adding content instead of refining mechanics. It was a great lesson in quality over quantity.'
                >
                    <iframe src="https://www.youtube.com/embed/zvnmWz5X09w?si=ZWnW4h-X6g8hl-b9" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 6 - I Spy'
                description='This project was so fun I later turned it into a full demo, Balloon Climber. Looking back, I realized I focused too much on adding content instead of refining mechanics. It was a great lesson in quality over quantity.

                I wanted to dive into horror and finally explore audio as a core mechanic. The idea of “spying” via sound led to a game of sound-based detection and risk, with the monster adding tension and consequence.

                This project taught me the importance of aligning gameplay and narrative. While the core mechanic was fun, the story felt unclear. I learned to better integrate mechanics with a clear, cohesive premise.'
                mediaOnRight
                >
                    <iframe src="https://www.youtube.com/embed/fANWyT5dVgs?si=emL8pLSEdiRHKK0b" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 7 - One Button'
                description='An emotional narrative game where the player uses a single button to open and close curtains. Letting in light fills the room with color and memories—but keeping them open too long risks sadness overwhelming the player.

                I wanted to create something more introspective and meaningful. The single-button mechanic symbolized the simple yet difficult act of letting light—and thoughts—into one’s life. Good memories uplifted the mood, while bad ones brought it down.

                This project helped me experiment with narrative through mechanics and visuals. I also explored a new brush-based art style, which felt fitting for the game’s emotional tone. It reinforced how art direction and story can elevate a simple mechanic.'
                >
                    <iframe src="https://www.youtube.com/embed/DLm1mLI8E_Q?si=IkoQfgnGckZxR76n" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 8 - Contamination'
                description='A 2-player competitive game where each player controls a duck—one trying to contaminate the pond, the other trying to keep it clean. Players use a rock-paper-scissors-style system to choose actions like missiles, punches, or spells to influence the pond.

                I wanted to explore local multiplayer and experiment with a new art style. The contamination theme led me to think of polluted water, and ducks felt like a fun and fitting match for that setting. Strategy came from both timing and contamination level upgrades.

                While not my first multiplayer game, this was a fun opportunity to refine what I’d learned before. I’d improve the game by polishing bugs, adding more visual variety between clean and contaminated states, and expanding the action system, which was simplified due to time constraints.'
                mediaOnRight
                >
                    <iframe src="https://www.youtube.com/embed/9EXSHsw3Klw?si=qsbpai5BTOStbDki" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
                <ProcessEntry
                title='Week 9 - Pick a Theme(s)'
                description='(Themes chosen: Cleaning, Dimensions, In Time)

                You play as a janitor in space, cleaning green sludge in rooms blocked by obstacles. By stepping on interdimensional pressure plates, you teleport into an alternate dimension where obstacles vanish—but so does your ability to see the sludge, forcing you to remember its locations. While in the alt dimension, walls slowly close in, and you must return in time to survive.

                I combined multiple themes into one concept, inspired by spatial puzzles and time pressure. I wanted to build a game that blended memory, exploration, and tension. I also experimented with gravity-based mechanics in a second level, adding new ways to clean via environmental interaction.

                This became one of my favorite prototypes. I especially loved using music to raise tension—the soundtrack intensifies as danger builds in the alt dimension, creating real urgency. It’s a game I’m excited to revisit and expand in the future.'
                >
                    <iframe src="https://www.youtube.com/embed/64fXo7MuTXU?si=QSQ-WSgWJmd9e3Hb" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="media"></iframe>
                </ProcessEntry>
            </ProjectProcess>
            <ProjectReflection>
                <p>
                    Participating in the Game-a-Week challenge was one of the most transformative experiences in my growth as a game developer. Prototyping a new
                    game every week taught me how to ideate quickly, stay flexible, and reflect critically under tight deadlines. I learned to overcome creative
                    blocks by developing a repeatable brainstorming system—throwing out lots of ideas, remixing them, and running with whatever sparked excitement.
                    Each theme pushed me to explore different genres, mechanics, and narratives, from emotional one-button games to chaotic multiplayer battles
                    and interdimensional puzzles.
                </p>
                <p>
                    Beyond creativity, the challenge rapidly leveled up my technical skills. I got comfortable with Unity’s core systems—from scripting player
                    controls and physics to integrating lighting, sound, and UI. Week 5’s prototype, where a balloon is guided by a leaf blower, was a turning
                    point. That idea eventually became Balloon Climber, a full demo I built out with added mechanics, sound design, and a full level. This
                    challenge not only sharpened my Unity and design skills—it gave me the confidence to build, experiment, and finish what I start.
                </p>
            </ProjectReflection>
        </main>
    )
}

export default GameAWeek;