import React from 'react'
import {Link} from 'react-router-dom'
import { socialIcon,CompanyData,CompanySupport } from '../Data' 

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='container '>
              <div className='row textColor py-3 '>
                <div className='col-12 col-sm-6 col-md-3'>
                    <div className='stack text-center text-md-start'>
                    <Link to="/">
                    <img src={require('../images/Dyleum.svg').default} width='100px' height='45px' alt=''/>
                  </Link>
                  <p className='fs-5'>The AI Decentralised Exchange</p>
                  <ol className='list-inline d-flex'>
                  {
                    socialIcon.map((social,index)=>(
                              <li class="list-inline-item" key={index}><Link className='fs-3'>{social.icons}</Link></li>
                              ))
                            }
                            </ol>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    {CompanyData.map((company, index) => (
                      <React.Fragment key={index}>
                        <h4 className='text-white'>{company.Compnany}</h4>
                        {company.name.map((name, index) => (
                          <h6 key={index}>{name.name}</h6>
                        ))}
                      </React.Fragment>
                    ))}
                </div>
                <div className='col-6 col-md-3'>
                  {
                    CompanySupport.map((company, index) => (
                      <React.Fragment key={index}>
                        <h4 className='text-white'>{company.support}</h4>
                        {company.name.map((support, index) => (
                          <h6 key={index}>{support.name}</h6>
                        ))

                        }
                      </React.Fragment>

                    ))
                  }
                </div>
                <div className='col-12 col-md-3 text-center text-md-start'>
                <h4 className='text-white'>Stay-up-to-date</h4>
                <p>Get the latest news and updates</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                      </div>
                </div>
              </div>
        </section>
      </footer>
  )
}

export default Footer