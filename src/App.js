import React from 'react';
import './App.css';
import Header from './components/Header';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';


function App() {
  return (
    <div >
      <Header />
      <HashRouter>
      <Switch >

        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
      </Switch>



      </HashRouter>
    </div>
  );
}

export default App;
