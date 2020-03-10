import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="page-header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src="../jogituba-logo.png" alt="yogi" className="header-logo-image"/>
          <h1 className="header-logo-title">JogiTuba</h1>
        </a>
      </div>
    </header>
  )
}

export default Header;