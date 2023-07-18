import React from 'react'

const Hero = () => {
  return (
    <div className='herobg'>
      <div className='container'>
        <div className='row pt-2 pt-sm-5 pb-2  mt-3  align-items-center'>
          <div className='col text-center pt-5'>
          <h2 className='text-center heroContent text-white pt-0 pt-md-5'>AI powered <span className='textColor1'>decentralized</span> exchange</h2>
          <p className='text-center fs-5'>Empowering web3 with AI powered products</p>
          <button className='btn primaryB btnPrimary  mx-auto'>Discover product</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero