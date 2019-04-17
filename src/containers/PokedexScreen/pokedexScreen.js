import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import PokemonList from '../PokemonList';
import PokemonDetail from '../PokemonDetail';
import PokedexMode from '../PokedexMode';

import { Wrapper } from './styles';

class PokedexScreen extends Component {
  render() {
    const { startPokedexButtonPressed, pokedexScreenStatus } = this.props;

    const { showPokedexStartButton, showPokedexModes } = pokedexScreenStatus;

    return (
      <Wrapper>
        <Button buttonText="Start Pokedex" onClickFunction={startPokedexButtonPressed} show={showPokedexStartButton} />
        <PokemonList />
        <PokemonDetail />
        <PokedexMode show={showPokedexModes} />
      </Wrapper>
    );
  }
}

PokedexScreen.propTypes = {
  startPokedexButtonPressed: PropTypes.func.isRequired,
  pokedexScreenStatus: PropTypes.object.isRequired,
};

export default PokedexScreen;
