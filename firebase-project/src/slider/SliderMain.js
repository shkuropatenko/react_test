import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "../slide/Slide";
import "./SliderMain.css";

export default class SliderMain extends Component {

  render() {
    let settings = {
      dots: false,
      infinite: true,
      accessibility: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return(
      <div className="container">
        <Slider {...settings}>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </div>
    )
  }
}