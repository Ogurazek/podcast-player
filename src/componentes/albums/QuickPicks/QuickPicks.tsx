import styles from './estilosQuickPicks.module.css'



export default QuickPicks;


type QuickPicksProps = {
  audioClips: Array<any>;
  handlePlayClip: (id: number) => void;
  audioRefs: React.RefObject<Record<number, HTMLAudioElement | null>>;
};

function QuickPicks({ audioClips, handlePlayClip, audioRefs }: QuickPicksProps) {

    const limitedClips = audioClips.slice(0, 16); 

  if (!audioClips.length) {
    return <p>Cargando...</p>; 
  }
  

  return (
    <div className={styles.containerAlbum}>
      {limitedClips.map((clip) => (
        <div key={clip.id} className={styles.containerInfoAlbum}>
          <div className={styles.containerPortada}>
            <img
              src={clip.channel.urls.logo_image.original}
              alt={clip.title}
              style={{ cursor: "pointer" }}
              onClick={() => handlePlayClip(clip.id)} 
            />
          </div>
          <div className={styles.containerNombre}>
            <h5>{clip.title}</h5>
          </div>
          <div className={styles.containerInfo}>
            <p>{clip.description}</p>
          </div>
          <audio ref={(el) => (audioRefs.current[clip.id] = el)}>
            <source src={clip.urls.high_mp3} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}