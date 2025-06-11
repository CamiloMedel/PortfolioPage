import './ProjectTeamContact.css';

function ProjectTeamContact({ teamMembers }){
    return (
        <section className="team-contact">
            <h1 className="title">Team Contact</h1>
            <ul>
                {teamMembers.map((member) => {
                    return (
                        <li className="member-entry">
                            <span>{member.fullName} - </span>
                            <span>{member.role} - </span>
                            <span><a href={member.contact} target="_blank">{member.contact != '' ? 'LinkedIn' : ''}</a></span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ProjectTeamContact;