import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from './styles';

const typePokemonBadge = props => {
  const { pokemonType } = props;

  return <Badge pokemonType={pokemonType}>{pokemonType}</Badge>;
};

typePokemonBadge.propTypes = {
  pokemonType: PropTypes.string.isRequired,
};

export default typePokemonBadge;
