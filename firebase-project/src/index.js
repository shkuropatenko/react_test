import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUYTCwvoUUY5t1yVCfwCRPG3VzPCZMH3s",
  authDomain: "fir-react-auth-d4dc9.firebaseapp.com",
  databaseURL: "https://fir-react-auth-d4dc9-default-rtdb.firebaseio.com",
  projectId: "fir-react-auth-d4dc9",
  storageBucket: "fir-react-auth-d4dc9.appspot.com",
  messagingSenderId: "492551471901",
  appId: "1:492551471901:web:d38499edc24cab62b097f4",
  measurementId: "G-MYV5EPEZH9"
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
