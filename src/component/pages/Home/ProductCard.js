import React from 'react'
import {Link} from 'react-router-dom'
import * as IMG from '../../images/images'

const ProductCard = ({title,para,btnTxt,img}) => {
  return (
    <div class="card bgCard p-3">
        <img src={img}  style={{width:'40px'}} alt=""/>
        <div class="card-body p-0">
            <h5 class="card-title textColor1 fs-6 mt-4"> {title}</h5>
            <p class="card-text fs-16 mt-3">{para}</p>
            <Link  class="btn primaryB px-3 py-2 fs-7">{btnTxt}</Link>
        </div>
        </div>
  )
}

export default ProductCard
