import React from "react";
import Icon from "./icon";
import { Link } from "react-router-dom";

import "../styles/bottom.css";

function BottomSection() {
  return (
    <section className="bottom_section">
      <div className="bottom_title">
        <h3>Mientras no programo....</h3>
      </div>
      <div className="bottom_activities">
        <ul>
          <li>Toco Guitarra</li>
          <li>Salgo a correr</li>
          <li>Tomo fotografías</li>
          <li>
            También estoy empezando a escribir un blog, si te gustaría verlo,
            haz click <Link className="bottom_link">aquí</Link>
          </li>
        </ul>
      </div>
      <div className="bottom_CTA">
        <p>
          Que te ha parecido mi página web? cuéntamelo{" "}
          <Link className="bottom_link">aquí</Link>
          <br />
          Quieres contactarte conmigo? yo también:
        </p>
        <div className="bottom_CTA-icons">
          <Link to='https://twitter.com/IsaiasFer4'>
            <Icon classes="social bottom_link" svg="twitter" />
          </Link>
          <Link to='https://www.instagram.com/isaiasfer4/'>
            <Icon classes="social bottom_link" svg="instagram" />
          </Link>
          <Link to='https://www.facebook.com/isaiasFer4'>
            <Icon classes="social bottom_link" svg="facebook" />
          </Link>
          <Link to='https://www.linkedin.com/in/isaiasfer4/'>
            <Icon classes="social bottom_link" svg="linkedin" />
          </Link>
          <Link to='https://github.com/IsaiasFer'>
            <Icon classes="social bottom_link" svg="github" />
          </Link>
          <Link to='https://msng.link/o/?isaiasfer4=tg'>
            <Icon classes="social bottom_link" svg="telegram" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
