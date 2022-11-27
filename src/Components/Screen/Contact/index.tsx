import React from 'react'
import INSTA_ICON from '../../../Assets/insta.png'
import TWITTER_ICON from '../../../Assets/twitter.png'
import FACEBOOK_ICON from '../../../Assets/facebook.png'

const Contact = () => {
  return (
    <div
      style={{
        padding: '5% 38%',
      }}
    >
      <div
        style={{
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          padding: '15% 15%',
        }}
      >
        <p
          style={{
            fontSize: 20,
          }}
        >
          REACH US AT
        </p>
        {/* <br /> */}
        <div
          style={{
            textAlign: 'left',
            textAlignLast: 'left',
          }}
        >
          <div
            style={{
              fontSize: 18,
            }}
          >
            support@kicksup.com
          </div>
          <div>for any technical support</div>
          <br />
          <div
            style={{
              fontSize: 18,
            }}
          >
            info@kicksup.com
          </div>
          <div>for more information</div>
          <br />
          <div
            style={{
              fontSize: 18,
            }}
          >
            feedback@kicksup.com
          </div>
          <div>to send your feedback</div>
          <br />
          <div
            style={{
              fontSize: 18,
            }}
          >
            jobs@kicksup.com
          </div>
          <div>to work with us</div>
        </div>
      </div>
      <div
        style={{
          paddingTop: '10%',
        }}
      >
        stay in touch
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginTop: '3%',
          }}
        >
          {SOCIALS.map((i, ind) => {
            return (
              <img
                src={i.src}
                key={i.name}
                style={{
                  width: '8%',
                  marginRight: ind === SOCIALS.length ? 0 : 10,
                }}
                alt={i.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const SOCIALS = [
  {
    name: 'Twitter',
    src: TWITTER_ICON,
  },
  {
    name: 'Instagram',
    src: INSTA_ICON,
  },
  {
    name: 'Facebook',
    src: FACEBOOK_ICON,
  },
]

export default Contact
