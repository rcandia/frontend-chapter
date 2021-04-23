import React from 'react'
import { render, fireEvent } from 'test-utils'

import { Input, InputComponentProps } from 'components'

const setup = (props?: Omit<InputComponentProps, 'name'>) => {
  const queries = render(<Input name='input-test' inputTestId='input' data-testid='input-container' {...props} />)
  const input = queries.getByTestId('input')

  return {
    ...queries,
    input
  }
}

describe('Input component', () => {
  test('Render', () => {
    const { input, getByText } = setup({ label: 'Input' })
    expect(getByText('Input')).toBeTruthy()
    expect(input).toBeTruthy()
    expect(input).toHaveStyle('border: 1px solid black')
  })
  test('Error render', () => {
    const { getByText, input } = setup({ error: { message: 'Error', type: 'error' } })
    expect(input).toHaveStyle('border-color: red')
    expect(getByText('Error')).toBeTruthy()
  })
  test('Change', () => {
    const { input } = setup()
    expect(input).not.toHaveValue('Hello')

    fireEvent.change(input, { target: { value: 'Hello' } })
    expect(input).toHaveValue('Hello')
  })
})
