import React from 'react'
import _ from 'lodash'

class ScreenHeightAdjuster extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    stylingHandler: React.PropTypes.func,
    reduceValue: React.PropTypes.number
  }

  static defaultProps = {
    className: '',
    reduceValue: 0,
    stylingHandler: (height) => ({ height })
  }

  constructor (props) {
    super(props)
    this.state = {
      componentHeight: 0
    }
    this.handleResizeEvent = _.debounce(this.handleResize, 100)
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResizeEvent)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResizeEvent)
  }

  get handleResize () {
    const { reduceValue } = this.props
    return () => {
      this.setState({
        componentHeight: window.innerHeight - reduceValue
      })
    }
  }

  render () {
    const { className, children, stylingHandler } = this.props
    const { componentHeight } = this.state
    return (
      <div className={className} style={stylingHandler(componentHeight)}>
        {children}
      </div>
    )
  }
}

export default ScreenHeightAdjuster
