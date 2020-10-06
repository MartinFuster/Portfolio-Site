import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EnUsHome from "./components/EnUsHome";
import AOS from "aos";
import "aos/dist/aos.css";
import CertificateEng from "./components/CertificateEng";
import EsArHome from "./components/EsArHome";
import CertificateEs from "./components/CertificateEs";
import handleRedirect from "./components/HandleRedirect";

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
          <Route path="/es-ar" component={EsArHome} />
          <Route path="/certificate" component={CertificateEng} />
          <Route path="/certificado" component={CertificateEs} />
          <Route component={handleRedirect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
