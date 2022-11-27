import React from 'react'
import SEARCH from '../Assets/cart.webp'

const Cart = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            fontSize: 18,
            width: '50%',
            textAlignLast: 'left',
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          CART
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <img src={SEARCH} alt="search" width="12%" />
        </div>
      </div>
    </div>
  )
}

export default Cart
