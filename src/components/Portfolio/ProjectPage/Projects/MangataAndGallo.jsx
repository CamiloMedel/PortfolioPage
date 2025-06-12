import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";
import ProjectGitHub from "../../PortfolioSections/PortfolioTemplates/ProjectGitHub";
import ProjectGallery from "../../PortfolioSections/PortfolioTemplates/ProjectGallery";

import CoverImage from '../../../../assets/MangataAndGallo/MangataAndGalloCoverPhoto.JPG';
import BottomOfPage from '../../../../assets/MangataAndGallo/BottomOfPage.JPG';
import MediumScreenVersion from '../../../../assets/MangataAndGallo/MediumScreenVersion.JPG';
import SmallScreenVersion from '../../../../assets/MangataAndGallo/SmallScreenVersion.JPG';

let projectSpecifications = {
    type: 'Responsive WebPage',
    role: 'Front-End Developer',
    duration: 'September'
}

function MangataAndGallo() {
    return (
        <main>
            <ProjectHeadline
                title='Mangata & Gallo'
                description='A responsive homepage for a fictional jewelry store, Mangata & Gallo, designed as part of the "HTML and CSS in Depth" course in the Meta Front-End Developer Specialization.

                This project focuses on clean, semantic HTML structure and modern CSS styling techniques. It features elegant layout design, custom typography, and responsive elements to reflect the luxury branding of the store.'
                coverImage={CoverImage}
                projectSpecs={projectSpecifications}
                tags={['Front-End Dev', 'UX/UI']}
            />
            <ProjectVideo videoType='Demo'>
                <iframe src="https://www.youtube.com/embed/V9Vkhnbh6Y4?si=xnNVEo5ZH31dt-xz" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectFeatures
                features={[
                    '💻 Hand-coded with semantic HTML5 and modular CSS',
                    '📱 Responsive design optimized for various screen sizes',
                    '✒️ Custom font integration and brand-consistent styling',
                ]}
                techStack={[
                    'html',
                    'css'
                ]}
            />
            <ProjectGallery
                galleryMedia={[
                    {src: CoverImage, alt: 'Screenshot of Mangata & Gallo homepage from the hero section'},
                    {src: BottomOfPage, alt: 'Screenshot of Mangata & Gallo homepage from the bottom of the page'},
                    {src: MediumScreenVersion, alt: 'Mangata & Gallo homepage appearance on medium sized screens'},
                    {src: SmallScreenVersion, alt: 'Mangata & Gallo homepage appearance on small sized screens'}
                ]}
            />
            <ProjectGitHub link='https://github.com/CamiloMedel/Mangata-Gallo'/>
        </main>
    )
}

export default MangataAndGallo;