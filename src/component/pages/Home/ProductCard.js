import React from 'react'
import {Link} from 'react-router-dom'
import * as IMG from '../../images/images'

const ProductCard = ({title,para,btnTxt,img}) => {
  return (
    <div class="card bgCard pt-2 pt-md-3 px-2 px-3  ">
        <img src={img}  style={{width:'35px'}} alt=""/>
        <div class="card-body p-0">
            <h5 class="card-title textColor1 fs-6 py-2"> {title}</h5>
            <p class="card-text">{para}</p>
            <Link  class="btn btn-primary">{btnTxt}</Link>
        </div>
        </div>
  )
}

export default ProductCard
