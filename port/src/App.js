import React, { Component } from "react";
import Nav from './Components/Navbar';
import Landing from "./Pages/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Landing />
      </>
    );
  }
}

export default App;
