import React from 'react'
import {AboutData} from '../../Data'

const About = () => {
  return (
    <section className='container' id='about'>
          {
            AboutData.map((data,index)=>(
              <div key={index}>
              <h3 className='text-center fs-14 textColor1 pt-5 pb-2'>{data.title}</h3>
              <h3 className='text-center text-white subtitle'>{data.subt}</h3>
              <p className='text-center  text-white fs-6 px-0 px-md-3'>{data.p}</p>
              </div>
            ))
          }
       
    </section>
  )
}

export default About