import './ProjectVideo.css'

function ProjectVideo({ videoType, caption, children }) {
    return (
        <section className="project-video-section">
            <h1 className="title">{videoType}</h1>
            <div className="video-container">
                {children}
            </div>
            <p className='video-caption'>{caption}</p>
        </section>
    )
}

export default ProjectVideo;