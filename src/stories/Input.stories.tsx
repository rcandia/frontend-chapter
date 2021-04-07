import React from 'react'

import { Input } from 'components'

export default {
  title: 'Input',
  component: Input
}

export const Default = () => (
  <Input
    label='Label'
    placeholder='placeholder'
    name='default'
    register={() => {
      return
    }}
  />
)

export const Error = () => (
  <Input
    label='Label'
    placeholder='placeholder'
    name='error'
    error={{ message: 'Mensagem de erro', type: 'error' }}
    register={() => {
      return
    }}
  />
)
