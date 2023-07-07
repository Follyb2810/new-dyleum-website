import React from 'react'
import {ProductCardData} from '../../Data'
import ProductCard from './ProductCard'
const Product = () => {
  return (
    <section className='container' id='product'>
    <h6 className='text-center py-5'>OUR PRODUCT</h6>   
    <h2 className='text-center textColor1'>Browse Through Our Array Of Products</h2>
       <div className='row'>
          {
            ProductCardData.map((product, index) =>(
              <div className='col-12 col-sm-6 col-md-4 p-2' key={index}>
                    <ProductCard para={product.para} img={product.img} title={product.title} btnTxt={product.btnTxt}  />
              </div>
            ))
          }
       </div>
    </section>
  )
}

export default Product