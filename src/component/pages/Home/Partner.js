import React from 'react'
import {PartnerData} from '../../Data'
const Partner = () => {
  return (
    <section className='container'>
         <h3 className='text-center fs-14 pt-5 pb-2 textColor1'>OUR PARTNERS</h3>
         <h3 className='text-center text-white subtitle'>We work with the best partners</h3>
         <div className='row justify-content-between pb-5'>
             {
              PartnerData.map((partner,index)=>(
                <div className='col-6 col-md-3 text-center justify-content-center mt-5' key={index}>
                    <img className='img-fluid' alt='' style={{width:'64px'}} src={partner.img}/>
                    <h6 className='fs-18 text-center text-nowrap' >{partner.name}</h6  >
                </div>
              ))
             }

         </div>
    </section>
  )
}

export default Partner