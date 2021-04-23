import React from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Column, Text } from 'components'
import { ColumnProps } from 'components/Column'

interface InputProps {
  name: string
  placeholder?: string
  error?: FieldError
  type?: string
}

export interface InputComponentProps extends InputProps, ColumnProps {
  register?(): void
  label?: string
  inputTestId?: string
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  register,
  label,
  placeholder,
  error,
  type,
  inputTestId,
  ...props
}) => {
  return (
    <Column height={82} {...props}>
      {label && <Text variant='regular'>{label}</Text>}
      <Input name={name} ref={register} placeholder={placeholder} error={error} type={type} data-testid={inputTestId} />
      {error?.message && (
        <Text variant='tiny' color='red'>
          {error?.message}
        </Text>
      )}
    </Column>
  )
}

const Input = styled.input<InputProps>`
  height: 40px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid black;
  ${({ error }) => {
    if (error?.message) {
      return css`
        border-color: red;
      `
    }
  }}
`

InputComponent.defaultProps = {
  width: 'big'
}

export default InputComponent
