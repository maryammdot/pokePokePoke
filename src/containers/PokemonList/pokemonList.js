import React from 'react';
import PokemonListItem from '../PokemonListItem';

import { Wrapper } from './styles';

const pokemonList = pokemonList => {
  if (pokemonList && pokemonList.pokemons && pokemonList.pokemons.list === null) {
    return null;
  }

  const getPokedexNumber = url => {
    const POSITION_TO_START_TO_SUBSTRACT = 34;
    const CONSTANT_TO_KNOW_THE_SUBSTRACT_LENGTH = 35;
    const substrLength = url.length - CONSTANT_TO_KNOW_THE_SUBSTRACT_LENGTH;
    url = url.substr(POSITION_TO_START_TO_SUBSTRACT, substrLength);
    return url;
  };

  return (
    <Wrapper>
      <div>
        {pokemonList.pokemons.list.map((pokemon, index) => (
          <PokemonListItem
            name={pokemon.name}
            url={pokemon.url}
            pokedexNumber={getPokedexNumber(pokemon.url)}
            key={index}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default pokemonList;
