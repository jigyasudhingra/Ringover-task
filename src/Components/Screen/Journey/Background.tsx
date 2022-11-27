import React from 'react'
import './index.css'
import GRASS_FIELD from '../../../Assets/grasspic.jpg'

const Background = () => {
  return (
    <div>
      <div>
        <img src={GRASS_FIELD} alt="grass-field" width="100%" />
      </div>
      <div
        style={{
          padding: '100px 15px 30px 15px',
          marginTop: '-20%',
          position: 'relative',
          zIndex: 20,
          background:
            'linear-gradient(0deg, rgba(0,0,0,1) 80%, rgba(255,255,255,0) 100%)',
          color: 'white',
          textAlign: 'left',
        }}
      >
        <div>
          <ul className="StepProgress">
            <div className="StepProgress-item current">
              <strong>THE ROOTS</strong>
              Our entire life when we shop, we are limited by choices that are
              there in a store. We are often on the side where we buy our
              favourite coloured shoes made by someone else but what if we
              designed it? What if we could involve in the making of a shoe we
              want to buy? This little thought sprouted to become what we are
              today, KICKSUP! ;)
            </div>
            <div className="StepProgress-item current">
              <strong>CHAPTER I</strong>
              Understanding the trends in the industry and what the users think
              when they buy were our top priorities before we moved further in
              the building. After weeks of fruitful research, we stepped into
              the users shoes and look at what we plan to do. Its a great joy
              for the users if they are involved in the making. Were heading
              into an era of technology and people prefer online shopping to
              shopping in an outlet.
            </div>
            <div className="StepProgress-item current">
              <strong>CHAPTER I</strong>
              Every milestone begins with a single step and before KICKSUP
              sprouted, the team manufactured in small scale with two users a
              month. This experience was crucial to our brand as this is our
              first practical experience. Interacting with the users was the
              best thing ever. The positive reviews and support from people
              motivated us to push our limits further.
            </div>
            <div className="StepProgress-item current">
              <strong>KICKSUP</strong>
              Here we are, made a perfect platform for you to involve in the
              making of a shoe you want to buy! We have evolved ever since we
              started out. We wish to help you more and make KICKSUP a bigger
              team. Design your shoe and be a part of our journey!
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Background
