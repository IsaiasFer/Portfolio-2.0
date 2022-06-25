import React from "react";
import Icon from "./iconFunction";

function ProjectTecIcons(props){
    return (
      <React.Fragment>
        {props.icons.map((icono) => {
          return (
            <Icon svg={icono} classes={props.class} title="JavaScript" key={Math.random()}/>
          );
        })}
      </React.Fragment>
    );
  }

export default ProjectTecIcons;
