// import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';

// import features1 from '../../../assets/img/blog/games.jpg';

// import SectionTitle from '../SectionTitle/SectionTitle';

const Game = () => {
  return (
    <section id="game" className="medias-main" style={{ background: `url(${aboutBgImg}) center center / cover` }}>
      <div className="medias-container">
        <div className="medias-container-row">
          <div className="medias-container-col">
            <div className='medias-container-content' data-wow-delay=".4s">
              <div>
                <a href="https://www.facebook.com/ArchSoftDev" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a>
                <a href="https://www.linkedin.com/company/arch-software-development/" target="_blank" rel="noreferrer"  ><i className="fab fa-linkedin"></i> Linkedin</a>
              </div>
              <div>
                <a href="https://www.youtube.com/@archsoftwaredevelopment1882" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i> Youtube</a>
                <a href="https://www.twitch.tv/sheik12ss" target="_blank" rel="noreferrer"  ><i className="fab fa-twitch"></i> Twitch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Game;