import React from 'react';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="page-header">
      <a href="/" className="header-logo">
        <img src={logo} alt="yogi" className="header-logo-image"/>
        <h1 className="header-logo-title">JogiTuba</h1>
      </a>
    </header>
  )
}

export default Header;