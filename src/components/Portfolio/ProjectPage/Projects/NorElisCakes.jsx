import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";

import CoverImage from '../../../../assets/NorElisCakesCoverPhoto.png';
import presentationPhoto from '../../../../assets/NorElisCakes/NorElisCakes-Presentation.png'
import ProjectGallery from "../../PortfolioSections/PortfolioTemplates/ProjectGallery";
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";
import ProjectImprovements from "../../PortfolioSections/PortfolioTemplates/ProjectImprovements";
import ProjectGitHub from "../../PortfolioSections/PortfolioTemplates/ProjectGitHub";

let projectSpecifications = {
    type: 'iOS Application',
    role: 'Solo Developer & Design',
    duration: 'May 2025 (3 weeks)'
}

function NorElisCakes() {
    return (
        <main>
            <ProjectHeadline
                title='NorElisCakes'
                description='iOS e-commerce mock/demo app for browsing, customizing, and ordering cakes from NorElisCakes. Developed using Swift and UIKit,
                the app features a dynamic customization screen, a scalable architecture that makes it easy to add new cakes, and Core Data integration
                for persistent cart management. Users can update their cart in real-time with smooth, responsive interactions. This project deepened my
                expertise in iOS development, front-end design, and building maintainable, user-focused applications.'
                coverImage={CoverImage}
                projectSpecs={projectSpecifications}
                tags={['iOS Dev', 'Swift', 'UIKit', 'Storyboard']}
            />
            <ProjectVideo videoType='Demo'>
                <iframe src="https://www.youtube.com/embed/27FeBWInk38?si=1DKnJh4NrRnW-Lrg" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <ProjectFeatures
                features={[
                    '🍰 Browse a catalog of customizable cakes',
                    '🧁 Choose flavors, decorations, and more',
                    '💾 Cart data is saved using Core Data, so users can exit and revisit later',
                    '⚙️ Easily add new cakes to the menu by updating the Cake Repository — no UI changes needed',
                    '📱 Built with UIKit and Storyboard'
                ]}
                techStack={[
                    'Swift',
                    'UIKit',
                    'Storyboard',
                    'Xcode 16.2',
                    'Core Data',
                    'Canva (for designing)'
                ]}
            />
            <ProjectGallery
                galleryMedia={[
                    CoverImage,
                    presentationPhoto
                ]}
            />
            <ProjectImprovements
                improvements={[
                    'Add payment integration',
                    'User accounts and order history',
                    'Backend database with Firebase for real orders and authenticated accounts'
                ]}
            />
            <ProjectGitHub link='https://github.com/CamiloMedel/NorElisCakes-iOS'/>
        </main>
    )
}

export default NorElisCakes;