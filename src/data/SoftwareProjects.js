import NorElisCakesCoverPhoto from '../assets/NorElisCakesCoverPhoto.png';
import LittleLemonCoverPhoto from '../assets/LittleLemonCoverPhoto.JPG';
import WebDevJourneyCoverPhoto from '../assets/WebDevJourney/WebDevJourneyCoverPhoto.png';

export const allSoftwareProjects = [
    {
        title: 'NorElis Cakes App',
        description: `iOS e-commerce mock/demo app for browsing, customizing, and ordering cakes from NorElisCakes.`,
        tags: ['iOS Dev', 'Swift', 'UIKit', 'Storyboard'],
        coverPhoto: NorElisCakesCoverPhoto,
        link: '/projects/noreliscakes'
    },
    {
        title: 'Little Lemon Website',
        description: `A homepage and functional table reservation system for the Little Lemon restaurant, a fictional restaurant.`,
        tags: ['React.js', 'UX/UI', 'Front-End Dev'],
        coverPhoto: LittleLemonCoverPhoto,
        link: '/projects/littlelemon'
    },
    {
        title: 'Web Dev Journey',
        description: "A reflective walkthrough of my self-taught web development path—starting with user-centered design principles in the Google UX Design Certificate, building foundational HTML/CSS projects through freeCodeCamp, diving into JavaScript, and completing Meta's Front-End Developer Specialization.",
        tags: ['Front-End Dev', 'Blog Post'],
        coverPhoto: WebDevJourneyCoverPhoto,
        link: '/projects/web-dev-journey'
    },
]