import React from 'react'
import { Link } from 'react-router'

require('./sidebar-widget.scss')

class SidebarWidget extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    icon: React.PropTypes.object,
    completeUrl: React.PropTypes.string,
    children: React.PropTypes.object.isRequired
  }

  render () {
    const { title, icon, completeUrl, children } = this.props
    return (
      <div className="sidebar-widget">
        <div className="sidebar-title-bar">
          {completeUrl ? <Link to={completeUrl}>Show all</Link> : null}
          <h4>{icon} {title}</h4>
        </div>
        {children}
      </div>
    )
  }
}

export default SidebarWidget
