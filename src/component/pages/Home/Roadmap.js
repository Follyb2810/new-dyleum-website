import React from 'react'
import {RoadMapData} from '../../Data'

const Roadmap = () => {
  return (
    <section className='container' id='road'>
       <h2 className='text-center textColor1 fs-14 pt-5 pb-2'>OUR ROADMAP</h2>
       <h2 className='text-center text-white subtitle'> Dyleum's roadmap to revolutionize cryptocurrency</h2>
       <div className='row py-3'>
          {
                RoadMapData.map((road,index)=>(
                    <div className='col-12 col-md-4 mt-2 mt-md-0' key={index}>
                    <div style={{ display: 'flex', flexDirection: `${index % 2 === 1 ? 'column' : 'column-reverse'}` }}>

                       <div>
                       <h3 className='text-center text-white py-3'> {road.phase}</h3>
                       <React.Fragment>
                        {
                           road.task.map((task,index)=>(
                               <h6 className='text-center textColor py-2' key={index}>{task}</h6>
                           ))
                        }
                        </React.Fragment>
                       </div>
                     <div className={`${index % 2 ===1 ?'road':'road1'}   ${index === 1 ? 'bgRed' : index === 2 ? 'bgBlue ' : 'bgGreen'} my-2`}></div>
                      <div className='d-flex justify-content-center my-5 '>
                        <div className={`line ${index === 1 ? 'bgRed' : index === 2 ? 'bgBlue' : 'bgGreen'}`}>
                        <div className={`${index === 1?'bgRed ':index === 2? ' bgBlue ':'bgGreen '} ${index % 2 === 1?'circle1':'circle'} ` } ></div>
                            </div>
                        
                      </div>
                      </div>
                 </div>
                ))
          }
       </div>
    </section>
  )
}

export default Roadmap