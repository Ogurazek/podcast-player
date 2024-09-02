
import styles from './estilos.module.css';




function Header() {
 return ( 
    <>
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <a href=""></a>
            </div>
                <div className={styles.containerBuscadorImagen}>
                    <div className={styles.containerBuscador}>
                        <p>Buscar...</p>
                    </div>
                    <div className={styles.containerPerfil}>
                            <img src="https://imgs.search.brave.com/9kQD-EzV98YFZIlsU68CE0ABjTib5zKpjeu7gmPS9eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9weHB1/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDIvbWVz/c2ktcGFyYS1mb3Rv/LWRlLXBlcmZpbC0x/MDI0eDEwMjQuanBn" alt="" />
                    </div>
                </div>
        </div>
        

       
        
    </>
 );
}


export default Header;