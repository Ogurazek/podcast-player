import styles from './estilosRecommendedAlbums.module.css';
import { useAudioPlayer } from '../../../hooks/ApiHook'; 

type RecommendedAlbumsProps = {
  audioClips: Array<any>;
};

function RecommendedAlbums({ audioClips }: RecommendedAlbumsProps) {
  const { handlePlayClip } = useAudioPlayer(); 

  const limitedClips = audioClips.slice(11, 20);

  if (!audioClips.length) {
    return <img src="/Cargando.svg" alt="Cargando" />;
  }

  return (
    <section className={styles.containerAlbum}>
      {limitedClips.map((clip) => (
        <article key={clip.id} className={styles.containerInfoAlbum}>
          <div className={styles.containerPortada}>
            <img
              src={clip.channel.urls.logo_image.original}
              alt={clip.title}
              style={{ cursor: "pointer" }}
              onClick={() => handlePlayClip(clip.id)} 
            />
          </div>
          <header className={styles.containerNombre}>
            <strong>{clip.title}</strong>
          </header>
          <section className={styles.containerInfo}>
            <span>{clip.description}</span>
          </section>
        </article>
      ))}
    </section>
  );
}

export default RecommendedAlbums;
