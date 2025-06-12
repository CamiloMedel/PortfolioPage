import { useParams } from 'react-router';
import GolfAndGait from '../ProjectPage/Projects/GolfAndGait'
import NorElisCakes from './Projects/NorElisCakes';
import LittleLemonWebsite from './Projects/LittleLemonWebsite';
import Run from './Projects/Run';
import WebDevJourney from './Projects/WebDevJourney';

function ProjectPage(){
    const { projectId } = useParams();
    const projects = {
        'golf-and-gait': <GolfAndGait/>,
        'noreliscakes': <NorElisCakes/>,
        'littlelemon': <LittleLemonWebsite/>,
        'run': <Run/>,
        'web-dev-journey': <WebDevJourney/>
    }

    return projects[projectId] || <p>Project not found.</p>;
}

export default ProjectPage