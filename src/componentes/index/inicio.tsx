import styles from './estilosInicio.module.css';
import ListenAgain from '../albums/ListenAgain/ListenAgain';
import SimilarTo from '../albums/SimilarTo/SimilarTo';
import QuickPicks from '../albums/QuickPicks/QuickPicks';
import PlayListForm from '../forms/playListForms';
import ItemDetails from '../PlayListItem/PlayListItem';
import RecommendedAlbums from '../albums/AlbumsRecomendados/RecommendedAlbums';
import { CircleArrowLeft, CircleArrowRight, Users } from 'lucide-react';
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

function Inicio({ audioClips, handlePlayClip, audioRefs }: HomeProps) {
    return ( 
       <>
           <div className={styles.container}>
                <div className={styles.containerSecundario}>
                    <div className={styles.bloques}>
                        <Barra 
                            subtitulo="Sufyan Alli"
                            titulo="Listen Again"
                        />  
                        <ListenAgain audioClips={audioClips} handlePlayClip={handlePlayClip} audioRefs={audioRefs} />
                        <Barra 
                            subtitulo="Similar To"
                            titulo="Akon"
                        />  
                        <SimilarTo audioClips={audioClips} handlePlayClip={handlePlayClip} audioRefs={audioRefs} />
                        <Barra 
                            subtitulo="Start Radio From Song"
                            titulo="Quick Picks"
                        />  
                        <QuickPicks audioClips={audioClips} handlePlayClip={handlePlayClip} audioRefs={audioRefs} />
                        <Barra 
                            titulo="Recommended Albums"
                        />  
                        <RecommendedAlbums audioClips={audioClips} handlePlayClip={handlePlayClip} audioRefs={audioRefs} />
                    </div>
                </div>
           </div>
       </>
    );
}

const src = 'https://imgs.search.brave.com/9kQD-EzV98YFZIlsU68CE0ABjTib5zKpjeu7gmPS9eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9weHB1/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvbWVz/c2ktcGFyYS1mb3Rv/LWRlLXBlcmZpbC0x/MDI0eDEwMjQuanBn'

function Barra({titulo = "Sin título", subtitulo = "" }: Props) {
    return (
        <>
        <div className={styles.containerListen}>
            <div className={styles.conteinerListenAgain}>
                    <div className={styles.containerPerfil}>
                    <img src={src}/>
                    </div>
                    <div className={styles.tituloSubtitulo}>
                        <div className={styles.subtitulo}>
                            <h6>{subtitulo}</h6>
                        </div>
                        <div className={styles.titulo}>
                            <h4>{titulo}</h4>
                        </div>
                    </div>
             </div>
            <div className={styles.containerBotones}>
                <div className={styles.containerFlechaDerecha}>
                    <a href=""><CircleArrowLeft /></a>
                </div>
                <div className={styles.containerFlechaIzquierda}>
                    <a href=""><CircleArrowRight /></a>
                </div>
            </div>
        </div>
        
        </>
    )
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
                        <a href=""><Users /></a>
                        <p>Home</p>
                    </div>
                    <div className={styles.botonAcordion}>
                        {/* en futuro cambiare esto */}
                        <a href=""><Users /></a>
                        <p>Home</p>
                    </div>
                    <div className={styles.botonAcordion}>
                        {/* en futuro cambiare esto */}
                        <a href=""><Users /></a>
                        <p>Home</p>
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
                            imagen={item.imagen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}



