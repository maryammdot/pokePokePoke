import { connect } from 'react-redux';
import PokemonList from './pokemonList';

function mapStateToProps(state) {
  return {
    pokemons: state.pokemonList,
  };
}

export default connect(mapStateToProps)(PokemonList);
