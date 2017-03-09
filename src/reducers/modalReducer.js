import { CALL_MODAL_IMAGE, DISMISS_MODAL_IMAGE, CALL_MODAL_EVENT, DISMISS_MODAL_EVENT } from 'actions/modalActions'
import _ from 'lodash'

const initialState = {
  modalImage: {
    active: false
  },
  modalEvent: {
    active: false
  }
}

function callModalImage (src, title) {
  return (state) => {
    const newModalData = {
      src,
      title,
      active: true
    }

    return _.assign({}, state, { modalImage: newModalData })
  }
}

function callModalEvent (title, date, location, description, image) {
  return (state) => {
    const newModalData = { title, date, location, description, image, active: true }
    return _.assign({}, state, { modalEvent: newModalData })
  }
}

function modalReducer (state = initialState, action = {}) {
  switch (action.type) {
    case CALL_MODAL_IMAGE:
      return callModalImage(action.src, action.title)(state)
    case DISMISS_MODAL_IMAGE:
      return _.assign({}, state, { modalImage: { active: false } })
    case CALL_MODAL_EVENT:
      const { title, date, location, description, image } = action
      return callModalEvent(title, date, location, description, image)(state)
    case DISMISS_MODAL_EVENT:
      return _.assign({}, state, { modalEvent: { active: false } })
    default:
      return state
  }
}

export default modalReducer
