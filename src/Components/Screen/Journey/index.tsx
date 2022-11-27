import React from 'react'
import Background from './Background'

const Journey = () => {
  return (
    <div
      style={{
        width: 'auto',
        padding: '0% 10%',
      }}
    >
      <div
        style={{
          position: 'relative',
          fontSize: 55,
          fontWeight: 'bold',
          letterSpacing: 2,
          color: 'white',
          zIndex: 30,
          marginTop: 150,
        }}
      >
        THE JOURNEY
      </div>
      <div style={{ marginTop: -200, paddingBottom: 50 }}>
        <Background />
      </div>
    </div>
  )
}

export default Journey
