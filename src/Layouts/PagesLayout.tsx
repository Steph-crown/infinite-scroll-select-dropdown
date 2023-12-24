/* eslint-disable react-hooks/exhaustive-deps */
import { Loader } from 'Components'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const PagesLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  )
}

export default PagesLayout
