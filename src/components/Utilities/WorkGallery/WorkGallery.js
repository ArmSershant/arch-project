import React, { useState } from 'react';
import { Link } from "react-router-dom";

import bgImg from '../../../assets/img/bg/about-bg.png';
import SectionTitle from '../SectionTitle/SectionTitle';




const WorkGallery = () => {
    
    return (
        <section id="work" className="pt-120 pb-120" style={{ background: `url(${bgImg}) no-repeat` }}>
            <div className="container">
                <div className="portfolio ">
                    <div className="row align-items-center mb-30 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                        <div className="col-lg-12">
                            <SectionTitle
                                titlefirst='Application'
                                titleSec='Design' />
                        </div>
                        <div className="col-lg-12">
                             <p>Arch Software is a leading software development company that specializes in building cutting-edge applications for virtual reality (VR) and augmented reality (AR) platforms. We work with a range of clients who are looking to develop immersive experiences on platforms like Oculus Rift, Magic Leap, Rokid, Meta Quest, HTC Vive, Play Station, HP ReVerb and Varjo.</p>

							<p>Our team of experts has extensive experience in developing VR and AR applications, and we are dedicated to staying at the forefront of new technologies and innovations. We use the latest tools and techniques to create engaging, interactive, and immersive experiences that meet the needs of our clients.</p>

							<p>Whether you're looking to create a training program, a game, or a marketing campaign, we can help you design and develop a VR or AR application that meets your unique requirements. We understand the importance of delivering an exceptional user experience, and we work closely with our clients to ensure that the final product meets their expectations.</p>

							<p>At Arch Software, we believe that VR and AR have the potential to revolutionize the way we interact with technology. We are dedicated to pushing the boundaries of what's possible and creating new and innovative experiences for our clients. By working with us, you can take advantage of the latest VR and AR technologies and deliver immersive experiences that engage and delight your audience.</p>

							<p>So if you're looking to build a VR or AR application for Oculus Rift, Magic Leap, Rokid, Meta Quest, HTC Vive, Play Station, HP ReVerb or Varjo, look no further than Arch Software. Our experienced team is ready to help you bring your vision to life and deliver an exceptional user experience. Contact us today to learn more about our VR and AR development services.</p>

                        </div>
                    </div>
                    
                </div>
               
            </div>
        </section>
    );
}


export default WorkGallery;