import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EnUsHome from "./components/EnUsHome";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 1000,
    delay: 250,
    once: true,
  });
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
