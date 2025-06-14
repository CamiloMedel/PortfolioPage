import GolfCoverPhoto from '../assets/GolfGaitCoverPhoto.JPG';
import RunCoverPhoto from '../assets/Run/RunCoverPhoto.png';
import FOTJCoverPhoto from '../assets/FightOfTheJabberwocky/FOTJCoverPhoto.png';
import BalloonClimberCoverPhoto from '../assets/BalloonClimber/BalloonClimberCoverPhoto.png';
import FiveInFiveCoverPhoto from '../assets/5in5/FiveInFiveCoverPhoto.png';
import PeccaryFoodRunCoverPhoto from '../assets/PeccaryFoodRun/PeccaryFoodRunCoverPhoto.png';
import GameAWeekCoverPhoto from '../assets/GameAWeek/GameAWeekCoverPhoto.png';

export const allCreativeProjects = [
    {
        title: 'Golf & Gait',
        description: `A mini-game that uses motion capture software to detect physical therapy movements, such as lifting and holding a leg up.`,
        tags: ['Team Project', 'Unity', 'C#', 'Game Design'],
        coverPhoto: GolfCoverPhoto,
        link: '/projects/golf-and-gait'
    },
    {
        title: 'Run',
        description: `On a dark and gloomy night, a player must run and stay out of sight from a monster that's chasing them.
        2D game prototype implementing Unity's post processing effects and lighting to create a creepy and spooky ambience.`,
        tags: ['Unity', 'C#', 'Game Design', 'Prototype', 'Aseprite', 'Ableton'],
        coverPhoto: RunCoverPhoto,
        link: '/projects/run'
    },
    {
        title: 'Fight of the Jabberwocky',
        description: `An Alt Ctrl Arcade game where you become Jerry, a misunderstood jabberwocky defending his forest home.
        Wearing a custom mask, players use their roar—captured via microphone—and foot pedal input to scare off intruding
        villagers in a chaotic, voice-activated experience.`,
        tags: ['Team Project', 'Unity', 'C#', 'Game Design'],
        coverPhoto: FOTJCoverPhoto,
        link: '/projects/fight-of-the-jabberwocky'
    },
    {
        title: 'Balloon Climber',
        description: 'Equip your trusty leaf blower and guide a fragile balloon ever upward through a treacherous vertical world! Dodge angry geese, avoid spike traps, and master physics-based movement in this whimsical climbing adventure. Every gust of air propels the balloon higher—but one wrong blow, and POP!',
        tags: ['Unity', 'C#', 'Game Design', 'Ableton', 'Photoshop', 'Game Demo'],
        coverPhoto: BalloonClimberCoverPhoto,
        link: '/projects/balloon-climber'
    },
    {
        title: '5 in 5',
        description: 'As part of a creative sprint, I challenged myself to ideate, build, and complete five unique Unity projects in five consecutive days. Each day, I focused on a new game design or technical goal, pushing both my creative limits and Unity development skills under tight time constraints.',
        tags: ['Unity', 'C#', 'Game Design', 'Ableton', 'Aseprite'],
        coverPhoto: FiveInFiveCoverPhoto,
        link: '/projects/five-in-five'
    },
    {
        title: 'Peccary Food Run',
        description: 'A 2D Unity game based on my research into the White-Lipped Peccary, a near-threatened Amazon species known for crop raiding and its large herds. Prototype created for a group project on Amazon Rainforest environmentalism.',
        tags: ['Unity', 'C#', 'Game Design', 'Aseprite', 'Prototype'],
        coverPhoto: PeccaryFoodRunCoverPhoto,
        link: '/projects/peccary-food-run'
    },
    {
        title: 'Game a Week',
        description: "As part of my Prototyping course at UT Austin, I participated in a rapid design challenge where we created a brand-new digital game prototype every week. Each week started with a randomly generated prompt, it was a full sprint—ideating, designing, and producing a playable game by the week's end",
        tags: ['Unity', 'C#', 'Game Design', 'Photoshop', 'Ableton', 'Blog Post'],
        coverPhoto: GameAWeekCoverPhoto,
        link: '/projects/game-a-week'
    }
]