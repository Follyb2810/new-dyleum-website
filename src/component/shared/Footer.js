import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { socialIcon,CompanyData,CompanySupport } from '../Data' 
import file from '../images/file/dyleum-Pitch-deck.pdf'

const Footer = () => {
  return (
    <footer className='footer pt-5'>
        <section className='container '>
              <div className='row py-4 justify-content-between '>
                <div className='col-12 col-sm-6 col-md-3 text-start'>
                    <div className='stack '>
                    <Link to="/">
                    <img src={require('../images/Dyleum.svg').default} width='100px' height='45px' alt=''/>
                  </Link>
                  <p className='fs-14 text-white'>The AI Decentralised Exchange</p>
                  <ol className='list-inline d-flex text-center'>
                  {
                    socialIcon.map((social,index)=>(
                              <li class="list-inline-item text-center" key={index}>
                                <a href={social.path} className='fs-3' target='_blank' rel='noreferrer'>{social.icons}</a>
                              </li>
                              ))
                            }
                            </ol>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3 mt-3 mt-md-0'>
                    {CompanyData.map((company, index) => (
                      <React.Fragment key={index}>
                        <h4 className='text-white fs-16'>{company.Compnany}</h4>
                        {company.name.map((name, index) => (
                          <h6 key={index} className="fs-14">
                          <a
                            href={name.path}
                            target={name.path.startsWith('#') ? '' : '_blank'}
                            download={name.path === file ? true : false}
                            rel="noreferrer"
                            style={{ textDecoration: 'none', color: '#B7D4FF' }}
                            onClick={(e) => {
                              if (name.path === file) {
                                if (!window.confirm('Are you sure you want to download this file?')) {
                                  e.preventDefault();
                                }
                              }
                            }}
                          >
                            {name.name}
                          </a>
                        </h6>
                        
                        ))}
                      </React.Fragment>
                    ))}
                </div>
                <div className='col-12 col-sm-6 col-md-3 mt-3 mt-md-0'>
                  {
                    CompanySupport.map((company, index) => (
                      <React.Fragment key={index}>
                        <h4 className='text-white fs-16'>{company.support}</h4>
                        {company.name.map((support, index) => (
                          <h6 key={index} className='fs-14'><a href={support.path} style={{textDecoration:'none',color:'#B7D4FF'}}>{support.name}</a></h6>
                        ))

                        }
                      </React.Fragment>

                    ))
                  }
                </div>
                <div className='col-12 col-sm-6 col-md-3 fs-14  mt-3 mt-md-0'>
                <h4 className='text-white fs-16'>Stay-up-to-date</h4>
                <p>Get the latest news and updates</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><AiOutlineArrowRight/></button>
                      </div>
                </div>
                <div className='col-12 mt-3 mt-md-0'>
                <hr class="border border-white border-2 opacity-50"/>
                 <span className=''>Copyright 2023 - Dyleum</span>

                </div>
              </div>
        </section>
      </footer>
  )
}

export default Footer