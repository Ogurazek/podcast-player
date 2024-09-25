import styles from './estilosListenAgain.module.css';
import { useAudioPlayer } from "../../../hooks/ApiHook";

type ListenAgainProps = {
  audioClips: Array<any>;
  handlePlayClip: (id: number) => void;
  audioRefs: React.RefObject<Record<number, HTMLAudioElement | null>>;
};

function ListenAgain({ audioClips, handlePlayClip, audioRefs }: ListenAgainProps) {
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

