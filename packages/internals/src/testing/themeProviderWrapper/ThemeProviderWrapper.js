import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '@olivine/theme'

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
