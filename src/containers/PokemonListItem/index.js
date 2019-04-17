import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonListItem from './pokemonListItem';
import * as actions from './actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps,
)(PokemonListItem);
