import "./App.css";
import React, { Component } from "react";
import firebase from "firebase"; 
import User from "./user/User";
import Form from "./form/Form";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Slider from "./Slider";
import {
  BrowserRouter as Router,
  Route 
} from "react-router-dom"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: false,
      name: '',
      key: '',
    }
  };

  componentDidMount() {
    const db = firebase.database();
    const name = db.ref("name");

    name.on("value", (elem) => {
      this.setState({ name: elem.val() })
    });
  };

  createAccount = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.setState( { hasAccount: true } )
      })
      .catch(error => console.log(error))
  };

  render() {
    const { hasAccount, name } = this.state;
    var settings = {
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
    return (
      <div>
        {
          hasAccount ?
            (
              <Router>
                <div>
                  <Route path="/protected" component={User} />
                </div>
              </Router>
            )
            :
            (
              <Router>
                <div>
                  <Route path="/" component={Form} />
                  <div className="container">
                  <Slider {...settings}>
                    <div>
                      <div>
                        <span>new</span>
                        <img src="https://via.placeholder.com/300x200" />
                        <span>in stock</span>
                      </div>
                      <div>text</div>
                      <div>cost</div>
                      <button>текст</button>
                      <a href="#">link</a>
                    </div>
                    <div>
                      <div>
                        <span>new</span>
                        <img src="https://via.placeholder.com/300x200" />
                        <span>in stock</span>
                      </div>
                      <div>text</div>
                      <div>cost</div>
                      <button>текст</button>
                      <a href="#">link</a>
                    </div>
                    <div>
                      <div>
                        <span>new</span>
                        <img src="https://via.placeholder.com/300x200" />
                        <span>in stock</span>
                      </div>
                      <div>text</div>
                      <div>cost</div>
                      <button>текст</button>
                      <a href="#">link</a>
                    </div>
                    <div>
                      <div>
                        <span>new</span>
                        <img src="https://via.placeholder.com/300x200" />
                        <span>in stock</span>
                      </div>
                      <div>text</div>
                      <div>cost</div>
                      <button>текст</button>
                      <a href="#">link</a>
                    </div>
                    <div>
                      <div>
                        <span>new</span>
                        <img src="https://via.placeholder.com/300x200" />
                        <span>in stock</span>
                      </div>
                      <div>text</div>
                      <div>cost</div>
                      <button>текст</button>
                      <a href="#">link</a>
                    </div>
                  </Slider>
      </div>
                </div>
              </Router>
            )
        }
      </div>
    )
  }
}