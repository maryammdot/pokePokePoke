import React from 'react';
import PokedexScreen from '../PokedexScreen';

import { Wrapper, Pokedex } from './styles';

const pokePokePoke = () => {
  return (
    <Wrapper>
      <Pokedex>
        <PokedexScreen />
      </Pokedex>
    </Wrapper>
  );
};

export default pokePokePoke;
