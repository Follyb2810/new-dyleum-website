import React from 'react'
import * as Img from '../../images/images'
const Partner = () => {
  return (
    <section className='container'>
         <h3 className='text-center fs-5 py-5'>our patners</h3>
         <h3 className='text-center fs-4'>We work with the best partners</h3>
         <div className='d-flex justify-content-center'>
           <div className='p-2'>
           <img className='img-fluid' alt='' style={{width:'70px'}} src={Img.part}/>
             <h6 className='fs-7 text-center' >Core Guard</h6  >
           </div>
           <div className='p-2'>
           <img className='img-fluid' alt='' style={{width:'70px'}} src={Img.part2}/>
           <h6 className='fs-7 text-center' >Zebec Protocol</h6  >
           </div>
           <div className='p-2'>
           <img className='img-fluid' alt='' style={{width:'70px'}} src={Img.part3}/>
           <h6 className='fs-7 text-center'>Nautilius Chain</h6>
           </div>

         </div>
    </section>
  )
}

export default Partner