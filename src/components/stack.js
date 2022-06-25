import React from "react";
import ProjectTecIcons from "./icons";

function Stack() {
  return (
    <React.Fragment>
      <section className="stack">
        <div className="stack_info">
          <h3>Mi stack Tecnológico</h3>
          <h4>
            Siempre compartí la filosofía del <div className="resalt">lifelong learning</div> , "nunca parar de
            aprender", estas son algunas tecnologías que aprendí,<div className="resalt">(y sigo
            actualizando)</div>durante mi experiencia como desarrollador
          </h4>
        </div>
        <div className="stack_icons">
        <ProjectTecIcons class="stacklogo" icons={["html","css","github","js","react","npm","xd","figma"]}/>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Stack;
