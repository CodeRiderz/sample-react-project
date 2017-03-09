import React from 'react'
import Button from 'react-bootstrap/lib/Button'

class MenuIcon extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
    count: React.PropTypes.number
  }

  static defaultProps = {
    count: 0
  }

  manageChildren () {
    const { children, count } = this.props
    return React.cloneElement(children, {
      active: count > 0
    })
  }

  render () {
    const { count } = this.props
    return (
      <Button className="menu-icon">
        {count > 0 ? <div className="menu-count">{count}</div> : null}
        {this.manageChildren()}
      </Button>
    )
  }
}

export default MenuIcon
