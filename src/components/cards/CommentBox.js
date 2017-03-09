import React from 'react'
import _ from 'lodash'
import CommentItem from './CommentItem'
import { AngleDownIcon } from 'components/icons'

require('./comment-box.scss')

class CommentBox extends React.Component {
  static propTypes = {
    comments: React.PropTypes.array.isRequired,
    onComment: React.PropTypes.func
  }

  static defaultProps = {
    onComment: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  get handleExpand () {
    return () => {
      this.setState({
        collapsed: false
      })
    }
  }

  renderComments () {
    const { comments } = this.props
    const { collapsed } = this.state

    if (collapsed) {
      return (
        <CommentItem {..._.last(comments)} />
      )
    }

    return comments.map((comment, index) => (
      <CommentItem key={`comment-item-${index}`} {...comment} />
    ))
  }

  renderCommentToggle () {
    const { comments } = this.props
    const { collapsed } = this.state

    if (!collapsed || comments.length === 1) return null
    return (
      <div className="comment-show-toggle" onClick={this.handleExpand}>
        {comments.length - 1} more comments <AngleDownIcon />
      </div>
    )
  }

  render () {
    const { comments } = this.props
    if (comments.length === 0) return null

    return (
      <div className="comment-box">
        {this.renderCommentToggle()}
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentBox
