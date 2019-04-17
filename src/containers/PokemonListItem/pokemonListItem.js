import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const pokemonListItem = props => {
  const { name, pokedexNumber, url, pokemonSelected } = props;
  return (
    <Wrapper onClick={() => pokemonSelected(url)}>
      <span>{name}</span>
      <span>#{pokedexNumber}</span>
    </Wrapper>
  );
};

pokemonListItem.propTypes = {
  name: PropTypes.string.isRequired,
  pokedexNumber: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pokemonSelected: PropTypes.func.isRequired,
};

export default pokemonListItem;
