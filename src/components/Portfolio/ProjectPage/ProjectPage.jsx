import { useParams } from 'react-router';
import GolfAndGait from '../ProjectPage/Projects/GolfAndGait'
import NorElisCakes from './Projects/NorElisCakes';
import LittleLemonWebsite from './Projects/LittleLemonWebsite';
import Run from './Projects/Run';
import WebDevJourney from './Projects/WebDevJourney';
import MangataAndGallo from './Projects/MangataAndGallo';
import FightOfTheJabberwocky from './Projects/FightOfTheJabberowcky';
import BalloonClimber from './Projects/BalloonClimber';
import FiveInFive from './Projects/FiveInFive';
import PeccaryFoodRun from './Projects/PeccaryFoodRun';
import GameAWeek from './Projects/GameAWeek';
import PortfolioWebsite from './Projects/PortfolioWebsite';

function ProjectPage(){
    const { projectId } = useParams();
    const projects = {
        'golf-and-gait': <GolfAndGait/>,
        'noreliscakes': <NorElisCakes/>,
        'littlelemon': <LittleLemonWebsite/>,
        'run': <Run/>,
        'web-dev-journey': <WebDevJourney/>,
        'mangata-and-gallo': <MangataAndGallo/>,
        'fight-of-the-jabberwocky': <FightOfTheJabberwocky/>,
        'balloon-climber': <BalloonClimber/>,
        'five-in-five': <FiveInFive/>,
        'peccary-food-run': <PeccaryFoodRun/>,
        'game-a-week': <GameAWeek/>,
        'portfolio-website': <PortfolioWebsite/>
    }

    return projects[projectId] || <p>Project not found.</p>;
}

export default ProjectPage