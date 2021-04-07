import React from 'react'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'themeprovider-storybook'
import { theme } from '../src/theme'
import { GlobalStyle } from '../src/App'

const themes = [{ ...theme, name: 'Default Theme' }]
addDecorator(withThemesProvider(themes))
addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
))
