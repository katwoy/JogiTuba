import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
import savasana from '../img/savasana.png';

const NotFound = () => {
  return (
    <div className="error-404">
      <h1 className="error-404-title">Ups... Nie ma strony o takim adresie.</h1>
      <div className="error-404-text">Co możesz teraz zrobić?</div>
      <Link to="/" className="error-404-link">Wróć na stronę startową</Link>
      <div className="error-404-text">lub</div>
      <Link to="/content" className="error-404-link">Przejdź do wyboru nauczycielki</Link>
      <div className="error-404-text">lub</div>
      <img src={savasana} alt="savasana" className="error-404-img"/>
    </div>
  )
}

export default NotFound;