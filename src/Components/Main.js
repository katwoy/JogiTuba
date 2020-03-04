import React from 'react';
import Start from './Start';
import Content from './Content';
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
        <Start />
        <Content />
      </div>
    </main>
  )
}

export default Main;