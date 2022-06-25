import React from "react";
import Project from "./project";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section id='Projects' className="projects">
          <h3>Proyectos de Software</h3>
          <div className="projectsLayout">
            <Project
              url="https://isaiasfer.github.io/VideoHub/login"              
              techs={(this.setState = { html: "", css: "", github: "" })}
              title="VideoHub"
              class="VideoHub"
              description="Una plataforma de video en streaming ficticia, con pantallas de logIn, sign Up, Home y una cartelera de películas ficticias (Por ahora)"
              logo="https://i.imgur.com/lx3AT9Z.png"
            />
            <Project
              url="https://isaiasfer.github.io/SimonSay/juego.html"
              techs={(this.setState = { html: "", css: "",js:'', github: ""})}
              title="Touch It!"
              class="TouchIt"
              description="Un juego de memoria simple en el que deberás recordar los patrones de colores para poder ganar, cantidad de niveles a tu elección, programado en JavaScript Vanilla"
              logo="https://i.imgur.com/UBLAwbk.png"
            />
            <Project
              url="https://eetn3141.edu.ar"
              techs={(this.setState = { html: "", css: "", github: "",js:'',react:"",figma:""})}
              title="Pagina web Escolar"
              class="SchoolWebPage"
              description="Primer proyecto en FAFE, es una plataforma escolar que busca mejorar la interacción institución-alumnos. además de las mejoras visuales incluye una integración con Google Classroom"
              logo="https://i.imgur.com/7ymG1mA.png"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;