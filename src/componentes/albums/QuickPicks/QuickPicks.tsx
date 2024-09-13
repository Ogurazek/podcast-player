import styles from './estilosQuickPicks.module.css'

const ALBUMS = [
    {
      nombre: 'Happy',
      info: 'Robbie Williams',
      imagen: 'https://s3-alpha-sig.figma.com/img/e7ac/3b09/5c5ebc9a905a527c702f7dcbedc13ffd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYumRL8FqJpIb7vwUv2RqXv6xeoixZXmiQy4Jltsmwnn-Zx3pnvfxHp88bc2bLmU6LyOFtRvfK2rWPAWweMpuwKuUQhV17oAImy1Abvgk8W5veXAtKdCvdmWwT1Eu50y6u2~iLBS4ZReZoDHagRIpK9dAQtzn7EpVNx03tQiYyaiLusWBUzjIQIcGnm8dk9QhZ2CC8lHbrwj6Ur557xpVwO6Ibjim1peoHoRgegGSqmCdgDulEI0RnmGTXnn2jGwIJpL29qsBE~iaL3PkamRUyHugUEQ~3Sw-~M4MtsrkyUUf2xvAfxUqAhXSPFzSc76jC456NBFfPa6tqmUN-ZZIQ__',
    },
    {
      nombre: 'Love Story',
      info: 'John Lennon (of The Beatles)',
      imagen: 'https://s3-alpha-sig.figma.com/img/9c08/fb16/f1449e135ce592b7fb46860f97792e50?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATNfayYd1Kds2KzH-ma19sUcwvIRfcptu4IwQ04ueQCZmsTT2fKFDG-GtNIK6pn0lzZq0PLo69ZhD0gtjukx8bFDDr6HJ78ZX~UiatRWHty1MF5N3nblmQAFpuozPhk6dG6z5nwZ9Xz~UZBDsdQFHH1ETDP~n6jFzaYBggWG0b9Ia2~I1OkCH4aLRQcGsGvX1QwEkXMbnNdoKQ~BSYBv1s0RV9rnkw0SeIJMDkkTlFlOwPiNXYkrLu~HtPFOK5S69tRQc-Xq4Lb9Ur9wGQTtA2lwlhK9Gngg4uqs5SK3nCEHrgERcPAkZAZap6DcDPIEqtCdRqzhG4kErMqkatHj6g__',
    },
    {
      nombre: 'Smooth',
      info: 'Coldplay (fronted by Chris Martin)',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qW6vONGdlbyPisBDhFsmRUQIOepnI2s6bf1-O5bImW~PmvJ6BK1uF5Fq0VAfWO3HJiiXfbq0MatQe1ZrDdJm838GR6qUgtkHLsIsxm144MrM-QQdjBUjjRzKkcrh0mgw5HMjuEfdJfK75eHFttsmGI5X1NQpFCLBrR69oLiviJUnaCy~jNiYZo3yYpyupChQUl~WxZ7TUTqfnJdTYWDPvith03l2Gy4I3wG1VnX7isPi2A7NWtPRhbA89BRD4WgnPGKZFrnKr~SRPGVHqVLjZkilZrFPTMXKn-x7pyYyb5q9v9zdRKhrtgwpcbvCbOUjBMAxSpL1cXyj7J3D0N6g9A__',
    },
    {
      nombre: 'Hey, Soul Sister',
      info: 'Sam Smith',
      imagen: 'https://s3-alpha-sig.figma.com/img/9105/9dfd/270384c57d7e8b9f0089d9cca3380a2c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M00utu4hHifCKV7RQmWxYZ4YJX6nlOhSoB-1bBs0NEsxjzlGxjS0NxbnwirVZDjnRARlNLiOwOIVcARLQ3UdAmTiSJMZWJLv4WSZuBURJR4xgJeEXNnvENqezhdYeZp1BKIgAP6GCXuMvLHYL~rta~XMucW2IoSAw4NEm4iogBJrfLwFIlgLc00O3JbzQLcbm3IfwWo56qSR6CZKsvY-ifOfLsdMexUAKyXC0iuGy8iOSnTS~nQJ88A1b0Ffr6AMvNFPnvLPuWYgNJtkWUFOpngtabK9jtyCNr1Kue8d~FBGfcEHjHBNrO0NWXKpohklsJYh21~NB-xHGabhaLw~Gg__',
    },
    {
      nombre: 'Cheap Thrills',
      info: 'Jessie J',
      imagen: 'https://s3-alpha-sig.figma.com/img/cc14/ec68/69b57d487d0805bb83aa02d8eac8fd8e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPWhL9EA~TeX3wbUgEANDwxdlDtjWzz2AWY3bJ8d8q6-6rxr9omIU1n5zxwsejz5FsBZSlUi8HtT0RJK2F4dvnn5r~16boUmhAaJgoPEgND~7oEBgvqQdHROiiAyofojSGVnN11liZ30HhNIs9fVxy-5HGGQd4zAfHfz~LPUii41Js9rQDEMvZvfHoaflY3WewF6AAPOuIFHxXM5O5arMy5fmiWjbMi9-s5a-fHT5q6ddJsj56qNSM0H3CJqIK1FoFwpWUykQD1b5gbIWDEuTL7xTZjQGJNIdcBr2ndV~R~xiOGwtkY6M4wWcYMJWswf3SHVG-MmrhlC0REYUMk1ww__',
    },
    {
      nombre: 'I Will Always Love You',
      info: 'Coldplay (fronted by Chris Martin)',
      imagen: 'https://s3-alpha-sig.figma.com/img/ec0e/06e0/d10ab84cf050df7c759a381b2506bb89?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ve-g3opfN6ZIFzuboI8c9HtHDJsbHXOgIcmp1T0VASeVUO26pvBddbLaPpSl9yV-yx0XBG1Ak5iQWBqSuw-pLgtqRBOgaOoyFZ~Q3b4vxjN4GV~zRVANP05PssRqgA95U7~BiLBFMa33FFfT5QTyOZ~OEhf2JgmXJkJ70rtAxgRmmbO4M3M6nRQ1KSqJHv2aQBKL0n5w6ks7gE94fGx6ijcFI9~lvga99cAUnkvJyJrPK9ZjNjarwpOYxU80~qK7NmMNch-OYP-xLh0~Dk~y-ws-H5qz6klvP5Y38JypZDdQ3HeqlcOmz2eNldc6uXKHaT6ZPmioCI4fsIrMtjf53A__',
    },
    {
      nombre: 'I Gotta Feeling',
      info: 'George Michael (of Wham!)',
      imagen: 'https://s3-alpha-sig.figma.com/img/b720/8ee4/92d2f58023ddb67411ab73f18a6358c4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScACkRqTAMbY~DQjvK0OU8496vJFy4RUS4hhrK~V572NI5hv75D7SNJn4yh1ClyPoEqF-hBLmqhNwj-kvYACwXQbeU7s1RaovURyI~OZwQ2fT2yKgmtrmFidn23-bxjhgYMF-USM-YnBOrn3TpkBASIK2F-EzYV4ot8OtsROsM6lVQLhnIdxGGHI0X4cl82bp-6hATtw-X32X-ALBFlHrTLdgrLF2xion7XZpFnuL1LeqjnNu50FdFhB5x3AsjnWcu4R8Fg9mCe7aGw0ByM~XJ4CLlixbMW2Fc91-NID6cQO17unAJBQube3FjXQdfIOgqFjkSoGDcPN8o4PNoXU~g__',
    },
    {
      nombre: 'Someone Like You',
      info: 'Elton John',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qW6vONGdlbyPisBDhFsmRUQIOepnI2s6bf1-O5bImW~PmvJ6BK1uF5Fq0VAfWO3HJiiXfbq0MatQe1ZrDdJm838GR6qUgtkHLsIsxm144MrM-QQdjBUjjRzKkcrh0mgw5HMjuEfdJfK75eHFttsmGI5X1NQpFCLBrR69oLiviJUnaCy~jNiYZo3yYpyupChQUl~WxZ7TUTqfnJdTYWDPvith03l2Gy4I3wG1VnX7isPi2A7NWtPRhbA89BRD4WgnPGKZFrnKr~SRPGVHqVLjZkilZrFPTMXKn-x7pyYyb5q9v9zdRKhrtgwpcbvCbOUjBMAxSpL1cXyj7J3D0N6g9A__',
    },
    {
      nombre: 'Royals',
      info: 'Florence Welch (of Florence + the Machine)',
      imagen: 'https://s3-alpha-sig.figma.com/img/e1fb/3848/41820a2bfc8b40a474641a6e65b6ca4a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BnM619BDvo~Qu5NptdBpb2613DNR7WDeFZjy5BScwqzOvhcC33PRIzF75aJI-Dgo6nLLdgHDFcLCS3XMT2x8lt2-edIMQq8jva9-f0v81X9vbZdA9X1Poi~DFQ1sV2N2MaqHxDCkdueSaQgVS5FxxqAbApW~JTbBUC98jQj84h6isXnrd0Ya~lf2tI9KhcXIkZSHElLEAzHQUCFPzSWMCgrjKRj9xHsi4cczmlChjCX8-S9FU-HDI8snNWsqAnqlhjAf5ListxbzuWjLceti8l2F~4MbyUhcjvn~QhOS7SRttK84u8m3N2lOiXfjYKm73uK78qmFGmDn-x6gwal3eg__',
    },
    {
      nombre: 'Radioactive',
      info: 'Listen Again',
      imagen: 'https://s3-alpha-sig.figma.com/img/2a44/195d/d21a8835c670411e74b2e1f4543c997a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPTPV~uOaJrYZZbWjXE7Vyrk0eWgalc5MXArlQjVM9ydk8chapVRsDvWj5bYowk0H4C0J-xfZ-vm38eX1TIjVJAaLpzI4aXv7SlmYG70YZsjkEPhXDAnoqunB1ewNHMRIoMIlP-uD1bs1T5wo2c1DEitNKbaSsAU0GDPBDHf-aOT7dy~o74Mc3o23m02bktSjC~NHkjsawS97N3YyEkeTGVr8iG~PZIiG5-1Q4EUpz79IkAinWCAXNYnOQ1SbEqzTISaoq60dTnAFQPNVFIa6TlR2CajYfvo82AO66tFb2cRwzuiRKF684VluBFUJZBxWSFUDM5mJJLi0Iiq0BwzMQ__',
    },
    {
      nombre: 'Say Something',
      info: 'Listen Again',
      imagen: 'https://s3-alpha-sig.figma.com/img/e5a7/183b/697b5c47c2737fb8cc17d83f5e4a1882?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWKxXpzx~5mnBE-3WtIO-UT53HtmCRcyS7vmf7xHVzDDsOwZpzAePTOUT-58Ig23BRMiFgzmC4epOWQOT35Bzi0z8kCKOIWmndEmQ1j~l-Vhpyw~XTFDGgsjzqYxPzKoeLSg2lXH1rBx~ZX7xyaSbLak4LdgfdDNsSHJbmGaPQA3GKyHy-bpw0KOELcXimC8pDDosVyCEcs2e1hLDE~fofuZ~61zsDUIj~cwThHVpPJBuYiceMzCtLWkgkUO0UvHgIvtQBtGd3r0BDSvN9nb0aqVdMys~ldMFuYlJBpU34AQAww8L268WwmOdFAh6xl5qiabd90LfDnleFrvgZcw7g__',
    },
    {
      nombre: 'Havana',
      info: 'Annie Lennox (of Eurythmics)',
      imagen: 'https://s3-alpha-sig.figma.com/img/36e6/bfb5/58b9b28e29d52bd7f484b799db3341f6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohThyhzXzW~Ymv7ZagJBgPAXnJc4A6FkjWTLyHvj75-Oi89YLEVGzFGnAYv5xFJEnD1Hj5dbv4YxlHldA6MvRu0NMibbvtEhjp~Roty7C3yrZxdz2IyQ6erzC7wWromBex89dNgCX0NriBP0EWyiszPF3gJR9IyC1XhKaYfn~zPVbmOtgye0Umb2o34~xffEnY8Ds5Qg6S~K2MhonvmXnxJDg41GSsWJcaS1mwSBylvrMWgNWu1iyk8poqUS5LzEN43Klm5zXlx2h~~XS78Z~H9tOXU8BYB~T~HCRI-APJs~aBqa6Al~mFCFGpas34BtHQgwdIAjYjo0cJnTQ4RYgQ__',
    },
    {
      nombre: 'Halo',
      info: 'Ellie Goulding',
      imagen: 'https://s3-alpha-sig.figma.com/img/38a3/a083/192d01382a6b2593cf87b322f037c2be?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ng2f3l7Ac716fSi0PuozJGb8hQpaVeUkT~-qZQ-aOLALh9VAXWBxe8WV52YfQouHEbgpbgDYoK8ritZ9rB~wBtI4ZWQjuoDedAc8roKYnP-Gea2TIX0iwkBwjNiTmaGj9CvcuqSWUdVzPOjdBhAbL5dNSCv7mTKlsjp7Z1ALGNNMl1QXdpfy2UupR3DTjQmTc9gq4-3vgYO62~7tN49e7a88gkIGBMgVmCNZXFvXKS-RtqrligqZztCrGeNuf9~LvPIJs6eRzxxl3FW4tKDMyGsqxXZtzcB-B3IM8IYj6LdV7UGGaabU5CJIPqDJRymapW5dcPkBayg0cPL~07rQzA__',
    },
    {
      nombre: 'Can not Stop the Feeling',
      info: 'Calvin Harris (singer and producer)',
      imagen: 'https://s3-alpha-sig.figma.com/img/579b/eaee/3b02630be867dbdbd629e9d32572a9b5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCYvIb7zWgTmzQ4fdNuOAr5CuAoSrHeyr60ii3pWCmvvlIc6AxZ7uMq9kxLoH8BRgBWVz92NTnXUzYinbo1Xk0cUvZGhLaE25CgMIi4reoWPwsTu1L30hTS0o9jpFB5JAPHRWC0Ckp3dHvwSLWpmz6JZZg1~0Cao3T3wnwgVYOwpa0x1EcZuIIdBU0tZBK33ubiQQiCxfSZfT0INlzaepuZTjbSB0BtW9VE5Pae2853DUQt2U6gFoPuaYAH~Pxgs6iYkrs6chr7VLjW2dsIlr6kWlMazNamQVip0eRdi3BdYc6TYco84S8vt5xPh~WsTmTcJv40I35wKEmbrzgZDCg__',
    },
    {
      nombre: 'Stitches',
      info: 'Peter Gabriel',
      imagen: 'https://s3-alpha-sig.figma.com/img/a3f3/f093/a8c3653cc834118fd7869542cd972ae0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2Z0tbox18yeyNmJ5bxvEvaX1SsI5~~Eo3yJXHBPJg9IErsbA7TFSMuzIesryQmD0SbEF33Zg004F1V9dQK3n5OypPZc~l7GWnEidyH2LvR8y7Ah8F5QQ7txQDG1w8A6CBOY13jY0kiQZW-q-Kl~t0m7aEClFucROTiGDBiV7MdggpxnH4grW9PwBIkjuERgWEkpgjspvTcjzYQEBniSYnhAI7gKmdNRXFlBobtBAg26h~i5i0MeB1ZlM0k~Gwmx4qH~HHReD3YCTvUNetVXEcPH9Eltn2LWI3BYJQudzr7x2Gl4YycsTH6JcZ7Vpz4yExqrZRk16FXz83kJ9rUIZw__',
    },
    {
      nombre: 'Rolling in the Deep',
      info: 'Adele',
      imagen: 'https://s3-alpha-sig.figma.com/img/8ad9/0de2/c17cba980e0187485fdf5bd21ec862e6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qW6vONGdlbyPisBDhFsmRUQIOepnI2s6bf1-O5bImW~PmvJ6BK1uF5Fq0VAfWO3HJiiXfbq0MatQe1ZrDdJm838GR6qUgtkHLsIsxm144MrM-QQdjBUjjRzKkcrh0mgw5HMjuEfdJfK75eHFttsmGI5X1NQpFCLBrR69oLiviJUnaCy~jNiYZo3yYpyupChQUl~WxZ7TUTqfnJdTYWDPvith03l2Gy4I3wG1VnX7isPi2A7NWtPRhbA89BRD4WgnPGKZFrnKr~SRPGVHqVLjZkilZrFPTMXKn-x7pyYyb5q9v9zdRKhrtgwpcbvCbOUjBMAxSpL1cXyj7J3D0N6g9A__',
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