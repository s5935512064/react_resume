import React from "react";
import { BrowserRouter as Switch, useLocation, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skill" component={Skills} />
        <Route exact path="/work" component={Work} />
      </Switch>
    </div>
  );
}

export default App;
