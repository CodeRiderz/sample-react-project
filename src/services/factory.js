import React from 'react'
import ReactEmoji from 'react-emoji'
import { urlRegex } from 'services'
import _ from 'lodash'

export function transformPostMessage (text) {
  const finalDOM = text.split(/(https?:\/\/[^\s]+)|\r|\n/g).map((child, index) => {
    if (urlRegex.test(child)) {
      const TempLink = createLink(child)
      return <TempLink key={`post-message-${index}`} />
    } else if (_.isNil(child)) {
      return <br key={`post-message-${index}`} />
    } else {
      return ReactEmoji.emojify(child, { emojiType: 'emojione' })
    }
  })
  return finalDOM
}

function createLink (url) {
  class TempLink extends React.Component {
    render () {
      return (<a href={url} target="_blank">{url}</a>)
    }
  }
  return TempLink
}
