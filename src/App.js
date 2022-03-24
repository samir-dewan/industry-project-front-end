/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/home" exact to="/" />
        <Route
          path="/"
          exact
          render={(routerProps) => <Homepage {...routerProps} />}
        />
      </Switch>
      <Footer />
    </>
  );
}
