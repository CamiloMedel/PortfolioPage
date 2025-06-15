import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";
import ProjectImprovements from "../../PortfolioSections/PortfolioTemplates/ProjectImprovements";
import ProjectGitHub from "../../PortfolioSections/PortfolioTemplates/ProjectGitHub";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";
import ProjectGallery from "../../PortfolioSections/PortfolioTemplates/ProjectGallery";

import PortfolioWebsiteCoverPhoto from '../../../../assets/PortfolioWebsite/PortfolioWebsiteCoverPhoto.png';
import ResumeDemo from '../../../../assets/PortfolioWebsite/ResumeDemo.gif';
import ResponsiveResume from '../../../../assets/PortfolioWebsite/ResponsiveResume.png';
import ResponsiveProjectPage from '../../../../assets/PortfolioWebsite/ResponsiveProjectPage.png';
import ResponsiveHomePage from '../../../../assets/PortfolioWebsite/ResponsiveHomePage.gif';
import ResponsivePortfolioPage from '../../../../assets/PortfolioWebsite/ResponsivePortfolioPage.gif';

let projectSpecifications = {
    type: 'Website',
    role: 'Solo Developer and Design',
    duration: 'June'
}

function PortfolioWebsite() {
    return (
        <main>
            <ProjectHeadline
            title='Portfolio Website'
            description='This website serves as a central hub for my projects, resume, and blog posts. Built with React and Animate.css, it emphasizes clarity, responsiveness, and personality. The site features dedicated pages for game prototypes, iOS apps, and reflective dev logs — all unified through a clean, minimal design.

            I designed and developed the site from the ground up, balancing functionality with visual polish. It reflects my background in fine arts and computing, blending technical skills with creative design sensibility.'
            coverImage={PortfolioWebsiteCoverPhoto}
            projectSpecs={projectSpecifications}
            tags={['React.js', 'UX/UI', 'Front-End Dev']}
            />
            <ProjectVideo videoType='Demo'>
                <iframe src="https://www.youtube.com/embed/4VCD1KWtlIo?si=fXit4UI2jdrDOYBK" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectFeatures
            features={[
                '📱 Fully Responsive & Mobile-Friendly – Optimized for a seamless experience across devices and screen sizes',
                '🗂️ Project Sections – Organized into Game Projects and Software Projects (iOS and Front-end)',
                '🧩 Custom Project Pages – Each project has its own page, built with reusable React components',
                '🎞️ Smooth Animations – Uses Animate.css to bring dynamic motion to the UI',
                '✉️ Live Contact Form – Functional contact form powered by FormSubmit',
                '📄 Resume Integration – Dedicated resume section with links to view multiple versions',
                '🌐 GitHub Pages Hosting – Deployed and maintained via GitHub Pages'
            ]}
            techStack={[
                'React',
                'React Router',
                'Animate.css ',
                'HTML & CSS',
                'FormSubmit',
                'Vite',
                'GitHub Pages'
            ]}
            />
            <ProjectGallery
            galleryMedia={[
                {src: PortfolioWebsiteCoverPhoto, alt: 'Screenshot of the portfolio website homepage from the hero section'},
                {src: ResumeDemo, alt: 'gif showing interaction with resume blocks in resume page of the portfolio website'},
                {src: ResponsiveResume, alt: 'Screenshot showing how the resume page looks on mobile devices'},
                {src: ResponsiveProjectPage, alt: 'Screenshot of how a project page looks on mobile devices'},
                {src: ResponsiveHomePage, alt: 'gif showing how the home page looks like on mobile devices'},
                {src: ResponsivePortfolioPage, alt: 'gif showing how the portfolio page looks like on mobile devices'}
            ]}
            />
            <ProjectImprovements
            improvements={[
                'Implement tag-based filtering on the portfolio projects page to allow users to quickly sort and find projects by technology, type, or status',
                'Create a separate dedicated page for blog posts instead of mixing them with project entries, improving content organization and navigation',
                'Introduce lazy loading for images and videos to improve page load performance',
                'Incorporate automated testing for key components to ensure robustness'
            ]}
            />
            <ProjectGitHub link='https://github.com/CamiloMedel/PortfolioPage'/>
        </main>
    )
}

export default PortfolioWebsite;