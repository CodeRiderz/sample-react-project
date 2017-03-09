import React from 'react'
import classNames from 'classnames'
import Badge from 'react-bootstrap/lib/Badge'

class NavigationListItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    eventKey: React.PropTypes.number.isRequired,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    newItemCount: React.PropTypes.number
  }

  static defaultProps = {
    onChange: (currentKey) => { console.debug('NavigationListItem eventKey is: ', currentKey) }
  }

  get handleClick () {
    const { eventKey, onClick } = this.props
    return () => {
      onClick(eventKey)
    }
  }

  render () {
    const { children, active, newItemCount } = this.props
    return (
      <li className={classNames(null, { active })}>
        <div onClick={this.handleClick}>
          {children}
        </div>
        <Badge>{newItemCount}</Badge>
      </li>
    )
  }
}

export default NavigationListItem
