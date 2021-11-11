import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Desafio6 from './desafio6';

import Home from './home';

import '../styles/styles.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/desafio6' component={Desafio6}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;