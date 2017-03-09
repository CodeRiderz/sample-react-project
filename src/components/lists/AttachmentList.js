import React from 'react'
import AttachmentItem from './AttachmentItem'
import _ from 'lodash'

require('./attachment-list.scss')

class AttachmentList extends React.Component {
  static propTypes = {
    attachments: React.PropTypes.array,
    onRemove: React.PropTypes.func
  }

  renderAttachmentList () {
    const { attachments, onRemove } = this.props

    return attachments.map((attachment, index) => (
      <AttachmentItem
        key={`attachment-item-${index}`}
        attachment={attachment}
        onRemove={onRemove} />
    ))
  }

  render () {
    const { attachments } = this.props

    if (_.isEmpty(attachments)) return null

    return (
      <ul className="list-unstyled attachment-list">
        {this.renderAttachmentList()}
      </ul>
    )
  }
}

export default AttachmentList
