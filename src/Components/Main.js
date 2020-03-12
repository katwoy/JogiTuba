import React from 'react';
import Start from './Start';
import Content from './Content';
import './Main.css';
import {
  HashRouter,
  Route,
  Switch,
  } from 'react-router-dom';
  

const Main = () => {
  return (
    <main className="page-main">
      <div className="main-container">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Start} />
            <Route path='/content' component={Content} />
          </Switch>
        </HashRouter>
      </div>
    </main>
  )
}

export default Main;