import React from 'react'
import { AttachIcon } from 'components/icons'

class AttachmentItem extends React.Component {
  static propTypes = {
    attachment: React.PropTypes.object,
    onRemove: React.PropTypes.func
  }

  get handleRemove () {
    const { attachment, onRemove } = this.props
    return () => {
      onRemove(attachment)
    }
  }
  render () {
    const { attachment, onRemove } = this.props
    return (
      <li>
        <a href={attachment.url}><AttachIcon />{attachment.name}</a>
        {onRemove ? <div className="remove-attachment" onClick={this.handleRemove} /> : null}
      </li>
    )
  }
}

export default AttachmentItem
