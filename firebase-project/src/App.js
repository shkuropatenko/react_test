import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
// import User from "./user/User";
import Form from "./form/Form";
import Signup from "./form/Signup";
// import SliderMain from "./slider/SliderMain";
import LandingPage from "./Lending";
import {BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasAccount: false,
      key: ""
    };
  }

  componentDidMount() {
    firebase.database();
  }

  createAccount (email, password) {
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.setState( { hasAccount: true } );
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/reg" component={Signup} />
            <Route exact path="/login" component={Form} />
            {/* {/ <ProtectedRoute exact path="/app" component={AppLayout} /> /} */}
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}