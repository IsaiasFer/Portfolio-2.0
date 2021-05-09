import React from "react";
import Project from "./project";

import "../styles/projects.css";
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
              techs={(this.setState = { html: "", css: "", github: "" })}
              title="VideoHub"
              description="Una plataforma de video en streaming ficticia, con pantallas de logIn, sign Up, Home y una cartelera de películas ficticias (Por ahora)"
              logo="https://i.imgur.com/lx3AT9Z.png"
            />
            <Project
              techs={(this.setState = { html: "", css: "",js:'', github: ""})}
              title="Touch It!"
              description="Un juego de memoria simple en el que deberás recordar los patrones de colores para poder ganar, cantidad de niveles a tu elección, programado en JavaScript Vanilla"
              logo="https://i.imgur.com/UBLAwbk.png"
            />
            <Project
              techs={(this.setState = {xd:''})}
              title="Flick User Interface"
              description="Wireframe de alta fidelidad de la aplicación ficticia Flick, una aplicación móvil de películas y series en streaming"
              logo="https://i.imgur.com/1x0iXZF.png"
            />
            <Project
              techs={(this.setState = { html: "", css: "", github: "",js:''})}
              title="Pagina web Escolar"
              description="Primer proyecto en FAFE
Plataforma escolar que busca mejorar la interacción institución-alumnos. además de las mejoras visuales incluye una integración con Google Classroom"
              logo="https://i.imgur.com/7ymG1mA.png"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;