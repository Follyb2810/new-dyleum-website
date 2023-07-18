import React from 'react'
import {ProductCardData} from '../../Data'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'
const Product = () => {
  return (
    <section className='container' id='product'>
    <h6 className='text-center fs-14 pt-5 pb-2 textColor1'>OUR PRODUCT</h6>   
    <h2 className='text-center subtitle text-white'>Browse through our array of products</h2>
       <div className='row'>
          {
            ProductCardData.map((product, index) =>(
              <div className='col-12 col-md-6 col-lg-4 p-2' key={index}>
              <div className="card bgCard p-3">
              <img src={product.img}  style={{width:'40px'}} alt=""/>
              <div className="card-body p-0">
                  <h5 className="card-title textColor1 fs-6 mt-4"> {product.title}</h5>
                  <p className="card-text fs-16 mt-3">{product.para}</p>
                  <a href={product.pathToProduct} target={product.pathToProduct.startsWith('https') ?'_blank':''} rel='noreferrer' className="btn primaryB btnPrimary">{product.btnTxt}</a>
              </div>
              </div>
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default Product