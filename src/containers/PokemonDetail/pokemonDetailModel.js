export const state = () => ({
  details: null,
});

export const cleanRawDataPokemon = dataPokemonRaw => {
  return {
    name: dataPokemonRaw.name,
    pokedexNumber: dataPokemonRaw.id,
    image: dataPokemonRaw.sprites.front_default,
    types: dataPokemonRaw.types.map(pokemonType => pokemonType.type.name),
  };
};
