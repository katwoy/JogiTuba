import React from 'react';
import {Link} from 'react-router-dom';
import './Start.css';

const Start = () => {
  return (
    <div className="welcome-message">
      <h2 className="welcome-message-title">Witaj na JogiTubie!</h2>
      <div className="welcome-message-text">Jesteś w idealnym miejscu, aby zacząć swoją domową praktykę. Znajdziesz tu filmy z jogą i medytacjami od nauczycielek z najlepszych polskich kanałów YouTube. Możesz praktykować o dowolnej porze i w dowolnym miejscu. Żeby zacząć, potrzebujesz jedynie kawałka wolnej przestrzeni.</div>
      <Link to="/content"><button className="btn-without-log btn-main">Zacznij teraz</button></Link>
    </div>
  )
}

export default Start;