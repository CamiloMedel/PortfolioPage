import { useParams } from 'react-router';
import GolfAndGait from '../ProjectPage/Projects/GolfAndGait'
import NorElisCakes from './Projects/NorElisCakes';
import LittleLemonWebsite from './Projects/LittleLemonWebsite';
import Run from './Projects/Run';

function ProjectPage(){
    const { projectId } = useParams();
    const projects = {
        'golf-and-gait': <GolfAndGait/>,
        'noreliscakes': <NorElisCakes/>,
        'littlelemon': <LittleLemonWebsite/>,
        'run': <Run/>
    }

    return projects[projectId] || <p>Project not found.</p>;
}

export default ProjectPage