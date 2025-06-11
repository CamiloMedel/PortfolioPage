import './ProcessEntry.css'

function ProcessEntry({ children, title, description, mediaOnRight = false }) {
    return (
        <article className={`project-entry ${mediaOnRight ? 'right-side-media' : 'left-side-media'}`}>
            {children}
            <div className='entry-text-container'>
                <h2 className='entry-title'>{title}</h2>
                <p className='entry-description'>{description}</p>
            </div>
        </article>
    )
}

export default ProcessEntry;