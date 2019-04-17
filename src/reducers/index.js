import { combineReducers } from 'redux';
import pokemonList from '../containers/PokemonList/reducers';
import pokedexScreenStatus from '../containers/PokedexScreen/reducers';
import pokemonDetail from '../containers/PokemonDetail/reducers.js';

export default combineReducers({
  pokedexScreenStatus,
  pokemonList,
  pokemonDetail,
});
