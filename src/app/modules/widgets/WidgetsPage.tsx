import {Route, Routes, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {Feeds} from './components/Feeds'
import {Tables} from './components/Tables'


const WidgetsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
       
        <Route
          path='feeds'
          element={
            <>
              <PageTitle>Showing Data</PageTitle>
              <Feeds />
            </>
          }
        />

        <Route
          path='tables'
          element={
            <>
              <PageTitle>API Call</PageTitle>
              <Tables />
            </>
          }
        />

       
      </Route>
    </Routes>
  )
}

export default WidgetsPage
