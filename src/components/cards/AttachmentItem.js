import React from 'react'
import { AttachIcon } from 'components/icons'

class AttachmentItem extends React.Component {
  static propTypes = {
    file: React.PropTypes.object,
    onRemove: React.PropTypes.func
  }

  get handleRemove () {
    const { file, onRemove } = this.props
    return () => {
      onRemove(file)
    }
  }

  render () {
    const { file } = this.props
    return (
      <li>
        <AttachIcon />{file.name}
        <div className="remove-attachment" onClick={this.handleRemove} />
      </li>
    )
  }
}

export default AttachmentItem
