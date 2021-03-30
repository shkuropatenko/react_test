import React, { Component } from "react";
import firebase from "firebase";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: "",
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const hit = db.ref("hit");

    hit.on("value", (elem) => {
      this.setState( {hit:elem.val()} );
    });

  };

  render() {
    const { hit } = this.state;
    
    return(
      <span className="hit">
        {hit}
      </span>
    )
  }
}
