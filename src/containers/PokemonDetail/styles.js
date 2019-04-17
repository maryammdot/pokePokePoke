import styled from 'styled-components';

import { appPadding, centerWithMargin, appFontSizes, appColors } from '../../theme';

const card_padding = appPadding.m;
const title_fontSize = appFontSizes.xxl;
const pokedexNumber_fontSize = appFontSizes.xxl;

export const Wrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 27.3125rem;
  height: 590px;

  display: flex;
  flex-direction: column;
  padding: ${card_padding};

  color: ${appColors.primaryText};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: ${title_fontSize};
    text-transform: uppercase;
  }

  span {
    font-size: ${pokedexNumber_fontSize};
  }
`;

export const SpriteWrapper = styled.div`
  ${centerWithMargin};
`;

export const TypePokemonBadgesWrapper = styled.div`
  display: flex;
`;
