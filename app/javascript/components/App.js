import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/restaurants/:id" component={Restaurant} />
      </Switch>
    </Router>
  )
}

export default App;