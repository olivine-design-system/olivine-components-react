import styled from '@emotion/styled'

import { TYPE, SIZE, SHAPE } from './constants'

export const StyledButton = styled.button(
  ({ theme, $size, $type, $shape, $isLoading, $isSelected, $disabled }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    textDecoration: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: theme.animations.timing100,
    transitionTimingFunction: theme.animations.easeOutCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    ...getFontStyles({ theme, $size }),
    ...getBorderRadiiStyles({ theme, $size, $shape }),
    ...getPaddingStyles({ theme, $size, $shape }),
    // type style override
    ...getTypeStyles({ theme, $type, $isLoading, $isSelected, $disabled }),
  }),
)

export const ButtonSufix = styled.div(({ theme }) => ({
  display: 'flex',
  [theme.direction === 'rtl' ? 'marginRight' : 'marginLeft']: theme.sizing
    .scale500,
}))

export const ButtonPrefix = styled.div(({ theme }) => ({
  display: 'flex',
  [theme.direction === 'rtl' ? 'marginLeft' : 'marginRight']: theme.sizing
    .scale500,
}))

// eslint-disable-next-line no-unused-vars
function getLoadingSpinnerColors({ theme, $type, $disabled }) {
  if ($disabled) {
    return {
      foreground: theme.colors.buttonDisabledSpinnerForeground,
      background: theme.colors.buttonDisabledSpinnerBackground,
    }
  }
  switch ($type) {
    case TYPE.secondary: {
      return {
        foreground: theme.colors.buttonSecondarySpinnerForeground,
        background: theme.colors.buttonSecondarySpinnerBackground,
      }
    }
    case TYPE.tertiary: {
      return {
        foreground: theme.colors.buttonTertiarySpinnerForeground,
        background: theme.colors.buttonTertiarySpinnerBackground,
      }
    }
    case TYPE.minimal: {
      return {
        foreground: theme.colors.buttonMinimalSpinnerForeground,
        background: theme.colors.buttonMinimalSpinnerBackground,
      }
    }
    case TYPE.primary:
    default: {
      return {
        foreground: theme.colors.buttonPrimarySpinnerForeground,
        background: theme.colors.buttonPrimarySpinnerBackground,
      }
    }
  }
}

function getBorderRadiiStyles({ theme, $size, $shape }) {
  let value = theme.borders.buttonBorderRadius

  if ($shape === SHAPE.pill) {
    if ($size === SIZE.compact) {
      value = '30px'
    } else if ($size === SIZE.large) {
      value = '42px'
    } else {
      value = '38px'
    }
  } else if ($shape === SHAPE.round) {
    value = '50%'
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }
}

function getFontStyles({ theme, $size }) {
  switch ($size) {
    case SIZE.mini:
      return theme.typography().font150
    case SIZE.compact:
      return theme.typography().font250
    case SIZE.large:
      return theme.typography().font450
    default:
      return theme.typography().font350
  }
}

function getPaddingStyles({ theme, $size, $shape }) {
  const iconShape = $shape === SHAPE.square || $shape === SHAPE.round
  switch ($size) {
    case SIZE.mini:
      return {
        paddingTop: theme.sizing.scale200,
        paddingBottom: theme.sizing.scale200,
        paddingLeft: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
        paddingRight: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
      }
    case SIZE.compact:
      return {
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
        paddingRight: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
      }
    case SIZE.large:
      return {
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
        paddingRight: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
      }
    default:
      return {
        paddingTop: theme.sizing.scale550,
        paddingBottom: theme.sizing.scale550,
        paddingLeft: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
        paddingRight: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
      }
  }
}

function getTypeStyles({ theme, $isLoading, $isSelected, $type, $disabled }) {
  if ($disabled) {
    return {}
  }
  switch ($type) {
    case TYPE.primary:
      if ($isSelected) {
        return {
          color: theme.colors.buttonPrimarySelectedText,
          backgroundColor: theme.colors.buttonPrimarySelectedFill,
        }
      }
      return {
        color: theme.colors.buttonPrimaryText,
        backgroundColor: theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? theme.colors.buttonPrimaryActive
            : theme.colors.buttonPrimaryHover,
        },
        ':focus': {
          backgroundColor: $isLoading
            ? theme.colors.buttonPrimaryActive
            : theme.colors.buttonPrimaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonPrimaryActive,
        },
      }
    case TYPE.secondary:
      if ($isSelected) {
        return {
          color: theme.colors.buttonSecondarySelectedText,
          backgroundColor: theme.colors.buttonSecondarySelectedFill,
        }
      }
      return {
        color: theme.colors.buttonSecondaryText,
        backgroundColor: theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? theme.colors.buttonSecondaryActive
            : theme.colors.buttonSecondaryHover,
        },
        ':focus': {
          backgroundColor: $isLoading
            ? theme.colors.buttonSecondaryActive
            : theme.colors.buttonSecondaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonSecondaryActive,
        },
      }
    case TYPE.tertiary:
      if ($isSelected) {
        return {
          color: theme.colors.buttonTertiarySelectedText,
          backgroundColor: theme.colors.buttonTertiarySelectedFill,
        }
      }
      return {
        color: theme.colors.buttonTertiaryText,
        backgroundColor: theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? theme.colors.buttonTertiaryActive
            : theme.colors.buttonTertiaryHover,
        },
        ':focus': {
          backgroundColor: $isLoading
            ? theme.colors.buttonTertiaryActive
            : theme.colors.buttonTertiaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonTertiaryActive,
        },
      }
    case TYPE.minimal:
      if ($isSelected) {
        return {
          color: theme.colors.buttonMinimalSelectedText,
          backgroundColor: theme.colors.buttonMinimalSelectedFill,
        }
      }
      return {
        color: theme.colors.buttonMinimalText,
        backgroundColor: theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading
            ? theme.colors.buttonMinimalActive
            : theme.colors.buttonMinimalHover,
        },
        ':focus': {
          backgroundColor: $isLoading
            ? theme.colors.buttonMinimalActive
            : theme.colors.buttonMinimalHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonMinimalActive,
        },
      }
    default:
      return {}
  }
}
