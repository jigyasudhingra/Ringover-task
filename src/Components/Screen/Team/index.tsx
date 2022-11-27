import React from 'react'
import ZIDANE from '../../../Assets/zidane.jpg'
import TONI from '../../../Assets/tonikroos.jpg'
import IKER from '../../../Assets/ikercasillas.jpg'
import JAMES from '../../../Assets/james.jpg'
import RONALDO from '../../../Assets/christiano.jpg'
import LINKEDIN from '../../../Assets/linkedin.png'
import MEDIUM from '../../../Assets/medium.png'
import FACEBOOK from '../../../Assets/facebook.png'
import NBA from '../../../Assets/nba.png'

const Team = () => {
  return (
    <div
      style={{
        padding: '3% 10%',
      }}
    >
      <p
        style={{
          fontSize: 16,
        }}
      >
        Without bonding and coordination, every project is a failure. Look at
        who make KICKSUP great. ;)
      </p>
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {TeamMembers.map((i) => {
          return (
            <div
              style={{
                boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                width: '100%',
                marginRight: '5%',
              }}
            >
              <img
                src={i.img}
                alt={i.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <br />
              <br />
              <div
                style={{
                  padding: '8%',
                }}
              >
                <strong>{i.name}</strong>
                <br />
                {i.role}
                <br />
                <br />
                <div>
                  {i.linkedin && (
                    <img
                      src={LINKEDIN}
                      alt="linkedin"
                      width="15%"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  )}
                  {i.facebook && (
                    <img
                      src={FACEBOOK}
                      alt="facebbok"
                      width="15%"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  )}
                  {i.medium && (
                    <img
                      src={MEDIUM}
                      alt="medium"
                      width="15%"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  )}
                  {i.nba && (
                    <img
                      src={NBA}
                      alt="nba"
                      width="15"
                      style={{
                        marginRight: 10,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <br />
      <p
        style={{
          fontSize: 16,
        }}
      >
        and, You! ;)
      </p>
    </div>
  )
}

const TeamMembers: {
  name: string
  img: string
  role: string
  linkedin?: string
  facebook?: string
  medium?: string
  nba?: string
}[] = [
  {
    name: 'Zidane',
    img: ZIDANE,
    role: 'Leadership & Management',
    linkedin: '1',
    medium: '2',
    facebook: '2',
  },
  {
    name: 'Toni Kroos',
    img: TONI,
    role: 'Leadership & Management',
    linkedin: '1',
    medium: '2',
  },
  {
    name: 'Iker Casillas',
    img: IKER,
    role: 'Leadership & Management',
    medium: '2',
  },
  {
    name: 'James',
    img: JAMES,
    role: 'Leadership & Management',
    medium: '2',
    linkedin: '1',
  },
  {
    name: 'Cristiano',
    img: RONALDO,
    role: 'Leadership & Management',
    linkedin: '1',
    facebook: '2',
  },
]

export default Team
