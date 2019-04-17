import { connect } from 'react-redux';
import PokemonDetail from './pokemonDetail';

function mapStateToProps(state) {
  return {
    pokemon: state.pokemonDetail,
  };
}

export default connect(mapStateToProps)(PokemonDetail);
