import React, { createContext, useContext, useReducer, useMemo } from 'react'
import SHOE1 from '../Assets/shoe2.png'
import { cartReducer, productReducer } from './Reducer'

const Cart = createContext()

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: Products,
    cart: [],
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byCost: {
      lower: -1,
      upper: -1,
    },
    byColour: '',
  })

  console.log(state, productState)

  const ProductProviderValue = useMemo(
    () => ({ state, dispatch, productState, productDispatch }),
    [state, dispatch, productState, productDispatch]
  )
  return <Cart.Provider value={ProductProviderValue}>{children}</Cart.Provider>
}

export const CartState = () => {
  return useContext(Cart)
}

export default Context

const Products = [
  {
    id: 1,
    name: 'KSL 01',
    price: 2000,
    img: SHOE1,
    rating: 2,
    color: 'red',
    reviews: 20,
  },
  {
    id: 2,
    name: 'KSW 01',
    price: 2500,
    img: SHOE1,
    rating: 5,
    color: 'blue',
    reviews: 40,
  },
  {
    id: 3,
    name: 'KSL 01',
    price: 2000,
    img: SHOE1,
    rating: 3,
    color: 'red',
    reviews: 25,
  },
  {
    id: 4,
    name: 'KSW 01',
    price: 2500,
    img: SHOE1,
    rating: 5,
    color: 'yellow',
    reviews: 20,
  },
  {
    id: 5,
    name: 'KSL 01',
    price: 2000,
    img: SHOE1,
    rating: 4,
    color: 'yellow',
    reviews: 90,
  },
  {
    id: 6,
    name: 'KSW 01',
    price: 2500,
    img: SHOE1,
    rating: 1,
    color: 'yellow',
    reviews: 210,
  },
]
