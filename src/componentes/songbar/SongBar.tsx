import { useState, useEffect } from "react";
import styles from './estilosSongBar.module.css';
import { Pause, SkipBack, Play, SkipForward, ThumbsDown, ThumbsUp, Ellipsis, Repeat2, Volume2, ChevronDown } from 'lucide-react';
import { useAudioPlayer } from "../../hooks/ApiHook"; 

type Props = {
    titulo: string;
    subtitulo: string;
    tiempo: string;
    portada: string;
    handleButtonPausePlay: () => void;
}

function SongBar({ titulo, subtitulo, tiempo, portada, handleButtonPausePlay }: Props) {
    const { playingClipId, audioRefs } = useAudioPlayer();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    
    useEffect(() => {
        if (playingClipId !== null && audioRefs.current[playingClipId]) {
            setIsPlaying(!audioRefs.current[playingClipId].paused);
        }
    }, [playingClipId, audioRefs]);

    return (
        <div className={styles.container}>
            <div className={styles.containerSecundario}>
                <div className={styles.containerPlay}>
                    <div className={styles.containerBotonIz}>
                        <a href=""><SkipBack /></a>
                    </div>
                    <div className={styles.containerBotonPlay}>
                        <button onClick={() => { 
                            handleButtonPausePlay(); 
                            setIsPlaying(!isPlaying); 
                        }}>
                            {isPlaying ? <Play /> : <Pause />}
                        </button>
                    </div>
                    <div className={styles.containerBotonDer}>
                        <a href=""><SkipForward /></a>
                    </div>
                    <div className={styles.containerMinutos}>
                        <p>{tiempo}</p>
                    </div>
                </div>
                <div className={styles.containerMid}>
                    <div className={styles.containerPortada}>
                        <img src={portada} alt="" />
                    </div>
                    <div className={styles.containerInfoBar}>
                        <div className={styles.containerSectionOne}>
                            <div className={styles.containerInfoBarTitulo}>
                                <p>{titulo}</p>
                            </div>
                            <div className={styles.containerInfoBarSubtitulo}>
                                <p>{subtitulo}</p>
                            </div>
                        </div>
                        <div className={styles.containerSectionTwo}>
                            <div className={styles.containerBotones}>
                                <div className={styles.botonDislike}>
                                    <a href=""><ThumbsDown /></a>
                                </div>
                                <div className={styles.botonLike}>
                                    <a href=""><ThumbsUp /></a>
                                </div>
                                <div className={styles.botonConfig}>
                                    <a href=""><Ellipsis /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerDerecho}>
                    <div className={styles.containerBotonRep}>
                        <a href=""><Repeat2 /></a>
                    </div>
                    <div className={styles.containerBotonVol}>
                        <a href=""><Volume2 /></a>
                    </div>
                    <div className={styles.containerBotonArrow}>
                        <a href=""><ChevronDown /></a>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default SongBar;