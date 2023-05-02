import './styles.css'
import Header from './components/Header'
import Section from './components/Section';
import ListItems from "./components/ListItems"

const gameListDate = [
  {
    url: "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
    alt: "Imagem do jogo Counter-Strike"

  },

  {
    url: "https://www.twitch.tv/directory/game/NBA%202K22",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1371363232_IGDB-285x380.jpg",
    alt: "Imagem do jogo NBA 2022",
  },

  {
    url: "https://www.twitch.tv/directory/game/FIFA%2023",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-188x250.jpg",
    alt: "Imagem do jogo Fifa 2023",
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do Jogo League Of Legends"
  }

]

const channelListDate = [
  {
    url: "https://www.twitch.tv/gaules",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png",
    alt: "Imagem do Canal do Gaules"
  },

  {
    url: "https://www.twitch.tv/jukes",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/044e146b-09ff-449d-b2a1-95a2358ac3a8-profile_image-150x150.png",
    alt: "Imagem do Canal do Jukes"

  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt: "Imagem do Canal do Alanzoka"

  },

  {
    url: "https://www.twitch.tv/loud_coringa",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-70x70.png",
    alt: "Imagem do Canal do Loud_Coringa"

  },
]

const socialListDate = [
  {
    url: "https://www.linkedin.com/in/lucassantana30/",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    alt: "Imagem da logo do Linkedin",
  },

  {
    url: "https://github.com/LSB30",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    alt: "Imagem da logo do Github",
  },

  {
    url: "https://www.instagram.com/lucas_belato30/",
    imageUrl: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
    alt: "Imagem da logo do Instagram",
  }

]

function App() {
  return <div className="App">
    <Header />

    <main>
      <Section
        title="Meus jogos"
        subtitle="Os games que eu mais curto jogar!"
        className="games-list"
      >

        {
          gameListDate.map((item) => {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }

      </Section >

      <Section
        title="Canais e streamers"
        subtitle="Lista de canais e transmissões que não perco!"
        className="channel-list"
      >
        {
          channelListDate.map((item) => {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
      </Section>

      <Section
        title="Minha redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list"
      >
        {
          socialListDate.map((item) => {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
      </Section>
    </main>
  </div>;
}


export default App;
