export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }
    default:
      return state
  }
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_COST':
      return {
        ...state,
        byCost: { lower: action.payload.lower, upper: action.payload.upper },
      }
    case 'FILTER_BY_COLOUR':
      return { ...state, byColour: action.payload }
    default:
      return state
  }
}
