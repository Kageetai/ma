import React from 'react';

import StyledApp, { Container, GlobalCSS } from './styles/App';
import { Global } from '@emotion/core';
import Background from './Background';

const App = () => (
  <StyledApp>
    <Global styles={GlobalCSS} />

    <Background />

    <Container>
      <header>
        <h1>Hello World</h1>
      </header>

      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          facilis harum maxime non omnis perspiciatis quibusdam voluptatum.
          Deserunt necessitatibus non obcaecati optio praesentium. Consequatur
          consequuntur excepturi nemo, omnis quae vitae!
        </p>

        <p>
          <a href="http://www.bynder.com">Bynder</a>
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          aperiam blanditiis consequatur dignissimos enim error est et excepturi
          expedita harum id iure modi non pariatur quae ratione recusandae,
          voluptate voluptatem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          consequuntur esse ex fuga fugiat laboriosam nisi obcaecati pariatur
          ratione sapiente. Dolor dolores inventore modi molestiae nisi nobis
          obcaecati qui repellat.
        </p>
      </section>
    </Container>
  </StyledApp>
);

export default App;
