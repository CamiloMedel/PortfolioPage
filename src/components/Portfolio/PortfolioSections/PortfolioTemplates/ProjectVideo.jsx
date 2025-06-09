import './ProjectVideo.css'

function ProjectVideo({ videoType, children }) {
    return (
        <section className="project-video-section">
            <h1 className="title">{videoType}</h1>
            <div className="video-container">
                {children}
            </div>
        </section>
    )
}

export default ProjectVideo;