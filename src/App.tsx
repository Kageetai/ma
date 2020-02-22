import React from 'react';

import StyledApp, { GlobalCSS } from './styles/App';
import { Global } from '@emotion/core';

function App() {
  return (
    <StyledApp>
      <Global styles={GlobalCSS} />

      <header>
        <h1>Hello World</h1>
      </header>
    </StyledApp>
  );
}

export default App;
