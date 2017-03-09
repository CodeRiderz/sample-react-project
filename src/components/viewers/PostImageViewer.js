import React from 'react'
import { connect } from 'react-redux'
import { callModalImage } from 'actions/modalActions'
import { AngleDownIcon } from 'components/icons'
import _ from 'lodash'

require('./post-image-viewer.scss')

const THUMB_MOVE_LENGTH = 5
class PostImageViewer extends React.Component {
  static propTypes = {
    images: React.PropTypes.array,
    callModalImage: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      mainImage: {
        src: '',
        title: ''
      },
      thumbnailStartIndex: 0
    }
  }

  handleCallModal (image) {
    const { callModalImage } = this.props
    return () => {
      callModalImage(image.src, image.title)
    }
  }

  componentWillMount () {
    const { images } = this.props

    if (images) {
      this.setState({
        mainImage: images[0]
      })
    }
  }

  handleThumbMouseEnter (image) {
    return () => {
      this.setState({
        mainImage: image
      })
    }
  }

  get handleThumbMouseLeave () {
    const { images } = this.props
    return () => {
      this.setState({
        mainImage: images[0]
      })
    }
  }

  get moveToNextThumbnails () {
    const { images } = this.props
    const { thumbnailStartIndex } = this.state
    return () => {
      if (images.length > thumbnailStartIndex + THUMB_MOVE_LENGTH) {
        this.setState({
          thumbnailStartIndex: thumbnailStartIndex + THUMB_MOVE_LENGTH
        })
      }
    }
  }

  get moveToPrevThumbnails () {
    const { thumbnailStartIndex } = this.state
    return () => {
      if (thumbnailStartIndex >= THUMB_MOVE_LENGTH) {
        this.setState({
          thumbnailStartIndex: thumbnailStartIndex - THUMB_MOVE_LENGTH
        })
      }
    }
  }

  renderThumbnails (images, start) {
    if (_.isEmpty(images)) return null

    const imageList = images.slice(start, start + THUMB_MOVE_LENGTH).map((image, index) => (
      <li
        key={`image-thumb-${index}`}
        onMouseEnter={this.handleThumbMouseEnter(image)}
        onMouseLeave={this.handleThumbMouseLeave}
        onClick={this.handleCallModal(image)}>
        <img src={image.thumbSrc} alt={image.title} />
      </li>
    ))

    let nextButton = null
    if (images.length > THUMB_MOVE_LENGTH && images.length > start + THUMB_MOVE_LENGTH) {
      nextButton = (
        <div className="next-button" onClick={this.moveToNextThumbnails}>
          <AngleDownIcon />
        </div>
      )
    }

    let prevButton = null
    if (start >= THUMB_MOVE_LENGTH) {
      prevButton = (
        <div className="prev-button" onClick={this.moveToPrevThumbnails}>
          <AngleDownIcon />
        </div>
      )
    }

    return (
      <div className="thumbnails-wrapper">
        <h5>{images.length} Pictures</h5>
        {prevButton}
        <ul className="list-inline post-thumbnails">
          {imageList}
        </ul>
        {nextButton}
      </div>
    )
  }

  render () {
    const { images } = this.props
    const { mainImage, thumbnailStartIndex } = this.state

    if (_.isEmpty(images)) return null

    const thumbnailImages = images.slice(1)

    return (
      <div className="post-image-viewer">
        <div className="main-image" onClick={this.handleCallModal(mainImage)}>
          <img src={mainImage.thumbSrc} alt={mainImage.title} />
        </div>
        {this.renderThumbnails(thumbnailImages, thumbnailStartIndex)}
      </div>
    )
  }
}

export default connect(null, { callModalImage })(PostImageViewer)
