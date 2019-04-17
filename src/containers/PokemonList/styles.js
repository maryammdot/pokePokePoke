import styled from 'styled-components';

import { appPadding } from '../../theme';

const list_padding = appPadding.m;
const list_height = '18.75rem';
const list_width = '27.3125rem';
const list_marginLeft = '0.9375rem';
const list_marginRight = '0.5rem';
const list_marginTop = list_marginLeft;

export const Wrapper = styled.div`
  height: ${list_height};
  width: ${list_width};
  margin-left: ${list_marginLeft};
  margin-right: ${list_marginRight};
  margin-top: ${list_marginTop};
  padding: ${list_padding};
  overflow: scroll;
`;
