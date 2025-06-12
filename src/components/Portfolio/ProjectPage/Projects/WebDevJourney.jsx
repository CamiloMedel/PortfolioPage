import BlogHeadline from "../../PortfolioSections/PortfolioTemplates/BlogHeadline";
import ProjectProcess from "../../PortfolioSections/PortfolioTemplates/ProjectProcess";
import ProcessEntry from "../../PortfolioSections/PortfolioTemplates/ProcessEntry";

import WebDevJourneyCoverPhoto from '../../../../assets/WebDevJourney/WebDevJourneyCoverPhoto.png';
import GoogleCertificateWork from '../../../../assets/WebDevJourney/GoogleCertificateWork.JPG';
import freeCodeCampCollage from '../../../../assets/WebDevJourney/freeCodeCampCollage.png';
import MetaProjectsCollage from '../../../../assets/WebDevJourney/MetaProjectsCollage.png';
import PortfolioHomePage from '../../../../assets/WebDevJourney/PortfolioHomePage.JPG';

function WebDevJourney() {
    return (
        <main>
            <BlogHeadline
                title='Web Dev Journey'
                description="A reflective walkthrough of my self-taught web development path—starting with user-centered design principles in the Google UX Design Certificate, building foundational HTML/CSS projects through freeCodeCamp, diving into JavaScript, and completing Meta's Front-End Developer Specialization. This entry showcases key projects I built along the way, highlighting my growth from design thinking to functional front-end development."
                coverImage={WebDevJourneyCoverPhoto}
                datePosted='06/12/2025'
            />
            <ProjectProcess>
                <ProcessEntry
                    title='First Steps'
                    description="My journey into web development began with a curiosity about how people interact with digital products. I was drawn to the idea of crafting experiences that feel intuitive, thoughtful, and user-centered.

                    In June 2022, I took my first big step by enrolling in the Google UX Design Certificate course. Through it, I was introduced to the foundations of user experience design—learning about user-centered design principles, conducting user research, and building wireframes and interactive prototypes for websites and mobile apps. This experience gave me a strong appreciation for the design side of tech and laid the groundwork for everything I would pursue next."
                >
                    <img src={GoogleCertificateWork} alt='Figma wireframes I made as part of the Google UX Program' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='freeCodeCamp'
                    description="In December 2023, I began working through freeCodeCamp’s curriculum while balancing school. I completed the Responsive Web Design and JavaScript Algorithms and Data Structures certifications, which helped me understand how to structure responsive layouts with HTML and CSS and bring interactivity to the browser with JavaScript. It was my first hands-on experience turning designs into working websites, and it gave me the confidence to keep building."
                    mediaOnRight
                >
                    <img src={freeCodeCampCollage} alt='Collage of some of the projects I made while taking freeCodeCamp courses' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title='Diving Deeper with Meta'
                    description="In July 2023, I enrolled in the Meta Front-End Developer Specialization on Coursera to deepen my understanding of front-end technologies. Over the course of several months, I built on my knowledge of HTML, CSS, and JavaScript, while diving into React and modern JavaScript libraries for building dynamic web applications.

                    Balancing the coursework alongside my final year of college and a part-time retail job was challenging—but incredibly rewarding. I completed the specialization in March 2025, and by the end, I felt far more confident in my ability to structure, style, and build responsive, component-based user interfaces from the ground up."
                >
                    <img src={MetaProjectsCollage} alt='Collage of some of the projects I made while completing the Meta Front-End specialization' className="media"/>
                </ProcessEntry>
                <ProcessEntry
                    title="Reflection & What's Next"
                    description="Looking back, this journey has been shaped by steady growth, persistence, and curiosity. Alongside these online programs, I also pursued the Elements of Computing Certificate at UT Austin, which gave me a deeper understanding of programming fundamentals and problem-solving. As I continue developing my skills, I’m now expanding into iOS development, where many of the principles I learned through web development—like component-based design, responsive layouts, and user-first thinking—translate naturally.

                    One of my latest and proudest projects is this very portfolio website, which represents everything I’ve learned so far. It’s been a chance to explore animations, mobile responsiveness, and overall improved UI/UX—bringing my skills to a new level. Whether I’m building for the web or mobile, I’m passionate about creating thoughtful, engaging user experiences, and I’m excited to start a career with all I've learned."
                    mediaOnRight
                >
                    <img src={PortfolioHomePage} alt="Screenshot of my portfolio's home page" className="media"/>
                </ProcessEntry>
            </ProjectProcess>
        </main>
    )
}

export default WebDevJourney;