const tagColors = {
    'Team Project': 'GoldenRod',
    'Unity': 'Green',
    'C#': 'DarkSeaGreen',
    'Game Design': 'DarkOliveGreen',
    'Game Demo': 'DarkSlateGray',
    'Prototype': 'DarkGreen',
    'Aseprite': 'Pink',
    'Photoshop': 'Orchid',
    'Ableton': 'Red',
    'React.js': 'Blue',
    'UX/UI': 'LightBlue',
    'Front-End Dev': 'CornflowerBlue',
    'Figma': 'DodgerBlue',
    'iOS Dev': 'DarkOrchid',
    'Swift': 'DarkSlateBlue',
    'UIKit': 'DarkMagenta',
    'Storyboard': 'Violet',
    'Blog Post': 'LightSalmon'
}

function Tag({label}) {
    const backgroundColor = tagColors[label]
    const tagStyle = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '3px 10px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '13px',
        borderRadius: '16px',
        whiteSpace: 'nowrap',
    }

    return (
        <span className="tag" style={tagStyle}>
            {label}
        </span>
    )
}

export default Tag