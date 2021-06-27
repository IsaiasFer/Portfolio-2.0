import React from "react";

function AboutMe() {
  return (
    <section className="aboutMe_section">
      <div className="aboutMe_content">
        <h2>Sobre mi</h2>
        <p>
          Soy un emprendedor de 17 años. Nací en Salta, Argentina y quiero dejar
          una huella en el mundo. <br />
          Actualmente estoy en camino de recibirme como Técnico Químico, además
          de ello paso mi tiempo programando, atento a los ultimos avances
          teconológicos y a la actualidad social/política
          <br />
          Desde pequeño tuve por seguro que la tecnología es la mejor
          herramienta a la hora de alcanzar objetivos y para prosperar
        </p>
      </div>
      <div className="aboutMePic">
        <figure className="aboutMePicContainer">
          <img src="https://i.imgur.com/Z5ncgOil.jpg" alt="" />
        </figure>
      </div>
    </section>
  );
}

export default AboutMe;
