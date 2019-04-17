import styled from 'styled-components';

import { appColors, appFontSizes } from '../../theme';

const item_fontColor = appColors.primaryText;
const item_fontSize = appFontSizes.xl;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${item_fontColor};
  font-size: ${item_fontSize};
  margin-bottom: 0.3rem;
  padding: 0.5rem 0;
  cursor: pointer;
`;
