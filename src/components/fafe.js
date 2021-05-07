import React from "react";

import "../styles/fafeSection.css";

function FafeSection() {
  return (
    <React.Fragment>
      <section className="fafe_section">
        <div className="fafe_section-info">
          <h2>
            Co-fundador en<div className="resalt"> FAFE</div>
          </h2>
          <h4>
            Un emprendimiento que relizé junto mi colega y amigo @Mike que
            empezó siendo una puesta a prueba de nuestras habilidades como
            desarrolladores y que terminó siendo una experiencia enriquecedora y
            de alto valor
          </h4>
        </div>
        <div className="fafe_section-anounce">
          <h4>Pronto se vienen nuevos proyectos por aquí...</h4>
        </div>
        <svg
          id="Componente_3_1"
          data-name="Componente 3 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="603"
          height="603"
          viewBox="0 0 603 603"
        >
          <circle
            id="Elipse_1"
            data-name="Elipse 1"
            cx="301.5"
            cy="301.5"
            r="301.5"
            fill="#b4be2c"
          />
          <path
            id="Icon_awesome-coffee"
            data-name="Icon awesome-coffee"
            d="M137.742,242.017h137.7c38.011,0,68.851-29.565,68.851-66h22.95c50.634,0,91.8-39.465,91.8-88.006S417.879,0,367.245,0H86.1C76.565,0,68.891,7.357,68.891,16.5V176.012C68.891,212.453,99.731,242.017,137.742,242.017ZM367.245,44c25.317,0,45.9,19.733,45.9,44s-20.584,44-45.9,44h-22.95V44Zm34.21,264.019H34.681c-34.139,0-43.749-44-25.819-44H427.2c17.93,0,8.463,44-25.747,44Z"
            transform="matrix(0.974, 0.225, -0.225, 0.974, 132.777, 99.805)"
            fill="#575252"
          />
        </svg>
      </section>
    </React.Fragment>
  );
}
export default FafeSection;
