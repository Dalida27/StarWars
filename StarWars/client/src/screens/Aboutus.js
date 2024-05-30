import React from 'react'
import './Aboutus.css';
import Footer from '../components/Footer';

function Aboutus() {
  return (
    <div>
      <div className='about-main'>
        <div className='about-hero'>
            <h1>About lore</h1>
            <p className='text-lore'>The Star Wars universe, a sprawling epic of space opera proportions, began its journey into the collective imagination with George Lucas's 1977 film, "Star Wars: Episode IV - A New Hope." Its rich tapestry weaves together tales of adventure, rebellion, and the eternal struggle between good and evil, set against the vast backdrop of a galaxy filled with diverse planets and exotic species. Central to Star Wars is the concept of the Force, a mystical energy that gives Jedi and Sith their power, representing a dualistic vision of the universe—light and dark, good and evil. The saga is famous for its iconic characters: Luke Skywalker, the farm boy who becomes a Jedi; Princess Leia, a royal leader of the Rebel Alliance; and Darth Vader, whose tragic fall and redemption arc is legendary. Innovatively, Star Wars also introduced audiences to a variety of fantastical technology and spacecraft, like the speedy Millennium Falcon and the formidable Death Star. Each element serves not just as a piece of the setting, but as pivotal to the plot and character development. The influence of Star Wars extends beyond cinema into various media including books, television series, comics, and video games, creating a mythology that continually expands. This universe not only explores complex themes such as freedom, destiny, and conflict but also resonates with cultural and historical parallels, making it a timeless saga that invites endless exploration and interpretation. Through its imaginative power, Star Wars continues to inspire and entertain, proving that stories of heroes, villains, and the spaces between can captivate hearts and stir the dreams of generations.</p>
            <div className='two'>
              <div className='three'>
                <img src="https://www.komar.de/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg" />
              </div>
              <div className='five'>
                <div className='four'>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"/>
                  <img src = "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop16x9.575p.jpg"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default Aboutus