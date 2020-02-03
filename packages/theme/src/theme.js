import merge from 'lodash/merge'

import themeAnimations from './animations'
import themeColors from './colors'
import themeTypography from './typography'
import themeBorders from './borders'
import themeSizing from './sizing'

// theme color palette
// inspired by https://coolors.co/app/9fb1bc-465775-ffffff-274c77-2e4057
export const themeColorsOutdated = {
  bodyColor: '#465775',
  bodyBackground: '#FFFFFF',
  primary: '#274C77',
  accent: '#9FB1BC',
  secondary: '#2E4057',
}

// theme fonts
export const themeFonts = {
  primary: 'Roboto, Helvetica, Arial, sans-serif',
}

export const createTheme = opts => {
  const { fonts, theme, colors, animations } = opts || {}
  const customFonts = merge({}, themeFonts, fonts)
  const customColors = merge({}, themeColorsOutdated, themeColors, colors)
  const customAnimations = merge({}, themeAnimations, animations)

  return merge(
    {},
    {
      name: 'base', // can be used in https://github.com/echoulen/storybook-addon-styled-component-theme
      colors: customColors,
      fonts: customFonts,
      typography: themeTypography,
      borders: themeBorders,
      sizing: themeSizing,
      animations: customAnimations,
      body: {
        color: customColors.bodyColor,
        background: customColors.bodyBackground,
        fontSize: '16px',
        padding: '10px',
      },
      Card: {
        borderColor: customColors.secondary,
      },
    },
    theme,
  )
}

export const theme = createTheme()
