import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
import User from "./user/User";
import Form from "./form/Form";
import SliderMain from "./slider/SliderMain";

import {
  BrowserRouter as Router,
  Route 
} from "react-router-dom"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: false,
      key: '',
    }
  };

  componentDidMount() {
    const db = firebase.database();
  };

  createAccount = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.setState( { hasAccount: true } )
      })
      .catch(error => console.log(error))
  };

  render() {
    const { hasAccount } = this.state;

    return (
      <div>
        {
          hasAccount ?
            (
              <Router>
                <div>
                  <Route path="/protected" component={User} />
                </div>
              </Router>
            )
            :
            (
              <Router>
                <div>
                  <Route path="/" component={Form} />
                  <SliderMain />
                </div>
              </Router>
            )
        }
      </div>
    )
  }
}