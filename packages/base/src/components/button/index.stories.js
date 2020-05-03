import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import { testingUtilities } from '@olivine/internals'

import ButtonReadme from '../../../README.md'

import Button from '.'

const { ThemeProviderMock } = testingUtilities

const onClickHandler = e => action('clicked')(e)

const StoryComponent = () => {
  // Declare a new state variable, which we'll call "count" with inital state 0
  const [count, setCount] = useState(0)

  const buttonText = text('text', 'Click me')

  // the only reason onClick was written like this, and not just
  // `onClick = action('clicked')` is due to a cleaner export in the JSX tab
  const onClick = e => {
    setCount(count + 1)
    onClickHandler(e)
  }

  return (
    <ThemeProviderMock>
      <div style={{ margin: '0 auto', width: '300px' }}>
        {/* <GlobalStyle /> */}
        <p>You clicked {count} times</p>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </ThemeProviderMock>
  )
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(ButtonReadme))
  .addWithJSX('default', () => {
    const typeOptions = ['primary', 'secondary', 'tertiary', 'minimal']
    const type = select('Type', typeOptions, 'primary')

    const shapeOptions = ['default', 'pill', 'round', 'square']
    const shape = select('Shape', shapeOptions, 'default')

    const sizeOptions = ['mini', 'default', 'compact', 'large']
    const size = select('Size', sizeOptions, 'default')

    const prefix = text('Prefix', '')
    const sufix = text('Sufix', '')

    const buttonText = text('text', 'Click me')

    return (
      <ThemeProviderMock>
        <div style={{ margin: '0 auto', width: '300px' }}>
          {/* <GlobalStyle /> */}
          <Button
            type={type}
            shape={shape}
            size={size}
            onClick={onClickHandler}
            prefix={prefix}
            sufix={sufix}
          >
            {buttonText}
          </Button>
        </div>
      </ThemeProviderMock>
    )
  })
  .addWithJSX('with click counter (hooks)', () => <StoryComponent />)
