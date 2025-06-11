import './ProjectGitHub.css';

function ProjectGitHub({ link }) {
    return (
        <section className='project-github'>
            <h1 className='title'><i className="fa-brands fa-github"></i> GitHub</h1>
            <p>Find the project and repository here on GitHub: <a href={link} target='_blank'>GitHub Project Page</a></p>
        </section>
    )
}

export default ProjectGitHub;