import _ from 'lodash'
import { SET_ME } from 'actions/appActions'

const initialState = {
  me: {
    id: '103',
    fullname: 'John Doe',
    url: '#',
    avatar: null
  }
}

function appReducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_ME:
      return _.assign({}, state, { me: action.me })
    default :
      return state
  }
}

export default appReducer
