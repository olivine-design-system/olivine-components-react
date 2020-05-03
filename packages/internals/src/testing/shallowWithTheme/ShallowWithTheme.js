import React from 'react'
import { shallow } from 'enzyme'

import ThemeProviderWrapper from '../themeProviderWrapper'

export default function shallowWithTheme(tree) {
  return shallow(<ThemeProviderWrapper>{tree}</ThemeProviderWrapper>)
}
