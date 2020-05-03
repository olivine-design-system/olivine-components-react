import React from 'react'
import { mount } from 'enzyme'

import ThemeProviderWrapper from '../themeProviderWrapper'

export default function mountWithTheme(tree) {
  return mount(<ThemeProviderWrapper>{tree}</ThemeProviderWrapper>)
}
