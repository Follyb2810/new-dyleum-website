import React from 'react';

const Hero = () => {
  return (
    <div className='herobg' >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col text-center'>
            <div className='text-center'>
              <h2 className='text-center heroContent text-white pb-1'>AI powered <span className='textColor1'>decentralized</span> exchange</h2>
              <p className='text-center py-1 fs-18'>Empowering web3 with AI powered products</p>
              <button className='btn primaryB btnPrimary mx-auto mt-1 mt-md-2'><a href='#product'>Discover product</a></button>  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
