import './BlogHeadline.css'

function BlogHeadline( { title, description, coverImage, datePosted} ) {
    return (
        <section className="blog-headline">
            <div className='text-image-container'>
                <img src={coverImage} alt={`Photo showcasing ${title}`}/>
                <div className='text'>
                    <h1 className='title'>{ title }</h1>
                    <p className='description'>{description}</p>
                    <p className='date-posted' style={{fontWeight: 'bold'}}>Date Posted: <span style={{fontWeight: 'initial'}}>{datePosted}</span></p>
                </div>
            </div>
        </section>
    )
}

export default BlogHeadline;