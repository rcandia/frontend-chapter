import React from 'react'

import { Button } from 'components'

export default {
  title: 'Button',
  component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>

export const Secondary = () => <Button variant='secondary'>Secondary</Button>

export const Loading = () => (
  <Button variant='secondary' isLoading>
    Loading
  </Button>
)

export const Disabled = () => (
  <Button variant='secondary' disabled>
    Disabled
  </Button>
)
