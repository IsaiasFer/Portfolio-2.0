import React from "react";
import Navbar from "./navBar";

import "../styles/hero.css";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
          <div className="hero_content">
              <Navbar />
            <div className="hero_info">
              <h1>Isaías Férnandez</h1>
              <h4>Desarrollador Frontend</h4>
              <h5>Maquetador web</h5>
            </div>
          </div>
        <div className="hero_image-container">
          
          <img
            className="hero_image"
            src="https://i.imgur.com/2CvbDnr.jpg"
            alt=""
          />
        </div>
      </section>
    );
  }
}

export default Hero;
