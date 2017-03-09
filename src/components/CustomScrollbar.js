import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { Scrollbars } from 'react-custom-scrollbars'

class CustomScrollbar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    noScrollBar: React.PropTypes.bool
  }

  static defaultProps = {
    noScrollBar: false
  }

  handleRenderTrackHorizontal (props) {
    return (
      <div {...props} className="track-horizontal" />
    )
  }

  handleRenderTrackVertical (props) {
    return (
      <div {...props} className="track-vertical" />
    )
  }

  handleRenderThumbHorizontal (props) {
    return (
      <div {...props} className="thumb-horizontal" />
    )
  }

  handleRenderThumbVertical (props) {
    return (
      <div {...props} className="thumb-vertical" />
    )
  }

  handleRenderView (props) {
    return (
      <div {...props} className="view" />
    )
  }

  render () {
    const scrollBarProps = _.omit(this.props, [ 'children', 'noScrollBar' ])
    return (
      <Scrollbars
        {...scrollBarProps}
        className={classNames('custom-scrollbar', { 'no-scroll-bar': this.props.noScrollBar })}
        renderTrackHorizontal={this.handleRenderTrackHorizontal}
        renderTrackVertical={this.handleRenderTrackVertical}
        renderThumbHorizontal={this.handleRenderThumbHorizontal}
        renderThumbVertical={this.handleRenderThumbVertical}
        renderView={this.handleRenderView}>
        {this.props.children}
      </Scrollbars>
    )
  }
}

export default CustomScrollbar
