import logo from "./image/logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main.js";
import Canceled from "./components/Canceled.js";
import Success from "./components/Success.js";
import Checkout from "./components/Checkout.js";
import About from "./components/About.js";

//firebase
import firebase from "./firebase";
import 'firebase/functions';

function App() {
  function testCF() {
    const testFunc = firebase.functions().httpsCallable('test');
    const messageText = "cc16";
    testFunc({ text: messageText }).then(function (result) {
      // Read result of the Cloud Function.
      console.log(result.data);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={testCF}>
        Test cloud functions
    </button>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Canceled" component={Canceled} />
          <Route exact path="/Success" component={Success} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
