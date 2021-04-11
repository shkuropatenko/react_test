import "./App.css";
import React, { Component } from "react";
import User from "./user/User";
import Form from "./form/Form";
import Signup from "./form/Signup";
import LandingPage from "./Lending";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute"
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    email: "",
    password: "",
    hasAccount: false,
    key: ""
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/reg" component={Signup} />
              <Route exact path="/login" component={Form} />
              <PrivateRoute exact path="/user" component={User} />
              <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </>
    )
  }
}