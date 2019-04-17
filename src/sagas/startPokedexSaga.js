import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { START_POKEDEX_BUTTON_PRESSED } from '../containers/PokedexScreen/actions';
import '@babel/polyfill';

export const API_RESPONDED_WITH_THE_POKEMON_LIST = 'API_RESPONDED_WITH_THE_POKEMON_LIST';

const getPokemonApiGenericResult = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon');
};

const getPokemonApiFullList = pokemonApiLength => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonApiLength}`);
};

function* getInitialPokemonList() {
  const pokemonApiGenericResult = yield call(getPokemonApiGenericResult);
  const pokemonApiLength = pokemonApiGenericResult.data.count;
  const pokemonListRaw = yield call(getPokemonApiFullList, pokemonApiLength);
  const pokemonList = pokemonListRaw.data.results;

  yield put({ type: API_RESPONDED_WITH_THE_POKEMON_LIST, payload: pokemonList });
}

export function* watchStartPokedex() {
  yield takeEvery(START_POKEDEX_BUTTON_PRESSED, getInitialPokemonList);
}
