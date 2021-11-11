import react from "react";
import React from "react";

class PokemonContainer extends react.Component {
  render() {
    return (
      <section className="card">
        <div className="pokemonImage">
          <img
            src={
              this.props.img ||
              "http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
            }
            alt=""
          />
        </div>

      </section>
    );
  }
}

export default PokemonContainer;
