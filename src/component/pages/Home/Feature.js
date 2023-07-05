import React from 'react'
import {FeatureData} from '../../Data'

const Feature = () => {
  return (
    <section className='container' id='feature'>
    <h6 className='text-center textColor1 py-5'>WHY dyleum</h6>
    <h2 className='text-center text-white'>Our solution</h2>
    <div className='row'>
    {
        FeatureData.map((feature,index)=>(
            <div className='col-12 col-md-6 mt-2 ' key={index}>
            <div class="card bgCard p-2" style={{height:'120px'}}>
            <span style={{border:'1px solid white',padding:'3px',backgroundColor:'white',color:'black' ,borderRadius:'50%',width:'40px',textAlign:'center'}}>{feature.id}</span>
            <p>{feature.para}</p>
            <span>{feature.name}</span>
                </div>
            </div>

        ))
    }
    </div>
    </section>
  )
}

export default Feature