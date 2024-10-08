import styles from './estilosSongBar.module.css';
import { Pause, SkipBack, Play, SkipForward, ThumbsDown, ThumbsUp, Ellipsis, Repeat2, Volume2, ChevronDown } from 'lucide-react';
import { useAudioPlayer } from '../../hooks/ApiHook';
import { useAudioProgress } from '../../hooks/useAudioProgress';  
import { usePlayPause } from '../../hooks/usePlayPause';  

function SongBar() {
  const { currentClip, isSongBarOpen, closeSongBar } = useAudioPlayer();
  const { currentTime, progressPercentage, handleProgressBarClick } = useAudioProgress();
  const { isPlaying, handlePlayPause } = usePlayPause();

  if (!currentClip) {
    return null;
  }

  return (
    <div className={`${styles.container} ${isSongBarOpen ? styles.containerOpen : ''}`}>
      <div className={styles.progressContainer} onClick={handleProgressBarClick}>
        <div className={styles.progressBarBackground}></div>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className={styles.containerSecundario}>
        <div className={styles.containerPlay}>
          <div className={styles.containerBotonIz}>
            <button><SkipBack strokeWidth={1} /></button>
          </div>
          <div className={styles.containerBotonPlay}>
            <button onClick={handlePlayPause}>
              {isPlaying ? <Pause strokeWidth={1} /> : <Play strokeWidth={1} />}
            </button>
          </div>
          <div className={styles.containerBotonDer}>
            <button><SkipForward strokeWidth={1} /></button>
          </div>
          <div className={styles.containerMinutos}>
            <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
          </div>
        </div>

        <div className={styles.containerMid}>
          <div className={styles.containerPortada}>
            <img src={currentClip?.urls.image || "/imagen.jpg"} alt="Portada" />
          </div>
          <div className={styles.containerInfoBar}>
            <div className={styles.containerSectionOne}>
              <div className={styles.containerInfoBarTitulo}>
                <strong>{currentClip?.title || "Título del podcast"}</strong>
              </div>
              <div className={styles.containerInfoBarSubtitulo}>
                <span>{currentClip?.description || "Descripción del podcast"}</span>
              </div>
            </div>
            <div className={styles.containerSectionTwo}>
              <div className={styles.containerBotones}>
                <div className={styles.botonDislike}>
                  <button><ThumbsDown strokeWidth={1} size={25} /></button>
                </div>
                <div className={styles.botonLike}>
                  <button><ThumbsUp strokeWidth={1} size={25} /></button>
                </div>
                <div className={styles.botonConfig}>
                  <button><Ellipsis strokeWidth={1} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerDerecho}>
          <div className={styles.containerBotonRep}>
            <button><Repeat2 strokeWidth={1} /></button>
          </div>
          <div className={styles.containerBotonVol}>
            <button><Volume2 strokeWidth={1} /></button>
          </div>
          <div className={styles.containerBotonArrow}>
            <button onClick={closeSongBar}><ChevronDown strokeWidth={1} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongBar;

