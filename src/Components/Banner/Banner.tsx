import { BannerImage } from 'Assets/Pngs'
import { FC } from 'react'
import { Navbar } from 'Components'

type Props = {
  height?: string
  headerText: string
  subtext: string
}

const Banner: FC<Props> = ({ headerText, subtext, height = '400' }) => {
  const minHeight = `${height}px`
  return (
    <div className='relative w-full' style={{ minHeight }}>
      <img src={BannerImage} alt='Banner' className='absolute top-0 left-0 w-full object-cover right-0' style={{ minHeight }} />
      {''}

      <div className='absolute top-0 left-0 w-full h-full z-10 '>
        <Navbar isLoggedIn={false} />

        <div className='flex h-full w-full justify-center items-center flex-col'>
          {headerText ? <h1 className='h1'>{headerText}</h1> : null}
          {subtext ? <p className='p text-center'>{subtext}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Banner
