import React from "react";
import "./landing.css";
// import Container from '../../Components/Container';
//import Nav from '../../Components/Navbar';



class Landing extends React.Component {

  state = {
    words:['Linux', 'UX/UI', 'Cats']
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="content">
            <h1 className="heading"> Jake Plaisted </h1>

          </div>
        </div>
      </>
    );
  }
}

export default Landing;
