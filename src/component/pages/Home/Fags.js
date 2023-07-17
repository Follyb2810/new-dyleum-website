import React from 'react';
import { FagData } from '../../Data';

const Fags = () => {
  return (
    <section className='container'>
      <h6 className='text-center textColor1 fs-14 pt-5 pb-2'>FAQ</h6>
      <h2 className='text-center text-white subtitle'>Commonly asked questions about Dyleum</h2>
      <div className="accordion accordion-flush py-3" id="accordionFlushExample" >
        {FagData.map((question, index) => (
          <div className="accordion-item fagBorder" key={index}>
            <h2 className="accordion-header text-white"  style={{background:"#101419",color:'white'}}>
              <button
                className="accordion-button collapsed text-white fs-16 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseOne-${index}`} 
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${index}`} 
                style={{background:"#101419"}}  
              >
                {question.ques}
              </button>
            </h2>
            <div
              id={`flush-collapseOne-${index}`} 
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{background:"#101419",color:'white'}}
            >
              <div className="accordion-body fs-16">{question.ans}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fags;
