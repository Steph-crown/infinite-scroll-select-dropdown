import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from 'Pages'
import { PagesLayout } from 'Layouts'

const RoutesSwitches = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* all routes here use the Pages layout. This layout contains the suspense for this set of routes.  */}
        <Route path='/' element={<PagesLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesSwitches
