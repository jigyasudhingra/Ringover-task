/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import SEARCH from '../../../Assets/search.png'
import STAR from '../../../Assets/star.png'
import STAR_FILL from '../../../Assets/fill-star.png'
import { CartState } from '../../../Context/Context'

const List = () => {
  return (
    <div>
      {ShoesListingHeader()}
      {ProductsListing()}
    </div>
  )
}

const ShoesListingHeader = () => (
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
      SHOES
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
      <div
        style={{
          paddingRight: '5%',
        }}
      >
        <img src={SEARCH} alt="search" width={10} />
      </div>
      <div>
        <button
          type="button"
          style={{
            border: '0.5px solid',
            fontSize: 12,
            cursor: 'pointer',
          }}
          onClick={() => {}}
        >
          sort by
        </button>
      </div>
    </div>
  </div>
)

const ProductsListing = () => {
  const {
    state: { products },
    dispatch,
    productState,
  } = CartState()

  const FilteredProduct = () => {
    let alteredProducts = products

    const costUpperRange = productState.byCost.upper
    const costLowerRange = productState.byCost.lower
    const colour = productState.byColour

    if (colour !== '') {
      alteredProducts = alteredProducts.filter(
        (i: ProductProps) => i.color === colour
      )
    }

    function checkPrice(i: ProductProps) {
      return i.price >= costLowerRange && i.price <= costUpperRange
    }

    if (costLowerRange !== -1 && costLowerRange !== -1) {
      alteredProducts = alteredProducts.filter(checkPrice)
    }
    return alteredProducts
  }

  return (
    <div
      style={{
        paddingTop: '3%',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
      }}
    >
      {FilteredProduct().map((i: ProductProps) => (
        <div
          key={i.id}
          style={{
            padding: 8,
            cursor: 'pointer',
            minHeight: '10%',
          }}
        >
          <div
            style={{
              padding: '10px 0px',
            }}
            onClick={() => {
              window.location.href = `/Ringover-task/#/product/${i.id}`
            }}
            onKeyDown={() => {}}
          >
            <img
              src={i.img}
              alt={i.name}
              style={{
                width: '100%',
              }}
            />
          </div>
          <div>
            <div
              style={{
                textAlign: 'left',
                fontWeight: 'bold',
                textAlignLast: 'left',
                fontSize: 14,
              }}
            >
              {i.name}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  textAlign: 'left',
                  textAlignLast: 'left',
                }}
              >
                Rs. {i.price}/-
              </div>
              <div
                style={{
                  width: '100%',
                  textAlign: 'right',
                  textAlignLast: 'right',
                }}
              >
                {getRating(i.rating)}
              </div>
            </div>
          </div>
          <button
            style={{ width: '100%', marginTop: '5%' }}
            type="button"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: i,
              })
            }
          >
            add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export const getRating = (rating: number) => {
  const ratingStarType = []
  for (let i = 0; i < rating; i += 1) ratingStarType.push('fill')
  for (let i = 0; i < 5 - rating; i += 1) ratingStarType.push('empty')

  return (
    <div>
      {ratingStarType.map((i, idx) => (
        <img
          src={i === 'fill' ? STAR_FILL : STAR}
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}-${idx}`}
          width={i === 'fill' ? 13 : 11}
          alt={i}
        />
      ))}
    </div>
  )
}

export interface ProductProps {
  id: number
  name: string
  price: number
  img: string
  rating: number
  color: string
  reviews: number
}

export default List
