import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import firebase from 'firebase'; 

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

    const name = db.ref('name');

    name.on('value', (elem) => {
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
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .catch(error => console.log(error));

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.setState( { hasAccount: true } )
      })
      .catch(error => console.log(error))
  };

  sendData = () => {
    const { key, value } = this.state;
    const db = firebase.database();
    db.ref(key).push(value);
    alert('your data was written to db');
  }

  render() {
    const { hasAccount, name } = this.state;
    console.log(name);
    return (
      <div>
        {
          hasAccount ?
            (
              <div className="login_block">
                <h1>Hello</h1>
                <input
                  type="text"
                  id="key"
                  placeholder="enter key"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  id="value"
                  placeholder="enter value"
                  onChange={this.handleChange}
                />
                
                <input
                  type="submit"
                  value="Send"
                  onClick={this.sendData}
                />
              </div>
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