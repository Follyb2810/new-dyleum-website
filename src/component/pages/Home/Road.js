import React, { useState } from 'react';
import {Phase1,Phase2,Phase3} from '../../Data'

const Road = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-12 row justify-content-between'>
         <div className='col-4 text-center'>1</div>
         <div className='col-4 text-center'>
             {
              Phase2.map((phase,index)=>(
                <div key={index}>
                   <h5>{phase.phase}</h5>
                   <React.Fragment>
                   {
                    phase.task.map((task,index)=>(
                      <h6 className='fs-16'>{task}</h6>
                    ))
                   }
                   </React.Fragment>
                </div>
              ))
             }
         </div>
         <div className='col-4 text-center'>1</div>
        </div> 
        <div className="col-4 road"></div>
        <div className='col-4 road11'></div>
        <div className='col-4 road12'></div>
        <div className='col-12 row justify-content-between'>
        <div className='col-4 text-center'>
        {
          Phase1.map((phase,index)=>(
            <div key={index}>
               <h5>{phase.phase}</h5>
               <React.Fragment>
               {
                phase.task.map((task,index)=>(
                  <h6 className='fs-16' key={index}>{task}</h6>
                ))
               }
               </React.Fragment>
            </div>
          ))
         }
        </div>
        <div className='col-4 text-center'>1</div>
        <div className='col-4 text-center'>
        {
          Phase3.map((phase,index)=>(
            <div key={index}>
               <h5 key={index}>{phase.phase}</h5>
               <React.Fragment>
               {
                phase.task.map((task,index)=>(
                  <h6 className='fs-16' key={index}>{task}</h6>
                ))
               }
               </React.Fragment>
            </div>
          ))
         }
        </div>
       </div>
      </div>
    </section>
  );
};

export default Road;

