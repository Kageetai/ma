import styled from '@emotion/styled';
import { css } from '@emotion/core';

import theme from './theme';

const randInt = (max: number, min: number = 0) =>
  Math.random() * (max - min) + min;

interface Props {
  number: number;
}

export default styled.div<Props>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.background};

  & + * {
    position: relative;
  }

  > div {
    position: absolute;
    border: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.background};
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
      transition: all 1s;
    }

    ${({ number }) =>
      Array.from(
        { length: number },
        (x, i) => css`
          &:nth-of-type(${i + 1}) {
            top: ${randInt(100)}vh;
            left: ${randInt(100)}vw;
            width: ${randInt(100, 250)}px;
            height: ${randInt(100, 250)}px;
          }
        `
      )}
  }
`;
