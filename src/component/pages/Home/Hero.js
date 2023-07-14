import React from 'react'

const Hero = () => {
  return (
    <div className='herobg'>
      <div className='container'>
        <div className='row py-5 mt-3 '>
          <div className='col text-center py-5'>
          <h2 className='text-center heroContent text-white'>AI powered <span className='textColor1'>decentralized</span> exchange</h2>
          <p className='text-center fs-5'>Empowering web3 with AI powered products</p>
          <button className='btn primaryB btnPrimary  mx-auto'>Discover product</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero