import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginComp from "./LoginComp";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginComp} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
