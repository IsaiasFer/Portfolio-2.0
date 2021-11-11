import React from "react";
import PokemonContainer from "./pokemonContainer";

class Desafio6 extends React.Component {
  componentDidMount() {
    function cargarPokemon(url) {
      fetch(url)
        .then(function (objetoJson) {
          return objetoJson.json();
        })
        .then(function (response) {
          let pokemoncito = response;
          crearCarta(pokemoncito);
        });
    }

    function crearCarta(poke) {
      let carta = `<h3 class="textUp">${poke.name}</h3>
                <img class="pokeimg" src=${poke.sprites.front_default} alt="" />`;
      let pokeContainer = document.getElementById("contenedor-carta");
      pokeContainer.innerHTML = carta;
    }
    function cargarListado() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=20")
        .then(function (response) {
          return response.json();
        })
        .then(function (pokemonsJson) {
          const pokemons = pokemonsJson.results;
          pokemons.forEach((element) => {
            let pokeButon = document.createElement('button')
            let nombre=element.name
            pokeButon.append(nombre.toUpperCase())
            pokeButon.onclick=() => cargarPokemon(element.url)
            document.getElementById("contenedor-listado").append(pokeButon)
          });
        });
    }
    cargarListado();
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <h2 className="Pokedex">Pokédex</h2>
          <blockquote>Por Isaias fernandez para APV 2021</blockquote>
          <section id="contenedor-carta">
            <p className="textUp">Selecciona un pokemon</p>
            <PokemonContainer />
          </section>
        </nav>
        <main>
          <h2 className="textDown">Listado</h2>
          <section id="contenedor-listado"></section>
        </main>
      </React.Fragment>
    );
  }
}

export default Desafio6;
