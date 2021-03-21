import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import One from './One';
import Two from './Two';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={One}/>
      <Route exact path='/one' component={One}/>
      <Route exact path='/two' component={Two}/>
    </Switch>
    
  )
}

export default App;
