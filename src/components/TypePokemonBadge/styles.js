import styled from 'styled-components';

import { appPadding, appFontSizes, appMargin } from '../../theme';
import POKEMON_TYPES from '../../assets/pokemonTypes';

const badge_marginHorizontalLeft = appMargin.xxs;
const badge_marginHorizontalRight = badge_marginHorizontalLeft;
const badge_paddingHorizontal = appPadding.xxs;
const badge_paddingVertical = appPadding.xs;
const badge_borderRadius = '0.3rem';
const badge_fontSize = appFontSizes.s;

const computedBackgroundColor = ({ pokemonType }) => {
  return `
    background-color: ${POKEMON_TYPES[pokemonType]};
  `;
};

export const Badge = styled.span`
  ${computedBackgroundColor};
  margin-left: ${badge_marginHorizontalLeft};
  margin-right: ${badge_marginHorizontalRight};
  padding: ${badge_paddingHorizontal} ${badge_paddingVertical};
  border-radius: ${badge_borderRadius};
  font-size: ${badge_fontSize};
  color: black;
  text-transform: uppercase;
`;
