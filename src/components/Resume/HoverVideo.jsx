import { useRef } from 'react';

function HoverVideo({video, className}){
    const videoRef = useRef(null);

    const handleMouseEnter = () => videoRef.current?.play();
    const handleMouseLeave = () => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
    }

    return (
        <video src={video} loop muted playsInline ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={className}/>
    )
}

export default HoverVideo