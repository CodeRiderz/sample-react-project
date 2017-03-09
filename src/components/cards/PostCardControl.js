import React from 'react'
import classNames from 'classnames'
import { CommentIcon, LikeIcon } from 'components/icons'

function PostCardControl ({ liked, comments, likes, onLike }) {
  return (
    <div className="post-control clearfix">
      <ul className="left-nav list-inline">
        <li>Like</li>
        <li>Comment</li>
      </ul>
      <ul className="right-nav list-inline">
        <li>
          <div className="post-control-button">
            <CommentIcon />
          </div>
          {comments}
        </li>
        <li>
          <div className={classNames('post-control-button pulse', { active: liked })} onClick={onLike}>
            <LikeIcon active={liked} />
          </div>
          {likes}
        </li>
      </ul>
    </div>
  )
}

PostCardControl.prototype.propTypes = {
  liked: React.PropTypes.bool,
  comments: React.PropTypes.number,
  likes: React.PropTypes.number,
  onLike: React.PropTypes.func
}

export default PostCardControl
