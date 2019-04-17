import styled from 'styled-components';

import { appColors, appPadding, appFontSizes, appGrayColors, centerWithMargin, monospace } from '../../theme';

const getPositionParameters = ({ position }) => {
  switch (position) {
    case 'center':
      return `
        ${centerWithMargin}
      `;
    case 'right':
      return `
        margin-left: auto;
        margin-right: 0;
      `;

    default:
      return null;
  }
};

const button_shadowColor = appColors.shadow;
const button_backgroundColorHover = appColors.darkPrimary;

const button_horizontalpPadding = appPadding.m;
const button_verticalPadding = appPadding.s;
const button_borderRadius = '0';
const button_backgroundColor = appColors.primary;
const button_fontColor = appGrayColors.white;
const button_fontSize = appFontSizes.xxxl;
const button_colorTransitionTime = '0.6s';

export const Button = styled.button`
  display: block;
  padding: ${button_verticalPadding} ${button_horizontalpPadding};
  border-radius: ${button_borderRadius};
  background-color: ${button_backgroundColor};
  color: ${button_fontColor};
  font-family: ${monospace};
  font-size: ${button_fontSize};
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color ${button_colorTransitionTime};
  box-shadow: 0px 3px 0px 0px ${button_shadowColor}, 0px -3px 0px 0px ${button_shadowColor},
    3px 0px 0px 0px ${button_shadowColor}, -3px 0px 0px 0px ${button_shadowColor};
  ${props => getPositionParameters({ position: props.position })}

  &:hover {
    background-color: ${button_backgroundColorHover};
  }
`;
