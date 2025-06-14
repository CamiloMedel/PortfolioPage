import BlogHeadline from "../../PortfolioSections/PortfolioTemplates/BlogHeadline";

import GameAWeekCoverPhoto from '../../../../assets/GameAWeek/GameAWeekCoverPhoto.png'

function GameAWeek() {
    return (
        <main>
            <BlogHeadline
            title='Game a Week'
            description="As part of my Prototyping course at UT Austin, I participated in a rapid design challenge where we created a brand-new digital game prototype every week. Each week started with a randomly generated prompt, and from there, it was a full sprint—ideating, designing, and producing a playable game by the week's end. This process pushed my creativity, technical skills, and time management to the limit.

            Throughout the semester, I explored a variety of mechanics, genres, and experimental ideas—all while learning to scope effectively and iterate fast. This blog documents each of the weekly prototypes, the design choices I made, and reflections on what worked (and what didn’t).

            Blog is work in progress."
            coverImage={GameAWeekCoverPhoto}
            datePosted='06/13/2025'
            />
        </main>
    )
}

export default GameAWeek;