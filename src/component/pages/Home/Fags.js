import React from 'react';
import { FagData } from '../../Data';

const Fags = () => {
  return (
    <section className='container'>
      <h6 className='text-center text-white textColor1 py-5'>FAQ</h6>
      <h2 className='text-center text-white'>Commonly asked questions about Dyleum</h2>
      <div className="accordion accordion-flush bg py-3" id="accordionFlushExample">
        {FagData.map((question, index) => (
          <div className="accordion-item bg" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseOne-${index}`} 
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${index}`} 
                style={{ color: 'red' }}
              >
                {question.ques}
              </button>
            </h2>
            <div
              id={`flush-collapseOne-${index}`} 
              className="accordion-collapse collapse bg"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg">{question.ans}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fags;
