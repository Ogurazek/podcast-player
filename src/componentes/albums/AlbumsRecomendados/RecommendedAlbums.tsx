import styles from './estilosRecommendedAlbums.module.css'    

const ALBUMS = [
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/9db4/4cf6/43e62ad21860d99cd29386c472e3d49a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0g3zY4jQkaJa95OWfXw5TMZTFFEL6T2lrggAg0tpOKk1oqLUD~Mu9K056bAeIGtRe0k5LWRH2j~IsDO~WI4J9FdUa38lW2G9JgoXMa7oSMvpudMnY-wosuyVT56KmyQtn4twMNwIkWsi7Y-YutVEp93PdEYhk3626Tkz4TSDZQabYptQbuaTglV8XsxGyqaZcKy7eY2frnlStBkqvnveS4Y2Yomzl1irEaB8pTvIAdjXn4I8tDNM0DUHHbgA7bCxa6KqKwG7-NHehOGYeAukpUzqsQrugfUZEIjzKMogjNHhwoELLgawHk2efEQeA20DuzzMR0jrG~hrX9ZE3xmPw__',
    },
    {
      nombre: 'Song Title',
      info: 'Channel/Artist',
      imagen: 'https://s3-alpha-sig.figma.com/img/e5a7/183b/697b5c47c2737fb8cc17d83f5e4a1882?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWKxXpzx~5mnBE-3WtIO-UT53HtmCRcyS7vmf7xHVzDDsOwZpzAePTOUT-58Ig23BRMiFgzmC4epOWQOT35Bzi0z8kCKOIWmndEmQ1j~l-Vhpyw~XTFDGgsjzqYxPzKoeLSg2lXH1rBx~ZX7xyaSbLak4LdgfdDNsSHJbmGaPQA3GKyHy-bpw0KOELcXimC8pDDosVyCEcs2e1hLDE~fofuZ~61zsDUIj~cwThHVpPJBuYiceMzCtLWkgkUO0UvHgIvtQBtGd3r0BDSvN9nb0aqVdMys~ldMFuYlJBpU34AQAww8L268WwmOdFAh6xl5qiabd90LfDnleFrvgZcw7g__',
    },
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/cc14/ec68/69b57d487d0805bb83aa02d8eac8fd8e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPWhL9EA~TeX3wbUgEANDwxdlDtjWzz2AWY3bJ8d8q6-6rxr9omIU1n5zxwsejz5FsBZSlUi8HtT0RJK2F4dvnn5r~16boUmhAaJgoPEgND~7oEBgvqQdHROiiAyofojSGVnN11liZ30HhNIs9fVxy-5HGGQd4zAfHfz~LPUii41Js9rQDEMvZvfHoaflY3WewF6AAPOuIFHxXM5O5arMy5fmiWjbMi9-s5a-fHT5q6ddJsj56qNSM0H3CJqIK1FoFwpWUykQD1b5gbIWDEuTL7xTZjQGJNIdcBr2ndV~R~xiOGwtkY6M4wWcYMJWswf3SHVG-MmrhlC0REYUMk1ww__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/ec0e/06e0/d10ab84cf050df7c759a381b2506bb89?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ve-g3opfN6ZIFzuboI8c9HtHDJsbHXOgIcmp1T0VASeVUO26pvBddbLaPpSl9yV-yx0XBG1Ak5iQWBqSuw-pLgtqRBOgaOoyFZ~Q3b4vxjN4GV~zRVANP05PssRqgA95U7~BiLBFMa33FFfT5QTyOZ~OEhf2JgmXJkJ70rtAxgRmmbO4M3M6nRQ1KSqJHv2aQBKL0n5w6ks7gE94fGx6ijcFI9~lvga99cAUnkvJyJrPK9ZjNjarwpOYxU80~qK7NmMNch-OYP-xLh0~Dk~y-ws-H5qz6klvP5Y38JypZDdQ3HeqlcOmz2eNldc6uXKHaT6ZPmioCI4fsIrMtjf53A__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/579b/eaee/3b02630be867dbdbd629e9d32572a9b5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCYvIb7zWgTmzQ4fdNuOAr5CuAoSrHeyr60ii3pWCmvvlIc6AxZ7uMq9kxLoH8BRgBWVz92NTnXUzYinbo1Xk0cUvZGhLaE25CgMIi4reoWPwsTu1L30hTS0o9jpFB5JAPHRWC0Ckp3dHvwSLWpmz6JZZg1~0Cao3T3wnwgVYOwpa0x1EcZuIIdBU0tZBK33ubiQQiCxfSZfT0INlzaepuZTjbSB0BtW9VE5Pae2853DUQt2U6gFoPuaYAH~Pxgs6iYkrs6chr7VLjW2dsIlr6kWlMazNamQVip0eRdi3BdYc6TYco84S8vt5xPh~WsTmTcJv40I35wKEmbrzgZDCg__',
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