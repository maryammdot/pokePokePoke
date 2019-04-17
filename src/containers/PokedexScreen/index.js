import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokedexScreen from './pokedexScreen';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    pokedexScreenStatus: state.pokedexScreenStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokedexScreen);
