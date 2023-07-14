import React from 'react'
import {StatsData} from '../../Data'

const Stats = () => {
  return (
    <section className='product'>
    <section className='container'>
      <div className='row text-center p-5 '>
          {
            StatsData.map((stat,index)=>(
                <div className='col-6 col-md-3' key={index}>
                   <h4 className='fs-20 text-nowrap' >{stat.name}</h4>
                   <h5 className={`fs-6 text-nowrap ${index % 2 ===1 ? 'primaryC' : 'textColor1'}`}>{stat.num}</h5>
                </div>
            ))
          }
      </div>
    </section>
    </section>
  )
}

export default Stats