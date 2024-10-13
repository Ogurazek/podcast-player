import styles from './estilosListenAgain.module.css';
import { useAudioPlayer } from '../../../hooks/ApiHook'; 



type ListenAgainProps = {
  audioClips: Array<any>;
};

function ListenAgain({ audioClips }: ListenAgainProps) {
  const { handlePlayClip } = useAudioPlayer(); 

  const limitedClips = audioClips.slice(0, 10);

  if (!audioClips.length) {
    return <img src="/Cargando.svg" alt="Cargando" />;
  }
  

  return (
    
    <section className={styles.containerAlbum}>
    {limitedClips.map((clip) => (
      <article key={clip.id} className={styles.containerInfoAlbum}>
        <div className={styles.containerPortada}>
          <img
            src={clip.channel.urls.logo_image.original || "/podcast-default.jpg"}
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

export default ListenAgain;





// type Props = {
//   nombre: string;
//   imagen: string;
//   info: string;
//  } 

// function Card(props: Props) {
//   const { nombre, imagen, info } = props;
//   return (
//     <>
//         <div className={styles.containerInfoAlbum}>
//           <div className={styles.containerPortada}>
//             <img src= {imagen}alt="" />
//           </div>
//         <div className={styles.containerNombre}>
//             <h5>{nombre}</h5>
//         </div>
//         <div className={styles.containerInfo}>
//           <p>{info}</p>
//         </div>
//         </div>
//     </>
//   );

// }

