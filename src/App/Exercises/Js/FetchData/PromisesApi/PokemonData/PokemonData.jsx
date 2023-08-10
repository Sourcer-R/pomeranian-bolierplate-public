import { typesIcon } from "../Utils/utils";

export function PokemonData({ pokemonData }) {

    const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];

  return (
    <>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h3>NAME: {pokemonData?.name}</h3>
      <h3>WEIGHT: {pokemonData?.weight}</h3>
      <h3>TYPE: {getTypeOfPokemon(pokemonData?.types)}</h3>
     
    </>
  );
}