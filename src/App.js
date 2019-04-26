import React from 'react';
import './App.css';
import Header from './components/Header';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Wizard2 from './components/Wizard2'
import Wizard3 from './components/Wizard3'

function App() {
  return (
    <div >
      <Header />
      <HashRouter>
      <Switch >

        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
        
        <Route exact path='/wizard2' component={Wizard2}/>
        <Route exact path='/wizard3' component={Wizard3}/>
        
      </Switch>



      </HashRouter>
    </div>
  );
}

export default App;
