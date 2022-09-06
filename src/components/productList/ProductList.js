import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import { products } from '../../data'

function ProductList() {

    return (
        <div className='productList'>
            <div className="pl-texts">
                <h1 className="pl-title">Create Learn & Grow</h1>
                <p className="pl-desc">
                    This is my way to showcase projects with some creativity
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=> {
                  return   <Product key={item.id} img={item.img} link={item.link}/>
                })}
            </div>
        </div>
    )
}

export default ProductList