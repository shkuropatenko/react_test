import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return(
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
}
