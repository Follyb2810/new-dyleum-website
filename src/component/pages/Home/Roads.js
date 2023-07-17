import React from 'react';
import {RoadMapData} from '../../Data'
function Roads() {
  return (
    <div className='container' id='road'>
      

    <div class="timeline">
		<ul>
			{
        RoadMapData.map((road,index)=>(
          <li key={index}>
				<span className='px-4 py-2 fs-20 text-white'>{road.phase}</span>
				<div class="content py-3">
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
