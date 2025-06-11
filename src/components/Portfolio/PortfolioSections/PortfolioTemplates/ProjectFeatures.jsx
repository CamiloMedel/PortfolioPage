import './ProjectFeatures.css'

function ProjectFeatures({ features, techStack }) {
    return (
        <section className="project-features">
            <h2 className='title'>Features</h2>
            <ul className='features-list'>
                {features.map(feature => {
                    return <li>{feature}</li>
                })}
            </ul>
            <h3>Tech Stack</h3>
            <ul className='tech-stack'>
                {techStack.map(feature => {
                    return <li>{feature}</li>
                })}
            </ul>
        </section>
    )
}

export default ProjectFeatures;