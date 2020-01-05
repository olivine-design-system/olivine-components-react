# Example App Theme

## Usage

```js
import React from 'react';
import { ThemeProvider } from 'styled-components
import { GlobalStyles } from '@olivine-components-react/ns-theme-js'

import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
      <div>Hello World</div>
    </ThemeProvider>
  );
};

```
