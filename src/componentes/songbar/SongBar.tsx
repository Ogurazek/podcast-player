import styles from './estilosSongBar.module.css'
import { SkipBack } from 'lucide-react';
import { Play } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


type Props = {
    titulo: String;
    subtitulo: String;
    tiempo: String;
    portada: String;
}



function SongBar({titulo, subtitulo, tiempo, portada}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.containerSecundario}>
                <div className={styles.containerPlay}>
                    <div className={styles.containerBotonIz}>
                        <a href=""><SkipBack /></a>
                    </div>
                        <div className={styles.containerBotonPlay}>
                            <a href=""><Play/></a>
                        </div>
                            <div className={styles.containerBotonDer}>
                                    <a href=""><SkipForward/></a>
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
                    <a href=""><Repeat2/></a>
                    </div>
                    <div className={styles.containerBotonVol}>
                            <a href=""><Volume2/></a>
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

