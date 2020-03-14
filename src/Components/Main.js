import React from 'react';
import Start from './Start';
import Content from './Content';
import NotFound from './NotFound';
import './Main.css';
import {
  HashRouter,
  Route,
  Switch,
  } from 'react-router-dom';
  

const Main = () => {
  return (
    <main className="page-main">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/content' component={Content} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </main>
  )
}

export default Main;