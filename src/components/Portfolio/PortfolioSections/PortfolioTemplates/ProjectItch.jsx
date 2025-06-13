import './ProjectItch.css'

function ProjectItch({ link }) {
    return (
        <section className='project-itch'>
            <h1 className='title'><i class="fa-brands fa-itch-io"></i> itch.io</h1>
            <p>Find the playable project here on itch.io <a href={link} target='_blank'>itch.io Project Page</a></p>
        </section>
    )
}

export default ProjectItch;