import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import Header from "../header";
import "./app.scss";

const App = () => {
  return (
    <main className="container">
      <h1 className="app__title">TakeOff</h1>
      <Switch>
        <Route key={uuidv4()} exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route key={uuidv4()} path="/login">
          <LoginPage />
        </Route>
        <Route key={uuidv4()} path="/register">
          <RegisterPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  )
};

export default App;
