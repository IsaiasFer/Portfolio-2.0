import React from "react";
import ProjectTecIcons from "./projectsTecsIcons";
class Project extends React.Component{
  render(props){
    const iconos=Object.getOwnPropertyNames(this.props.techs)
    return (
      <div className="project_group">
      <div className="project_visual">
        <a href={this.props.url} target='blank'>
          <img src={this.props.logo} alt='' className="project_img" />
        </a>
        <div className="project_tecs">
          <ProjectTecIcons icons={iconos}/>
        </div>
      </div>
      <div className="project_info">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    </div>
  );
}
}
export default Project;