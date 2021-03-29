import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
import User from "./User";
import {
  BrowserRouter as Router, 
  Link,
  Route,
  Redirect,
  withRouter
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
      value: ''
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const name = db.ref("name");

    name.on("value", (elem) => {
      this.setState({ name: elem.val() })
    });
  };

  handleChange = ({ target: {value, id} }) => {
    this.setState({
      [id]: value
    })
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
    console.log(name);

    return (
      <div>
        {
          hasAccount ?
            (
              <Router>
                <div>
                  <User path="/protected" component={User} />
                </div>
              </Router>
            )
            :
            (
              <div className="login_block">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                
                <input
                  type="submit"
                  value="Send"
                  onClick={this.createAccount}
                />
              </div>
            )
        }
      </div>
    )
  }
}