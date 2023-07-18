import React from 'react';
import {RoadMapData} from '../../Data'
function Roads() {
  return (
    <div className='container' id='road'>
    <h2 className='text-center textColor1 fs-14 pt-5 pb-2'>OUR ROADMAP</h2>
    <h2 className='text-center text-white subtitle'> Dyleum's roadmap to revolutionize cryptocurrency</h2>
      

    <div className="timeline">
		<ul>
			{
        RoadMapData.map((road,index)=>(
          <li key={index}>
				<span className='px-4 py-2 fs-20 text-white'>{road.phase}</span>
				<div className="content py-3">
					<React.Fragment>
           {
            road.task.map((task,index)=>(
              <p className='fs-16 textColor' key={index}>{task}</p>
            ))
           }
          </React.Fragment>
				</div>
			</li>
        ))
      }
		</ul>
	</div>
    </div>
  );
}

export default Roads;
