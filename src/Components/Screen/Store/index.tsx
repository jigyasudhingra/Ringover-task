import React from 'react'
import Cart from '../../Cart'
import Filters from './Filters'
import List from './List'

const Store = () => {
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
          width: '40%',
          padding: '3% 2%',
        }}
      >
        <Filters />
      </div>
      <div
        style={{
          width: '100%',
          marginLeft: 20,
          marginRight: 20,
          padding: '3% 2%',
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
        }}
      >
        <List />
      </div>
      <div
        style={{
          width: '40%',
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          padding: '3% 2%',
        }}
      >
        <Cart />
      </div>
    </div>
  )
}

export default Store
