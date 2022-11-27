import React from 'react'
import { NavLink } from 'react-router-dom'
import APP_LOGO from '../Assets/user.png'
import COMPANY_LOGO from '../Assets/websitelogo.png'

const NavigationMenu: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '30px 100px',
      }}
    >
      {AppLogo()}
      {Menu()}
      {UserInfo()}
    </div>
  )
}

const AppLogo = () => (
  <div
    style={{
      width: '10%',
    }}
  >
    <img src={COMPANY_LOGO} alt="app-logo" width={40} />
  </div>
)

const UserInfo = () => (
  <div
    style={{
      width: '10%',
      alignSelf: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '100%',
          alignSelf: 'center',
          textAlign: 'right',
          textAlignLast: 'right',
        }}
      >
        <img src={APP_LOGO} alt="app-logo" width={15} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          fontSize: 12,
          paddingLeft: '10%',
        }}
      >
        <p>GAGAN</p>
      </div>
    </div>
  </div>
)

const MenuElements: {
  name: string
  to: string
}[] = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'the journey',
    to: '/journey',
  },
  {
    name: 'team',
    to: '/team',
  },
  {
    name: 'store',
    to: '/store',
  },
  {
    name: 'contact',
    to: '/contact',
  },
]

const Menu = () => (
  <div
    style={{
      width: '100%',
      fontSize: 12,
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      letterSpacing: 0.8,
    }}
  >
    {MenuElements.map((i, idx) => (
      <div
        key={i.name}
        style={{
          paddingRight: idx !== MenuElements.length - 1 ? 25 : 0,
        }}
      >
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: 'none',
                  color: 'black',
                  border: '1px solid',
                  borderImage: `linear-gradient(90deg, rgba(0,0,0,1) 80%, rgba(255,255,255,0) 80%) 0 0 100% 0 `,
                  paddingBottom: 5,
                }
              : {
                  textDecoration: 'none',
                  color: 'black',
                  paddingBottom: 8,
                }
          }
          to={i.to}
        >
          {i.name}
        </NavLink>
      </div>
    ))}
  </div>
)

export default NavigationMenu
