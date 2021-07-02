import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Content from './Component/content'

function App() {
  return (
  <div>
        <Router>
        <Switch>
        <Router exact path="/">
            <Content/>
          </Router>
          </Switch>
        </Router>
  </div>

  );
}

export default App;
