import React, { Children } from 'react'
import { StyledButton } from './styled-components'
import ButtonInternals from './button-internals'
import { defaultProps } from './default-props'
import { getSharedProps } from './utils'

class Button extends React.Component {
  static defaultProps = defaultProps

  internalOnClick = (...args) => {
    const { isLoading, onClick } = this.props
    if (isLoading) {
      return
    }
    onClick && onClick(...args)
  }

  render() {
    const {
      size,
      type,
      shape,
      isLoading,
      isSelected,
      prefix,
      sufix,
      children,
      forwardedRef,
      ...restProps
    } = this.props

    const sharedProps = getSharedProps(this.props)
    return (
      <StyledButton
        ref={forwardedRef}
        data-baseweb="button"
        {...sharedProps}
        {...restProps}
        // {...baseButtonProps}
        // Applies last to override passed in onClick
        onClick={this.internalOnClick}
      >
        {isLoading ? (
          <React.Fragment>
            {/* Do not override */}
            <div style={{ opacity: 0, display: 'flex' }}>
              <ButtonInternals {...this.props} />
            </div>
            {/* TODO: Add loading state */}
            {/* <LoadingSpinnerContainer {...loadingSpinnerContainerProps}>
              <LoadingSpinner {...sharedProps} {...loadingSpinnerProps} />
            </LoadingSpinnerContainer> */}
          </React.Fragment>
        ) : (
          <ButtonInternals {...this.props} />
        )}
      </StyledButton>
    )
  }
}

const ForwardedButton = React.forwardRef((props, ref) => (
  <Button forwardedRef={ref} {...props} />
))
ForwardedButton.displayName = 'Button'
export default ForwardedButton
