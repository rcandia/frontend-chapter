import React, { useState } from 'react'
import { render, screen, fireEvent } from 'test-utils'

import { Button, ButtonProps, ButtonVariants } from 'components'

interface SetupButtonProps extends Omit<ButtonProps, 'variant'> {
  title: string
  variant?: keyof ButtonVariants
}

const ButtonComponent: React.FC<SetupButtonProps> = ({ title, variant, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      variant={variant ?? 'primary'}
      type='button'
      onClick={() => setIsLoading(true)}
      isLoading={isLoading}
      {...props}
    >
      {title}
    </Button>
  )
}

const setup = (props: SetupButtonProps) => {
  const queries = render(<ButtonComponent {...props} />)
  const button = screen.getByRole('button')

  return {
    button,
    ...queries
  }
}

describe('Button Component', () => {
  test('Primary variant', () => {
    const { button } = setup({ title: 'Primário' })

    expect(button).toHaveStyle('color: white')
    expect(button).toHaveStyle('background-color: #0D1321')
  })
  test('Secondary variant', () => {
    setup({ title: 'Secundário', variant: 'secondary' })
    const button = screen.getByRole('button')

    expect(button).toHaveStyle('color: #0D1321')
    expect(button).toHaveStyle('background-color: #FFEDDF')
  })
  test('Button behavior', () => {
    const { getByText } = setup({ title: 'Avançar' })
    const button = getByText('Avançar')

    fireEvent.click(button)
    expect(button.innerHTML).toBe('Carregando...')
    expect(button).toHaveStyle('background-color: gray')
  })
})
