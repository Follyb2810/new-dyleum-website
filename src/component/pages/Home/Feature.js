import React from 'react'
import {FeatureData} from '../../Data'

const Feature = () => {
  return (
    <section className='container' id='feature'>
    <h6 className='text-center textColor1 pt-5 pb-2'>Why Dyleum</h6>
    <h2 className='text-center text-white'>Our solution</h2>
    <div className='row'>
    {
        FeatureData.map((feature,index)=>(
            <div className='col-12 col-md-6 mt-3 mt-md-2 ' key={index}>
            <div class="card bgCard p-3" style={{height:'180px'}}>
            <span className='feature_num fw-bold'>{feature.id}</span>
            <span className='py-2 textColor1 fs-5'>{feature.name}</span>
            <p className='py-2'>{feature.para}</p>
                </div>
            </div>

        ))
    }
    </div>
    </section>
  )
}

export default Feature