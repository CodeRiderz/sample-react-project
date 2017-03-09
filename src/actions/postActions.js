export const ADD_POST = 'POST.ADD_POST'
export const PUSH_POSTS = 'POST.PUSH_POSTS'
export const ADD_COMMENT = 'POST.ADD_COMMENT'
export const TOGGLE_LIKE_POST = 'POST.LIKE_POST'

export function addPost (message, links, attachments, eventDate, user) {
  return { type: ADD_POST, message, links, attachments, eventDate, user }
}

export function pushPosts (posts) {
  return { type: PUSH_POSTS, posts }
}

export function addComment (postId, message, user) {
  return { type: ADD_COMMENT, postId, message, user }
}

export function toggleLikePost (postId) {
  return { type: TOGGLE_LIKE_POST, postId }
}
