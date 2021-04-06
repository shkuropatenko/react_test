import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
import User from "./user/User";
import Form from "./form/Form";
// import Signup from "./form/Signup";
// import SliderMain from "./slider/SliderMain";
import {
  BrowserRouter as Router,
  Route 
} from "react-router-dom";

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
        <Router>
          {/* <Route path="/signup" render={Signup} /> */}
             <Route path="/login" render={() => <Form createAccount={this.createAccount} />} />
            {/* <ProtectedRoute
            exact
            path="/protected"
            component={User}
            roleType="admin"
          /> */}
        </Router>
      </>
    )
  }
}