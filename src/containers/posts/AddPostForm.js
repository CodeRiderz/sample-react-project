import React from 'react'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import { AddFileIcon, AddPostEventIcon } from 'components/icons'
import FileField from 'components/forms/FileField'
import AttachmentList from 'components/lists/AttachmentList'
import ExternalLinks from './ExternalLinks'
import { extractURL } from 'services'

require('./add-post-form.scss')

const ommittedProps = ['initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled']

class AddPostForm extends React.Component {
  static propTypes = {
    fields: React.PropTypes.object,
    handleSubmit: React.PropTypes.func,
    resetForm: React.PropTypes.func
  }

  get handleKeyDown () {
    const { handleSubmit, resetForm } = this.props
    return (e) => {
      if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault()
        handleSubmit()
        resetForm()
      }
    }
  }

  get handleChange () {
    const { message } = this.props.fields
    return (e) => {
      message.onChange(e.currentTarget.value)
    }
  }

  get handleExternalLinkChange () {
    const { links } = this.props.fields
    return (urls) => {
      links.onChange(urls)
    }
  }

  get handleAttachmentRemove () {
    const { attachments } = this.props.fields
    return (attachment) => {
      attachments.onChange(_.without(attachments.value, attachment))
    }
  }

  render () {
    const { handleSubmit, fields: { message, links, attachments, eventDate } } = this.props

    return (
      <div className="add-post-form">
        <form onSubmit={handleSubmit}>
          <textarea
            {..._.omit(message, ommittedProps)}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            className="form-control"
            placeholder="What would you like to share ?" />
          <ExternalLinks urls={extractURL(message.value)} value={links.value} onChange={this.handleExternalLinkChange} />
          <div className="add-post-control">
            <ul className="list-inline">
              <li>
                <FileField
                  id="post-add-file"
                  className="add-file-button"
                  label={<div><AddFileIcon />Add File</div>}
                  {...attachments}
                  multiple />
              </li>
              <li><AddPostEventIcon />Post Event</li>
            </ul>
          </div>
          <AttachmentList attachments={attachments.value} onRemove={this.handleAttachmentRemove} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'add-post-form',
  fields: ['message', 'links', 'attachments', 'eventDate']
}, (state) => ({
  initialValues: { links: [], attachments: [] }
}))(AddPostForm)
