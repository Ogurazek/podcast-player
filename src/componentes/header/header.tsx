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
                            <img src="https://s3-alpha-sig.figma.com/img/83fb/3e04/056cc892636460bee5791aa3f243854c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFQnmYqgedIRLCRlya-OmDpPlsctKGHVHy-iOdkLmjSypGUFSQpOgiBX4ZxBvcDnTQC0SVVbtmzCSp8qPr4Tv7r~SsfTxRJcDjqdRPfCAJLzTg8jeH3~l5ff5d-GTZmz6VcdiQ2SVn989qz6VxXfK2uSHBwgaK1Iohafmt5ZSnK3t~nC9w2-4y~f9mYzBNlV2ckn-c-cMk9INfBqIXmmvrJYed3d4mzETHUettmTyB9yQGW1nCxVotiHOmYXc4P9z-eyC0BBQY~T9YVuS~DNU29vxvTlO1eH4yYKyDKwB6~iAG0yhj6GVILY67FZ3HCUjprLJsnNUrfiouSrgE0pyA__" alt="" />
                    </div>
                </div>
        </div>
    </>
 );
}

export default Header;