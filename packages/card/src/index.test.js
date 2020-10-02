import React from 'react'
import { mount, shallow } from 'enzyme'
import { testingUtilities } from '@olivine/internals'
import { Button } from '@olivine/base'

const { mountWithTheme } = testingUtilities

import Card from '.'

describe('Card', () => {
  const props = {
    buttonText: 'Hello Button',
    title: 'Hello Card',
  }

  it('renders', () => {
    const wrapper = mountWithTheme(<Card {...props} />)
    expect(wrapper.find('h1').text()).toBe('Hello Card')
  })

  it('invokes onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mountWithTheme(<Card {...props} onClick={onClick} />)
    wrapper.find(Button).simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
