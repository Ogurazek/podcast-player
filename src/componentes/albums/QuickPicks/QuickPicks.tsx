import styles from './estilosQuickPicks.module.css'

const ALBUMS = [
    {
      nombre: 'Happy',
      info: 'Robbie Williams',
      imagen: 'https://s3-alpha-sig.figma.com/img/e7ac/3b09/5c5ebc9a905a527c702f7dcbedc13ffd?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAMLROsaP1mXIZi1hjprqJvUT9dIEdIIouGaHtkwMOc08T~in3MalFuh74nayFDnRd5h-tlXuTPA0C-HjCQKYaVQzKBlGrMJB9o98WnnTGlJNRY3nH7q8lpGoPzold23GAXN2~rENvQvvq1HwGJxDR9jvlZha8FPcu8nFItS6xRjwLYXZ93xmIIgkaWeXssvKrelBZMVStRMSLxXVOJNmnAZDXQaU-MAOcVDZJUQjm~7IORT8Ge~rtVrH0j6VHKuYaBkuBEQjPFvXTcMWXsBl7biZ9hTMgTwuD2Dm7Zlp3aey-UFMAPjhqmBya-t4qPO24ZwcckbrKhtMAxd-fcW2w__',
    },
    {
      nombre: 'Love Story',
      info: 'John Lennon (of The Beatles)',
      imagen: 'https://s3-alpha-sig.figma.com/img/9c08/fb16/f1449e135ce592b7fb46860f97792e50?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0H9E9fIeBzj-UZY5B2xjBBJo5mkJ45Rqa~r8NzYAjYZTCMnnpsZYX835br-ElV7UBhKj7~qu5hm5j5ck1ZTnjZI-d4Vwrx1-5VLdg99NEbaebB5Ic01pEsWlFfizzOzrY9gcMtIV68reYaSDwm2hHDfBKhSUiI7IGJeOcvuLl~TLciqZb5BXD2egZOlTbYwvk9ZRrcKwfADX0ngvTL8dt-zd0KNO6u1hin8S7qSYxY9kSz0q7rOiiJs0Y3XgR268OtfLenqNRk-ACBad1-CAolEd~Yx-QEovmXGc-7r3IKGXZiXf0HV~gsFC~6bhlrICAcyGeE--7XujGC38JT7Ew__',
    },
    {
      nombre: 'Smooth',
      info: 'Coldplay (fronted by Chris Martin)',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8lu-bo3iJem9w5eZY9wyuT-p4h8~Jg6UUOaR1N5ehHGIxrFjSW3udNSrQyeEtCbrqsY0z2xiLMCzStpVZgytw0BcW5ZCskbWht89sadJpbTQSuU3xTk25dhaMIbF9NGYa2wjwyIh0cmybmEDB-2-~EeO3YVkUl74PYKaiEc7SUrFkEQbaON0KARfSUoG60iybMvztEFOiWES-0NxE6okHm-MK3caXPSzwJBR5McY7p2Jm3cNfU5G1rWinWGsF-9Dw8ijHI0rE6u6PZ3DcXhzJbMU6Um5dqFXlLGELVyjUT-rCFzrXZpXa3IXEs3DZucaF2UVuH6GQfkICJ3AOyipw__',
    },
    {
      nombre: 'Hey, Soul Sister',
      info: 'Sam Smith',
      imagen: 'https://s3-alpha-sig.figma.com/img/9105/9dfd/270384c57d7e8b9f0089d9cca3380a2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4Ec9Zch6JEEroOfrDMLe-qlUXPcUbuCLjmJcHaHPffKfElkCFPJ4s2oKyWXrPTSszX~CU3a3qpozbTkKIvfO8fmtfQGCj-sa2ByhRyGF66Vf12ofeh8sbO5UWIcdiO~gFgAhhojxaXUp4Tg39ozre-elWBzvan-9-lRpQbWbUp1I09VS7YtFK10t61v1wjC3FJbssMHiMmB8RiSyhZ2s5DDK5SYCqfwtDVCUUdUt2bKCV6lpuoUoxyn~bVD03dkt7WJCl3ZP6cdz6LNpOUpPGLawjoi-P0rji5-HQH215Os-JRXu8puT~Qbbj0OaR2KMU5WmnTdij-jnSDsTdSptA__',
    },
    {
      nombre: 'Cheap Thrills',
      info: 'Jessie J',
      imagen: 'https://s3-alpha-sig.figma.com/img/cc14/ec68/69b57d487d0805bb83aa02d8eac8fd8e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofWgkf798wkm6H4cfXHW-IiJYIyOTMN0QuOtyqsuc-xuoFcWGLDAkW49IzFJkrG0o3yPPz8FN0~a21wxHF3iqtXH0LagWYd7bpQaZYEnUrXDIkDC8VKnJonOWJNuPyOGdjp~UoceCgWkVwzfM~HJ1I7QZn95yQQ9n8ksNy1teU~0rd6pBf7MX0PFwkPuHLwBmTujymT~htxmcxdrC0f5HvV0KE3ZEYsY5vMhVIQzG9T-Zoa-xg~nN4NJByjBfls49nCpYBxRIaZva5YmCluFpFV-nIm8KY-dO7B1dXfWsAwJstZRtR~wvLtU5yNpnE-j8BOD5iAg7zKkspDclqlEFg__',
    },
    {
      nombre: 'I Will Always Love You',
      info: 'Coldplay (fronted by Chris Martin)',
      imagen: 'https://s3-alpha-sig.figma.com/img/ec0e/06e0/d10ab84cf050df7c759a381b2506bb89?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JgHm5lRk0TenJbCSozQ8OlPO67Mz2g8IMhrmxtFQ2WPwKEF1d6FQIPweB~MDeig7OeSJmNvNKEg8caBeRPDQ-IcgFsaThu9nh6YPAfeYuIKj6NCxn3w~w0JuIh5-13hLubLtAg6ZW5~mvrk8axZ12UWQpb8LR12aQHJC2ESlIonimJFp3ukrAyfLDwDTAp4owZ2ZrOkqGi0ViEzJaNGVSjFOqwzScq1Mag--cdS9-Ac~oLzwKr6VOq8ZumGTK6sQ-M-r1v88z8Zm83Qh2WHqyBLXECzO7jIfilkETqjbESVYs7lkrQ9O8Oek5ExCVvnvHWTAuv7IqgR9rj9PbXcThA__',
    },
    {
      nombre: 'I Gotta Feeling',
      info: 'George Michael (of Wham!)',
      imagen: 'https://s3-alpha-sig.figma.com/img/b720/8ee4/92d2f58023ddb67411ab73f18a6358c4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6yAqJnGgitBknMmJL~GDBXD-KnLcHY5RTAeQXbgsjnGHsGbeKns6H602DvmikIHHZyzBkryG~44V9VBlgk3NTo4sImjE5bp19u0XSMFQNirhVQfR7krWLJxJBWtCda1EBDh7oG8hn69wK4dEtoSVTn4ziB1tcFp8sksuFL1-2wPcp7f6fOGVxeuuBqUPqRZwm2Hz3LTAqLwBtC6msZFfVVkqYSD~T38~CuZuRCh2xuFW5Gi50arGGGYS1BZ0tV66iqDz5d~QyerNvUt4kY3ILNvBkjn-DQ79rko~JSIckGhsyx39HyoOdRS2HlINXPE1svG-9PfHleKhivyVmFI0w__',
    },
    {
      nombre: 'Someone Like You',
      info: 'Elton John',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8lu-bo3iJem9w5eZY9wyuT-p4h8~Jg6UUOaR1N5ehHGIxrFjSW3udNSrQyeEtCbrqsY0z2xiLMCzStpVZgytw0BcW5ZCskbWht89sadJpbTQSuU3xTk25dhaMIbF9NGYa2wjwyIh0cmybmEDB-2-~EeO3YVkUl74PYKaiEc7SUrFkEQbaON0KARfSUoG60iybMvztEFOiWES-0NxE6okHm-MK3caXPSzwJBR5McY7p2Jm3cNfU5G1rWinWGsF-9Dw8ijHI0rE6u6PZ3DcXhzJbMU6Um5dqFXlLGELVyjUT-rCFzrXZpXa3IXEs3DZucaF2UVuH6GQfkICJ3AOyipw__',
    },
    {
      nombre: 'Royals',
      info: 'Florence Welch (of Florence + the Machine)',
      imagen: 'https://s3-alpha-sig.figma.com/img/e1fb/3848/41820a2bfc8b40a474641a6e65b6ca4a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2ybkH2e8Z2lTdq18-ilvEfJxS4eA1X-A3CCKa5TIStfXDCLr7kJIFPScMe0LKDf14aDoDsj7fgzWncuY5hmsPNjo8CALQ5TmSClgbWkF~M64CG75JLK8ClizkE8oiljqvDwLq8F~bzxJuO3t8sWTb-tt20J-pQ8K9un7ZzTOt-bEtyHIA1gJZj0AmYjs3sBJ9n0s2uaDWm8b3V3Y9smAlAuLMVbZMkMS2Ngy94QAq~CjGPuyx2UGfohmdH07u6niebAreUyufvUEoZr4sbatrWb0F~w5JqWpIsAOSjG1Ed61Z5LkfB8eF-Bn-K9TmIWnHfJfTClDCexpFFDo-tVtA__',
    },
    {
      nombre: 'Radioactive',
      info: 'Listen Again',
      imagen: 'https://s3-alpha-sig.figma.com/img/2a44/195d/d21a8835c670411e74b2e1f4543c997a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gReccHB5OH1v~QtyJQSQ3vz2L028VadH19BDAcXW84XwYPNVFxGUakmxQ6mMYmzORpDvEenQSiVbLINN1yi4jAhoQOb-BGqYqqkLgbJ3xqcb~VY7ENmQYOORj29m3x0TPwNez-ir82c6JYho7~IrrJFy8G0hVhOqPYEOug3k7lyxsPBr8SKHLPn5slVJZIh6Q~rPwvZWNRgjJC3MtFVJuUMG5TY9Wi426SiTdIJ-Xc2q2dHZKZY3cdiy4sYgqiLrjb~4qj6Fox502eqU9d1KpJ7ElBdhzvTwYsIIFKX4wKmPmk-fw~DAKrcyhMzLKQlvWmjI2d-CpdAcleHVSyUuog__',
    },
    {
      nombre: 'Say Something',
      info: 'Listen Again',
      imagen: 'https://s3-alpha-sig.figma.com/img/e5a7/183b/697b5c47c2737fb8cc17d83f5e4a1882?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPNdatFVqaq18ujGUz~MVzPb57RoVO4d3c0nCKWVlo6YAEE~CBXbuePrwR18gq8NoiFpRS7RzJYF9jBsiVF2QHnG-FZ8j4nWljIw2hp8MlgZtP7MCUEbfBi~yaAcO~QaZ1tldFerDC0YMiiNjC8Lt8EdaARsJ3QHPukNRESiZ9oolDXBEKiMD-z7VUyNQ7dDZ1MAAF~p1tJGRCD3DUSAtNIx8Vq7ixDSJzfbi6RM7URkINj7vUC-tB~fNxUevl1z9N42AoPz87aEGiiwqPHsgtYjOKFTzghtbZ9KcVhJ4xpil8Pg8WZq-eZFQ-T3FOuUPVlkCLJiDYz79gsB66WMgA__',
    },
    {
      nombre: 'Havana',
      info: 'Annie Lennox (of Eurythmics)',
      imagen: 'https://s3-alpha-sig.figma.com/img/38a3/a083/192d01382a6b2593cf87b322f037c2be?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsMJ1-TmcSg~eoP31H5ef7nL6oLA5GHkWUgdxSWtObxUzSV4qSbHQdk3813onDY45KSaVHFyWUv10QIRnD4P909CXu0JkTT1cpO-a623rylFX-wfVgPRy2rEqHGz-BMWTCSKnuQ3Pnf8QW~jGB4nJ4GmrDNK4tOJs~99x03FCENxahUzx36sKHOwMVqXEkTgWvJMs1zzsO-cQy7Xo~STAPU7AOYvqM26hM-5xM-1aK7MwpjeODoybAXfQIfOTx669Q8XEqPr~S8tyFHm3eNc48Rlu~WKTAoLj2prXiX7B4jiw6sjLKBtaicP8wZHx9jwMstd2JnC-Z2rR3E8efTNjg__',
    },
    {
      nombre: 'Halo',
      info: 'Ellie Goulding',
      imagen: 'https://s3-alpha-sig.figma.com/img/36e6/bfb5/58b9b28e29d52bd7f484b799db3341f6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFP8i9oQDPVQwoUKw5qJLfhulqk0PcYTriPpsVmkPpWq3lz1O~Auk80ERRS6K-C31mfFGwrIMugc~NyskctdH1CCrQqZkFDAyuQaPOypVWxzExC0o3ywrnujptmHTOfl8snDIYYSGGVWF9ntmQod09dxX36MgVypxs~-xyLRyNuw24LG8Ft-fY6k027sqDsB-hSxpoobpxMS86v-WxBVzC-It46XGZK3Dcx9ZI2IcXom109AYvdTqxfRoutVxeLmJW-Pw3Jd4zsAMFwX6Zz6U5ECVKA2N72OuGzcEZPG71je2y4VrNdK5B7uFPHxzvTnbJKA6Dk0AYNp12Weu7rjSQ__',
    },
    {
      nombre: 'Can not Stop the Feeling',
      info: 'Calvin Harris (singer and producer)',
      imagen: 'https://s3-alpha-sig.figma.com/img/579b/eaee/3b02630be867dbdbd629e9d32572a9b5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEXeta-xBYRrUCycEXcBXMSsDk-IbWmXiCCRdu-zN0cgoFu9nwwVuZULJbVhBW8oHqDzAoZAlJDkn7dj4xOZdZuRZOWvh9dYFdzMMGxgC5M~o5YcaIXEk4iseNAWB1v0RP5T6lmoIBlStsH2lkq9XwnzREJJuUeeRfbQgSXu14hhEUzjO8x5gwCCJrVYKjc3zvAhX8lbNcdeYdXaALQ4r~lv-5sFDjDjwz2ispviOcBvzhtZSyeU65q642eqjh3f6zyjHzacyw0Cj9dMmedf2xqDRBIktPOqfesP96qjyaaXOA~3YLHM7MsSnQ0nZvbxMcSEKnanoGbsh7EblT6o-w__',
    },
    {
      nombre: 'Stitches',
      info: 'Peter Gabriel',
      imagen: 'https://s3-alpha-sig.figma.com/img/a3f3/f093/a8c3653cc834118fd7869542cd972ae0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iONeBqTiUmYQXhI1IzuV-oCtpzNrNmTcmWQWaJPvBzv54LG05jsJry2tLgt4mJASCLfNJmqZH4G25Kdlc2YNp~f9j0PmeeDP5497ceWzAYU57dvgZGIvzfetPVrI8tTm6113oX8ITcsSu60VVfOLlGB~LaKLftJv0Sqb47dYrCfTY-Ognweo2zZhxgvXvy3NjGgVqqfYa99vlRhEn6FxEpbt4FMRlIe0pExfPWFx01kPBwfs9LMqn~OUdgprp8BMMMJoiAewkFMIRy--z2~NH7HO~1gLMFK1wLO8pdAIqjyro8DOOJ08MZ4cVWVvlHSOVb2z44DjQ~no002MNYQaXg__',
    },
    {
      nombre: 'Rolling in the Deep',
      info: 'Adele',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8lu-bo3iJem9w5eZY9wyuT-p4h8~Jg6UUOaR1N5ehHGIxrFjSW3udNSrQyeEtCbrqsY0z2xiLMCzStpVZgytw0BcW5ZCskbWht89sadJpbTQSuU3xTk25dhaMIbF9NGYa2wjwyIh0cmybmEDB-2-~EeO3YVkUl74PYKaiEc7SUrFkEQbaON0KARfSUoG60iybMvztEFOiWES-0NxE6okHm-MK3caXPSzwJBR5McY7p2Jm3cNfU5G1rWinWGsF-9Dw8ijHI0rE6u6PZ3DcXhzJbMU6Um5dqFXlLGELVyjUT-rCFzrXZpXa3IXEs3DZucaF2UVuH6GQfkICJ3AOyipw__',
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


function QuickPicks() {
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





export default QuickPicks;