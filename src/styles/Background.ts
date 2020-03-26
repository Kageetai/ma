import styled from '@emotion/styled';
import { css } from '@emotion/core';

const randInt = (max: number, min: number = 0) =>
  Math.random() * (max - min) + min;

interface Props {
  number: number;
}

export default styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: darkslategrey;
  z-index: -1;

  > div {
    position: absolute;
    border: 1px solid grey;

    ${({ number }) =>
      Array.from(
        { length: number },
        (x, i) => css`
          &:nth-of-type(${i + 1}) {
            top: ${randInt(100)}%;
            left: ${randInt(100)}%;
            width: ${randInt(5, 25)}%;
            height: ${randInt(5, 25)}%;
          }
        `
      )}
  }
`;
