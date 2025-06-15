import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";

import PortfolioWebsiteCoverPhoto from '../../../../assets/PortfolioWebsite/PortfolioWebsiteCoverPhoto.png';
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";
import ProjectImprovements from "../../PortfolioSections/PortfolioTemplates/ProjectImprovements";
import ProjectGitHub from "../../PortfolioSections/PortfolioTemplates/ProjectGitHub";

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