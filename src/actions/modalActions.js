
export const CALL_MODAL_IMAGE = 'MODAL.CALL_MODAL_IMAGE'
export const DISMISS_MODAL_IMAGE = 'MODAL.DISMISS_MODAL_IMAGE'
export const CALL_MODAL_EVENT = 'MODAL.CALL_MODAL_EVENT'
export const DISMISS_MODAL_EVENT = 'MODAL.DISMISS_MODAL_EVENT'

export function callModalImage (src, title) {
  return { type: CALL_MODAL_IMAGE, src, title }
}

export function dismissModalImage () {
  return { type: DISMISS_MODAL_IMAGE }
}

export function callModalEvent (title, date, location, description, image) {
  return { type: CALL_MODAL_EVENT, title, date, location, description, image }
}

export function dismissModalEvent () {
  return { type: DISMISS_MODAL_EVENT }
}
