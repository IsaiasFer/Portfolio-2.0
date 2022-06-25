import React from "react";
import Reconocimento from "./reconocimiento";

function AwardsSections() {
  return (
    <section className="awardsSection">
      <h3>Reconocimientos</h3>
      <div className="reconocimientos">
        <Reconocimento
          title="Expositor en EXPOCYTAR Web 2022"
          url="/"
          logo="https://i.imgur.com/NnbkLA8.png"
        />
        <Reconocimento
          title="Joven Destacado 2022 por el municipio de Vaqueros"
          url="/"
          logo="https://i.imgur.com/Yb513eS.png"
        />
        <Reconocimento
          title="Joven Destacado 2021 por el gobierno de la provincia de Salta"
          url="/"
          logo="https://i.imgur.com/UwM6Mxn.png"
        />
        <Reconocimento
          title="Reconocimiento por desarollo innovador por la secretaria de logística de San Luis"
          url="/"
          logo="https://i.imgur.com/b2DUc7K.png"
        />
        <Reconocimento
          title="Reconocimiento por innovaciones informáticas en La Escuela Técnica N° 3141 Dimitri Mendeleiev"
          url="/"
          logo="https://i.imgur.com/7ymG1mA.png"
        />
      </div>
    </section>
  );
}

export default AwardsSections;
