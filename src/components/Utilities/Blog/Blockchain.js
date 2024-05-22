// import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
// import experienceImg from '../../../assets/img/features/experience-years.png';
// import features1 from '../../../assets/img/features/about-home-1.jpg';
// import features2 from '../../../assets/img/features/about-img2.jpg';
// import features3 from '../../../assets/img/features/about-img3.png';
// import video_s from '../../../assets/video/arch_games.mp4';
import SectionTitle from '../SectionTitle/SectionTitle';

const Blockchain = () => {
    return (
        <section id="Blockchain" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="about-content  wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'Blockchain'}
                                titleSec={'Applications'}
                            />
                            <p>Arch Games offers a comprehensive blockchain application service to meet the needs of businesses and organizations across a wide range of industries. Our team of experts is dedicated to creating customized blockchain solutions that improve efficiency, security, and transparency in various business processes.</p>

							<p>We specialize in several blockchain application areas, including:</p>
							

							<ol className="order-list">
								<li>Manufacturing supply chains: We offer blockchain solutions that enable companies to track their products' entire journey from raw material to final product delivery. Our blockchain applications provide transparency, accountability, and tamper-proof verification to ensure secure and streamlined supply chain operations.</li>

								<li>Inventory sourcing: Our blockchain solutions allow businesses to track their inventory sourcing and management in real-time. Our blockchain applications enable businesses to achieve cost savings and improve efficiency by ensuring accurate tracking of inventory levels and minimizing stock-outs and overstocking.</li>

								<li>Secure voting: Our blockchain-based voting solutions provide a secure and transparent way to conduct elections and voting processes. Our voting systems ensure a tamper-proof and verifiable process, making it ideal for businesses, governments, and organizations.</li>

								<li>Secure multi-party contract applications: Our blockchain solutions provide a secure and transparent way to execute multi-party contracts. Our smart contract technology automates contract execution and payment processes, enabling secure and tamper-proof transactions.</li>

								<li>Coin mining operation set up & consulting: We offer consulting services and help set up coin mining operations. Our experts provide guidance on mining equipment selection, software configuration, and set up, as well as optimization and scaling.</li>

								<li>ICO initialization: We provide end-to-end services for initial coin offerings (ICO) from ideation to launch. Our ICO services include token design, smart contract development, white paper creation, and marketing and promotion.</li>
							</ol>

							<p>At Arch Games, we are committed to delivering cutting-edge blockchain solutions to improve the operations of our clients. We believe in working closely with our clients to understand their specific needs and develop customized solutions that meet their unique requirements. Contact us today to learn more about our blockchain application service and how we can help you achieve your business goals.</p>


							
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blockchain;