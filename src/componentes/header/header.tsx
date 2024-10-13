import { Search } from 'lucide-react';
import styles from './estilos.module.css';




function Header() {
 return ( 
    <>
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <a href=""><img src="/YT.jpg"  /> </a>
            </div>
                <div className={styles.containerBuscadorImagen}>
                    <div className={styles.containerBuscador}>
                        <div className={styles.containerIcono}><Search strokeWidth={1.5} color='#464646'/></div>
                    <input type="text" placeholder='Buscar canciones, álbums, artistas o podcasts'/>
                    </div>
                    <div className={styles.containerPerfil}>
                            <img src="/Profile-image.png" alt="" />
                    </div>
                </div>
        </div>
        

       
        
    </>
 );
}


export default Header;