import './ProjectProcess.css'

function ProjectProcess({ title='Process', children }) {
    return (
        <section className='project-process'>
            <h1 className='title'>{title}</h1>
            {children}
        </section>
    )
}

export default ProjectProcess;