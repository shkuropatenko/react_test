import React, { Component } from "react";
import firebase from "firebase";

export default class Cost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: "",
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const cost = db.ref("cost");

    cost.on("value", (elem) => {
      this.setState( {cost:elem.val()} );
    });
  };

  render() {
    const { cost } = this.state;
    
    return(
      <div className="cost">
        {cost}
      </div>
    )
  }
}
