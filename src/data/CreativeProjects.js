import GolfCoverPhoto from '../assets/GolfGaitCoverPhoto.JPG'
import RunCoverPhoto from '../assets/Run/RunCoverPhoto.png'
import FOTJCoverPhoto from '../assets/FightOfTheJabberwocky/FOTJCoverPhoto.png'

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
    }
]