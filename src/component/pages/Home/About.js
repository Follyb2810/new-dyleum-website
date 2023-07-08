import React from 'react'
import {AboutData} from '../../Data'

const About = () => {
  return (
    <section className='container' id='about'>
          {
            AboutData.map((data,index)=>(
              <div key={index}>
              <h3 className='text-center fs-6 textColor1 py-3'>{data.title}</h3>
              <h3 className='text-center fs-3 fw-semibold text-white'>{data.subt}</h3>
              <p className='text-center  text-white fs-6 px-0 px-md-3'>{data.p}</p>
              </div>
            ))
          }
       
    </section>
  )
}

export default About