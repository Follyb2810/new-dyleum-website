import React from 'react';

const Hero = () => {
  return (
    <div className='herobg' >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col text-center'>
            <div className='text-center'>
              <h2 className='text-center heroContent text-white pb-1'>AI powered <span className='textColor1'>decentralized</span> exchange</h2>
              <p className='text-center py-2'>Empowering web3 with AI powered products</p>
              <button className='btn primaryB btnPrimary mx-auto mt-2 mt-md-4'>Discover product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
