import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { POKEMON_SELECTED } from '../containers/PokemonListItem/actions';
import '@babel/polyfill';

export const API_RESPONDED_WITH_THE_POKEMON_DETAIL = 'API_RESPONDED_WITH_THE_POKEMON_DETAIL';

const getPokemonApiDetail = url => {
  return axios.get(url);
};

function* getPokemonDetail(action) {
  const pokemonDetail = yield call(getPokemonApiDetail, action.payload);
  yield put({ type: API_RESPONDED_WITH_THE_POKEMON_DETAIL, payload: pokemonDetail.data });
}

export function* watchPokemonListItemClicked() {
  yield takeEvery(POKEMON_SELECTED, getPokemonDetail);
}
