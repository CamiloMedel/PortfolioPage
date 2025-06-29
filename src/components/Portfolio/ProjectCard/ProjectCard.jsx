import { Link } from 'react-router'
import './ProjectCard.css'
import Tag from '../../Tag'

function ProjectCard({projectInfo}) {
    return (
        <div className='project-card'>
            <Link to={projectInfo.link}>
                <img src={projectInfo.coverPhoto} alt={`Photo showcasing ${projectInfo.title}`}/>
            </Link>
            <div className='project-card-text'>
                <Link className='project-text-link' to={projectInfo.link}>
                    <h2>{projectInfo.title}</h2>
                </Link>
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