import React from "react";
import { Link } from "react-router-dom";

function NavBarContainer(props) {
  return (
    <div className={props.classContainer}>
      <nav className="barra_navegación" id="navBar">
        <ul className="lista_navegacion">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="projectLink">
            <a href="#Projects">Proyectos</a>
          </li>
          <li>
            <a href="mailto:isafernande04@gmail.com?subject=Quiero%20contactarme%20con%20vos!&body=Hola%20Isaias!%2C%20quer%C3%ADa%20decirte%20que%20...">Trabaja conmigo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarContainer;
