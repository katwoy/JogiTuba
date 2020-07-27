import React from 'react';
import './Header.css';
import logo from '../img/logo.png';
import {HashRouter, Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <HashRouter>
        <Link to="/" className="header-logo">
          <img src={logo} alt="yogi" className="header-logo-image"/>
          <h1 className="header-logo-title">JogiTuba</h1>
        </Link>
      </HashRouter>
    </header>
  )
}

export default Header;