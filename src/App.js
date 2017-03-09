import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { enableBatching } from 'redux-batched-actions'
import { reduxReactRouter, ReduxRouter } from 'redux-router'
import { createHistory } from 'history'

import routes from 'routes'

/* Reducers ============================================================== */
import rootReducer from './reducers'

// lazy loading common stylesheets
require.ensure([ './common-assets/css/common.scss' ], (require) => {
  require('./common-assets/css/common.scss').default
})

const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(enableBatching(rootReducer))

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

class Root extends React.Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter routes={routes} />
        </Provider>
      </div>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  const RedBox = require('redbox-react')
  try {
    ReactDOM.render(<Root />, document.getElementById('root'))
  } catch (e) {
    ReactDOM.render(<RedBox error={e} />, document.getElementById('root'))
  }
} else {
  ReactDOM.render(<Root />, document.getElementById('root'))
}
