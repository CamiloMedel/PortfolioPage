import './ProjectCard.css'
import Tag from '../Tag'
import { Link } from 'react-router'
import Porfolio from '../Portfolio/Portfolio'

function ProjectCard({projectInfo}){
    return (
        <div className='project-card'>
            <img src={projectInfo.coverPhoto}/>
            <div className='project-card-text'>
                <h2>{projectInfo.title}</h2>
                <div className='tag-container'>
                    {projectInfo.tags.map((label) => {
                        return <Tag label={label}/>
                    })}
                </div>
                <p>{projectInfo.description}</p>
                <p><Link to={projectInfo.componentPage} className='view-link'>View <i class="fa-solid fa-chevron-right"/></Link></p>
            </div>
        </div>
    )
}

export default ProjectCard