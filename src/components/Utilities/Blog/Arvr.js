import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-home-1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import video_s from '../../../assets/video/arch_games.mp4';
import SectionTitle from '../SectionTitle/SectionTitle';

const Arvr = () => {
    return (
        <section id="Blockchain" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="about-content  wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'AR/VR'}
                                titleSec={'Construction'}
                            />
                            <p>Arch Games provides state-of-the-art AR/VR application development services using Unity and Gadot engines for customized training and educational programs. Our VR training programs are designed to improve skills adoption and reduce training costs for companies in various industries, including manufacturing, specialized labor, and safety training.</p>

							<p>We specialize in creating immersive VR training programs that provide a realistic environment for trainees to learn and develop skills. Our VR training modules are designed to simulate real-world scenarios that trainees may encounter in their work, allowing them to learn and develop skills in a safe, controlled environment. We offer VR training modules for manufacturing assembly, specialized labor, and safety training that are customized to meet the specific needs of each client.</p>
							
							<p>Our educational programs are designed to provide engaging and interactive learning experiences for people with disabilities or in secondary education. We create customized educational programs that are tailored to the individual needs and requirements of each client. Our programs are designed to be inclusive and accessible to all, regardless of ability level.</p>

							<p>Our team of experts has extensive knowledge and experience in developing AR/VR applications using Unity and Gadot engines. We use cutting-edge technologies to create immersive and interactive VR environments that allow trainees to develop skills and knowledge quickly and efficiently. We can also provide training and support services to help clients effectively integrate VR training into their existing training programs.</p>
							
                           <p>At Arch Games, we are committed to providing our clients with high-quality AR/VR applications that meet their unique needs and requirements. We work closely with our clients to understand their specific needs and develop customized solutions that provide the best possible training and educational experiences. Contact us today to learn more about our AR/VR application development services and how we can help your organization achieve its training and educational goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Arvr;