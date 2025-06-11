import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";
import ProjectGallery from "../../PortfolioSections/PortfolioTemplates/ProjectGallery";

import CoverImage from '../../../../assets/LittleLemonCoverPhoto.JPG';
import WebScreenshot00 from '../../../../assets/LittleLemon/WebScreenshot00.JPG';
import WebScreenshot01 from '../../../../assets/LittleLemon/WebScreenshot01.JPG';
import UserPersona from '../../../../assets/LittleLemon/UserPersona.JPG';
import FigmaLofiWireframe from '../../../../assets/LittleLemon/FigmaLofiWireframe.JPG';
import FigmaElements from '../../../../assets/LittleLemon/FigmaElements.JPG';
import FigmaPrototype from '../../../../assets/LittleLemon/FigmaPrototype.JPG';
import ProjectImprovements from "../../PortfolioSections/PortfolioTemplates/ProjectImprovements";
import ProjectGitHub from "../../PortfolioSections/PortfolioTemplates/ProjectGitHub";

let projectSpecifications = {
    type: 'Website',
    role: 'Solo Developer and Design',
    duration: 'March'
}

function LittleLemonWebsite() {
    return (
        <main>
            <ProjectHeadline
                title='Little Lemon Website'
                description='Developed a responsive homepage and fully functional table reservation system for Little Lemon, a fictional Mediterranean restaurant. This project was the capstone for the Meta Front-End Developer Professional Certificate on Coursera. It involved translating design mockups into accessible and performant React components using modern front-end practices. Key features include real-time form validation, dynamic reservation handling, and clean UI design.'
                coverImage={CoverImage}
                projectSpecs={projectSpecifications}
                tags={['React.js', 'UX/UI', 'Front-End Dev', 'Figma']}
            />
            <ProjectVideo videoType='Demo'>
                <iframe src="https://www.youtube.com/embed/QF6VGaS18EQ?si=56xLnI6-lm3p3nlO" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectFeatures
                features={[
                    '📅 Functional table reservation form with validation and confirmation feedback',
                    '🧭 Intuitive navigation with persistent header and smooth scrolling',
                    '🛠️ Built with React, leveraging component-based architecture',
                    '📤 Form submission handling with dynamic user input and error management'
                ]}
                techStack={[
                    'React',
                    'html',
                    'css',
                    'Figma'
                ]}
            />
            <ProjectGallery
                galleryMedia={[
                    CoverImage,
                    WebScreenshot00,
                    WebScreenshot01,
                    UserPersona,
                    FigmaLofiWireframe,
                    FigmaElements,
                    FigmaPrototype
                ]}
            />
            <ProjectImprovements
                improvements={[
                    'Add more occasion options to the reservation form',
                    'Submit reservation data to a connected database',
                    ' Enhance mobile responsiveness for a better user experience'
                ]}
            />
            <ProjectGitHub link='https://github.com/CamiloMedel/LittleLemon-Capstone'/>
        </main>
    )
}

export default LittleLemonWebsite;