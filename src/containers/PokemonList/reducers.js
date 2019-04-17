import { state } from './pokemonListModel';
import { API_RESPONDED_WITH_THE_POKEMON_LIST } from '../../sagas/startPokedexSaga';

const initialState = state();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_RESPONDED_WITH_THE_POKEMON_LIST:
      return { list: action.payload };

    default:
      return state;
  }
};

export default reducer;
