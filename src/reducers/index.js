import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import { reducer as formReducer } from 'redux-form'
import app from './appReducer'
import post from './postReducer'
import modal from './modalReducer'

export default combineReducers({
  router: routerStateReducer,
  form: formReducer,
  app,
  post,
  modal
})
