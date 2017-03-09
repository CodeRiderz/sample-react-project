import React from 'react'
import CustomScrollbar from 'components/CustomScrollbar'

class PostScrollFetcher extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    onFetch: React.PropTypes.func
  }

  static defaultProps = {
    onFetch: (next) => { next() }
  }

  constructor (props) {
    super(props)
    this.state = {
      isFetchingData: false
    }
    this.prevTopScroll = true
  }

  get handleFetch () {
    const { onFetch } = this.props
    return () => {
      this.setState({
        isFetchingData: true
      })
      onFetch(() => {
        this.setState({
          isFetchingData: false
        })
      })
    }
  }

  get handleScrollFrame () {
    const { isFetchingData } = this.state
    return (e) => {
      // onScrollDown && scroll space left is <= 200, load next post if no previous request is still running
      if (this.prevTopScroll < e.top && e.scrollHeight * (1 - e.top) <= 200 && !isFetchingData) {
        this.handleFetch()
      }
      this.prevTopScroll = e.top
    }
  }

  render () {
    const { isFetchingData } = this.state
    return (
      <CustomScrollbar onScrollFrame={this.handleScrollFrame} noScrollBar>
        {this.props.children}
        {isFetchingData ? <FetchPreLoader /> : null}
      </CustomScrollbar>
    )
  }
}

function FetchPreLoader () {
  return (
    <div className="dot-loaders">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  )
}

export default PostScrollFetcher
