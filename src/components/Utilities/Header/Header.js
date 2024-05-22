import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import logo from '../../../assets/img/logo/logo-new.png';
// import toggleIcon from '../../../assets/img/bg/toggle-menu.png';
import Offcanvas from '../Offcanvas/Offcanvas';



const Header = () => {

  const [openCanvas, setOpenCanves] = useState(false);

  const [iconToggle, setIconToggle] = useState(false);

  const heandelOpen = () => {
    setOpenCanves(!openCanvas);
  }


  return (
    <React.Fragment>
      <header className='header'>
        <div id="header-sticky" className="header-menu-area">
          <div className="header-container">
            <div className="header-logo-menu">
              <div className="header-logo-col">
                <div className="header-logo">
                  <Logo logo={logo} />
                </div>
              </div>
              <div className='header-link-col'>
                <nav id="mobile-menu" className="header-main-menu">
                  <ul>
                    <li className="has-sub"><Link to={'/'}>{'Home'}</Link></li>
                    <li><Link to={'/about'}>{'About Us'}</Link></li>
                    <li><Link to={'/service'}>{'Services'}</Link></li>
                    <li><Link to={'/product'}>{'Products'}</Link></li>
                    <li><Link to={'/media'}>{'Media'}</Link></li>
                    <li><Link to={'/contact'}>{'Contact Us'}</Link></li>
                  </ul>
                </nav>
              </div>
              <div className='header-social-wrapper' >
                <div className="header-cart-top">
                  <ul>
                    <li>
                      <p className='menu-tigger'>
                        <Link to={'#'}>
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </p>
                    </li>
                    <li>
                      <p onClick={heandelOpen} className="menu-tigger">
                        <i className="fas fa-search"></i>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-mobile-toggle-menu">
                <div className="mobile-toggler text-right">
                  <p onClick={() => setIconToggle(!iconToggle)} style={{ margin: "auto" }}>
                    <i className={`${iconToggle ? 'fas fa-times' : 'fa fa-bars'}`}></i>
                  </p>
                </div>
              </div>
            </div>
            <MobileMenu toggleMenu={iconToggle} onClose={setIconToggle} />
          </div>
        </div>
      </header>
      <Offcanvas onOpne={openCanvas} onClose={setOpenCanves} />

    </React.Fragment>
  )
}

export default Header;
