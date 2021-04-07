import React from 'react'
import styled, { css } from 'styled-components'
import {
  variant,
  space,
  layout,
  color,
  border,
  position,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps
} from 'styled-system'

type ButtonVariants = {
  primary: 'primary'
  secondary: 'secondary'
}

export interface ButtonProps extends SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps {
  variant: keyof ButtonVariants
  isLoading?: boolean
  disabled?: boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ isLoading, disabled, children, ...props }) => {
  const buttonChildren = isLoading ? 'Carregando...' : children
  const isDisabled = disabled || isLoading

  return (
    <Button disabled={isDisabled} {...props}>
      {buttonChildren}
    </Button>
  )
}

const Button: React.FC<ButtonProps> = styled.button`
  ${variant({
    variants: {
      primary: {
        bg: 'primary',
        color: 'white'
      },
      secondary: {
        bg: 'secondary',
        color: 'primary'
      }
    }
  })}
  height: 40px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid black;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: gray;
      `
    }
  }}
`

ButtonComponent.defaultProps = {
  width: 'big'
}

export default ButtonComponent
