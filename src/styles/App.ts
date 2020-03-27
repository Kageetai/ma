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
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 42em;
  margin: 0 auto;
`;
