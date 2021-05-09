import React from "react";
import Icon from "./icon";

import "../styles/bottom.css";
import { Link } from "react-router-dom";

function BottomSection() {
  return (
    <section className="bottom_section">
      <div className="bottom_title">
        <h3>Mientras no programo....</h3>
      </div>
      <div className="bottom_activities">
        <ul>
          <li><a href="https://www.facebook.com/100010382286145/videos/1397997727222957/" target='blank'>Toco Guitarra</a></li>
          <li><a href="/" target='blank'>Salgo a correr</a></li>
          <li><a href="/" target='blank'>Tomo fotografías</a></li>
          <li>
            También estoy empezando a escribir un blog, si te gustaría verlo,
            haz click <Link to='/blog' className="bottom_link">aquí</Link>
          </li>
        </ul>
      </div>
      <div className="bottom_CTA">
        <p>
          Que te ha parecido mi página web? cuéntamelo 
          <a href='https://twitter.com/IsaiasFer4' className="bottom_link"> aquí</a>
          <br />
          Quieres contactarte conmigo? yo también:
        </p>
        <div className="bottom_CTA-icons">
          <a target='blank' href='https://twitter.com/IsaiasFer4'>
            <Icon classes="social bottom_link" svg="twitter" />
          </a>
          <a target='blank' href='https://www.instagram.com/isaiasfer4/'>
            <Icon classes="social bottom_link" svg="instagram" />
          </a>
          <a target='blank' href='https://www.facebook.com/isaiasFer4'>
            <Icon classes="social bottom_link" svg="facebook" />
          </a>
          <a target='blank' href='https://www.linkedin.com/in/isaiasfer4/'>
            <Icon classes="social bottom_link" svg="linkedin" />
          </a>
          <a target='blank' href='https://github.com/IsaiasFer'>
            <Icon classes="social bottom_link" svg="github" />
          </a>
          <a target='blank' href='https://msng.link/o/?isaiasfer4=tg'>
            <Icon classes="social bottom_link" svg="telegram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
