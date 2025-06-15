import NorElisCakesCoverPhoto from '../assets/NorElisCakesCoverPhoto.png';
import LittleLemonCoverPhoto from '../assets/LittleLemonCoverPhoto.JPG';
import WebDevJourneyCoverPhoto from '../assets/WebDevJourney/WebDevJourneyCoverPhoto.png';
import MangataAndGalloCoverPhoto from '../assets/MangataAndGallo/MangataAndGalloCoverPhoto.JPG';
import PortfolioWebsiteCoverPhoto from '../assets/PortfolioWebsite/PortfolioWebsiteCoverPhoto.png';

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
    {
        title: 'Mangata & Gallo',
        description: 'A responsive homepage for a fictional jewelry store, Mangata & Gallo, designed as part of the "HTML and CSS in Depth" course in the Meta Front-End Developer Specialization.',
        tags: ['Front-End Dev', 'UX/UI'],
        coverPhoto: MangataAndGalloCoverPhoto,
        link: '/projects/mangata-and-gallo'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive personal site to showcase my work in game development, iOS development, and creative technology.',
        tags: ['React.js', 'UX/UI', 'Front-End Dev'],
        coverPhoto: PortfolioWebsiteCoverPhoto,
        link: '/projects/portfolio-website'
    }
]