import styles from './estilosListenAgain.module.css'

const ALBUMS = [
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/692e/8125/07e12ccaff200ac1214f42ac2c466f1a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9voX0yC8pH06Here6PZD6cJWBUIL~zfPwscsahOZtV4AYorB~y-w-8Bfl91EkYvSwpYWv4-8z8n0qlkg26r1mO6vhvd5V54x4VuUANUMMLc3L51AvNPOvAG4GZuvqRaTZwBSxlpE3Tq~aRLp0UBV2-3l1~-ErYBLBHuZlwKKy5OuTTpupObNGdAbzPpSSCoi5qfb-4SKOBnXHNObbF4wSJGzwNi~27U-5d0I8ulFcP13S34q3U3hWuE~yxIJoMsCcWj7~Pzw-a~JBGo2~Py-6JXVY6pj7T-WnVsDtRJQLr7Radt~pK0sWgEj6oCGWplTZc60XFEpJdTt12ghaZQFw__',
    },
    {
      nombre: 'Song Title',
      info: 'Channel/Artist',
      imagen: 'https://s3-alpha-sig.figma.com/img/b720/8ee4/92d2f58023ddb67411ab73f18a6358c4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6yAqJnGgitBknMmJL~GDBXD-KnLcHY5RTAeQXbgsjnGHsGbeKns6H602DvmikIHHZyzBkryG~44V9VBlgk3NTo4sImjE5bp19u0XSMFQNirhVQfR7krWLJxJBWtCda1EBDh7oG8hn69wK4dEtoSVTn4ziB1tcFp8sksuFL1-2wPcp7f6fOGVxeuuBqUPqRZwm2Hz3LTAqLwBtC6msZFfVVkqYSD~T38~CuZuRCh2xuFW5Gi50arGGGYS1BZ0tV66iqDz5d~QyerNvUt4kY3ILNvBkjn-DQ79rko~JSIckGhsyx39HyoOdRS2HlINXPE1svG-9PfHleKhivyVmFI0w__',
    },
    {
      nombre: 'Playlist Name',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/36e6/bfb5/58b9b28e29d52bd7f484b799db3341f6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFP8i9oQDPVQwoUKw5qJLfhulqk0PcYTriPpsVmkPpWq3lz1O~Auk80ERRS6K-C31mfFGwrIMugc~NyskctdH1CCrQqZkFDAyuQaPOypVWxzExC0o3ywrnujptmHTOfl8snDIYYSGGVWF9ntmQod09dxX36MgVypxs~-xyLRyNuw24LG8Ft-fY6k027sqDsB-hSxpoobpxMS86v-WxBVzC-It46XGZK3Dcx9ZI2IcXom109AYvdTqxfRoutVxeLmJW-Pw3Jd4zsAMFwX6Zz6U5ECVKA2N72OuGzcEZPG71je2y4VrNdK5B7uFPHxzvTnbJKA6Dk0AYNp12Weu7rjSQ__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/af34/e795/758c2683a632d5521796b21be90d9541?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZRvWYCICPFgALavAqzLU9kWOCNE3dfUJ07MDojY9pNT-oAZqxam-CJlKiV-Z8hRE-wZesAoZG847rvHlRfasmra~QJjjO4IePuIHykxPC~HrC94~rhwlR4Ds0S24tm5WqlYom8Q9TNWcbgU0hUeW2LAkSe3p1hfJKFBsXjTTTIjAeG7WYtnv1QrR22GJDSbNIGQ32xqV3gFxwOOO88QTBknUB-s-~N2q61r9eO49KPtcJTDNlbujNj4ODaJfNeswGE1ZVJThPNOnTfAlseBhXAfIX1qGCnbHGoz77V9NMTkwXU~hyEtNehEk5WLOB3YWY3uFNM9rZWsjHZe5oiFTQ__',
    },
    {
      nombre: 'Song Title',
      info: 'Artist Name',
      imagen: 'https://s3-alpha-sig.figma.com/img/e7ac/3b09/5c5ebc9a905a527c702f7dcbedc13ffd?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAMLROsaP1mXIZi1hjprqJvUT9dIEdIIouGaHtkwMOc08T~in3MalFuh74nayFDnRd5h-tlXuTPA0C-HjCQKYaVQzKBlGrMJB9o98WnnTGlJNRY3nH7q8lpGoPzold23GAXN2~rENvQvvq1HwGJxDR9jvlZha8FPcu8nFItS6xRjwLYXZ93xmIIgkaWeXssvKrelBZMVStRMSLxXVOJNmnAZDXQaU-MAOcVDZJUQjm~7IORT8Ge~rtVrH0j6VHKuYaBkuBEQjPFvXTcMWXsBl7biZ9hTMgTwuD2Dm7Zlp3aey-UFMAPjhqmBya-t4qPO24ZwcckbrKhtMAxd-fcW2w__',
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





