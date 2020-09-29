import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EnUsHome from "./components/EnUsHome";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/en-us" component={EnUsHome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
