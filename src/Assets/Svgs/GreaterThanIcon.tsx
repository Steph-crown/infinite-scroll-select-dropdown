import React, { CSSProperties, FC } from 'react'

const GreaterThanIcon: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      width='7'
      height='14'
      viewBox='0 0 7 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-testid='greater-than-icon'
    >
      <path
        d='M0.940002 12.2797L5.28667 7.93306C5.8 7.41973 5.8 6.57973 5.28667 6.06639L0.940002 1.71973'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default GreaterThanIcon

export type SvgProps = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}
