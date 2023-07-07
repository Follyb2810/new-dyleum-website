import React from 'react'
import * as Img from '../../images/images'
import {PartnerData} from '../../Data'
const Partner = () => {
  return (
    <section className='container'>
         <h3 className='text-center fs-5 py-5'>our patners</h3>
         <h3 className='text-center fs-4 text-white'>We work with the best partners</h3>
         <div className='d-flex justify-content-center'>
             {
              PartnerData.map((partner,index)=>(
                <div className='p-2 text-center' key={index}>
                <img className='img-fluid' alt='' style={{width:'70px'}} src={partner.img}/>
                  <h6 className='fs-7 ' >{partner.name}</h6  >
                </div>
              ))
             }

         </div>
    </section>
  )
}

export default Partner