import React from 'react'
import {ProductCardData} from '../../Data'
import ProductCard from './ProductCard'
const Product = () => {
  return (
    <section className='container' id='product'>
    <h6 className='text-center fs-14 pt-5 pb-2 textColor1'>OUR PRODUCT</h6>   
    <h2 className='text-center subtitle text-white'>Browse through our array of products</h2>
       <div className='row'>
          {
            ProductCardData.map((product, index) =>(
              <div className='col-12 col-md-6 col-lg-4 p-2' key={index}>
                    <ProductCard para={product.para} img={product.img} title={product.title} btnTxt={product.btnTxt}  />
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default Product