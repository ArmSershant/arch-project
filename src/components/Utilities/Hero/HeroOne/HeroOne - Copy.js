import { Link } from 'react-router-dom';
import heroImg from '../../../../assets/img/slider/slider_img_bg.png';
const heroInformation = {
    id: "1",
    img: heroImg,
    titleTag: "#Begin Project",
    title: "Arch Games",
    btnText: "Click Here",
}
const { img, titleTag, title, btnText } = heroInformation;

const HeroOne = () => {
    return (
        <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{ background: `url(${img}) no-repeat center center / cover` }}>
                    <div className="container">
                        <div className="row justify-content-center pt-50">
                            <div className="col-lg-1 col-md-1"></div>
                            <div className="col-lg-6 col-md-6">
                                <div className="slider-content s-slider-content">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScHiVaf7WHQVXEk-arCjFqxGP4LJOAqKU-PqCRpZZUBCoSVbA/viewform" className=""><h5 data-animation="fadeInDown" data-delay=".4s">{titleTag}</h5></a>
                                    <h2 data-animation="fadeInUp" data-delay=".4s">{title}</h2>
                                    <div className="slider-btn">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScHiVaf7WHQVXEk-arCjFqxGP4LJOAqKU-PqCRpZZUBCoSVbA/viewform" className="btn ss-btn mr-15">
                                            {btnText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default HeroOne;