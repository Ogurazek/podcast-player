import styles from './estilosRecommendedAlbums.module.css'    

const ALBUMS = [
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/9db4/4cf6/43e62ad21860d99cd29386c472e3d49a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hf~~dscDhShrS2dupWU1iGhmM9dptEd-3C1qOeBwxXqAfmMdmmArIjmEpklXyXdHuWmRutReHYvOwsb6ZKESbtG3o-PNTH39Zoyy0RZ~KljPOhKY9XrFzG8h9-5dsRbZhzgvhnhBb2h1i-jWo~JoK2trVo~Kkeur3KGwH-yZDzzoTSy0WvBBNrabyUS7XtitFaPAAFx2O2zHQeutmTN576UeffyTCcSe2mJbfYz~TRE~WyCrkEsfdYsn0EkExV~fTRmFPps-15iIwaUKRHqeDcBVonZH3XG8aAibmiqEew~QYToc1fQHbpTVDQaz7nerNk7QS~xj37kRI1FajBvoqg__',
    },
    {
      nombre: 'Song Title',
      info: 'Channel/Artist',
      imagen: 'https://s3-alpha-sig.figma.com/img/e5a7/183b/697b5c47c2737fb8cc17d83f5e4a1882?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPNdatFVqaq18ujGUz~MVzPb57RoVO4d3c0nCKWVlo6YAEE~CBXbuePrwR18gq8NoiFpRS7RzJYF9jBsiVF2QHnG-FZ8j4nWljIw2hp8MlgZtP7MCUEbfBi~yaAcO~QaZ1tldFerDC0YMiiNjC8Lt8EdaARsJ3QHPukNRESiZ9oolDXBEKiMD-z7VUyNQ7dDZ1MAAF~p1tJGRCD3DUSAtNIx8Vq7ixDSJzfbi6RM7URkINj7vUC-tB~fNxUevl1z9N42AoPz87aEGiiwqPHsgtYjOKFTzghtbZ9KcVhJ4xpil8Pg8WZq-eZFQ-T3FOuUPVlkCLJiDYz79gsB66WMgA__',
    },
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/cc14/ec68/69b57d487d0805bb83aa02d8eac8fd8e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofWgkf798wkm6H4cfXHW-IiJYIyOTMN0QuOtyqsuc-xuoFcWGLDAkW49IzFJkrG0o3yPPz8FN0~a21wxHF3iqtXH0LagWYd7bpQaZYEnUrXDIkDC8VKnJonOWJNuPyOGdjp~UoceCgWkVwzfM~HJ1I7QZn95yQQ9n8ksNy1teU~0rd6pBf7MX0PFwkPuHLwBmTujymT~htxmcxdrC0f5HvV0KE3ZEYsY5vMhVIQzG9T-Zoa-xg~nN4NJByjBfls49nCpYBxRIaZva5YmCluFpFV-nIm8KY-dO7B1dXfWsAwJstZRtR~wvLtU5yNpnE-j8BOD5iAg7zKkspDclqlEFg__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/ec0e/06e0/d10ab84cf050df7c759a381b2506bb89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JgHm5lRk0TenJbCSozQ8OlPO67Mz2g8IMhrmxtFQ2WPwKEF1d6FQIPweB~MDeig7OeSJmNvNKEg8caBeRPDQ-IcgFsaThu9nh6YPAfeYuIKj6NCxn3w~w0JuIh5-13hLubLtAg6ZW5~mvrk8axZ12UWQpb8LR12aQHJC2ESlIonimJFp3ukrAyfLDwDTAp4owZ2ZrOkqGi0ViEzJaNGVSjFOqwzScq1Mag--cdS9-Ac~oLzwKr6VOq8ZumGTK6sQ-M-r1v88z8Zm83Qh2WHqyBLXECzO7jIfilkETqjbESVYs7lkrQ9O8Oek5ExCVvnvHWTAuv7IqgR9rj9PbXcThA__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/579b/eaee/3b02630be867dbdbd629e9d32572a9b5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEXeta-xBYRrUCycEXcBXMSsDk-IbWmXiCCRdu-zN0cgoFu9nwwVuZULJbVhBW8oHqDzAoZAlJDkn7dj4xOZdZuRZOWvh9dYFdzMMGxgC5M~o5YcaIXEk4iseNAWB1v0RP5T6lmoIBlStsH2lkq9XwnzREJJuUeeRfbQgSXu14hhEUzjO8x5gwCCJrVYKjc3zvAhX8lbNcdeYdXaALQ4r~lv-5sFDjDjwz2ispviOcBvzhtZSyeU65q642eqjh3f6zyjHzacyw0Cj9dMmedf2xqDRBIktPOqfesP96qjyaaXOA~3YLHM7MsSnQ0nZvbxMcSEKnanoGbsh7EblT6o-w__',
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


function RecommendedAlbums() {
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





export default RecommendedAlbums;