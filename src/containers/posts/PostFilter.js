import React from 'react'
import { reduxForm } from 'redux-form'
import classNames from 'classnames'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import _ from 'lodash'
import { CheckIcon } from 'components/icons'

require('./post-filter.scss')

class PostFilter extends React.Component {
  static propTypes = {
    formKey: React.PropTypes.string,
    label: React.PropTypes.string,
    fields: React.PropTypes.object,
    options: React.PropTypes.string,
    handleChange: React.PropTypes.func,
    multi: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ])
  }

  static defaultProps = {
    multi: false
  }

  constructor (props) {
    super(props)
    this.state = {
      dropDownOpen: false
    }
    this.hoverDelay = null
    this.isMouseHover = false
  }

  get selectHandler () {
    const { multi, fields: { filters } } = this.props
    return (value) => {
      if (multi) {
        const valueIndex = filters.value.indexOf(value)
        if (valueIndex === -1) {
          // add
          filters.onChange([ ...filters.value, value ])
        } else {
          // remove
          filters.onChange(_.without(filters.value, value))
        }
      } else {
        filters.onChange([value])
      }

      this.setState({ dropDownOpen: true })
    }
  }

  getDropDownTitle (filters, children) {
    const selectedFilters = _.filter(children, (child) => (filters.indexOf(child.props.value) > -1))
    if (selectedFilters.length === 0) {
      return 'All'
    }

    return _.map(selectedFilters, (filter) => (filter.props.children)).join(', ')
  }

  get handleDropdownToggle () {
    return (isOpen) => {
      if (!this.isMouseHover) {
        this.setState({ dropDownOpen: isOpen })
      }
    }
  }

  get handleMouseEnter () {
    return () => {
      clearTimeout(this.hoverDelay)
      this.isMouseHover = true
    }
  }

  get handleMouseLeave () {
    return () => {
      this.hoverDelay = setTimeout(() => {
        this.isMouseHover = false
      }, 100)
    }
  }

  manageChildren () {
    const { multi, fields: { filters } } = this.props
    return React.Children.map(this.props.children, (child) => {
      let icon = null
      const isActive = filters.value.indexOf(child.props.value) > -1
      if (multi) {
        icon = <CheckIcon active={isActive} />
      }
      return (
        <MenuItem
          eventKey={child.props.value}
          className={classNames({ 'active': isActive })}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          {child.props.children} {icon}
        </MenuItem>
      )
    })
  }

  render () {
    const { formKey, label, fields: { filters }, children, multi } = this.props
    const { dropDownOpen } = this.state

    return (
      <div className={classNames('post-filter', { multi })}>
        <h5>{label}</h5>
        <DropdownButton
          id={formKey}
          title={this.getDropDownTitle(filters.value, children)}
          onSelect={this.selectHandler}
          onToggle={this.handleDropdownToggle}
          open={dropDownOpen}>
          {this.manageChildren()}
        </DropdownButton>
      </div>
    )
  }
}
export default reduxForm({
  form: 'post-filter-form', fields: [ 'filters' ]
},
  (state) => ({initialValues: { filters: [] }})
)(PostFilter)
