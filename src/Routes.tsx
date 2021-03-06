import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
}
