import React from "react";

import '../styles/navBar.css'

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className='barra_navegación-principal'>
          <ul className='lista_navegacion-principal'>
            <li>Blog</li>
            <li>Home</li>
            <li>Proyectos</li>
            <li>Trabaja conmigo</li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
