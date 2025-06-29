import React from 'react'
import coffee from "../assets/image/home/coffee.png"
import displayer from "../assets/image/home/img-hero.png"
import { CartIcon } from '../assets/svg/exportIcons'

const Home = () => {
  return (
    <section className='home-page'>
      <div className="coffee coffee1">
        <img src={coffee} alt="" />
      </div>

      <div className="main-section">
        <div className="header">
          Enjoy your <div className="highlight">coffee</div>  before your activity
        </div>
        <div className="sub-header">
          Boost your productivity and build your mood with a glass of coffee in the morning
        </div>
        <div className="btn-wrapper">
          <button type="button">
            Order now
            <div className="icon">
              <CartIcon />
            </div>
          </button>
          <button type="button">
            More menu
          </button>
        </div>

      </div>

      <div className="coffeeDisplayer">
        <img src={displayer} alt="" />
      </div>
      <div className="coffee coffee2">
        <img src={coffee} alt="" />
      </div>
    </section>
  )
}

export default Home