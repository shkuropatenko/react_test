import React, { Component } from "react";
import "./Slide.css";
import firebase from "firebase";
import Hit from "./Hit";
import Image from "./Image";
import Availability from "./Availability";
import Description from "./Description";
import Cost from "./Cost";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn_basket: '',
      link_buy: ''
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const btn_basket = db.ref("btn_basket");
    const link_buy = db.ref("link_buy");

    btn_basket.on("value", (elem) => {
      this.setState( {btn_basket:elem.val()} );
    });
    link_buy.on("value", (elem) => {
      this.setState( {link_buy:elem.val()} );
    });

  };

  render() {
    const { btn_basket, link_buy } = this.state;
    return(
      <div className="slide-box">
        <div className="img-box">
          <a href="#">
            <Hit />
            <Image />
            <Availability />
          </a>
        </div>

        <Description />
        <Cost />

        <button className="btn">{btn_basket}</button>
        <a href="#">{link_buy}</a>
      </div>
    )
  }
}
