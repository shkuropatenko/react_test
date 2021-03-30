import React, { Component } from "react";
import firebase from "firebase";

export default class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: '',
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const availability = db.ref("availability");

    availability.on("value", (elem) => {
      this.setState( {availability:elem.val()} );
    });

  };

  render() {
    const { availability } = this.state;
    return(
      <span className="availability">
        {availability}
      </span>
    )
  }
}