import './ProjectProcess.css'

function ProjectProcess({children}) {
    return (
        <section className='project-process'>
            <h1 className='title'>Process</h1>
            {children}
        </section>
    )
}

export default ProjectProcess;