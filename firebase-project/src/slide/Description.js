import React, { Component } from "react";
import firebase from "firebase";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const description = db.ref("description");

    description.on("value", (elem) => {
      this.setState( {description:elem.val()} );
    });

  };

  render() {
    const { description } = this.state;
    return(
      <div className="description">
        {description}
      </div>
    )
  }
}