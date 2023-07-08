import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({title,para,btnTxt,img}) => {
  return (
    <div class="card bgCard p-2" >
        <img src={require('../../images/Dyleum.svg').default} style={{width:'70px'}} alt=""/>
        <div class="card-body p-0">
            <h5 class="card-title textColor1 fs-6"> {title}</h5>
            <p class="card-text">{para}</p>
            <Link  class="btn btn-primary">{btnTxt}</Link>
        </div>
        </div>
  )
}

export default ProductCard
