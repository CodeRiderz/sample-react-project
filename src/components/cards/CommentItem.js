import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import classNames from 'classnames'
import AttachmentList from 'components/lists/AttachmentList'
import { LikeIcon } from 'components/icons'

class CommentItem extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    comment_date: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    message: React.PropTypes.string.isRequired,
    attachments: React.PropTypes.array.isRequired,
    likes: React.PropTypes.number.isRequired,
    onComment: React.PropTypes.func
  }

  static defaultProps = {
    onComment: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  get handleLike () {
    const { liked } = this.state
    return () => {
      this.setState({
        liked: !liked
      })
    }
  }

  render () {
    const { user, comment_date, message, attachments, likes } = this.props
    const commentDate = moment(comment_date).fromNow()
    const { liked } = this.state

    return (
      <div className="comment-item">
        <div className="comment-avatar">
          {user.avatar ? <img src={user.avatar} alt={user.fullname} /> : null}
        </div>
        <h5><Link to={user.url}>{user.fullname}</Link></h5>
        <div className="comment-time">{commentDate}</div>
        <div className={classNames('comment-like-icon pulse', { active: liked })}><LikeIcon active={liked} />{likes}</div>
        <p dangerouslySetInnerHTML={{ __html: message.replace(/\r?\n/g, '<br />') }} />
        <AttachmentList attachments={attachments} />
        <div className={classNames('comment-like', { liked })} onClick={this.handleLike}>Like</div>
      </div>
    )
  }
}

export default CommentItem
