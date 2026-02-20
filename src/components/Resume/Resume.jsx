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
                    <a href='https://drive.google.com/file/d/1VAOj9ppFaA1_2N_dfxRfXP0z8hcWG_hJ/view?usp=sharing' target='_blank'>Resume</a>
                </div>
            </div>
            <div className='tech-resume'>
                <div className='resume-content'>
                    <h1 className='title'>Software Engineering</h1>
                    <a href='https://drive.google.com/file/d/1Rh1gJF-PZ9eplNn13G-I5XnRtBFfJoNY/view?usp=sharing' target='_blank'>Resume</a>
                </div>
            </div>
        </main>
    )
}

export default Resume