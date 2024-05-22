import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-home-1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import video_s from '../../../assets/video/arch_games.mp4';
import SectionTitle from '../SectionTitle/SectionTitle';

const Nft = () => {
    return (
        <section id="nft" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="about-content  wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'NFT'}
                                titleSec={'Creation'}
                            />
                            <p>Arch Games offers a cutting-edge service for creators, game developers and anyone looking to monetize their digital artwork through the creation of unique and valuable non-fungible tokens (NFTs). Our NFT service is designed to provide a hassle-free solution for anyone who wants to turn their digital artwork into a valuable collectible asset that can be bought, sold, and traded on the blockchain.</p>

							<p>We specialize in creating one-of-a-kind NFTs for a range of digital artwork, including gaming applications, visual art, music, and more. We work with talented creators and developers to ensure that their work is showcased in the most engaging and innovative way possible.</p>


							<p>Our team of experts has extensive knowledge of the WAX blockchain and smart contract technology, enabling us to create unique and secure NFTs that are compatible with the WAX platform. We use a combination of proprietary tools and industry-standard software to create NFTs that are visually stunning and technically sound.</p>


							<p>We offer a range of customizable options for our NFT service, including minting, metadata creation, and smart contract deployment. We can also help creators and developers to set up and manage their own NFT marketplaces, allowing them to sell and trade their NFTs with ease.</p>

							<p>At Arch Games, we are passionate about NFTs and believe that they represent the future of digital ownership and value. We are committed to providing our clients with a top-notch service that enables them to unlock the full potential of their digital creations. Contact us today to learn more about our NFT service and how we can help you take your digital art to the next level.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nft;