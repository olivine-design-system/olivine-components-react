import React from 'react'
import { testingUtilities } from '@olivine/internals'

import Button from '.'

const { mountWithTheme } = testingUtilities

describe('Button Component Test Suite', () => {
  it('Button renders with text', () => {
    const wrapper = mountWithTheme(<Button>Hello Button</Button>)
    const button = wrapper.find('Button').at(0)
    expect(button.text()).toBe('Hello Button')
  })

  it('Button invokes onClick() when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mountWithTheme(
      <Button onClick={onClick}>Hello Button</Button>,
    )
    wrapper
      .find('Button')
      .at(0)
      .simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
