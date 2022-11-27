/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import SEARCH from '../../../Assets/filter.png'
import { CartState } from '../../../Context/Context'

const Filters = () => {
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
          FILTERS
        </div>
        <div
          style={{
            width: '100%',
            justifyContent: 'right',
          }}
        >
          <img src={SEARCH} alt="search" width="10%" />
        </div>
      </div>
      <div
        style={{
          paddingTop: '3%',
          width: '100%',
          textAlign: 'left',
          textAlignLast: 'left',
        }}
      >
        {CostFilter()}
        {ColourFilter()}
        {DesignTemplateFilter()}
        {ProductTypeFilter()}
      </div>
    </div>
  )
}

const ColourFilter = () => {
  const { productDispatch } = CartState()
  const color = ['red', 'blue', 'yellow', 'green', 'olive']
  return (
    <>
      <br />
      <br />
      <div style={{ fontSize: 16 }}>Colour</div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          float: 'left',
        }}
      >
        {color.map((i) => {
          return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={i}
              style={{
                backgroundColor: i,
                padding: 12,
                marginRight: 8,
                cursor: 'pointer',
              }}
              onKeyDown={() => {}}
              onClick={() => {
                productDispatch({
                  type: 'FILTER_BY_COLOUR',
                  payload: i,
                })
              }}
            />
          )
        })}
      </div>
      <br />
    </>
  )
}

const CostFilter = () => {
  const cost: {
    id: number
    lower: number
    upper: number
  }[] = [
    {
      id: 1,
      lower: 1500,
      upper: 4000,
    },
    {
      id: 2,
      lower: 4001,
      upper: 7000,
    },
  ]

  const { productDispatch } = CartState()

  return (
    <>
      <br />
      <br />
      <div style={{ fontSize: 16 }}>Cost</div>
      <br />
      {cost.map((i) => {
        return (
          <div key={i.id}>
            <input
              type="radio"
              style={{
                cursor: 'pointer',
              }}
              id={`${i.lower}-${i.upper}`}
              name="cost"
              value={`${i.lower} - ${i.upper}`}
              onChange={() =>
                productDispatch({
                  type: 'FILTER_BY_COST',
                  payload: i,
                })
              }
            />
            <label htmlFor="html">Rs. {`${i.lower} - ${i.upper}`}</label>
          </div>
        )
      })}
    </>
  )
}

const DesignTemplateFilter = () => {
  const type: {
    id: number
    val: number
  }[] = [
    {
      id: 1,
      val: 3,
    },
    {
      id: 2,
      val: 4,
    },
  ]

  return (
    <>
      <br />
      <br />
      <div style={{ fontSize: 16 }}>Design Templates</div>
      <br />
      {type.map((i) => {
        return (
          <div key={i.id}>
            <input
              type="radio"
              style={{
                cursor: 'pointer',
              }}
              id={`${i.val}`}
              name="design"
              value={i.val}
            />
            <label htmlFor="html">{i.val}</label>
          </div>
        )
      })}
    </>
  )
}

const ProductTypeFilter = () => {
  const type: {
    id: number
    val: string
  }[] = [
    {
      id: 1,
      val: 'Loafers',
    },
    {
      id: 2,
      val: 'Sneakers',
    },
  ]

  return (
    <>
      <br />
      <br />
      <div style={{ fontSize: 16 }}>Type</div>
      <br />
      {type.map((i) => {
        return (
          <div key={i.id}>
            <input
              type="radio"
              style={{
                cursor: 'pointer',
              }}
              id={`${i.val}`}
              name="type"
              value={i.val}
            />
            <label htmlFor="html">{i.val}</label>
          </div>
        )
      })}
    </>
  )
}

export default Filters
