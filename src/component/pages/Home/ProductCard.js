import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({title,para,btnTxt,img,pathToProduct}) => {
  return (
    <div className="card bgCard p-3">
        <img src={img}  style={{width:'40px'}} alt=""/>
        <div className="card-body p-0">
            <h5 className="card-title textColor1 fs-6 mt-4"> {title}</h5>
            <p className="card-text fs-16 mt-3">{para}</p>
            <Link to='/' className="btn primaryB btnPrimary">{btnTxt}</Link>
        </div>
        </div>
  )
}

export default ProductCard
