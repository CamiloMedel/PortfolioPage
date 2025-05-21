const tagColors = {
    'Team Project': 'GoldenRod',
    'Unity': 'Green',
    'C#': 'DarkSeaGreen',
    'Game Design': 'DarkOliveGreen',
    'React.js': 'Blue',
    'UX/UI': 'LightBlue',
    'Front-End Dev': 'CornflowerBlue',
    'iOS Dev': 'DarkOrchid',
    'Swift': 'DarkSlateBlue',
    'UIKit': 'DarkMagenta',
    'Storyboard': 'Violet'
}

function Tag({label}) {
    const backgroundColor = tagColors[label]
    const tagStyle = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '2px 7px',
        fontWeight: 'bold',
        minWidth: '60px',
        textAlign: 'center',
        fontSize: '13px'
    }

    return (
        <span className="tag" style={tagStyle}>
            {label}
        </span>
    )
}

export default Tag