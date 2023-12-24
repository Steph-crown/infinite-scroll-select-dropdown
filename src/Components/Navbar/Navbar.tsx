import { GuestUserNavigation, Logo } from 'Components'

import { FC } from 'react'

type Props = {
  isLoggedIn: boolean
}

const Navbar: FC<Props> = ({ isLoggedIn }) => {
  return (
    <div className='flex items-center justify-between wrapper py-4'>
      <Logo />

      <GuestUserNavigation />
    </div>
  )
}

export default Navbar
