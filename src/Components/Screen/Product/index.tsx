import React from 'react'
import Cart from '../../Cart'
import ProductDescripion from './ProductDescripion'

const Product = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
      }}
    >
      <div
        style={{
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          padding: '3% 2%',
          width: '80%',
          marginRight: 20,
        }}
      >
        <ProductDescripion />
      </div>
      <div
        style={{
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          padding: '3% 2%',
          width: '20%',
        }}
      >
        <Cart />
      </div>
    </div>
  )
}

export default Product
