# Example App Theme

## Usage

```js
import React from 'react';
import { ThemeProvider } from "emotion-theming";

import { GlobalStyles, theme } from '@olivine/theme'

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
