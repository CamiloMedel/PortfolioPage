import './ProjectContributions.css'

function ProjectContributions({ contributions }) {
    return (
        <section className="project-contributions">
            <h1 className="title">My Contributions</h1>
            <ul className="project-contributions-list">
                {contributions.map((contribution) => {
                    return <li>{contribution}</li>
                })}
            </ul>
        </section>
    )
}

export default ProjectContributions;