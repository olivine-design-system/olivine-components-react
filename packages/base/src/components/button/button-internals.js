import React from 'react'

// TODO: Add Prefix and Sufix
// import {
//   StartEnhancer as StyledStartEnhancer,
//   EndEnhancer as StyledEndEnhancer,
// } from './styled-components.js'

function ButtonInternals(props) {
  const { children, overrides = {}, startEnhancer, endEnhancer } = props
  // const [StartEnhancer, startEnhancerProps] = getOverrides(
  //   overrides.StartEnhancer,
  //   StyledStartEnhancer,
  // )
  // const [EndEnhancer, endEnhancerProps] = getOverrides(
  //   overrides.EndEnhancer,
  //   StyledEndEnhancer,
  // )
  // const sharedProps = getSharedProps(props)
  return (
    <React.Fragment>
      {startEnhancer && (
        <div>start</div>
        // <StartEnhancer {...sharedProps} {...startEnhancerProps}>
        // <StartEnhancer>
        //   {typeof startEnhancer === 'function'
        //     ? startEnhancer(sharedProps)
        //     : startEnhancer}
        // </StartEnhancer>
      )}
      {children}
      {endEnhancer && (
        <div>end</div>
        // <EndEnhancer {...sharedProps} {...endEnhancerProps}>
        //   {typeof endEnhancer === 'function'
        //     ? endEnhancer(sharedProps)
        //     : endEnhancer}
        // </EndEnhancer>
      )}
    </React.Fragment>
  )
}

export default ButtonInternals
