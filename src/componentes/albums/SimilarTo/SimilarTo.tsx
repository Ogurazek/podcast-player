import styles from './estilosSimilarTo.module.css'

const ALBUMS = [
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/4c1f/a2a8/fcf69abd4766368f33dac562e6a2dd5e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eWsVa5JPRSNfELZNf6NDjJEhYX-dHPryV4nhIho8d8u6LaJrGnO1PQEmBbozBBuPqhEmMGgaXTSpqm5l8or5vWBFqH53y1OKkiVSVrmpoPTp9hHclYhUa9cV6Yy2u3zd6JjzdMtnYr1n3bfppAmAk54~SIz5w0ohgcif56ILaict6d4Xdn5mWnYnwm8AVmEHY4~O8iVN6~GQHoLrw-mQkRrqdFS-ilEsLGSuRfwATXtSSt5XgKKdxFdqBylZfhmaYFhAIXxQatqArBmYJVpAOcTFyMicJP4E9PGQ-Izm6fOmIfCIbKNa~00Bi16YoJrN9bhgA-KwmttRxyehAs~Liw__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/6cfa/5e98/6de9b90b2be41fb90198c20182140559?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3ZFAxCFjo6nJDK62KD-DTrT~jZLEy2DdRehkKbde6zAwrhZ~q2VXxtAbLNjZP5oHk8TXarltQMf4jPoJvblcAUF7Y8M0k2U2PZkzD2XRtQNah7KdL-Y1-GH2FceIALcEPgTbIx3YDlJB~nOGEYbt8-JFkE9n4v~oGlUOG9Y3e8CG8req3waNk--V4fxWMYzciwsQSbKF0VOcrk7~udZFy6q0-3mUjqlb-ddtE3JMfIxKhFiuR2jIQCYRHIkK00HwihACv3G3Uzvaoma014lTDe50hDxV7UdvgWr9Bt11ESCr2nXjY1qI~mNgWNNTlmTmJFCLkvbCLQYa7lpkicWjw__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/2bf1/b9e7/2fdd95764cc5656f88143c8dbfdfd776?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjH02l6Mra8SZVSWaDc6JOcA~uzmrknDtfeWsNkQbyzy6EbCs1gecY1eRZ0bqW1QTYNwbC6sBGAce7ZyObn3-lUKH7sTFUICf7IVgypXgKuAghz6U5nt7IHR3xJJbHGWNKspAOkUO25bVPnfY5TsDBWAwmvPY~Ks8Zjqtyae~FA35BGTN43IGhW0~rj7hXNbQGXiEwmYGVv5GDvSCMMA6uEv20NeAsAhDZV382y1h6Q7YXMsDP6oZnMxd4DZIwzmk052DiQXdCxQTi-xqP5NIWrkpWFgBp5PbVisbfo2CG1UCbFtskJVvuBeIdU1I1tLDtfwW1ByrV-UhfhshSstyg__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/6f5b/eae9/f93769510c157cde7d6ae1c7c0a69df4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eEXPrGqD46eD9OuKn~rBDOLBYbbJz2BYd1UEarw-1Y~qIUNtdQ-eHAdPfHaAU2~6PdEx8Tevf7dKLjdZ5Vt2ILX79UR7Dp~xPUkDE9v0FgOOCQCz62lgEo4rs4xyy45QksFZ4w~Tax94GVS6mh09KTE6mImVuPeznMCS7YU8Kpf1CU3lT~45bmrzIkCkr9f0MEHUEaDf6a-hS7Z0dD4CaazuDQVBobdN5nT8QA81GPkaiUx51W37BL-BBO2hgxZMmVSAdWJd-3sWmwySeFTPfHlgrOMbxCyyuASvunJz4HiIT7tZGBedG2ipN0rOOniAFIDgdJx6BzHxLgZFRAT82g__',
    },
    {
      nombre: 'Listen Again',
      info: '4.5M Suscribers',
      imagen: 'https://s3-alpha-sig.figma.com/img/1b83/3a8a/36fa079ab99ff09b79d558f10877e489?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=js58JH9C80WIwZLx8kcO5Ok7~oYXC~0BtXcGW-sbu9p1MHXpaxemAKC7RW12sr3lof9a3fnBP8Ub3wnmprryKDddcEw0~cLzqIwPtkNDneMnKhh8y9gjFl-d51uCg7W3FxwUTrUSGebDXYZkLhY11FtjdYZ2z~2cWD6kLAIb~Uj8Acqn~9BV1sxKBCHlNzLpIs~LU0GvraFcpURUCQoyIKlgTdbZrN61uXLFrnbgE9yOhtP~Pq6cK~7-cwsLvo2V5la-7OgP3lgFSKDwVl4NDI0fhYh8aLq6y3PUsZi1iC-L~w6MdMiY9BTw63ONxf4Qx9zaFxpVCMZRiUwelXMo2w__',
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