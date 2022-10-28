import React from 'react'
import Jumbotrom from '../components/products/Jumbotrom'
import ProductsList from '../components/products/ProductsList'

export default function ProductsPage() {
  return (
        <div className='masthead'>
            <Jumbotrom />
            <div className='container mt-4'>
                <h3>Our Best Models</h3>
                <p className='lead'>Discover our best products line of phone shields and enjoy different colors and sizes !</p>
                <hr className="my-2" />
            </div>
            <ProductsList />
        </div>
    )
}
