import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RestaurantsContextProvider } from './context/RestaurantsContext'

import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import UpdatePage from './routes/UpdatePage'
import './css/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Landing from './routes/Landing'

const App = () => {
  return (
    <RestaurantsContextProvider>
      <Router>
        <Routes>
          <Route exact path='/'
              element={<Landing />} />
          <Route exact path='/home'
              element={<Home />}/>
          <Route exact path='/restaurants/:id/update'
              element={<UpdatePage />}/>
          <Route exact path='/restaurants/:id'
              element={<RestaurantDetailPage />}/>
        </Routes>
      </Router>
    </RestaurantsContextProvider>
  )
}

export default App
