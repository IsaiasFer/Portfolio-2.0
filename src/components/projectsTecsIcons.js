import React from "react";
import Icon from "./icon";

function ProjectTecIcons(props){
    return (
      <React.Fragment>
        {props.icons.map((icono) => {
          return (
            <Icon svg={icono} classes="tech_icons" title="JavaScript" key={Math.random()}/>
          );
        })}
      </React.Fragment>
    );
  }

export default ProjectTecIcons;
