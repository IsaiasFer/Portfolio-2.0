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
            <a href="/">Trabaja conmigo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarContainer;
