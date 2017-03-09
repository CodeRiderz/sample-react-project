import React from 'react'
import Header from 'components/header/Header'
import ScreenHeightAdjuster from 'components/enhancer/ScreenHeightAdjuster'

require('./dashboard-view.scss')

class DashboardView extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render () {
    const { className, children } = this.props

    return (
      <ScreenHeightAdjuster className={`dashboard ${className}`}>
        <Header />
        {children}
      </ScreenHeightAdjuster>
    )
  }
}

function MainWrapper ({ children }) {
  return (
    <div className="main-wrapper">{children}</div>
  )
}

MainWrapper.prototype.propTypes = {
  children: React.PropTypes.any
}

DashboardView.MainWrapper = MainWrapper

export default DashboardView
