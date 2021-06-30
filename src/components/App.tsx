import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginComp from "./LoginComp";
import HomePage from "./HomePage";
import { checkUsernameAndPassword } from "../api/login";
import { useState } from "react";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const onLoginFormSubmit = async (username: string, password: string) => {
    const responseBoolean = await checkUsernameAndPassword(username, password);
    setUserLoggedIn(responseBoolean);
  };

  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/">
            <LoginComp
              onLoginSubmit={onLoginFormSubmit}
              loggedIn={userLoggedIn}
            />
          </Route>
          <Route>
            <HomePage
              loggedIn={userLoggedIn}
              logOut={() => setUserLoggedIn(false)}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
