import styles from './estilosRecommendedAlbums.module.css'    


type RecommendedAlbumsProps = {
  audioClips: Array<any>;
  handlePlayClip: (id: number) => void;
  audioRefs: React.RefObject<Record<number, HTMLAudioElement | null>>;
};

function RecommendedAlbums({ audioClips, handlePlayClip, audioRefs }: RecommendedAlbumsProps) {
  if (!audioClips.length) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className={styles.containerAlbum}>
      {audioClips.map((clip) => (
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




export default RecommendedAlbums;


