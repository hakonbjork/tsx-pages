import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={PageA} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
