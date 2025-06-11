import GolfCoverPhoto from '../assets/GolfGaitCoverPhoto.JPG'
import RunCoverPhoto from '../assets/Run/RunCoverPhoto.png'

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
]