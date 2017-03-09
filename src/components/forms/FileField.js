import React from 'react'
import _ from 'lodash'

class FileField extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.object,
    className: React.PropTypes.string,
    value: React.PropTypes.array,
    onChange: React.PropTypes.func.isRequired,
    multiple: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    multiple: false
  }

  get handleFieldChange () {
    const { value, onChange, multiple } = this.props
    return (e) => {
      e.preventDefault()
      // convert files to an array
      let files
      if (multiple) {
        files = [ ...value, ...e.target.files ]
      } else {
        files = [ ...e.target.files ]
      }
      onChange(files)
    }
  }

  render () {
    const { id, label, className } = this.props
    const inputProps = _.omit(this.props, [
      'fieldKey', 'initialValue', 'value', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled', 'className'
    ])

    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="file" {...inputProps} onChange={this.handleFieldChange} />
      </div>
    )
  }
}

export default FileField
