import React, { useState } from 'react';
import banner from '../assets/banner.jpg';
import SideMenu from './SideMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Capital 'M' for consistency

  return (
    <div className="header-container">
      <img src={banner} alt="Banner" className="banner-img" />
      <h1 className="header-title">
        THE GUIDE TO BUILDING A <br /> STRONG MBA APPLICATION
      </h1>
      <button className="menu-button" onClick={() => setMenuOpen(true)}>
        <span>≡</span> MENU
      </button>

      {/* Show menu only when open */}
      {menuOpen && <SideMenu closeMenu={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Header;
