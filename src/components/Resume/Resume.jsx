import { useEffect, useRef } from 'react';
import './Resume.css'
import gameplayVideo from '../../assets/BoomAndCatchGameplay.mp4'

function Resume(){
    const videoRef = useRef(null);
    const gameDesignResumeTileRef = useRef(null);

    useEffect(() => {
        const gameDesignResumeTile = gameDesignResumeTileRef.current;

        const handleHover = () => videoRef.current.play();
        const handleLeave = () => videoRef.current.pause();

        gameDesignResumeTile.addEventListener("mouseenter", handleHover);
        gameDesignResumeTile.addEventListener("mouseleave", handleLeave);

        return () => {
            gameDesignResumeTile.removeEventListener("mouseenter", handleHover);
            gameDesignResumeTile.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <main className='resume-container'>
            <div ref={gameDesignResumeTileRef} className='game-design-resume'>
                <video ref={videoRef} src={gameplayVideo} muted loop playsInLine className='video-background'/>
                <div className='resume-content'>
                    <h1 className='title'>Game Design & Development</h1>
                    <a href='https://drive.google.com/file/d/18MhOlR5hxJHW1a_6dgtmWMVK7-SrFFe5/view?usp=sharing' target='_blank'>Resume</a>
                </div>
            </div>
            <div className='tech-resume'>
                <div className='resume-content'>
                    <h1 className='title'>iOS & Front End Development</h1>
                    <a href='https://drive.google.com/file/d/1zPFow5GNsGcLjOkzXaDOTDIWXiP_hCce/view?usp=sharing' target='_blank'>Resume</a>
                </div>
            </div>
        </main>
    )
}

export default Resume