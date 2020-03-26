import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { normalize } from 'polished';

export const GlobalCSS = css`
  ${normalize()}

  * {
    box-sizing: border-box;
  }
`;

export default styled.div`
  min-height: 100vh;
  overflow: hidden;
`;
