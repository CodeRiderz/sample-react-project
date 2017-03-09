import React from 'react'
import moment from 'moment'
import PostCardHeader from './PostCardHeader'
import PostCardControl from './PostCardControl'
import CommentBox from './CommentBox'
import CommentForm from './CommentForm'
import LinkCard from './LinkCard'
import AttachmentList from 'components/lists/AttachmentList'
import PostImageViewer from 'components/viewers/PostImageViewer'
import EventImageViewer from 'components/viewers/EventImageViewer'
import { transformPostMessage } from 'services/factory'

require('./post-card.scss')

class PostCard extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    user: React.PropTypes.object.isRequired,
    date: React.PropTypes.number.isRequired,
    location: React.PropTypes.string.isRequired,
    likes: React.PropTypes.number.isRequired,
    comments: React.PropTypes.array.isRequired,
    children: React.PropTypes.string,
    liked: React.PropTypes.bool,
    links: React.PropTypes.array,
    attachments: React.PropTypes.array,
    images: React.PropTypes.array,
    eventPost: React.PropTypes.object,
    onLike: React.PropTypes.func.isRequired,
    onComment: React.PropTypes.func.isRequired
  }

  get handleLike () {
    const { id, liked, onLike } = this.props
    return () => {
      onLike(id, !liked)
    }
  }

  get handleComment () {
    const { id, onComment } = this.props
    return (values) => {
      onComment(id, values)
    }
  }

  renderLinks () {
    const { links } = this.props
    if (!links) return null
    return links.map((link, index) => (
      <LinkCard
        key={`post-card-link-${index}`}
        id={link.id}
        title={link.title}
        description={link.description}
        url={link.url}
        wide={link.wide}
        thumbnailUrl={link.image}
        />
    ))
  }

  render () {
    const { id, user, date, location, children, likes, comments, attachments, images, liked, eventPost } = this.props
    const postDate = moment(date).fromNow()

    return (
      <div className="post-card">
        <PostCardHeader name={user.fullname} url={user.url} timePosted={postDate} location={location}>
          <p>{transformPostMessage(children)}</p>
          <PostImageViewer images={images} />
          <EventImageViewer event={eventPost} />
          <AttachmentList attachments={attachments} />
        </PostCardHeader>
        <div className="post-card-links">
          {this.renderLinks()}
        </div>
        <PostCardControl likes={likes} comments={comments.length} liked={liked} onLike={this.handleLike} />
        <CommentBox comments={comments} />
        <CommentForm formKey={`comment-form-${id}`} onSubmit={this.handleComment} />
      </div>
    )
  }
}

export default PostCard
