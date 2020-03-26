import React from 'react';

import StyledApp, { GlobalCSS } from './styles/App';
import { Global } from '@emotion/core';
import Background from './Background';

const App = () => (
  <StyledApp>
    <Global styles={GlobalCSS} />

    <Background />

    <header>
      <h1>Hello World</h1>
    </header>
  </StyledApp>
);

export default App;
