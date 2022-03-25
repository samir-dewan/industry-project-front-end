//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS
import BasketPage from "./components/BasketPage/BasketPage";
import Photo from "./components/Photo/Photo";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Scanner from "./components/Scanner/Scanner";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import ItemProfile from "./components/ItemProfile/ItemProfile";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/" exact to="/home" />
        <Route
          path="/login"
          exact
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          path="/home"
          exact
          render={(routerProps) => <BasketPage {...routerProps} />}
        />
        <Route
          path="/scan"
          exact
          render={(routerProps) => <Scanner {...routerProps} />}
        />
        <Route
          path="/items/:id"
          exact
          render={(routerProps) => <ItemProfile {...routerProps} />}
        />
        <Route
          path="/photo"
          exact
          render={(routerProps) => <Photo {...routerProps} />}
        />
        <Route
          path="/item-details"
          exact
          render={(routerProps) => <ItemDetails {...routerProps} />}
        />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}
