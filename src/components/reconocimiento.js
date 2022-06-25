import React from "react";

function Reconocimento(props) {
  return (
    <div className="award">
      <a href={props.url}>
        <img src={props.logo} alt={props.title} />
      </a>
      <h4>{props.title}</h4>
    </div>
  );
}
export default Reconocimento;
