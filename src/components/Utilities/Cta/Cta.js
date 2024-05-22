import { Link } from 'react-router-dom';
import bgImg from '../../../assets/img/bg/about-bg.png';
const ctaData = {
  bg: bgImg,
  title: 'UPDATES',
  description: 'Arch Games brings over 30 years of experience to smart contracts, NFT construction and blockchain applications. Lowering costs, increasing application utility and consumer engagement, Arch brings skilled developers to the forefront of agile methodologies to deliver high quality products to its clients.',
  btn: 'Join Now',
}
const Cta = () => {
  const { bg, title, description, btn } = ctaData;
  return (
    <section id="graph" className='cta-main' style={{ background: `url(${bg}) center center / cover` }}>
      <div className="cta-container">
        <div className="cta-container-row">
          <div className="cta-container-col">
            <div className='cta-container-section-title' data-animation="fadeInRight" data-delay=".4s">
              <div className='cta-container-section-title-link-wrapper'>
                <Link to="/product">Products</Link>
                <Link to="/service">Services</Link>
              </div>
              <h2>{title}</h2>
              <div className='cta-container-section-iframe-wrapper'>
                <iframe title='facebook iframe' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FArchSoftDev%2Fposts%2Fpfbid0JBRZFvW89GT49JH9dmLX3uLetMstKReqLQBjBzBj8XCkHktaVXnnPgCyLQ9bE8Aml&width=500&show_text=true&appId=256066201164879&height=609" width="100%" height="609" scrolling="no" allowFullScreen={true} allow="autoPlay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;