import React from "react";
import NavBarContainer from "./navBarContainer";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
          <div className="hero_content">
              <NavBarContainer classContainer='navBar_container-principal' class='barra_navegación-principal'/>
            <div className="hero_info">
              <h5>Hola,soy</h5>
              <h1>Isaías Férnandez</h1>
              <h4>un desarrollador frontend</h4>
              <h5>de Salta, Argentina</h5>
            </div>
          </div>
        <div className="hero_image-container">
          
          <img
            className="hero_image"
            src="https://i.imgur.com/2CvbDnrh.jpg"
            alt=""
          />
        </div>
      </section>
    );
  }
}

export default Hero;
