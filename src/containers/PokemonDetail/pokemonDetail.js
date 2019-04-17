import React from 'react';
import PropTypes from 'prop-types';
import TypePokemonBadge from '../../components/TypePokemonBadge';

import { Header, SpriteWrapper, Wrapper, TypePokemonBadgesWrapper } from './styles';

const pokemonDetail = ({ pokemon }) => {
  if (pokemon && pokemon.details === null) {
    return null;
  }

  const { name, pokedexNumber, image, types } = pokemon.details;

  const pokemonBadges = types.map(type => {
    return <TypePokemonBadge pokemonType={type} key={type} />;
  });

  return (
    <Wrapper>
      <Header>
        <h3>{name}</h3>
        <span>#{pokedexNumber}</span>
      </Header>
      <SpriteWrapper>
        <img src={image} alt={name + ' image'} />
      </SpriteWrapper>
      <TypePokemonBadgesWrapper>
        <span>Type:</span>
        {pokemonBadges}
      </TypePokemonBadgesWrapper>
    </Wrapper>
  );
};

pokemonDetail.propTypes = {
  pokemon: PropTypes.object,
};

export default pokemonDetail;
