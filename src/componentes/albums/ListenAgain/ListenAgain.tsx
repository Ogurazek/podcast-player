import styles from './estilosListenAgain.module.css'

const ALBUMS = [
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/692e/8125/07e12ccaff200ac1214f42ac2c466f1a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVRbxtTMHoyJoRNGSw2XLwnGJlGnva~4fg~payyj1tU1riZ-cqYx4LqVP78YQnRxEWZEuylxJH-SmRGnnkMNumZWU1GQMt-naGbCSrHjxGu5PEk20fDVf9zIPHatvKijsveqf4zTFrbLj7Opmb93hSzyGwVP1P5SdyjSP0zneETV25rLlR3ouedDL8DonCFY5abwMGefTlpeqx1~s5Lk7mMDJp7nKLwFr9GR~gZ-IBSaO1InyWeBSEVVAs4WGm5lUFNX56xqMwc~SEZL9ULkggh2JpyO0K-5raI6y7hGGvar02MbBaWkF~de3kzCyBAPk8iExQnrD8YITFK32pXiMg__',
    },
    {
      nombre: 'Song Title',
      info: 'Channel/Artist',
      imagen: 'https://s3-alpha-sig.figma.com/img/b720/8ee4/92d2f58023ddb67411ab73f18a6358c4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScACkRqTAMbY~DQjvK0OU8496vJFy4RUS4hhrK~V572NI5hv75D7SNJn4yh1ClyPoEqF-hBLmqhNwj-kvYACwXQbeU7s1RaovURyI~OZwQ2fT2yKgmtrmFidn23-bxjhgYMF-USM-YnBOrn3TpkBASIK2F-EzYV4ot8OtsROsM6lVQLhnIdxGGHI0X4cl82bp-6hATtw-X32X-ALBFlHrTLdgrLF2xion7XZpFnuL1LeqjnNu50FdFhB5x3AsjnWcu4R8Fg9mCe7aGw0ByM~XJ4CLlixbMW2Fc91-NID6cQO17unAJBQube3FjXQdfIOgqFjkSoGDcPN8o4PNoXU~g__',
    },
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/36e6/bfb5/58b9b28e29d52bd7f484b799db3341f6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohThyhzXzW~Ymv7ZagJBgPAXnJc4A6FkjWTLyHvj75-Oi89YLEVGzFGnAYv5xFJEnD1Hj5dbv4YxlHldA6MvRu0NMibbvtEhjp~Roty7C3yrZxdz2IyQ6erzC7wWromBex89dNgCX0NriBP0EWyiszPF3gJR9IyC1XhKaYfn~zPVbmOtgye0Umb2o34~xffEnY8Ds5Qg6S~K2MhonvmXnxJDg41GSsWJcaS1mwSBylvrMWgNWu1iyk8poqUS5LzEN43Klm5zXlx2h~~XS78Z~H9tOXU8BYB~T~HCRI-APJs~aBqa6Al~mFCFGpas34BtHQgwdIAjYjo0cJnTQ4RYgQ__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/af34/e795/758c2683a632d5521796b21be90d9541?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7tfDCnf3aImepe8StahtxZykgyJO9vhVUAVrQ~x5yxpUQVla~gqa9kDYgMC-wEbr5xOpamIASDMbQ8NVOaAG1F1k95cZ2Ny1tkJQENbs3OopQvoeKeQlPeanzmoft0fpOBLtxvNUrSyNKuhyY5RO1gjGg9d-j54HHak7eVpCXd47rko9tYb08LhGSMjflHINJhLTq-2D5jyh5oswI-dUVc-pw6f34v6MemTCJvc50zwT53v5zt9vJnQP2YrBf9rJJUg--pN9w2INKRzS5JNT-hvmjvY7EhrzRjPtEpzbMqgSjIXIEotwH8grMrSq1gfqL0SU7VcWO7AtmRFfe-qCg__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/e7ac/3b09/5c5ebc9a905a527c702f7dcbedc13ffd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYumRL8FqJpIb7vwUv2RqXv6xeoixZXmiQy4Jltsmwnn-Zx3pnvfxHp88bc2bLmU6LyOFtRvfK2rWPAWweMpuwKuUQhV17oAImy1Abvgk8W5veXAtKdCvdmWwT1Eu50y6u2~iLBS4ZReZoDHagRIpK9dAQtzn7EpVNx03tQiYyaiLusWBUzjIQIcGnm8dk9QhZ2CC8lHbrwj6Ur557xpVwO6Ibjim1peoHoRgegGSqmCdgDulEI0RnmGTXnn2jGwIJpL29qsBE~iaL3PkamRUyHugUEQ~3Sw-~M4MtsrkyUUf2xvAfxUqAhXSPFzSc76jC456NBFfPa6tqmUN-ZZIQ__',
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


function ListenAgain() {
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





export default ListenAgain;





