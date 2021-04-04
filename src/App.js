import React from "react";
import Room from "./Pages/Room";
import Login from "./Pages/Login";
import GlobalStyles from "./GlobalStyles";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Room />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
