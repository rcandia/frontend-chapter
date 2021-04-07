import React from 'react'
import { Route } from 'react-router-dom'

import { Home } from 'screens'

const AuthenticatedApp = () => {
  return (
    <Route path='/'>
      <Home />
    </Route>
  )
}

export default AuthenticatedApp
