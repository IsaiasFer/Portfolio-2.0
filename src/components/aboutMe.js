import React from "react";

function AboutMe() {
  return (
    <section className="aboutMe_section">
      <div className="aboutMe_content">
        <h2>Sobre mi</h2>
        <p>
          Soy un emprendedor de 18 años. Nací en Vaqueros, Salta, Argentina y <strong>quiero dejar
          una huella en el mundo.</strong> <br />
          Actualmente estoy a meses de recibirme como Técnico Químico, además
          de ello <strong>paso mi tiempo programando</strong>, atento a los ultimos avances
          tecnológicos y a la actualidad social/política
          <br />
          Desde pequeño tuve por seguro que <strong>la tecnología es la mejor
          herramienta a la hora de alcanzar objetivos y para prosperar</strong>, por eso decidí llevarla a todo lugar donde voy, compartiendo conocimiento y por supueto, aprendiendo cada día más
        </p>
      </div>
      <div className="aboutMePic">
        <figure className="aboutMePicContainer">
          <img src="https://i.imgur.com/gVMl1ty.png" alt="" />
        </figure>
      </div>
    </section>
  );
}

export default AboutMe;
