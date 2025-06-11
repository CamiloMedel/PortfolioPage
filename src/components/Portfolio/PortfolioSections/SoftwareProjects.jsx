import { useState } from 'react';
import { allSoftwareProjects } from '../../../data/SoftwareProjects';
import ProjectCard from '../ProjectCard/ProjectCard';

function SoftwareProjects() {
    const [activeTags, setActiveTags] = useState([]);

    const toggleTag = (tag) => {
        setActiveTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    const filteredProjects = allSoftwareProjects.filter((project) =>
        activeTags.length === 0 ||  activeTags.every((tag) => project.tags.includes(tag))
    );

    return (
        <section className="projects-section">
            <div className='filter-options'>
            </div>
            <div className='projects-container'>
                {allSoftwareProjects.map((projectInfo) => {
                    return <ProjectCard projectInfo={projectInfo}/>
                })}
            </div>
        </section>
    )
}

export default SoftwareProjects