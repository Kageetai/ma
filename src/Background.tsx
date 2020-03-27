import React from 'react';

import StyledBackground from './styles/Background';

interface Props {
  number?: number;
}

const DEFAULT_NUMBER = 15;

const Background: React.FC<Props> = ({ number = DEFAULT_NUMBER }) => (
  <StyledBackground number={number}>
    {Array.from({ length: number }, (x, i) => (
      <div key={i} />
    ))}
  </StyledBackground>
);

export default Background;
