import React from "react";
import "./landing.css";
// import Container from '../../Components/Container';
//import Nav from '../../Components/Navbar';

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="content">
            <h1 className="heading"> Jake Plaisted </h1>
            <ul>
              <li>US Based Web Developer </li>
              <li>Linux Enthusiast</li>
              <li>With a focus on modern designs, with friendly & clean UX's</li>
            </ul>
          </div>

          <div className="btnContainer">
            <input type="button" value="Button" className="btn draw-border">
            
            </input>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
