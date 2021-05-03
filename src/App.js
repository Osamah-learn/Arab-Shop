import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homePage.jsx";
import { Switch, Route } from "react-router-dom";

const hatsPage = () => {
  return (
    <div1>
      <h1>HatsPage {}</h1>
    </div1>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={hatsPage} />"
      </Switch>
    </div>
  );
}

export default App;
