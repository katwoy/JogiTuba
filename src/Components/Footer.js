import React from 'react';
import './Footer.css';
import {HashRouter, Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <HashRouter>
          Copyright © 2020 <Link to="/">JogiTuba</Link>
        </HashRouter>
      </div>
      <div className="footer-icon-attribution">
        Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" rel="nofollow">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" rel="nofollow">www.flaticon.com</a>
      </div>
    </footer>
  )
}

export default Footer;