import React from 'react'

class RootContainer extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default RootContainer
