import React from "react";
import Reconocimento from "./reconocimiento";

function AwardsSections() {
  return (
    <section className="awardsSection">
      <h3>Reconocimientos</h3>
      <div className="reconocimientos">
        <Reconocimento
          title="Expositor en EXPOCYTAR Web 2022"
          url="https://www.expocytar.com/"
          logo="https://i.imgur.com/NnbkLA8.png"
        />
        <Reconocimento
          title="Joven Destacado 2022 por el municipio de Vaqueros"
          url="/"
          logo="https://i.imgur.com/Yb513eS.png"
        />
        <Reconocimento
          title="Joven Destacado 2021 por el gobierno de la provincia de Salta"
          url="https://www.facebook.com/subsecjuventud.delaprovinciadesalta/posts/pfbid02RXDd7fvi3KYjkXpzovvvnAcG4JSm4diTWudzz55Dp7wzYjdbH9b4mmJnabKSdRpZl"
          logo="https://i.imgur.com/UwM6Mxn.png"
        />
        <Reconocimento
          title="Reconocimiento por desarollo innovador por la secretaria de logística de San Luis"
          url="https://agenciasanluis.com/notas/2021/07/23/reconocieron-a-dos-equipos-que-participaron-del-innovaton-san-luis-2021/?fbclid=IwAR3Yl5P3XeDRN5O4NDyDmmAcD5tDVCQWvJLaWjtooR8sDvSoZaeHPovHNeA"
          logo="https://i.imgur.com/b2DUc7K.png"
        />
        <Reconocimento
          title="Reconocimiento por innovaciones informáticas en La Escuela Técnica N° 3141 Dimitri Mendeleiev"
          url="https://www.facebook.com/photo/?fbid=1742948362727890&set=a.795192014170201"
          logo="https://i.imgur.com/7ymG1mA.png"
        />
        <Reconocimento
          title="Ganador del Desafio Emprender Coca Cola 2022"
          url="https://prnoticias.com/2022/11/15/estos-son-los-ganadores-del-desafio-emprender-coca-cola-en-la-argentina/#:~:text=Puntualmente%2C%20el%20programa%20Emprendidos%20busca,digital%20y%20el%20e%2Dcommerce."
          logo="https://i.imgur.com/b218ME9.png"
        />
        <Reconocimento
          title="Mención de Honor Baca Instituto Balseiro 2022"
          url="https://www.ib.edu.ar/resultados.html"
          logo="https://i.imgur.com/cVlQLMC.png"
        />
      </div>
    </section>
  );
}

export default AwardsSections;
