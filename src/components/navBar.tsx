import React from 'react'
import Search from './search'
import { CartIcon, LogoIcon } from '../assets/svg/exportIcons'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo">
                <LogoIcon />
            </div>
            <div className="navs">
                <div className="nav">About us</div>
                <div className="nav">Our Product</div>
                <div className="nav">Delivery</div>
            </div>
            <div className="shop">
                <Search />
            </div>
        </div>
    )
}

export default NavBar