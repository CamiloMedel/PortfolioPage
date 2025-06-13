import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";

import FiveInFiveCoverPhoto from '../../../../assets/5in5/FiveInFiveCoverPhoto.png'

let projectSpecifications = {
    type: 'Rapid Prototyping',
    role: 'Solo Developer',
    duration: '5 Days'
}

function FiveInFive() {
    return (
        <main>
            <ProjectHeadline
                title='5 in 5'
                description='As part of a creative sprint, I challenged myself to ideate, build, and complete five unique Unity projects in five consecutive days. Each day, I focused on a new game design or technical goal, pushing both my creative limits and Unity development skills under tight time constraints.

                This sprint deepened my understanding of Unity’s wide-ranging toolset while reinforcing rapid development workflows. It helped me get better at scoping projects realistically, prioritizing features, and letting creativity lead development.'
                coverImage={FiveInFiveCoverPhoto}
                projectSpecs={projectSpecifications}
                tags={['Unity', 'C#', 'Game Design', 'Ableton', 'Aseprite']}
            />
            <div style={{width: '100%', backgroundColor: '#191819', paddingTop: '40px', paddingBottom: '40px'}}>
                <h1 className="title" style={{border: 'none', color: 'white', textAlign: 'center'}}>Presentation</h1>
                <iframe
                    src="https://docs.google.com/presentation/d/1KhuCjDV6RCbCMqksXanbNNUwOfvAsrQZrNcfKrdZE1c/embed?start=true&loop=false&delayms=5000"
                    frameBorder="0"
                    style={{width: '80%', aspectRatio: '16/9', margin:'auto', display: 'block'}}
                    allowFullScreen
                    title="Five in Five Presentation"
                ></iframe>
            </div>
        </main>
    )
}

export default FiveInFive;