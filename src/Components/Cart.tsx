/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import SEARCH from '../Assets/cart.webp'
import { CartState } from '../Context/Context'
import { ProductProps } from './Screen/Store/List'
import RED_CROSS from '../Assets/cross.png'

const Cart = () => {
  const { state } = CartState()
  const products = state.cart
  console.log('Hello', products)

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
      {CartProducts(products)}
      {products.length > 0 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'row' }} />
          <button
            type="button"
            style={{
              padding: '2px 5px',
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            order now
          </button>
        </>
      )}
    </div>
  )
}

const CartProducts = (props: ProductProps[]) => {
  const { dispatch } = CartState()
  const products = props
  return (
    <div
      style={{
        marginTop: '5%',
      }}
    >
      {products.map((i: ProductProps, ind: number) => {
        return (
          <>
            <div
              style={{
                textAlign: 'left',
                textAlignLast: 'left',
              }}
            >
              <img
                src={RED_CROSS}
                width="5%"
                alt="red-cross"
                onKeyDown={() => {}}
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: i,
                  })
                }
              />
            </div>
            <div
              key={ind}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '45%',
                }}
              >
                <img src={i.img} alt={i.name} width="80%" />
              </div>
              <div
                style={{
                  width: '55%',
                  textAlign: 'left',
                  textAlignLast: 'left',
                }}
              >
                <div style={{ fontSize: 13 }}>{i.name ?? 'Hello'}</div>
                <div style={{ color: 'grey', fontSize: 11 }}>
                  By KICKSUP and you
                </div>
                <br />
                <div>Rs. {i.price}/-</div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Cart
