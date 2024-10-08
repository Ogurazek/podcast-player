import styles from './estilosInicio.module.css';
import ListenAgain from '../albums/ListenAgain/ListenAgain';
import SimilarTo from '../albums/SimilarTo/SimilarTo';
import QuickPicks from '../albums/QuickPicks/QuickPicks';
import PlayListForm from '../forms/playListForms';
import ItemDetails from '../PlayListItem/PlayListItem';
import RecommendedAlbums from '../albums/AlbumsRecomendados/RecommendedAlbums';
import { CircleArrowLeft, CircleArrowRight, Users, Compass, LibraryBig  } from 'lucide-react';
import { useState } from 'react';


type HomeProps = {
  audioClips: Array<any>;
  handlePlayClip: (id: number) => void;
  audioRefs: React.RefObject<Record<number, HTMLAudioElement | null>>;
};

function Home({ audioClips, handlePlayClip, audioRefs }: HomeProps) {
  const [playList, setPlayList] = useState<Array<{ titulo: string; descripcion: string; imagen: string }>>([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <SideBar playList={playList} SetShowForm={setShowForm} />
      <div className={styles.caja}>
        {showForm ? (
          <PlayListForm playList={playList} setPlayList={setPlayList} SetShowForm={setShowForm} />
        ) : (
          <Inicio audioClips={audioClips} handlePlayClip={handlePlayClip} audioRefs={audioRefs} />
        )}
      </div>
    </>
  );
}

function Inicio({ audioClips }: HomeProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerSecundario}>
          <div className={styles.bloques}>
            <Barra subtitulo="Sufyan Alli" titulo="Listen Again" />
            <ListenAgain audioClips={audioClips}  />
            <Barra subtitulo="Similar To" titulo="Akon" />
            <SimilarTo audioClips={audioClips}  />
            <Barra subtitulo="Start Radio From Song" titulo="Quick Picks" />
            <QuickPicks audioClips={audioClips}  />
            <Barra titulo="Recommended Albums" />
            <RecommendedAlbums audioClips={audioClips}   />
          </div>
        </div>
      </div>
    </>
  );
}



function Barra({ titulo = "Sin título", subtitulo = "" }) {
  return (
    <>
      <div className={styles.containerListen}>
        <div className={styles.conteinerListenAgain}>
          <div className={styles.containerPerfil}>
            <img src="/Profile-image.png" />
          </div>
          <div className={styles.tituloSubtitulo}>
            <div className={styles.subtitulo}>
              <span>{subtitulo}</span>
            </div>
            <div className={styles.titulo}>
              <strong>{titulo}</strong>
            </div>
          </div>
        </div>
        <div className={styles.containerBotones}>
          <div className={styles.containerFlechaDerecha}>
            <a href=""><CircleArrowLeft strokeWidth={1}/></a>
          </div>
          <div className={styles.containerFlechaIzquierda}>
            <a href=""><CircleArrowRight strokeWidth={1}/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

type SideBarProps = {
  SetShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  playList: Array<{ titulo: string; descripcion: string; imagen: string }>;
};

function SideBar({ SetShowForm, playList }: SideBarProps) {
  return (
    <div className={styles.containerSideBar}>
      <div className={styles.containerHome}>
        <div className={styles.menuAcordion}>
          <div className={styles.botonAcordion}>
            {/* en futuro cambiare esto */}
            <a href=""><Users strokeWidth={1.5}/></a>
            <span>Home</span>
          </div>
          <div className={styles.botonAcordion}>
            {/* en futuro cambiare esto */}
            <a href=""><Compass strokeWidth={1.5} /></a>
            <span>Explorar</span>
          </div>
          <div className={styles.botonAcordion}>
            {/* en futuro cambiare esto */}
            <a href=""><LibraryBig strokeWidth={1.5} /></a>
            <span>Biblioteca</span>
          </div>
        </div>
      </div>
      <div className={styles.containerBoton}>
        <button onClick={() => SetShowForm(true)} className={styles.boton}>
          Agregar playlist
        </button>
      </div>
      <div className={styles.containerPlay}>
        <div className={styles.containerPlaylist}>
          {playList.map((item, index) => (
            <ItemDetails
              key={index}
              titulo={item.titulo}
              descripcion={item.descripcion}
              imagen={item.imagen || "/imagen.jpg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}