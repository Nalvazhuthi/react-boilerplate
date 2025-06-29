import React from 'react'
import "./style/main.scss"
import Home from './pages/home'
import NavBar from './components/navBar'
import Popular from './pages/popular'
import DeliveryService from './pages/deliveryService'

const App = () => {
  return (
    <div className='content-container'>
      <NavBar />
      <Home />
      <Popular />
      <DeliveryService />
    </div>
  )
}

export default App