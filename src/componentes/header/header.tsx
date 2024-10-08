
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
                        <p>Buscar canciones, ábulms, artistas o podcasts</p>
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