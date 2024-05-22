import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-home-1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import video_s from '../../../assets/video/arch_games.mp4';
import SectionTitle from '../SectionTitle/SectionTitle';

const Gamecreation = () => {
    return (
        <section id="nft" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="about-content  wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'Game'}
                                titleSec={'Creation'}
                            />
                             <p>Arch Games offers comprehensive game creation services for virtual reality (VR) and 2D platforms. Our team of experts is equipped to handle every aspect of game development, from art and music to storylines, game economics, and crypto integration. Our services also include game launch consultation to ensure the successful launch of your game. With a focus on high-quality graphics, engaging storylines, and innovative use of technology, Arch Games is dedicated to helping you bring your gaming vision to life.</p>
                            
                            <div className="slider-btn">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHiVaf7WHQVXEk-arCjFqxGP4LJOAqKU-PqCRpZZUBCoSVbA/viewform" className="btn ss-btn mt-20 wow fadeInDown animated green-btn" data-animation="fadeInRight" data-delay=".4s" target="_blank">Begin Project</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gamecreation;