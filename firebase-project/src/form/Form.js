import React, { Component } from "react";

export default class Form extends Component {
  constructor (props) {
    super(props)
 
    this.state = {
      email: "",
      valid: true,
      value: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  
  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  
  handleEmailChange(e, value, id) {
      const email = e.target.value
      const emailValid = this.validateEmail(email) 

      this.setState({
        email: e.target.value,
        valid: emailValid,
        [id]: value
      })
  }
  
  render() {
    let fieldContainerClass = "field-container";
    const { email, valid } = this.state;
    
    if (!valid) {
      fieldContainerClass += " error";
    }
    
    return(
      <div className="container">
        <div className="login_block">
          <div className={fieldContainerClass}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange} />
            <span className="error-text">Invalid e-mail address</span>
          </div>

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
      </div>
    )
  }
}
