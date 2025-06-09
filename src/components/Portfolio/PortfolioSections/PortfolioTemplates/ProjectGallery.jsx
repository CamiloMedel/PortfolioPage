import './ProjectGallery.css'

function ProjectGallery({ galleryMedia }) {
    return (
        <section className="gallery-section">
            <h1 className='title'>Gallery</h1>
            <div className='media-container'>
                {galleryMedia.map((media) => {
                    return <img src={media}/>
                })}
            </div>
        </section>
    )
}

export default ProjectGallery;