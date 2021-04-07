import React, { Component } from "react";

export default class SingUp extends Component {
  constructor (props) {
    super(props);
 
    this.state = {
      email: "",
      valid: true,
      value: "",
      password:''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  
  validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  handleEmailChange(e, value, id) {
      const email = e.target.value;
      const emailValid = this.validateEmail(email) ;

      this.setState({
        email: email,
        valid: emailValid,
        [id]: value
      });
  }

  handleChange (e) {
    this.setState({
        password: e.target.value
      });
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
          <form>
            <input
              type="text"
              id="fullname"
              placeholder="Full name"
              onChange={this.handleChange}
            />
            
            <div className={fieldContainerClass}>
              <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
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
              onClick={()=>this.props.createAccount(this.state.email,this.state.password)}
            />
          </form>
        </div>
      </div>
    )
  }
}