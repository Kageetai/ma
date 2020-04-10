import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { normalize, transparentize, lighten } from 'polished';

import theme from './theme';

export const GlobalCSS = css`
  ${normalize()}

  body {
    color: ${theme.colors.font};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${theme.colors.links};
  }
`;

export default styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const containerBackgroundColor = transparentize(
  0.3,
  lighten(0.05, theme.colors.background)
);

export const Container = styled.div`
  overflow: auto;
  max-width: 44em;
  margin: 0 auto;
  padding: 0 1em;
  background-color: ${containerBackgroundColor};
`;
