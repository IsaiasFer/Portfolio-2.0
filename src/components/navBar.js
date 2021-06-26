import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        <nav className={this.props.class}>
          <ul className='lista_navegacion-principal'>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#Projects">Proyectos</a></li>
            <li><a href="/">Trabaja conmigo</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
