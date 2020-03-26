import React from 'react';

import StyledBackground from './styles/Background';

interface Props {
  number?: number;
}

const Background: React.FC<Props> = ({ number = 10 }) => (
  <StyledBackground number={number}>
    {Array.from({ length: number }, (x, i) => (
      <div key={i} />
    ))}
  </StyledBackground>
);

export default Background;
