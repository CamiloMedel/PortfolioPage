import './ProjectHeadline.css';
import Tag from '../../../Tag'

function ProjectHeadline( { title, description, coverImage, projectSpecs , tags} ){
    return (
        <section className="project-headline">
            <div className='text-image-container'>
                <img src={coverImage}/>
                <div className='text'>
                    <h1 className='title'>{ title }</h1>
                    <p className='description'>{description}</p>
                </div>
            </div>
            <ul className='specifications'>
                <li>
                    <h3>Project Type</h3>
                    <p>{projectSpecs.type}</p>
                </li>
                <li>
                    <h3>Role</h3>
                    <p>{projectSpecs.role}</p>
                </li>
                <li>
                    <h3>Duration/Date</h3>
                    <p>{projectSpecs.duration}</p>
                </li>
            </ul>
            <ul className='tags'>
                {tags.map((tag) => {
                    return <li><Tag label={tag}/></li>
                })}
            </ul>
        </section>
    )
}

export default ProjectHeadline;