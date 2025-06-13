import ProjectHeadline from "../../PortfolioSections/PortfolioTemplates/ProjectHeadline";
import ProjectVideo from "../../PortfolioSections/PortfolioTemplates/ProjectVideo";
import ProjectFeatures from "../../PortfolioSections/PortfolioTemplates/ProjectFeatures";

import PeccaryFoodRunCoverPhoto from '../../../../assets/PeccaryFoodRun/PeccaryFoodRunCoverPhoto.png'

let projectSpecifications = {
    type: 'Research Based Prototype',
    role: 'Solo Developer',
    duration: '2 Weeks'
}

function PeccaryFoodRun() {
    return (
        <main>
            <ProjectHeadline
            title='Peccary Food Run'
            description='Peccary Food Run is a 2D Unity prototype created as part of a collaborative research-based project on environmentalism in the Amazon Rainforest. While the group selected a shared topic, each member conducted individual research and designed their own prototype. I focused on the White-Lipped Peccary — a near-threatened species known for crop raiding and complex herd behavior.'
            coverImage={PeccaryFoodRunCoverPhoto}
            projectSpecs={projectSpecifications}
            tags={['Unity', 'C#', 'Game Design', 'Aseprite']}
            />
            <ProjectVideo videoType='Gameplay'>
                <iframe src="https://www.youtube.com/embed/VAEk7nB2278?si=5TpyzQOdrUxnAkB0" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ProjectVideo>
            <div className="project-gameplay-text" style={{width: '80%', margin: 'auto', fontSize: '1.1rem', paddingTop: '40px', paddingBottom: '40px'}}>
                <h1 className="title" style={{border: 'none'}}>Gameplay Description</h1>
                <p>You play as the leader of a peccary herd, navigating through the rainforest in search of maize crops. The herd follows behind you in a snake-like formation, constantly moving forward.</p>
                <ul style={{listStyle: 'none'}}>
                    <li>🌽 Goal: Eat enough maize crops without being detected</li>
                    <li>👀 Challenge: Avoid patrolling farmers who rotate in 360° to spot intruders.</li>
                    <li>💥 Consequence: If any peccary is seen, a chase sequence begins. If the farmer catches part of your trail, it cuts off that peccary and all those behind it. Lose the entire herd, and it’s game over.</li>
                </ul>
            </div>
            <div className="process-presentation" style={{width: '100%', backgroundColor: '#191819', paddingTop: '40px', paddingBottom: '40px'}}>
                <h1 className="title" style={{border: 'none', textAlign: 'center', color: 'white'}}>Process Presentation</h1>
                <iframe loading="lazy" style={{width: '80%', margin: 'auto', aspectRatio:'16/9', display: 'block'}}
                src="https://www.canva.com/design/DAGqRVJ9_LM/D8dNyeU8b5Xq2xy2VzqAUg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen" frameBorder="0"></iframe>
            </div>
            <ProjectFeatures
            features={[
                '🐍 Snake-inspired movement with herd-following mechanics',
                '🚶‍🌾 Enemy patrol and intense chase sequences',
                '📚 Educational lens on environmental conflict and wildlife behavior'
            ]}
            techStack={['Unity', 'C#', 'Aseprite', 'Research from peer-reviewed environmental studies']}
            />
        </main>
    )
}

export default PeccaryFoodRun;