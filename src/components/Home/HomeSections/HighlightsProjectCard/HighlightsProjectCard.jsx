import './HighlightsProjectCard.css'
import Tag from '../../../Tag'

function HighlightsProjectCard({projectInfo}){
    return (
        <div className='highlights-project-card'>
            <div className='image-and-text-block'>
                <img src={projectInfo.coverPhoto} alt={`Photo showcasing ${projectInfo.title}`}/>
                <div className='highlights-project-card-text'>
                    <h2>{projectInfo.title}</h2>
                    <p>{projectInfo.description}</p>
                </div>
            </div>
            <div className='highlights-tag-container'>
                {projectInfo.tags.map((label) => {
                    return <Tag label={label}/>
                })}
            </div>
        </div>
    )
}

export default HighlightsProjectCard