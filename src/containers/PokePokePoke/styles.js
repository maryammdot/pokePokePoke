import styled from 'styled-components';

import { monospace, appColors } from '../../theme';

const pokedex_width = '62.5rem';
const pokedex_height = '43.75rem';
const pokedex_backgroundColor = appColors.primary;
const pokedex_shadowColor = appColors.darkPrimary;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Pokedex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pokedex_width};
  height: ${pokedex_height};
  background-color: ${pokedex_backgroundColor};
  font-family: ${monospace};
  box-shadow: 0px 15px 0px 0px ${pokedex_shadowColor}, 0px -15px 0px 0px ${pokedex_shadowColor},
    15px 0px 0px 0px ${pokedex_shadowColor}, -15px 0px 0px 0px ${pokedex_shadowColor};
`;
