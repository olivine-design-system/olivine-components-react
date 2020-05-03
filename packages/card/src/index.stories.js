import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import { testingUtilities } from '@olivine/internals'

import CardReadme from '../README.md'

import Card from '.'

const { ThemeProviderMock } = testingUtilities

// the only reason onClick was written like this, and not just
// `onClick = action('clicked')` is due to a cleaner export in the JSX tab
const onClick = e => {
  action('clicked')(e)
}

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(CardReadme))
  .addWithJSX('default', () => {
    // data
    const cardTitle = text('Card Title', 'Card', 'Data')
    const cardText = text(
      'Card Text',
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    )
    const buttonText = text('Button Text', 'Click me', 'Data')

    return (
      <ThemeProviderMock>
        <div style={{ margin: '0 auto', width: '300px' }}>
          {/* <GlobalStyle /> */}
          <Card buttonText={buttonText} onClick={onClick} title={cardTitle}>
            {cardText}
          </Card>
        </div>
      </ThemeProviderMock>
    )
  })
