import React from 'react';
import {RoadMapData} from '../../Data'
function Roads() {
  return (
    <div className='container'>
      

    <div class="timeline">
		<ul>
			{
        RoadMapData.map((road,index)=>(
          <li>
				<span className='px-4 py-2 fs-20 text-white'>{road.phase}</span>
				<div class="content py-3">
					<React.Fragment>
           {
            road.task.map((a,b)=>(
              <p className='fs-16 textColor'>{a}</p>
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
