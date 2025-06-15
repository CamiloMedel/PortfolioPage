import './ProjectReflection.css';

function ProjectReflection({ children }) {
    return (
        <section className="project-reflection">
            <h1 className="title">Reflection</h1>
            { children }
        </section>
    )
}

export default ProjectReflection;