import React from 'react'

require('./navigation-list.scss')

class NavigationList extends React.Component {
  static propTypes = {
    children: React.PropTypes.array,
    activeKey: React.PropTypes.number,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    onChange: (selectedKey) => { console.debug('NavigationList activeKey changed to: ', selectedKey) }
  }

  manageChildren () {
    const { activeKey, children, onChange } = this.props
    return React.Children.map(children, (child) => (
      React.cloneElement(child, {
        active: child.props.eventKey === activeKey,
        onClick: onChange
      })
    ))
  }

  render () {
    return (
      <ul className="navigation-list">
        {this.manageChildren()}
      </ul>
    )
  }
}

export default NavigationList
