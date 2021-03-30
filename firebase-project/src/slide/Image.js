import React, { Component } from "react";
import firebase from "firebase";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const image = db.ref("image");

    image.on("value", (elem) => {
      this.setState( {image:elem.val()} );
    });

  };

  render() {
    const { image } = this.state;
    
    return(
      <img src={image} />
    )
  }
}
