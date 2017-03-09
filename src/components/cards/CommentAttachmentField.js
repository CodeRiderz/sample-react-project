import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { AddAttachmentIcon } from 'components/icons'
import AttachmentItem from './AttachmentItem'

class CommentAttachmentField extends React.Component {
  static propTypes = {
    fieldKey: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    value: []
  }

  get handleFieldChange () {
    const { onChange } = this.props
    return (e) => {
      e.preventDefault()
      // convert files to an array
      const files = [ ...e.target.files ]
      onChange(files)
    }
  }

  get handleRemoveFile () {
    const { value, onChange } = this.props
    return (file) => {
      const fileIndex = _.findIndex(value, file)
      const files = [ ...value.slice(0, fileIndex), ...value.slice(fileIndex + 1) ]
      onChange(files)
    }
  }

  renderFiles () {
    const { value } = this.props

    if (_.isEmpty(value)) return null
    return value.map((file, index) => (
      <AttachmentItem key={`attachment-item-${index}`} file={file} onRemove={this.handleRemoveFile} />
    ))
  }

  render () {
    const { fieldKey, value } = this.props
    const inputProps = _.omit(this.props, [
      'fieldKey', 'initialValue', 'value', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled'
    ])
    return (
      <div className={classNames('comment-attachment', { 'empty-attachment': _.isEmpty(value) })}>
        <div className="button-attachment">
          <input id={fieldKey} type="file" {...inputProps} onChange={this.handleFieldChange} />
          <label htmlFor={fieldKey}><AddAttachmentIcon /></label>
        </div>
        <ul>
          {this.renderFiles()}
        </ul>
      </div>
    )
  }
}

export default CommentAttachmentField
