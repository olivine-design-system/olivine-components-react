import React from 'react'

import { ButtonPrefix, ButtonSufix } from './styled-components.js'
import { getSharedProps } from './utils.js'

function ButtonInternals(props) {
  const { children, overrides = {}, prefix, sufix } = props
  console.log(prefix)
  // const [ButtonPrefix, buttonPrefixProps] = getOverrides(
  //   overrides.ButtonPrefix,
  //   StyledStartEnhancer,
  // )
  // const [ButtonSufix, buttonSufixProps] = getOverrides(
  //   overrides.ButtonSufix,
  //   StyledEndEnhancer,
  // )

  const sharedProps = getSharedProps(props)
  return (
    <React.Fragment>
      {prefix && (
        <ButtonPrefix
          {...sharedProps}
          // {...buttonPrefixProps}
        >
          {typeof prefix === 'function' ? prefix(sharedProps) : prefix}
        </ButtonPrefix>
      )}
      {children}
      {sufix && (
        <ButtonSufix
          {...sharedProps}
          // {...buttonSufixProps}
        >
          {typeof sufix === 'function' ? sufix(sharedProps) : sufix}
        </ButtonSufix>
      )}
    </React.Fragment>
  )
}

export default ButtonInternals
