import './HighlightsProjectCard.css'
import Tag from '../../../Tag'

function HighlightsProjectCard({projectInfo}){
    return (
        <div className='highlights-project-card'>
            <img src={projectInfo.coverPhoto}/>
            <div className='highlights-project-card-text'>
                <h2>{projectInfo.title}</h2>
                <p>{projectInfo.description}</p>
                <div className='highlights-tag-container'>
                    {projectInfo.tags.map((label) => {
                        return <Tag label={label}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HighlightsProjectCard