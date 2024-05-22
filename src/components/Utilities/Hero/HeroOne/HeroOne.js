// import { Link } from 'react-router-dom';
// import heroImg from '../../../../assets/img/slider/slider_img_bg.png';
import video_h from '../../../../assets/video/header.mp4';

// const heroInformation = {
//   id: "1",
//   img: heroImg,
//   titleTag: "#Begin Project",
//   title: "Arch Games",
//   btnText: "Click Here",
// }
// const { img, titleTag, title, btnText } = heroInformation;

const HeroOne = () => {
  return (
    <section id="home" className='heroOne-main'>
      <div className="heroOne-slider-background">
        <div className="heroOne-container">
          <div className="heroOne-video-wrapper">
            <video src={video_h} autoPlay muted loop>
            </video>
            <div className="heroOne-button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScHiVaf7WHQVXEk-arCjFqxGP4LJOAqKU-PqCRpZZUBCoSVbA/viewform" data-animation="fadeInRight" data-delay=".4s" target="_blank" rel="noreferrer">Begin Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HeroOne;