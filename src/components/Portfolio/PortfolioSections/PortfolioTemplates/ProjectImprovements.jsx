import './ProjectImprovements.css'

function ProjectImprovements({ improvements }) {
    return (
        <section className="project-improvements">
            <h1 className="title">Future Improvements</h1>
            <ul>
                {improvements.map(improvement => {
                    return (
                        <li>{improvement}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ProjectImprovements;