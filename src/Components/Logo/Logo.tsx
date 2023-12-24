import { APP_ROUTES } from 'Constants'
import { HBXLogoWithText } from 'Assets/Svgs'
import { Link } from 'react-router-dom'
import React from 'react'

const Logo = () => {
  return (
    <Link to={APP_ROUTES.Home}>
      <HBXLogoWithText className='h-[48px] xs:h-[66px] xss:h-[80px]' />
    </Link>
  )
}

export default Logo
