import React from 'react';
import {Link} from 'react-router-dom';
import './Start.css';
import warrior from '../img/warrior.png';

const Start = () => {
  return (
    <div className="start">
      <div className="welcome-message">
        <h2 className="welcome-message-title">Witaj na JogiTubie!</h2>
        <div className="welcome-message-text">Jesteś w idealnym miejscu, aby zacząć swoją domową praktykę jogi i medytacji. Znajdziesz tu filmy instruktażowe od nauczycielek z najlepszych polskich kanałów YouTube. Możesz praktykować o dowolnej porze i w dowolnym miejscu. Żeby zacząć, potrzebujesz jedynie kawałka wolnej przestrzeni.</div>
        <Link to="/content" className="start-btn">Zacznij teraz</Link>
      </div>
      <img src={warrior} alt="warrior pose"/>
    </div>
  )
}

export default Start;