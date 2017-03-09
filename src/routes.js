import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { ROOT_PATH } from './constants'

import RootContainer from './containers/RootContainer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default (
  <Route path={ROOT_PATH} component={RootContainer}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)
