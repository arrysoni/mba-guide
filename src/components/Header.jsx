import React from 'react'
import banner from '../assets/banner.jpg'  // ✅ Correct way to import

const Header = () => {
  return (
    <div className="header-container">
    <img src={banner} alt="Banner" className="banner-img" />
    <h1 className="header-title">THE GUIDE TO BUILDING A <br /> STRONG MBA APPLICATION</h1>
    <button className="menu-button"><span>≡</span> MENU</button>
    </div>

  )
}

export default Header
