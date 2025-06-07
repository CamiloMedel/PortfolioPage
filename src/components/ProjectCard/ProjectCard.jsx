import { Link } from 'react-router'
import './ProjectCard.css'
import Tag from '../Tag'

function ProjectCard({projectInfo}) {
    return (
        <div className='project-card'>
            <Link to={projectInfo.link}>
                <img src={projectInfo.coverPhoto}/>
            </Link>
            <div className='project-card-text'>
                <h2>{projectInfo.title}</h2>
                <p>{projectInfo.description}</p>
                <div className='tag-container'>
                    {projectInfo.tags.map((label) => {
                        return <Tag label={label}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard