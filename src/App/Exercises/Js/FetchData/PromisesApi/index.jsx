import './styles.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import { PokemonData } from './PokemonData/PokemonData';

export function ExerciseFetchData() {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

 

  const getKeyOfTypeOfPokemon= (typeOfPokemon =[]) => typeOfPokemon[0].type.name;
 

  useEffect(() => {
    axios
      .get(BASE_POKEMON_API_URL)
      .then((response) => {
        

        const pokemonList = response.data.results;

        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );

        Promise.all(pokemonPromises)

          .then((responses) => {
            const pokemonsData = responses.map((response) => response.data);

            setPokemons(pokemonsData);

            setIsLoading(false);
          })

          .catch((error) => {
            setError(error?.message);

            setIsLoading(false);
          });
      })

      .catch((error) => {
        setError(error?.message);

        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container--api-fetch">
      <h1>{getIsLoading && `Loading...`}</h1>
      <h2> {getError && getError}</h2>
      <div className="container--grid-wrapper">
        {getPokemons.map((pokemon) => (
          <div className={`container--grid-tile dedicated-background--${getKeyOfTypeOfPokemon(pokemon?.types)}`}>
           <PokemonData pokemonData={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
