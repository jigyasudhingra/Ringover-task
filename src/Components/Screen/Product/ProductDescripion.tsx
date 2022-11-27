/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { CartState } from '../../../Context/Context'
import { getRating, ProductProps } from '../Store/List'
import LEFT_ARROW from '../../../Assets/left-arrow.png'
import STAR from '../../../Assets/star.png'

const ProductDescripion: React.FC = () => {
  const { state, dispatch } = CartState()

  // Finding the Product from all the products
  let product = state.products
  let productId = 1
  const productURL = window.location.href
  for (let i = productURL.length - 1; i > 0; i -= 1) {
    if (productURL[i] === '/') {
      productId = parseInt(productURL.substring(i + 1, productURL.length), 10)
      break
    }
  }
  product = product.filter((i: ProductProps) => {
    return i.id === productId
  })

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'left',
          textAlignLast: 'left',

          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img
          src={LEFT_ARROW}
          alt="left-arrow"
          width="2%"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            window.location.href = '/store'
          }}
          onKeyDown={() => {}}
        />
        <div style={{ fontSize: 16, marginLeft: '2%', letterSpacing: 0.7 }}>
          your design space
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {ProductImage(product[0])}
        {Images(product[0])}
        {Description(product[0])}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '2%',
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: 0.7,
            width: '20%',
          }}
        >
          Rate Product
        </div>
        <div
          style={{
            textAlign: 'left',
            textAlignLast: 'left',
            width: '100%',
          }}
        >
          {[...Array(5)].map((i, ind) => (
            <img key={ind} src={STAR} alt="unfill-star" width="2%" />
          ))}
        </div>
      </div>
      <div>
        <button type="button" style={{ padding: 5, cursor: 'pointer' }}>
          share design
        </button>
        <button
          type="button"
          style={{
            padding: 5,
            marginLeft: '2%',
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: product[0],
            })
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  )
}

const ProductImage = (product: ProductProps) => {
  const { img, name } = product
  return (
    <div style={{ width: '50%' }}>
      <img src={img} width="80%" alt={name} />
    </div>
  )
}

const Images = (product: ProductProps) => {
  const { img, name } = product
  return (
    <div
      style={{
        width: '10%',
        overflowY: 'scroll',
        marginLeft: '4%',
        alignSelf: 'center',
      }}
    >
      {[...Array(5)].map((i, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx}>
          <img src={img} width="100%" alt={name} />
        </div>
      ))}
    </div>
  )
}

const Description = (product: ProductProps) => {
  const { rating, name, reviews, price } = product
  return (
    <div
      style={{
        width: '40%',
        textAlign: 'left',
        textAlignLast: 'left',
        paddingLeft: '4%',
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</div>
      <div style={{ color: 'grey' }}>By KICKSUP and you</div>
      <br />
      {getRating(rating)}
      <div style={{ fontSize: 11, color: 'grey' }}>{reviews} reviews</div>
      <br />
      <div style={{ fontSize: 14 }}>Rs. {price}</div>
      <div style={{ fontSize: 11, color: 'grey' }}>
        Get an exclusive 20% off shopping with HDFC bank
      </div>
      <br />
      <br />
      {['Front', 'Middle', 'Back', 'Sole', 'Size'].map((j, ind) => {
        return (
          <div
            key={ind}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: '5%',
            }}
          >
            <div
              style={{
                width: '20%',
                fontSize: 12,
              }}
            >
              {j}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: j === 'Size' ? '1%' : 0,
              }}
            >
              {(ind % 2 === 0
                ? ['lightblue', 'wheat', 'lightblue']
                : ['wheat', 'grey', 'wheat']
              ).map((i, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: j === 'Size' ? '2px 6px' : 10,
                    backgroundColor: i,
                    marginLeft: '20%',
                    backdropFilter: `blur(5px)`,
                  }}
                >
                  {j === 'Size' && idx + 3}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductDescripion
