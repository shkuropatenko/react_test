import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPUfsbLBLHv0HRKWkO2c58TwhWclQe5tY",
  authDomain: "fir-test-project-6ab7c.firebaseapp.com",
  databaseURL: "https://fir-test-project-6ab7c-default-rtdb.firebaseio.com",
  projectId: "fir-test-project-6ab7c",
  storageBucket: "fir-test-project-6ab7c.appspot.com",
  messagingSenderId: "68124238215",
  appId: "1:68124238215:web:41ef09d1a0595f7557b322"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
