import React from 'react'
import "./style/main.scss"
import Home from './pages/home'
import NavBar from './components/navBar'

const App = () => {
  return (
    <div className='content-container'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App