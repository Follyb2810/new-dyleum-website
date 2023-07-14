import React from 'react'
import desktopImage from '../../images/Roadmaps/Roadmapdesktop.png';
import laptopImage from '../../images/Roadmaps/Roadmaptablet.png';
import mobileImage from '../../images/Roadmaps/Roadmapmobile.png'
const Road = () => {
  return (
    <section className='container'>
    <img src={desktopImage} alt="Desktop Image" className="desktop-image img-fluid" />
    <img src={laptopImage} alt="Laptop Image" className="laptop-image img-fluid" />
    <img src={mobileImage} alt="Mobile Image" className="mobile-image img-fluid" />
    </section>
  )
}

export default Road