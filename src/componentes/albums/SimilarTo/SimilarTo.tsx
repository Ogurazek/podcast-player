import styles from './estilosSimilarTo.module.css'

const ALBUMS = [
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/4c1f/a2a8/fcf69abd4766368f33dac562e6a2dd5e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cicNC3kdglNe1wIPiDxPh5Lx6drXSZbB~CYT51kllUEL1bZaVCqbH7X7Wva9oXOrv-xmfNNxElqFDUt35iak-SVQ8hLGPdJ5oiguVi~nim9WIN9ywjL~kQs9Xu5jSWveWaU46m8qBsxi89ZETWEFS5HaH-ekYw1evaELegKuHTTcfoBsvSXb9NHSSr1B7HSEtq0fU92~YcobgPdsbj7A7hrWwgF9tTBWKCXxojm9L3c3OtqsDNjiQTsil3d9vq3c14QrPxiZsrzJcOVTGT7rdw53qhFXyXZazsq9zt2E0Gs3aSqjzqCK2mWRyQWct79-GM4iyPyNRqLPTbVMCM809g__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/6cfa/5e98/6de9b90b2be41fb90198c20182140559?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VF9lyYky9ddFUo~5h7H2FSFz9EwekZWI-0jug~YM3HGQl0foQqvwxoWDMT6sqmWEUnlN8imGlTcGJ1aMU8Hx1sxeivo2I-Si~lFacgml2PryMwAdND5Q6ZP0QCB-kBqJkQH-LijJiXiPeJVElu-gUWR2~tD3KC7DSOYpTjOT7iBhOF~mtrNkX~dUQRx307eXdws3EVphDp6aM5ZupqaY96MVprR71XE1fKAMDEeWkIfmS9dN3Gf7wjfzr1RALDT1lS1XYXRsaczbDCCWWfZn8xO2367mrVNHGH38SZmzcdTf050YvrXpEDKu4p7cUrZtDQjR~6jOxbQWZ-Dsfh1Tog__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/2bf1/b9e7/2fdd95764cc5656f88143c8dbfdfd776?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1jH-OAXpxJuAIUfb9y66pyt1-XStUtfm7NGiT5NQADOJrOCodgoRPHOBhPrK0xyNR618P3anYhGFGos6rL30FY6l0opns6WsvU9UaM2up7W5N12EVnY1Rb9iSVK1Yi5RekC-WnzMBYQcR18OLK4KAmTfhq4YJ5UyXbOM0i9UI~UQWxWlRoGyLPclfx9-fXMaTC8Ih~Jt6zODOtSdlhx5LDGpfSPYFK9zOFToi8rGbWbVhv7De1yq5uoirZi0akuAdQYWnarwsBkmSzDEizJfkiB6oa9sLQvTkdU4zgiphtdMIaIJCLrnopI2jdSVuzXPgXA~aYLQglWBMvmyC6DPA__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/6f5b/eae9/f93769510c157cde7d6ae1c7c0a69df4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdIX33QeLJFcXMPka44FchZGP1Z5vJeWOA0nX-nfhqCDJ33qrwyiMhZg1-s7tiTlhExfDlgfNzZESjsLBiE~V03VZWwc5qTPnPtMVSfNrqy-bSfJhFDCd2MxngY3KWcNNtF3WWxo7h4meq6fO2LMuNEXhc3zP6yA8MOhYpLJwZKSPov3uPdCYkMM9t1~pEDx~V8e-tNZMHmCnqCpAx3~cXNitl28mV5gQsHFPFe17H0NwP8fO1sfvwNPWZr~WcHzKYCZ2milli6LCKoXmg4gtyDqJTO-C9Sqrl2X7orJ4ZqHmUOtAk5XfGSuGLa8WBfrvZuMRQz8qNmGqUMNsJb7~g__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/1b83/3a8a/36fa079ab99ff09b79d558f10877e489?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZA60d1dq3rIj6U8DouL095A0rBVrdP4o2XWbI9nNcSWJu0zO74HORm98N4lwLtrPYwj3~kefISszMz3jGQHTtTX6lPOP2PHIVtOrQtPsZuWx-hGAyJHrzay8hNjiN4BTnMkX4wkwMnHk4YCzewS6Gawu9QMb2wA3Qz4dsxlC7bJGA1moRbqdrxO~DREUDGyuzZ9IPmhWj-X5mrCkHO-aFddCxeCGcKlXgNdiUYCclFRbrrWyR6fP3MJ6wRSw9vs8iYT8qCmssvYOHC1AitlTzCs9EKm9IP1DXsmtlLaeH-3lesFc9rDCa0ifLrUXgsDHjPzoxhEx4geOUMPOaMs9Ug__',
    },

  ];


type Props = {
  nombre: string;
  imagen: string;
  info: string;
 } 

function Card(props: Props) {
  const { nombre, imagen, info } = props;
  return (
    <>
        <div className={styles.containerInfoAlbum}>
          <div className={styles.containerPortada}>
            <img src= {imagen}alt="" />
          </div>
        <div className={styles.containerNombre}>
            <h5>{nombre}</h5>
        </div>
        <div className={styles.containerInfo}>
          <p>{info}</p>
        </div>
        </div>
    </>
  );

}


function SimilarTo() {
  return(
    <div className={styles.containerAlbum}>
    {ALBUMS.map((album) => {
      return (
        <Card
          nombre={album.nombre}
          imagen={album.imagen}
          info={album.info}
        />
      );
    })}
    </div>
  );
}





export default SimilarTo;