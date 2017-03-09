export const urlRegex = /(https?:\/\/[^\s]+)/g
export function extractURL (text) {
  return text.match(urlRegex)
}
