
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import * as IMG from '../images/images';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar navbar-expand-md bg sticky-top">
      <div className="container">
        <Link to="/">
          <img src={IMG.Dyleum} className="logo" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          onClick={handleToggle}
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={toggleNav ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          {toggleNav ? (
            <img src={IMG.Cancel} alt="" style={{ width: '30px', height: '20px' }} />
          ) : (
            <img src={IMG.Ham} alt="" style={{ width: '30px', height: '20px' }} />
          )}
        </button>
        <div
          className={`collapse navbar-collapse text-sm-start text-md-center menu ${toggleNav ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto fs-6 text-start text-sm-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <span className='d-md-inline-block'>Product</span>
              <span className=' ms-md-0 ms-sm-1 ms-5'><BsChevronDown /></span>
              </a>
              <ul className="dropdown-menu py-3">
                <li>
                  <a className="dropdown-item productDropdown" href="#product"  onClick={handleToggle}>
                    Dex
                  </a>
                </li>
                <li>
                  <a className="dropdown-item productDropdown" href="#product" onClick={handleToggle}>
                    AI P2P Exchange
                  </a>
                </li>
                <li>
                  <a className="dropdown-item productDropdown" href="#product" onClick={handleToggle}>
                  LeumPad <span className="coming">(Coming soon)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item productDropdown" href="#product" onClick={handleToggle}>
                    NFT <span className="coming">(Coming soon)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item productDropdown" href="#product" onClick={handleToggle}>
                    Dapp Evaluation Program <span className="coming">(Coming soon)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item productDropdown" href="#product" onClick={handleToggle}>
                    Defi Protocol <span className="coming">(Coming soon)</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#feature" onClick={handleToggle}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fag" onClick={handleToggle} >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nowrap" href="#road" onClick={handleToggle}>
                Road Map
              </a>
            </li>
          </ul>
          <button
            className="btn primaryB btnPrimary ms-md-auto d-none d-md-block text-nowrap">
               <a href='#product'>Discover product</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

