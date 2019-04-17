import { state, cleanRawDataPokemon } from './pokemonDetailModel';
import { API_RESPONDED_WITH_THE_POKEMON_DETAIL } from '../../sagas/pokemonListItemClickedSaga';

const initialState = state();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_RESPONDED_WITH_THE_POKEMON_DETAIL:
      return { details: cleanRawDataPokemon(action.payload) };

    default:
      return state;
  }
};

export default reducer;
