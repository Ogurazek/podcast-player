import styles from './estilosInicio.module.css'
import ListenAgain from '../albums/ListenAgain/ListenAgain'
import SimilarTo from '../albums/SimilarTo/SimilarTo'
import QuickPicks from '../albums/QuickPicks/QuickPicks'
import RecommendedAlbums from '../albums/AlbumsRecomendados/RecommendedAlbums'
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';


function Inicio() {
    return ( 
       <>
           <div className={styles.container}>
                <div className={styles.containerSecundario}>
                    <div className={styles.bloques}>
                    <Barra 
                    subtitulo = "Sufyan Alli"
                    titulo = "Listen Again"
                    />  
                            <ListenAgain />
                    <Barra 
                    subtitulo = "Similar To"
                    titulo = "Akon"
                    />  
                    <SimilarTo/>
                    <Barra 
                    subtitulo = "Start Radio From Song"
                    titulo = "Quick Picks"
                    />  
                    <QuickPicks/>
                    <Barra 
                    titulo = "Recommended Albums"
                    />  
                    <RecommendedAlbums/>
                    
                    </div>
                </div>
           </div>
       </>
    );
   }



type Props = {
    titulo?: String;
    subtitulo?: String;
}

const src = 'https://s3-alpha-sig.figma.com/img/83fb/3e04/056cc892636460bee5791aa3f243854c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFQnmYqgedIRLCRlya-OmDpPlsctKGHVHy-iOdkLmjSypGUFSQpOgiBX4ZxBvcDnTQC0SVVbtmzCSp8qPr4Tv7r~SsfTxRJcDjqdRPfCAJLzTg8jeH3~l5ff5d-GTZmz6VcdiQ2SVn989qz6VxXfK2uSHBwgaK1Iohafmt5ZSnK3t~nC9w2-4y~f9mYzBNlV2ckn-c-cMk9INfBqIXmmvrJYed3d4mzETHUettmTyB9yQGW1nCxVotiHOmYXc4P9z-eyC0BBQY~T9YVuS~DNU29vxvTlO1eH4yYKyDKwB6~iAG0yhj6GVILY67FZ3HCUjprLJsnNUrfiouSrgE0pyA__'

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

export default Inicio;