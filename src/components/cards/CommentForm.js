import React from 'react'
import { reduxForm } from 'redux-form'
import classNames from 'classnames'
import _ from 'lodash'
import CommentAttachmentField from './CommentAttachmentField'

require('./comment-form.scss')

class CommentForm extends React.Component {
  static propTypes = {
    formKey: React.PropTypes.string,
    fields: React.PropTypes.object,
    values: React.PropTypes.object,
    handleSubmit: React.PropTypes.func.isRequired,
    resetForm: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      multiLine: false
    }
  }

  get handleKeyDown () {
    const { handleSubmit, resetForm } = this.props
    return (e) => {
      if (e.keyCode === 13) {
        if (e.shiftKey === false) {
          e.preventDefault()
          handleSubmit()
          resetForm()
          this.setState({ multiLine: false })
        } else {
          this.setState({ multiLine: true })
        }
      }
    }
  }

  render () {
    const { formKey, handleSubmit, fields: { comment, attachment } } = this.props
    const { multiLine } = this.state
    const textAreaProps = _.omit(comment, ['initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled'])
    const lineCount = textAreaProps.value.split(/\r\n|\r|\n/).length
    return (
      <div className={classNames('comment-form', { 'multi-line': multiLine })}>
        <form onSubmit={handleSubmit}>
          <textarea
            {...textAreaProps}
            placeholder="Add a comment..."
            onKeyDown={this.handleKeyDown}
            className="form-control"
            style={{height: `${lineCount * 20}px`}} />
          <CommentAttachmentField {...attachment} fieldKey={formKey} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'comment-form',
  fields: [ 'comment', 'attachment' ]
})(CommentForm)
