import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
import User from "./user/User";
import Form from "./form/Form";
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
      name: '',
      key: '',
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const name = db.ref("name");

    name.on("value", (elem) => {
      this.setState({ name: elem.val() })
    });
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
    const { hasAccount, name } = this.state;

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
                </div>
              </Router>
            )
        }
      </div>
    )
  }
}