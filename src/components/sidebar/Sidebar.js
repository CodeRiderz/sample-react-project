import React from 'react'
import CustomScrollbar from 'components/CustomScrollbar'

require('./sidebar.scss')

class Sidebar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <div className="sidebar">
        <CustomScrollbar noScrollBar>
          {this.props.children}
        </CustomScrollbar>
      </div>
    )
  }
}

export default Sidebar
