import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home'
import AllBeers from './Components/AllBeers'
import RandomBeer from './Components/RandomBeer'
import NewBeer from './Components/NewBeer.js'
import BeerDetails from './Components/BeerDetails'



function App() {
  return (
    <div className="App">
      <div>

      
      <div className="container mt-2" >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AllBeers" component={AllBeers} />
        <Route path="/RandomBeer" component={RandomBeer} />
        <Route path="/NewBeer" component={NewBeer} />
        <Route path="/BeerDetails/:id" component={BeerDetails} /> */}
      </Switch>

      </div>
      </div>
    </div>
  );
}

export default App;
