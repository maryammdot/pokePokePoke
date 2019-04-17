import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App/App';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { watchStartPokedex } from './sagas/startPokedexSaga';
import { watchPokemonListItemClicked } from './sagas/pokemonListItemClickedSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer /* preloadedState, */, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchStartPokedex);
sagaMiddleware.run(watchPokemonListItemClicked);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
