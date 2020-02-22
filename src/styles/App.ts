/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import mario from '../assets/mario.gif';
import ground from '../assets/ground.png';
import bushes from '../assets/bushes.png';
import back from '../assets/back.png';

const backWidth = '512px';
const backHeight = '432px';
const bushesWidth = '508px';
const bushesHeight = '79px';
const groundWidth = '68px';
const groundHeight = '22px';
const marioWidth = '30px';
const marioHeight = '54px';

export const GlobalCSS = css`
  * {
    box-sizing: border-box;
  }
`;

const backKeyframes = keyframes`
  0% {
    background-position:
      left 33% bottom ${groundHeight},
      left 0px bottom 0px,
      left 0px bottom ${groundHeight},
      left 0px bottom 0px;
  }
  50% {
    background-position:
      left 66% bottom ${groundHeight},
      left (-(${groundWidth} * 12)) bottom 0px,
      left (-(${bushesWidth} * 1)) bottom ${groundHeight},
      left (-(${backWidth} / 2)) bottom 0px;
  }
  100% {
    background-position:
      left 33% bottom ${groundHeight},
      left (-(${groundWidth} * 24)) bottom 0px,
      left (-(${bushesWidth} * 2)) bottom ${groundHeight},
      left (-${backWidth}) bottom 0px;
  }
`;

export default styled.div`
  min-height: 100vh;
  background-image:
    url('${mario}'),
    url('${ground}'),
    url('${bushes}'),
    url('${back}');
  background-color: #f8e0b0;
  background-repeat:
    no-repeat,
    repeat-x,
    repeat-x,
    repeat-x;
  background-position:
    left 30% bottom ${groundHeight},
    left 0px bottom 0px,
    left 0px bottom ${groundHeight},
    left 0px bottom 0px;
  animation: ${backKeyframes} 15s infinite linear;
  overflow: hidden;
`;
