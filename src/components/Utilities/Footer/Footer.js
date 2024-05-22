import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/logo-new.png';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-widget-wrapper">
          <div className="footer-widget-title">
            <Link className="footer-logo" to={'/'}>
              <Logo logo={logo} />
            </Link>
          </div>
          <div className="footer-reach-out">{'Reach out to our office at'}</div>
          <div className="footer-contact-link">
            <ul>
              <li>
                <i className="icon fal fa-map-marker-alt"></i>
                <span>Address :
                  <a target="_blank" href="https://www.google.com/maps/place/United+States+Postal+Service/@28.3072148,-80.7233157,17z/data=!4m15!1m8!3m7!1s0x88de017e2d569371:0xa8339c14b44024c9!2sUnited+States+Postal+Service!8m2!3d28.3072148!4d-80.721127!10e5!16s%2Fg%2F1vm_ypwc!3m5!1s0x88de017e2d569371:0xa8339c14b44024c9!8m2!3d28.3072148!4d-80.721127!16s%2Fg%2F1vm_ypwc?entry=ttu" rel="noreferrer">
                    {' 3000 Murrell Rd. #560295 Rockledge, FL 32956'}
                  </a>
                </span>
              </li>
              <li>
                <i className="icon far fa-clock"></i>
                <span>
                  Phone :
                  <a href='tel:(321) 342-9233'>
                    {' (321) 342-9233'}
                  </a>
                </span>
              </li>
              <li>
                <i className="icon dripicons-mail"></i>
                <span>
                  {'Email :'}
                  <a href='mailto:info@archsoftdev.com'>
                    {' info@archsoftdev.com'}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-widget-wrapper">
          <div className="footer-widget-title">
            <h2>{'Our Links'}</h2>
          </div>
          <div className="footer-link">
            <Link to={'/'}>{'Home'}</Link>
            <Link to={'/about'}>{'About Us'}</Link>
            <Link to={'/service'}>{'Services'}</Link>
            <Link to={'/product'}>{'Products'}</Link>
            <Link to={'/media'}>{'Media'}</Link>
            <Link to={'/contact'}>{'Contact Us'}</Link>
          </div>
        </div>
        <div className="footer-widget-wrapper">
          <div className="footer-widget-title">
            <h2>{'Follow Us'}</h2>
          </div>
          <div className="footer-social-wrapper">
            <a target="_blank" href="https://www.facebook.com/ArchSoftDev" rel="noreferrer">
              <i className="fab fa-facebook-f"></i></a>
            <a target="_blank" href='https://twitter.com' rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a target="_blank" href='https://instagram.com' rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-wrapper">
        <div className="footer-copyright-text" >
          {'Copyright © 2022'} <span>Arch Games</span> {'All Rights Reserved.'}
        </div>
      </div>
    </footer>
  );
}

export default Footer;